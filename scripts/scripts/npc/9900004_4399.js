var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE);//��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var �����г� = "#fEffect/SkillName1.img/1001003/�����г�#";
var �����г�2 = "#fEffect/SkillName1.img/1001003/�����г�2#";
var �����г�3 = "#fEffect/SkillName1.img/1001003/�����г�3#";
var �����г�4 = "#fEffect/SkillName1.img/1001003/�����г�4#";
var �����г�5 = "#fEffect/SkillName1.img/1001003/�����г�5#";
var �����г�6 = "#fEffect/SkillName1.img/1001003/�����г�6#";
var �����г�7 = "#fEffect/SkillName1.img/1001003/�����г�7#";
var �����г�8 = "#fEffect/SkillName1.img/1001003/�����г�8#";
var �����г�9 = "#fEffect/SkillName1.img/1001003/�����г�9#";
var ��Ҷ����10 = "#fEffect/SkillName1.img/1001003/��Ҷ����10#";






function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	    if (cm.getMapId() == 20000 || cm.getMapId() == 10000) {
            cm.sendOk(" �� �� ð �� �� �� �� �� �� ʹ �� �� �� �� ��");
            cm.dispose();
        }


  
    else if (status == 0) {
        var 
         selStr = "--------------------------------------------\r\n";
		selStr += " �㵱ǰ��������Ϊ��\r\n\r\n";
		
	 if (cm.getPlayer().getInventory(cm.getInvType(-1)).findById(1142099) && cm.getBossRank("��Ҷ���",2) == 1) { 
    selStr += "     "+ ��Ҷ����10 +" \r\n\r\n";
	selStr += "  #r#L100#�ر�������ҳ��#l#k \r\n\r\n";	
	} else if (cm.getBossRank("��������",2) == 1) { 
    selStr += "     "+ �����г� +" \r\n\r\n";
    } else if (cm.getBossRank("��������",2) ==2) { 
    selStr += "     "+ �����г�2 +" \r\n\r\n";
	} else if (cm.getBossRank("��������",2) ==3) { 
    selStr += "     "+ �����г�3 +" \r\n\r\n";
	} else if (cm.getBossRank("��������",2) ==4) { 
    selStr += "     "+ �����г�4 +" \r\n\r\n";
	} else if (cm.getBossRank("��������",2) ==5) { 
    selStr += "     "+ �����г�5 +" \r\n\r\n";
	} else if (cm.getBossRank("��������",2) ==6) { 
    selStr += "     "+ �����г�6 +" \r\n\r\n";
	} else if (cm.getBossRank("��������",2) ==7) { 
    selStr += "     "+ �����г�7 +" \r\n\r\n";
	} else if (cm.getBossRank("��������",2) ==8) { 
    selStr += "     "+ �����г�8 +" \r\n\r\n";
	} else if (cm.getBossRank("��������",2) ==9) { 
    selStr += "     "+ �����г�9 +" \r\n\r\n";
	
    } else { 
	selStr += "     #rĬ�Ϸ��#k  \r\n\r\n";}
	
	     selStr += "--------------------------------------------\r\n";
		 
		 
		 if (cm.getBossRank("��������",2) >= 0) {
		 
		 selStr += "#L0##b�л�Ĭ�Ϸ��[��]#l#k    \r\n\r\n";
		 
		 selStr += "#L101##r����������#l#k    \r\n\r\n";
		 
         selStr += "#L1#�л����  "+�����г�+"#l\r\n\r\n";
		 
		 selStr += "#L2#�л����  "+�����г�2+"#l\r\n\r\n";
		 
		 selStr += "#L3#�л����  "+�����г�3+"#l\r\n\r\n";
		 
		 selStr += "#L4#�л����  "+�����г�4+"#l\r\n\r\n";
		  
		 selStr += "#L5#�л����  "+�����г�5+"#l\r\n\r\n";
		 
		 selStr += "#L6#�л����  "+�����г�6+"#l\r\n\r\n";
		 
		 selStr += "#L7#�л����  "+�����г�7+"#l\r\n\r\n";
		 
		 selStr += "#L8#�л����  "+�����г�8+"#l\r\n\r\n";
		 
		 selStr += "#L9#�л����  "+�����г�9+"#l\r\n\r\n";
		 

       } else { selStr += "   #L99#��������л�#l  \r\n\r\n";}
		
	
	
	
	

		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {	 
		case 0:
           cm.setBossRankCount("��������","-"+cm.getBossRank("��������",2) +"");
		   cm.sendOk("�ɹ��л�ΪĬ�Ϸ��");
		   cm.dispose();   
			break;
		case 1:
           cm.setBossRankCount("��������","-"+cm.getBossRank("��������",2)+"");
		   cm.setBossRankCount("��������","1");
		   cm.sendOk("�ɹ��л�Ϊ "+�����г�+"");
		   cm.dispose();   
			break;
		case 2:
           cm.setBossRankCount("��������","-"+cm.getBossRank("��������",2)+"");
		   cm.setBossRankCount("��������","2");
		   cm.sendOk("�ɹ��л�Ϊ "+�����г�2+"");
		   cm.dispose();   
			break;
		case 3:
           cm.setBossRankCount("��������","-"+cm.getBossRank("��������",2)+"");
		   cm.setBossRankCount("��������","3");
		   cm.sendOk("�ɹ��л�Ϊ "+�����г�3+"");
		   cm.dispose();   
			break;	
		case 4:
           cm.setBossRankCount("��������","-"+cm.getBossRank("��������",2)+"");
		   cm.setBossRankCount("��������","4");
		   cm.sendOk("�ɹ��л�Ϊ "+�����г�4+"");
		   cm.dispose();   
			break;	
		case 5:
           cm.setBossRankCount("��������","-"+cm.getBossRank("��������",2)+"");
		   cm.setBossRankCount("��������","5");
		   cm.sendOk("�ɹ��л�Ϊ "+�����г�5+"");
		   cm.dispose();   
			break;
		case 6:
           cm.setBossRankCount("��������","-"+cm.getBossRank("��������",2)+"");
		   cm.setBossRankCount("��������","6");
		   cm.sendOk("�ɹ��л�Ϊ "+�����г�6+"");
		   cm.dispose();   
			break;		   
		case 7:
           cm.setBossRankCount("��������","-"+cm.getBossRank("��������",2)+"");
		   cm.setBossRankCount("��������","7");
		   cm.sendOk("�ɹ��л�Ϊ "+�����г�7+"");
		   cm.dispose();   
			break;
		case 8:
           cm.setBossRankCount("��������","-"+cm.getBossRank("��������",2)+"");
		   cm.setBossRankCount("��������","8");
		   cm.sendOk("�ɹ��л�Ϊ "+�����г�8+"");
		   cm.dispose();   
			break;			
		case 9:
           cm.setBossRankCount("��������","-"+cm.getBossRank("��������",2)+"");
		   cm.setBossRankCount("��������","9");
		   cm.sendOk("�ɹ��л�Ϊ "+�����г�9+"");
		   cm.dispose();   
			break;			
			
			
		case 99:
       		
		   cm.setBossRankCount("��������","0");
		   cm.dispose();
		   cm.openNpc(9900004,4399);	
		   
		   break;	
			
		case 100:
           cm.setBossRankCount("��Ҷ���","-"+cm.getBossRank("��Ҷ���",2)+"");
		   cm.sendOk("�رճɹ���");
		   cm.dispose();   
			break;
		case 101:
		
		 if (cm.getPlayer().getInventory(cm.getInvType(-1)).findById(1142099)) { 
		   cm.setBossRankCount("��Ҷ���","0");
           cm.setBossRankCount("��Ҷ���","-"+cm.getBossRank("��Ҷ���",2)+"");
		   cm.setBossRankCount("��Ҷ���","1");
		   cm.sendOk("�����ɹ���");
		   cm.dispose();   
		} else {    
		   cm.sendOk("������÷�Ҷ����ѫ���ٿ�����");
		   cm.dispose();}
			break;			
			
			
			
			
	
			
			
			 
			 

			 
			 
			 
			 
			 
		}
    }
}