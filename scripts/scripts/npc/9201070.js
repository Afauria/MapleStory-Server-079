/* Nerbit
	NLC Random Eye Change.
*/
var status = -1;
var beauty = 0;
var facetype;

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
	cm.sendNext("�ˣ�����#p9201070# ������� #b#t5152033##k �ҿ��԰�������Ը��~");
    } else if (status == 1) {
	cm.sendYesNo("�Ƿ�Ҫʹ�� #b#t5152033##k����");
    } else if (status == 2){
	var face = cm.getPlayerStat("FACE");

	if (cm.getPlayerStat("GENDER") == 0) {
	    facetype = [20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012];
	} else {
	    facetype = [21001, 21002, 21003, 21004, 21005, 21006, 21008, 21012, 21014, 21016];
	}
	for (var i = 0; i < facetype.length; i++) {
	    facetype[i] = facetype[i] + face % 1000 - (face % 100);
	}
	
	if (cm.setRandomAvatar(5152033, facetype) == 1) {
	    cm.sendOk("���ܣ���");
	} else {
	    cm.sendOk("�z...ò��û��#b#t5152033##k");
	}
	cm.dispose();
    }
}