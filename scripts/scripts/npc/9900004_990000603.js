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
            var a1 = "#L1#" + ��ɫ��ͷ + " #r1000Ѫ����#v1012188##l\r\n\r\n"+Բ��+"\r\n";//0
            var a6 = "#L6#" + ��ɫ��ͷ + " #rװ��ǿ��ϵͳ" + ��̾�� + "\r\n\r\n";
            cm.sendSimple("������װ������������װ����������\r\n"+a5+""+a1+""+a2+""+a3+""+a4+"");
        } else if (selection == 5) {//ñ��
			if (cm.haveItem(4000313, 999) && cm.haveItem(4002001, 20) && cm.haveItem(4002002, 15) && cm.haveItem(4002003, 8)) {
				cm.gainItem(4000313, -999);
				cm.gainItem(4002001,-20);
				cm.gainItem(4002002,-15);
				cm.gainItem(4002003,-8);
				 var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1012187); //���װ��������
				var toDrop = ii.randomizeStats(ii.getEquipById(1012187)).copy(); // ����һ��Equip�� 
				toDrop.setFlag(1);	
				toDrop.setHp(500);
				toDrop.setMp(500);
				
				cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������r
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
			    cm.getChar().saveToDB(false, false);
				cm.sendOk("#z1012187#�Ѿ��������ˣ�ȥ��һ�°�");
				cm.dispose();
				return;
			} else {
				cm.sendOk("��Ĳ��ϲ���!!!");
				cm.dispose();
				return;
			}

			}
        }
			//		toDrop.setFlag(1);	
			//toDrop.setMatk(10);
			//toDrop.setWatk(10);
		//	toDrop.setLuk(10);
			//toDrop.setInt(10);
			//toDrop.setDex(10);
		//	toDrop.setHp(150);
		//	toDrop.setMp(150);
		//	toDrop.setWdef(25);
		//	toDrop.setMdef(25);
    }
}
