
var status = -1;

function start(mode, type, selection) {
    if (qm.canHold(1142129, 1) && !qm.haveItem(1142129, 1) && qm.getPlayer().getLevel() >= 10 && ((qm.getPlayer().getJob() / 100) | 0) == 21) {
        qm.gainItem(1142129, 1);
        qm.forceStartQuest();
        qm.forceCompleteQuest();
    }
    qm.dispose();
}

function end(mode, type, selection) {
    if (qm.canHold(1142129, 1) && !qm.haveItem(1142129, 1) && qm.getPlayer().getLevel() >= 10 && ((qm.getPlayer().getJob() / 100) | 0) == 21) {
        qm.gainItem(1142129, 1);
        qm.forceStartQuest();
        qm.forceCompleteQuest();
    }
    qm.dispose();
}