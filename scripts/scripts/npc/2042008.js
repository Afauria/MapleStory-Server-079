var status = 0;
function start() {
    cm.sendYesNo("��������Ҫ�뿪����");
}

function action(mode, type, selection) {
    if (mode != 1) {
        if (mode == 0)
        cm.sendOk("�ı������������ҡ�");
        cm.dispose();
        return;
    }
    status++;
    if (status == 1) {
		cm.warp(980030000,0);
        cm.dispose();
    }
}