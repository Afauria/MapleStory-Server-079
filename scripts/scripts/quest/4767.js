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
            if (qm.getQuestStatus(4767) == 2) {
                qm.sendOk("���Ѿ���ȡ������������Ŭ����60�����Ի�ø��ཱ���");
                qm.dispose();
            } else {
                qm.sendNext("��ϲ�㵱ǰ�ȼ��Ѿ�����#b50#k����");
            }
        } else if (status == 1) {
            qm.sendOk("��ϲ����ϵͳ������\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v5121015#*10 ");
            qm.gainItem(5121015, 10);
            qm.completeQuest();
            qm.dispose();
        }
    }
}