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
            if (qm.getQuestStatus(4762) == 2) {
                qm.sendOk("���Ѿ���ȡ������������Ŭ����15�����Ի���½����");
                qm.completeQuest();
                qm.dispose();
            } else {
                qm.sendNext("��ϲ�㵱ǰ�ȼ��Ѿ�����#b10#k����");
            }
        } else if (status == 1) {
            qm.sendOk("��ϲ����ϵͳ������\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n100000���#v5030001#");
            qm.gainMeso(100000);
            qm.gainItem(5030001, 1);
            qm.completeQuest();
            qm.dispose();
        }
    }
}