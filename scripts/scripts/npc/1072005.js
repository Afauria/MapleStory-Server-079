/**
 Magician Job Instructor - Magician's Tree Dungeon (108000200)
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
            cm.completeQuest(100007);
            cm.startQuest(100008);
            cm.sendOk("���Ǹ�������Ӣ�ۣ��������#i4031012# ��˹�������ģ�.");
        } else {
            cm.sendOk("����Ҫ�ռ� #b30�� #t4031013##k ������. ף�����.")
            cm.dispose();
        }
    } else if (status == 1) {
        cm.gainItem(4031012, 1);
        cm.warp(101000000);
        cm.dispose();
    }
}	