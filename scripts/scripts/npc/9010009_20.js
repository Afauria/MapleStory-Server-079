importPackage(net.sf.odinms.client);
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
		if (mode == 1)
		status++;
		else
		status--;


	if (status == 0) {

	    var textz = "\r\n#e��ӭ����#rð�յ�ÿ������ר��.ÿ�����񶼿������.��ȡ���Ӧ�Ľ�������������ÿ�ն���#l\r\n#bע�����ϲ����ᱻϵͳ�̵����̵�һ�ɲ��⣬��ע��#l\r\n";

		textz += "#d#L0#�ռ�#v4000000##v4000016##v4000019#��#r50#d���ɵþ���20W+���100W+��Ѻ1000\r\n";

		textz += "#d#L1#�ռ�#v4000173##r 120 #d���ɵþ���20W����ȯ1000\r\n";

		textz += "#d#L2#�ռ�#v4000121##r 120 #d���ɵý��200W����ȯ1000\r\n";

		textz += "#d#L3#�ռ�#v4031227##r 1 #d���ɵþ���10W����Ѻȯ1000���ƽ��Ҷ30��\r\n";

		textz += "#d#L4#�ռ�#v4001085##v4001030#��#r 1 #d���ɵ�#r#v4251202#1��#v2022279#5�� ���3000W\r\n";

		//textz += "#d#L5#�ռ�#v4000161##b#z4000161##r 100 #d���ɶһ�#r#v4032226#10ֻ\r\n";

		//textz += "#d#L6#�ռ�#v4000052##b#z4000052##r 100 #d���ɶһ�#r#v4032226#10ֻ\r\n";

		//textz += "#d#L7#�ռ�#v4000190##b#z4000190##r 100 #d���ɶһ�#r#v4032226#10ֻ\r\n";

		//textz += "#d#L8#�ռ�#v4001085##b#z4001085##r 1 #d��\r\n  �ɶһ�#r1000��#d��#l\r\n";

		//textz += "#d#L9#�ռ�#v4001084##b#z4001084##r 1 #d��\r\n  �ɶһ�#r1000��#d��#l\r\n";

		//textz += "#d#L10#�ռ�#v4001083##b#z4001083##r 1 #d��\r\n  �ɶһ�#r2000��#d��#l\r\n";
                cm.sendSimple (textz);  

			
	}else if (status == 1) {

	if (selection == 0) {
if (cm.haveItem(4000000,50) && cm.haveItem(4000016,50) && cm.haveItem(4000019,50) && cm.getBossLog('PlayQuest110') < 1) {
			
		cm.setBossLog('PlayQuest110');      
        cm.gainExp(+200000);
		cm.gainMeso(+1000000);
        cm.gainDY(+1000);
		cm.gainItem(4000000,-50);
		cm.gainItem(4000016,-50);
		cm.gainItem(4000019,-50);
		cm.sendOk("��ϲ��������ɣ�");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
		cm.dispose();
	    


}else if (selection == 1) {
	if (cm.haveItem(4000173,120) && cm.getBossLog('PlayQuest111') < 1) {
			
		cm.setBossLog('PlayQuest111');      
        cm.gainExp(+200000);
	//	cm.gainMeso(+1000000);
        cm.gainNX(+1000);
		//cm.gainItem(4000000,-50);
		//cm.gainItem(4000016,-50);
		cm.gainItem(4000173,-120);
		cm.sendOk("��ϲ��������ɣ�");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
		cm.dispose();
	    

}else if (selection == 2) {
	if (cm.haveItem(4000121,120) && cm.getBossLog('PlayQuest112') < 1) {
			
		cm.setBossLog('PlayQuest112');      
        cm.gainMeso(+2000000);
	//	cm.gainMeso(+1000000);
        cm.gainNX(+1000);
		//cm.gainItem(4000000,-50);
		//cm.gainItem(4000016,-50);
		cm.gainItem(4000121,-120);
		cm.sendOk("��ϲ��������ɣ�");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
		cm.dispose();

}else if (selection == 3){
	if (cm.haveItem(4031227,1) && cm.getBossLog('PlayQuest113') < 1) {
			
		cm.setBossLog('PlayQuest113');      
        cm.gainExp(+100000);
	//	cm.gainMeso(+1000000);
        cm.gainDY(+1000);
		cm.gainItem(4000313,30);
		//cm.gainItem(4000016,-50);
		cm.gainItem(4031227,-1);
		cm.sendOk("��ϲ��������ɣ�");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
		cm.dispose();

}else if (selection == 4){
	if (cm.haveItem(4001085,1) && cm.haveItem(4001030,1) && cm.getBossLog('PlayQuest114') < 1) {
			
		cm.setBossLog('PlayQuest114');      
       // cm.gainExp(+200000);
		//cm.gainMeso(+1000000);
        //cm.gainDY(+1000);
		cm.gainItem(4001085,-1);
		cm.gainItem(4001030,-1);
		cm.gainItem(4251202,1);
		cm.gainItem(2022279,5);
		cm.gainMeso(30000000);
		//cm.gainItem(4000019,-50);
		cm.sendOk("��ϲ��������ɣ�");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
		cm.dispose();

}else if (selection == 5){
	if (cm.haveItem(4000161,100) && cm.getBossLog('PlayQuest85') < 1) {
		cm.gainItem(4000161,-100);
		cm.setBossLog('PlayQuest85');
		cm.gainItem(4032226,10);
		cm.gainExp( + 100000);
		cm.sendOk("�������,���Ⱥ�����ƶ������͵�\r\n10����!");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
		cm.dispose();

}else if (selection == 6){
	if (cm.haveItem(4000052,100) && cm.getBossLog('PlayQuest86') < 1) {
		cm.gainItem(4000052,-100);
		cm.setBossLog('PlayQuest86');
		cm.gainItem(4032226,10);
		cm.gainExp( + 100000);
		cm.sendOk("�������,���Ⱥ�����ƶ������͵�\r\n10����!");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
		cm.dispose();

}else if (selection == 7){
	if (cm.haveItem(4000190,100) && cm.getBossLog('PlayQuest87') < 1) {
		cm.gainItem(4000190,-100);
		cm.setBossLog('PlayQuest87');
		cm.gainItem(4032226,10);
		cm.gainExp( + 100000);
		cm.sendOk("�������,���Ⱥ�����ƶ������͵�\r\n10����");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
		cm.dispose();

}else if (selection == 8){
	if (cm.haveItem(4001085,1) && cm.getBossLog('PlayQuest88') < 1) {
		cm.gainItem(4001085,-1);
		cm.setBossLog('PlayQuest88');
		cm.gainNX(1000);
		cm.sendOk("�������,������½���:\r\n1000���");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
		cm.dispose();

}else if (selection == 9){
	if (cm.haveItem(4001084,1) && cm.getBossLog('PlayQuest89') < 1) {
		cm.gainItem(4001084,-1);
		cm.setBossLog('PlayQuest89');
		cm.gainNX(1000);
		cm.sendOk("�������,������½���:\r\n1000���");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
		cm.dispose();

}else if (selection == 10){
	if (cm.haveItem(4001083,1) && cm.getBossLog('PlayQuest90') < 1) {
		cm.gainItem(4001083,-1);
		cm.setBossLog('PlayQuest90');
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
