/**
	Konpei - Near the Hideout(801040000)
*/

function start() {
    cm.sendYesNo("�㺦���ˣ� ���ȥ #m801000000#��");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendOk("��������ȥ #m801000000#, ������");
    } else {
	cm.warp(801000000,0);
    }
    cm.dispose();
}