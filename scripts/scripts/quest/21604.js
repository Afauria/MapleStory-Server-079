var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            qm.sendNext("�ܲ������Ѿ��ɹ���ȡ�����񡣵��ǳ���Ļ�������Ҫ���Ƶİ��Ӳ�������ȥ�ġ�������ڲ��ϲ��������޷�����`������Ҫ�Ķ�����");
        } else if (status == 1) {
            qm.sendAcceptDecline("���ż�����Ȼ������û���㹻�Ĳ��ϡ�����Ҳ����û�취�ˡ������ɣ������ȥ����#bС��ѩ�˵�Ƥ50��#k���ɣ��ҾͿ��Ը������ˣ�");
        } else if (status == 2) {
            qm.forceStartQuest();
            qm.sendNext("��ȥ��ذ������䣡�Ǻ��� #b50��С��ѩ�˵�Ƥ#k��");
        } else if (status == 3) {
            qm.dispose();
        }
    }
}