// Kerny - Pilot
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	if (cm.getMapId() == 540010002) {
		cm.sendOk("�羰�����԰�?");
	    cm.dispose();
	} else if (cm.getMapId() == 540010101){
	cm.sendOk("�羰�����԰�?");
	cm.dispose();
	} else {
	    cm.sendYesNo("��ܷɻ�������ɲ��ã������������뿪���������ٴι���ɻ�Ʊ��������.");
	}
    } else {
	cm.warp(540010000, 0);
	cm.dispose();
    }
}