var status = 0;


function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1 || mode == 0) {
		cm.dispose();
	} else {
		status++;
		if (status == 0) {
			cm.sendSimple("�ˣ�����#p9001004#����Ҫʲô��æ�𣿣�\r\n#L0#�����뿪���#l\r\n#L1#��һ�ѻ���� (1 ���)#l");
		} else if (status == 1) {
			if (selection == 0) {
				cm.sendYesNo("����Ҫ�뿪�����");
			} else if (selection == 1) {
				if (cm.getPlayer().getMeso() < 1 || !cm.canHold(1322005)) {
					cm.sendOk("��û���㹻�ķ�ң����ߵ�����λ���ˡ�");
				} else {
					cm.gainItem(1322005, 1);
					cm.gainMeso(-1); //lool
				}
				cm.dispose();
			}
		} else if (status == 2) {
			var map = cm.getSavedLocation("EVENT");
			if (map > -1) {
				cm.warp(map, 0);
			} else {
    				cm.warp(910000000, 0);
			}
			cm.dispose();
		}
	}
}

function getEimForGuild(em, id) {
        var stringId = "" + id;
        return em.getInstance(stringId);
}