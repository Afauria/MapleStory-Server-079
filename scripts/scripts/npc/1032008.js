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
				cm.sendYesNo("���ϴ�֮����Ҫ�ɺܾò��ܵ���Ŀ�ĵء�������������м���Ҫ��Ļ������Ȱ�������꣬��ô������Ҫ�ϴ���");
			} else if(bm.getProperty("entry").equals("false") && bm.getProperty("docked").equals("true")) {
				cm.sendNext("���κ����Ѿ���������ȴ���һ�κ��ࡣ");
				cm.dispose();
			} else {
				cm.sendNext("����ǰ5���ӿ�ʼ�ſ����볡�����Ե�һ�¡�����Ҳ������̫������ǰ1���Ӿͻ��������׼�����޷��ÿ��˵Ǵ��ˡ�");
				cm.dispose();
			}
		} else if(status == 1) {
			cm.warp(101000301);
			cm.dispose();
		}
	}
}
