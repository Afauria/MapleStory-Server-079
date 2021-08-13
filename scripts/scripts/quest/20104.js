/*
 * Cygnus 1st Job advancement - Night Walker
 */

var status = -1;

function end(mode, type, selection) {
    if (mode == 0) {
        if (status == 0) {
            qm.sendNext("�������..�ǳ���Ҫ.");
            qm.safeDispose();
            return;
        }
        status--;
    } else {
        status++;
    }
    if (status == 0) {
        qm.sendYesNo("�����������? ����������ľ����, �����������Ҫ��ʲô. ����Ҫ��Ϊ ��ҹ������?");
    } else if (status == 1) {
        qm.sendNext("��ϲ�ɹ�תְ��");
        if (qm.getJob() != 1400) {
            qm.gainItem(1472061, 1);
            qm.gainItem(2070015, 800);
            qm.gainItem(2070015, 800);
            qm.gainItem(1142066, 1);
            qm.resetStats(4, 4, 4, 4);
            qm.expandInventory(1, 4);
            qm.expandInventory(4, 4);
            qm.changeJob(1400);
        }
        qm.forceCompleteQuest();
    } else if (status == 2) {
        qm.sendNextPrev("�һ����������ϵ�װ�����ռ�");
    } else if (status == 3) {
        qm.sendNextPrev("���ˣ�.");
        qm.safeDispose();
    }
}