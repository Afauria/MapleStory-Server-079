importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);

var status = 0;
var ��ˮ�� = 4021008;
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var Բ�� = "#fUI/UIWindow/Quest/icon3/6#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var �Ҹ� = "#k��ܰ��ʾ���κηǷ��������ҷ�Ŵ���.��ɱ��������.";
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
			if (cm.getInventory(1).isFull()){
            cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��ϳ�.");
            cm.dispose();
			return;
			}
			var a5 = "#L5#" + ��ɫ��ͷ + " #r��ά+2������/ħ����+1��#v1032205##l\r\n\r\n"+Բ��+"100��#v4000000# 100��#v4000016# 100��#v4000019#\r\n";//0
            var a1 = "#L1#" + ��ɫ��ͷ + " #r��ά+4������/ħ����+2��#v1032206##l\r\n\r\n"+Բ��+"1��#v1032205#200��#v4000039#200��#v4000020#200��#v4000178#200W#v2140002#\r\n";//0
            var a2 = "#L2#" + ��ɫ��ͷ + " #r��ά+6������/ħ����+3��#v1032207##l\r\n\r\n"+Բ��+"1��#v1032206# 300��#v4000051# 300��#v4000048# 300��#v4000052# \r\n 3��#v4002003# 3��#v4002001# 3��#v4002002# 3��#v4000463# 6��#v4031196#300W#v2140002#\r\n";//0
            var a3 = "#L3#" + ��ɫ��ͷ + " #r��ά+8������/ħ����+4��#v1032208##l\r\n\r\n"+Բ��+"1��#v1032207# 400��#v4000233# 400��#v4000232# 400��#v4000234# \r\n 4��#v4002003# 4��#v4002001# 4��#v4002002# 4��#v4000463# 8��#v4031196#400W#v2140002#\r\n";//0
            var a4 = "#L4#" + ��ɫ��ͷ + " #r��ά+10������/ħ����+5��#v1032209##l\r\n\r\n"+Բ��+"1��#v1032208# 500��#v4000453# 500��#v4000448# 500��#v4000458# \r\n 5��#v4002003# 5��#v4002001#5��#v4002002#5��#v4000463# 10��#v4031196#500W#v2140002#\r\n";//0
			var a7 = "#L7#" + ��ɫ��ͷ + " #r��ά+30������/ħ����+30��#v1032219##l\r\n\r\n"+Բ��+"1��#v1032209# 10��#v4030002# 10��#v4030003# 10��#v4030004# \r\n 10��#v4030005# 10��#v4030006#10��#v4030007#10��#v4030008#1500W#v2140002#\r\n";//0
            var a6 = "#L6#" + ��ɫ��ͷ + " #rװ��ǿ��ϵͳ" + ��̾�� + "\r\n\r\n";
            cm.sendSimple("������װ������������װ����������\r\n"+a3+"");
        } else if (selection == 5) {//ñ��
			if (cm.haveItem(4000000, 100) && cm.haveItem(4000016, 100) && cm.haveItem(4000019, 100)) {
				cm.gainItem(4000000,-100);
				cm.gainItem(4000016,-100);
				cm.gainItem(4000019,-100);
				 var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1032205); //���װ��������
				var toDrop = ii.randomizeStats(ii.getEquipById(1032205)).copy(); // ����һ��Equip�� 
				toDrop.setFlag(1);	
				toDrop.setStr(2);
				toDrop.setDex(2);
				toDrop.setInt(2);
				toDrop.setLuk(2);
				toDrop.setWatk(1);
				toDrop.setMatk(1);
				cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������r
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
			    cm.getChar().saveToDB(false, false);
				cm.sendOk("#z1032205#�Ѿ��������ˣ�ȥ��һ�°�");
				cm.dispose();
				return;
			} else {
				cm.sendOk("��Ĳ��ϲ���!!!");
				cm.dispose();
				return;
			}
	    } else if (selection == 1) {//ñ��
			if (cm.haveItem(4000039, 200)&&cm.haveItem(4000020, 200)&&cm.haveItem(4000178, 200)&&cm.haveItem(1032205, 1)&& cm.getMeso() > 2000000&&!cm.getInventory(1).isFull()) {//
				cm.gainItem(4000039, -200);
				cm.gainItem(4000020, -200);
				cm.gainItem(4000178, -200);
				cm.gainItem(1032205, -1);
				cm.getPlayer().gainMeso(-2000000, true);
				var ii = MapleItemInformationProvider.getInstance();              
				var type = ii.getInventoryType(1032206); //���װ��������
				var toDrop = ii.randomizeStats(ii.getEquipById(1032206)).copy(); // ����һ��Equip�� 
				toDrop.setFlag(1);	
				toDrop.setStr(4);
				toDrop.setDex(4);
				toDrop.setInt(4);
				toDrop.setLuk(4);
				toDrop.setWatk(2);
				toDrop.setMatk(2);
				cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
				cm.getChar().saveToDB(false, false);
				cm.sendOk("#z1032206#�Ѿ��������ˣ�ȥ��һ�°�");
				cm.dispose();
				return;
			} else {
				cm.sendOk("��Ĳ��ϲ���!!!");
				cm.dispose();
				return;
			}
	    } else if (selection == 2) {//��װ
			if (cm.haveItem(1032206, 1)&&cm.haveItem(4000051, 300)&&cm.haveItem(4000048, 300)&&cm.haveItem(4000052, 300)&&cm.haveItem(4002003, 3)&&cm.haveItem(4002001, 3)&&cm.haveItem(4002002, 3)&&cm.haveItem(4000463, 3)&&cm.haveItem(4031196, 6)&& cm.getMeso() > 3000000&&!cm.getInventory(1).isFull()) {
				cm.gainItem(1032206, -1);
				cm.gainItem(4000051, -300);
				cm.gainItem(4000048, -300);
				cm.gainItem(4000052, -300);
				cm.gainItem(4002003, -3);
				cm.gainItem(4002001, -3);
				cm.gainItem(4002002, -3);
				cm.gainItem(4000463, -3);
				cm.gainItem(4031196, -6);
				cm.getPlayer().gainMeso(-3000000,true);
				 var ii = MapleItemInformationProvider.getInstance();	                
				var type = ii.getInventoryType(1032207); //���װ��������
				var toDrop = ii.randomizeStats(ii.getEquipById(1032207)).copy(); // ����һ��Equip�� 
				toDrop.setFlag(1);	
				toDrop.setStr(6);
				toDrop.setDex(6);
				toDrop.setInt(6);
				toDrop.setLuk(6);
				toDrop.setWatk(3);
				toDrop.setMatk(3);
				cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
				cm.getChar().saveToDB(false, false);
				cm.sendOk("#z1012189#�Ѿ��������ˣ�ȥ��һ�°�");
				cm.dispose();
				return;
			} else {
				cm.sendOk("��Ĳ��ϲ���!!!");
				cm.dispose();
				return;
			}
	    } else if (selection == 3) {//����
			if (cm.haveItem(1032207, 1)&&cm.haveItem(4000233, 400)&&cm.haveItem(4000232, 400)&&cm.haveItem(4000234, 400)&&cm.haveItem(4002003, 4)&&cm.haveItem(4002001, 4)&&cm.haveItem(4002002, 4)&&cm.haveItem(4000463, 4)&&cm.haveItem(4031196, 8)&& cm.getMeso() > 4000000&&!cm.getInventory(1).isFull()) {
				cm.gainItem(1032207, -1);
				cm.gainItem(4000233, -400);
				cm.gainItem(4000232, -400);
				cm.gainItem(4000234, -400);
				cm.gainItem(4002003, -4);
				cm.gainItem(4002001, -4);
				cm.gainItem(4002002, -4);
				cm.gainItem(4000463, -4);
				cm.gainItem(4031196, -8);
				cm.getPlayer().gainMeso(-4000000,true);
				 var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1032208); //���װ��������
				var toDrop = ii.randomizeStats(ii.getEquipById(1032208)).copy(); // ����һ��Equip�� 
				toDrop.setFlag(1);	
				toDrop.setStr(8);
				toDrop.setDex(8);
				toDrop.setInt(8);
				toDrop.setLuk(8);
				toDrop.setWatk(4);
				toDrop.setMatk(4);
				cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
				cm.getChar().saveToDB(false, false);
				cm.sendOk("#z1032208#�Ѿ��������ˣ�ȥ��һ�°�");
				cm.completeQuest(1400000003);
				cm.dispose();
				return;
			} else {
				cm.sendOk("��Ĳ��ϲ���!!!");
				cm.dispose();
				return;
			}
	    } else if (selection == 4) {//Ь��
			if (cm.haveItem(1032208, 1)&&cm.haveItem(4000453, 500)&&cm.haveItem(4000448, 500)&&cm.haveItem(4000458, 500)&&cm.haveItem(4002003, 5)&&cm.haveItem(4002001, 5)&&cm.haveItem(4002002, 5)&&cm.haveItem(4000463, 5)&&cm.haveItem(4031196, 10)&& cm.getMeso() > 5000000&&!cm.getInventory(1).isFull()) {
				cm.gainItem(1032208, -1);
				cm.gainItem(4000453, -500);
				cm.gainItem(4000448, -500);
				cm.gainItem(4000458, -500);
				cm.gainItem(4002003, -5);
				cm.gainItem(4002001, -5);
				cm.gainItem(4002002, -5);
				cm.gainItem(4000463, -5);
				cm.gainItem(4031196, -10);
				cm.getPlayer().gainMeso(-5000000,true);
				 var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1032209); //���װ��������
				var toDrop = ii.randomizeStats(ii.getEquipById(1032209)).copy(); // ����һ��Equip�� 
				toDrop.setFlag(1);	
				toDrop.setStr(10);
				toDrop.setDex(10);
				toDrop.setInt(10);
				toDrop.setLuk(10);
				toDrop.setWatk(5);
				toDrop.setMatk(5);
				cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
				cm.getChar().saveToDB(false, false);
				cm.sendOk("#z1032209#�Ѿ��������ˣ�ȥ��һ�°�");
				cm.dispose();
				return;
			} else {
				cm.sendOk("��Ĳ��ϲ���!!!");
				cm.dispose();
				return;
			}
			} else if (selection == 7) {//Ь��
			if (cm.haveItem(1032209, 1)&&cm.haveItem(4032202, 10)&&cm.haveItem(4032203, 10)&&cm.haveItem(4032204, 10)&&cm.haveItem(4032205, 10)&&cm.haveItem(4032206, 10)&&cm.haveItem(4032207, 10)&&cm.haveItem(4032208, 10)&& cm.getMeso() > 15000000&&!cm.getInventory(1).isFull()) {
				cm.gainItem(1032209, -1);
				cm.gainItem(4032202, -10);
				cm.gainItem(4032203, -10);
				cm.gainItem(4032204, -10);
				cm.gainItem(4032205, -10);
				cm.gainItem(4032206, -10);
				cm.gainItem(4032207, -10);
				cm.gainItem(4032208, -10);
				cm.getPlayer().gainMeso(-15000000,true);
				 var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1032219); //���װ��������
				var toDrop = ii.randomizeStats(ii.getEquipById(1032219)).copy(); // ����һ��Equip�� 
				toDrop.setFlag(1);	
				toDrop.setStr(30);
				toDrop.setDex(30);
				toDrop.setInt(30);
				toDrop.setLuk(30);
				toDrop.setWatk(30);
				toDrop.setMatk(30);
				cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
				cm.getChar().saveToDB(false, false);
				cm.sendOk("#z1032219#�Ѿ��������ˣ�ȥ��һ�°�");
				cm.dispose();
				return;
			} else {
				cm.sendOk("��Ĳ��ϲ���!!!");
				cm.dispose();
				return;
			}
        }
    }
}
