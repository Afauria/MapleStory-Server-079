var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";
var ��ɫ = "#fEffect/CharacterEff/1114000/2/0#";
var status = 0;
var fstype = 0;


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

	    var textz = "#r��ӭ����ִ��ð�յ�ϴѪ����!#k\r\n #k\r\nע��:װ����ŵ�һ��#rϴѪ�ɹ���ȫ����ϲŶ!#k\r\n";

		textz += "------------------------------------------------------\r\n";
               
	    textz += "#b#L9#" + ��ɫ + "ʹ��1000��ȯ����װ��100HP  ��100%�ɹ���\r\n\r\n";
		
		textz += "#b#L8#" + ��ɫ + "ʹ��10000��ȯ����װ��1000HP  ��100%�ɹ���\r\n\r\n";
		

		cm.sendSimple (textz);  
  
//----------------------------------------------------------------------------------------------------------------------------------------------	
//----------------------------------------------------------------------------------------------------------------------------------------------		
	}else if (status == 1) {

            if (selection == 0) { //����ĸ��
                fstype = 0;
                cm.sendNext("��Ŀǰѡ�����������ĸ������װ��10�������м���ʧ�ܣ�ʧ���˻�һ�룬�ɹ��˻غϼ�1��");

            }else if (selection == 1) { //�ǻ�ĸ��
                fstype = 1;
                cm.sendNext("��Ŀǰѡ��������ǻ�ĸ������װ��10�������м���ʧ�ܣ�ʧ���˻�һ�룬�ɹ��˻غϼ�1��");

            }else if (selection == 2) { //����ĸ��
                fstype = 2;
                cm.sendNext("��Ŀǰѡ�����������ĸ������װ��10���ݣ��м���ʧ�ܣ�ʧ���˻�һ�룬�ɹ��˻غϼ�1��");

            }else if (selection == 3) { //����ĸ��
                fstype = 3;
                cm.sendNext("��Ŀǰѡ�����������ĸ������װ��10�������м���ʧ�ܣ�ʧ���˻�һ�룬�ɹ��˻غϼ�1��");
        
			}else if (selection == 4) { //����
                fstype = 4;
                cm.sendNext("��Ŀǰѡ�������30��ֵ������װ����ά��15+˫��10.��ʧ�ܷ���15��ֵ�ң�");

            }else if (selection == 5) { //����
                fstype = 5;
                cm.sendNext("��Ŀǰѡ�������1���ȯ����װ����ά��10+˫��7����ʧ�ܲ�������");

            }else if (selection == 6) { //����
                fstype = 6;
                cm.sendNext("��Ŀǰѡ�������2000W�������װ����ά��5��+˫��3��ʧ�ܲ�������");

            }else if (selection == 7) { //������
                fstype = 7;
                cm.sendNext("��Ŀǰѡ�������1����������װ����ά��7+˫��5��ʧ�ܲ�������");

            }else if (selection == 8) { //ʱ��֮ʯ
                fstype = 8;
                cm.sendNext("��Ŀǰѡ�������1000��ȯ����װ��100HP��100%�ɹ��������غϣ���");
            }else if (selection == 9) { //������ĵ�
                fstype = 9;
                cm.sendNext("��Ŀǰѡ�������1000��ȯ����װ��100HP��100%�ɹ��������غϣ���");
            }else if (selection == 10) { //����������
                fstype = 10;
                cm.sendNext("��Ŀǰѡ������ú����������һ����ӱ�����");
            }

//----------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------

      } else if (status == 2) {

            if (fstype == 0) { //����ĸ��
                fstype = 0;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("�Բ���,��װ������һ��û��װ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�ݲ�֧�ֵ�ȯװ�����ǣ���ʹ����ͨװ����");
                    cm.dispose();
  
                }
            }


            if (fstype == 1) { //�ǻ�ĸ��
                fstype = 1;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("�Բ���,��װ������һ��û��װ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�ݲ�֧�ֵ�ȯװ�����ǣ���ʹ����ͨװ����");
                    cm.dispose();
                }
            }

            if (fstype == 2) { //����ĸ��
                fstype = 2;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("�Բ���,��װ������һ��û��װ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�ݲ�֧�ֵ�ȯװ�����ǣ���ʹ����ͨװ����");
                    cm.dispose();
                }
            }

            if (fstype == 3) { //����ĸ��
                fstype = 3;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("�Բ���,��װ������һ��û��װ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�ݲ�֧�ֵ�ȯװ�����ǣ���ʹ����ͨװ����");
                    cm.dispose();
                }
            }
             

            if (fstype == 4) { //����ĸ��
                fstype = 4;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("�Բ���,��װ������һ��û��װ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�ݲ�֧�ֵ�ȯװ�����ǣ���ʹ����ͨװ����");
                    cm.dispose();
                }
            }


            if (fstype == 5) { //����ĸ��
                fstype = 5;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("�Բ���,��װ������һ��û��װ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�ݲ�֧�ֵ�ȯװ�����ǣ���ʹ����ͨװ����");
                    cm.dispose();
                }
            }


            if (fstype == 6) { //����ĸ��
                fstype = 6;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("�Բ���,��װ������һ��û��װ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�ݲ�֧�ֵ�ȯװ�����ǣ���ʹ����ͨװ����");
                    cm.dispose();
                }
            }


            if (fstype == 7) { //����ĸ��
                fstype = 7;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("�Բ���,��װ������һ��û��װ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�ݲ�֧�ֵ�ȯװ�����ǣ���ʹ����ͨװ����");
                    cm.dispose();
                }
            }

            if (fstype == 8) { //����ĸ��
                fstype = 8;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("�Բ���,��װ������һ��û��װ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�ݲ�֧�ֵ�ȯװ�����ǣ���ʹ����ͨװ����");
                    cm.dispose();
                }
            }
			
			if (fstype == 9) { //����ĸ��
                fstype = 9;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("�Բ���,��װ������һ��û��װ��!");
                    cm.dispose();
                }
            }

