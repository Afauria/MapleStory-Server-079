importPackage(net.sf.cherry.tools);
importPackage(net.sf.cherry.client);

var status = 0;

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

	    var textz = "#d��������һЩ�ɳ��Ͳ���֮��������.\r\n";

  textz += "#L17#�����ֽ�#l\r\n";
  textz += "#L18#�����ָ�#l\r\n";
  textz += "#L19#�����ֶ���#l\r\n";
  textz += "#L20#�����̵ֶ�#l\r\n";
  textz += "#L21#�������#l\r\n";
  textz += "#L22#������#l\r\n";
  textz += "#L23#����˫�ֽ�#l\r\n";
  textz += "#L24#����˫�ָ�#l\r\n";
  textz += "#L25#����˫�ֶ���#l\r\n";
  textz += "#L26#����ǹ#l\r\n";
  textz += "#L27#����ì#l\r\n";
  textz += "#L28#����#l\r\n";
  textz += "#L29#������#l\r\n";
  textz += "#L30#����ȭ��#l\r\n";
  textz += "#L31#����ָ��#l\r\n";
  textz += "#L32#�����ǹ#l\r\n";





		cm.sendSimple (textz);  

	}else if (status == 1) {

	       if (selection == 1){
                   if (cm.getMeso()<=300000) {
					   cm.dispose();
 			cm.sendOk("��Ҫ����֮��������ҲҪ����ʮ���Ұɣ�");			
		} else{
			cm.dispose();
		 cm.openNpc(1022003,601);//���ֽ�
			}

       } else if (selection == 2){
                 if (cm.getMeso()<=300000) {
					 cm.dispose();
 			cm.sendOk("��Ҫ����֮��������ҲҪ����ʮ���Ұɣ�");
		} else{
			cm.dispose();
		cm.openNpc(1022003,602);//���ָ�
      			
			}
       } else if (selection == 3){
       if (cm.getMeso()<=300000) {
		   cm.dispose();
    cm.sendOk("��Ҫ����֮��������ҲҪ����ʮ���Ұɣ�");

 
  } else{
	  cm.dispose();
cm.openNpc(1022003,603);//���ֶ���
}

       } else if (selection == 4){
       if (cm.getMeso()<=300000) {
		   cm.dispose();
    cm.sendOk("��Ҫ����֮��������ҲҪ����ʮ���Ұɣ�");

 
  } else{
	  cm.dispose();
		cm.openNpc(1022003,604);//�̵�

}

       } else if (selection == 5){
       if (cm.getMeso()<=300000) {
		   cm.dispose();
    cm.sendOk("��Ҫ����֮��������ҲҪ����ʮ���Ұɣ�");

 
  } else{
	  cm.dispose();
		cm.openNpc(1022003,605);//����

}

       } else if (selection == 6){
       if (cm.getMeso()<=300000) {
		   cm.dispose();
    cm.sendOk("��Ҫ����֮��������ҲҪ����ʮ���Ұɣ�");

 
  } else{
	  cm.dispose();
		cm.openNpc(1022003,606);//����

}

       } else if (selection == 7){
       if (cm.getMeso()<=300000) {
		   cm.dispose();
    cm.sendOk("��Ҫ����֮��������ҲҪ����ʮ���Ұɣ�");

 
  } else{
	  cm.dispose();
		cm.openNpc(1022003,607);//˫�ֽ�

}

       } else if (selection == 8){
       if (cm.getMeso()<=300000) {
		   cm.dispose();
    cm.sendOk("��Ҫ����֮��������ҲҪ����ʮ���Ұɣ�");

 
  } else{
	  cm.dispose();
		cm.openNpc(1022003,608);//˫�ָ�

}

       } else if (selection == 9){
       if (cm.getMeso()<=300000) {
		   cm.dispose();
    cm.sendOk("��Ҫ����֮��������ҲҪ����ʮ���Ұɣ�");

 
  } else{
	  cm.dispose();
		cm.openNpc(1022003,609);//˫�ֶ���

}

       } else if (selection == 10){
       if (cm.getMeso()<=300000) {
		   cm.dispose();
    cm.sendOk("��Ҫ����֮��������ҲҪ����ʮ���Ұɣ�");

 
  } else{
	  cm.dispose();
		cm.openNpc(1022003,610);//ǹ

}

       } else if (selection == 11){
       if (cm.getMeso()<=300000) {
		   cm.dispose();
    cm.sendOk("��Ҫ����֮��������ҲҪ����ʮ���Ұɣ�");

 
  } else{
	  cm.dispose();
		cm.openNpc(1022003,611);//ì

}

       } else if (selection == 12){
       if (cm.getMeso()<=300000) {
		   cm.dispose();
    cm.sendOk("��Ҫ����֮��������ҲҪ����ʮ���Ұɣ�");

 
  } else{
	  cm.dispose();
		cm.openNpc(1022003,612);//��

}

        } else if (selection == 13){
       if (cm.getMeso()<=300000) {
		   cm.dispose();
    cm.sendOk("��Ҫ����֮��������ҲҪ����ʮ���Ұɣ�");

 
  } else{
	  cm.dispose();
		cm.openNpc(1022003,613);//��

}


       } else if (selection == 14){
       if (cm.getMeso()<=300000) {
		   cm.dispose();
    cm.sendOk("��Ҫ����֮��������ҲҪ����ʮ���Ұɣ�");

 
  } else{
	  cm.dispose();
		cm.openNpc(1022003,614);//ȭ��

}


       } else if (selection == 15){
       if (cm.getMeso()<=300000) {
		   cm.dispose();
    cm.sendOk("��Ҫ����֮��������ҲҪ����ʮ���Ұɣ�");

 
  } else{
	  cm.dispose();
		cm.openNpc(1022003,615);//ָ��

}

       } else if (selection == 16){
       if (cm.getMeso()<=300000) {
		   cm.dispose();
    cm.sendOk("��Ҫ����֮��������ҲҪ����ʮ���Ұɣ�");

 
  } else{
	  cm.dispose();
		cm.openNpc(1022003,616);//�̵�

}


       } else if (selection == 17){//���ֽ�
       if (cm.haveItem(4000000, 100) && cm.haveItem(4000016, 100) && cm.haveItem(4000019, 100) && cm.getMeso() > 300000&&!cm.getInventory(1).isFull()) {
		   	  cm.gainItem(1302143,1);
			  cm.gainItem(4000000,-100);
			  cm.gainItem(4000016,-100);
			  cm.gainItem(4000019,-100);
	          cm.gainMeso(-300000);
			   
		    cm.completeQuest(88880);
         cm.dispose();
  } else{
cm.sendOk("�����ǳ����Ĳ���֮��Ҳ������ѵģ�����Ҫ������100��#v4000000# 100��#v4000016# 100��#v4000019#�����Ҳſ��԰�����죬Ŷ���ˣ��ٸ���30W��ң�������ǲ���Ŷ�������Ұ�����첻��֮�͵�����ѡ�");
   cm.dispose();
}
       } else if (selection == 18){
       if (cm.haveItem(4000000, 100) && cm.haveItem(4000016, 100) && cm.haveItem(4000019, 100) && cm.getMeso() > 300000&&!cm.getInventory(1).isFull()) {
		   	  cm.gainItem(1312058,1);//���ָ�
			  cm.gainItem(4000000,-100);
			  cm.gainItem(4000016,-100);
			  cm.gainItem(4000019,-100);
	          cm.gainMeso(-300000);
			   
    cm.completeQuest(88880);
         cm.dispose();
  } else{
cm.sendOk("�����ǳ����Ĳ���֮��Ҳ������ѵģ�����Ҫ������100��#v4000000# 100��#v4000016# 100��#v4000019#�����Ҳſ��԰�����죬Ŷ���ˣ��ٸ���30W��ң�������ǲ���Ŷ�������Ұ�����첻��֮�͵�����ѡ�");
   cm.dispose();
}
       } else if (selection == 19){
       if (cm.haveItem(4000000, 100) && cm.haveItem(4000016, 100) && cm.haveItem(4000019, 100) && cm.getMeso() > 300000&&!cm.getInventory(1).isFull()) {
		   	  cm.gainItem(1322086,1);//���ֶ���
			  cm.gainItem(4000000,-100);
			  cm.gainItem(4000016,-100);
			  cm.gainItem(4000019,-100);
	          cm.gainMeso(-300000);
			   
    cm.completeQuest(88880);
         cm.dispose();
  } else{
cm.sendOk("�����ǳ����Ĳ���֮��Ҳ������ѵģ�����Ҫ������100��#v4000000# 100��#v4000016# 100��#v4000019#�����Ҳſ��԰�����죬Ŷ���ˣ��ٸ���30W��ң�������ǲ���Ŷ�������Ұ�����첻��֮�͵�����ѡ�");
   cm.dispose();
}
       } else if (selection == 20){
       if (cm.haveItem(4000000, 100) && cm.haveItem(4000016, 100) && cm.haveItem(4000019, 100) && cm.getMeso() > 300000&&!cm.getInventory(1).isFull()) {
		   	  cm.gainItem(1332116,1);//���̵ֶ�
			  cm.gainItem(4000000,-100);
			  cm.gainItem(4000016,-100);
			  cm.gainItem(4000019,-100);
	          cm.gainMeso(-300000);
			   
    cm.completeQuest(88880);
         cm.dispose();
  } else{
cm.sendOk("�����ǳ����Ĳ���֮��Ҳ������ѵģ�����Ҫ������100��#v4000000# 100��#v4000016# 100��#v4000019#�����Ҳſ��԰�����죬Ŷ���ˣ��ٸ���30W��ң�������ǲ���Ŷ�������Ұ�����첻��֮�͵�����ѡ�");
   cm.dispose();
}
       } else if (selection == 21){
       if (cm.haveItem(4000000, 100) && cm.haveItem(4000016, 100) && cm.haveItem(4000019, 100) && cm.getMeso() > 300000&&!cm.getInventory(1).isFull()) {
		   	  cm.gainItem(1372074,1);//����
			  cm.gainItem(4000000,-100);
			  cm.gainItem(4000016,-100);
			  cm.gainItem(4000019,-100);
	          cm.gainMeso(-300000);
			   
    cm.completeQuest(88880);
         cm.dispose();
  } else{
cm.sendOk("�����ǳ����Ĳ���֮��Ҳ������ѵģ�����Ҫ������100��#v4000000# 100��#v4000016# 100��#v4000019#�����Ҳſ��԰�����죬Ŷ���ˣ��ٸ���30W��ң�������ǲ���Ŷ�������Ұ�����첻��֮�͵�����ѡ�");
   cm.dispose();
}
       } else if (selection == 22){
       if (cm.haveItem(4000000, 100) && cm.haveItem(4000016, 100) && cm.haveItem(4000019, 100) && cm.getMeso() > 300000&&!cm.getInventory(1).isFull()) {
		   	  cm.gainItem(1382095,1);//����
			  cm.gainItem(4000000,-100);
			  cm.gainItem(4000016,-100);
			  cm.gainItem(4000019,-100);
	          cm.gainMeso(-300000);
			   
    cm.completeQuest(88880);
         cm.dispose();
  } else{
cm.sendOk("�����ǳ����Ĳ���֮��Ҳ������ѵģ�����Ҫ������100��#v4000000# 100��#v4000016# 100��#v4000019#�����Ҳſ��԰�����죬Ŷ���ˣ��ٸ���30W��ң�������ǲ���Ŷ�������Ұ�����첻��֮�͵�����ѡ�");
   cm.dispose();
}
       } else if (selection == 23){
       if (cm.haveItem(4000000, 100) && cm.haveItem(4000016, 100) && cm.haveItem(4000019, 100) && cm.getMeso() > 300000&&!cm.getInventory(1).isFull()) {
		   	  cm.gainItem(1402086,1);//˫�ֽ�
			  cm.gainItem(4000000,-100);
			  cm.gainItem(4000016,-100);
			  cm.gainItem(4000019,-100);
	          cm.gainMeso(-300000);
			   
    cm.completeQuest(88880);
         cm.dispose();
  } else{
cm.sendOk("�����ǳ����Ĳ���֮��Ҳ������ѵģ�����Ҫ������100��#v4000000# 100��#v4000016# 100��#v4000019#�����Ҳſ��԰�����죬Ŷ���ˣ��ٸ���30W��ң�������ǲ���Ŷ�������Ұ�����첻��֮�͵�����ѡ�");
   cm.dispose();
}
       } else if (selection == 24){
       if (cm.haveItem(4000000, 100) && cm.haveItem(4000016, 100) && cm.haveItem(4000019, 100) && cm.getMeso() > 300000&&!cm.getInventory(1).isFull()) {
		   	  cm.gainItem(1412058,1);//˫�ָ�
			  cm.gainItem(4000000,-100);
			  cm.gainItem(4000016,-100);
			  cm.gainItem(4000019,-100);
	          cm.gainMeso(-300000);
			   
    cm.completeQuest(88880);
         cm.dispose();
  } else{
cm.sendOk("�����ǳ����Ĳ���֮��Ҳ������ѵģ�����Ҫ������100��#v4000000# 100��#v4000016# 100��#v4000019#�����Ҳſ��԰�����죬Ŷ���ˣ��ٸ���30W��ң�������ǲ���Ŷ�������Ұ�����첻��֮�͵�����ѡ�");
   cm.dispose();
}
       } else if (selection == 25){
       if (cm.haveItem(4000000, 100) && cm.haveItem(4000016, 100) && cm.haveItem(4000019, 100) && cm.getMeso() > 300000&&!cm.getInventory(1).isFull()) {
		   	  cm.gainItem(1422059,1);//˫�ֶ���
			  cm.gainItem(4000000,-100);
			  cm.gainItem(4000016,-100);
			  cm.gainItem(4000019,-100);
	          cm.gainMeso(-300000);
			   
    cm.completeQuest(88880);
         cm.dispose();
  } else{
cm.sendOk("�����ǳ����Ĳ���֮��Ҳ������ѵģ�����Ҫ������100��#v4000000# 100��#v4000016# 100��#v4000019#�����Ҳſ��԰�����죬Ŷ���ˣ��ٸ���30W��ң�������ǲ���Ŷ�������Ұ�����첻��֮�͵�����ѡ�");
   cm.dispose();
}
       } else if (selection == 26){
       if (cm.haveItem(4000000, 100) && cm.haveItem(4000016, 100) && cm.haveItem(4000019, 100) && cm.getMeso() > 300000&&!cm.getInventory(1).isFull()) {
		   	  cm.gainItem(1432077,1);//ǹ
			  cm.gainItem(4000000,-100);
			  cm.gainItem(4000016,-100);
			  cm.gainItem(4000019,-100);
	          cm.gainMeso(-300000);
			   
    cm.completeQuest(88880);
         cm.dispose();
  } else{
cm.sendOk("�����ǳ����Ĳ���֮��Ҳ������ѵģ�����Ҫ������100��#v4000000# 100��#v4000016# 100��#v4000019#�����Ҳſ��԰�����죬Ŷ���ˣ��ٸ���30W��ң�������ǲ���Ŷ�������Ұ�����첻��֮�͵�����ѡ�");
   cm.dispose();
}
       } else if (selection == 27){
       if (cm.haveItem(4000000, 100) && cm.haveItem(4000016, 100) && cm.haveItem(4000019, 100) && cm.getMeso() > 300000&&!cm.getInventory(1).isFull()) {
		   	  cm.gainItem(1442107,1);//ì
			  cm.gainItem(4000000,-100);
			  cm.gainItem(4000016,-100);
			  cm.gainItem(4000019,-100);
	          cm.gainMeso(-300000);
			   
    cm.completeQuest(88880);
         cm.dispose();
  } else{
cm.sendOk("�����ǳ����Ĳ���֮��Ҳ������ѵģ�����Ҫ������100��#v4000000# 100��#v4000016# 100��#v4000019#�����Ҳſ��԰�����죬Ŷ���ˣ��ٸ���30W��ң�������ǲ���Ŷ�������Ұ�����첻��֮�͵�����ѡ�");
   cm.dispose();
}
       } else if (selection == 28){
       if (cm.haveItem(4000000, 100) && cm.haveItem(4000016, 100) && cm.haveItem(4000019, 100) && cm.getMeso() > 300000&&!cm.getInventory(1).isFull()) {
		   	  cm.gainItem(1452102,1);//��
			  cm.gainItem(4000000,-100);
			  cm.gainItem(4000016,-100);
			  cm.gainItem(4000019,-100);
	          cm.gainMeso(-300000);
			   
    cm.completeQuest(88880);
         cm.dispose();
  } else{
cm.sendOk("�����ǳ����Ĳ���֮��Ҳ������ѵģ�����Ҫ������100��#v4000000# 100��#v4000016# 100��#v4000019#�����Ҳſ��԰�����죬Ŷ���ˣ��ٸ���30W��ң�������ǲ���Ŷ�������Ұ�����첻��֮�͵�����ѡ�");
   cm.dispose();
}
       } else if (selection == 29){
       if (cm.haveItem(4000000, 100) && cm.haveItem(4000016, 100) && cm.haveItem(4000019, 100) && cm.getMeso() > 300000&&!cm.getInventory(1).isFull()) {
		   	  cm.gainItem(1462087,1);//��
			  cm.gainItem(4000000,-100);
			  cm.gainItem(4000016,-100);
			  cm.gainItem(4000019,-100);
	          cm.gainMeso(-300000);
			   
    cm.completeQuest(88880);
         cm.dispose();
  } else{
cm.sendOk("�����ǳ����Ĳ���֮��Ҳ������ѵģ�����Ҫ������100��#v4000000# 100��#v4000016# 100��#v4000019#�����Ҳſ��԰�����죬Ŷ���ˣ��ٸ���30W��ң�������ǲ���Ŷ�������Ұ�����첻��֮�͵�����ѡ�");
   cm.dispose();
}
       } else if (selection == 30){
       if (cm.haveItem(4000000, 100) && cm.haveItem(4000016, 100) && cm.haveItem(4000019, 100) && cm.getMeso() > 300000&&!cm.getInventory(1).isFull()) {
		   	  cm.gainItem(1472113,1);//ȭ��
			  cm.gainItem(4000000,-100);
			  cm.gainItem(4000016,-100);
			  cm.gainItem(4000019,-100);
	          cm.gainMeso(-300000);
			   
    cm.completeQuest(88880);
         cm.dispose();
  } else{
cm.sendOk("�����ǳ����Ĳ���֮��Ҳ������ѵģ�����Ҫ������100��#v4000000# 100��#v4000016# 100��#v4000019#�����Ҳſ��԰�����죬Ŷ���ˣ��ٸ���30W��ң�������ǲ���Ŷ�������Ұ�����첻��֮�͵�����ѡ�");
   cm.dispose();
}
       } else if (selection == 31){
       if (cm.haveItem(4000000, 100) && cm.haveItem(4000016, 100) && cm.haveItem(4000019, 100) && cm.getMeso() > 300000&&!cm.getInventory(1).isFull()) {
		   	  cm.gainItem(1482075,1);//ָ��
			  cm.gainItem(4000000,-100);
			  cm.gainItem(4000016,-100);
			  cm.gainItem(4000019,-100);
	          cm.gainMeso(-300000);
			   
    cm.completeQuest(88880);
         cm.dispose();
  } else{
cm.sendOk("�����ǳ����Ĳ���֮��Ҳ������ѵģ�����Ҫ������100��#v4000000# 100��#v4000016# 100��#v4000019#�����Ҳſ��԰�����죬Ŷ���ˣ��ٸ���30W��ң�������ǲ���Ŷ�������Ұ�����첻��֮�͵�����ѡ�");
   cm.dispose();
}
       } else if (selection == 32){
       if (cm.haveItem(4000000, 100) && cm.haveItem(4000016, 100) && cm.haveItem(4000019, 100) && cm.getMeso() > 300000&&!cm.getInventory(1).isFull()) {
		   	  cm.gainItem(1492075,1);//��ǹ
			  cm.gainItem(4000000,-100);
			  cm.gainItem(4000016,-100);
			  cm.gainItem(4000019,-100);
	          cm.gainMeso(-300000);
			   
    cm.completeQuest(88880);
         cm.dispose();
  } else{
cm.sendOk("�����ǳ����Ĳ���֮��Ҳ������ѵģ�����Ҫ������100��#v4000000# 100��#v4000016# 100��#v4000019#�����Ҳſ��԰�����죬Ŷ���ˣ��ٸ���30W��ң�������ǲ���Ŷ�������Ұ�����첻��֮�͵�����ѡ�");
   cm.dispose();
}






}
}
}
}
