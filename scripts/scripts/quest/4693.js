/*
 NPC Name: 		Commander Grauda
 Description: 		Quest - Elliminate Dunas Squad
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
            qm.sendNext("���ˣ��㼴����ս���ˣ�лл������ֻ������֪�������˿����Ƿǳ�ǿ��ġ���׼��������");
        } else if (status == 1) {
            qm.warp(802000409, 0);
            //qm.forceStartQuest();
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
}