
importPackage(net.sf.cherry.client);
var ca = java.util.Calendar.getInstance();
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE);//��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var status = 0;
var ȷ�� = "#fUI/Login.img/BtOk/normal/0#";
var ȡ�� = "#fUI/Login.img/BtCancel/normal/0#";
var ���� = "#fUI/GuildMark.img/BackGround/00001007/16#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";

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
        }var MC = cm.getServerName();
		var jinbi = Math.ceil(Math.random() * 1000000);
		
		var jingyan = Math.ceil(Math.random() * 2000000);
		var bb = Math.ceil(Math.random() * 5);
		var dq = Math.ceil(Math.random() * 2000);
		
		
		 if(cm.getBossRank("��������",2) == 2 && cm.getBossRank("��������",2) == 2 && cm.getBossRank("������ʾ��1",2) == 2&& cm.getBossRank("���ȵ�",2) >=1000){
			cm.worldMessage(6,"�����һ�����죬"+ cm.getChar().getName() +"�����ǳ���");
			cm.setBossRankCount("���ȵ�",-1000);
		    cm.dispose();
} else  if(cm.getBossRank("��������",2) == 2 && cm.getBossRank("��������",2) == 2  && cm.getBossRank("������ʾ��1",2) == 2&& cm.getBossRank("���ȵ�",2) >=5000){
		    cm.worldMessage(4,"�����һ�����죬"+ cm.getChar().getName() +"�����ǳ���");
			cm.setBossRankCount("���ȵ�",-5000);
		    cm.dispose();
} else  if(cm.getBossRank("��������",2) == 2 && cm.getBossRank("��������",2) == 2  && cm.getBossRank("������ʾ��1",2) == 2&& cm.getBossRank("���ȵ�",2) >=5500){
		    cm.worldMessage(1,"�����һ�����죬"+ cm.getChar().getName() +"�����ǳ���");
			cm.setBossRankCount("���ȵ�",-5500);
		    cm.dispose();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
} else  if(cm.getBossRank("��������",2) == 2 && cm.getBossRank("��������",2) == 2 && cm.getBossRank("������ʾ��2",2) == 2&& cm.getBossRank("���ȵ�",2) >=1000){
			cm.worldMessage(6,"���ң�"+ cm.getChar().getName() +"����"+year+" ��"+month+"��"+day+"��"+ hour+"ʱ����"+MC+"��");
			cm.setBossRankCount("���ȵ�",-1000);
		    cm.dispose();
} else  if(cm.getBossRank("��������",2) == 2 && cm.getBossRank("��������",2) == 2  && cm.getBossRank("������ʾ��2",2) == 2&& cm.getBossRank("���ȵ�",2) >=5000){
		    cm.worldMessage(4,"���ң�"+ cm.getChar().getName() +"����"+year+" ��"+month+"��"+day+"��"+ hour+"ʱ����"+MC+"��");
			cm.setBossRankCount("���ȵ�",-5000);
		    cm.dispose();
} else  if(cm.getBossRank("��������",2) == 2 && cm.getBossRank("��������",2) == 2  && cm.getBossRank("������ʾ��2",2) == 2&& cm.getBossRank("���ȵ�",2) >=5500){
		    cm.worldMessage(1,"���ң�"+ cm.getChar().getName() +"����"+year+" ��"+month+"��"+day+"��"+ hour+"ʱ����"+MC+"��");
			cm.setBossRankCount("���ȵ�",-5500);
		    cm.dispose();				












			
			}
		
		
		if(cm.getBossLog("mrqdts")==0 && cm.getPlayer().getLevel() >= 45){
			cm.setBossRankCount("ǩ������");
			//cm.setBossRankCount("��Ծ��");
			//cm.setBossRankCount("��Ծ��","-"+cm.getBossRank("��Ծ��",2)+"");
		//	cm.gainNX(dq);
		//	cm.gainMeso(jinbi);
		//	cm.gainExp(jingyan);
			cm.gainItem(4110000,bb)
			cm.gainItem(4032398, +1)
			cm.setBossLog("mrqdts");
			cm.showInstruction("\r\n#e#r"+MC+"#n#k\r\n\r\n��� #e#r"+ cm.getBossRank("ǩ������",2)+" #k#n��ǩ��\r\n\r\n��ðٱ�ȯ��#b"+bb+"#k\r\n\r\n��ó�ϯͼ�£�1", 300, 20);
			cm.ȡ����¡();			
			cm.dispose();
		return;
		} else if (cm.getBossLog("mrqdts")==0 && cm.getPlayer().getLevel() < 45) {
			cm.setBossRankCount("ǩ������");
			cm.gainItem(4032398, +1)
			cm.setBossLog("mrqdts");
			cm.showInstruction("\r\n#e#r"+MC+"#n#k\r\n\r\n��� #e#r"+ cm.getBossRank("ǩ������",2)+" #k#n��ǩ��\r\n#k\r\n��ó�ϯͼ�£�1", 300, 20);
			cm.ȡ����¡();
            cm.dispose();
          return;
	 
	    }
		 else if (cm.getPlayer().getLevel() > 0) {		
			cm.ȡ����¡();
            cm.dispose();
          return;
	 
	    }

        if (mode == 1)
            status++;
        else
            status--;
		
		cm.dispose();
	}
}

