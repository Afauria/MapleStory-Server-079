var status = -1;
var map = 209000014;
var num = 2;
var maxp = 300;


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
		var selStr = "#r�� ̨ �� �� �� #k����ӭ��μ� - \r\n��ǰ��̨����;#r"+rs+"#k\r\n���ƽ�����棻#d"+((wj*10000)+(jb/10))+" #k\r\n���ƽ����ʧ��#d"+jb/10*wj+" #k\r\n����ƽ�����棻#d"+jy/50*wj+" #k\r\n����ƽ����ʧ��#d"+jy/10*wj+" #k\r\n#r˵��������������μӵ��������������ء�#k";
		for (var i = 1; i < num; i++) {
			selStr += "\r\n#b#L" + i + "#������̨������#l#k";
		}
	cm.sendSimple(selStr);
    } else if (status == 1) {
		if (selection < 0 || selection >= num) {
			cm.dispose();
		} else if (cm.getPlayerCount(map + selection) >= maxp) {
			cm.sendNext("��������Ѿ����ˣ����Ժ��ٳ���!");
			status = -1;
		} else {
			cm.warp(map + selection, 0);
			cm.gainItem(4032217,-2000);
			cm.dispose();

		}
    }
}