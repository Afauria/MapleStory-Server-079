var status = 0;
var fstype = 0;
var price = 50000000; //û��
var types = new Array("װ����", "������", "������", "������", "�ֽ���");
var chance3 = (Math.floor(Math.random() * 8) + 1);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        if (status == 0) {//#L2#ʹ�õ������-1��(10000)(127���)
            cm.sendSimple("#rע��:�뽫��Ҫ������װ������װ������һ��!\r\n\r\n#b#L2#ʹ��20000��ȯ����+1��,(102���,ʧ�ܷ���90%)\r\n#b#L4#ʹ��200000��ȯ����+10��,(102���,ʧ�ܷ���90%)\r\n#b#L3#ʹ��#v4251202#����+1��(111���,50%����)\r\n\r\n");//\r\n#b#L3#ʹ��#v4251202#����+1��(90���)


        } else if (status == 1) {

            if (selection == 2) { //ʹ�õ������//#L2#ʹ�õ������-3��(5000)(127���)
                fstype = 2;
                cm.sendNext("��Ҫʹ��20000���Ϊװ������1������������?");
				
			} else	if (selection == 4) { //ʹ�õ������//#L2#ʹ�õ������-3��(5000)(127���)
                fstype = 4;
                cm.sendNext("��Ҫʹ��200000���Ϊװ������10������������?");


            } else if (selection == 3) { //ʹ���������
                fstype = 3;
                cm.sendNext("��Ҫʹ��#v4251202#Ϊװ������1������������?");

            }

        } else if (status == 2) {

            if (fstype == 2) { //ʹ�õ������
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("��װ������һ��û��װ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�ǳ���Ǹ,��װ��֧������!");
                    cm.dispose();
                 } else if (item.getItemId() == 1122000 || item.getItemId() ==1122076) {
                    cm.sendOk("�Բ���,��������������������!");
                    cm.dispose();
                    return;
                }
                   else fstype = 13;		
			}

            if (fstype == 3) { //ʹ�ý������
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("��װ������һ��û��װ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�ǳ���Ǹ,��װ��֧������!");
                    cm.dispose();
                 } else if (item.getItemId() == 1122000 || item.getItemId() ==1122076) {
                    cm.sendOk("�Բ���,��������������������!");
                    cm.dispose();
                    return;
                }
				   else fstype = 14;	
            }

			if (fstype == 4) { //ʹ�õ������
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("��װ������һ��û��װ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�ǳ���Ǹ,��װ��֧������!");
                    cm.dispose();
                 } else if (item.getItemId() == 1122000 || item.getItemId() ==1122076) {
                    cm.sendOk("�Բ���,��������������������!");
                    cm.dispose();
                    return;
                }
                   else fstype = 15;		
			}

             if (fstype == 13) {
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();

var id = item.getItemId();
var ����������= item.getLevel();
var ʣ��غ� = item.getUpgradeSlots();
var ǿ������ = 102;
var pd = ǿ������ - (���������� + ʣ��غ�);
if (pd != -1 & pd > 0){



                if (cm.getPlayer().getCSPoints(1) < 20000) {
                    cm.sendOk("��ĵ����!");
                    cm.dispose();
                    return;
                }
				var chance = Math.floor(Math.random() * 2);
                if (chance == 1) {
                    var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                    var statup = new java.util.ArrayList();
                    item.setUpgradeSlots((item.getUpgradeSlots() + 1));
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.gainNX(-20000);
                    cm.sendOk("�����ɹ���");
	                cm.worldMessage(6,"���["+cm.getName()+"]ʹ�õ���װ��������1������,���һ��ϲ��(��)!");
                    cm.dispose();
                    }			
			   else {
                    cm.gainNX(-2000);
                    cm.sendOk("���ź�������ʧ�ܡ�");
					cm.dispose();
                }
            }
		else if (pd == 0){ cm.sendOk("�ѵ������ޣ��޷�ǿ����");cm.dispose();}

}
 if (fstype == 15) {
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();

var id = item.getItemId();
var ����������= item.getLevel();
var ʣ��غ� = item.getUpgradeSlots();
var ǿ������ = 102;
var pd = ǿ������ - (���������� + ʣ��غ�);
if (pd != -1 & pd > 0){



                if (cm.getPlayer().getCSPoints(1) < 200000) {
                    cm.sendOk("��ĵ����!");
                    cm.dispose();
                    return;
                }
				var chance = Math.floor(Math.random() * 2);
                if (chance == 1) {
                    var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                    var statup = new java.util.ArrayList();
                    item.setUpgradeSlots((item.getUpgradeSlots() + 10));
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.gainNX(-200000);
                    cm.sendOk("�����ɹ���");
	                cm.worldMessage(6,"���["+cm.getName()+"]ʹ�õ���װ��������1������,���һ��ϲ��(��)!");
                    cm.dispose();
                    }			
			   else {
                    cm.gainNX(-20000);
                    cm.sendOk("���ź�������ʧ�ܡ�");
					cm.dispose();
                }
            }
		else if (pd == 0){ cm.sendOk("�ѵ������ޣ��޷�ǿ����");cm.dispose();}

}

             if (fstype == 14) {
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();

var id = item.getItemId();
var ����������= item.getLevel();
var ʣ��غ� = item.getUpgradeSlots();
var ǿ������ = 111;
var pd = ǿ������ - (���������� + ʣ��غ�);
if (pd != -1 & pd > 0){


		if(!cm.haveItem(4251202,1)){
                    cm.sendOk("��Ĳ��ϲ���!");
                    cm.dispose();
                    return;
                }
				var chance = Math.floor(Math.random() * 2);
                if (chance == 1) {
                    var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                    var statup = new java.util.ArrayList();
                    item.setUpgradeSlots((item.getUpgradeSlots() + 1));
                  // item.setLocked(1);
 Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);           
	                cm.gainItem(4251202,-1);
                    cm.sendOk("�����ɹ���");
	                cm.worldMessage(6,"���["+cm.getName()+"]ʹ�øߵ����ˮ����װ��������1������,���һ��ϲ��(��)!");
                    cm.dispose();
			}
			else {
                    cm.gainItem(4251202,-1);
                    cm.sendOk("���ź�������ʧ�ܣ��۳�ˮ��");
					cm.dispose();
                }
			}
		else if (pd <= 0){ cm.sendOk("�ѵ������ޣ��޷�ǿ����");cm.dispose();}
}
			}
			}
			}
			