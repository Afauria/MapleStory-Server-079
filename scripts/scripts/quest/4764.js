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
            if (qm.getQuestStatus(4764) == 2) {
                qm.sendOk("���Ѿ���ȡ������������Ŭ����30�����Ի���½����");
                qm.completeQuest();
                qm.dispose();
            } else {
                qm.sendNext("��ϲ�㵱ǰ�ȼ��Ѿ�����#b20#k����");
            }
        } else if (status == 1) {
            qm.sendOk("��ϲ����ϵͳ������\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v5220007# 1��");
            qm.gainItem(5220007, 1);
            qm.completeQuest();
            qm.dispose();
        }
    }
}