var status = -1;


function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    switch(cm.getPlayer().getMapId()) {
	case 930000000:
	    cm.sendNext("��ӭ����ͨ����Ȧ���룡.");
	    break;
	case 930000010:
	    cm.warpParty(100000000);
	    break;
	case 930000100:
	    cm.sendNext("���Ǳ����������");
	    break;
	case 930000200:
	    cm.sendNext("���Ǳ����������");
	    break;
	case 930000300:
		cm.����Ӿ���(150000);
	    cm.warpParty(930000400);
	    break;
	case 930000400:
	    if (cm.haveItem(4001169,50)) {
		cm.����Ӿ���(150000);
		cm.warpParty(930000500);
		cm.gainItem(4001169,-50);
	    } else {
		cm.sendOk("���Ǳ������������50������֮��");
	    }
	    break;
	case 930000600:
	    cm.sendNext("This is it! Place the Magic Stone on the Altar!");
	    break;
	case 930000700:
	    cm.removeAll(4001169);//����֮��
	    cm.removeAll(2270004);//����֮��
	    cm.removeAll(4001162);
	    cm.removeAll(4001163);
		cm.����Ӿ���(300000);
	//	cm.�������Ʒ(4031456, 1);//����Ҷ��1��
		cm.�������Ʒ(2614015, 2);//
		cm.�������Ʒ(4170001, 1);//
	    cm.warpParty(930000800,0);
	    break;
    }
    cm.dispose();
}