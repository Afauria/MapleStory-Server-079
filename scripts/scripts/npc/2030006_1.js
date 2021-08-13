var status = -1;
var minLevel = 10; // 35
var maxLevel = 200; // 65

var minPartySize = 1;
var maxPartySize = 6;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	    return;
	}
	status--;
    }

    if (status == 0) {
        if (cm.getMapId() == 910010400) {
		cm.warp(100000200);
	}
	if (cm.getParty() == null) { // No Party
	    cm.sendSimple("��Ը������������һ���������������ᷢ���ϰ������⣬�㽫�޷���������������ΰ����ŶӺ���������������ԣ�������� #b��Ӷӳ�#k ����˵��.\r\n\r\n#rҪ��: " + minPartySize + " ��Ա ���м��� " + minLevel + " ~ " + maxLevel + ".#b#l");
	} else if (!cm.isLeader()) { // Not Party Leader
	    cm.sendSimple("������볢�ԣ������ #b��Ӷӳ�#k ����˵��.#b#l");
	} else {
	    // Check if all party members are within PQ levels
	    var party = cm.getParty().getMembers();
	    var mapId = cm.getMapId();
	    var next = true;
	    var levelValid = 0;
	    var inMap = 0;
	    var it = party.iterator();

	    while (it.hasNext()) {
		var cPlayer = it.next();
		if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
		    levelValid += 1;
		} else {
		    next = false;
		}
		if (cPlayer.getMapid() == mapId) {
		    inMap += (cPlayer.getJobId() == 900 ? 6 : 1);
		}
	    }
	    if (party.size() > maxPartySize || inMap < minPartySize) {
		next = false;
	    }
	    if (next) {
		var em = cm.getEventManager("HenesysPQ");
		if (em == null) {
		    cm.sendSimple("PQ������һ����������ϵGM�����ͼ.#b#l");
		} else {
		    var prop = em.getProperty("state");
		    if (prop.equals("0") || prop == null) {
        for (var i = 4001095; i < 4001099; i++) {
	    cm.givePartyItems(i, 0, true);
	}
        for (var i = 4001100; i < 4001101; i++) {
	    cm.givePartyItems(i, 0, true);
	}
			em.startInstance(cm.getParty(), cm.getMap());
			cm.dispose();
			return;
		    } else {
			cm.sendSimple("��һ���ѽ��� #r��������#k ������볢����һ��Ƶ�������ߵȴ���ǰ���������.#b#");
		    }
		}
	    } else {
		cm.sendSimple("�������ʧ�ܡ����������¹涨:\r\n\r\n#rҪ��: " + minPartySize + " ��Ա, ���м��� " + minLevel + " ~ " + maxLevel + ".#b#l");
	    }
	}
    } else { //broken glass
	if (cm.haveItem(1002798,1)) {
	    cm.sendOk("���Ѿ�����");
	} else if (!cm.canHold(1002798,1)) {
	    cm.sendOk("���Ѿ�����");
	} else if (cm.haveItem(4001101,20)) {
	    cm.gainItem(4001101,-20); //should handle automatically for "have"
	    cm.gainItem(1002798,1);
	} else {
	    cm.sendOk("����Ҫ20����������");
	}
	cm.dispose();

    }
}