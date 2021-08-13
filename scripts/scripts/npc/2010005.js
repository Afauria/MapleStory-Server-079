/*
	Shuri the Tour Guide - Orbis (200000000)
*/

var pay = 2000;
var ticket = 4031134;
var msg;
var check;
var status = -1;
var access;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 1) {
	    cm.sendNext("��Ҫȥ�������Ұ�!");
	    cm.safeDispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	cm.sendSimple("����û��������̲����ν�� #b�ƽ�̲#k, ����ط���ά��������?? �ҿ������ڰ����㵽�Ǹ��ط�ֻ��Ҫ #b2000#k ��� �����������һ�� #b#t"+ ticket +"##k ��ô�Ϳ������ȥ..#k\r\n\r\n#L0##b��Ը�⸶ "+pay+" ���.#k#l\r\n#L1##b���� #t"+ticket+"##k#l\r\n#L2##bʲô�� #t"+ticket+"#?#k#l");
    } else if (status == 1) {
	if (selection == 0 || selection == 1) {
	    check = selection;
	    if (selection == 0) {
		msg = "�������븶 #b"+pay+" ���#k Ȼ��ȥ #m110000000#?";
	    } else if (selection == 1) {
		msg = "��������һ�� #b#t"+ticket+"##k �� #m110000000#?";
	    }
	    cm.sendYesNo(msg+" ��ô���ھ��߰ɣ�");
	} else if (selection == 2) {
		status = 2;
	    cm.sendNext("��һ������ʲô�� #b#t"+ticket+"##k. ���������Ƿǳ��������ġ������Ʊ���������ɺ�̲��һ����Ŀ�����ֻҪ�������ϣ���������Լ��ķ�ʽ���������ɺ�̲��ѡ��Ǿ��ǣ���ʹ���ǲ��ò�����Щ�������ҵ��������ҵı�������ʧȥ��һ���׼���ǰ����һ���ѵõĵ���.");
	}
    } else if (status == 2) {
	if (check == 0) {
	    if (cm.getMeso() < pay) {
		cm.sendOk("�����û���㹻�ķ�ҡ���");
		cm.safeDispose();
	    } else {
		cm.gainMeso(-pay);
		access = true;
	    }
	} else if (check == 1) {
	    if (!cm.haveItem(ticket)) {
		cm.sendOk("�����û�� #b#t"+ticket+"##k��������");
		cm.safeDispose();
	    } else {
		access = true;
	    }
	}
	if (access == true) {
	    cm.saveLocation("FLORINA");
	    cm.warp(110000000, 0);
	    cm.dispose();
	}
    } else if (status == 3) {
	cm.sendNext("�һ���û�������Ҿ;��ÿ���û������ϣ�����˰�������������������ȫ�ĵط������������ҵĹ��£�˭֪��������԰������������������úá���������κ����⣬����ʱ��");
    } else if (status == 4) {
	cm.dispose();
    }
}