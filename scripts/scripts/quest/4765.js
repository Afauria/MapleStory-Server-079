var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (qm.getQuestStatus(4765) == 2) {
                qm.sendOk("���Ѿ���ȡ������������Ŭ����40�����Ի�ø��ཱ���");
                qm.completeQuest();
                qm.dispose();
            } else {
                qm.sendNext("��ϲ�㵱ǰ�ȼ��Ѿ�����#b30#k����");
            }
        } else if (status == 1) {
            qm.sendOk("��ϲ����ϵͳ������\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v2022345#*2#v5041000#*3");
            qm.gainItem(2022345, 2);
            qm.gainItem(5041000, 3);
            qm.completeQuest();
            qm.dispose();
        }
    }
}