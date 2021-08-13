package handling.cashshop.handler;

import client.MapleClient;
import client.inventory.Equip;
import client.inventory.IItem;
import client.inventory.MapleInventoryType;
import constants.GameConstants;
import constants.ServerConstants;
import server.MTSCart;
import server.MTSStorage;
import server.MapleInventoryManipulator;
import server.MapleItemInformationProvider;
import tools.data.input.SeekableLittleEndianAccessor;
import tools.packet.MTSCSPacket;

public class MTSOperation
{
    public static void MTSOperation(final SeekableLittleEndianAccessor slea, final MapleClient c) {
        final MTSCart cart = MTSStorage.getInstance().getCart(c.getPlayer().getId());
        if (slea.available() <= 0L) {
            doMTSPackets(cart, c);
            return;
        }
        final byte op = slea.readByte();
        if (op == 1) {
            final byte invType = slea.readByte();
            if (invType != 1 && invType != 2) {
                c.getSession().write(MTSCSPacket.getMTSFailSell());
                doMTSPackets(cart, c);
                return;
            }
            final int itemid = slea.readInt();
            if (slea.readByte() != 0) {
                c.getSession().write(MTSCSPacket.getMTSFailSell());
                doMTSPackets(cart, c);
                return;
            }
            slea.skip(8);
            short stars = 1;
            short quantity = 1;
            byte slot = 0;
            if (invType == 1) {
                slea.skip(32);
            }
            else {
                stars = slea.readShort();
            }
            slea.readMapleAsciiString();
            if (invType == 1) {
                slea.skip(32);
            }
            else {
                slea.readShort();
                if (GameConstants.is飞镖道具(itemid) || GameConstants.is子弹道具(itemid)) {
                    slea.skip(8);
                }
                slot = (byte)slea.readInt();
                if (GameConstants.is飞镖道具(itemid) || GameConstants.is子弹道具(itemid)) {
                    quantity = stars;
                    slea.skip(4);
                }
                else {
                    quantity = (short)slea.readInt();
                }
            }
            final int price = slea.readInt();
            final MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
            final MapleInventoryType type = GameConstants.getInventoryType(itemid);
            final IItem item = c.getPlayer().getInventory(type).getItem(slot).copy();
            if (ii.isCash(itemid) || quantity <= 0 || item == null || item.getQuantity() <= 0 || item.getItemId() != itemid || item.getUniqueId() > 0 || item.getQuantity() < quantity || price < ServerConstants.MIN_MTS || c.getPlayer().getMeso() < ServerConstants.MTS_MESO || cart.getNotYetSold().size() >= 10 || ii.isDropRestricted(itemid) || ii.isAccountShared(itemid) || item.getExpiration() > -1L || item.getFlag() > 0) {
                c.getSession().write(MTSCSPacket.getMTSFailSell());
                doMTSPackets(cart, c);
                return;
            }
            if (type == MapleInventoryType.EQUIP) {
                final Equip eq = (Equip)item;
                if (eq.getState() > 0 || eq.getEnhance() > 0 || eq.getDurability() > -1) {
                    c.getSession().write(MTSCSPacket.getMTSFailSell());
                    doMTSPackets(cart, c);
                    return;
                }
            }
            if (quantity >= 50 && GameConstants.isUpgradeScroll(item.getItemId())) {
                c.setMonitored(true);
            }
            final long expiration = System.currentTimeMillis() + 604800000L;
            item.setQuantity(quantity);
            MTSStorage.getInstance().addToBuyNow(cart, item, price, c.getPlayer().getId(), c.getPlayer().getName(), expiration);
            MapleInventoryManipulator.removeFromSlot(c, type, slot, quantity, false);
            c.getPlayer().gainMeso(-ServerConstants.MTS_MESO, false);
            c.getSession().write(MTSCSPacket.getMTSConfirmSell());
        }
        else if (op == 4) {
            cart.changeInfo(slea.readInt(), slea.readInt(), slea.readInt());
        }
        else if (op == 7) {
            if (MTSStorage.getInstance().removeFromBuyNow(slea.readInt(), c.getPlayer().getId(), true)) {
                c.getSession().write(MTSCSPacket.getMTSConfirmCancel());
                sendMTSPackets(cart, c, true);
                return;
            }
            c.getSession().write(MTSCSPacket.getMTSFailCancel());
        }
        else if (op == 8) {
            final int id = Integer.MAX_VALUE - slea.readInt();
            if (id >= cart.getInventory().size()) {
                c.getPlayer().dropMessage(1, "Please try it again later.");
                sendMTSPackets(cart, c, true);
                return;
            }
            final IItem item2 = cart.getInventory().get(id);
            if (item2 != null && item2.getQuantity() > 0 && MapleInventoryManipulator.checkSpace(c, item2.getItemId(), item2.getQuantity(), item2.getOwner())) {
                final IItem item_ = item2.copy();
                final short pos = MapleInventoryManipulator.addbyItem(c, item_, true);
                if (pos >= 0) {
                    if (item_.getPet() != null) {
                        item_.getPet().setInventoryPosition(pos);
                        c.getPlayer().addPet(item_.getPet());
                    }
                    cart.removeFromInventory(item2);
                    c.getSession().write(MTSCSPacket.getMTSConfirmTransfer(item_.getQuantity(), pos));
                    sendMTSPackets(cart, c, true);
                    return;
                }
                c.getSession().write(MTSCSPacket.getMTSFailBuy());
            }
            else {
                c.getSession().write(MTSCSPacket.getMTSFailBuy());
            }
        }
        else if (op == 9) {
            final int id = slea.readInt();
            if (MTSStorage.getInstance().checkCart(id, c.getPlayer().getId()) && cart.addToCart(id)) {
                c.getSession().write(MTSCSPacket.addToCartMessage(false, false));
            }
            else {
                c.getSession().write(MTSCSPacket.addToCartMessage(true, false));
            }
        }
        else if (op == 10) {
            final int id = slea.readInt();
            if (cart.getCart().contains(id)) {
                cart.removeFromCart(id);
                c.getSession().write(MTSCSPacket.addToCartMessage(false, true));
            }
            else {
                c.getSession().write(MTSCSPacket.addToCartMessage(true, true));
            }
        }
        else if (op == 16 || op == 17) {
            final MTSStorage.MTSItemInfo mts = MTSStorage.getInstance().getSingleItem(slea.readInt());
            if (mts != null && mts.getCharacterId() != c.getPlayer().getId()) {
                if (c.getPlayer().getCSPoints(1) > mts.getRealPrice()) {
                    if (MTSStorage.getInstance().removeFromBuyNow(mts.getId(), c.getPlayer().getId(), false)) {
                        c.getPlayer().modifyCSPoints(1, -mts.getRealPrice(), false);
                        MTSStorage.getInstance().getCart(mts.getCharacterId()).increaseOwedNX(mts.getPrice());
                        c.getSession().write(MTSCSPacket.getMTSConfirmBuy());
                        sendMTSPackets(cart, c, true);
                        return;
                    }
                    c.getSession().write(MTSCSPacket.getMTSFailBuy());
                }
                else {
                    c.getSession().write(MTSCSPacket.getMTSFailBuy());
                }
            }
            else {
                c.getSession().write(MTSCSPacket.getMTSFailBuy());
            }
        }
        else if (c.getPlayer().isAdmin()) {}
        doMTSPackets(cart, c);
    }
    
    public static void MTSUpdate(final MTSCart cart, final MapleClient c) {
        c.getPlayer().modifyCSPoints(2, MTSStorage.getInstance().getCart(c.getPlayer().getId()).getSetOwedNX(), false);
        c.getSession().write(MTSCSPacket.getMTSWantedListingOver(0, 0));
        doMTSPackets(cart, c);
    }
    
    private static void doMTSPackets(final MTSCart cart, final MapleClient c) {
        sendMTSPackets(cart, c, false);
    }
    
    private static void sendMTSPackets(final MTSCart cart, final MapleClient c, final boolean changed) {
        c.getSession().write(MTSStorage.getInstance().getCurrentMTS(cart));
        c.getSession().write(MTSStorage.getInstance().getCurrentNotYetSold(cart));
        c.getSession().write(MTSStorage.getInstance().getCurrentTransfer(cart, changed));
        c.getSession().write(MTSCSPacket.showMTSCash(c.getPlayer()));
        c.getSession().write(MTSCSPacket.enableCSUse());
        MTSStorage.getInstance().checkExpirations();
    }
}
