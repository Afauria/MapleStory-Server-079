package client.messages.commands;


import client.ISkill;
import client.LoginCrypto;
import client.MapleCharacter;
import client.MapleCharacterUtil;
import client.MapleClient;
import client.MapleDisease;
import client.MapleStat;
import client.SkillFactory;
import client.anticheat.CheatingOffense;
import client.inventory.Equip;
import client.inventory.IItem;
import client.inventory.ItemFlag;
import client.inventory.MapleInventory;
import client.inventory.MapleInventoryIdentifier;
import client.inventory.MapleInventoryType;
import client.inventory.MaplePet;
import client.inventory.MapleRing;
import client.messages.CommandProcessorUtil;
import client.messages.CopyItemInfo;
import constants.GameConstants;
import constants.ServerConstants;
import database.DatabaseConnection;
import handling.channel.ChannelServer;
import handling.login.handler.AutoRegister;
import handling.world.CheaterData;
import handling.world.World;
import handling.world.family.MapleFamily;
import handling.world.guild.MapleGuild;
import org.apache.mina.core.session.IoSession;
import scripting.EventManager;
import scripting.NPCScriptManager;
import scripting.PortalScriptManager;
import scripting.ReactorScriptManager;
import server.CashItemFactory;
import server.MapleInventoryManipulator;
import server.MapleItemInformationProvider;
import server.MaplePortal;
import server.MapleShopFactory;
import server.ShutdownServer;
import server.Timer;
import server.events.MapleEvent;
import server.events.MapleEventType;
import server.events.MapleOxQuizFactory;
import server.life.MapleLifeFactory;
import server.life.MapleMonster;
import server.life.MapleMonsterInformationProvider;
import server.life.MapleNPC;
import server.life.MobSkillFactory;
import server.life.OverrideMonsterStats;
import server.life.PlayerNPC;
import server.maps.MapleMap;
import server.maps.MapleMapObject;
import server.maps.MapleMapObjectType;
import server.maps.MapleReactor;
import server.maps.MapleReactorFactory;
import server.maps.MapleReactorStats;
import server.quest.MapleQuest;
import tools.ArrayMap;
import tools.CPUSampler;
import tools.FileoutputUtil;
import tools.HexTool;
import tools.MaplePacketCreator;
import tools.MockIOSession;
import tools.StringUtil;
import tools.data.output.MaplePacketLittleEndianWriter;
import tools.packet.MobPacket;

import java.awt.Point;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.DateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.concurrent.ScheduledFuture;

public class AdminCommand {
    public static ServerConstants.PlayerGMRank getPlayerLevelRequired() {
        return ServerConstants.PlayerGMRank.ADMIN;
    }

    public static class 开放地图 extends openmap {
    }

    public static class 关闭地图 extends closemap {
    }

    public static class 注册 extends register {
    }

    public static class 满属性 extends maxstats {
    }

    public static class 最小属性 extends Minimumstats {
    }

    public static class 满技能 extends maxSkills {
    }

    public static class 拉全部 extends WarpAllHere {
    }

    public static class 给金币 extends mesoEveryone {
    }

    public static class 给经验 extends ExpEveryone {
    }

    public static class 给所有人点卷 extends CashEveryone {
    }



    public static class 刷新地图 extends ReloadMap {
    }

    public static class 祝福 extends buff {
    }

    public static class 倍率设置 extends setRate {
    }

    public static class 地图代码 extends WhereAmI {
    }

    public static class 刷 extends Item {
    }

    public static class 丢 extends Drop {
    }

    public static class 全部复活 extends HealMap {
    }

    public static class 清怪 extends KillAll {
    }

    public static class 设置人气 extends Fame {
    }

    public static class 清除地板 extends cleardrops {
    }

    public static class 召唤怪物 extends Spawn {
    }

    public static class 计时器 extends Clock {
    }

    public static class 自动注册 extends autoreg {
    }

    public static class 怪物代码 extends mob {
    }

    public static class 封号状态 extends BanStatus {
    }

    public static class 打开NPC extends OpenNpc {
    }

    public static class 打开商店 extends OpenShop {
    }

