/*
Lord Jonathan - Nautilus' Port
*/

function start() {
    if (cm.getJob() == 522 && cm.getPlayerStat("LVL") >= 120) {
	if (!cm.hasSkill(5221003)) {
	    cm.teachSkill(5221003, 0, 10);
	}
    }
    cm.sendOk("����˭���ڸ���˵���������ֻ�����ģ�ȥ�ұ��ˣ���");
}

function action(mode, type, selection) {
    cm.dispose();
}
