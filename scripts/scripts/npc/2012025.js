var gm;

function start() {
	status = -1;
	gm = cm.getEventManager("Geenie");
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
			if(gm == null) {
				cm.sendNext("�ű�������������ϵ����Ա�����");
				cm.dispose();
			} else if(gm.getProperty("entry").equals("true")) {
				cm.sendYesNo("��ȥ֮����Ҫ�ɺܾò��ܵ���Ŀ�ĵء�������������м���Ҫ��Ļ������Ȱ�������꣬��ô����");
			} else if(gm.getProperty("entry").equals("false") && gm.getProperty("docked").equals("true")) {
				cm.sendNext("���κ����Ѿ���������ȴ���һ�κ��ࡣ");
				cm.dispose();
			} else {
				cm.sendNext("����ǰ5���ӿ�ʼ�ſ����볡�����Ե�һ�¡�����Ҳ������̫������ǰ1���Ӿͻ��������׼����");
				cm.dispose();
			}
		} else if(status == 1) {
			cm.warp(200000152);
			cm.dispose();
		}
	}
}
