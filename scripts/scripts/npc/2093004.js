/*
	Dolphin - Pier on the Beach(251000100)
*/

var status = -1;
var menu;
var cost = 10000;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.sendNext("��Ҫ��ʱ���������ҡ�");
	cm.safeDispose();
	return;
    }
    if (status == 0) {
	cm.sendYesNo("��������Ҫǰ�� #b#m230000000##k ? ������ #b"+cost+" ���#k.");
    } else if (status == 1) {
	if (cm.getMeso() < cost) {
	    cm.sendOk("�ܱ�Ǹ����û���㹻�ķ��...");
	    cm.safeDispose();
	} else {
	    cm.gainMeso(-cost);
	    cm.warp(230000000);
	    cm.dispose();
	}
    }
}