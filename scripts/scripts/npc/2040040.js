/* ==================
 �ű�����:  NPC	    
 �ű����ߣ�����ؼ     
 ��ϵ��ʽ��840645183  
 =====================
 */
//load("nashorn:mozilla_compat.js");
importPackage(net.sf.cherry.tools);
var status;
var exp = 20000;

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
        var stage5status = eim.getProperty("stage5status");
        if (stage5status == null) {
            if (playerStatus) {
                var map = eim.getMapInstance(cm.getPlayer().getMapId());
                var passes = cm.haveItem(4001022, 24);
                var stage5leader = eim.getProperty("stage5leader");
                if (stage5leader == "done") {
                    if (passes) {
                        party = eim.getPlayers();
                        map = cm.getMapId();
                        cm.removeAll(4001022);
						cm.gainItem(4001022,24)
                        clear(5, eim, cm);
                        cm.givePartyExp(exp, party);
                        cm.sendOk("��ϲ����ͨ���˵�5�׶Ρ�����ͨ�������ŵ�����һ���׶ΰɡ���");
                        cm.dispose();
                    } else {
                        cm.sendNext("��ȷ�����Ҵ�����24��#i4001022#������һ���Լ��ı����Ƿ��㹻��");
                    }
                    cm.dispose();
                } else {
                    cm.sendOk("��ӭ���� ���֮�� - (#r�������#k)��#b5#k�׶�\r\n\r\n�������߿������������Ķ�Աһ�����#r24��ͨ��֤#k���ҡ���");
                    eim.setProperty("stage5leader", "done");
                    cm.dispose();
                }
            } else {
                cm.sendNext("��ӭ���� ���֮�� - (#r�������#k)��#b5#k�׶�\r\n\r\n�������߿���������#r24��ͨ��֤#k����,�����ɹ��õ���ͨ��֤�뽻�����ǵ��鳤��Ȼ��������ת�����ҡ���");
                cm.dispose();
            }
        } else {
            cm.sendNext("��ϲ����ͨ���˵�5�׶Ρ�����ͨ�������ŵ�����һ���׶ΰɡ���");
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
    map = mf.getMap(922010500);
    var nextStage = eim.getMapInstance(922010600);
    var portal = nextStage.getPortal("next00");
    if (portal != null) {
        portal.setScriptName("lpq6");
    }
    var stageSeven = eim.getMapInstance(922010700);
	var stageSevenPortal = stageSeven.getPortal("next00");
	if (stageSevenPortal != null) {
		stageSevenPortal.setScriptName("lpq7");
	}
}