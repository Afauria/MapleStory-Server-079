function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if(mode == -1) {
		cm.dispose();
		return;
	} else {
		status++;
		if(mode == 0) {
			cm.sendOk("��;���������������о����ģ����Ժʹ��ϵ����������ģ�");
			cm.dispose();
			return;
		}
		if(status == 0) {
			cm.sendYesNo("һ���뿪���¡��ͻ�ص�ԭ���ĵط�����ȷ��Ҫ�´���");
		} else if(status == 1) {
			cm.warp(200000131);
			cm.dispose();
		}
	}
}
