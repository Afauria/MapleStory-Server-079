var status = -1;
function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
	return;
    }
    if (status == 0) {
		if (cm.getPlayer().getLevel() < 40 && cm.haveItem(4032485)) {
			cm.sendYesNo("�����ƶ������ص�ͼ?");
		} else {
			cm.sendOk("����ҪС��40������Ҫ����Ҫ�д���Ǯ��ģ��.");
			cm.dispose();
		}
} else {
	cm.spawnMob_map(9400613, 677000009 , 33, 66);
	cm.warp(677000008,0);
	cm.dispose();
    }
}