var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var ͼ��1 = "#fUI/UIWindow.img/FadeYesNo/icon7#";
var ͼ��2 = "#fUI/StatusBar.img/BtClaim/mouseOver/0#";
var �ر� = "#fUI/UIWindow.img/CashGachapon/BtOpen/mouseOver/0#";
var �� = "#fUI/UIWindow.img/CashGachapon/BtOpen/disabled/0#";
var ��ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var �� = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";

var Ģ�� = "#fUI/UIWindow.img/Minigame/Common/mark#";
function start() {
    status = -1;
    action(1, 0, 0)
}

function action(mode, type, selection) {
    if (status <= 0 && mode <= 0) {
        cm.dispose();
        return
    }
    if (mode == 1) {
        status++
    } else {
        status--
    }	 
		
		var MC = cm.getServerName();
		var �ڿ��� =  cm.getBossRank("�ڿ���",2);
		var �ڿ������� =  cm.getBossRank("�ڿ�������",2);
		var �ڿ��鿨 =  cm.getBossRank("�ڿ��鿨(1��)",2);		
		var �㷨0 = 100/200;
		
		var �㷨1 = 100/400;
		var �㷨2 = 100/800;	
		var �㷨3 = 100/1500;		
		var �㷨4 = 100/2000;
		var �㷨5 = 100/5000;
		var �㷨6 = 100/10000;
		var �㷨7 = 100/30000;
		var �㷨8 = 100/50000;
		var �ڿ�2�����鿨���� = 5000;	
		var �ڿ�3�����鿨���� = 10000;
		if (cm.getPlayer().getGMLevel() == 99) {
            cm.showInstruction("\r\n#e#r"+MC+"\r\n\r\n����Ȩʹ��#n#k\r\n ", 200, 3);  
            cm.dispose();
          return;
	 
	    
/*[�ڿ�����] 1-2��100   
[�ڿ���ͽ] 2-3��300
[�ڿ�רԱ] 3-4��700
[�ڿ�С����] 4-5��1500
[�ڿ�רҵ��] 5-6��3000
[�ڿ����] 6-7��5000
[�ڿ������] 7-8��10000
[�ڿ󱬷���] 8-9��20000
[�ڿ�֮��] 9-10��50000
[�¶����ڿ���] 10��xxxx
*/
	    
    } else if (status <= 0) {
        var selStr = "  #v1322071#  "+��+"  "+��+"  #e#r"+MC+"�ڿ�����#k#n  "+��+"  "+��+"  #v1322071#\r\n\r\n";
 
		selStr +=""+Ģ��+" ��ɫ: #r"+ cm.getChar().getName() +"#k\r\n";	
    	if(�ڿ��� > 50000){
		selStr +=""+Ģ��+" �ȼ�: #e#b10#k#n �� [#r"+((�ڿ���-50000)*�㷨8).toFixed(3)+"%#k]\r\n";//1��
		selStr +=""+Ģ��+" ����: #B"+(�ڿ���-50000)*�㷨8+"#  [ #rxxx#k / #b"+(�ڿ���-50000)+"#k ]\r\n";//8��				
}else	if(�ڿ��� > 20000){
		selStr +=""+Ģ��+" �ȼ�: #e#b9#k#n �� [#r"+((�ڿ���-30000)*�㷨7).toFixed(3)+"%#k]\r\n";//1��
		selStr +=""+Ģ��+" ����: #B"+(�ڿ���-30000)*�㷨7+"#  [ #r30000#k / #b"+(�ڿ���-30000)+"#k ]\r\n";//8��					
}else	if(�ڿ��� > 10000){
		selStr +=""+Ģ��+" �ȼ�: #e#b8#k#n �� [#r"+((�ڿ���-10000)*�㷨6).toFixed(3)+"%#k]\r\n";//1��
		selStr +=""+Ģ��+" ����: #B"+(�ڿ���-10000)*�㷨6+"#  [ #r10000#k / #b"+(�ڿ���-10000)+"#k ]\r\n";//7��			
}else	if(�ڿ��� > 5000){
		selStr +=""+Ģ��+" �ȼ�: #e#b7#k#n �� [#r"+((�ڿ���-5000)*�㷨5).toFixed(3)+"%#k]\r\n";//1��
		selStr +=""+Ģ��+" ����: #B"+(�ڿ���-5000)*�㷨5+"#  [ #r5000#k / #b"+(�ڿ���-5000)+"#k ]\r\n";//6��			
}else	if(�ڿ��� > 3000){
		selStr +=""+Ģ��+" �ȼ�: #e#b6#k#n �� [#r"+((�ڿ���-3000)*�㷨4).toFixed(3)+"%#k]\r\n";//1��
		selStr +=""+Ģ��+" ����: #B"+(�ڿ���-3000)*�㷨4+"#  [ #r2000#k / #b"+(�ڿ���-3000)+"#k ]\r\n";//5��		
}else	if(�ڿ��� > 1500){
		selStr +=""+Ģ��+" �ȼ�: #e#b5#k#n �� [#r"+((�ڿ���-1500)*�㷨3).toFixed(3)+"%#k]\r\n";//1��
		selStr +=""+Ģ��+" ����: #B"+(�ڿ���-1500)*�㷨3+"#  [ #r1500#k / #b"+(�ڿ���-1500)+"#k ]\r\n";	//4��			
}else	if(�ڿ��� > 700){
		selStr +=""+Ģ��+" �ȼ�: #e#b4#k#n �� [#r"+((�ڿ���-700)*�㷨2).toFixed(3)+"%#k]\r\n";//1��
		selStr +=""+Ģ��+" ����: #B"+(�ڿ���-700)*�㷨2+"#  [ #r800#k / #b"+(�ڿ���-700)+"#k ]\r\n";	//3��			
}else	if(�ڿ��� > 300){
		selStr +=""+Ģ��+" �ȼ�: #e#b3#k#n �� [#r"+((�ڿ���-300)*�㷨1).toFixed(3)+"%#k]\r\n";//1��
		selStr +=""+Ģ��+" �ڿ���: #B"+(�ڿ���-300)*�㷨1+"#  [ #r400#k / #b"+(�ڿ���-300)+"#k ]\r\n";	//2��	
}else	if(�ڿ��� > 100){
		selStr +=""+Ģ��+" �ȼ�: #e#b2#k#n �� [#r"+((�ڿ���-100)*�㷨0).toFixed(3)+"%#k]\r\n";//1��
		selStr +=""+Ģ��+" �ڿ���: #B"+(�ڿ���-100)*�㷨0+"#  [ #r200#k / #b"+(�ڿ���-100)+"#k ]\r\n";	//			
}else{  selStr +=""+Ģ��+" �ȼ�: #e#b1#k#n �� [#r"+�ڿ���.toFixed(3)+"%#k]\r\n";//1��
		selStr +=""+Ģ��+" ����: #B"+�ڿ���+"#  [ #r100#k / #b"+�ڿ���+"#k ]\r\n";//1��
	 }	
	 
	 if(cm.getBossRank("�ڿ��鿨(1��)",2)>0 || cm.getBossRank("�ڿ�������",2) > 0){
		selStr +="\r\n������������������������[������]����������������������\r\n";//
		if(cm.getBossRank("�ڿ��鿨(1��)",2)== 3){
		selStr +="#d[3�����鿨]#k #g��#k �� ";
}
		if(cm.getBossRank("�ڿ��鿨(1��)",2)== 2){
		selStr +="#d[2�����鿨]#k #g��#k �� ";
}
		if(cm.getBossRank("�ڿ�������",2) > 0){
		selStr +="#d[�ڿ�������]: #b"+�ڿ�������+"#k ��";
}
		
		selStr +="\r\n������������������������������������������������������\r\n";//
}
		selStr +="#d[˫���ڿ��鿨]#b���ۣ�#r"+�ڿ�2�����鿨����+"#k #b��ȯ#k|       #e#r��ʾ��#k#n\r\n";//
		selStr +="#d[�����ڿ��鿨]#b���ۣ�#r"+�ڿ�3�����鿨����+"#k #b��ȯ#k|#e#r���鿨ÿ��23:59ʧЧ#k#n\r\n";//
		selStr +="#L1#"+��ͷ+"#b�ڿ�˵��\r\n";//
		if(!cm.haveItem(1322071)){
			if( cm.getPlayer().getInventory(cm.getInvType(-1)).findById(1322071) == null){
			selStr +="#L2#"+��ͷ+"#b�����ڿ󹤾�\r\n";
			}
		}
		
		selStr +="#L3#"+��ͷ+"#b�����ڿ�������#l\r\n";//
		selStr +="#L4#"+��ͷ+"#b�����ڿ�2�����鿨(1��)#l\r\n";//
		selStr +="#L5#"+��ͷ+"#b�����ڿ�3�����鿨(1��)#l\r\n";//
 
 
 
 
 
 
 
 
			
        cm.sendSimple(selStr)
    } else if (status == 1) {
        switch (selection) {
			case 1:
            cm.dispose();
            cm.openNpc(9900007,102);
            break
			case 3:
            cm.dispose();
            cm.openNpc(9000018,864);
            break
			
			case 4:
			if(cm.getPlayer().getCSPoints(1) >= �ڿ�2�����鿨����){
				cm.gainNX(-�ڿ�2�����鿨����);
				cm.setBossRankCount("�ڿ��鿨(1��)",-�ڿ��鿨);
				cm.setBossRankCount("�ڿ��鿨(1��)",2);
			    cm.setBossLog("�ڿ��鿨(1��)");
				cm.dispose();
		} else {
				cm.sendOk(" ˫���ڿ���Ҫ  #r"+�ڿ�2�����鿨����+"#k  ��ȯ����");
                cm.dispose();
		} 
            break
			
			
			
			
			
			
			
			
			
			
			
			
			case 2:
		if(cm.getPlayer().getMeso() >= 10000){
			 cm.gainMeso(-10000);
			 cm.gainItem(1322071,1,1);
			 cm.sendOk("�ɹ����� #v1322071# #b#t1322071##k #r1��#k");
             cm.dispose();
             
	} else {
			 cm.sendOk("��Ҫ #b10000#k ���Ŷ��");
             cm.dispose();
	}           
            break
			
			
			
			
			
			
			
			
			
			
			
			
			

        }
    }
}