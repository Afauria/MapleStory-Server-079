/*
	Marr - Tokyo Park 2095
*/

function start() {
    if (cm.getMapId() != 802000310) {
	cm.sendSimple("��������! \r\n#b#L0#����Ҫ��#t4032192#�һ�������#l \r\n#b#L1#����Ҫ����!!#l");
    } else {
	cm.sendOk("û�²�Ҫ������!");
	cm.dispose();
}
}

function action(mode, type, selection) {
    if (mode == 1) {
	if (selection == 0) {
	    if (cm.haveItem(4032192, 10)) {
		cm.removeAll(4032192);
		cm.warp(802000313, 0);
	    } else {
		cm.sendOk("�����#t4032192#��");
	    }
	} else if (selection == 1) {
	    cm.warp(802000310, 0);
	}
    }
    cm.dispose();
}