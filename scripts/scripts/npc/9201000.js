var status = -1;
var firstSelection = -1;
var secondSelection = -1;
var ingredients_0 = Array(4011004, 4021007);
var ingredients_1 = Array(4011006, 4021007);
var ingredients_2 = Array(4011007, 4021007);
var ingredients_3 = Array(4021009, 4021007);
var mats = Array();
var mesos = Array(1000000, 2000000, 3000000);

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	if (cm.getPlayer().getGender() != 0) {
		cm.sendOk("�ܱ�Ǹ����ֻ�ܰ���������ָ��");
		cm.dispose();
	}
	if (cm.getPlayer().getMarriageId() > 0) {
	    cm.sendNext("��ϲ���飡��");
	    cm.dispose();
	} else {
	    cm.sendSimple("�ˣ��ҿ���Ϊ����ʲô����\r\n#b#L0#��һ���¹��ָ#l\r\n#L1#��һ���ǹ��ָ#l\r\n#L2#��һ�����Ľ�ָ#l\r\n#L3#��һ����ʯ��ָ#l#k");
	}
    } else if (status == 1) {
	firstSelection = selection;
	cm.sendSimple("�����ף�����Ҫ����������\r\n#b#L0#1 ����#l\r\n#L1#2 ����#l\r\n#L2#3 ����#l#k");
    } else if (status == 2) {
	secondSelection = selection;
	var prompt = "����������£�Ϊ��Ҫ������Ʒ�ʵ�װ������ȷ�����пռ�������װ������#b";
	switch(firstSelection) {
	    case 0:
		mats = ingredients_0;
		break;
	    case 1:
		mats = ingredients_1;
		break;
	    case 2:
		mats = ingredients_2;
		break;
	    case 3:
		mats = ingredients_3;
		break;
	    default:
		cm.dispose();
		return;
	}
	for(var i = 0; i < mats.length; i++) {
	    prompt += "\r\n#i"+mats[i]+"##t" + mats[i] + "# x 1";
	}
	prompt += "\r\n#i4031138# " + mesos[secondSelection]; + " ���";
	cm.sendYesNo(prompt);
    } else if (status == 3) {
	if (cm.getMeso() < mesos[secondSelection]) {
	    cm.sendOk("��û��Ǯ���������");
	} else {
	    var complete = true;
	    for (var i = 0; i < mats.length; i++) {
		if (!cm.haveItem(mats[i], 1)) {
		    complete = false;
		    break;
		}
	    }
	    if (!complete) {
		cm.sendOk("û�в��ϣ��������");
	    } else {
		cm.sendOk("�����ˣ��Ͽ�ȥ�����İ��������ɣ���");
		cm.gainMeso(-mesos[secondSelection]);
		for (var i = 0; i < mats.length; i++) {
		    cm.gainItem(mats[i], -1);
		}
		cm.gainItem(2240004 + (firstSelection * 3) + secondSelection, 1);
                cm.gainItem(5251006, 1);
	    }
	}
	cm.dispose();
    }
}