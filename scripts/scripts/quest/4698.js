/*
 NPC Name: 		Asia
 Description: 		Quest - Asia
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        }
        if (status == 0) {
            qm.sendNext("�������Σ�գ�����������ս��������Ҫ��������Ա��������ʲôô�����ȥ�𣿣�");
        } else if (status == 1) {
            qm.warp(802000109, 0);
            //qm.forceStartQuest();
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
}