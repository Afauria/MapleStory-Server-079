/*
 NPC Name: 		Kia
 Description: 		Quest - Cygnus tutorial helper
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 2) {
            qm.sendNext("�����Ҫ�ͻ������ҡ�");
            qm.safeDispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNext("#b(*����*)#k");
    } else if (status == 1) {
        qm.sendNextPrev("�٣����ŵ����ˣ�. �Ҳ�֪������һ���ÿ�. ���ǹ��� #p1102006# ��̸����. ��ӭ! ���� #p1102007#, �ҵ���Ȥ������ #b����#k. �����ڿ�����һ����Ϊ��ӭ������");
    } else if (status == 2) {
        qm.sendNextPrev("�𼱣��Ҳ��ܸ���һ�����ӣ���Ϊ��û���㹻�Ĳ��ϡ������ҵ�����Ҫ�Ĳ��ϣ���������򸽽�����ᷢ�ֺܶ������������Ʒ�����ܲ��ܸ��Ҵ��� һ�� #t4032267# ��һ��  #t4032268# ����Щ�������档");
    } else if (status == 3) {
        qm.sendNextPrev("��֪����δ����Ǹ�����? ʹ����� #b��ͨ����#k ���������ӡ�");
    } else if (status == 4) {
        qm.askAcceptDecline("����� 1�� #b#t4032267##k �� 1�� #b#t4032268##k ����Щ��������. Ȼ���Ҿͻ���һ����������Ӹ��㣬 �һ�����������㣡");
    } else if (status == 5) {
        qm.forceStartQuest();
        qm.summonMsg(9);
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        qm.sendNext("���Ѿ�����ˣ�\r\n̫���ˣ�");
    } else if (status == 1) {
        qm.sendNextPrev("�����Ǹ���� #t3010060#. ����ô��?? Ư���ɺǺ�^^ ����� #b�����ӷŵ���ݼ����沢ʹ������HP�ָ����졣#k. ������ #bװ��������#k ����ĵ�����, ������ȷ���ǲ����յ������� #b#p1102008##k. ���ˣ��밴�ռ�ͷָʾ����ῴ����һ���ˡ� \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i3010060# 1 #t3010060# \r\n#fUI/UIWindow.img/QuestIcon/8/0# 95 ����ֵ");
    } else if (status == 2) {
        qm.gainItem(4032267, -1);
        qm.gainItem(4032268, -1);
        qm.gainItem(3010060, 1);
        qm.forceCompleteQuest();
        qm.forceCompleteQuest(20000);
        qm.forceCompleteQuest(20001);
        qm.forceCompleteQuest(20002);
        qm.forceCompleteQuest(20015);
        qm.gainExp(95);
        qm.summonMsg(10);
        qm.dispose();
    }
}