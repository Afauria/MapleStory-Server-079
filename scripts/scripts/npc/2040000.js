var cost = 6000;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if(mode == -1) {
		cm.dispose();
	} else {
		if(mode == 1) {
			status++;
		}
		if(mode == 0) {
			cm.sendNext("�㻹��ʲô�������������û�д������");
			cm.dispose();
			return;
		}
		if(status == 0) {
			cm.sendYesNo("����~�������������Ҹ������ۿ������֮�ǵĳ�Ʊ�� �������֮�ǵĻ�ÿ #b10����#k һ�࣬��Ʊ���ۼ�Ϊ #b"+cost+" ���#k�� ȷ��Ҫ���� #b#t4031045##k��");
		} else if(status == 1) {
			if(cm.getMeso() >= cost && cm.canHold(4031045)) {
				cm.gainItem(4031045,1);
				cm.gainMeso(-cost);
			} else {
				cm.sendOk("��ȷ���� #b"+cost+" ���#k��");
			}
			cm.dispose();
		}
	}
}