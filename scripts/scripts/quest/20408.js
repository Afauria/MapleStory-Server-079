/*
 * Cygnus 2nd Job advancement - Proof of test
 * Soul
 */

var status = -1;

function start(mode, type, selection) {
    end(mode, type, selection); //idk lol
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
        qm.sendYesNo("����ڻʼ���ʿ�ţ���ô�����Ϊһ����ʿ��Ա��");
    } else if (status == 1) {
        qm.forceCompleteQuest();
        if (qm.getJob() == 1111) {
            qm.changeJob(1112);
        } else if (qm.getJob() == 1211) {
            qm.changeJob(1212);
        } else if (qm.getJob() == 1311) {
            qm.changeJob(1312);
        } else if (qm.getJob() == 1411) {
            qm.changeJob(1412);
        } else if (qm.getJob() == 1511) {
            qm.changeJob(1512);
        }
        qm.sendNext("�����ڻʼ���ʿ�ŵ���ʿ��Ա��");
    } else if (status == 3) {
        qm.sendPrev("���ڻ�ȥ��Ů�ʰɡ�");
        qm.dispose();
    }
}