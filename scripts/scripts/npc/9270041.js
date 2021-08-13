var cost = 20000;

function start() {
    status = -1;
    em = cm.getEventManager("AirPlane");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1) {
	status++;
    }
    if(mode == 0 && menu == 0) {
	cm.sendNext("��������ܳ�һ��ʱ�䡣��ı�������������˵��.");
	cm.dispose();
    }
    if(mode == 0 && menu == 1) {
	cm.sendOk("��������ܳ�һ��ʱ�䡣��ı�������������˵��..");
	cm.dispose();
    }
    if (status == 0) {
	cm.sendSimple("��~ ���� #p"+cm.getNpc()+"# ���Զ�����л���. �һ������ȥ #m540010000# ����! ��Ҫ��æ??\r\n#L0##b���빺��ɻ�Ʊ�� #m540010000##k#l\r\n#L1##b����.#k#l");
    } else if (status == 1) {
	menu = selection;
	if (menu == 0) {
	    cm.sendYesNo("�ɻ�Ʊ�������Ƿ�Ҫ����??");
	} else if (menu == 1) {
	    cm.sendYesNo("���Ƿ�Ҫ����?? һ�������㽫ʧȥһ�ŷɻ�Ʊ, \r\n��л��ѡ��Wizet���չ�˾!");
	}
    } else if (status == 2) {
	if (menu == 0) {
	    if (!cm.canHold(4031731) || cm.getMeso() < cost) {
		cm.sendOk("��ȷ������ #b"+cost+" ���#k? ����������Ļ�����Ȱ������������������Ƿ�����!.");
	    } else {
		cm.gainMeso(-cost);
		cm.gainItem(4031731, 1);
	    }
	    cm.dispose();
	} else if(menu == 1) {
	    if(em == null) {
		cm.sendNext("�ű�������ر�GM!");
		cm.dispose();
	    } else if (!cm.haveItem(4031731)) {
		cm.sendNext("���ȹ���ɻ�Ʊлл~");
		cm.dispose();
		} else if (em.getProperty("entry") == null) {
		cm.sendNext("NPCը����~");
		cm.dispose();
	    } else if (em.getProperty("entry").equals("true")) {
		cm.sendYesNo("�Ƿ�Ҫ��ɻ�??");
	    } else if(em.getProperty("entry").equals("false") && em.getProperty("docked") != null &&  em.getProperty("docked").equals("true")) {
		cm.sendNext("��ܷɻ���׼����ɡ��Һܱ�Ǹ�����������ڽ��������ó̡�����ʱ����ͨ����ӭ����Ʊչ̨");
		cm.dispose();
	    } else {
		cm.sendNext("�����ĵȴ������ӣ��������������У�");
		cm.dispose();
	    }
	}
    } else if (status == 3) {
	cm.gainItem(4031731, -1);
	cm.warp(540010100);
	cm.dispose();
    }
}
