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
	if (cm.getPlayer().getMapId() == 680000000) {
	    cm.sendYesNo("��������Ҫȥ�ι۽�������𣿣�");
	} else {
	    cm.sendYesNo("��������Ҫ��ȥ#m680000000#����");
	}
    } else if (status == 1) {
	cm.warp(cm.getPlayer().getMapId() == 680000000 ? 680000100 : 680000000);
	cm.dispose();
    }
}