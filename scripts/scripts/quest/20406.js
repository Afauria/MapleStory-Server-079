var status = -1;

function start(mode, type, selection) {
    qm.sendNext("Ҳ����Ӧ���ٻص�#b������Ѩ#k �����Ƿ�����ֵļ���...");
    qm.forceStartQuest();
    qm.forceCompleteQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    qm.forceStartQuest();
    qm.forceCompleteQuest();
    qm.dispose();
}