/**
	VIP Cab - Victoria Road : Ellinia (101000000)
**/

var status = -1;
var cost;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status >= 1) {
	    cm.sendNext("�������Ҳ�кܶ���û̽�����ĵط�Ŷ�����������б�Ҫȥ���Ϲ㳡����������ҡ�");
	    cm.safeDispose();
	    return;
	}
	status--;
    }

    if (status == 0) {
	cm.sendNext("��������10000��ң��Ҿ�����ȥ#b���Ϲ㳡#k.");
    } else if (status == 1) {
	var job = cm.getJob();
	if (job == 0 || job == 1000 || job == 2000) {
	    cm.sendYesNo("���Ƕ������аٷ�90���Ż�Ŷ���������Ҫ��ȫ����#b���Ϲ㳡#k,�ǾͿ�㸶Ǯ�ɣ�");
	    cost = 1000;
	} else {
	    cm.sendYesNo("�Ǳ���һ��24Сʱ�ŵ����Բ�������Ҫ�Ĳ���Ʒ����㸶Ǯ�ɣ���#b10,000���#k�㶼������ô?");
	    cost = 10000;
	}
    } else if (status == 2) {
	if (cm.getMeso() < cost) {
	    cm.sendNext("��ʡʡ�ɣ���ôһ��СǮ����������������⳵��ȥ��������");
	    cm.safeDispose();
	} else {
	    cm.gainMeso(-cost);
	    cm.warp(105070001, 0);
	    cm.dispose();
	}
    }
}