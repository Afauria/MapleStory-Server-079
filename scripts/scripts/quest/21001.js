var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            qm.sendNext("���� ս��ܾ��ˣ�");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.askAcceptDecline("...��㱻����...�죡������ȥ�Һ����ȴ��ˣ�");
    } else if (status == 1) {
        if (qm.getQuestStatus(21001) == 0) {
            qm.gainItem(4001271, 1);
            qm.forceStartQuest(21001, null);
        }
        qm.warp(914000300, 0);
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            qm.sendNext("�����أ� ������������Щ���ӣ��Ϳ�������������ɣ�");
            qm.dispose();
            return;
        } else if (status == 8) { // watching the introduction
            if (qm.haveItem(4001271)) {
                qm.gainItem(4001271, -1);
            }
            qm.MovieClipIntroUI(true);
            qm.forceCompleteQuest();
            qm.warp(914090010, 0);
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendYesNo("��������ƽ�����¹����ˣ� �����أ�������Щ���Ӵ���������");
    } else if (status == 1) {
        qm.sendNext("����̫����... ����̫����.....");
    } else if (status == 2) {
        qm.sendNextPrevS("������Ϸ��д��ɣ�ûʱ���ˡ�", 3);
    } else if (status == 3) {
        qm.sendNextPrev("�ԣ����ˣ����ڲ���̸��Щ�����ʱ������ħ��ʦ����Ϣ�Ѿ������ؿ����ˣ������Ѿ�������۵�λ���ˣ����Ͽ�����Ļ����ͻᱻ�������š�");
    } else if (status == 4) {
        qm.sendNextPrevS("���̳�����", 3);
    } else if (status == 5) {
        qm.sendNextPrev("ս����Ҳ���Ϸ��۰ɣ�����Ȼ�˽�������յ����һ�̵�����...�����Ѿ�̫���ˣ������������ͽ�������ͬ�飬������һ��ǰ������۰ɣ�");
    } else if (status == 6) {
        qm.sendNextPrevS("���Բ��У�", 3);
    } else if (status == 7) {
        qm.sendNextPrevS("�����ȣ�����ȥ����۰ɣ��Ҿ��Բ������ĵģ����Ǻ�����ڡ���Ҫ��ͬ����һ��ȥ�Ը���ħ��ʦ��", 3);
    } else if (status == 8) {
        qm.sendYesNo("������������������");
    } else if (status == 9) { // Not watching
        if (qm.haveItem(4001271)) {
            qm.gainItem(4001271, -1);
        }
        qm.forceCompleteQuest();
        qm.warp(140090000, 0);
        qm.dispose();
    }
}
