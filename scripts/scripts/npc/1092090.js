






var chance1 = Math.floor(Math.random()*200+1);
var chance2 = Math.floor(Math.random()*50);
var chance3 = (Math.floor(Math.random()*20)+1);
var chance4 = Math.floor(Math.random()*2+1);
var itemchance = chance1 + chance2 + chance3 * chance4;
var status = 0;

function start() 
	{
	status = -1;
	action(1, 0, 0);


	}

function action(mode, type, selection)
{
	if (mode == -1)
	{
		cm.dispose();
	}
	else if (mode == 0)
	{
		cm.sendOk("�õ����Ҫ��ȥ��ʱ������.");
		cm.dispose();
	}else 
	{
		if (mode == 1)
			status++;
		else
			status--;		
	if (status == 0)
	{		
		cm.sendYesNo("��ǰʱ����#b" + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��. \r\n#k#rÿ��20����#k��������ȡ��ȯ!\r\nÿ�ε�������õ��,��������ʱ���Ի�ø���!\r\nֻ��5����ʱ��,����!!\r\n\r\n" );	
	}
	else if (status == 1) {
		if (cm.getHour() < 20  ||cm.getHour() > 20 ) {
cm.sendOk("�ʱ�仹û��.\r\n#r���ڷ�����ʱ��:" + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��");
cm.dispose();
 } else if (cm.getMin() > 4) {
cm.sendOk("�Ѿ�����Ŷ.\r\n#r���ڷ�����ʱ��:" + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��");
cm.dispose();


 }else if (cm.getLevel() > 0 ) {
       if ((itemchance >= 30) && (itemchance <= 50)) { 
var zz =4001126;
cm.gainNX(1);
cm.serverNotice("[20�������ױ�]:[" + cm.getName() + "]�������� 1 �����.");
cm.dispose();
}else if ((itemchance >= 70) && (itemchance <= 80)) { 
var zz =4001126;
cm.gainNX(2);
cm.serverNotice("[20�������ױ�]:[" + cm.getName() + "]�������� 2 �����.");
cm.dispose();
}else if ((itemchance >= 80) && (itemchance <= 90)) { 
var zz =4001126;
cm.gainNX(3);
cm.serverNotice("[20�������ױ�]:[" + cm.getName() + "]�������� 3 �����.");
cm.dispose();
}else if ((itemchance >= 90) && (itemchance <= 110)) { 
var zz =4001126;
cm.gainNX(4);
cm.serverNotice("[20�������ױ�]:[" + cm.getName() + "]�������� 4 �����.");
cm.dispose();
}else if ((itemchance >= 110) && (itemchance <= 120)) { 
var zz =4001126;
cm.gainNX(5);
cm.serverNotice("[20�������ױ�]:[" + cm.getName() + "]�������� 5 �����.");
cm.dispose();
}else if ((itemchance >= 120) && (itemchance <= 140)) { 
var zz =4001126;
cm.gainNX(6);
cm.serverNotice("[20�������ױ�]:[" + cm.getName() + "]�������� 6 �����.");
cm.dispose();
}else if ((itemchance >= 190) && (itemchance <= 200)) { 
var zz =4001126;
cm.gainNX(7);
cm.serverNotice("[20�������ױ�]:[" + cm.getName() + "]�������� 7 �����.");
cm.dispose();
}else if ((itemchance >= 225) && (itemchance <= 230)) { 
var zz =4001126;
cm.gainNX(8);
cm.serverNotice("[20�������ױ�]:[" + cm.getName() + "]�������� 8 �����.");
cm.worldMessage(6,"��ң�"+cm.getName()+" ��[20�������ױ�]��ȡ��8��ȯ��");
cm.dispose();
}else{
var zz =4001126;
cm.gainNX(3);
cm.serverNotice("[20�������ױ�]:[" + cm.getName() + "]�������� 3 �����.");
cm.dispose();}

 }else if (cm.getName().getVip() == 1 ||cm.getName().getVip() == 2 ||cm.getName().getVip() == 3 ||cm.getName().getVip() == 4 ||cm.getName().getVip() == 5) {
if ((itemchance >= 30) && (itemchance <= 50)) { 
var zz =4001126;
cm.gainNX(6);
cm.serverNotice("[20�������ױ�]:[" + cm.getName() + "]�������� 6 �����.");
cm.dispose();
}else if ((itemchance >= 70) && (itemchance <= 90)) { 
var zz =4001126;
cm.gainNX(12);
cm.serverNotice("[20�������ױ�]:[" + cm.getName() + "]�������� 12 �����.");
cm.worldMessage(6,"��ң�"+cm.getName()+" ��20�������ױȳ�ȡ��12��ȯ��");
cm.dispose();
}else if ((itemchance >= 110) && (itemchance <= 140)) { 
var zz =4001126;
cm.gainNX(10);
cm.serverNotice("[20�������ױ�]:[" + cm.getName() + "]�������� 10 �����.");
cm.dispose();
}else if ((itemchance >= 170) && (itemchance <= 200)) { 
var zz =4001126;
cm.gainNX(6);
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"[�����ױ�]" + " : " + cm.getName().getName() +" �������� 6 �����.��ҹ���.",true).getBytes());
cm.dispose();
}else if ((itemchance >= 210) && (itemchance <= 230)) { 
var zz =4001126;
cm.gainNX(8);
cm.serverNotice("[20�������ױ�]:[" + cm.getName() + "]�������� 8 �����.");
cm.dispose();
}else{
var zz =4001126;
cm.gainNX(12);
cm.serverNotice("[20�������ױ�]:[" + cm.getName() + "]�������� 12 �����.");
cm.dispose();}
 }else if (cm.getName().getVip() == 1 ||cm.getName().getVip() == 2 ||cm.getName().getVip() == 3 ||cm.getName().getVip() == 4 ||cm.getName().getVip() == 5) {
if ((itemchance >= 30) && (itemchance <= 50)) { 
var zz =4001126;
cm.gainNX(6);
cm.serverNotice("[20�������ױ�]:[" + cm.getName() + "]�������� 6 �����.");
cm.dispose();
}else if ((itemchance >= 70) && (itemchance <= 90)) { 
var zz =4001126;
cm.gainNX(12);
//cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"[�����ױ�]" + " : " + cm.getName().getName() +" �������� #r12#k ������ҹ���.",true).getBytes());
cm.serverNotice("[20�������ױ�]:[" + cm.getName() + "]�������� 12 �����.");
cm.worldMessage(6,"��ң�"+cm.getName()+" ��20�������ױȳ�ȡ��12��ȯ��");
cm.dispose();
}else if ((itemchance >= 110) && (itemchance <= 140)) { 
var zz =4001126;
cm.gainNX(6);
cm.serverNotice("[20�������ױ�]:[" + cm.getName() + "]�������� 6 �����.");
cm.dispose();
}else if ((itemchance >= 170) && (itemchance <= 200)) { 
var zz =4001126;
cm.gainNX(6);
cm.serverNotice("[20�������ױ�]:[" + cm.getName() + "]�������� 6 �����.");
cm.dispose();
}else if ((itemchance >= 210) && (itemchance <= 230)) { 
var zz =4001126;
cm.gainNX(18);
cm.serverNotice("[20�������ױ�]:[" + cm.getName() + "]�������� 18 �����.");
cm.worldMessage(6,"��ң�"+cm.getName()+" ��20�������ױȳ�ȡ��18��ȯ��");
cm.dispose();
}else{
var zz =4001126;
cm.gainNX(4);
cm.serverNotice("[20�������ױ�]:[" + cm.getName() + "]�������� 4 �����.");
cm.dispose();}
		 }else {
cm.sendOk("�ʱ�仹û��.\r\n#r���ڷ�����ʱ��:" + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��");
		cm.dispose();	
	}
}
}}
