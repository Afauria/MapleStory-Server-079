var status = -1;

function start(mode, type, selection) {
    qm.sendNext("�Ҳ�֪����Ҳ������ȥ�� #b��ʬ#k �񵽽�ʬ������������һ�����衣");
    qm.forceStartQuest();
    qm.forceCompleteQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    qm.forceStartQuest();
    qm.forceCompleteQuest();
    qm.dispose();
}