var status = -1;
var map = 105040322;
var num = 6;
var maxp = 1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status <= 1) {
	    cm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
		var selStr = "ѡ��һ������Ҫȥ�ķ����.";
		for (var i = 1; i < num; i++) {
			selStr += "\r\n#b#L" + i + "#���ȿ־���﷿�� " + i + " (" + cm.getPlayerCount(map + i) + "/" + maxp + ")#l#k";
		}
	cm.sendSimple(selStr);
    } else if (status == 1) {
		if (selection < 0 || selection >= num) {
			cm.dispose();
		} else if (cm.getHour() < 1 || cm.getHour() > 22 ) {
           cm.sendNext("�־���﷿�俪��ʱ�䣻#r21:00-22:00��");
            cm.dispose();
		} else if (cm.getPlayerCount(map + selection) >= maxp) {
			cm.sendNext("��������Ѿ����ˣ����Ժ��ٳ���!");
			status = -1;
		} else {
			cm.warp(map + selection, 0);
			cm.worldMessage(6,"��� "+cm.getName()+" ���롾���ȿ־�Ĺ��﷿�䡿��");
			cm.dispose();

		}
    }
}