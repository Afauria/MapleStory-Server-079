var status = -1;
var map = 209000012;
var num = 3;
var maxp = 3;


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
		var rs = cm.��ȡָ����ͼ�������(209000015);
			var jy = cm.getPlayer().getExp();
			 var wj =  cm.��ȡָ����ͼ�������(209000015);
			  var jb = cm.getMeso();
		var selStr = "#rǿǿ�Կ��������뷿��μӻ����ĶԿ�����10%��";
		for (var i = 1; i < num; i++) {
			selStr += "\r\n#b#L" + i + "#ǿǿ�Կ��� " + i + " (" + cm.getPlayerCount(map + i) + "/" + maxp + ")#l#k";
		}
	cm.sendSimple(selStr);
    } else if (status == 1) {
		if (selection < 0 || selection >= num) {
			cm.dispose();
		} else if (cm.getPlayerCount(map + selection) >= maxp) {
			cm.sendNext("��������Ѿ����ˣ����Ժ��ٳ���!");
			status = -1;
		} else {
			var jf = cm.getBossRank("�Կ�����",2);
			cm.warp(map + selection, 0);
			cm.setBossRankCount("�Կ�����","-"+jf/10+"");
			cm.dispose();

		}
    }
}