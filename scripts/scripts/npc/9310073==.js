importPackage(net.sf.odinms.client);
var status = 0;
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var Բ�� = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fEffect/CharacterEff/1112908/0/1#";  //�ʹ�3
var ttt1 = "#fEffect/CharacterEff/1062114/1/0#";  //����
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var �����Ʒ = "#v1302000#";
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
		if (mode == 1)
		status++;
		else
		status--;


	if (status == 0) {

	
	    var textz = "\r\n���ã��𾴵� #b#h ##k,��ӭ��������ð�յ�#r�������#k��\r\n����ð�յ����ȹ��⣬���������������ͣ�#l\r\n#bע�������������������ֻҪ��ֵ��Ӧ������ȡ\r\nף�����Ϸ��죡 ����#rVIP�ȼ����齱����#k����#l\r\n\r\n��Ŀǰ�л��֣� #e#r" + cm.getjf() + "\r\n";

        textz += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
		
		textz += "#d#L0##r��ȡ100Ԫ�������#k#v4000424#\r\n";
		
		textz += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"

		textz += "#d#L1##r��ȡ300Ԫ�������#k#v4000423#\r\n";
		
		textz += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"

		textz += "#d#L2##r��ȡ500Ԫ�������#k#v4031353#\r\n";
		
		textz += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"

		textz += "#d#L3##r��ȡ1000Ԫ�������#k#v4031777#\r\n";
		
		textz += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
		
		textz += "#d#L4##r��ȡ2000Ԫ�������#k#v4031983#\r\n";
		
		textz += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
		
		textz += "#d#L5##r��ȡ3000Ԫ�������#k#v5680053#\r\n";
		
		textz += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"

                cm.sendSimple (textz);  

			
	}else if (status == 1) {

	if (selection == 0) {

            if(cm.haveItem(4000463,10)){//�����
				cm.dispose();
                cm.gainNX(20000);//��ȯ
				cm.gainjf(7);//����
				cm.gainItem(2340000,10);//ף����
				cm.gainItem(2049117,10);//�����
				cm.gainItem(4310030,10);//�˶����
				cm.gainItem(1142000,10,10,10,10,500,500,10,10,1,1,1,1,10,10);//��ʵð�ռ�ѫ��
				cm.gainItem(1112908,10,10,10,10,100,100,10,10,1,1,1,1,0,0);//�����ָ
				cm.gainItem(1012057,10,10,10,10,10,10,10,10,1,1,1,1,0,0);//͸�����
				cm.gainItem(1122017,1);//�����׹
				cm.gainvip(+1);
				cm.gainItem(4000487,-100);
				cm.sendOk("��ϲ�㣬������100Ԫ�����! .");
			        cm.����(3,"�����ϵͳ��["+cm.getName()+"]100Ԫ���������ȡ�ɹ���");
				cm.dispose();
            }else
                cm.sendOk("��Ǹ������δ�������õ��������ϵȺ��~.");
                cm.dispose();
	    


}else if (selection == 1) {

            if(cm.haveItem(4310002,100)){//�����������
				cm.dispose();
                cm.gainNX(60000);
				cm.gainjf(30);//����
				cm.gainItem(2340000,5);//ף����
				cm.gainItem(2049117,5);//�����
				cm.gainItem(4310030,30);//�˶����
				cm.gainItem(1142003,30,30,30,30,1000,1000,30,30,5,5,5,5,15,15);//��������ѫ��
				cm.gainItem(1112908,20,20,20,20,200,200,20,20,10,10,1,1,0,0);//�����ָ
				cm.gainItem(1122017,10,10,10,10,10,10,10,10,1,1,1,1,0,0);//�����׹
				cm.gainItem(1102039,10,10,10,10,10,10,10,10,1,1,1,1,0,0);//͸������
				cm.gainvip(+3);
				cm.gainItem(4310002,-100);
				cm.sendOk("��ϲ�㣬������300Ԫ�����! .");
			        cm.����(3,"�����ϵͳ��["+cm.getName()+"]300Ԫ���������ȡ�ɹ���");
				cm.dispose();
            }else
                cm.sendOk("��Ǹ������δ�������õ��������ϵȺ��~.");
                cm.dispose();
	    

}else if (selection == 2) {

            if(cm.haveItem(4310020,100)){//���﹫԰�����
				cm.dispose();
                cm.gainNX(120000);
				cm.gainjf(90);//����
				cm.gainItem(2340000,100);//ף����
				cm.gainItem(2049117,100);//�����
				cm.gainItem(2049116,20);//ǿ�������
				cm.gainItem(4310030,500);//�˶����
				cm.gainItem(1142005,60,60,60,60,1500,1500,30,30,60,60,10,10,20,20);//��˵ð�ռ�ѫ��
				cm.gainItem(1112908,30,30,30,30,300,300,30,30,20,20,1,1,0,0);//�����ָ
				cm.gainItem(1122017,30,30,30,30,30,30,30,30,1,1,1,1,0,0);//�����׹
				cm.gainItem(1032024,10,10,10,10,10,10,10,10,1,1,1,1,0,0);//͸������
				cm.gainvip(+5);
				cm.gainItem(4310020,-100);
				cm.sendOk("��ϲ�㣬������500Ԫ�����! .");
			        cm.����(3,"�����ϵͳ��["+cm.getName()+"]500Ԫ���������ȡ�ɹ���");
				cm.dispose();
            }else
                cm.sendOk("��Ǹ������δ�������õ��������ϵȺ��~.");
                cm.dispose();

}else if (selection == 3){

            if(cm.haveItem(4310021,100)){//���ൺ�����
				cm.dispose();
                cm.gainNX(250000);
				cm.gainjf(9999);//����
				cm.gainItem(2340000,200);//ף����
				cm.gainItem(2049117,200);//�����
				cm.gainItem(2049116,50);//ǿ�������
				cm.gainItem(4310030,1000);//�˶����
				cm.gainItem(1142006,100,100,100,100,2000,2000,100,100,30,30,30,30,30,20);//ð�յ�ż������ѫ��
				cm.gainItem(1112908,50,50,50,50,500,500,50,50,30,30,1,1,0,0);//�����ָ
				cm.gainItem(1122017,50,50,50,50,50,50,50,50,1,1,1,1,0,0);//�����׹
				cm.gainItem(1002186,10,10,10,10,10,10,10,10,1,1,1,1,0,0);//͸��ñ
				cm.gainvip(+10);
				cm.gainItem(4310021,-100);
				cm.sendOk("��ϲ�㣬������1000Ԫ�����! .");
			        cm.����(3,"�����ϵͳ��["+cm.getName()+"]1000Ԫ���������ȡ�ɹ���");
				cm.dispose();
            }else
                cm.sendOk("��Ǹ������δ�������õ��������ϵȺ��~.");
                cm.dispose();

}else if (selection == 4){

            if(cm.haveItem(4310022,100)){//ӣ���ڼ����
				cm.dispose();
                cm.gainNX(600000);
				cm.gainjf(9999);//����
				cm.gainItem(2340000,300);//ף����
				cm.gainItem(2049117,300);//�����
				cm.gainItem(2049116,100);//ǿ�������
				cm.gainItem(4310030,2000);//�˶����
				cm.gainItem(1142384,200,200,200,200,2500,2500,150,150,100,100,50,50,40,20);//ð�վ���ѫ��
				cm.gainItem(1112908,80,80,80,80,800,800,80,80,80,80,1,1,0,0);//�����ָ
				cm.gainItem(1122017,80,80,80,80,80,80,80,80,1,1,1,1,0,0);//�����׹
				cm.gainItem(1012289,10,10,10,10,10,10,10,10,1,1,1,1,0,0);//͸������
				cm.gainvip(+20);
				cm.gainItem(4310022,-100);
				cm.sendOk("��ϲ�㣬������2000Ԫ�����! .");
			        cm.����(3,"�����ϵͳ��["+cm.getName()+"]2000Ԫ���������ȡ�ɹ���");
				cm.dispose();
            }else
                cm.sendOk("��Ǹ������δ�������õ��������ϵȺ��~.");
                cm.dispose();

}else if (selection == 5){

            if(cm.haveItem(4310027,100)){//��˵��
				cm.dispose();
                cm.gainNX(1000000);
				cm.gainjf(9999);//����
				cm.gainItem(2340000,500);//ף����
				cm.gainItem(2049117,500);//�����
				cm.gainItem(2049116,200);//ǿ�������
				cm.gainItem(4310030,3000);//�˶����
				cm.gainItem(1142142,300,300,300,300,3000,3000,200,200,200,200,80,80,40,20);//�����ػ���ѫ��
				cm.gainItem(1112908,100,100,100,100,1000,1000,100,100,100,100,1,1,0,0);//�����ָ
				cm.gainItem(1122017,100,100,100,100,100,100,100,100,10,10,10,10,0,0);//�����׹
				cm.gainItem(1022079,10,10,10,10,10,10,10,10,1,1,1,1,0,0);//͸���۾�
				cm.gainvip(+30);
				cm.gainItem(4310027,-100);
				cm.sendOk("��ϲ�㣬������3000Ԫ�����! .");
			        cm.����(3,"�����ϵͳ��["+cm.getName()+"]3000Ԫ���������ȡ�ɹ���");
				cm.dispose();
            }else
                cm.sendOk("��Ǹ������δ�������õ��������ϵȺ��~.");
                cm.dispose();

}else if (selection == 6){
	if (cm.haveItem(4001085,1) && cm.getBossLog('PlayQuest7') < 1) {
		cm.gainItem(4001085,-1);
		cm.setBossLog('PlayQuest7');
		cm.gainItem(4001126,2500);
		cm.sendOk("�������,������½���:\r\n#2500�ŷ�Ҷ!");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
		cm.dispose();

}else if (selection == 7){
	if (cm.haveItem(4001083,1) && cm.getBossLog('PlayQuest8') < 1) {
		cm.gainItem(4001083,-1);
		cm.setBossLog('PlayQuest8');
		cm.gainItem(4001126,5000);
		cm.sendOk("�������,������½���:\r\n5000�ŷ�Ҷ");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
		cm.dispose();

}else if (selection == 8){
	if (cm.haveItem(4001085,1) && cm.getBossLog('PlayQuest9') < 1) {
		cm.gainItem(4001085,-1);
		cm.setBossLog('PlayQuest9');
		cm.gainNX(1000);
		cm.sendOk("�������,������½���:\r\n1000���");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
		cm.dispose();

}else if (selection == 9){
	if (cm.haveItem(4001084,1) && cm.getBossLog('PlayQuest10') < 1) {
		cm.gainItem(4001084,-1);
		cm.setBossLog('PlayQuest10');
		cm.gainNX(1000);
		cm.sendOk("�������,������½���:\r\n1000���");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
		cm.dispose();

}else if (selection == 10){
	if (cm.haveItem(4001083,1) && cm.getBossLog('PlayQuest11') < 1) {
		cm.gainItem(4001083,-1);
		cm.setBossLog('PlayQuest11');
		cm.gainNX(2000);
		cm.sendOk("�������,������½���:\r\n2000���");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
		cm.dispose();



}else if (selection == 11){
	if (cm.haveItem(4001126,1000) && cm.getBossLog('PlayQuest14') < 1) {
		cm.gainItem(4001126,-1000);
		cm.setBossLog('PlayQuest14');
		cm.gainNX(1000);
		cm.sendOk("�������,������½���:\r\n1000���");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
		cm.dispose();


}
}
}
}
