var status = -1;

function start(mode, type, selection) {
    qm.sendNext("лл����ɴ�����\r\n������ῴ���������صǡ�");
    qm.forceCompleteQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    qm.forceCompleteQuest();
    qm.dispose();
}
