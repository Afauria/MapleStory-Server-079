var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 1) {
            qm.sendNext("��Ӣ�ۺ��а���������벻Ҫ�ܾ���");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendSimple("����Ӣ��...�Һ�����ร�  \r\n#b#L0#(���ߵ�����)#l");
    } else if (status == 1) {
        qm.askAcceptDecline("�Ҵ���ǰ�;�������Ӣ��Ҫ����һ������...��֪����æ�Żش�ׯ������...���������ҳ��ĵ�������");
    } else if (status == 2) {
        qm.forceStartQuest();
        qm.sendNextS("����Ĳ��Ͼͷ����⸽�����������档��Ȼ�е��鷳���������������Ӵ��ƺ�����Ĳ��� #b#t4032309##k �� #b#t4032310##k���������Ҿͻ����̰�����װ��", 1);
    } else if (status == 3) {
        qm.summonMsg(18);
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNext("���϶�������������ô������һ�£�ֻҪ������װһ��... \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i3010062# 1 #t3010062# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 95 ����ֵ");
    } else if (status == 1) {
        if (qm.getQuestStatus(21013) == 1) {
            qm.gainItem(3010062, 1);
            qm.gainExp(95);
            qm.forceCompleteQuest();
        }
        qm.sendNextPrevS("���ˣ����������ˣ��ٺ٣�������Ӣ��Ҳ��ƣ�͵�ʱ������ҴӺ�����ǰ������Ӣ��һ�����ӵ������", 1);
    } else if (status == 2) {
        qm.sendNextPrevS("������Ӣ��Ҳ��������Զ����ǿ��Ӣ��Ӧ��Ҳ��ƣ�ͳ�����ʱ����ʱҲ��е������������ܹ��˷���Щ���˲��䵱Ӣ�۲�����", 1);
    } else if (status == 3) {
        qm.summonMsg(19);
        qm.dispose();
    }
}