/*
	Weaver - Ludibrium : Ludibrium Pet Walkway (220000006)
**/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
	cm.dispose();
	return;
    } else if (status >= 1 && mode == 0) {
	cm.sendNext("��Ҫ��ʱ����������ҡ�");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendYesNo("������·�ϣ������ȥ����ĳ���ɢ����������߶��ģ����������ѵ����ĳ���Ҫ����������ϰ�������㲻��̫���е������ĳ���Ȼ��������ܻ�������⣬�����������������һ����......��ô������ʲô���룿��������ĳ��");
    } else if (status == 1) {
	if (cm.haveItem(4031128)) {
	    cm.sendNext("�õ���һ���ţ���Ծ����Щ�ϰ�������Ÿ��ҵܵ�������㽱��...");
	    cm.dispose();
	} else {
	    cm.gainItem(4031128, 1);
	    cm.sendOk("����!");
	    cm.dispose();
	}
    }
}