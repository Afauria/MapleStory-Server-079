 importPackage(net.sf.cherry.client);
var status = 0;

var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";


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
		 if (cm.getLevel() < 50 ) {
			cm.sendOk("ֻ�� #r50��#k �ſ��Կ��θø�����");
			cm.dispose();
			 }
		if (mode == 1)
		status++;
		else
		status--;


	if (status == 0) {

	    var textz = "\r\n��ʿ:#d#h ##k��3000W����ٻ�һ�Ρ�\r\n\r\n";

		textz += "#b#L0#�⿪��ӡ���ٻ�--ʱ��ĳ��(PB)��#l\r\n\r\n";
		
		//textz += "#b#L1#�⿪��ӡ���ٻ�--�����ֱ�(����)��#l\r\n\r\n";
		
	//	textz += "#b#L2#�⿪��ӡ���ٻ�--����BOSS��#l\r\n\r\n";
		
	//	textz += "#r#L3#�⿪��ӡ���ٻ�--�ĺ�BOSS��#l\r\n\r\n";
		
	//	textz += "#r#L5#�⿪��ӡ���ٻ�--���BOSS��#l\r\n\r\n";
		
		textz += "#r#L4#��Ҫ�뿪#l\r\n\r\n";

		

		cm.sendSimple (textz);  

			
	}else if (status == 1) {
    
	if (selection == 0){
		var party = cm.getPlayer().getParty();	
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                cm.dispose();
				}else if(cm.getLevel() < 120){
	            cm.sendOk("��Ҫ120�������ٻ�.");
                cm.dispose();
//	}	else    if (cm.getBossLog('PlayQuest57') > 3) {
			//cm.sendOk("�������ս��������3��!");
			//cm.dispose();	
	}	else    if(cm.getMeso() < 30000000){
            cm.sendOk("���Ҳ���3000W!");
			cm.dispose();
		//	cm.sendOk("�����ϲ���3000��ȯ!");
			//cm.dispose();
			}else{ 
                   // cm.sendOk("��ǰ������û�������꣬�޷������ٻ���");
                  //  cm.dispose();
		//}else if(party.getMembers().size() < 0) {
	           // cm.sendOk("��Ҫ 6 �����ϵ���Ӳſ����ͷ�ǿ���ħ����!");
                   // cm.dispose();	
		//}else if (cm.getMeso() >= 5000000) {	//&&cm.haveItem(4001257,1)&&cm.haveItem(4001258,1)&&cm.haveItem(4001259,1)&&cm.haveItem(4001260,1)// #i04001257# #i04001258# #i04001259# #i04001260#
                       // cm.gainNX(-3000);
						cm.setBossLog('PlayQuest57');
                        cm.spawnMonster(8820001,1);
						 cm.gainMeso(-30000000);	
                        cm.dispose();
						cm.����(2,"[PB����]�����" + cm.getPlayer().getName() + "��ʼ��սʱ��ĳ��(PB)~");
                       
}

	}else if (selection == 1){
		var party = cm.getPlayer().getParty();		
		if (cm.getBossLog('PlayQuest56') > 2) {
			cm.sendOk("�������ս��������2��!");
			cm.dispose();	
	}	else if (cm.getMeso() < 2000000) {
			cm.sendOk("�����ϲ���200����!");
			cm.dispose();
			}else{ 
	//	}else if(party.getMembers().size() < 0) {
	 //           cm.sendOk("��Ҫ 6 �����ϵ���Ӳſ����ͷ�ǿ���ħ����!");
     //               cm.dispose();	
		//&&cm.haveItem(4001257,1)&&cm.haveItem(4001258,1)&&cm.haveItem(4001259,1)&&cm.haveItem(4001260,1)// #i04001257# #i04001258# #i04001259# #i04001260#
                        cm.gainMeso(-2000000);
						cm.setBossLog('PlayQuest56');
                        cm.spawnMonster(8800003,1);
                        cm.dispose();
						cm.����(2,"[��������]�����" + cm.getPlayer().getName() + "��ʼ��ս�����ֱ�~");
                        
			cm.dispose();			
}
    }else if (selection == 2){
		var party = cm.getPlayer().getParty();		
		if (cm.getBossLog('PlayQuest52') >= 2) {
			cm.sendOk("�������ս��������2��!");
			cm.dispose();	
	}	else if (cm.getMeso() < 5000000) {
			cm.sendOk("�����ϲ���500����!");
			cm.dispose();
			}else{ 
	//	}else if(party.getMembers().size() < 0) {
	//            cm.sendOk("��Ҫ 6 �����ϵ���Ӳſ����ͷ�ǿ���ħ����!");
    //                cm.dispose();	
		//&&cm.haveItem(4001257,1)&&cm.haveItem(4001258,1)&&cm.haveItem(4001259,1)&&cm.haveItem(4001260,1)// #i04001257# #i04001258# #i04001259# #i04001260#
                       cm.gainMeso(-5000000);
					   cm.setBossLog('PlayQuest52');
                        cm.spawnMonster(9400591,1);
                        cm.dispose();
						cm.����(2,"[糺츱��]�����" + cm.getPlayer().getName() + "��ʼ��ս����BOSS����ʼ���ΰ�������!!!");
                       
			cm.dispose();	
}
     }else if (selection == 3){
		var party = cm.getPlayer().getParty();		
		if (cm.getBossLog('PlayQuest53') >= 2) {
			cm.sendOk("�������ս��������2��!");
			cm.dispose();	
	}	else if (cm.getMeso() < 5000000) {
			cm.sendOk("�����ϲ���500����!");
			cm.dispose();
			}else{ 
		//}else if(party.getMembers().size() < 0) {
	     //       cm.sendOk("��Ҫ 6 �����ϵ���Ӳſ����ͷ�ǿ���ħ����!");
        //            cm.dispose();	
		//&&cm.haveItem(4001257,1)&&cm.haveItem(4001258,1)&&cm.haveItem(4001259,1)&&cm.haveItem(4001260,1)// #i04001257# #i04001258# #i04001259# #i04001260#
                       cm.gainMeso(-5000000);
					   cm.setBossLog('PlayQuest53');
                        cm.spawnMonster(9400592,1);
                        cm.dispose();
						cm.����(2,"[糺츱��]�����" + cm.getPlayer().getName() + "��ʼ��ս�ĺ�BOSS!!!ϣ�����ܻ��ų���");
                       
			cm.dispose();	
			}
			}else if (selection == 5){
		var party = cm.getPlayer().getParty();		
		if (cm.getBossLog('PlayQuest54') >= 2) {
			cm.sendOk("�������ս��������2��!");
			cm.dispose();	
	}	else if (cm.getMeso() < 5000000) {
			cm.sendOk("�����ϲ���500����!");
			cm.dispose();
			}else{ 
		//}else if(party.getMembers().size() < 0) {
	     //       cm.sendOk("��Ҫ 6 �����ϵ���Ӳſ����ͷ�ǿ���ħ����!");
        //            cm.dispose();	
		//&&cm.haveItem(4001257,1)&&cm.haveItem(4001258,1)&&cm.haveItem(4001259,1)&&cm.haveItem(4001260,1)// #i04001257# #i04001258# #i04001259# #i04001260#
                         cm.gainMeso(-5000000);
						 cm.setBossLog('PlayQuest54');
                        cm.spawnMonster(9400593,1);
                        cm.dispose();
						cm.����(2,"[糺츱��]�����" + cm.getPlayer().getName() + "��ʼ��ս���BOSS,׼�����ܱ�Ű��");
                       
			cm.dispose();	
			}
	     }else if (selection == 4){
			cm.warp(910000000);
			cm.dispose();	
			}
			
}										
}
}

