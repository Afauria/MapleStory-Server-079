var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
	    cm.removeAll(4001169);//����֮��
	    cm.removeAll(2270004);//����֮��
	    cm.removeAll(4001162);
	    cm.removeAll(4001163);
	cm.sendOk("#k�����ǣ�����ɭ����Ӹ���\r\n��������1�˿��Խ���.���ټ����һ����ս�ɣ�\r\n\r\n#d#L2#���밬��ɭ����Ӹ���#l\r\n\r\n");
    } else if (status == 1) {
	if (selection == 0) {
		cm.warp(910000000);
	} else if (selection == 1){
	    if (cm.haveItem(1032060) && !cm.haveItem(1032061) && cm.haveItem(4001198, 10)) {
		cm.gainItem(1032060,-1);
		cm.gainItem(1032061, 1);
		cm.gainItem(4001198, -10);
	    } else {
		cm.sendOk("You either don't have Altair Earrings already or you do not have 10 Altair Fragments");
	    }
	} else if (selection == 1){
	    if (cm.haveItem(1032061) && !cm.haveItem(1032101) && cm.haveItem(4001198, 10)) {
		cm.gainItem(1032061,-1);
		cm.gainItem(1032101, 1);
		cm.gainItem(4001198, -10);
	    } else {
		cm.sendOk("You either don't have Glittering Altair Earrings already or you do not have 10 Altair Fragments");
	    }
	} else if (selection == 2) {
	    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
		cm.sendOk("�ӳ��������������������˵��.");
		}else if (cm.getPlayerCount(930000000) <= 0 && cm.getPlayerCount(930000010) <= 0 && cm.getPlayerCount(930000100) <= 0 && cm.getPlayerCount(930000200) <= 0 && cm.getPlayerCount(930000300) <= 0 && cm.getPlayerCount(930000400) <= 0 && cm.getPlayerCount(930000500) <= 0 && cm.getPlayerCount(930000600) <= 0 && cm.getPlayerCount(930000700) <= 0) {
		
		var party = cm.getPlayer().getParty().getMembers();
		var mapId = cm.getPlayer().getMapId();
		var next = true;
		var size = 0;
		var it = party.iterator();
		while (it.hasNext()) {
			var cPlayer = it.next();
			var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			if (ccPlayer == null || ccPlayer.getLevel() < 45 || ccPlayer.getLevel() > 255) {
				next = false;
				break;
			}
			size += (ccPlayer.isGM() ? 4 : 1);
		}	
		if (next && size >= 1) {
			var em = cm.getEventManager("Ellin");
	                cm.����(1, "["+cm.getPlayer().getName()+"]������鿪ʼ��սа���[������]��");
			if (em == null) {
				cm.sendOk("Please try again later.");
			} else {
				em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap());
			}
		} else {
			cm.sendOk("�������1�ˡ���͵ȼ�45����");
		}
	    } else {
			cm.sendOk("�Ѿ��ж�����롣������Ƶ�����и�����");
	    }
	} else if (selection == 3) {
            cm.openNpc(9310084, 26);
			//cm.sendOk("��");
	}
	cm.dispose();
    }
}