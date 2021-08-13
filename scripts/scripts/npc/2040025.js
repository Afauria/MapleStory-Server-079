/*
	Second Eos Rock - Ludibrium : Eos Tower 71st Floor (221022900)
*/

var status = 0;
var map;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	if (cm.haveItem(4001020)) {
	    cm.sendSimple("��Ҫʲô�����𣿣� #b\r\n#L0#����˹�� (100¥)#l\r\n#L1#����˹�� (41¥)#l");
	} else {
	    cm.sendOk("����Ҫ��#t4001020# �ſ���������");
	    cm.dispose();
	}
    } else if (status == 1) {
	if (selection == 0) {
	    cm.sendYesNo("���Ƿ�Ҫʹ��#t4001020# ���͵�#m221024400# �أ���");
	    map = 221024400;
	} else {
	    cm.sendYesNo("���Ƿ�Ҫʹ��#t4001020# ���͵�#m221021700# �أ���");
	    map = 221021700;
	}
    } else if (status == 2) {
	cm.gainItem(4001020, -1);
	cm.warp(map, 3);
	cm.dispose();
    }
}