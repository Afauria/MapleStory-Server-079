var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    var stage1status = eim.getProperty("stage1status");

    if (stage1status == null) {
	if (cm.isLeader()) { // Leader
	    var stage1leader = eim.getProperty("stage1leader");
	    if (stage1leader == "done") {

		if (cm.haveItem(4001007, 30)) { // Clear stage
        	    eim.setProperty("1stageclear",1);
		    cm.sendNext("��ϲ�㣡 ��ɹ�ͨ���˵�1�׶Σ���㣬���2�׶�ǰ���ɣ�");
		    cm.gainItem(4001007, -30);
		    clear(1, eim, cm);
		    cm.givePartyExp(2100, eim.getPlayers());
		    cm.dispose();
		} else { // Not done yet
		    cm.sendNext("ȷ��������� #r30 ��֤�鿨#k ���� ����һ����ı���~");
		}
		cm.dispose();
	    } else {
		cm.sendOk("��ã���ӭ������һ���׶Σ�����������ܻῼ���ܶ��׺ݵ����㣬���׺ݵ������ȡ��Ӧ��Ŀ��֤�鿨�����ң������ˡ����ǰ�֤�鿨ȫ��������ӳ�����ӳ��ٺ��ҽ������Ϳ���˳��ͨ���ˣ���ôף��һ��˳����");
		eim.setProperty("stage1leader","done");
		cm.dispose();
	    }
	} else { // Members
	    cm.sendNext("��ã���ӭ������һ���׶Σ�����������ܻῼ���ܶ��׺ݵ����㣬���׺ݵ������ȡ��Ӧ��Ŀ��֤�鿨�����ң������ˡ����ǰ�֤�鿨ȫ��������ӳ�����ӳ��ٺ��ҽ������Ϳ���˳��ͨ���ˣ���ôף��һ��˳����");
	    cm.dispose();
	}
    } else {
	cm.sendNext("��ϲ�㣡 ��ɹ�ͨ���˵�1�׶Σ���㣬���2�׶�ǰ���ɣ�");
	cm.dispose();
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status","clear");
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
}
