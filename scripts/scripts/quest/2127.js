var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            qm.sendNext("�Ƿ��Ѿ�׼����ǰ��ɳĮ��??");
        } else if (status == 1) {
            qm.sendAcceptDecline("�����˵û�о�����...");
        } else if (status == 2) {
            qm.forceStartQuest();
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (qm.getPlayerStat("HP") < 50) {
                qm.sendNext("�ҿ������û׼���ã�׼�����������Ұɡ�");
                qm.dispose();
            } else {
                qm.sendNext("�Ƿ��Ѿ�׼����ǰ��ɳĮ��??");
            }

        } else if (status == 1) {
            qm.sendNextPrev("���Ѿ��������.");
        } else if (status == 2) {
            qm.warp(260000000);
            qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}