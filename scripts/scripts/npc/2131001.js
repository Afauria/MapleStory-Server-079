var status = -1;

var exchangeItem = 4000437;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
	return;
    }
    if (status == 0) {
        cm.sendSimple("��ô����˻�����Ҫһ��ҩ��...#b\r\n#L0#�٣���һЩ#t4000437#�����������õ�ҩƷ��#l");
    } else if (status == 1) {
	if (!cm.haveItem(exchangeItem, 100)) {
	    cm.sendNext("��û���㹻����������Ҫ100��#t4000437#");
	    cm.dispose();
	} else {
	    cm.sendGetNumber("�ţ����Ǹ������⣡ �ҿ��Ը��� #i2022457#ÿ100�� #i" + exchangeItem + "##t" + exchangeItem + "# ����Ҫ���Ҷ��� (��ǰ����: " + cm.getPlayer().itemQuantity(exchangeItem) + ")", java.lang.Math.min(300, cm.getPlayer().itemQuantity(exchangeItem) / 100), 1, java.lang.Math.min(300, cm.getPlayer().itemQuantity(exchangeItem) / 100));
	}
    } else if (status == 2) { 
	if (selection >= 1 && selection <= cm.getPlayer().itemQuantity(exchangeItem) / 100) {
	    if (!cm.canHold(2022457, selection)) {
		cm.sendOk("��ճ�һЩ������λ��");
	    } else {
		cm.gainItem(2022457, selection);
		cm.gainItem(exchangeItem, -(selection * 100));
		cm.sendOk("лл�㡣");
	    }
	}
        cm.dispose();
    }
}