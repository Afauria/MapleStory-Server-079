var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (mode == 1)
            status++;
        else
            status--;

        if (cm.haveItem(4031008)) {
            if (status == 0)
                cm.sendNext("��, ���� #b��������#k ����������")
            else if (status == 1)
                cm.sendNextPrev("�������������õ�#t4031012#��������Ҫ֤�����ʵ���� ? �ܺ�...");
            else if (status == 2)
                cm.sendNextPrev("�ҿ��Ը���һ�λ���,������պ�.����ǰ����ҩˮŶ��");
            else if (status == 3)
                cm.sendYesNo("���ռ� #b30�� #t4031013##k. ף�����.");
            else if (status == 4) {
                cm.warp(108000300, 0);
                cm.dispose();
            }
        } else {
            cm.sendOk("�ܱ�Ǹ,����Ҫ #b�����������ż�#k ��ȥ����������.лл");
            cm.dispose();
        }
    }
}	