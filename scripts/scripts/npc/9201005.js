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
	    cm.sendYesNo("��Ҫȥ���������?");
	} else {
	    cm.sendYesNo("��Ҫ��ȥ���С����?");
	}
    } else if (status == 1) {
	var WeddingMap = cm.getMap(680000400);
	WeddingMap.resetFully();
	cm.warp(cm.getPlayer().getMapId() == 680000000 ? 680000200 : 680000000);
	cm.dispose();
    }
}