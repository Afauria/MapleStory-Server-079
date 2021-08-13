package tools;

import database.DatabaseConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import server.MapleItemInformationProvider;

public class FixShopItemsPrice
{
    private final Connection con;
    
    public FixShopItemsPrice() {
        this.con = DatabaseConnection.getConnection();
    }
    
    public static void main(final String[] args) {
        System.setProperty("wzPath", System.getProperty("wzPath"));
        final FixShopItemsPrice i = new FixShopItemsPrice();
        System.out.println("正在加载道具数据......");
        MapleItemInformationProvider.getInstance().load();
        System.out.println("正在读取商店内商品......");
        final List<Integer> list = i.loadFromDB();
        System.out.println("正在处理商店内商品价格......");
        for (final int ii : list) {
            i.changePrice(ii);
        }
        System.out.println("处理商品价格结束。");
    }
    
    private List<Integer> loadFromDB() {
        final List<Integer> shopItemsId = new ArrayList<Integer>();
        try {
            final PreparedStatement ps = this.con.prepareStatement("SELECT itemid FROM shopitems ORDER BY itemid");
            final ResultSet rs = ps.executeQuery();
            int itemId = 0;
            while (rs.next()) {
                if (itemId != rs.getInt("itemid")) {
                    itemId = rs.getInt("itemid");
                    shopItemsId.add(itemId);
                }
            }
            rs.close();
            ps.close();
        }
        catch (SQLException e) {
            System.err.println("无法载入商店");
        }
        return shopItemsId;
    }
    
    private void changePrice(final int itemId) {
        final MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        try {
            final PreparedStatement ps = this.con.prepareStatement("SELECT shopid, price FROM shopitems WHERE itemid = ? ORDER BY price");
            ps.setInt(1, itemId);
            final ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                if (ii.getPrice(itemId) > rs.getLong("price")) {
                    System.out.println("道具: " + MapleItemInformationProvider.getInstance().getName(itemId) + "道具ID: " + itemId + " 商店: " + rs.getInt("shopid") + " 价格: " + rs.getLong("price") + " 新价格:" + (long)ii.getPrice(itemId));
                    final PreparedStatement pp = this.con.prepareStatement("UPDATE shopitems SET price = ? WHERE itemid = ? AND shopid = ?");
                    pp.setLong(1, (long)ii.getPrice(itemId));
                    pp.setInt(2, itemId);
                    pp.setInt(3, rs.getInt("shopid"));
                    pp.execute();
                    pp.close();
                }
            }
            rs.close();
            ps.close();
        }
        catch (SQLException e) {
            System.out.println("處理商品失敗, 道具ID:" + itemId);
        }
    }
}
