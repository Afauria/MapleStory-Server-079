var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (!cm.isLeader()) {
	cm.sendNext("���Ҷӳ�������˵����");
	cm.dispose();
	return;
    }
    if (cm.haveItem(4032119,17)) {
	cm.warpParty(674030200);
	cm.gainItem(4032119,-17);
    } else {
	cm.sendOk("��ӭ����V�ֿ͸��� ����Ҫ��ͼ���ҿ�� �е�\r\n#r17�� #b#t4032119##k��");
    }
    cm.dispose();
}