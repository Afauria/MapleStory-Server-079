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
            if (qm.getQuestStatus(4769) == 2) {
                qm.sendOk("���Ѿ���ȡ������������Ŭ����71�����Ի�ø��ཱ���");
                qm.completeQuest();
                qm.dispose();
            } else {
                qm.sendNext("��ϲ�㵱ǰ�ȼ��Ѿ�����#b70#k����");
            }
        } else if (status == 1) {
            qm.sendOk("��ϲ����ϵͳ������\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v5390000# x 2��");
            qm.gainItem(5390000, 2);
            qm.completeQuest();
            qm.dispose();
        }
    }
}