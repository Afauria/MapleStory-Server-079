/*
	Konpei - Showa Town(801000000)
*/

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
    } else {
	if (mode == 1)
	    status++;
	if (status == 0) {
	    cm.sendSimple ("��ʲô�ҿ���Ϊ�������𣿣�\r #L0##b�����Ҳ���֮����һЩ��Ϣ��#l\r\n#L1#����ȥ�Ĳ���֮����#l\r\n#L2#û�С�#l#k");
	} else if (status == 1) {
	    if (selection == 0) {
		cm.sendNext("������˵����");
	    } if (selection == 1) {
		cm.sendNext("׼�����ˣ�");
	    } if (selection == 2) {
		cm.sendOk("����һ��æµ���ˣ�����Զһ�㣡");
	    } if(selection != 1) {
		cm.dispose();
	    }
	} else if (status == 2) {
	    cm.warp(801040000, 0);
	    cm.dispose();
	}
    }
}