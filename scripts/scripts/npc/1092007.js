function start() {
	if (cm.isQuestActive(2175)) {
	cm.sendOk("��׼���ɺ�ħ��ʦ����������?? �ҽ����㴫�͹�ȥ...");
    } else {
    cm.sendOk("���ħʦ������ĸ���!!");
    cm.dispose();
}
}

function action(mode, type, selection) {
    cm.warp(912000000,0);
    cm.dispose();
}
