var status = -1;
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        if (cm.getPlayer().getLevel() < 40 && cm.haveItem(4032492)) {
            cm.sendYesNo("�����ȥ����ְҵͷ����?");
        } else {
            cm.sendOk("����ҪС��40����������Ҫ#v4032492#.");
            cm.dispose();
        }
    } else if (status == 1) {
        if (cm.getPlayerCount(677000003) == 0) {
            cm.warp(677000003, 0);
            cm.killMob(9400610);
            cm.spawnMob_map(9400610, 677000003, 186, 35);
            cm.dispose();
        } else {
            cm.sendOk("�����Ѿ������ڽ���ְҵͷ�����ˣ����Ժ�����");
            cm.dispose();
        }
    }
}