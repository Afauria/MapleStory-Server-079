/*
 NPC Name: 		Kinu
 Description: 		Quest - Cygnus tutorial helper
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 2) {
            qm.sendNext("��ͨ�����ǻ������ܣ�������ʹ�á���Ҫ����Ҫ��ס��ʹ�ü����������������Ǻ���Ҫ�ġ��ҽ��������¿��ǡ�");
            qm.safeDispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNext("��һֱ�ڵȴ���, #h0#. �ҵ������� #p1102006# Ϊ��Ҫ���������ҵ��ֵܡ� ���ԣ����Ѿ�ѧ�������ʹ����ͨ�����ˣ�\r\n ���˽���������˽� #b���ʹ�ü���#k, ��ᷢ���������а�����");
    } else if (status == 1) {
        qm.sendNextPrev("����ÿ����������ü��ܵ���������ζ���������һЩ�����ˣ� �밸 #bK ��#k ������ļ���. �ú�������ļ��ܵ����ڼ����ϡ� #b������������ݼ��ϸ�����ʹ�á�#k.");
    } else if (status == 2) {
        qm.askAcceptDecline("ʱ�������죬��������Ҫ��ϰ��... ��������ᷢ�ֺܶ�� #o100121# �����ŵ�ͼ������Ҫ�� #r3ֻ #o100121##k ʹ����� #b����#b ���� Ȼ����� 1 #b#t4000483##k ��Ϊ֤��OK�� �һ����������ġ�");
    } else if (status == 3) {
        qm.forceStartQuest();
        qm.summonMsg(8);
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
        qm.sendNext("���Ѿ��ɹ��ش���� #o100121# �����Ҵ����� һ�� #t4000483#. ���Ƿǳ�����ӡ�����! #b�������� 3 �����ܵ��� ����ÿһ��������ʱ��, ����ø��༼�ܵ����������������ż�ͷ��ȥ���ҵ��ֵ� #b#p1102007##k, ������������һ����ô����\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#fUI/UIWindow.img/QuestIcon/8/0# 40 ����ֵ");
    } else if (status == 1) {
        qm.gainItem(4000483, -1);
        qm.forceCompleteQuest();
        qm.gainExp(40);
        qm.dispose();
    }
}