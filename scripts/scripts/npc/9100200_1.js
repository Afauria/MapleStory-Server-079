var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var ��ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";//"+��ͷ+"
var �� = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var ���ʺ� = "#fUI/Initials.img/Button/Button0/mouseOver/0#";  //disabled/0��ɫ
var ���ʺ�2 = "#fUI/Initials.img/Button/Button0/disabled/0#";  //disabled/0��ɫ

var ��б�� = "#fUI/Initials.img/Button/Button1/mouseOver/0#";  
var ��б��2 = "#fUI/Initials.img/Button/Button1/disabled/0#"; 

var ��С�ں� = "#fUI/Initials.img/Button/Button2/mouseOver/0#";
var ��С�ں�2 = "#fUI/Initials.img/Button/Button2/disabled/0#";

var �۴��ں� = "#fUI/Initials.img/Button/Button3/mouseOver/0#";
var �۴��ں�2 = "#fUI/Initials.img/Button/Button3/disabled/0#";

var �۸�̾�� = "#fUI/Initials.img/Button/Button4/mouseOver/0#";
var �۸�̾��2 = "#fUI/Initials.img/Button/Button4/disabled/0#";

var �۰��غ� = "#fUI/Initials.img/Button/Button5/mouseOver/0#";
var �۰��غ�2 = "#fUI/Initials.img/Button/Button5/disabled/0#";

var ��Ц�ۺ� = "#fUI/Initials.img/Button/Button6/mouseOver/0#";
var ��Ц�ۺ�2 = "#fUI/Initials.img/Button/Button6/disabled/0#";

var �۵�� = "#fUI/Initials.img/Button/Button7/mouseOver/0#";
var �۵��2 = "#fUI/Initials.img/Button/Button7/disabled/0#";

var �۰��ĺ� = "#fUI/Initials.img/Button/Button8/mouseOver/0#";
var �۰��ĺ�2 = "#fUI/Initials.img/Button/Button8/disabled/0#";

