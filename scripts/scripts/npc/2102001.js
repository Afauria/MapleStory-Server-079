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
			cm.sendOk("��;��������...");
			cm.dispose();
			return;
		}
		if(status == 0) {
			cm.sendYesNo("��ȷ��Ҫ�뿪������");
		} else if(status == 1) {
			cm.warp(260000100);
			cm.dispose();
		}
	}
}
