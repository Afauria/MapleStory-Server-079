var sw;

function start() {
    status = -1;
    sw = cm.getEventManager("Subway");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if(mode == 0) {
	cm.sendNext("����һЩ���õĸ������޷�������԰�?");
	cm.dispose();
	return;
    }
    if (status == 0) {
	if(sw == null) {
	    cm.sendNext("�Ҳ����˽ű���ر�GM");
	    cm.dispose();
	} else if(sw.getProperty("entry").equals("true")) {
	    cm.sendYesNo("��Ҫ�����??");
	} else if(sw.getProperty("entry").equals("false") && sw.getProperty("docked").equals("true")) {
	    cm.sendNext("�ܱ�Ǹ�������׼������,����ʱ������ͨ����Ʊչ̨�鿴.");
	    cm.dispose();
	} else {
	    cm.sendNext("�����ĵȴ������ӣ��������������У�");
	    cm.dispose();
	}
    } else if(status == 1 && cm.getMapId() == 103000100) {
	if(!cm.haveItem(4031711)) {
		cm.sendNext("��! ��û��#b#t4031711##k �����Ҳ��ܷ�����!");
		cm.dispose();
	} else {
	    cm.gainItem(4031711,-1);
	    cm.warp(600010004);
		cm.dispose();
	}
	} else if(status == 1 && cm.getMapId() == 600010001) {
	if(!cm.haveItem(4031713)) {
		cm.sendNext("��! ��û��#b#t4031713##k �����Ҳ��ܷ�����!");
		cm.dispose();
	} else {
	    cm.gainItem(4031713,-1);
	    cm.warp(600010002);
		cm.dispose();
	}
	cm.dispose();
    }
}
