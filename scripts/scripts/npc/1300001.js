var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
	}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else if (mode == 0) {
		cm.sendOk("��Ҫ��ʱ���������ҡ�");
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;		
	if (status == 0) {		
		cm.sendYesNo("���Ƿ���Ҫ��#b#t4032388##k��");	
	} else if (status == 1)  {
		if (!cm.canHold(4032388)) {
		cm.sendOk("��ճ�һЩ������λ...");
		cm.dispose();
		} else if (cm.haveItem(4032388)) {
		cm.sendOk("�������Ѿ�����#b#t4032388##k��...")
		cm.dispose();
		} else {
		cm.gainItem(4032388, 1);
		cm.dispose();	
	}
}
}
}