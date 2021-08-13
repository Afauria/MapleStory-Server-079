/*
	�ֹ�լۡ ����-������ (229010000)
**/

function start() {

    if (cm.getParty() == null) { // No Party
	cm.sendOk("�������������");
    } else if (!cm.isLeader()) { // Not Party Leader
	cm.sendOk("�����Ķӳ�������!");
    } else {
	// Check if all party members are within Levels 50-200
	var party = cm.getParty().getMembers();
	var mapId = cm.getMapId();
	var next = true;
	var levelValid = 0;
	var inMap = 0;

	var it = party.iterator();
	while (it.hasNext()) {

	    var cPlayer = it.next();
	    if ((cPlayer.getLevel() >= 50 && cPlayer.getLevel() <= 200) || cPlayer.getJobId() == 900) {
		levelValid += 1;
	    } else {
		next = false;
	    }
	    if (cPlayer.getMapid() == mapId) {
		inMap += (cPlayer.getJobId() == 900 ? 4 : 1);
	    }
	}
	if (party.size() > 1 || inMap < 1) {
	    next = false;
	}
	if (next && cm.haveItem(4001337, 1)) {
	    var em = cm.getEventManager("QiajiPQ");
	    if (em == null) {
			cm.sendOk("�Ҳ����ű�������ϵGM��");
			cm.dispose();
			return;		
	    } else {
		var prop = em.getProperty("state");
		if (prop == null || prop.equals("0")) {
		    em.startInstance(cm.getParty(),cm.getMap());
		} else {
		    cm.sendOk("�Ѿ��ж�����������ս�ˡ�");
			cm.dispose();
			return;
			}
	    }
	} else {
	    cm.sendOk("��Ķ�����Ҫһ����,�ȼ�������50-200֮��,��ȷ����Ķ�����û�ж�������,���������Ѿ�������,�����Կ�ײ���!");
		cm.dispose();
		return;
		}
		cm.gainItem(4001337, -1)
    }
    cm.dispose();
}

function action(mode, type, selection) {
}