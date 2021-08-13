/*
	NPC Name: 		Palakeen
	Map(s): 		Zipangu - Mushroom Shrine
	Description: 		Kaede Castle teleporter
*/

var status = -1;
var cost = 3000;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 1 || status == 0 && mode == -1) {
	    cm.sendNext("��Ҫ��ʱ���������Ұɡ�");
	    cm.dispose();
	    return;
	}
	status--;
    }
    switch (cm.getMapId()) {
	case 800040000: {
	    if (status == 0) {
		cm.sendNext("�Ƿ�Ҫ��ȥ�Ŵ����磿 һ�� " + cost + "��Ҿͺ��ˡ�");
		} else if (status == 1) {
		cm.sendYesNo("�����Ҫ��ȥ��??");
	    } else if (status == 2) {
		cm.sendNext("���Ҿʹ�����ȥ����");
	    } else if (status == 3) {
		cm.gainMeso(-cost);
		cm.warp(800000000, 0);
		cm.dispose();
	    }
	    break;
	}
	default: {
	    if (status == 0) {
		cm.sendNext("�Ƿ�Ҫȥ��Ҷ�ųǣ� һ�� " + cost + "��Ҿͺ��ˡ�");
		} else if (status == 1) {
		cm.sendYesNo("�����Ҫȥ��??");	
	    } else if (status == 2) {
		cm.sendNext("���Ҿʹ���ȥ����");
	    } else if (status == 3) {
		cm.gainMeso(-cost);
		cm.warp(800040000, 0);
		cm.dispose();
	    }
	    break;
	}
    }
}