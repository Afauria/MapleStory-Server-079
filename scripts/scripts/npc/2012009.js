/* Riza the Assistant
	Orbis Random Eye Change.
*/
var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }
    
    if (status == 0) {
	cm.sendNext("��, ����#p2012009# �������һ�� #b#t5152004##k, �ҿ��԰���������Σ�");
    } else if (status == 1) {
	cm.sendYesNo("��ȷ��Ҫʹ�� #b#t5152004##k?");
    } else if (status == 2){
	var face = cm.getPlayerStat("FACE");
	var facetype;

	if (cm.getPlayerStat("GENDER") == 0) {
	    facetype = [20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012, 20014];
	} else {
	    facetype = [21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21012, 21014];
	}
	for (var i = 0; i < facetype.length; i++) {
	    facetype[i] = facetype[i] + face % 1000 - (face % 100);
	}

	if (cm.setRandomAvatar(5152004, facetype) == 1) {
	    cm.sendOk("����!");
	} else {
	    cm.sendOk("�����û��#t5152004#");
	}
	cm.dispose();
    }
}