function start(mode, type, selection) {
    qm.dispose();
}

var status = -1;

function end(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 4) {
            qm.sendNext("Ŷ����������Ӣ�۹�Ȼ��æ��....�޿ޡ�Ҫ�Ǹı������ˣ���ʱ���������ҡ�");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        if (qm.getQuestStatus(21011) == 0) {
            qm.forceStartQuest();
            qm.dispose();
            return;
        }
        qm.sendNext("�ղ��Һ�������˵��Ӣ�ۻ�����...����������������ʲô��û�����������λ...��λ��Ӣ���𣿣�");
    } else if (status == 1) {
        qm.sendNextPrev("   #i4001171#");
    } else if (status == 2) {
        qm.sendNextPrev("���Ǹ��˰�...��Ȼ����������Ӣ�ۣ��������Ұ��������ո��ְɣ�˳���ٱ�һ���Ҿ͸����ˣ������Ȼ�����ǩ������...");
    } else if (status == 3) {
        qm.sendNextPrev("����...Ӣ����ôû�д������ء�������֪Ӣ�����Լ�����...����Ӧ���Ǻͺ�ħ��ʦ����ʱŪ���ˡ�");
    } else if (status == 4) {
        qm.sendYesNo("�պ����ÿ��ܻ�̫���ᣬ����#b������������ѽ��ɣ�#k �������͸�Ӣ�۵����Ӣ�ۿ����������е����... \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1302000# 1 #t1302000# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 35 ����ֵ");
    } else if (status == 5) {
        if (qm.getQuestStatus(21011) == 1) {
            qm.gainItem(1302000, 1);
            qm.gainExp(35);
        }
        qm.forceCompleteQuest();
        qm.sendNextPrevS("#b(������һ�㶼����Ӣ��...��������İ������֮ǰ������ù����𣿽�����ô����أ�)#k", 3);
    } else if (status == 6) {
        qm.summonMsg(16); // How to equip shiet
        qm.dispose();
    }
}