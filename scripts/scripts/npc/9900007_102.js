var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var �� = "#fReactor/2112007.img/0/0#";
var ��ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";

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
		
		if (cm.getPlayer().getGMLevel() == 99) {
            cm.showInstruction("\r\n#e#r"+MC+"\r\n\r\n����Ȩʹ��#n#k\r\n ", 200, 3);  
            cm.dispose();
          return;
	 
	    
	    
    } else if (status <= 0) {
        var selStr = "#e#r�ڿ�˵��#k#n\r\n\r\n";
 
		selStr +=" 1. �ڿ���������Ҫһ��  #v1322071# #b#t1322071##k\r\n";//
		selStr +=" 2. Ȼ������ "+��+" �ĵ�ͼ��\r\n    װ�� #v1322071# #b#t1322071##k �Ϳ��Խ����ڿ�\r\n";//
		
		
		selStr +=" 3. ÿ���ڿ����#b���ֿ���,��ң����飬����#k�ȣ�������\r\n    ��ȼ�����õĶ���Ҳ�᲻ͬ��\r\n";//
		
		
		selStr +=" 4. ÿ���ڿ����#r�ڿ���#k���ڿ��������ڿ�ȼ���\r\n    ���Թ������������������ۻ����顣\r\n";//
		
		
		selStr +=" 5. ��ͬ���͵Ŀ����Ե��ӡ�\r\n";//
		
		//selStr +="\r\n\r\n\t\t\t\t #L0#"+��ͷ+"#b����\r\n";//
 
 
 
 
 
 
 
 
			
        cm.sendSimple(selStr)
    } else if (status == 1) {
        switch (selection) {
			case 0:
            cm.dispose();
            cm.openNpc(1022004,0);
            break
			
			
			
			
			
			
			
			
			
			
			
			
			
			

        }
    }
}