//----------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------
	if (fstype == 0) {
		if (!cm.haveItem(4005000,10))  {
                    cm.sendOk("�����#r 10 #k��#z4005000##v4005000#");
                    cm.dispose();
		}else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                    cm.sendOk("��������û�ˣ��޷�ǿ��!");
                    cm.dispose();
			
		} else {

                 var chance = Math.floor(Math.random() * 4);
                 if (chance <= 1) {
                 var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                 var statup = new java.util.ArrayList();
		 item.setStr(item.getStr()+10);
                 item.setUpgradeSlots((item.getUpgradeSlots() - 1));
		 cm.gainItem(4005000,-10);
		 cm.sendOk("#r#eǿ���ɹ�,ף����Ϸ���!#k");
                 cm.serverNotice("��ǿ��ϵͳ������ϲ"+ cm.getChar().getName() +"        �ɹ�Ϊװ������10����"); 
                 Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                 Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
		} else {
		 cm.gainItem(4005000,-2);
		 cm.sendOk("ǿ��ʧ�ܣ��˻���8������ˮ��");	
		}
		 cm.dispose();
		}



	} else if (fstype == 1) {
		if (!cm.haveItem(4005001,10))  {
                    cm.sendOk("�����#r 10 #k��#z4005001##v4005001#");
                    cm.dispose();
		}else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                    cm.sendOk("��������û�ˣ��޷�ǿ��!");
                    cm.dispose();
			
		} else {

                 var chance = Math.floor(Math.random() * 4);
                 if (chance <= 1) {
                 var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                 var statup = new java.util.ArrayList();
		 item.setInt(item.getInt()+10);
                 item.setUpgradeSlots((item.getUpgradeSlots() - 1));
		 cm.gainItem(4005001,-10);
		 cm.sendOk("#r#eǿ���ɹ�,ף����Ϸ���!#k");
                 cm.serverNotice("��ǿ��ϵͳ������ϲ"+ cm.getChar().getName() +"        �ɹ�Ϊװ������10����"); 
                 Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                 Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
		} else {
		 cm.gainItem(4005001,-2);
		 cm.sendOk("ǿ��ʧ�ܣ��˻���8���ǻ�ˮ��");	
		}
		 cm.dispose();
		}

	} else if (fstype == 2) {
		if (!cm.haveItem(4005002,10))  {
                    cm.sendOk("�����#r 10 #k��#z4005002##v4005002#");
                    cm.dispose();
		}else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                    cm.sendOk("��������û�ˣ��޷�ǿ��!");
                    cm.dispose();
			
		} else {

                 var chance = Math.floor(Math.random() * 4);
                 if (chance <= 1) {
                 var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                 var statup = new java.util.ArrayList();
		 item.setDex(item.getDex()+20);
                 item.setUpgradeSlots((item.getUpgradeSlots() - 1));
		 cm.gainItem(4005002,-10);
		 cm.sendOk("#r#eǿ���ɹ�,ף����Ϸ���!#k");
                 cm.serverNotice("��ǿ��ϵͳ������ϲ"+ cm.getChar().getName() +"        �ɹ�Ϊװ������10����"); 
                 Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                 Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
		} else {
		 cm.gainItem(4005002,-2);
		 cm.sendOk("ǿ��ʧ�ܣ��˻���8������ˮ��");	
		}
		 cm.dispose();
		}

	}	else if (fstype == 8) {
		if (cm.getNX(1) < 10000){
                    cm.sendOk("�������ٴ�1000��ȯ");
                    cm.dispose();

			
		} else {


                 var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                 var statup = new java.util.ArrayList();
				item.setHp(item.getHp()+1000);

				cm.gainNX(-10000);

				cm.sendOk("#r#eϴѪ�ɹ�,ף����Ϸ���!#k");
		 
                // cm.serverNotice("��ϴѪ���ġ�����ϲ"+ cm.getChar().getName() +"�ɹ�����100HP"); 
                 Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                 Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);

		 cm.dispose();
		}

	


	}	else if (fstype == 9) {
		if (cm.getNX(1) < 1000){
                    cm.sendOk("�������ٴ�1000��ȯ");
                    cm.dispose();

			
		} else {


                 var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                 var statup = new java.util.ArrayList();
				item.setHp(item.getHp()+100);

				cm.gainNX(-1000);

				cm.sendOk("#r#eϴѪ�ɹ�,ף����Ϸ���!#k");
		 
                // cm.serverNotice("��ϴѪ���ġ�����ϲ"+ cm.getChar().getName() +"�ɹ�����100HP"); 
                 Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                 Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);

		 cm.dispose();
		}

	} else if (fstype == 10) {
		if (!cm.haveItem(4170009,1)){
            cm.sendOk("�����#r 1 #k��#z4170009##v4170009#");
            cm.dispose();
		} else {
            cm.gainItem(4170009,-1);
			cm.gainItem(2370000,1);
			cm.sendOk("#r#e�һ��ɹ�,ף����Ϸ���!#k");
            cm.dispose();
		} 

	}
									
}
}
}
