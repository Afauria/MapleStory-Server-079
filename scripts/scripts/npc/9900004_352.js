var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE);//��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);

var ��1 = "#fEffect/SkillName1.img/1001003/��1#";
var ��2 = "#fEffect/SkillName1.img/1001003/��2#";
var ��3 = "#fEffect/SkillName1.img/1001003/��3#";
var ��4 = "#fEffect/SkillName1.img/1001003/��4#";
var ��5 = "#fEffect/SkillName1.img/1001003/��5#";
var ��6 = "#fEffect/SkillName1.img/1001003/��6#";
var ��7 = "#fEffect/SkillName1.img/1001003/��7#";




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
        selStr = " #b#h ##k�Ľ�����ֳ����\r\n";
		selStr += "\r\n              "+��7+"\r\n\r\n";
		
		selStr += " ����ֵ��#B"+cm.getBossRank("��",2) +"# ["+cm.getBossRank("��",2) +"/100]\r\n\r\n";
		
		selStr += " #L1##rιʳ#k#l \r\n\r\n";
		


		
	
	
	
	

		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {	 
		case 1://����ֿ�,�ж��ֿ�ȼ�
            if(cm.getHour()  == 5 && cm.getBossLog("��5") == 0) {
 		     cm.setBossLog("��5");cm.setBossRankCount("��");
			 cm.sendOk("����Ե�����ζ������ܿ��ĵ��ζ��š�");
	         cm.dispose();
			 
			 
		
	 } else if(cm.getHour()  == 6 && cm.getBossLog("��6") == 0 ) {
 		     cm.setBossLog("��6");cm.setBossRankCount("��");
			 cm.sendOk("����Ե�����ζ������ܿ��ĵ��ζ��š�");
             cm.dispose();
			 	
			 
			 
      } else if(cm.getHour()  ==7 && cm.getBossLog("��7") == 0 ) {
		   	 cm.setBossLog("��7");cm.setBossRankCount("��");
			 cm.sendOk("����Ե�����ζ������ܿ��ĵ��ζ��š�");
             cm.dispose();
			 
			 
			 
	 } else if(cm.getHour()  == 8 && cm.getBossLog("��8") == 0 ) {
 		     cm.setBossLog("��8");cm.setBossRankCount("��");
			 cm.sendOk("����Ե�����ζ������ܿ��ĵ��ζ��š�");
             cm.dispose();
			 	

			 
	 } else if(cm.getHour()  == 9 && cm.getBossLog("��9") == 0 ) {
 		     cm.setBossLog("��9");cm.setBossRankCount("��");
			 cm.sendOk("����Ե�����ζ������ܿ��ĵ��ζ��š�");
             cm.dispose();
			 	
			 
			 
     } else if(cm.getHour()  == 10 && cm.getBossLog("��10") == 0 ) {
 		     cm.setBossLog("��10");cm.setBossRankCount("��");
			 cm.sendOk("����Ե�����ζ������ܿ��ĵ��ζ��š�");
             cm.dispose();
			 
			 
			 
     } else if(cm.getHour()  == 11&& cm.getBossLog("��11") == 0 ) {
 		     cm.setBossLog("��11");cm.setBossRankCount("��");
			 cm.sendOk("����Ե�����ζ������ܿ��ĵ��ζ��š�");
             cm.dispose();
			 
			 
			 
	 } else if(cm.getHour()  == 12 && cm.getBossLog("��12") == 0) {
 		     cm.setBossLog("��12");cm.setBossRankCount("��");
			 cm.sendOk("����Ե�����ζ������ܿ��ĵ��ζ��š�");
             cm.dispose();
			 
			 
			 
     } else if(cm.getHour()  == 13&& cm.getBossLog("��13") == 0 ) {
 		     cm.setBossLog("��13");cm.setBossRankCount("��");
			 cm.sendOk("����Ե�����ζ������ܿ��ĵ��ζ��š�");
             cm.dispose();
			 
			 
			 
	 } else if(cm.getHour()  == 14 && cm.getBossLog("��14") == 0) {
 		     cm.setBossLog("��14");cm.setBossRankCount("��");
			 cm.sendOk("����Ե�����ζ������ܿ��ĵ��ζ��š�");
             cm.dispose();
			 	

			 
	 } else if(cm.getHour()  == 15&& cm.getBossLog("��15") == 0 ) {
 		     cm.setBossLog("��15");cm.setBossRankCount("��");
			 cm.sendOk("����Ե�����ζ������ܿ��ĵ��ζ��š�");
             cm.dispose();
			 	
			 
			 
     } else if(cm.getHour()  == 16&& cm.getBossLog("��16") == 0 ) {
 		     cm.setBossLog("��16");cm.setBossRankCount("��");
			 cm.sendOk("����Ե�����ζ������ܿ��ĵ��ζ��š�");
             cm.dispose();
			 
			 
			 
     } else if(cm.getHour()  == 17 && cm.getBossLog("��17") == 0) {
 		     cm.setBossLog("��17");cm.setBossRankCount("��");
			 cm.sendOk("����Ե�����ζ������ܿ��ĵ��ζ��š�");
             cm.dispose();
			 
			 
			 
	 } else if(cm.getHour()  == 18&& cm.getBossLog("��18") == 0 ) {
 		     cm.setBossLog("��18");cm.setBossRankCount("��");
			 cm.sendOk("����Ե�����ζ������ܿ��ĵ��ζ��š�");
             cm.dispose();
			 
			 
			 
     } else if(cm.getHour()  == 19 && cm.getBossLog("��19") == 0) {
 		     cm.setBossLog("��19");cm.setBossRankCount("��");
			 cm.sendOk("����Ե�����ζ������ܿ��ĵ��ζ��š�");
             cm.dispose();
			 
			 
			 
	 } else if(cm.getHour()  == 20 && cm.getBossLog("��20") == 0) {
 		     cm.setBossLog("��20");cm.setBossRankCount("��");
			 cm.sendOk("����Ե�����ζ������ܿ��ĵ��ζ��š�");
 		     cm.setBossLog("��20");cm.setBossRankCount("��");
             cm.dispose();
			 	

			 
	 } else if(cm.getHour()  == 21  && cm.getBossLog("��21") == 0) {
 		     cm.setBossLog("��21");cm.setBossRankCount("��");
			 cm.sendOk("����Ե�����ζ������ܿ��ĵ��ζ��š�");
             cm.dispose();
			 	
			 
			 
     } else if(cm.getHour()  == 22  && cm.getBossLog("��22") == 0) {
 		     cm.setBossLog("��22");cm.setBossRankCount("��");
			 cm.sendOk("����Ե�����ζ������ܿ��ĵ��ζ��š�");
             cm.dispose();
			 
			 
			 
     } else if(cm.getHour()  == 23 && cm.getBossLog("��23") == 0) {
 		     cm.setBossLog("��23");cm.setBossRankCount("��");
			 cm.sendOk("����Ե�����ζ������ܿ��ĵ��ζ��š�");
             cm.dispose();
			 
			 	

			 
		}	else {
				cm.sendOk("���̫��������Ŷ��һ��Сʱֻ��ιһ�Ρ�");
				
             cm.dispose()
				return;
			}; 
			 break;
			 
			 

			 
			 
			 
			 
			 
		}
    }
}