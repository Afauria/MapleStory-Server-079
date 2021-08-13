/* ==================
 �ű�����:  NPC	    
 �ű����ߣ�����ؼ     
 ��ϵ��ʽ��840645183  
 =====================
 */
//load("nashorn:mozilla_compat.js");
importPackage(net.sf.odinms.tools);
var status;
var exp = 25000;

function start() {
    status = -1;
    playerStatus = cm.isLeader();
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        var eim = cm.getPlayer().getEventInstance();
        var stage3status = eim.getProperty("stage3status");
        if (stage3status == null) {
            if (playerStatus) {
                var map = eim.getMapInstance(cm.getPlayer().getMapId());
                var passes = cm.haveItem(4001022, 15);
                var stage3leader = eim.getProperty("stage3leader");
                if (stage3leader == "done") {
                    if (passes) {
                        party = eim.getPlayers();
                        map = cm.getMapId();
                        cm.removeAll(4001022);
                        clear(3, eim, cm);
                        cm.givePartyExp(exp, party);
                        cm.sendOk("��ϲ����ͨ���˵�3�׶Ρ�����ͨ�������ŵ�����һ���׶ΰɡ���");
                        cm.dispose();
                    } else {
                        cm.sendNext("��ȷ�����Ҵ�����15��#i4001022#������һ���Լ��ı����Ƿ��㹻��");
                    }
                    cm.dispose();
                } else {
                    cm.sendOk("��ӭ���� ���֮�� - (#r�������#k)��#b3#k�׶�\r\n\r\n�������߿������������Ķ�Աһ�����#r26��ͨ��֤#k���ҡ���");
                    eim.setProperty("stage3leader", "done");
                    cm.dispose();
                }
            } else {
                cm.sendNext("��ӭ���� ���֮�� - (#r�������#k)��#b3#k�׶�\r\n\r\n�������߿���������#r26��ͨ��֤#k����,�����ɹ��õ���ͨ��֤�뽻�����ǵ��鳤��Ȼ��������ת�����ҡ���");
                cm.dispose();
            }
        } else {
            cm.sendNext("��ϲ����ͨ���˵�3�׶Ρ�����ͨ�������ŵ�����һ���׶ΰɡ���");
            cm.dispose();
        }
    }
}
function clear(stage, eim, cm) {
	eim.setProperty("stage" + stage.toString() + "status","clear");
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
	var map = eim.getMapInstance(cm.getChar().getMapId());
	var mf = eim.getMapFactory();
    map = mf.getMap(922010300);
    var nextStage = eim.getMapInstance(922010400);
    var portal = nextStage.getPortal("next00");
    if (portal != null) {
        portal.setScriptName("lpq4");
    }
}