/*
	Name:  ����ת������ͷ
	Place: �����г�
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
		status++;
    } else {
	    cm.dispose();
		return;
    }
    if (status == 0) {
	if (cm.getPlayer().getLevel() >= 150) {
	    cm.sendOk("��ֻ����ʹ�õ�50����");
	    cm.dispose();
	} else if (cm.haveItem(5220000)) {
	    cm.sendYesNo("����һЩ #b#t5220000##k\r\n����Ҫ������������");
	} else {
	    cm.sendOk("�ܱ�Ǹ������û��#b#t5220000##k���Բ��ܳ��ԡ�");
	    cm.dispose();
	}
    } else if (status == 1) {
	var item;
	if (Math.floor(Math.random() * 300) == 0) {
	    var rareList = new Array(2370000, 2370001, 2370002, 2370003, 2370004, 2370005, 2370006, 2370007);
		
	    item = cm.gainGachaponItem(rareList[Math.floor(Math.random() * rareList.length)], 1, "�����龭��ת����");
	} else {
	    var itemList = new Array(2370008, 2370009, 2370010, 2370011, 2370012);

	    item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1);
	}

	if (item != -1) {
	    cm.gainItem(5220000, -1);
	    cm.sendOk("���ѻ�� #b#t" + item + "##k.");
	} else {
	    cm.sendOk("���鿴�����Ƿ���#t5220000##k�����ߵ�����������");
	}
	cm.dispose();
    }
}