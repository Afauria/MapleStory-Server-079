var tm;

function start() {
	status = -1;
	tm = cm.getEventManager("Trains");
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if(mode == -1) {
		cm.dispose();
		return;
	} else {
		status++;
		if(mode == 0) {
			cm.sendNext("�㻹��ʲô����������û�������");
			cm.dispose();
			return;
		}
		if (status == 0) {
			if(tm == null) {
				cm.sendNext("�ű�������������ϵ����Ա�����");
				cm.dispose();
			} else if(tm.getProperty("entry").equals("true")) {
				cm.sendYesNo("�ǳ��ã����ϻ����㹻��λ�ã���׼������ĳ�Ʊ�����ǽ��������������У����ǲ������ϳ���");
			} else if(tm.getProperty("entry").equals("false") && tm.getProperty("docked").equals("true")) {
				cm.sendNext("�����Ѿ���������ȴ���һ�κ��ࡣ");
				cm.dispose();
			} else {
				cm.sendNext("�𳵳���ǰ5������ֹͣ��Ʊ����ע��ʱ�䡣");
				cm.dispose();
			}
		} else if(status == 1) {
			cm.warp(200000122);
			cm.dispose();
		}
	}
}
