var status = -1;
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        if (cm.getPlayer().getLevel() < 40 && cm.haveItem(4032491)) {
            cm.sendYesNo("�����ȥ����ְҵͷ����?");
        } else {
            cm.sendOk("����ҪС��40����������Ҫӡ�ڰ��ϰ��ѫ��.");
            cm.dispose();
        }
    } else if (status == 1) {
        if (cm.getPlayerCount(677000005) == 0) {
            cm.warp(677000005, 0);
            cm.killMob(9400609);
            cm.spawnMob_map(9400609, 677000005, 79, 85);
            cm.dispose();
        } else {
            cm.sendOk("�����Ѿ������ڽ���ְҵͷ�����ˣ����Ժ�����");
            cm.dispose();
        }
    }
}