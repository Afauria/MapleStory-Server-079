package handling.world.family;

import client.MapleBuffStat;
import client.MapleCharacter;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ScheduledFuture;
import server.MapleItemInformationProvider;
import server.MapleStatEffect;
import server.Timer;
import tools.MaplePacketCreator;
import tools.Pair;

public class MapleFamilyBuff
{
    private static final int event = 2;
    private static final int[] type;
    private static final int[] duration;
    private static final int[] effect;
    private static final int[] rep;
    private static final String[] name;
    private static final String[] desc;
    private static final List<MapleFamilyBuffEntry> buffEntries;
    
    public static List<MapleFamilyBuffEntry> getBuffEntry() {
        return MapleFamilyBuff.buffEntries;
    }
    
    public static MapleFamilyBuffEntry getBuffEntry(final int i) {
        return MapleFamilyBuff.buffEntries.get(i);
    }
    
    static {
        type = new int[] { 0, 1, 2, 3, 4, 2, 3, 2, 3, 2, 3 };
        duration = new int[] { 0, 0, 15, 15, 30, 15, 15, 30, 30, 30, 30 };
        effect = new int[] { 0, 0, 150, 150, 200, 200, 200, 200, 200, 200, 200 };
        rep = new int[] { 3, 5, 7, 8, 10, 12, 15, 20, 25, 40, 50 };
        name = new String[] { "直接移动到学院成员身边", "直接召唤学院成员", "我的爆率 1.5倍(15分钟)", "我的经验值 1.5倍(15分钟)", "学院成员的团结(30分钟)", "我的爆率 2倍(15分钟)", "我的经验值 2倍(15分钟)", "我的爆率 2倍(30分钟)", "我的经验值 2倍(30分钟)", "我的组队爆率 2倍(30分钟)", "我的组队经验值 2倍(30分钟)" };
        desc = new String[] { "[对象] 我\n[效果] 直接可以移动到指定的学院成员身边。", "[对象] 学院成员 1名\n[效果] 直接可以召唤指定的学院成员到现在的地图。", "[对象] 我\n[持续效果] 15分钟\n[效果] 打怪爆率增加到 #c1.5倍# \n※ 与爆率活动重叠时失效。", "[对象] 我\n[持续效果] 15分钟\n[效果] 打怪经验值增加到 #c1.5倍# \n※ 与经验值活动重叠时失效。", "[启动条件] 校谱最低层学院成员6名以上在线时\n[持续效果] 30分钟\n[效果] 爆率和经验值增加到 #c2倍# ※ 与爆率、经验值活动重叠时失效。", "[对象] 我\n[持续效果] 15分钟\n[效果] 打怪爆率增加到 #c2倍# \n※ 与爆率活动重叠时失效。", "[对象] 我\n[持续效果] 15分钟\n[效果] 打怪经验值增加到 #c2倍# \n※ 与经验值活动重叠时失效。", "[对象] 我\n[持续效果] 30分钟\n[效果] 打怪爆率增加到 #c2倍# \n※ 与爆率活动重叠时失效。", "[对象] 我\n[持续效果] 30分钟\n[效果] 打怪经验值增加到 #c2倍# \n※ 与经验值活动重叠时失效。", "[对象] 我所属组队\n[持续效果] 30分钟\n[效果] 打怪爆率增加到 #c2倍# \n※ 与爆率活动重叠时失效。", "[对象] 我所属组队\n[持续效果] 30分钟\n[效果] 打怪经验值增加到 #c2倍# \n※ 与经验值活动重叠时失效。" };
        buffEntries = new ArrayList<MapleFamilyBuffEntry>();
        for (int i = 0; i < 2; ++i) {
            MapleFamilyBuff.buffEntries.add(new MapleFamilyBuffEntry(i, MapleFamilyBuff.name[i], MapleFamilyBuff.desc[i], 1, MapleFamilyBuff.rep[i], MapleFamilyBuff.type[i], 190000 + i, MapleFamilyBuff.duration[i], MapleFamilyBuff.effect[i]));
        }
    }
    
    public static class MapleFamilyBuffEntry
    {
        public String name;
        public String desc;
        public int count;
        public int rep;
        public int type;
        public int index;
        public int questID;
        public int duration;
        public int effect;
        public List<Pair<MapleBuffStat, Integer>> effects;
        
        public MapleFamilyBuffEntry(final int index, final String name, final String desc, final int count, final int rep, final int type, final int questID, final int duration, final int effect) {
            this.name = name;
            this.desc = desc;
            this.count = count;
            this.rep = rep;
            this.type = type;
            this.questID = questID;
            this.index = index;
            this.duration = duration;
            this.effect = effect;
            this.effects = this.getEffects();
        }
        
        public int getEffectId() {
            switch (this.type) {
                case 2: {
                    return 2022694;
                }
                case 3: {
                    return 2450018;
                }
                default: {
                    return 2022332;
                }
            }
        }
        
        public List<Pair<MapleBuffStat, Integer>> getEffects() {
            final List<Pair<MapleBuffStat, Integer>> ret = new ArrayList<Pair<MapleBuffStat, Integer>>();
            switch (this.type) {
                case 2: {
                    ret.add(new Pair<MapleBuffStat, Integer>(MapleBuffStat.掉落_率, this.effect));
                    ret.add(new Pair<MapleBuffStat, Integer>(MapleBuffStat.金币_率, this.effect));
                    break;
                }
                case 3: {
                    ret.add(new Pair<MapleBuffStat, Integer>(MapleBuffStat.经验_率, this.effect));
                    break;
                }
                case 4: {
                    ret.add(new Pair<MapleBuffStat, Integer>(MapleBuffStat.经验_率, this.effect));
                    ret.add(new Pair<MapleBuffStat, Integer>(MapleBuffStat.掉落_率, this.effect));
                    ret.add(new Pair<MapleBuffStat, Integer>(MapleBuffStat.金币_率, this.effect));
                    break;
                }
            }
            return ret;
        }
        
        public void applyTo(final MapleCharacter chr) {
            chr.getClient().getSession().write(MaplePacketCreator.giveBuff(-this.getEffectId(), this.duration * 60000, this.effects, null));
            final MapleStatEffect eff = MapleItemInformationProvider.getInstance().getItemEffect(this.getEffectId());
            chr.cancelEffect(eff, true, -1L, this.effects);
            final long starttime = System.currentTimeMillis();
            final MapleStatEffect.CancelEffectAction cancelAction = new MapleStatEffect.CancelEffectAction(chr, eff, starttime);
            final ScheduledFuture<?> schedule = Timer.BuffTimer.getInstance().schedule(cancelAction, starttime + this.duration * 60000 - starttime);
            chr.registerEffect(eff, starttime, schedule, this.effects);
        }
    }
}
