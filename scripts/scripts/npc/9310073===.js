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

	    var textz = "#r��������ǿ��װ��!#k\r\nÿ��6��#k\r\nע��:װ����ŵ�һ��#rǿ���ɹ���ȫ����ϲŶ!#k\r\n";

		textz += "------------------------------------------------------\r\n";
               
	
		textz += "#b#L4#" + ��ɫ + "30����ֵ������װ����ά��15��+˫��10��ʧ�ܷ�15��\r\n\r\n";
		
		
		cm.sendSimple (textz);  
  
//----------------------------------------------------------------------------------------------------------------------------------------------	
//----------------------------------------------------------------------------------------------------------------------------------------------		
	}else if (status == 1) {

            if (selection == 0) { //����ĸ��
                fstype = 0;
                cm.sendNext("��Ŀǰѡ�����������ĸ������װ��10�������м���ʧ�ܣ�ʧ���˻�һ�룬�ɹ��˻غϼ�1��");
         
        
			}else if (selection == 4) { //����
                fstype = 4;
                cm.sendNext("��Ŀǰѡ�������30��ֵ������װ����ά��15+˫��10.��ʧ�ܷ���15��ֵ�ң�");

         
            }

//----------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------

      } else if (status == 2) {

           
             

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




	}  else if (fstype == 4) {
              if (cm.getmoneyb() < 30){
                    cm.sendOk("�����30��ֵ�Ҽӹ���");
                    cm.dispose();
					
		}	else    if (cm.getBossLog('PlayQuest40') >= 6) {
			cm.sendOk("�����ǿ����������10��!");
			cm.dispose();	
			
		} else {

                 var chance = Math.floor(Math.random() * 3);
                 if (chance <= 1) {
                 var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                 var statup = new java.util.ArrayList();
                // item.setUpgradeSlots((item.getUpgradeSlots() - 1));
		 item.setStr(item.getStr()+15); //����װ������
		 item.setDex(item.getDex() + 15);//����װ������
		 item.setInt(item.getInt() + 15);//����װ������
		 item.setLuk(item.getLuk() + 15);//����װ������
		 item.setWatk(item.getWatk() + 10);
		 item.setMatk(item.getMatk() + 10);
		 //cm.gainItem(4001084,-1);
		 cm.setmoneyb(-30);
		 cm.gainjf(+30);
		 cm.setBossLog('PlayQuest40');
		 cm.sendOk("#r#eǿ���ɹ�,ף����Ϸ���!#k");
              cm.serverNotice("������ǿ��ϵͳ������ϲ"+ cm.getChar().getName() +"        ʹ��30����ֵ��Ϊװ��������ά��15��+10G");
                 Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                 Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
		} else {
		 cm.setmoneyb(-15);
		 cm.gainjf(+15);
		 cm.setBossLog('PlayQuest40');
		 cm.sendOk("ǿ��ʧ�ܣ��˻���15����ֵ��");	
		}
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
