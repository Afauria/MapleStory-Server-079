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
            var a1 = "#L1#" + ��ɫ��ͷ + " #v1042271##l\r\n\r\n"+Բ��+"200��#v4000120# 200��#v4000117# 200��#v4000121# 200��#v4000122# 200��#v4000118# 200��#v4000119# 50��#v4000126# 10��#v4000463#����\r\n";
			var a2 = "#L1#" + ��ɫ��ͷ + " #v1442181##l\r\n\r\n"+Բ��+"200��#v4000120# 200��#v4000117# 200��#v4000121# 200��#v4000122# 200��#v4000118# 200��#v4000119# 50��#v4000126# 10��#v4000463#����\r\n";
			var a3 = "#L1#" + ��ɫ��ͷ + " #v1442181##l\r\n\r\n"+Բ��+"200��#v4000120# 200��#v4000117# 200��#v4000121# 200��#v4000122# 200��#v4000118# 200��#v4000119# 50��#v4000126# 10��#v4000463#����\r\n";
			var a4 = "#L1#" + ��ɫ��ͷ + " #v1442181##l\r\n\r\n"+Բ��+"200��#v4000120# 200��#v4000117# 200��#v4000121# 200��#v4000122# 200��#v4000118# 200��#v4000119# 50��#v4000126# 10��#v4000463#����\r\n";
			var a5 = "#L1#" + ��ɫ��ͷ + " #v1442181##l\r\n\r\n"+Բ��+"200��#v4000120# 200��#v4000117# 200��#v4000121# 200��#v4000122# 200��#v4000118# 200��#v4000119# 50��#v4000126# 10��#v4000463#����\r\n";
           
		   
            var a6 = "#L6#" + ��ɫ��ͷ + " #rװ��ǿ��ϵͳ" + ��̾�� + "\r\n\r\n";
            cm.sendSimple("������װ������������װ����������\r\n"+a5+""+a1+""+a2+""+a3+""+a4+"");
        } else if (selection == 1) {//ñ��
			if (cm.haveItem(4000120, 200) && cm.haveItem(4000117, 200) && cm.haveItem(4000121, 200) && cm.haveItem(4000122, 200)&& cm.haveItem(4000118, 200)&& cm.haveItem(4000119, 200)&& cm.haveItem(4000126, 50)&& cm.haveItem(4000463, 10)) {
				cm.gainItem(4000463,-10);
				cm.gainItem(4000126,-50);
				cm.gainItem(4000117,-200);
				cm.gainItem(4000118,-200);
				cm.gainItem(4000119,-200);
				cm.gainItem(4000120,-200);
				cm.gainItem(4000121,-200);
				cm.gainItem(4000122,-200);
				 var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1042271); //���װ��������
				var toDrop = ii.randomizeStats(ii.getEquipById(1042271)).copy(); // ����һ��Equip�� 
				toDrop.setFlag(1);	
				toDrop.setHp(1000);
				toDrop.setMp(1000);
				cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������r
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
			    cm.getChar().saveToDB(false, false);
				cm.sendOk("#z1452168#�Ѿ��������ˣ�ȥ��һ�°�");
				cm.dispose();
				return;
			} else {
				cm.sendOk("��Ĳ��ϲ���!!!");
				cm.dispose();
				return;
			}
	    } else if (selection == 5) {//ñ��
			if (cm.haveItem(4004000, 30)&&cm.haveItem(4004001, 30)&&cm.haveItem(4004002, 30)&&cm.haveItem(4004003, 30)&&cm.haveItem(4000463, 2)&&cm.haveItem(1012187, 1)&& cm.getMeso() > 10000000) {
				cm.gainItem(4004000, -30);
				cm.gainItem(4004001, -30);
				cm.gainItem(4004002, -30);
				cm.gainItem(4004003, -30);
				cm.gainItem(4000463, -2);
				cm.gainItem(1012187, -1);
				cm.getPlayer().gainMeso(-10000000, true);
				var ii = MapleItemInformationProvider.getInstance();              
				var type = ii.getInventoryType(1012188); //���װ��������
				var toDrop = ii.randomizeStats(ii.getEquipById(1012188)).copy(); // ����һ��Equip�� 
				toDrop.setFlag(1);	
				toDrop.setHp(1000);
				toDrop.setMp(1000);
				toDrop.setStr(10);
				toDrop.setDex(10);
				toDrop.setInt(10);
				toDrop.setLuk(10);
				cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
				cm.getChar().saveToDB(false, false);
				cm.sendOk("#z1012188#�Ѿ��������ˣ�ȥ��һ�°�");
				cm.dispose();
				return;
			} else {
				cm.sendOk("��Ĳ��ϲ���!!!");
				cm.dispose();
				return;
			}
	    } else if (selection == 2) {//��װ
			if (cm.haveItem(4011000, 20)&&cm.haveItem(4011001, 20)&&cm.haveItem(4011002, 20)&&cm.haveItem(4011003, 20)&&cm.haveItem(4011004, 20)&&cm.haveItem(4011005, 20)&&cm.haveItem(4011006, 20)&&cm.haveItem(4000463, 3)&&cm.haveItem(1012188, 1)&& cm.getMeso() > 20000000) {
				cm.gainItem(4011000, -20);
				cm.gainItem(4011001, -20);
				cm.gainItem(4011002, -20);
				cm.gainItem(4011003, -20);
				cm.gainItem(4011004, -20);
				cm.gainItem(4011005, -20);
				cm.gainItem(4000463, -3);
				cm.gainItem(1012188, -1);
				cm.getPlayer().gainMeso(-20000000,true);
				 var ii = MapleItemInformationProvider.getInstance();	                
				var type = ii.getInventoryType(1012189); //���װ��������
				var toDrop = ii.randomizeStats(ii.getEquipById(1012189)).copy(); // ����һ��Equip�� 
				toDrop.setFlag(1);	
				toDrop.setHp(2000);
				toDrop.setMp(2000);
				toDrop.setStr(20);
				toDrop.setDex(20);
				toDrop.setInt(20);
				toDrop.setLuk(20);
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
			if (cm.haveItem(4021000, 20)&&cm.haveItem(4021001, 20)&&cm.haveItem(4021002, 20)&&cm.haveItem(4021003, 20)&&cm.haveItem(4021004, 20)&&cm.haveItem(4021005, 20)&&cm.haveItem(4021006, 20)&&cm.haveItem(4021007, 10)&&cm.haveItem(4021008, 50)&&cm.haveItem(4000463, 5)&&cm.haveItem(1012189, 1)&& cm.getMeso() > 30000000){
				cm.gainItem(4021000, -20);
				cm.gainItem(4021001, -20);
				cm.gainItem(4021002, -20);
				cm.gainItem(4021003, -20);
				cm.gainItem(4021004, -20);
				cm.gainItem(4021005, -20);
				cm.gainItem(4021006, -20);
				cm.gainItem(4021007, -10);
				cm.gainItem(4021008, -50);
				cm.gainItem(1012189, -1);
				cm.gainItem(4000463, -5);
				cm.getPlayer().gainMeso(-30000000, true);
				 var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1012190); //���װ��������
				var toDrop = ii.randomizeStats(ii.getEquipById(1012190)).copy(); // ����һ��Equip�� 
				toDrop.setFlag(1);	
				toDrop.setHp(3000);
				toDrop.setMp(3000);
				toDrop.setStr(30);
				toDrop.setDex(30);
				toDrop.setInt(30);
				toDrop.setLuk(30);
				cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
				cm.getChar().saveToDB(false, false);
				cm.sendOk("#z1012190#�Ѿ��������ˣ�ȥ��һ�°�");
				cm.dispose();
				return;
			} else {
				cm.sendOk("��Ĳ��ϲ���!!!");
				cm.dispose();
				return;
			}
	    } else if (selection == 4) {//Ь��
			if (cm.haveItem(4000463, 10)&&cm.haveItem(1012190, 1)&&cm.getMeso() > 80000000) {
				cm.gainItem(4000463, -10);
				cm.gainItem(1012190, -1);
				cm.getPlayer().gainMeso(-80000000, true);
				 var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1012191); //���װ��������
				var toDrop = ii.randomizeStats(ii.getEquipById(1012191)).copy(); // ����һ��Equip�� 
				toDrop.setFlag(1);	
				toDrop.setHp(4000);
				toDrop.setMp(4000);
				toDrop.setStr(50);
				toDrop.setDex(50);
				toDrop.setInt(50);
				toDrop.setLuk(50);
				toDrop.setWatk(20);
				toDrop.setMatk(30);
				cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
				cm.getChar().saveToDB(false, false);
				cm.sendOk("#z1012191#�Ѿ��������ˣ�ȥ��һ�°�");
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
