/**
 Warrior Job Instructor - Warrior's Rocky Mountain (108000300)
 **/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        if (cm.haveItem(4031013, 30)) {
            cm.removeAll(4031013);
            cm.completeQuest(100004);
            cm.startQuest(100005);
            cm.sendOk("���Ǹ�������Ӣ�ۣ������#i4031012#���������������������.");
        } else {
            cm.sendOk("����Ҫ�ռ� #b30�� #t4031013##k������. ף�����.")
            cm.dispose();
        }
    } else if (status == 1) {
        cm.gainItem(4031012, 1);
        cm.warp(102000000, 0);
        cm.dispose();
    }
}	