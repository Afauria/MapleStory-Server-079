/**
	Pison - Florina Beach(110000000)
**/
var status = -1;
var returnmap = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.sendNext("����������һ������һЩ��Ҫ����. ");
	cm.safeDispose();
	return;
    }
    if (status == 0) {
	returnmap = cm.getSavedLocation("FLORINA");
	cm.sendNext("�����뿪 #b#m110000000##k? �����Ը��, �ҿ�������ص� #b#m"+returnmap+"##k.");
    } else if (status == 1) {
	cm.sendYesNo("��ȷ��Ҫ���ص� #b#m"+returnmap+"##k? �ð�, ������������.")
    } else if (status == 2) {
	if (returnmap < 0) {
		returnmap = 104000000;
	}
	cm.warp(returnmap);
	cm.clearSavedLocation("FLORINA");
	cm.dispose();
    }
}
