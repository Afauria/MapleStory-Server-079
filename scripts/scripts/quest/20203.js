/*
 * Cygnus 2nd Job advancement - Proof of test
 * Wind Breaker
 */

var status = -1;

function start(mode, type, selection) {
}

function end(mode, type, selection) {
    if (mode == 0) {
        if (status == 0) {
            qm.sendNext("�Ҳ��㻹û׼���á�");
            qm.dispose();
            return;
        } else if (status >= 2) {
            status--;
        } else {
            qm.dispose();
            return;
        }
    } else {
        status++;
    }
    if (status == 0) {
        if (qm.getQuestStatus(20203) == 0) {
            qm.forceStartQuest();
            qm.dispose();
        } else {
            if (qm.haveItem(4032098, 30)) {
                qm.sendYesNo("���ԣ���׼���ö�ת�ˣ�");
            } else {
                qm.dispose(); // Hack
            }
        }
    } else if (status == 1) {
        if (!qm.canHold(1142067)) {
            qm.sendOk("��ȷ��װ�����Ƿ��㹻��");
            qm.dispose();
        } else {
            qm.forceCompleteQuest();
            if (qm.getJob() != 1310) {
                qm.changeJob(1310); // Wind Breaker
                qm.gainItem(4032098, -30);
                qm.gainItem(1142067, 1);
            }
            qm.sendNext("ѵ���Ѿ������������ڻʼ���ʿ�ŵ���ʿ��Ա��");
        }
    } else if (status == 2) {
        qm.sendPrev("���ˣ�");
        qm.dispose();
    }
}