var ������Ǻ� = "#fUI/Initials.img/Button/Button9/mouseOver/0#";
var ������Ǻ�2 = "#fUI/Initials.img/Button/Button9/disabled/0#";
var ��� = "#fUI/UIWindow.img/QuestIcon/7/0#"; 
var �հ� = "#fUI/UIWindow.img/Skill/CoolTime/15#";  
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
    } var MC = cm.getServerName();
	  var r = Math.ceil(Math.random() * 10);  //���ȡһ��ֵ
	  var ���ʺ����� = 1;
	  var ��б������ = 1;
	  var ��С�ں����� = 1;
	  var �۴��ں����� = 1;
	  var �۸�̾������ = 1;
	  var �۰��غ����� = 1;
	  var �۵������ =1;
	  var ��Ц�ۺ����� =1;
	  var �۰��ĺ����� = 1;
	  var ������Ǻ����� = 1;
	  
	  var ��ɫ�ʺ���ע = cm.getBossRank("��ɫ�ʺ���ע",2);
	  var ��б����ע = cm.getBossRank("��б����ע",2);
	  var ��С�ں���ע = cm.getBossRank("��С�ں���ע",2);
	  var �۴��ں���ע = cm.getBossRank("�۴��ں���ע",2);
	  var �۸�̾����ע = cm.getBossRank("�۸�̾����ע",2);
	  var �۰��غ���ע = cm.getBossRank("�۰��غ���ע",2);
	  var �۵����ע = cm.getBossRank("�۵����ע",2);
	  var ��Ц�ۺ���ע = cm.getBossRank("��Ц�ۺ���ע",2);
	  var �۰��ĺ���ע = cm.getBossRank("�۰��ĺ���ע",2);
	  var ������Ǻ���ע = cm.getBossRank("������Ǻ���ע",2);
	  
	  
    if (cm.getMapId() == 180000001) {
            cm.sendOk("���ź�������ΪΥ���û����򱻽�ֹ��Ϸ���������������ϵ����Ա.");
            cm.dispose();
        }  
    else if (status == 0) {
        var selStr = "  "+��+"  "+��+" "+��+" #e#r��"+MC+"���ֶĲ���#n#k  "+��+"  "+��+"  "+��+"\r\n\r\n";

		  if(r==1){
		  selStr += "\t\t\t "+���ʺ�+"";
		  cm.gainMeso(��ɫ�ʺ���ע*���ʺ�����);
		  cm.setBossRankCount("��ɫ�ʺ���ע",-��ɫ�ʺ���ע);
	}else{
		  selStr += "\t\t\t "+���ʺ�2+"";
		  cm.setBossRankCount("��ɫ�ʺ���ע",-��ɫ�ʺ���ע);
		  }
		  if(r==2){
		  selStr += " "+��б��+"";	
		  cm.gainMeso(��б����ע*��б������);
		  cm.setBossRankCount("��б����ע",-��б����ע);		  
	}else{
		  selStr += " "+��б��2+"";
		   cm.setBossRankCount("��б����ע",-��б����ע);
		  }	  
		  if(r==3){
		  selStr += " "+��С�ں�+"";	
		  cm.gainMeso(��С�ں���ע*��С�ں�����);
		  cm.setBossRankCount("��С�ں���ע",-��С�ں���ע);			  
	}else{
		  selStr += " "+��С�ں�2+"";
		  cm.setBossRankCount("��С�ں���ע",-��С�ں���ע);	
		  }		  	  
		  if(r==4){
		  selStr += " "+�۴��ں�+"\r\n";
		  cm.gainMeso(�۴��ں���ע*�۴��ں�����);
		  cm.setBossRankCount("�۴��ں���ע",-�۴��ں���ע);			  
	}else{
		  selStr += " "+�۴��ں�2+"\r\n";
		  cm.setBossRankCount("�۴��ں���ע",-�۴��ں���ע);
		  }  
		  if(r==5){
		  selStr += "\t\t\t "+�۸�̾��+"";
		  cm.gainMeso(�۸�̾����ע*�۸�̾������);
		  cm.setBossRankCount("�۸�̾����ע",-�۸�̾����ע);
	}else{
		  selStr += "\t\t\t "+�۸�̾��2+"";
		   cm.setBossRankCount("�۸�̾����ע",-�۸�̾����ע);
		   }
		  selStr += " "+�հ�+" "+�հ�+" ";
		  if(r==6){
		  selStr += ""+�۰��غ�+"\r\n";	
		  cm.gainMeso(�۰��غ���ע*�۰��غ�����);
		  cm.setBossRankCount("�۰��غ���ע",-�۰��غ���ע);		  
	}else{
		  selStr += ""+�۰��غ�2+"\r\n";
		  cm.setBossRankCount("�۰��غ���ע",-�۰��غ���ע);
		  }  
		  if(r==7){
		  selStr += "\t\t\t "+�۵��+"";
		  cm.gainMeso(�۵����ע*�۵������);
		  cm.setBossRankCount("�۵����ע",-�۵����ע);
	}else{
		  selStr += "\t\t\t "+�۵��2+"";
		  cm.setBossRankCount("�۵����ע",-�۵����ע);
		  }	
	      if(r==8){
		  selStr += " "+��Ц�ۺ�+"";
		  cm.gainMeso(��Ц�ۺ���ע*��Ц�ۺ�����);
		  cm.setBossRankCount("��Ц�ۺ���ע",-��Ц�ۺ���ע);		  
	}else{
		  selStr += " "+��Ц�ۺ�2+"";
		   cm.setBossRankCount("��Ц�ۺ���ע",-��Ц�ۺ���ע);
		   }  
		  if(r==9){
		  selStr += " "+�۰��ĺ�+"";
		  cm.gainMeso(�۰��ĺ���ע*�۰��ĺ�����);
		  cm.setBossRankCount("�۰��ĺ���ע",-�۰��ĺ���ע);			  
	}else{
		  selStr += " "+�۰��ĺ�2+"";
		  cm.setBossRankCount("�۰��ĺ���ע",-�۰��ĺ���ע);
		   }		  
		  if(r==10){
		  selStr += " "+������Ǻ�+"\r\n\r\n";
		  cm.gainMeso(������Ǻ���ע*������Ǻ�����);
		  cm.setBossRankCount("������Ǻ���ע",-������Ǻ���ע);		  
	}else{
		  selStr += " "+������Ǻ�2+"\r\n\r\n";
		  cm.setBossRankCount("������Ǻ���ע",-������Ǻ���ע);	}
		
		
		
		
		
		
		
		/*selStr += "\t\t\t "+���ʺ�2+" "+��б��2+" "+��С�ں�2+" "+�۴��ں�2+"\r\n";
		
		selStr += "\t\t\t "+�۸�̾��2+" "+�հ�+" "+�հ�+" "+�۰��غ�2+"\r\n";
		
		selStr += "\t\t\t "+�۰��غ�2+" "+��Ц�ۺ�2+" "+�۰��ĺ�2+" "+������Ǻ�2+"\r\n";*/
		
		
		if(r==1 && ��ɫ�ʺ���ע>0){
		selStr += "[�Ĳ���Ϣ]:#b��ϲ�㣬���н���#k,��ý�� #r"+��ɫ�ʺ���ע*���ʺ�����+"#k\r\n";	
}else   if(r==2 && ��б����ע>0){
		selStr += "[�Ĳ���Ϣ]:#b��ϲ�㣬���н���#k,��ý�� #r"+��б����ע*��б������+"#k\r\n";	
}else   if(r==3 && ��С�ں���ע>0){
		selStr += "[�Ĳ���Ϣ]:#b��ϲ�㣬���н���#k,��ý�� #r"+��С�ں���ע*��С�ں�����+"#k\r\n";			
}else   if(r==4 && �۴��ں���ע>0){
		selStr += "[�Ĳ���Ϣ]:#b��ϲ�㣬���н���#k,��ý�� #r"+�۴��ں���ע*�۴��ں�����+"#k\r\n";			
}else   if(r==5 && �۸�̾����ע>0){
		selStr += "[�Ĳ���Ϣ]:#b��ϲ�㣬���н���#k,��ý�� #r"+�۸�̾����ע*�۸�̾������+"#k\r\n";			
}else   if(r==6 && �۰��غ���ע>0){
		selStr += "[�Ĳ���Ϣ]:#b��ϲ�㣬���н���#k,��ý�� #r"+�۰��غ���ע*�۰��غ�����+"#k\r\n";		
}else   if(r==7 && �۵����ע>0){
		selStr += "[�Ĳ���Ϣ]:#b��ϲ�㣬���н���#k,��ý�� #r"+�۵����ע*�۵������+"#k\r\n";			
}else   if(r==8 && ��Ц�ۺ���ע>0){
		selStr += "[�Ĳ���Ϣ]:#b��ϲ�㣬���н���#k,��ý�� #r"+��Ц�ۺ���ע*��Ц�ۺ�����+"#k\r\n";			
}else   if(r==9 && �۰��ĺ���ע>0){
		selStr += "[�Ĳ���Ϣ]:#b��ϲ�㣬���н���#k,��ý�� #r"+�۰��ĺ���ע*�۰��ĺ�����+"#k\r\n";			
}else   if(r==9 && ������Ǻ���ע>0){
		selStr += "[�Ĳ���Ϣ]:#b��ϲ�㣬���н���#k,��ý�� #r"+������Ǻ���ע*������Ǻ�����+"#k\r\n";			
}else{
		selStr += "[�Ĳ���Ϣ]:#r���ź����ź�����#k\r\n";	
}		
		
		
		
		
		
		
			selStr += "\t\t\t\t #L1#"+��ͷ+"#e#b����һ��#k#n#l\r\n";
		
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
		case 1:
            cm.dispose();
            cm.openNpc(9100200,0);	
            break;

		}
    }
}