    public static class Debug extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            c.getPlayer().setDebugMessage(!c.getPlayer().getDebugMessage());
            return 1;
        }
    }

    public static class BanStatus extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                return 0;
            }
            final String name = splitted[1];
            String mac = "";
            String ip = "";
            int acid = 0;
            boolean Systemban = false;
            boolean ACbanned = false;
            boolean IPbanned = false;
            boolean MACbanned = false;
            String reason = null;
            try {
                final Connection con = DatabaseConnection.getConnection();
                PreparedStatement ps = (PreparedStatement) con.prepareStatement("select accountid from characters where name = ?");
                ps.setString(1, name);
                try (final ResultSet rs = ps.executeQuery()) {
                    if (rs.next()) {
                        acid = rs.getInt("accountid");
                    }
                }
                ps = (PreparedStatement) con.prepareStatement("select banned, banreason, macs, Sessionip from accounts where id = ?");
                ps.setInt(1, acid);
                try (final ResultSet rs = ps.executeQuery()) {
                    if (rs.next()) {
                        Systemban = (rs.getInt("banned") == 2);
                        ACbanned = (rs.getInt("banned") == 1 || rs.getInt("banned") == 2);
                        reason = rs.getString("banreason");
                        mac = rs.getString("macs");
                        ip = rs.getString("Sessionip");
                    }
                }
                ps.close();
            } catch (SQLException ex) {
            }
            if (reason == null || reason == "") {
                reason = "?";
            }
            if (c.isBannedIP(ip)) {
                IPbanned = true;
            }
            if (c.isBannedMac(mac)) {
                MACbanned = true;
            }
            c.getPlayer().dropMessage("玩家[" + name + "] 帐号ID[" + acid + "]是否被封锁: " + (ACbanned ? "是" : "否") + (Systemban ? "(系统自动封锁)" : "") + ", 原因: " + reason);
            c.getPlayer().dropMessage("IP: " + ip + " 是否在封锁IP名单: " + (IPbanned ? "是" : "否"));
            c.getPlayer().dropMessage("MAC: " + mac + " 是否在封锁MAC名单: " + (MACbanned ? "是" : "否"));
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!BanStatus <產嘿> - 琩產琌砆玛の").toString();
        }
    }

    public static class OpenNpc extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            NPCScriptManager.getInstance().start(c, Integer.parseInt(splitted[1]));
            return 1;
        }
    }

    public static class OpenShop extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            MapleShopFactory.getInstance().getShop(Integer.parseInt(splitted[1]));
            return 1;
        }
    }

    public static class SavePlayerShops extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            for (final ChannelServer cserv : ChannelServer.getAllInstances()) {
                cserv.closeAllMerchant();
            }
            c.getPlayer().dropMessage(6, "雇佣商人储存完毕.");
            return 1;
        }
    }

    public static class Shutdown extends CommandExecute {
        private static Thread t;

        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            c.getPlayer().dropMessage(6, "关闭服务器...");
            if (Shutdown.t == null || !Shutdown.t.isAlive()) {
                (Shutdown.t = new Thread(ShutdownServer.getInstance())).start();
            } else {
                c.getPlayer().dropMessage(6, "已在执行中...");
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!shutdown - 关闭服务器").toString();
        }

        static {
            Shutdown.t = null;
        }
    }

    public static class ShutdownTime extends CommandExecute {
        private static ScheduledFuture<?> ts;
        private static Thread t;
        private int minutesLeft;

        public ShutdownTime() {
            this.minutesLeft = 0;
        }

        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                return 0;
            }
            this.minutesLeft = Integer.parseInt(splitted[1]);
            c.getPlayer().dropMessage(6, "服务器将在 " + this.minutesLeft + "分钟后关闭. 请尽速关闭精灵商人 并下线.");
            if (ShutdownTime.ts == null && (ShutdownTime.t == null || !ShutdownTime.t.isAlive())) {
                ShutdownTime.t = new Thread(ShutdownServer.getInstance());
                ShutdownTime.ts = Timer.EventTimer.getInstance().register(new Runnable() {
                    @Override
                    public void run() {
                        if (ShutdownTime.this.minutesLeft == 0) {
                            ShutdownServer.getInstance().run();
                            ShutdownTime.t.start();
                            ShutdownTime.ts.cancel(false);
                            return;
                        }
                        final StringBuilder message = new StringBuilder();
                        message.append("[冒险岛公告] 服务器将在 ");
                        message.append(ShutdownTime.this.minutesLeft);
                        message.append("分钟后关闭. 请尽速关闭精灵商人 并下线.");
                        World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(6, message.toString()).getBytes());
                        World.Broadcast.broadcastMessage(MaplePacketCreator.serverMessage(message.toString()).getBytes());
                        for (final ChannelServer cs : ChannelServer.getAllInstances()) {
                            cs.setServerMessage("服务器将于 " + ShutdownTime.this.minutesLeft + " 分钟后开启");
                        }
                        ShutdownTime.this.minutesLeft--;
                    }
                }, 60000L);
            } else {
                c.getPlayer().dropMessage(6, "服务器关闭时间修改为 " + this.minutesLeft + "分钟后，请稍等服务器关闭");
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!shutdowntime <秒数> - 关闭服务器").toString();
        }

        static {
            ShutdownTime.ts = null;
            ShutdownTime.t = null;
        }
    }

    public static class SaveAll extends CommandExecute {
        private int p;

        public SaveAll() {
            this.p = 0;
        }

        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            for (final ChannelServer cserv : ChannelServer.getAllInstances()) {
                final List<MapleCharacter> chrs = cserv.getPlayerStorage().getAllCharactersThreadSafe();
                for (final MapleCharacter chr : chrs) {
                    ++this.p;
                    chr.saveToDB(false, false);
                }
            }
            c.getPlayer().dropMessage("[保存] " + this.p + "个玩家数据保存到数据中.");
            this.p = 0;
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!saveall - 保存所有角色資料").toString();
        }
    }

    public static class LowHP extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            c.getPlayer().getStat().setHp(1);
            c.getPlayer().getStat().setMp(1);
            c.getPlayer().updateSingleStat(MapleStat.HP, 1);
            c.getPlayer().updateSingleStat(MapleStat.MP, 1);
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!lowhp - 血魔归ㄧ").toString();
        }
    }

    public static class Heal extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            c.getPlayer().getStat().setHp(c.getPlayer().getStat().getCurrentMaxHp());
            c.getPlayer().getStat().setMp(c.getPlayer().getStat().getCurrentMaxMp());
            c.getPlayer().updateSingleStat(MapleStat.HP, c.getPlayer().getStat().getCurrentMaxHp());
            c.getPlayer().updateSingleStat(MapleStat.MP, c.getPlayer().getStat().getCurrentMaxMp());
            c.getPlayer().dispelDebuffs();
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!heal - 补满血魔").toString();
        }
    }

    public static class UnbanIP extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                return 0;
            }
            final byte ret_ = MapleClient.unbanIPMacs(splitted[1]);
            if (ret_ == -2) {
                c.getPlayer().dropMessage(6, "[unbanip] SQL 错误.");
            } else if (ret_ == -1) {
                c.getPlayer().dropMessage(6, "[unbanip] 角色不存在.");
            } else if (ret_ == 0) {
                c.getPlayer().dropMessage(6, "[unbanip] No IP or Mac with that character exists!");
            } else if (ret_ == 1) {
                c.getPlayer().dropMessage(6, "[unbanip] IP或Mac已解锁其中一個.");
            } else if (ret_ == 2) {
                c.getPlayer().dropMessage(6, "[unbanip] IP以及Mac已成功解锁.");
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!unbanip <玩家名称> - 解锁玩家").toString();
        }
    }

    public static class TempBan extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            final String name = splitted[1];
            final int ch = World.Find.findChannel(name);
            if (ch <= 0) {
                return 0;
            }
            final MapleCharacter victim = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterByName(name);
            final int reason = Integer.parseInt(splitted[2]);
            final int numDay = Integer.parseInt(splitted[3]);
            final Calendar cal = Calendar.getInstance();
            cal.add(5, numDay);
            final DateFormat df = DateFormat.getInstance();
            if (victim == null) {
                c.getPlayer().dropMessage(6, "[tempban] 找不到目标角色");
            } else {
                victim.tempban("由" + c.getPlayer().getName() + "暂时锁定了", cal, reason, true);
                c.getPlayer().dropMessage(6, "[tempban] " + splitted[1] + " 已成功被暂时锁定至 " + df.format(cal.getTime()));
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!tempban <玩家名称> - 暂时锁定玩家").toString();
        }
    }

    public static class Kill extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            final MapleCharacter player = c.getPlayer();
            if (splitted.length < 2) {
                return 0;
            }
            for (int i = 1; i < splitted.length; ++i) {
                final String name = splitted[1];
                final int ch = World.Find.findChannel(name);
                if (ch <= 0) {
                    return 0;
                }
                final MapleCharacter victim = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterByName(name);
                if (victim == null) {
                    c.getPlayer().dropMessage(6, "[kill] 玩家 " + splitted[i] + " 不存在.");
                } else if (player.allowedToTarget(victim)) {
                    victim.getStat().setHp(0);
                    victim.getStat().setMp(0);
                    victim.updateSingleStat(MapleStat.HP, 0);
                    victim.updateSingleStat(MapleStat.MP, 0);
                }
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!kill <玩家名称1> <玩家名称2> ...  - 杀掉玩家").toString();
        }
    }

    public static class Skill extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                return 0;
            }
            final ISkill skill = SkillFactory.getSkill(Integer.parseInt(splitted[1]));
            byte level = (byte) CommandProcessorUtil.getOptionalIntArg(splitted, 2, 1);
            final byte masterlevel = (byte) CommandProcessorUtil.getOptionalIntArg(splitted, 3, 1);
            if (level > skill.getMaxLevel()) {
                level = skill.getMaxLevel();
            }
            c.getPlayer().changeSkillLevel(skill, level, masterlevel);
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!skill <技能ID> [技能等級] [技能最大等級] ...  - 学习技能").toString();
        }
    }

    public static class Fame extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            final MapleCharacter player = c.getPlayer();
            if (splitted.length < 2) {
                c.getPlayer().dropMessage("!fame <角色名称> <名声> ...  - 名声");
                return 0;
            }
            final String name = splitted[1];
            final int ch = World.Find.findChannel(name);
            if (ch <= 0) {
                return 0;
            }
            final MapleCharacter victim = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterByName(name);
            short fame;
            try {
                fame = Short.parseShort(splitted[2]);
            } catch (NumberFormatException nfe) {
                c.getPlayer().dropMessage(6, "不合法的数字");
                return 0;
            }
            if (victim != null && player.allowedToTarget(victim)) {
                victim.addFame(fame);
                victim.updateSingleStat(MapleStat.FAME, victim.getFame());
            } else {
                c.getPlayer().dropMessage(6, "[fame] 角色不存在");
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!fame <角色名称> <名声> ...  - 名声").toString();
        }
    }

    public static class autoreg extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            c.getPlayer().dropMessage("目前自动注册已经 " + ServerConstants.ChangeAutoReg());
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!autoreg  - 自动注册开关").toString();
        }
    }


    public static class HealMap extends CommandExecute {
        public int execute(MapleClient c, String[] splitted) {
            MapleCharacter player = c.getPlayer();
            for (MapleCharacter mch : player.getMap().getCharacters()) {
                if (mch != null) {
                    mch.getStat().setHp(mch.getStat().getMaxHp());
                    mch.updateSingleStat(MapleStat.HP, mch.getStat().getMaxHp());
                    mch.getStat().setMp(mch.getStat().getMaxMp());
                    mch.updateSingleStat(MapleStat.MP, mch.getStat().getMaxMp());
                    mch.dispelDebuffs();
                }
            }
            return 1;
        }

        public String getMessage() {
            return "!healmap  - 治愈地图上所有的人";
        }
    }

    public static class GodMode extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            final MapleCharacter player = c.getPlayer();
            if (player.isInvincible()) {
                player.setInvincible(false);
                player.dropMessage(6, "无敌已经关闭");
            } else {
                player.setInvincible(true);
                player.dropMessage(6, "无敌已经开启.");
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!godmode  - 无敌开关").toString();
        }
    }

    public static class GiveSkill extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 3) {
                return 0;
            }
            final String name = splitted[1];
            final int ch = World.Find.findChannel(name);
            if (ch <= 0) {
                return 0;
            }
            final MapleCharacter victim = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterByName(name);
            final ISkill skill = SkillFactory.getSkill(Integer.parseInt(splitted[2]));
            byte level = (byte) CommandProcessorUtil.getOptionalIntArg(splitted, 3, 1);
            final byte masterlevel = (byte) CommandProcessorUtil.getOptionalIntArg(splitted, 4, 1);
            if (level > skill.getMaxLevel()) {
                level = skill.getMaxLevel();
            }
            victim.changeSkillLevel(skill, level, masterlevel);
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!giveskill <玩家名称> <技能ID> [技能等級] [技能最大等級] - 给予技能").toString();
        }
    }

    public static class SP extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            c.getPlayer().setRemainingSp(CommandProcessorUtil.getOptionalIntArg(splitted, 1, 1));
            c.sendPacket(MaplePacketCreator.updateSp(c.getPlayer(), false));
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!sp [数量] - 增加SP").toString();
        }
    }

    public static class AP extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            c.getPlayer().setRemainingAp((short) CommandProcessorUtil.getOptionalIntArg(splitted, 1, 1));
            c.getPlayer().updateSingleStat(MapleStat.AVAILABLEAP, CommandProcessorUtil.getOptionalIntArg(splitted, 1, 1));
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!ap [数量] - 增加AP").toString();
        }
    }

    public static class Shop extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            final MapleShopFactory shop = MapleShopFactory.getInstance();
            int shopId;
            try {
                shopId = Integer.parseInt(splitted[1]);
            } catch (NumberFormatException ex) {
                return 0;
            }
            if (shop.getShop(shopId) != null) {
                shop.getShop(shopId).sendShop(c);
            } else {
                c.getPlayer().dropMessage(5, "此商店ID不存在");
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!shop - 开启商店").toString();
        }
    }

    public static class 关键时刻 extends CommandExecute {
        protected static ScheduledFuture<?> ts;

        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 1) {
                return 0;
            }
            if (关键时刻.ts != null) {
                关键时刻.ts.cancel(false);
                c.getPlayer().dropMessage(0, "原定的关键时刻已取消");
            }
            int minutesLeft;
            try {
                minutesLeft = Integer.parseInt(splitted[1]);
            } catch (NumberFormatException ex) {
                return 0;
            }
            if (minutesLeft > 0) {
                关键时刻.ts = Timer.EventTimer.getInstance().schedule(new Runnable() {
                    @Override
                    public void run() {
                        for (final ChannelServer cserv : ChannelServer.getAllInstances()) {
                            for (final MapleCharacter mch : cserv.getPlayerStorage().getAllCharacters()) {
                                if (!c.getPlayer().isGM()) {
                                    NPCScriptManager.getInstance().start(mch.getClient(), 9010010);
                                }
                            }
                        }
                        World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(6, "关键时刻已经开始了!!!").getBytes());
                        World.Broadcast.broadcastMessage(MaplePacketCreator.serverMessage("关键时刻已经开始了!!!").getBytes());
                        关键时刻.ts.cancel(false);
                        关键时刻.ts = null;
                    }
                }, minutesLeft * 60 * 1000);
                c.getPlayer().dropMessage(0, "关键时刻预定已完成");
            } else {
                c.getPlayer().dropMessage(0, "设定的时间必须 > 0。");
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!关键时刻 <时间:分钟> - 关键时刻").toString();
        }

        static {
            关键时刻.ts = null;
        }
    }


    public static class GainMaplePoint extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 3) {
                return 0;
            }
            final int amount = Integer.parseInt(splitted[1]);
            final String name = splitted[2];
            final int ch = World.Find.findChannel(name);
            if (ch <= 0) {
                return 0;
            }
            final MapleCharacter player = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterByName(name);
            if (player == null) {
                return 0;
            }
            player.modifyCSPoints(2, amount, true);
            final String msg = "[GM 密语] GM " + c.getPlayer().getName() + " 给了 " + player.getName() + " 枫叶点数 " + amount + "点";
            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, msg).getBytes());
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!gainmaplepoint <數量> <玩家> - 取得枫叶点数").toString();
        }
    }

    public static class GainPoint extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 3) {
                return 0;
            }
            final int amount = Integer.parseInt(splitted[1]);
            final String name = splitted[2];
            final int ch = World.Find.findChannel(name);
            if (ch <= 0) {
                return 0;
            }
            final MapleCharacter player = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterByName(name);
            if (player == null) {
                return 0;
            }
            player.setPoints(player.getPoints() + amount);
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!gainpoint <數量> <玩家> - 取得Point").toString();
        }
    }

    public static class GainVP extends GainPoint {
    }

    public static class LevelUp extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                c.getPlayer().levelUp();
            } else {
                int up = 0;
                try {
                    up = Integer.parseInt(splitted[1]);
                } catch (NumberFormatException ex) {
                }
                for (int i = 0; i < up; ++i) {
                    c.getPlayer().levelUp();
                }
            }
            c.getPlayer().setExp(0);
            c.getPlayer().updateSingleStat(MapleStat.EXP, 0);
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!levelup - 等級上升").toString();
        }
    }

    public static class UnlockInv extends CommandExecute {
        public int execute(MapleClient c, String[] splitted) {
            ArrayMap<IItem, MapleInventoryType> arrayMap = new ArrayMap();
            boolean add = false;
            if (splitted.length < 2 || splitted[1].equals("全部")) {
                for (MapleInventoryType type : MapleInventoryType.values()) {
                    for (IItem item : c.getPlayer().getInventory(type)) {
                        if (ItemFlag.LOCK.check(item.getFlag())) {
                            item.setFlag((byte) (item.getFlag() - ItemFlag.LOCK.getValue()));
                            add = true;
                            c.getPlayer().reloadC();
                            c.getPlayer().dropMessage(5, "已经解锁");
                        }
                        if (ItemFlag.UNTRADEABLE.check(item.getFlag())) {
                            item.setFlag((byte) (item.getFlag() - ItemFlag.UNTRADEABLE.getValue()));
                            add = true;
                            c.getPlayer().reloadC();
                            c.getPlayer().dropMessage(5, "已经解锁");
                        }
                        if (add)
                            arrayMap.put(item, type);
                        add = false;
                    }
                }
            } else if (splitted[1].equals("已装备道具")) {
                for (IItem item : c.getPlayer().getInventory(MapleInventoryType.EQUIPPED)) {
                    if (ItemFlag.LOCK.check(item.getFlag())) {
                        item.setFlag((byte) (item.getFlag() - ItemFlag.LOCK.getValue()));
                        add = true;
                        c.getPlayer().reloadC();
                        c.getPlayer().dropMessage(5, "已经解锁");
                    }
                    if (ItemFlag.UNTRADEABLE.check(item.getFlag())) {
                        item.setFlag((byte) (item.getFlag() - ItemFlag.UNTRADEABLE.getValue()));
                        add = true;
                        c.getPlayer().reloadC();
                        c.getPlayer().dropMessage(5, "已經解鎖");
                    }
                    if (add)
                        arrayMap.put(item, MapleInventoryType.EQUIP);
                    add = false;
                }
            } else if (splitted[1].equals("武器")) {
                for (IItem item : c.getPlayer().getInventory(MapleInventoryType.EQUIP)) {
                    if (ItemFlag.LOCK.check(item.getFlag())) {
                        item.setFlag((byte) (item.getFlag() - ItemFlag.LOCK.getValue()));
                        add = true;
                        c.getPlayer().reloadC();
                        c.getPlayer().dropMessage(5, "已经解锁");
                    }
                    if (ItemFlag.UNTRADEABLE.check(item.getFlag())) {
                        item.setFlag((byte) (item.getFlag() - ItemFlag.UNTRADEABLE.getValue()));
                        add = true;
                        c.getPlayer().reloadC();
                        c.getPlayer().dropMessage(5, "已经解锁");
                    }
                    if (add)
                        arrayMap.put(item, MapleInventoryType.EQUIP);
                    add = false;
                }
            } else if (splitted[1].equals("消耗")) {
                for (IItem item : c.getPlayer().getInventory(MapleInventoryType.USE)) {
                    if (ItemFlag.LOCK.check(item.getFlag())) {
                        item.setFlag((byte) (item.getFlag() - ItemFlag.LOCK.getValue()));
                        add = true;
                        c.getPlayer().reloadC();
                        c.getPlayer().dropMessage(5, "已经解锁");
                    }
                    if (ItemFlag.UNTRADEABLE.check(item.getFlag())) {
                        item.setFlag((byte) (item.getFlag() - ItemFlag.UNTRADEABLE.getValue()));
                        add = true;
                        c.getPlayer().reloadC();
                        c.getPlayer().dropMessage(5, "已经解锁");
                    }
                    if (add)
                        arrayMap.put(item, MapleInventoryType.USE);
                    add = false;
                }
            } else if (splitted[1].equals("装饰")) {
                for (IItem item : c.getPlayer().getInventory(MapleInventoryType.SETUP)) {
                    if (ItemFlag.LOCK.check(item.getFlag())) {
                        item.setFlag((byte) (item.getFlag() - ItemFlag.LOCK.getValue()));
                        add = true;
                        c.getPlayer().reloadC();
                        c.getPlayer().dropMessage(5, "已经解锁");
                    }
                    if (ItemFlag.UNTRADEABLE.check(item.getFlag())) {
                        item.setFlag((byte) (item.getFlag() - ItemFlag.UNTRADEABLE.getValue()));
                        add = true;
                        c.getPlayer().reloadC();
                        c.getPlayer().dropMessage(5, "已经解锁");
                    }
                    if (add)
                        arrayMap.put(item, MapleInventoryType.SETUP);
                    add = false;
                }
            } else if (splitted[1].equals("其他")) {
                for (IItem item : c.getPlayer().getInventory(MapleInventoryType.ETC)) {
                    if (ItemFlag.LOCK.check(item.getFlag())) {
                        item.setFlag((byte) (item.getFlag() - ItemFlag.LOCK.getValue()));
                        add = true;
                        c.getPlayer().reloadC();
                        c.getPlayer().dropMessage(5, "已经解锁");
                    }
                    if (ItemFlag.UNTRADEABLE.check(item.getFlag())) {
                        item.setFlag((byte) (item.getFlag() - ItemFlag.UNTRADEABLE.getValue()));
                        add = true;
                        c.getPlayer().reloadC();
                        c.getPlayer().dropMessage(5, "已经解锁");
                    }
                    if (add)
                        arrayMap.put(item, MapleInventoryType.ETC);
                    add = false;
                }
            } else if (splitted[1].equals("特殊")) {
                for (IItem item : c.getPlayer().getInventory(MapleInventoryType.CASH)) {
                    if (ItemFlag.LOCK.check(item.getFlag())) {
                        item.setFlag((byte) (item.getFlag() - ItemFlag.LOCK.getValue()));
                        add = true;
                        c.getPlayer().reloadC();
                        c.getPlayer().dropMessage(5, "已经解锁");
                    }
                    if (ItemFlag.UNTRADEABLE.check(item.getFlag())) {
                        item.setFlag((byte) (item.getFlag() - ItemFlag.UNTRADEABLE.getValue()));
                        add = true;
                        c.getPlayer().reloadC();
                        c.getPlayer().dropMessage(5, "已经解锁");
                    }
                    if (add)
                        arrayMap.put(item, MapleInventoryType.CASH);
                    add = false;
                }
            } else {
                return 0;
            }
            for (java.util.Map.Entry<IItem, MapleInventoryType> eq : arrayMap.entrySet())
                c.getPlayer().forceReAddItem_NoUpdate(((IItem) eq.getKey()).copy(), eq.getValue());
            return 1;
        }

        public String getMessage() {
            return "!unlockinv <全部/已装备道具/武器/消耗/装饰/其他/特殊> - 解锁道具";
        }
    }

    public static class Item extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                return 0;
            }
            int itemId = 0;
            try {
                itemId = Integer.parseInt(splitted[1]);
            } catch (NumberFormatException ex) {
            }
            final short quantity = (short) CommandProcessorUtil.getOptionalIntArg(splitted, 2, 1);
            final MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
            if (GameConstants.isPet(itemId)) {
                final MaplePet pet = MaplePet.createPet(itemId, MapleInventoryIdentifier.getInstance());
                if (pet != null) {
                    MapleInventoryManipulator.addById(c, itemId, (short) 1, c.getPlayer().getName(), pet, 90L, (byte) 0);
                }
            } else if (!ii.itemExists(itemId)) {
                c.getPlayer().dropMessage(5, itemId + " - 物品不存在");
            } else {
                byte flag = 0;
                flag |= (byte) ItemFlag.LOCK.getValue();
                IItem item;
                if (GameConstants.getInventoryType(itemId) == MapleInventoryType.EQUIP) {
                    item = ii.randomizeStats((Equip) ii.getEquipById(itemId));
                } else {
                    item = new client.inventory.Item(itemId, (short) 0, quantity, (byte) 0);
                    if (GameConstants.getInventoryType(itemId) != MapleInventoryType.USE) {
                    }
                }
                item.setOwner(c.getPlayer().getName());
                item.setGMLog(c.getPlayer().getName());
                MapleInventoryManipulator.addbyItem(c, item);
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!item <道具ID> - 取得道具").toString();
        }
    }

    public static class serverMsg extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length > 1) {
                final StringBuilder sb = new StringBuilder();
                sb.append(StringUtil.joinStringFrom(splitted, 1));
                for (final ChannelServer ch : ChannelServer.getAllInstances()) {
                    ch.setServerMessage(sb.toString());
                }
                World.Broadcast.broadcastMessage(MaplePacketCreator.serverMessage(sb.toString()).getBytes());
                return 1;
            }
            return 0;
        }

        public String getMessage() {
            return new StringBuilder().append("!servermsg 讯息 - 更改上方黃色公告").toString();
        }
    }


    public static class Letter extends CommandExecute {
        public int execute(MapleClient c, String[] splitted) {
            int start, nstart;
            if (splitted.length < 3) {
                c.getPlayer().dropMessage(6, "指令规则: ");
                return 0;
            }
            if (splitted[1].equalsIgnoreCase("green")) {
                start = 3991026;
                nstart = 3990019;
            } else if (splitted[1].equalsIgnoreCase("red")) {
                start = 3991000;
                nstart = 3990009;
            } else {
                c.getPlayer().dropMessage(6, "未知的顏色!");
                return 1;
            }
            String splitString = StringUtil.joinStringFrom(splitted, 2);
            List<Integer> chars = new ArrayList<>();
            splitString = splitString.toUpperCase();
            for (int i = 0; i < splitString.length(); i++) {
                char chr = splitString.charAt(i);
                if (chr == ' ') {
                    chars.add(Integer.valueOf(-1));
                } else if (chr >= 'A' && chr <= 'Z') {
                    chars.add(Integer.valueOf(chr));
                } else if (chr >= '0' && chr <= '9') {
                    chars.add(Integer.valueOf(chr + 200));
                }
            }
            int w = 32;
            int dStart = (c.getPlayer().getPosition()).x - splitString.length() / 2 * w;
            for (Integer integer : chars) {
                if (integer.intValue() == -1) {
                    dStart += w;
                    continue;
                }
                if (integer.intValue() < 200) {
                    int val = start + integer.intValue() - 65;
                    client.inventory.Item item = new client.inventory.Item(val, (byte) 0, (short) 1);
                    c.getPlayer().getMap().spawnItemDrop((MapleMapObject) c.getPlayer(), c.getPlayer(), (IItem) item, new Point(dStart, (c.getPlayer().getPosition()).y), false, false);
                    dStart += w;
                    continue;
                }
                if (integer.intValue() >= 200 && integer.intValue() <= 300) {
                    int val = nstart + integer.intValue() - 48 - 200;
                    client.inventory.Item item = new client.inventory.Item(val, (byte) 0, (short) 1);
                    c.getPlayer().getMap().spawnItemDrop(c.getPlayer(), c.getPlayer(), item, new Point(dStart, (c.getPlayer().getPosition()).y), false, false);
                    dStart += w;
                }
            }
            return 1;
        }

        public String getMessage() {
            return " !letter <color (green/red)> <word> - 送信";
        }
    }

    public static class Marry extends CommandExecute {
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length < 3)
                return 0;
            int itemId = Integer.parseInt(splitted[2]);
            if (!GameConstants.isEffectRing(itemId)) {
                c.getPlayer().dropMessage(6, "错误的戒指ID.");
            } else {
                String name = splitted[1];
                int ch = World.Find.findChannel(name);
                if (ch <= 0) {
                    c.getPlayer().dropMessage(6, "玩家必须在线");
                    return 0;
                }
                MapleCharacter fff = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterByName(name);
                if (fff == null) {
                    c.getPlayer().dropMessage(6, "玩家必须在线");
                } else {
                    int[] ringID = {MapleInventoryIdentifier.getInstance(), MapleInventoryIdentifier.getInstance()};
                    try {
                        MapleCharacter[] chrz = {fff, c.getPlayer()};
                        for (int i = 0; i < chrz.length; i++) {
                            Equip eq = (Equip) MapleItemInformationProvider.getInstance().getEquipById(itemId);
                            if (eq == null) {
                                c.getPlayer().dropMessage(6, "错误的戒指ID.");
                                return 1;
                            }
                            eq.setUniqueId(ringID[i]);
                            MapleInventoryManipulator.addbyItem(chrz[i].getClient(), eq.copy());
                            chrz[i].dropMessage(6, "成功与  " + chrz[(i == 0) ? 1 : 0].getName() + " 结婚");
                        }
                        MapleRing.addToDB(itemId, c.getPlayer(), fff.getName(), fff.getId(), ringID);
                    } catch (SQLException sQLException) {
                        sQLException.printStackTrace();
                    }
                }
            }
            return 1;
        }

        public String getMessage() {
            return "!marry <玩家名称> <戒指代码> - 结婚";
        }
    }

    public static class ItemCheck extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 3 || splitted[1] == null || splitted[1].equals("") || splitted[2] == null || splitted[2].equals("")) {
                return 0;
            }
            final int item = Integer.parseInt(splitted[2]);
            final String name = splitted[1];
            final int ch = World.Find.findChannel(name);
            if (ch <= 0) {
                c.getPlayer().dropMessage(6, "玩家必须在线");
                return 0;
            }
            final MapleCharacter chr = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterByName(name);
            final int itemamount = chr.getItemQuantity(item, true);
            if (itemamount > 0) {
                c.getPlayer().dropMessage(6, chr.getName() + " 有 " + itemamount + " (" + item + ").");
            } else {
                c.getPlayer().dropMessage(6, chr.getName() + " 并沒有 (" + item + ")");
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!itemcheck <playername> <itemid> - 检查物品").toString();
        }
    }

    public static class MobVac extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            for (final MapleMapObject mmo : c.getPlayer().getMap().getAllMonstersThreadsafe()) {
                final MapleMonster monster = (MapleMonster) mmo;
                c.getPlayer().getMap().broadcastMessage(MobPacket.moveMonster(false, -1, 0, 0, 0, 0, monster.getObjectId(), monster.getPosition(), c.getPlayer().getPosition(), c.getPlayer().getLastRes()));
                monster.setPosition(c.getPlayer().getPosition());
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!mobvac - 全图吸怪").toString();
        }
    }

    public static class Song extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                return 0;
            }
            c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.musicChange(splitted[1]));
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!song - 播放音乐").toString();
        }
    }

    public static class 开启自动活动 extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            final EventManager em = c.getChannelServer().getEventSM().getEventManager("AutomatedEvent");
            if (em != null) {
                em.scheduleRandomEvent();
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!开启自动活动 - 开启自动活动").toString();
        }
    }

    public static class 活动开始 extends CommandExecute {
        private static ScheduledFuture<?> ts;
        private int min;

        public 活动开始() {
            this.min = 1;
        }

        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (c.getChannelServer().getEvent() == c.getPlayer().getMapId()) {
                MapleEvent.setEvent(c.getChannelServer(), false);
                c.getPlayer().dropMessage(5, "已经关闭活动入口，可以使用 !活动开始 來启动。");
                World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(6, "頻道:" + c.getChannel() + "活动目前已经关闭大门口。").getBytes());
                c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.getClock(60));
                活动开始.ts = Timer.EventTimer.getInstance().register(new Runnable() {
                    @Override
                    public void run() {
                        if (活动开始.this.min == 0) {
                            MapleEvent.onStartEvent(c.getPlayer());
                            活动开始.ts.cancel(false);
                            return;
                        }
                        活动开始.this.min--;
                    }
                }, 60000L);
                return 1;
            }
            c.getPlayer().dropMessage(5, "您必须先使用 !选择活动 设定當前頻道的活动，并在当前頻道活动地图里使用。");
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!活动开始 - 活动开始").toString();
        }

        static {
            活动开始.ts = null;
        }
    }

    public static class 关闭活动入口 extends CommandExecute {
        private static boolean tt;

        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (c.getChannelServer().getEvent() == c.getPlayer().getMapId()) {
                MapleEvent.setEvent(c.getChannelServer(), false);
                c.getPlayer().dropMessage(5, "已经关闭活动入口，可以使用 !活动开始 來启动。");
                World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(6, "頻道:" + c.getChannel() + "活动目前已经关闭大门口。").getBytes());
                c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.getClock(60));
                Timer.EventTimer.getInstance().register(new Runnable() {
                    @Override
                    public void run() {
                        关闭活动入口.tt = true;
                    }
                }, 60000L);
                if (关闭活动入口.tt) {
                    MapleEvent.onStartEvent(c.getPlayer());
                }
                return 1;
            }
            c.getPlayer().dropMessage(5, "您必须先使用 !选择活动 设定当前頻道的活动，并在当前頻道活动地图里使用。");
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!关闭活动入口 -关闭活动入口").toString();
        }

        static {
            关闭活动入口.tt = false;
        }
    }

    public static class 选择活动 extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            final MapleEventType type = MapleEventType.getByString(splitted[1]);
            if (type == null) {
                final StringBuilder sb = new StringBuilder("目前开放的活动有: ");
                for (final MapleEventType t : MapleEventType.values()) {
                    sb.append(t.name()).append(",");
                }
                c.getPlayer().dropMessage(5, sb.toString().substring(0, sb.toString().length() - 1));
            }
            final String msg = MapleEvent.scheduleEvent(type, c.getChannelServer());
            if (msg.length() > 0) {
                c.getPlayer().dropMessage(5, msg);
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!选择活动 - 选择活动").toString();
        }
    }



    public static class RemoveItem extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 3) {
                return 0;
            }
            final String name = splitted[1];
            final int id = Integer.parseInt(splitted[2]);
            final int ch = World.Find.findChannel(name);
            if (ch <= 0) {
                c.getPlayer().dropMessage(6, "玩家必须在线");
                return 0;
            }
            final MapleCharacter chr = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterByName(name);
            if (chr == null) {
                c.getPlayer().dropMessage(6, "此玩家并不存在");
            } else {
                chr.removeAll(id);
                c.getPlayer().dropMessage(6, "所有ID为 " + id + " 的道具已经从 " + name + " 身上被移除了");
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!removeitem <角色名称> <物品ID> - 移除玩家身上的道具").toString();
        }
    }

    public static class KillMap extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            for (MapleCharacter map : c.getPlayer().getMap().getCharactersThreadsafe()) {
                if (map != null && !map.isGM()) {
                    map.getStat().setHp(0);
                    map.getStat().setMp(0);
                    map.updateSingleStat(MapleStat.HP, 0);
                    map.updateSingleStat(MapleStat.MP, 0);
                }
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!killmap - 杀掉所有玩家").toString();
        }
    }

    public static class SpeakMega extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            MapleCharacter victim = null;
            if (splitted.length >= 2) {
                victim = c.getChannelServer().getPlayerStorage().getCharacterByName(splitted[1]);
            }
            try {
                World.Broadcast.broadcastSmega(MaplePacketCreator.serverNotice(3, (victim == null) ? c.getChannel() : victim.getClient().getChannel(), (victim == null) ? splitted[1] : (victim.getName() + " : " + StringUtil.joinStringFrom(splitted, 2)), true).getBytes());
            } catch (Exception e) {
                return 0;
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!speakmega [玩家名称] <讯息> - 对某个玩家的頻道进行广播").toString();
        }
    }

    public static class Speak extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            final String name = splitted[1];
            final int ch = World.Find.findChannel(name);
            if (ch <= 0) {
                c.getPlayer().dropMessage(6, "玩家必须在线");
                return 0;
            }
            final MapleCharacter victim = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterByName(name);
            if (victim == null) {
                c.getPlayer().dropMessage(5, "找不到 '" + splitted[1]);
                return 0;
            }
            victim.getMap().broadcastMessage(MaplePacketCreator.getChatText(victim.getId(), StringUtil.joinStringFrom(splitted, 2), victim.isGM(), 0));
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!speak <玩家名称> <讯息> - 对某个玩家发信息").toString();
        }
    }

    public static class SpeakMap extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            for (final MapleCharacter victim : c.getPlayer().getMap().getCharactersThreadsafe()) {
                if (victim.getId() != c.getPlayer().getId()) {
                    victim.getMap().broadcastMessage(MaplePacketCreator.getChatText(victim.getId(), StringUtil.joinStringFrom(splitted, 1), victim.isGM(), 0));
                }
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!speakmap <讯息> - 对目前地图进行发送信息").toString();
        }
    }

    public static class SpeakChannel extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            for (final MapleCharacter victim : c.getChannelServer().getPlayerStorage().getAllCharacters()) {
                if (victim.getId() != c.getPlayer().getId()) {
                    victim.getMap().broadcastMessage(MaplePacketCreator.getChatText(victim.getId(), StringUtil.joinStringFrom(splitted, 1), victim.isGM(), 0));
                }
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!speakchannel <讯息> - 对目前频道进行发送信息").toString();
        }
    }

    public static class SpeakWorld extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            for (final ChannelServer cserv : ChannelServer.getAllInstances()) {
                for (final MapleCharacter victim : cserv.getPlayerStorage().getAllCharacters()) {
                    if (victim.getId() != c.getPlayer().getId()) {
                        victim.getMap().broadcastMessage(MaplePacketCreator.getChatText(victim.getId(), StringUtil.joinStringFrom(splitted, 1), victim.isGM(), 0));
                    }
                }
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!speakchannel <讯息> - 对目前服务器进行传送信息").toString();
        }
    }

    public static class Disease extends CommandExecute {
        public int execute(MapleClient c, String[] splitted) {
            int type;
            if (splitted.length < 3)
                return 0;
            if (splitted[1].equalsIgnoreCase("SEAL")) {
                type = 120;
            } else if (splitted[1].equalsIgnoreCase("DARKNESS")) {
                type = 121;
            } else if (splitted[1].equalsIgnoreCase("WEAKEN")) {
                type = 122;
            } else if (splitted[1].equalsIgnoreCase("STUN")) {
                type = 123;
            } else if (splitted[1].equalsIgnoreCase("CURSE")) {
                type = 124;
            } else if (splitted[1].equalsIgnoreCase("POISON")) {
                type = 125;
            } else if (splitted[1].equalsIgnoreCase("SLOW")) {
                type = 126;
            } else if (splitted[1].equalsIgnoreCase("SEDUCE")) {
                type = 128;
            } else if (splitted[1].equalsIgnoreCase("REVERSE")) {
                type = 132;
            } else if (splitted[1].equalsIgnoreCase("ZOMBIFY")) {
                type = 133;
            } else if (splitted[1].equalsIgnoreCase("POTION")) {
                type = 134;
            } else if (splitted[1].equalsIgnoreCase("SHADOW")) {
                type = 135;
            } else if (splitted[1].equalsIgnoreCase("BLIND")) {
                type = 136;
            } else if (splitted[1].equalsIgnoreCase("FREEZE")) {
                type = 137;
            } else {
                return 0;
            }
            MapleDisease dis = MapleDisease.getBySkill(type);
            if (splitted.length == 4) {
                String name = splitted[2];
                int ch = World.Find.findChannel(name);
                if (ch <= 0) {
                    c.getPlayer().dropMessage(6, "玩家必须在线");
                    return 0;
                }
                MapleCharacter victim = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterByName(name);
                if (victim == null) {
                    c.getPlayer().dropMessage(5, "找不到此玩家");
                } else {
                    victim.setChair(0);
                    victim.getClient().sendPacket(MaplePacketCreator.cancelChair(-1));
                    victim.getMap().broadcastMessage(victim, MaplePacketCreator.showChair(c.getPlayer().getId(), 0), false);
                    victim.giveDebuff(dis, MobSkillFactory.getMobSkill(type, CommandProcessorUtil.getOptionalIntArg(splitted, 3, 1)));
                }
            } else {
                for (MapleCharacter victim : c.getPlayer().getMap().getCharactersThreadsafe()) {
                    victim.setChair(0);
                    victim.getClient().sendPacket(MaplePacketCreator.cancelChair(-1));
                    victim.getMap().broadcastMessage(victim, MaplePacketCreator.showChair(c.getPlayer().getId(), 0), false);
                    victim.giveDebuff(dis, MobSkillFactory.getMobSkill(type, CommandProcessorUtil.getOptionalIntArg(splitted, 2, 1)));
                }
            }
            return 1;
        }

        public String getMessage() {
            return "!disease <SEAL/DARKNESS/WEAKEN/STUN/CURSE/POISON/SLOW/SEDUCE/REVERSE/ZOMBIFY/POTION/SHADOW/BLIND/FREEZE> [角色名称] <状态等级> - 让人得到特殊状态";
        }
    }

    public static class SendAllNote extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length >= 1) {
                final String text = StringUtil.joinStringFrom(splitted, 1);
                for (final MapleCharacter mch : c.getChannelServer().getPlayerStorage().getAllCharacters()) {
                    c.getPlayer().sendNote(mch.getName(), text);
                }
                return 1;
            }
            return 0;
        }

        public String getMessage() {
            return new StringBuilder().append("!sendallnote <文字> 传送Note給目前頻道的所有人").toString();
        }
    }

    public static class giveMeso extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                return 0;
            }
            final String name = splitted[1];
            final int gain = Integer.parseInt(splitted[2]);
            final int ch = World.Find.findChannel(name);
            if (ch <= 0) {
                c.getPlayer().dropMessage(6, "玩家必须在线");
                return 0;
            }
            final MapleCharacter victim = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterByName(name);
            if (victim == null) {
                c.getPlayer().dropMessage(5, "找不到 '" + name);
            } else {
                victim.gainMeso(gain, true);
                final String msg = "[GM 密语] GM " + c.getPlayer().getName() + " 给了 " + victim.getName() + " 金币 " + gain + "点";
                World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, msg).getBytes());
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!gainmeso <名字> <数量> - 給玩家金币").toString();
        }
    }

    public static class CloneMe extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            c.getPlayer().cloneLook();
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!cloneme - 产生克隆体").toString();
        }
    }

    public static class DisposeClones extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            c.getPlayer().dropMessage(6, c.getPlayer().getCloneSize() + "个克隆体消失了.");
            c.getPlayer().disposeClones();
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!disposeclones - 摧毁克隆体").toString();
        }
    }

    public static class Monitor extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                return 0;
            }
            final MapleCharacter target = c.getChannelServer().getPlayerStorage().getCharacterByName(splitted[1]);
            if (target != null) {
                if (target.getClient().isMonitored()) {
                    target.getClient().setMonitored(false);
                    c.getPlayer().dropMessage(5, "Not monitoring " + target.getName() + " anymore.");
                } else {
                    target.getClient().setMonitored(true);
                    c.getPlayer().dropMessage(5, "Monitoring " + target.getName() + ".");
                }
            } else {
                c.getPlayer().dropMessage(5, "找不到该玩家");
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!monitor <玩家> - 记录玩家资讯").toString();
        }
    }

    public static class PermWeather extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (c.getPlayer().getMap().getPermanentWeather() > 0) {
                c.getPlayer().getMap().setPermanentWeather(0);
                c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.removeMapEffect());
                c.getPlayer().dropMessage(5, "地图天气已被禁用.");
            } else {
                final int weather = CommandProcessorUtil.getOptionalIntArg(splitted, 1, 5120000);
                if (!MapleItemInformationProvider.getInstance().itemExists(weather) || weather / 10000 != 512) {
                    c.getPlayer().dropMessage(5, "无效的ID.");
                } else {
                    c.getPlayer().getMap().setPermanentWeather(weather);
                    c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.startMapEffect("", weather, false));
                    c.getPlayer().dropMessage(5, "地图天气已启用.");
                }
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!permweather - 设定天气").toString();
        }
    }

    public static class CharInfo extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                return 0;
            }
            final StringBuilder builder = new StringBuilder();
            final String name = splitted[1];
            final int ch = World.Find.findChannel(name);
            if (ch <= 0) {
                c.getPlayer().dropMessage(6, "玩家必须在线");
                return 0;
            }
            final MapleCharacter other = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterByName(name);
            if (other == null) {
                builder.append("角色不存在");
                c.getPlayer().dropMessage(6, builder.toString());
            } else {
                if (other.getClient().getLastPing() <= 0L) {
                    other.getClient().sendPing();
                }
                builder.append(MapleClient.getLogMessage(other, ""));
                builder.append(" 在 ").append(other.getPosition().x);
                builder.append(" /").append(other.getPosition().y);
                builder.append(" || 血量 : ");
                builder.append(other.getStat().getHp());
                builder.append(" /");
                builder.append(other.getStat().getCurrentMaxHp());
                builder.append(" || 魔量 : ");
                builder.append(other.getStat().getMp());
                builder.append(" /");
                builder.append(other.getStat().getCurrentMaxMp());
                builder.append(" || 物理攻擊力 : ");
                builder.append(other.getStat().getTotalWatk());
                builder.append(" || 魔法攻擊力 : ");
                builder.append(other.getStat().getTotalMagic());
                builder.append(" || 最高攻擊 : ");
                builder.append(other.getStat().getCurrentMaxBaseDamage());
                builder.append(" || 攻擊%數 : ");
                builder.append(other.getStat().dam_r);
                builder.append(" || BOSS攻擊%數 : ");
                builder.append(other.getStat().bossdam_r);
                builder.append(" || 力量 : ");
                builder.append(other.getStat().getStr());
                builder.append(" || 敏捷 : ");
                builder.append(other.getStat().getDex());
                builder.append(" || 智力 : ");
                builder.append(other.getStat().getInt());
                builder.append(" || 幸運 : ");
                builder.append(other.getStat().getLuk());
                builder.append(" || 全部力量 : ");
                builder.append(other.getStat().getTotalStr());
                builder.append(" || 全部敏捷 : ");
                builder.append(other.getStat().getTotalDex());
                builder.append(" || 全部智力 : ");
                builder.append(other.getStat().getTotalInt());
                builder.append(" || 全部幸運 : ");
                builder.append(other.getStat().getTotalLuk());
                builder.append(" || 經驗值 : ");
                builder.append(other.getExp());
                builder.append(" || 組隊狀態 : ");
                builder.append(other.getParty() != null);
                builder.append(" || 交易狀態: ");
                builder.append(other.getTrade() != null);
                builder.append(" || Latency: ");
                builder.append(other.getClient().getLatency());
                builder.append(" || 最後PING: ");
                builder.append(other.getClient().getLastPing());
                builder.append(" || 最後PONG: ");
                builder.append(other.getClient().getLastPong());
                builder.append(" || IP: ");
                builder.append(other.getClient().getSessionIPAddress());
                other.getClient().DebugMessage(builder);
                c.getPlayer().dropMessage(6, builder.toString());
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!charinfo <角色名称> - 查看角色状态").toString();
        }
    }

    public static class whoishere extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            StringBuilder builder = new StringBuilder("在此地图的玩家: ");
            for (final MapleCharacter chr : c.getPlayer().getMap().getCharactersThreadsafe()) {
                if (builder.length() > 150) {
                    builder.setLength(builder.length() - 2);
                    c.getPlayer().dropMessage(6, builder.toString());
                    builder = new StringBuilder();
                }
                builder.append(MapleCharacterUtil.makeMapleReadable(chr.getName()));
                builder.append(", ");
            }
            builder.setLength(builder.length() - 2);
            c.getPlayer().dropMessage(6, builder.toString());
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!whoishere - 查看目前地图上的玩家").toString();
        }
    }

    public static class Cheaters extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            final List<CheaterData> cheaters = World.getCheaters();
            for (int x = cheaters.size() - 1; x >= 0; --x) {
                final CheaterData cheater = cheaters.get(x);
                c.getPlayer().dropMessage(6, cheater.getInfo());
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!cheaters - 查看作弊角色").toString();
        }
    }

    public static class Connected extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            final java.util.Map<Integer, Integer> connected = World.getConnected();
            final StringBuilder conStr = new StringBuilder("已连接的客戶端: ");
            boolean first = true;
            for (final int i : connected.keySet()) {
                if (!first) {
                    conStr.append(", ");
                } else {
                    first = false;
                }
                if (i == 0) {
                    conStr.append("所有: ");
                    conStr.append(connected.get(i));
                } else {
                    conStr.append("頻道 ");
                    conStr.append(i);
                    conStr.append(": ");
                    conStr.append(connected.get(i));
                }
            }
            c.getPlayer().dropMessage(6, conStr.toString());
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!connected - 查看已连线的客戶端").toString();
        }
    }

    public static class ResetQuest extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                return 0;
            }
            MapleQuest.getInstance(Integer.parseInt(splitted[1])).forfeit(c.getPlayer());
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!resetquest <任务ID> - 重置任务").toString();
        }
    }

    public static class StartQuest extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                return 0;
            }
            MapleQuest.getInstance(Integer.parseInt(splitted[1])).start(c.getPlayer(), Integer.parseInt(splitted[2]));
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!startquest <任务ID> - 开始任务").toString();
        }
    }

    public static class CompleteQuest extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                return 0;
            }
            MapleQuest.getInstance(Integer.parseInt(splitted[1])).complete(c.getPlayer(), Integer.parseInt(splitted[2]), Integer.parseInt(splitted[3]));
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!completequest <任务ID> - 完成任务").toString();
        }
    }

    public static class FStartQuest extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                return 0;
            }
            MapleQuest.getInstance(Integer.parseInt(splitted[1])).forceStart(c.getPlayer(), Integer.parseInt(splitted[2]), (splitted.length >= 4) ? splitted[3] : null);
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!fstartquest <任务ID> - 强制开始任务").toString();
        }
    }

    public static class FCompleteQuest extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                return 0;
            }
            MapleQuest.getInstance(Integer.parseInt(splitted[1])).forceComplete(c.getPlayer(), Integer.parseInt(splitted[2]));
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!fcompletequest <任务ID> - 强制完成任务").toString();
        }
    }

    public static class FStartOther extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            MapleQuest.getInstance(Integer.parseInt(splitted[2])).forceStart(c.getChannelServer().getPlayerStorage().getCharacterByName(splitted[1]), Integer.parseInt(splitted[3]), (splitted.length >= 4) ? splitted[4] : null);
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!fstartother - 不知道啥").toString();
        }
    }

    public static class FCompleteOther extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            MapleQuest.getInstance(Integer.parseInt(splitted[2])).forceComplete(c.getChannelServer().getPlayerStorage().getCharacterByName(splitted[1]), Integer.parseInt(splitted[3]));
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!fcompleteother - 不知道啥").toString();
        }
    }

    public static class NearestPortal extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            final MaplePortal portal = c.getPlayer().getMap().findClosestSpawnpoint(c.getPlayer().getPosition());
            c.getPlayer().dropMessage(6, portal.getName() + " id: " + portal.getId() + " script: " + portal.getScriptName());
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!nearestportal - 不知道啥").toString();
        }
    }

    public static class SpawnDebug extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            c.getPlayer().dropMessage(6, c.getPlayer().getMap().spawnDebug());
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!spawndebug - debug怪物出生").toString();
        }
    }

    public static class Threads extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            final Thread[] threads = new Thread[Thread.activeCount()];
            Thread.enumerate(threads);
            String filter = "";
            if (splitted.length > 1) {
                filter = splitted[1];
            }
            for (int i = 0; i < threads.length; ++i) {
                final String tstring = threads[i].toString();
                if (tstring.toLowerCase().contains(filter.toLowerCase())) {
                    c.getPlayer().dropMessage(6, i + ": " + tstring);
                }
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!threads - 查看Threads资讯").toString();
        }
    }

    public static class ShowTrace extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                return 0;
            }
            final Thread[] threads = new Thread[Thread.activeCount()];
            Thread.enumerate(threads);
            final Thread t = threads[Integer.parseInt(splitted[1])];
            c.getPlayer().dropMessage(6, t.toString() + ":");
            for (final StackTraceElement elem : t.getStackTrace()) {
                c.getPlayer().dropMessage(6, elem.toString());
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!showtrace - show trace info").toString();
        }
    }

    public static class FakeRelog extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            final MapleCharacter player = c.getPlayer();
            c.sendPacket(MaplePacketCreator.getCharInfo(player));
            player.getMap().removePlayer(player);
            player.getMap().addPlayer(player);
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!fakerelog - 假登出再登入").toString();
        }
    }

    public static class ToggleOffense extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                return 0;
            }
            try {
                final CheatingOffense co = CheatingOffense.valueOf(splitted[1]);
                co.setEnabled(!co.isEnabled());
            } catch (IllegalArgumentException iae) {
                c.getPlayer().dropMessage(6, "Offense " + splitted[1] + " not found");
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!toggleoffense <Offense> - 开启或关闭CheatOffense").toString();
        }
    }

    public static class toggleDrop extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            c.getPlayer().getMap().toggleDrops();
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!toggledrop - 开启或关闭掉落").toString();
        }
    }

    public static class ToggleMegaphone extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            World.toggleMegaphoneMuteState();
            c.getPlayer().dropMessage(6, "广播是否封锁 : " + (c.getChannelServer().getMegaphoneMuteState() ? "是" : "否"));
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!togglemegaphone - 开启或者关闭广播").toString();
        }
    }

    public static class SpawnReactor extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                return 0;
            }
            int id = 0;
            try {
                id = Integer.parseInt(splitted[1]);
            } catch (NumberFormatException ex) {
            }
            final MapleReactorStats reactorSt = MapleReactorFactory.getReactor(id);
            final MapleReactor reactor = new MapleReactor(reactorSt, id);
            reactor.setDelay(-1);
            reactor.setPosition(c.getPlayer().getPosition());
            c.getPlayer().getMap().spawnReactor(reactor);
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!spawnreactor - 设立Reactor").toString();
        }
    }

    public static class HReactor extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                return 0;
            }
            c.getPlayer().getMap().getReactorByOid(Integer.parseInt(splitted[1])).hitReactor(c);
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!hitreactor - 触碰Reactor").toString();
        }
    }

    public static class DestroyReactor extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                return 0;
            }
            final MapleMap map = c.getPlayer().getMap();
            final List<MapleMapObject> reactors = map.getMapObjectsInRange(c.getPlayer().getPosition(), Double.POSITIVE_INFINITY, Arrays.asList(MapleMapObjectType.REACTOR));
            if (splitted[1].equals("all")) {
                for (final MapleMapObject reactorL : reactors) {
                    final MapleReactor reactor2l = (MapleReactor) reactorL;
                    c.getPlayer().getMap().destroyReactor(reactor2l.getObjectId());
                }
            } else {
                c.getPlayer().getMap().destroyReactor(Integer.parseInt(splitted[1]));
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!drstroyreactor - 移除Reactor").toString();
        }
    }

    public static class ResetReactors extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            c.getPlayer().getMap().resetReactors();
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!resetreactors - 重置此地图所有的Reactor").toString();
        }
    }

    public static class SetReactor extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                return 0;
            }
            c.getPlayer().getMap().setReactorState(Byte.parseByte(splitted[1]));
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!hitreactor - 触碰Reactor").toString();
        }
    }

    public static class cleardrops extends RemoveDrops {
    }

    public static class RemoveDrops extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            c.getPlayer().dropMessage(5, "清除了 " + c.getPlayer().getMap().getNumItems() + " 个掉落物");
            c.getPlayer().getMap().removeDrops();
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!removedrops - 移除地上的物品").toString();
        }
    }


    public static class DropRate extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length > 1) {
                final int rate = Integer.parseInt(splitted[1]);
                if (splitted.length > 2 && splitted[2].equalsIgnoreCase("all")) {
                    for (final ChannelServer cserv : ChannelServer.getAllInstances()) {
                        cserv.setDropRate(rate);
                    }
                } else {
                    c.getChannelServer().setDropRate(rate);
                }
                c.getPlayer().dropMessage(6, "掉宝倍率已改变更为 " + rate + "x");
                return 1;
            }
            return 0;
        }

        public String getMessage() {
            return new StringBuilder().append("!droprate <倍率> - 更改掉落倍率").toString();
        }
    }

    public static class MesoRate extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length > 1) {
                final int rate = Integer.parseInt(splitted[1]);
                if (splitted.length > 2 && splitted[2].equalsIgnoreCase("all")) {
                    for (final ChannelServer cserv : ChannelServer.getAllInstances()) {
                        cserv.setMesoRate(rate);
                    }
                } else {
                    c.getChannelServer().setMesoRate(rate);
                }
                c.getPlayer().dropMessage(6, "金币爆率已改变更为 " + rate + "x");
                return 1;
            }
            return 0;
        }

        public String getMessage() {
            return new StringBuilder().append("!mesorate <倍率> - 更改金钱倍率").toString();
        }
    }

    public static class DCAll extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            int range = -1;
            if (splitted.length < 2) {
                return 0;
            }
            String input = null;
            try {
                input = splitted[1];
            } catch (Exception ex) {
            }
            final String s = splitted[1];
            switch (s) {
                case "m": {
                    range = 0;
                    break;
                }
                case "c": {
                    range = 1;
                    break;
                }
                default: {
                    range = 2;
                    break;
                }
            }
            if (range == -1) {
                range = 1;
            }
            switch (range) {
                case 0: {
                    c.getPlayer().getMap().disconnectAll();
                    break;
                }
                case 1: {
                    c.getChannelServer().getPlayerStorage().disconnectAll();
                    break;
                }
                case 2: {
                    for (final ChannelServer cserv : ChannelServer.getAllInstances()) {
                        cserv.getPlayerStorage().disconnectAll(true);
                    }
                    break;
                }
            }
            String show = "";
            switch (range) {
                case 0: {
                    show = "地图";
                    break;
                }
                case 1: {
                    show = "頻道";
                    break;
                }
                case 2: {
                    show = "世界";
                    break;
                }
            }
            final String msg = "[GM 密语] GM " + c.getPlayer().getName() + "  DC 了 " + show + "玩家";
            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, msg).getBytes());
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!dcall [m|c|w] - 所有玩家断线").toString();
        }
    }

    public static class GoTo extends CommandExecute {
        private static final HashMap<String, Integer> gotomaps;

        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                c.getPlayer().dropMessage(6, "Syntax: !goto <mapname>");
            } else if (GoTo.gotomaps.containsKey(splitted[1])) {
                final MapleMap target = c.getChannelServer().getMapFactory().getMap(GoTo.gotomaps.get(splitted[1]));
                final MaplePortal targetPortal = target.getPortal(0);
                c.getPlayer().changeMap(target, targetPortal);
            } else if (splitted[1].equals("locations")) {
                c.getPlayer().dropMessage(6, "Use !goto <location>. Locations are as follows:");
                final StringBuilder sb = new StringBuilder();
                for (final String s : GoTo.gotomaps.keySet()) {
                    sb.append(s).append(", ");
                }
                c.getPlayer().dropMessage(6, sb.substring(0, sb.length() - 2));
            } else {
                c.getPlayer().dropMessage(6, "Invalid command 指令規則 - Use !goto <location>. For a list of locations, use !goto locations.");
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!goto <名称> - 到某个地图").toString();
        }

        static {
            (gotomaps = new HashMap<String, Integer>()).put("gmmap", 180000000);
            GoTo.gotomaps.put("southperry", 2000000);
            GoTo.gotomaps.put("amherst", 1010000);
            GoTo.gotomaps.put("henesys", 100000000);
            GoTo.gotomaps.put("ellinia", 101000000);
            GoTo.gotomaps.put("perion", 102000000);
            GoTo.gotomaps.put("kerning", 103000000);
            GoTo.gotomaps.put("lithharbour", 104000000);
            GoTo.gotomaps.put("sleepywood", 105040300);
            GoTo.gotomaps.put("florina", 110000000);
            GoTo.gotomaps.put("orbis", 200000000);
            GoTo.gotomaps.put("happyville", 209000000);
            GoTo.gotomaps.put("elnath", 211000000);
            GoTo.gotomaps.put("ludibrium", 220000000);
            GoTo.gotomaps.put("aquaroad", 230000000);
            GoTo.gotomaps.put("leafre", 240000000);
            GoTo.gotomaps.put("mulung", 250000000);
            GoTo.gotomaps.put("herbtown", 251000000);
            GoTo.gotomaps.put("omegasector", 221000000);
            GoTo.gotomaps.put("koreanfolktown", 222000000);
            GoTo.gotomaps.put("newleafcity", 600000000);
            GoTo.gotomaps.put("sharenian", 990000000);
            GoTo.gotomaps.put("pianus", 230040420);
            GoTo.gotomaps.put("horntail", 240060200);
            GoTo.gotomaps.put("chorntail", 240060201);
            GoTo.gotomaps.put("mushmom", 100000005);
            GoTo.gotomaps.put("griffey", 240020101);
            GoTo.gotomaps.put("manon", 240020401);
            GoTo.gotomaps.put("zakum", 280030000);
            GoTo.gotomaps.put("czakum", 280030001);
            GoTo.gotomaps.put("papulatus", 220080001);
            GoTo.gotomaps.put("showatown", 801000000);
            GoTo.gotomaps.put("zipangu", 800000000);
            GoTo.gotomaps.put("ariant", 260000100);
            GoTo.gotomaps.put("nautilus", 120000000);
            GoTo.gotomaps.put("boatquay", 541000000);
            GoTo.gotomaps.put("malaysia", 550000000);
            GoTo.gotomaps.put("taiwan", 740000000);
            GoTo.gotomaps.put("thailand", 500000000);
            GoTo.gotomaps.put("erev", 130000000);
            GoTo.gotomaps.put("ellinforest", 300000000);
            GoTo.gotomaps.put("kampung", 551000000);
            GoTo.gotomaps.put("singapore", 540000000);
            GoTo.gotomaps.put("amoria", 680000000);
            GoTo.gotomaps.put("timetemple", 270000000);
            GoTo.gotomaps.put("pinkbean", 270050100);
            GoTo.gotomaps.put("peachblossom", 700000000);
            GoTo.gotomaps.put("fm", 910000000);
            GoTo.gotomaps.put("freemarket", 910000000);
            GoTo.gotomaps.put("oxquiz", 109020001);
            GoTo.gotomaps.put("ola", 109030101);
            GoTo.gotomaps.put("fitness", 109040000);
            GoTo.gotomaps.put("snowball", 109060000);
            GoTo.gotomaps.put("cashmap", 741010200);
            GoTo.gotomaps.put("golden", 950100000);
            GoTo.gotomaps.put("phantom", 610010000);
            GoTo.gotomaps.put("cwk", 610030000);
            GoTo.gotomaps.put("rien", 140000000);
        }
    }

    public static class KillAll extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            MapleMap map = c.getPlayer().getMap();
            double range = Double.POSITIVE_INFINITY;
            boolean drop = true;
            if (splitted.length > 1) {
                final int irange = 9999;
                if (splitted.length < 2) {
                    range = irange * irange;
                } else {
                    try {
                        map = c.getChannelServer().getMapFactory().getMap(Integer.parseInt(splitted[1]));
                        range = Integer.parseInt(splitted[2]) * Integer.parseInt(splitted[2]);
                    } catch (NumberFormatException ex) {
                    }
                }
                if (splitted.length >= 3) {
                    drop = splitted[3].equalsIgnoreCase("true");
                }
            }
            final List<MapleMapObject> monsters = map.getMapObjectsInRange(c.getPlayer().getPosition(), range, Arrays.asList(MapleMapObjectType.MONSTER));
            for (final MapleMapObject monstermo : map.getMapObjectsInRange(c.getPlayer().getPosition(), range, Arrays.asList(MapleMapObjectType.MONSTER))) {
                final MapleMonster mob = (MapleMonster) monstermo;
                map.killMonster(mob, c.getPlayer(), drop, false, (byte) 1);
                mob.giveExpToCharacter(c.getPlayer(), mob.getExp(), false, 0, (byte) 0, (byte) 0, (byte) 0, 0);
            }
            c.getPlayer().dropMessage("您总共杀了 " + monsters.size() + " 怪物");
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!killall [range] [mapid] - 杀掉所有怪物").toString();
        }
    }

    public static class ResetMobs extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            c.getPlayer().getMap().killAllMonsters(false);
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!resetmobs - 重置地图上所有怪物").toString();
        }
    }

    public static class KillMonster extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                return 0;
            }
            final MapleMap map = c.getPlayer().getMap();
            final double range = Double.POSITIVE_INFINITY;
            for (final MapleMapObject monstermo : map.getMapObjectsInRange(c.getPlayer().getPosition(), range, Arrays.asList(MapleMapObjectType.MONSTER))) {
                final MapleMonster mob = (MapleMonster) monstermo;
                if (mob.getId() == Integer.parseInt(splitted[1])) {
                    mob.damage(c.getPlayer(), mob.getHp(), false);
                }
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!killmonster <mobid> - 杀掉地图上某个怪物").toString();
        }
    }

    public static class KillMonsterByOID extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                return 0;
            }
            final MapleMap map = c.getPlayer().getMap();
            final int targetId = Integer.parseInt(splitted[1]);
            final MapleMonster monster = map.getMonsterByOid(targetId);
            if (monster != null) {
                map.killMonster(monster, c.getPlayer(), false, false, (byte) 1);
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!killmonsterbyoid <moboid> - 杀掉地图上某个怪物").toString();
        }
    }

    public static class HitMonsterByOID extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            final MapleMap map = c.getPlayer().getMap();
            final int targetId = Integer.parseInt(splitted[1]);
            final int damage = Integer.parseInt(splitted[2]);
            final MapleMonster monster = map.getMonsterByOid(targetId);
            if (monster != null) {
                map.broadcastMessage(MobPacket.damageMonster(targetId, damage));
                monster.damage(c.getPlayer(), damage, false);
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!hitmonsterbyoid <moboid> <damage> - 碰撞地图上某個怪物").toString();
        }
    }

    public static class NPC extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            int npcId = 0;
            try {
                npcId = Integer.parseInt(splitted[1]);
            } catch (NumberFormatException ex) {
            }
            final MapleNPC npc = MapleLifeFactory.getNPC(npcId);
            if (npc != null && !npc.getName().equals("MISSINGNO")) {
                npc.setPosition(c.getPlayer().getPosition());
                npc.setCy(c.getPlayer().getPosition().y);
                npc.setRx0(c.getPlayer().getPosition().x + 50);
                npc.setRx1(c.getPlayer().getPosition().x - 50);
                npc.setFh(c.getPlayer().getMap().getFootholds().findBelow(c.getPlayer().getPosition()).getId());
                npc.setCustom(true);
                c.getPlayer().getMap().addMapObject(npc);
                c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.spawnNPC(npc, true));
            } else {
                c.getPlayer().dropMessage(6, "找不到此代码为" + npcId + "的Npc");
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!npc <npcid> - 呼叫出NPC").toString();
        }
    }

    public static class RemoveNPCs extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            c.getPlayer().getMap().resetNPCs();
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!removenpcs - 刪除所有NPC").toString();
        }
    }

    public static class LookNPCs extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            for (final MapleMapObject reactor1l : c.getPlayer().getMap().getAllNPCsThreadsafe()) {
                final MapleNPC reactor2l = (MapleNPC) reactor1l;
                c.getPlayer().dropMessage(5, "NPC: oID: " + reactor2l.getObjectId() + " npcID: " + reactor2l.getId() + " Position: " + reactor2l.getPosition().toString() + " Name: " + reactor2l.getName());
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!looknpcs - 查看所有NPC").toString();
        }
    }

    public static class LookReactors extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            for (final MapleMapObject reactor1l : c.getPlayer().getMap().getAllReactorsThreadsafe()) {
                final MapleReactor reactor2l = (MapleReactor) reactor1l;
                c.getPlayer().dropMessage(5, "Reactor: oID: " + reactor2l.getObjectId() + " reactorID: " + reactor2l.getReactorId() + " Position: " + reactor2l.getPosition().toString() + " State: " + reactor2l.getState() + " Name: " + reactor2l.getName());
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!lookreactors - 查看所有反应堆").toString();
        }
    }

    public static class LookPortals extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            for (final MaplePortal portal : c.getPlayer().getMap().getPortals()) {
                c.getPlayer().dropMessage(5, "Portal: ID: " + portal.getId() + " script: " + portal.getScriptName() + " name: " + portal.getName() + " pos: " + portal.getPosition().x + "," + portal.getPosition().y + " target: " + portal.getTargetMapId() + " / " + portal.getTarget());
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!反应堆 - 查看所有反应堆").toString();
        }
    }

    public static class MakePNPC extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 3) {
                return 0;
            }
            try {
                c.getPlayer().dropMessage(6, "Making playerNPC...");
                final String name = splitted[1];
                final int ch = World.Find.findChannel(name);
                if (ch <= 0) {
                    c.getPlayer().dropMessage(6, "玩家必须在线");
                    return 1;
                }
                final MapleCharacter chhr = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterByName(name);
                if (chhr == null) {
                    c.getPlayer().dropMessage(6, splitted[1] + " is not online");
                } else {
                    final int npcId = Integer.parseInt(splitted[2]);
                    final MapleNPC npc_c = MapleLifeFactory.getNPC(npcId);
                    if (npc_c == null || npc_c.getName().equals("MISSINGNO")) {
                        c.getPlayer().dropMessage(6, "NPC不存在");
                        return 1;
                    }
                    final PlayerNPC npc = new PlayerNPC(chhr, npcId, c.getPlayer().getMap(), c.getPlayer());
                    npc.addToServer();
                    c.getPlayer().dropMessage(6, "Done");
                }
            } catch (NumberFormatException e) {
                c.getPlayer().dropMessage(6, "NPC failed... : " + e.getMessage());
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!玩家npc <playername> <npcid> - 创造玩家NPC").toString();
        }
    }

    public static class MakeOfflineP extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            try {
                c.getPlayer().dropMessage(6, "Making playerNPC...");
                final MapleClient cs = new MapleClient(null, null, (IoSession) new MockIOSession());
                final MapleCharacter chhr = MapleCharacter.loadCharFromDB(MapleCharacterUtil.getIdByName(splitted[1]), cs, false);
                if (chhr == null) {
                    c.getPlayer().dropMessage(6, splitted[1] + " does not exist");
                } else {
                    final PlayerNPC npc = new PlayerNPC(chhr, Integer.parseInt(splitted[2]), c.getPlayer().getMap(), c.getPlayer());
                    npc.addToServer();
                    c.getPlayer().dropMessage(6, "Done");
                }
            } catch (NumberFormatException e) {
                c.getPlayer().dropMessage(6, "NPC failed... : " + e.getMessage());
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!离线npc <charname> <npcid> - 创造离线PNPC").toString();
        }
    }

    public static class DestroyPNPC extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            try {
                c.getPlayer().dropMessage(6, "Destroying playerNPC...");
                final MapleNPC npc = c.getPlayer().getMap().getNPCByOid(Integer.parseInt(splitted[1]));
                if (npc instanceof PlayerNPC) {
                    ((PlayerNPC) npc).destroy(true);
                    c.getPlayer().dropMessage(6, "Done");
                } else {
                    c.getPlayer().dropMessage(6, "!destroypnpc [objectid]");
                }
            } catch (NumberFormatException e) {
                c.getPlayer().dropMessage(6, "NPC failed... : " + e.getMessage());
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!destroypnpc [objectid] - 刪除PNPC").toString();
        }
    }

    public static class MyPos extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            final Point pos = c.getPlayer().getPosition();
            c.getPlayer().dropMessage(6, "X: " + pos.x + " | Y: " + pos.y + " | RX0: " + (pos.x + 50) + " | RX1: " + (pos.x - 50) + " | FH: " + c.getPlayer().getFH() + "| CY:" + pos.y);
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!mypos - 我的位置").toString();
        }
    }

    public static class ReloadDrops extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            MapleMonsterInformationProvider.getInstance().clearDrops();
            ReactorScriptManager.getInstance().clearDrops();
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!重新载入掉宝 - 重新載入掉宝").toString();
        }
    }

    public static class ReloadPortals extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            PortalScriptManager.getInstance().clearScripts();
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!reloadportals - 重新载入进入点").toString();
        }
    }

    public static class ReloadShops extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            MapleShopFactory.getInstance().clear();
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!重新载入商店 - 重新载入商店").toString();
        }
    }

    public static class ReloadEvents extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            for (final ChannelServer instance : ChannelServer.getAllInstances()) {
                instance.reloadEvents();
            }
            return 1;
        }
    }

    public static class ReloadQuests extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            MapleQuest.clearQuests();
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!重新载入任务 - 重新载入任务").toString();
        }
    }

    public static class 召唤永久的怪物 extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            final int npcId = Integer.parseInt(splitted[1]);
            final MapleNPC npc = MapleLifeFactory.getNPC(npcId);
            if (npc != null && !npc.getName().equals("MISSINGNO")) {
                final int xpos = c.getPlayer().getPosition().x;
                final int ypos = c.getPlayer().getPosition().y;
                final int fh = c.getPlayer().getMap().getFootholds().findBelow(c.getPlayer().getPosition()).getId();
                npc.setPosition(c.getPlayer().getPosition());
                npc.setCy(ypos);
                npc.setRx0(xpos);
                npc.setRx1(xpos);
                npc.setFh(fh);
                npc.setCustom(true);
                try {
                    final com.mysql.jdbc.Connection con = (com.mysql.jdbc.Connection) DatabaseConnection.getConnection();
                    try (final PreparedStatement ps = (PreparedStatement) con.prepareStatement("INSERT INTO wz_customlife (dataid, f, hide, fh, cy, rx0, rx1, type, x, y, mid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)")) {
                        ps.setInt(1, npcId);
                        ps.setInt(2, 0);
                        ps.setInt(3, 0);
                        ps.setInt(4, fh);
                        ps.setInt(5, ypos);
                        ps.setInt(6, xpos);
                        ps.setInt(7, xpos);
                        ps.setString(8, "n");
                        ps.setInt(9, xpos);
                        ps.setInt(10, ypos);
                        ps.setInt(11, c.getPlayer().getMapId());
                        ps.executeUpdate();
                    }
                } catch (SQLException e) {
                    c.getPlayer().dropMessage(6, "Failed to save NPC to the database");
                }
                for (final ChannelServer cserv : ChannelServer.getAllInstances()) {
                    cserv.getMapFactory().getMap(c.getPlayer().getMapId()).addMapObject(npc);
                    cserv.getMapFactory().getMap(c.getPlayer().getMapId()).broadcastMessage(MaplePacketCreator.spawnNPC(npc, true));
                }
                c.getPlayer().dropMessage(6, "Please do not reload this map or else the NPC will disappear till the next restart.");
            } else {
                c.getPlayer().dropMessage(6, "查无此 Npc ");
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!永久npc - 建立永久NPC").toString();
        }
    }

    public static class Spawn extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                return 0;
            }
            int mid = 0;
            try {
                mid = Integer.parseInt(splitted[1]);
            } catch (NumberFormatException ex) {
            }
            int num = Math.min(CommandProcessorUtil.getOptionalIntArg(splitted, 2, 1), 500);
            if (num > 1000) {
                num = 1000;
            }
            final Long hp = CommandProcessorUtil.getNamedLongArg(splitted, 1, "hp");
            final Integer exp = CommandProcessorUtil.getNamedIntArg(splitted, 1, "exp");
            final Double php = CommandProcessorUtil.getNamedDoubleArg(splitted, 1, "php");
            final Double pexp = CommandProcessorUtil.getNamedDoubleArg(splitted, 1, "pexp");
            MapleMonster onemob;
            try {
                onemob = MapleLifeFactory.getMonster(mid);
            } catch (RuntimeException e) {
                c.getPlayer().dropMessage(5, "错误: " + e.getMessage());
                return 1;
            }
            long newhp;
            if (hp != null) {
                newhp = hp;
            } else if (php != null) {
                newhp = (long) (onemob.getMobMaxHp() * (php / 100.0));
            } else {
                newhp = onemob.getMobMaxHp();
            }
            int newexp;
            if (exp != null) {
                newexp = exp;
            } else if (pexp != null) {
                newexp = (int) (onemob.getMobExp() * (pexp / 100.0));
            } else {
                newexp = onemob.getMobExp();
            }
            if (newhp < 1L) {
                newhp = 1L;
            }
            final OverrideMonsterStats overrideStats = new OverrideMonsterStats(newhp, onemob.getMobMaxMp(), newexp, false);
            for (int i = 0; i < num; ++i) {
                final MapleMonster mob = MapleLifeFactory.getMonster(mid);
                mob.setHp(newhp);
                mob.setOverrideStats(overrideStats);
                c.getPlayer().getMap().spawnMonsterOnGroundBelow(mob, c.getPlayer().getPosition());
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!spawn <怪物ID> <hp|exp|php||pexp = ?> - 召唤怪物").toString();
        }
    }

    public static class Clock extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                return 0;
            }
            c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.getClock(CommandProcessorUtil.getOptionalIntArg(splitted, 1, 60)));
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!clock <time> 时钟").toString();
        }
    }

    public static class WarpPlayersTo extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            try {
                final MapleMap target = c.getChannelServer().getMapFactory().getMap(Integer.parseInt(splitted[1]));
                final MapleMap from = c.getPlayer().getMap();
                for (final MapleCharacter chr : from.getCharactersThreadsafe()) {
                    chr.changeMap(target, target.getPortal(0));
                }
            } catch (NumberFormatException e) {
                return 0;
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!WarpPlayersTo <maipid> 把所有玩家传送到某个地图").toString();
        }
    }

    public static class LOLCastle extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length != 2) {
                return 0;
            }
            final MapleMap target = c.getChannelServer().getEventSM().getEventManager("lolcastle").getInstance("lolcastle" + splitted[1]).getMapFactory().getMap(990000300, false, false);
            c.getPlayer().changeMap(target, target.getPortal(0));
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!lolcastle level (level = 1-5) - 不知道是啥").toString();
        }
    }

    public static class Map extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                return 0;
            }
            try {
                final MapleMap target = c.getChannelServer().getMapFactory().getMap(Integer.parseInt(splitted[1]));
                if (target == null) {
                    c.getPlayer().dropMessage(5, "地图不存在.");
                    return 1;
                }
                MaplePortal targetPortal = null;
                if (splitted.length > 2) {
                    try {
                        targetPortal = target.getPortal(Integer.parseInt(splitted[2]));
                    } catch (IndexOutOfBoundsException e2) {
                        c.getPlayer().dropMessage(5, "传送点错误.");
                    } catch (NumberFormatException ex) {
                    }
                }
                if (targetPortal == null) {
                    targetPortal = target.getPortal(0);
                }
                c.getPlayer().changeMap(target, targetPortal);
            } catch (NumberFormatException e) {
                c.getPlayer().dropMessage(5, "Error: " + e.getMessage());
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!map <mapid|charname> [portal] - 传送到某地图/人").toString();
        }
    }

    public static class StartProfiling extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            final CPUSampler sampler = CPUSampler.getInstance();
            sampler.addIncluded("client");
            sampler.addIncluded("constants");
            sampler.addIncluded("database");
            sampler.addIncluded("handling");
            sampler.addIncluded("provider");
            sampler.addIncluded("scripting");
            sampler.addIncluded("server");
            sampler.addIncluded("tools");
            sampler.start();
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!startprofiling 开始记录JVM资讯").toString();
        }
    }

    public static class StopProfiling extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            final CPUSampler sampler = CPUSampler.getInstance();
            try {
                String filename = "odinprofile.txt";
                if (splitted.length > 1) {
                    filename = splitted[1];
                }
                final File file = new File(filename);
                if (file.exists()) {
                    c.getPlayer().dropMessage(6, "The entered filename already exists, choose a different one");
                    return 1;
                }
                sampler.stop();
                try (final FileWriter fw = new FileWriter(file)) {
                    sampler.save(fw, 1, 10);
                }
            } catch (IOException e) {
                System.err.println("Error saving profile" + e);
            }
            sampler.reset();
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!stopprofiling <filename> - 取消记录JVM资讯并保存到档案").toString();
        }
    }

    public static class ReloadMap extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            final MapleCharacter player = c.getPlayer();
            if (splitted.length < 2) {
                return 0;
            }
            final boolean custMap = splitted.length >= 2;
            final int mapid = custMap ? Integer.parseInt(splitted[1]) : player.getMapId();
            final MapleMap map = custMap ? player.getClient().getChannelServer().getMapFactory().getMap(mapid) : player.getMap();
            if (player.getClient().getChannelServer().getMapFactory().destroyMap(mapid)) {
                final MapleMap newMap = player.getClient().getChannelServer().getMapFactory().getMap(mapid);
                final MaplePortal newPor = newMap.getPortal(0);
                final LinkedHashSet<MapleCharacter> mcs = new LinkedHashSet<MapleCharacter>(map.getCharacters());
                Label_0139:
                for (final MapleCharacter m : mcs) {
                    int x = 0;
                    while (x < 5) {
                        try {
                            m.changeMap(newMap, newPor);
                            continue Label_0139;
                        } catch (Throwable t) {
                            ++x;
                            continue;
                        }
                    }
                    player.dropMessage("Failed warping " + m.getName() + " to the new map. Skipping...");
                }
                player.dropMessage("地图刷新完毕，如还出现NPC不见请使用此命令.");
                return 1;
            }
            player.dropMessage("Unsuccessful reset!");
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!reloadmap <maipid> - 重置某个地图").toString();
        }
    }

    public static class Respawn extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            c.getPlayer().getMap().respawn(true);
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!respawn - 重新载入地图").toString();
        }
    }

    public static class ResetMap extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            c.getPlayer().getMap().resetFully();
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!resetmap - 重置这个地图").toString();
        }
    }

    public static class Reloadall extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            for (final ChannelServer instance : ChannelServer.getAllInstances()) {
                instance.reloadEvents();
            }
            MapleShopFactory.getInstance().clear();
            PortalScriptManager.getInstance().clearScripts();
            MapleItemInformationProvider.getInstance().load();
            CashItemFactory.getInstance().initialize();
            MapleMonsterInformationProvider.getInstance().clearDrops();
            MapleGuild.loadAll();
            MapleFamily.loadAll();
            MapleLifeFactory.loadQuestCounts();
            MapleQuest.initQuests();
            MapleOxQuizFactory.getInstance();
            ReactorScriptManager.getInstance().clearDrops();
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!Reloadall - 重置全服务器").toString();
        }
    }

    public static class PNPC extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            final int npcId = Integer.parseInt(splitted[1]);
            final MapleNPC npc = MapleLifeFactory.getNPC(npcId);
            if (npc != null && !npc.getName().equals("MISSINGNO")) {
                final int xpos = c.getPlayer().getPosition().x;
                final int ypos = c.getPlayer().getPosition().y;
                final int fh = c.getPlayer().getMap().getFootholds().findBelow(c.getPlayer().getPosition()).getId();
                npc.setPosition(c.getPlayer().getPosition());
                npc.setCy(ypos);
                npc.setRx0(xpos);
                npc.setRx1(xpos);
                npc.setFh(fh);
                npc.setCustom(true);
                try {
                    final com.mysql.jdbc.Connection con = (com.mysql.jdbc.Connection) DatabaseConnection.getConnection();
                    try (PreparedStatement ps = (PreparedStatement) con.prepareStatement("INSERT INTO wz_customlife (dataid, f, hide, fh, cy, rx0, rx1, type, x, y, mid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)")) {
                        ps.setInt(1, npcId);
                        ps.setInt(2, 0);
                        ps.setInt(3, 0);
                        ps.setInt(4, fh);
                        ps.setInt(5, ypos);
                        ps.setInt(6, xpos);
                        ps.setInt(7, xpos);
                        ps.setString(8, "n");
                        ps.setInt(9, xpos);
                        ps.setInt(10, ypos);
                        ps.setInt(11, c.getPlayer().getMapId());
                        ps.executeUpdate();
                    }
                } catch (SQLException e) {
                    c.getPlayer().dropMessage(6, "Failed to save NPC to the database");
                }
                for (final ChannelServer cserv : ChannelServer.getAllInstances()) {
                    cserv.getMapFactory().getMap(c.getPlayer().getMapId()).addMapObject(npc);
                    cserv.getMapFactory().getMap(c.getPlayer().getMapId()).broadcastMessage(MaplePacketCreator.spawnNPC(npc, true));
                }
                c.getPlayer().dropMessage(6, "Please do not reload this map or else the NPC will disappear till the next restart.");
            } else {
                c.getPlayer().dropMessage(6, "查无此 Npc ");
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!永久npc - 建立永久NPC").toString();
        }
    }

    public static class copyInv extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            final MapleCharacter player = c.getPlayer();
            int type = 1;
            if (splitted.length < 2) {
                return 0;
            }
            final String name = splitted[1];
            final int ch = World.Find.findChannel(name);
            if (ch <= 0) {
                c.getPlayer().dropMessage(6, "玩家必须在线");
                return 0;
            }
            final MapleCharacter victim = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterByName(name);
            if (victim == null) {
                player.dropMessage("找不到该玩家");
                return 1;
            }
            try {
                type = Integer.parseInt(splitted[2]);
            } catch (NumberFormatException ex) {
            }
            if (type == 0) {
                for (final IItem ii : victim.getInventory(MapleInventoryType.EQUIPPED).list()) {
                    final IItem n = ii.copy();
                    player.getInventory(MapleInventoryType.EQUIP).addItem(n);
                }
                player.fakeRelog();
            } else {
                MapleInventoryType types = null;
                switch (type) {
                    case 1: {
                        types = MapleInventoryType.EQUIP;
                        break;
                    }
                    case 2: {
                        types = MapleInventoryType.USE;
                        break;
                    }
                    case 3: {
                        types = MapleInventoryType.ETC;
                        break;
                    }
                    case 4: {
                        types = MapleInventoryType.SETUP;
                        break;
                    }
                    case 5: {
                        types = MapleInventoryType.CASH;
                        break;
                    }
                    default: {
                        types = null;
                        break;
                    }
                }
                if (types == null) {
                    c.getPlayer().dropMessage("发生错误");
                    return 1;
                }
                final int[] equip = new int[97];
                for (int i = 1; i < 97; ++i) {
                    if (victim.getInventory(types).getItem((short) i) != null) {
                        equip[i] = i;
                    }
                }
                for (int i = 0; i < equip.length; ++i) {
                    if (equip[i] != 0) {
                        final IItem n2 = victim.getInventory(types).getItem((short) equip[i]).copy();
                        player.getInventory(types).addItem(n2);
                    }
                }
                player.fakeRelog();
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!copyinv 玩家名称 装备栏位(0 = 装备中 1=装备栏 2=消耗栏 3=其他栏 4=装饰栏 5=点数栏)(预设装备栏) - 复制玩家道具").toString();
        }
    }

    public static class RemoveItemOff extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                return 0;
            }
            final com.mysql.jdbc.Connection dcon = (com.mysql.jdbc.Connection) DatabaseConnection.getConnection();
            try {
                int id = 0;
                final int quantity = 0;
                final String name = splitted[2];
                final PreparedStatement ps = (PreparedStatement) dcon.prepareStatement("select * from characters where name = ?");
                ps.setString(1, name);
                try (final ResultSet rs = ps.executeQuery()) {
                    if (rs.next()) {
                        id = rs.getInt("id");
                    }
                }
                if (id == 0) {
                    c.getPlayer().dropMessage(5, "角色不存在资料库。");
                    return 0;
                }
                final PreparedStatement ps2 = (PreparedStatement) dcon.prepareStatement("delete from inventoryitems WHERE itemid = ? and characterid = ?");
                ps2.setInt(1, Integer.parseInt(splitted[1]));
                ps2.setInt(2, id);
                ps2.executeUpdate();
                c.getPlayer().dropMessage(6, "所有ID为 " + splitted[1] + " 的道具" + quantity + "已经从 " + name + " 身上被移除了");
                ps.close();
                ps2.close();
                return 1;
            } catch (SQLException e) {
                return 0;
            }
        }

        public String getMessage() {
            return new StringBuilder().append("!removeitem <物品ID> <角色名稱> - 移除玩家身上的道具").toString();
        }
    }

    public static class ExpEveryone extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                c.getPlayer().dropMessage(splitted[0] + " <经验量>");
                return 0;
            }
            final int gain = Integer.parseInt(splitted[1]);
            int ret = 0;
            for (final ChannelServer cserv : ChannelServer.getAllInstances()) {
                for (final MapleCharacter mch : cserv.getPlayerStorage().getAllCharacters()) {
                    mch.gainExp(gain, true, true, true);
                    ++ret;
                }
            }
            for (final ChannelServer cserv2 : ChannelServer.getAllInstances()) {
                for (final MapleCharacter mch : cserv2.getPlayerStorage().getAllCharacters()) {
                    mch.startMapEffect("管理员发放" + gain + "经验给在线的所有玩家！祝您玩的开心玩的快乐", 5121009);
                }
            }
            c.getPlayer().dropMessage(6, "命令使用成功，当前共有: " + ret + " 个玩家获得: " + gain + " 点的" + " 经验 " + " 总计: " + ret * gain);
            return 1;
        }
    }

    public static class CashEveryone extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length > 2) {
                int type = Integer.parseInt(splitted[1]);
                int quantity = Integer.parseInt(splitted[2]);
                switch (type) {
                    case 1: {
                        type = 1;
                        break;
                    }
                    case 2: {
                        type = 2;
                        break;
                    }
                    default: {
                        c.getPlayer().dropMessage(6, "用法: !给所有人点卷 [点卷类型1-2] [点卷数量][1是点卷.2是抵用卷]");
                        return 0;
                    }
                }
                if (quantity > 10000) {
                    quantity = 10000;
                }
                int ret = 0;
                for (final ChannelServer cserv : ChannelServer.getAllInstances()) {
                    for (final MapleCharacter mch : cserv.getPlayerStorage().getAllCharacters()) {
                        mch.modifyCSPoints(type, quantity);
                        ++ret;
                    }
                }
                final String show = (type == 1) ? "点卷" : "抵用卷";
                for (final ChannelServer cserv2 : ChannelServer.getAllInstances()) {
                    for (final MapleCharacter mch2 : cserv2.getPlayerStorage().getAllCharacters()) {
                        mch2.startMapEffect("管理员发放" + quantity + show + "点卷给在线的所有玩家！祝您的开心玩的快乐", 5121009);
                    }
                }
                c.getPlayer().dropMessage(6, "命令使用成功，当前共有: " + ret + " 个玩家获得: " + quantity + " 点的" + ((type == 1) ? "点券 " : " 抵用券 ") + " 总计: " + ret * quantity);
            } else {
                c.getPlayer().dropMessage(6, "用法: !给所有人点卷 [点卷类型1-2] [点卷数量][1是点卷.2是抵用卷]");
            }
            return 1;
        }
    }

    public static class mesoEveryone extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                c.getPlayer().dropMessage(splitted[0] + " <金币量>");
                return 0;
            }
            int ret = 0;
            final int gain = Integer.parseInt(splitted[1]);
            for (final MapleCharacter mch : c.getChannelServer().getPlayerStorage().getAllCharactersThreadSafe()) {
                mch.gainMeso(gain, true);
                ++ret;
            }
            for (final ChannelServer cserv1 : ChannelServer.getAllInstances()) {
                for (final MapleCharacter mch2 : cserv1.getPlayerStorage().getAllCharacters()) {
                    mch2.startMapEffect("管理员发放" + gain + "冒险币给在线的所有玩家！祝您玩的开心玩的快乐", 5121009);
                }
            }
            c.getPlayer().dropMessage(6, "命令使用成功，当前共有: " + ret + " 个玩家获得: " + gain + " 冒险币 " + " 总计: " + ret * gain);
            return 1;
        }
    }

    public static class setRate extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            final MapleCharacter mc;
            final MapleCharacter player = mc = c.getPlayer();
            if (splitted.length > 2) {
                final int arg = Integer.parseInt(splitted[2]);
                final int seconds = Integer.parseInt(splitted[3]);
                final int mins = Integer.parseInt(splitted[4]);
                final int hours = Integer.parseInt(splitted[5]);
                final int time = seconds + mins * 60 + hours * 60 * 60;
                boolean bOk = true;
                if (splitted[1].equals("经验")) {
                    if (arg <= 50) {
                        for (final ChannelServer cservs : ChannelServer.getAllInstances()) {
                            cservs.setExpRate(arg);
                            cservs.broadcastPacket(MaplePacketCreator.serverNotice(6, "经验倍率已经成功修改为 " + arg + "倍。祝大家游戏开心.经验倍率将在时间到后自动更正！"));
                        }
                    } else {
                        mc.dropMessage("操作已被系统限制。");
                    }
                } else if (splitted[1].equals("爆率")) {
                    if (arg <= 5) {
                        for (final ChannelServer cservs : ChannelServer.getAllInstances()) {
                            cservs.setDropRate(arg);
                            cservs.broadcastPacket(MaplePacketCreator.serverNotice(6, "爆率倍率已经成功修改为 " + arg + "倍。祝大家游戏开心.经验倍率将在时间到后自动更正！！"));
                        }
                    } else {
                        mc.dropMessage("操作已被系统限制。");
                    }
                } else if (splitted[1].equals("金币")) {
                    if (arg <= 5) {
                        for (final ChannelServer cservs : ChannelServer.getAllInstances()) {
                            cservs.setMesoRate(arg);
                            cservs.broadcastPacket(MaplePacketCreator.serverNotice(6, "金币倍率已经成功修改为 " + arg + "倍。祝大家游戏开心.经验倍率将在时间到后自动更正！！"));
                        }
                    } else {
                        mc.dropMessage("操作已被系统限制。");
                    }
                } else if (splitted[1].equalsIgnoreCase("boss爆率")) {
                    if (arg <= 5) {
                        for (final ChannelServer cservs : ChannelServer.getAllInstances()) {
                            cservs.setBossDropRate(arg);
                            cservs.broadcastPacket(MaplePacketCreator.serverNotice(6, "BOSS掉宝已经成功修改为 " + arg + "倍。祝大家游戏开心.经验倍率将在时间到后自动更正！！"));
                        }
                    } else {
                        mc.dropMessage("操作已被系统限制。");
                    }
                } else if (splitted[1].equals("宠物经验")) {
                    if (arg > 5) {
                        mc.dropMessage("操作已被系统限制。");
                    }
                } else {
                    bOk = false;
                }
                if (bOk) {
                    final String rate = splitted[1];
                    World.scheduleRateDelay(rate, time);
                } else {
                    mc.dropMessage("使用方法: !倍率设置 <exp经验|drop爆率|meso金币|bossboss爆率|pet> <类> <秒> <分> <时>");
                }
            } else {
                mc.dropMessage("使用方法: !倍率设置 <exp经验|drop爆率|meso金币|bossboss爆率|pet> <类> <秒> <分> <时>");
            }
            return 1;
        }
    }

    public static class WarpAllHere extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            for (final ChannelServer CS : ChannelServer.getAllInstances()) {
                for (final MapleCharacter mch : CS.getPlayerStorage().getAllCharactersThreadSafe()) {
                    if (mch.getMapId() != c.getPlayer().getMapId()) {
                        mch.changeMap(c.getPlayer().getMap(), c.getPlayer().getPosition());
                    }
                    if (mch.getClient().getChannel() != c.getPlayer().getClient().getChannel()) {
                        mch.changeChannel(c.getPlayer().getClient().getChannel());
                    }
                }
            }
            return 1;
        }

        public String getMessage() {
            return new StringBuilder().append("!WarpAllHere 把所有玩家传送到这里").toString();
        }
    }

    public static class maxSkills extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            final MapleCharacter player = c.getPlayer();
            player.maxSkills();
            return 1;
        }
    }

    public static class Drop extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            if (splitted.length < 2) {
                return 0;
            }
            int itemId = 0;
            try {
                itemId = Integer.parseInt(splitted[1]);
            } catch (NumberFormatException ex) {
                ex.printStackTrace();
            }
            final short quantity = (short) CommandProcessorUtil.getOptionalIntArg(splitted, 2, 1);
            final MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
            if (GameConstants.isPet(itemId)) {
                c.getPlayer().dropMessage(5, "宠物请到购物商城购买.");
            } else if (!ii.itemExists(itemId)) {
                c.getPlayer().dropMessage(5, itemId + " - 物品不存在");
            } else {
                IItem toDrop;
                if (GameConstants.getInventoryType(itemId) == MapleInventoryType.EQUIP) {
                    toDrop = ii.randomizeStats((Equip) ii.getEquipById(itemId));
                } else {
                    toDrop = new client.inventory.Item(itemId, (short) 0, quantity, (byte) 0);
                }
                toDrop.setGMLog(c.getPlayer().getName());
                c.getPlayer().getMap().spawnItemDrop(c.getPlayer(), c.getPlayer(), toDrop, c.getPlayer().getPosition(), true, true);
            }
            return 1;
        }
    }

    public static class buff extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            final MapleCharacter player = c.getPlayer();
            SkillFactory.getSkill(9001002).getEffect(1).applyTo(player);
            SkillFactory.getSkill(9001003).getEffect(1).applyTo(player);
            SkillFactory.getSkill(9001008).getEffect(1).applyTo(player);
            SkillFactory.getSkill(9001001).getEffect(1).applyTo(player);
            return 1;
        }
    }

    public static class maxstats extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            final MapleCharacter player = c.getPlayer();
            player.getStat().setMaxHp((short) 30000);
            player.getStat().setMaxMp((short) 30000);
            player.getStat().setStr((short) 32767);
            player.getStat().setDex((short) 32767);
            player.getStat().setInt((short) 32767);
            player.getStat().setLuk((short) 32767);
            player.updateSingleStat(MapleStat.MAXHP, 30000);
            player.updateSingleStat(MapleStat.MAXMP, 30000);
            player.updateSingleStat(MapleStat.STR, 32767);
            player.updateSingleStat(MapleStat.DEX, 32767);
            player.updateSingleStat(MapleStat.INT, 32767);
            player.updateSingleStat(MapleStat.LUK, 32767);
            return 1;
        }
    }

    public static class Minimumstats extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            final MapleCharacter player = c.getPlayer();
            player.getStat().setMaxHp((short) 50);
            player.getStat().setMaxMp((short) 50);
            player.getStat().setStr((short) 4);
            player.getStat().setDex((short) 4);
            player.getStat().setInt((short) 4);
            player.getStat().setLuk((short) 4);
            player.updateSingleStat(MapleStat.MAXHP, 50);
            player.updateSingleStat(MapleStat.MAXMP, 50);
            player.updateSingleStat(MapleStat.STR, 4);
            player.updateSingleStat(MapleStat.DEX, 4);
            player.updateSingleStat(MapleStat.INT, 4);
            player.updateSingleStat(MapleStat.LUK, 4);
            return 1;
        }
    }

    public static class WhereAmI extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            c.getPlayer().dropMessage(5, "目前地图 " + c.getPlayer().getMap().getId() + "坐标 (" + String.valueOf(c.getPlayer().getPosition().x) + " , " + String.valueOf(c.getPlayer().getPosition().y) + ")");
            return 1;
        }
    }

    public static class Packet extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            final MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();
            final int packetheader = Integer.parseInt(splitted[1]);
            String packet_in = " 00 00 00 00 00 00 00 00 00 ";
            if (splitted.length > 2) {
                packet_in = StringUtil.joinStringFrom(splitted, 2);
            }
            mplew.writeShort(packetheader);
            mplew.write(HexTool.getByteArrayFromHexString(packet_in));
            mplew.writeZeroBytes(20);
            c.getSession().write(mplew.getPacket());
            c.getPlayer().dropMessage(packetheader + "已传送封包[" + mplew.getPacket().getBytes().length + "] : " + mplew.toString());
            return 1;
        }
    }

    public static class mob extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            MapleMonster monster = null;
            for (final MapleMapObject monstermo : c.getPlayer().getMap().getMapObjectsInRange(c.getPlayer().getPosition(), 100000.0, Arrays.asList(MapleMapObjectType.MONSTER))) {
                monster = (MapleMonster) monstermo;
                if (monster.isAlive()) {
                    c.getPlayer().dropMessage(6, "怪物 " + monster.toString());
                }
            }
            if (monster == null) {
                c.getPlayer().dropMessage(6, "找不到怪物");
            }
            return 1;
        }
    }

    public static class register extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            Connection con = null;
            String acc = null;
            String password = null;
            try {
                acc = splitted[1];
                password = splitted[2];
            } catch (Exception ex3) {
                ex3.printStackTrace();
            }
            if (acc == null || password == null) {
                c.getPlayer().dropMessage("账号或密码异常");
                return 0;
            }
            final boolean ACCexist = AutoRegister.getAccountExists(acc);
            if (ACCexist) {
                c.getPlayer().dropMessage("帐号已被使用");
                return 0;
            }
            if (acc.length() >= 12) {
                c.getPlayer().dropMessage("密码长度过长");
                return 0;
            }
            try {
                con = DatabaseConnection.getConnection();
            } catch (Exception ex) {
                System.out.println(ex);
                return 0;
            }
            try (final PreparedStatement ps = (PreparedStatement) con.prepareStatement("INSERT INTO accounts (name, password) VALUES (?, ?)")) {
                ps.setString(1, acc);
                ps.setString(2, LoginCrypto.hexSha1(password));
                ps.executeUpdate();
                ps.close();
            } catch (SQLException ex2) {
                System.out.println(ex2);
                return 0;
            }
            c.getPlayer().dropMessage("[注册完成]账号: " + acc + " 密码: " + password);
            return 1;
        }
    }

    public static class openmap extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            int mapid = 0;
            String input = null;
            final MapleMap map = null;
            if (splitted.length < 2) {
                c.getPlayer().dropMessage(splitted[0] + " - 开放地图");
                return 0;
            }
            try {
                input = splitted[1];
                mapid = Integer.parseInt(input);
            } catch (NumberFormatException ex) {
            }
            for (final ChannelServer cserv : ChannelServer.getAllInstances()) {
                cserv.getMapFactory().HealMap(mapid);
            }
            return 1;
        }
    }

    public static class closemap extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            int mapid = 0;
            String input = null;
            final MapleMap map = null;
            if (splitted.length < 2) {
                c.getPlayer().dropMessage(splitted[0] + " - 关闭地图");
                return 0;
            }
            try {
                input = splitted[1];
                mapid = Integer.parseInt(input);
            } catch (NumberFormatException ex) {
            }
            if (c.getChannelServer().getMapFactory().getMap(mapid) == null) {
                c.getPlayer().dropMessage("地图不存在");
                return 0;
            }
            for (final ChannelServer cserv : ChannelServer.getAllInstances()) {
                cserv.getMapFactory().destroyMap(mapid, true);
            }
            return 1;
        }
    }

    public static class reloadcpq extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            c.getPlayer().getMap().reloadCPQ();
            c.getPlayer().dropMessage("嘉年华地图更新成功");
            return 1;
        }
    }

    public static class 检测复制 extends CommandExecute {
        @Override
        public int execute(final MapleClient c, final String[] splitted) {
            final MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
            final List<String> msgs = new ArrayList<String>();
            final java.util.Map<Integer, CopyItemInfo> checkItems = new LinkedHashMap<Integer, CopyItemInfo>();
            for (final ChannelServer cserv : ChannelServer.getAllInstances()) {
                for (final MapleCharacter player : cserv.getPlayerStorage().getAllCharacters()) {
                    if (player != null && player.getMap() != null) {
                        MapleInventory equip = player.getInventory(MapleInventoryType.EQUIP);
                        for (final IItem item : equip.list()) {
                            if (item.getEquipOnlyId() > 0) {
                                CopyItemInfo ret = new CopyItemInfo(item.getItemId(), player.getId(), player.getName());
                                if (checkItems.containsKey(item.getEquipOnlyId())) {
                                    ret = checkItems.get(item.getEquipOnlyId());
                                    if (ret.itemId != item.getItemId()) {
                                        continue;
                                    }
                                    if (ret.isFirst()) {
                                        ret.setFirst(false);
                                        msgs.add("角色: " + StringUtil.getRightPaddedStr(ret.name, ' ', 13) + " 角色ID: " + StringUtil.getRightPaddedStr(String.valueOf(ret.chrId), ' ', 6) + " 道具: " + ret.itemId + " - " + ii.getName(ret.itemId) + " 唯一ID: " + item.getEquipOnlyId());
                                    } else {
                                        msgs.add("角色: " + StringUtil.getRightPaddedStr(player.getName(), ' ', 13) + " 角色ID: " + StringUtil.getRightPaddedStr(String.valueOf(player.getId()), ' ', 6) + " 道具: " + item.getItemId() + " - " + ii.getName(item.getItemId()) + " 唯一ID: " + item.getEquipOnlyId());
                                    }
                                } else {
                                    checkItems.put(item.getEquipOnlyId(), ret);
                                }
                            }
                        }
                        equip = player.getInventory(MapleInventoryType.EQUIPPED);
                        for (final IItem item : equip.list()) {
                            if (item.getEquipOnlyId() > 0) {
                                CopyItemInfo ret = new CopyItemInfo(item.getItemId(), player.getId(), player.getName());
                                if (checkItems.containsKey(item.getEquipOnlyId())) {
                                    ret = checkItems.get(item.getEquipOnlyId());
                                    if (ret.itemId != item.getItemId()) {
                                        continue;
                                    }
                                    if (ret.isFirst()) {
                                        ret.setFirst(false);
                                        msgs.add("角色: " + StringUtil.getRightPaddedStr(ret.name, ' ', 13) + " 角色ID: " + StringUtil.getRightPaddedStr(String.valueOf(ret.chrId), ' ', 6) + " 道具: " + ret.itemId + " - " + ii.getName(ret.itemId) + " 唯一ID: " + item.getEquipOnlyId());
                                    } else {
                                        msgs.add("角色: " + StringUtil.getRightPaddedStr(player.getName(), ' ', 13) + " 角色ID: " + StringUtil.getRightPaddedStr(String.valueOf(player.getId()), ' ', 6) + " 道具: " + item.getItemId() + " - " + ii.getName(item.getItemId()) + " 唯一ID: " + item.getEquipOnlyId());
                                    }
                                } else {
                                    checkItems.put(item.getEquipOnlyId(), ret);
                                }
                            }
                        }
                    }
                }
            }
            checkItems.clear();
            if (msgs.size() > 0) {
                c.getPlayer().dropMessage(5, "检测完成，共有: " + msgs.size() + " 个复制信息");
                FileoutputUtil.log("装备复制.txt", "检测完成，共有: " + msgs.size() + " 个复制信息");
                for (final String s : msgs) {
                    c.getPlayer().dropMessage(5, s);
                    FileoutputUtil.log("装备复制.txt", s);
                }
                c.getPlayer().dropMessage(5, "以上信息为拥有复制道具的玩家.");
            } else {
                c.getPlayer().dropMessage(5, "未检测到游戏中的角色有复制的道具信息.");
            }
            return 1;
        }
    }
}
