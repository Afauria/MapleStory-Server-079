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
			cm.sendOk("���������ľ����ģ�������������ɣ�");
			cm.dispose();
			return;
		}
		if(status == 0) {
			cm.sendYesNo("�����Ҫ�뿪�����������ǲ��˳�Ʊ��Ŷ����ȷ��Ҫ�뿪��");
		} else if(status == 1) {
			if(cm.getChar().getMapId() == 220000111)
				cm.warp(220000110);
			else
				cm.warp(220000121);
			cm.dispose();
		}
	}
}
