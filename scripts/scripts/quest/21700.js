var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 4) {
            qm.sendNext("��ѽ�� ��Ҫ�ܾ�, �Ǿ����Լ�һ��Ҳ������������˼�� �����Լ�һ���ˣ����������˵İ���Ӧ�ÿ��Եõ����õĽ����. ����Ҳ��ѧѧ���������ദ�ķ�����.");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNextS("һ����������ʲô���� ��Ȼ�ռ�֮ì�ϳ��������. ��ô�����#bʹ�ù��ռ�֮ì��Ӣ��, ս��#kû��. �����⻹û������ʲô�أ� �������ռ�֮ì��صļ���...", 8);
    } else if (status == 1) {
        qm.sendNextPrevS("#b(�������˼����ǵõļ���.)#k", 2);
    } else if (status == 2) {
        qm.sendNextPrevS("��Ȼ���൫Ҳ���ջ���. ��ô��������Ҫ�þ�ȫ���һ���ǰ��������. ��Ȼɥʧ����, �������������������£�һ�����Ժܿ���һ������ġ�", 8);
    } else if (status == 3) {
        qm.sendNextPrevS('Ҫ��ô�һ������أ�', 2);
    } else if (status == 4) {
        qm.askAcceptDecline("�����... ֻ��һ���취. ����! ����! ����! �����������Ļ�������һ����������һ��Ǹ��������ĸо���");
    } else if (status == 5) {
        qm.forceStartQuest();
        qm.sendNext("���ʹ�ø���Ϥ������Ӧ�û���� �Ѹ���#b�ռ�֮ì#k һ��������ʱ������Чʹ��. �����Ǹ�����...");
    } else if (status == 6) {
        qm.sendPrev("����, �Ե�. ���ڿ�ʼ����ô���ź���........");
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
