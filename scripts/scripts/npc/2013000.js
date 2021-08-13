var status = -1;
var minLevel = 35; // 35
var maxLevel = 255; // 65

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
	if (cm.getMapId() == 920010000) { //inside orbis pq
		cm.sendOk("���Ǳ��������� ��Ҫ5���Ƶ���Ƭ");
		cm.spawnNpc(2013001, new java.awt.Point(300, 143));
		 cm.dispose();
                   return;
	}
    if (status == 0) {
	for (var i = 4001044; i < 4001064; i++) {
		cm.removeAll(i); //holy
	}
	if (cm.getParty() == null) { // No Party
	    cm.sendSimple("��ò��û�дﵽҪ��...:\r\n\r\n#rҪ��: " + minPartySize + " ��ҳ�Ա, ÿ���˵ĵȼ������� " + minLevel + " �� �ȼ� " + maxLevel + ".#b\r\n#L0#��Ҫ��40��Ů�������һ�Ů������#l");
		 
	} else if (!cm.isLeader()) { // Not Party Leader
	    cm.sendSimple("��������������� #b�ӳ�#k ����̸.#b\r\n#L0#��Ҫ��40��Ů�������һ�Ů������#l");
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
		var em = cm.getEventManager("OrbisPQ");
		if (em == null) {
		    cm.sendSimple("�Ҳ����ű�������GM#b\r\n#L0#��Ҫ��40��Ů�������һ�Ů������#l");
		} else {
		    var prop = em.getProperty("state");
		    if (prop.equals("0") || prop == null) {
			em.startInstance(cm.getParty(), cm.getMap());
			cm.dispose();
			return;
		    } else {
			cm.sendSimple("���������Ѿ��������� #r���������#k �볢�Ի�Ƶ�����ߵ�����������ɡ�#b\r\n#L0#��Ҫ��40��Ů�������һ�Ů������(��Χ+10)#l");
		    }
		}
	    } else {
		cm.sendSimple("��Ķ���ò��û�дﵽҪ��...:\r\n\r\n#rҪ��: " + minPartySize + " ��ҳ�Ա, ÿ���˵ĵȼ������� " + minLevel + " �� �ȼ� " + maxLevel + ".#b\r\n#L0#��Ҫ��40��Ů�������һ�Ů������(��Χ+10)#l");
	    }
	}
    } else { //broken glass
	if (!cm.canHold(1082322,1)) {
	    cm.sendOk("�����ˡ�");
	} else if (cm.haveItem(4001158,40)) {
	    
	    cm.gainItem(4001158, -40, true); 
           cm.gainItem(1082232,1);
		   cm.givePartyExp(80000, party);
	} else {
	    cm.sendOk("��û��40�� #t4001158#.");
	}
	cm.dispose();

    }
}