/* Author: Xterminator
	NPC Name: 		Pison
	Map(s): 		Victoria Road : Lith Harbor (104000000)
	Description: 		Florina Beach Tour Guide
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status <= 1) {
	    cm.sendNext("��������������Щ�»�û�а��������ƣ����ʱ����ƽ�̲��Ϣ����һ��Ҳ����");
	    cm.safeDispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	cm.sendSimple("����˵����������۲�Զ�ĵط��и���#b�ƽ�̲#k��������̲��ֻҪ����#b1500���#k��#b�������о�#k���Ҿ����㵽����ȥ����ô�����벻��ȥ�ƽ�̲��\r\n\r\n#L0##b���븶1500���#l\r\n#L1#�����������о�#l\r\n#L2#�������о�#k��ʲô?#l");
    } else if (status == 1) {
	if (selection == 0) {
	    cm.sendYesNo("��Ҫ��#b1500���#kȥ�ƽ�̲�𣿺�~������Ҳ�й���㲻Ҫ����׼��������ȥ׼����������ô������������ȥ�ƽ�̲��");
	} else if (selection == 1) {
	    status = 2;
	    cm.sendYesNo("����#b�������о�#k�����Ǹ���ʱ����ȥ�ƽ�̲����~������Ҳ�й���㲻Ҫ����׼��������ȥ׼��������ô������������ȥ�ƽ�̲��");
	} else if (selection == 2) {
	    status = 4;
	    cm.sendNext("��������������֪��#b�������о�#k��ʲô����������������о�����ʱ�������ȥ�ƽ�̲������Ʊ�Ǻ��ر�ģ�����Ҳһֱ�ϸ����������ǰ��ȥ���򱾲���ʱ��Ū���ˡ�");
	}
    } else if (status == 2) {
	if (cm.getMeso() < 1500) {
	    cm.sendNext("���Ǯ���������кܶ෽�����Ի��۽�Ұ�����֪������...������Ŀ���...��ܹ���...������...������֪������˵ʲô.");
	    cm.safeDispose();
	} else {
	    cm.gainMeso(-1500);
	    cm.saveLocation("FLORINA");
	    cm.warp(110000000, 0);
	    cm.dispose();
	}
    } else if (status == 3) {
	if (cm.haveItem(4031134)) {//4031134 - ��������ȯ - �������ȥ�ƽ�̲��Ʊ
	    cm.saveLocation("FLORINA");
	    cm.warp(110000000, 0);
	    cm.dispose();
	} else {
	    cm.sendNext("��, ��ȷ������#b�������о�\r\n#i4031134##k? ��ȷ������������һ�¡�");
	    cm.safeDispose();
	}
    } else if (status == 4) {
	cm.sendNext("������������֪��#b�������о�#k��ʲô����������������о�����ʱ�������ȥ�ƽ�̲������Ʊ�Ǻ��ر�ģ�����Ҳһֱ�ϸ����������ǰ��ȥ���򱾲���ʱ��Ū���ˡ�");
    } else if (status == 5) {
	cm.sendNextPrev("��ϧ�һ�û�һ�������ϣ�����򱾲���ĳ�����ҵ�����������л���ȥ���򱾲����Ұɡ����ܶ�������á�");
    } else if (status == 6) {
	cm.dispose();
    }
}