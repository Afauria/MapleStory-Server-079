var status = -1;

function start(mode, type, selection) {
    if (mode > 0)
        status++;
    else {
        qm.dispose();
        return;
    }
    if (status == 0)
        qm.sendAcceptDecline("������������ˡ��ҿ��Կ�������10���ˡ���������������˸��һ˿ϣ��Ŭ����Ϊһ����ʿ��������ѵ���Ѿ�������������ʱ��Ϊ�����ľ�����");
    else if (status == 1) {
        qm.sendOk("�������������Ǿ�����ʿ�ŵ��쵼���ڵ����㡣");
        qm.forceStartQuest();
        qm.forceCompleteQuest();
        qm.dispose();
    }
}