var ca = java.util.Calendar.getInstance();
var �м���ҩʦ = "#fEffect/SkillName1.img/1001003/�м���ҩʦ#";



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

	if (cm.getPlayer().getLevel() < 10) {
        cm.sendOk("��ĵȼ�δ�ﵽ10�������δ�ܽ���������");
        cm.dispose();
		 }
  
    else if (status == 0) {
        var     selStr = "  "+�м���ҩʦ+"  \r\n";
	   selStr += " #L1##i2000000# x 20#l  #L2##i2000003# x 20#l  #L3##i2000006# x 20#l \r\n";
	   
	   selStr += " #L4##i2002025##z2002025# x 20#l \r\n #L5##i2002024##z2002024# x 20#l \r\n #L6##i2002034##z2002034# x 20#l \r\n #L7##i2020011##z2020011# x 20#l \r\n";


		
		  

		
	

		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
		case 1:
		 if (cm.haveItem(4000016,10)) {	
             cm.gainItem(4000016,-10);
             cm.gainItem(2000000,20);
             cm.setBossRankCount("ҩ��������");    
			 cm.sendOk("���#i2000000#x20,������ + 1");
             cm.dispose();
						
               }else{
            cm.sendOk("���ϲ������޷�����.\r\n��Ҫ��#i4000016# x 10");
			cm.dispose();	
			 break;
}
             
        case 2:
		 if (cm.haveItem(4000000,10)) {	
             cm.gainItem(4000000,-10);
             cm.gainItem(2000003,20);
             cm.setBossRankCount("ҩ��������");    
			 cm.sendOk("���#i2000003#x20,������ + 1");
             cm.dispose();
						
               }else{
            cm.sendOk("���ϲ������޷�����.\r\n��Ҫ��#i4000000# x 10");
			cm.dispose();	
			 break;
}       case 3:
		 if (cm.haveItem(4000001,15)) {	
             cm.gainItem(4000001,-15);
             cm.gainItem(2000006,20);
             cm.setBossRankCount("ҩ��������","2");    
			 cm.sendOk("���#i2000006#x20,������ + 2");
             cm.dispose();
						
               }else{
            cm.sendOk("���ϲ������޷�����.\r\n��Ҫ��#i4000001# x 15");
			cm.dispose();	
			 break;
}
         case 4:
		 if (cm.haveItem(4000006,50)) {	
             cm.gainItem(4000006,-50);
             cm.gainItem(2002025,20);
             cm.setBossRankCount("ҩ��������","3");    
			 cm.sendOk("���#i2002025#x20,������ + 3");
             cm.dispose();
						
               }else{
            cm.sendOk("���ϲ������޷�����.\r\n��Ҫ��#i4000006# x 50");
			cm.dispose();	
			 break;
}
		case 5:
		 if (cm.haveItem(4000006,50)) {	
             cm.gainItem(4000006,-50);
             cm.gainItem(2002024,20);
             cm.setBossRankCount("ҩ��������","3");    
			 cm.sendOk("���#i2002024#x20,������ + 3");
             cm.dispose();
						
               }else{
            cm.sendOk("���ϲ������޷�����.\r\n��Ҫ��#i4000006# x 50");
			cm.dispose();	
			 break;
}	    
        case 6:
		 if (cm.haveItem(4000029,60)) {	
             cm.gainItem(4000029,-60);
             cm.gainItem(2002034,20);
             cm.setBossRankCount("ҩ��������","4");    
			 cm.sendOk("���#i2002024#x20,������ + 4");
             cm.dispose();
						
               }else{
            cm.sendOk("���ϲ������޷�����.\r\n��Ҫ��#i4000029# x 60");
			cm.dispose();	
			 break;
}

			 case 7:
		 if (cm.haveItem(4000029,60)) {	
             cm.gainItem(4000029,-60);
             cm.gainItem(2002034,20);
             cm.setBossRankCount("ҩ��������","4");    
			 cm.sendOk("���#i2002024#x20,������ + 4");
             cm.dispose();
						
               }else{
            cm.sendOk("���ϲ������޷�����.\r\n��Ҫ��#i4000029# x 60");
			cm.dispose();	
			 break;	 
}
			 
			 
			 
			 
			 
			 
			 
			 
			 
		}
    }
}