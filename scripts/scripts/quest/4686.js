/*
 NPC Name: 		Ponicher
 Description: 		Quest - A Battle Against Vergamot
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
            qm.sendNext("��ȷ����Ҫ�뿪��������ս������Ī���Ǻܲ����׵ģ���Щ��Ҫ��ͻ���ǵ�Ŭ���ܶ������ܴ�����������׼�����ˣ��ҽ����㵽������Ī�صĻ��أ�׼��������");
        } else if (status == 1) {
            qm.warp(802000209, 0);
            //qm.forceStartQuest();
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
}