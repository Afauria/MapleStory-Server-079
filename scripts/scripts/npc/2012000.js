var ticket = new Array(4031047, 4031074, 4031331, 4031576);
var cost = new Array(5000, 6000, 30000, 6000);
var tmsg = new Array(15, 10, 10, 10);
var mapNames = new Array("ħ������", "��߳�", "��ľ��", "���ﰲ��");
var mapName2 = new Array("ħ������", "��߳�", "��ľ��", "���ﰲ��");
var select;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if(mode == -1) {
		cm.dispose();
	} else {
		if(mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if(mode == 0) {
			cm.sendNext("�㻹��ʲô����������û������");
			cm.dispose();
			return;
		}
		if(mode == 1) {
			status++;
		}
		if(status == 0) {
			var where = "���ã��������֮����ƱԱ���Ҹ������ۿ������ش�Ʊ�����빺��ȥ����Ĵ�Ʊ�أ�";
			for (var i = 0; i < ticket.length; i++) {
				where += "\r\n#L" + i + "##b" + mapNames[i] + "#k#l";
			}
			cm.sendSimple(where);
		} else if(status == 1) {
			select = selection;
			cm.sendYesNo("���֮�ǿ��� #b" + mapName2[select] + "#k �ķɴ�ÿ "+tmsg[select]+" ����һ�࣬��Ʊ���ۼ� #b"+cost[select]+" ���#k����ȷ��Ҫ������ #b"+mapName2[select]+"#k �Ĵ�Ʊ��");
		} else if(status == 2) {
			if(cm.getMeso() < cost[select] || !cm.canHold(ticket[select])) {
				cm.sendOk("��ȷ������ #b" + cost[select] + " ���#k�� û�д�Ʊ�ǲ����ԵǴ��ġ�");
				cm.dispose();
			} else {
				cm.gainMeso(-cost[select]);
				cm.gainItem(ticket[select],1);
				cm.dispose();
			}
		}
	}
}