function start() {
	if (cm.canHold(4031850,1)) {
		if (cm.haveItem(4031847, 1)) {
			cm.removeAll(4031847);
			cm.gainItem(4031848, 1);
			cm.sendOk("�ʵ���װʢţ�̣�ţ��ƿ����װ1/3ţ�̡�");
			cm.dispose();
		} else if (cm.haveItem(4031848, 1)) {
			cm.removeAll(4031848);
			cm.gainItem(4031849, 1);
			cm.sendOk("�ʵ���װʢţ�̣�ţ��ƿ����װ2/3ţ�̡�");
			cm.dispose();
		} else if (cm.haveItem(4031849, 1)) {
			cm.removeAll(4031849);
			cm.gainItem(4031850, 1);
			cm.sendOk("�ʵ���װʢţ�̣�ţ��ƿ����װ��ţ�̡�");
			cm.dispose();
		} else {
			cm.sendOk("������û��ţ��ƿ0.0");
			cm.dispose();
		}
		} else {
			cm.sendOk("�㲡����??");
			cm.dispose();
		}
}