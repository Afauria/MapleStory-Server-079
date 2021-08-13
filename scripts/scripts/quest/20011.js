/*
 NPC Name: 		Kisan
 Description: 		Quest - Cygnus tutorial helper
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 2) {
            qm.sendNext("You don't want to? It's not even that hard, and you'll receive special equipment as a reward! Well, give it some thought and let me know if you change your mind.");
            qm.safeDispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNext("����෽�����ԣ���������ķ���������� #b��ͨ����#k. ��������Ҫ����������ֵ���������Ϊ��ֻ�ǰڶ���������ڹ���һ���򵥵����顣");
    } else if (status == 1) {
        qm.sendNextPrev("�밴 #bCtrl#k ʹ�������ͨ����. ͨ���� Ctrl λ�� #b���̵����½�#k, ���㲢����Ҫ�Ҹ�����Բ��ԣ� ����Ctrl �����Թ�����");
    } else if (status == 2) {
        qm.askAcceptDecline("���ڣ����Ѿ����Թ��ˣ�����һ��Ҫ�����������ⷽ�棬������ҵ���� #r#o100120##k ��Ү�׸�, �����������ѡ�񡣳������� #r1ֻ#k. ��������Ҹ���Ľ�����.");
    } else if (status == 3) {
        qm.forceStartQuest();
        qm.summonMsg(4);
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
        qm.sendNext("�ܰ�ࡿ���ѧ�úܿ죬����һ����ǿ������ߣ�");
    } else if (status == 1) {
        qm.sendNextPrev("����װ���ǹ���ר���ġ� �����͸��㴩���������ɣ� Ȼ���ռ�ͷ�ķ���ȥ���ҵ��ֵ� #b#p1102006##k. �����������һ������ô���� \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1002869# #t1002869# - 1 \r\n#i1052177# #t1052177# - 1 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 30 ����ֵ");
    } else if (status == 2) {
        qm.gainItem(1002869, 1);
        qm.gainItem(1052177, 1);
        qm.forceCompleteQuest();
        qm.gainExp(30);
        qm.summonMsg(6);
        qm.dispose();
    }
}