var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    var stage3status = eim.getProperty("stage3status");

    if (stage3status == null) {
	if (cm.isLeader()) { // Leader
	    var stage3leader = eim.getProperty("stage3leader");
	    if (stage3leader == "done") {

		if (!cm.haveMonster(9500007)) { // Clear stage
		    clear(1, eim, cm);
                    cm.warpParty(910340600, 0);
		    cm.givePartyExp(2100, eim.getPlayers());
		    cm.dispose();
		} else { // Not done yet
		    cm.sendNext("�����ͼ���Ƿ񻹴��ڹ�������޷�ͨ����");
		}
		cm.dispose();
	    } else {
		cm.sendOk("��ã���ӭ������5���׶Σ�����BOSS��Ȼ����ӳ��ٺ��ҽ������Ϳ���˳��ͨ���ˣ���ôף��һ��˳����");
		cm.spawnMonster(9300003,1);
		eim.setProperty("stage3leader","done");
		cm.dispose();
	    }
	} else { // Members
	    cm.sendNext("��ã���ӭ������5���׶Σ�����BOSS��Ȼ����ӳ��ٺ��ҽ������Ϳ���˳��ͨ���ˣ���ôף��һ��˳����");
	    cm.dispose();
	}
    } else {
	cm.sendNext("��ϲ�㣡 ��ɹ�ͨ���˵�5�׶Σ���㣬�����׶�ǰ���ɣ�");
	cm.dispose();
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status","clear");
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
}
