var bm;

function start() {
	status = -1;
	bm = cm.getEventManager("Boats");
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
			if(bm == null) {
				cm.sendNext("�ű�������������ϵ����Ա�����");
				cm.dispose();
			} else if(bm.getProperty("entry").equals("true")) {
				cm.sendYesNo("�ǳ��ã����ϻ����㹻��λ�ã���׼������Ĵ�Ʊ�����ǽ��������������У����ǲ�����Ǵ���");
			} else if(bm.getProperty("entry").equals("false") && bm.getProperty("docked").equals("true")) {
				cm.sendNext("���κ����Ѿ���ȥ����ȴ���һ�κ��ࡣ");
				cm.dispose();
			} else {
				cm.sendNext("�ɴ����ǰ5������ֹͣ��Ʊ����ע��ʱ�䡣");
				cm.dispose();
			}
		} else if(status == 1) {
			cm.warp(200000112);
			cm.dispose();
		}
	}
}
