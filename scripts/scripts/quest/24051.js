var status = -1;

function start(mode, type, selection) {
    qm.sendNext("�Ҳ�������ģ�");
    qm.gainExp(2000);
    qm.forceCompleteQuest();
    qm.dispose();
}
function end(mode, type, selection) {
    qm.dispose();
}
