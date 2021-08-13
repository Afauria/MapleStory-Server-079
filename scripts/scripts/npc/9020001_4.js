var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    var stage2status = eim.getProperty("stage2status");

    if (stage2status == null) {
	if (cm.isLeader()) { // Leader
	    var stage2leader = eim.getProperty("stage2leader");
	    if (stage2leader == "done") {

		if (cm.haveItem(4001008, 13)) { // Clear stage
        	    eim.setProperty("4stageclear",1);
		    cm.sendNext("��ϲ�㣡 ��ɹ�ͨ���˵�4�׶Σ���㣬���5�׶�ǰ���ɣ�");
		    cm.gainItem(4001008, -13);
		    clear(1, eim, cm);
		    cm.givePartyExp(2100, eim.getPlayers());
		    cm.dispose();
		} else { // Not done yet
		    cm.sendNext("ȷ��������� #r13 ��ͨ��֤#k ���� ����һ����ı���~");
		}
		cm.dispose();
	    } else {
		cm.sendOk("��ã���ӭ������4�׶Σ��������ߣ����ܻᷢ�ֺܶ����͵Ĺ��������ǣ���ȡͨ��֤#r13#k�ţ��ٰ����ǽ����ҡ���ס��������ܱ���ǿ��ܶ࣬��С��һ�㣬ף��ͨ����һ�ء�");
		eim.setProperty("stage2leader","done");
		cm.dispose();
	    }
	} else { // Members
	    cm.sendNext("��ӭ������4�׶Σ��ڵ�ͼ�����ߣ���ͻῴ��������͵Ĺ��������ǻ�ȡ�������ϵ�ͨ��֤#r13#k�ţ��������ǵ���ӳ���");
	    cm.dispose();
	}
    } else {
	cm.sendNext("��ϲ�㣡 ��ɹ�ͨ���˵�4�׶Σ���㣬���5�׶�ǰ���ɣ�");
	cm.dispose();
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status","clear");
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
}
