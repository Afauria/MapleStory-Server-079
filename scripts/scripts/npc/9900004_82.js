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
	    var textz = "#dҪ��Ҫ����سɣ�\r\n";

  textz += "#L1#1.#v4310059##z4310059# ��Ҫ:#v4031456#300�� \r\n";
   textz += "#L2#2.#v4310059##z4310059# ��Ҫ:#v4000463#20�� \r\n";
  // textz += "#L3#3.#v2040874##z2040874 # ��Ҫ:#v4000244#50��\r\n";
 // textz += "#L4#4.#v2040875##z2040875# ��Ҫ:#v4000245#50�� \r\n";
   //textz += "#L5#5.#v2040914##z2040914# ��Ҫ:#v4000082#150�� \r\n";
   //textz += "#L6#6.#v2040919##z2040919# ��Ҫ:#v4000082#150�� \r\n";
   //textz += "#L7#7.#v2041235##z2041235# ��Ҫ:#v4021007#100�� \r\n";
   //textz += "#L8#8.#v2041233##z2041233# ��Ҫ:#v4005000#100�� \r\n";
   //textz += "#L11#11.#v2041145##z2041145# ��Ҫ:#v4002001#8�� \r\n";
  //textz += "#L10#2.#v1112748##z1112748# ��Ҫ:#v4251202#4�� \r\n";
  //textz += "#L9#9.#v4031227##z4031227# ��Ҫ:#v4251200#1�� \r\n";
  //textz += "#L12#3.#v2340000##z2340000# ��Ҫ:#v4251202#2�� \r\n";

 // textz += "#L13#9.#v2041145##z2041145# ��Ҫ:#v4005001#100��#v4001129#7��  \r\n";
 // textz += "#L14#10.#v2041139##z2041139# ��Ҫ:#v4005002#100��#v4001129#7��  \r\n";
  //textz += "#L15#6.#v1102612##z1102612# ��Ҫ:#v4251202#7��#v4001129#1��  \r\n";
  //textz += "#L16#7.#v1003946##z1003946# ��Ҫ:#v4251202#7��#v4001129#1��  \r\n";
  //textz += "#L17#8.#v1072853##z1072853# ��Ҫ:#v4251202#7��#v4001129#1�� \r\n";




		cm.sendSimple (textz);  

	}else if (status == 1) {

	       if (selection == 1){
                   if (!cm.haveItem(4031456,300)) {
 			cm.sendOk("�����#v4031456##z4031456#*300");
     
			cm.dispose();
		} else{
			cm.gainItem(4031456,-300);
			cm.gainItem(4310059,1);
			cm.sendOk("#b�һ��ɹ�");
      			cm.dispose();
			}

       } else if (selection == 2){
                  if (!cm.haveItem(4000463,20)) {
    cm.sendOk("�����#v4000463##z4000463#*15");
         cm.dispose();

  } else{
   cm.gainItem(4000463,-20);
   cm.gainItem(4310059,1);
   cm.sendOk("#b�һ��ɹ�")
   cm.dispose();
}

       } else if (selection == 3){
                  if (!cm.haveItem(4000244,50)) {
               cm.sendOk("�����#v4000244##z4000244#*50");
         cm.dispose();
  } else{
   cm.gainItem(4000244,-50);
   cm.gainItem(2040874,1);
   cm.sendOk("#b�һ��ɹ�")
   cm.dispose();
}

       } else if (selection == 4){
                  if (!cm.haveItem(4000245,50)) {
    cm.sendOk("�����#v4000245##z4000245#*50");
   cm.dispose();
  } else{
   cm.gainItem(4000245,-50);
   cm.gainItem(2040875,1);
   cm.sendOk("#b�һ��ɹ�")
   cm.dispose();
}

       } else if (selection == 5){
                  if (!cm.haveItem(4000082,150)) {
    cm.sendOk("�����#v4000082##z4000082#*150");
         cm.dispose();
  } else{
   cm.gainItem(4000082,-150);
   cm.gainItem(2040914,1);
   cm.sendOk("#b�һ��ɹ�")
   cm.dispose();
}

       } else if (selection == 6){
                  if (!cm.haveItem(4000082,150)) {
    cm.sendOk("�����#v4000082##z4000082#*150");
         cm.dispose();
  } else{
   cm.gainItem(4000082,-150);
   cm.gainItem(2040919,1);
   cm.sendOk("#b�һ��ɹ�")
   cm.dispose();
}

       } else if (selection == 7){
                  if (!cm.haveItem(4021007,100)) {
    cm.sendOk("�����#v4021007##z4021007#*100");
         cm.dispose();
 
  } else{
   cm.gainItem(4021007,-100);
   cm.gainItem(2041235,1);
   cm.sendOk("#b�һ��ɹ�")
   cm.dispose();
}

       } else if (selection == 8){
                  if (!cm.haveItem(4005000,100)) {
    cm.sendOk("�����#v4005000##z4005000#*100");
         cm.dispose();

  } else{
   cm.gainItem(4005000,-100);
   cm.gainItem(2041233,1);
   cm.sendOk("#b�һ��ɹ�")
   cm.dispose();
}

       } else if (selection == 9){
                  if (!cm.haveItem(4251200,1)) {
    cm.sendOk("�����#v4251200##z4251200#*1");
         cm.dispose();
 
  } else{
   cm.gainItem(4251200,-1);
   cm.gainItem(4031127,1);
   cm.sendOk("#b�һ��ɹ�")
   cm.dispose();
}

       } else if (selection == 10){
                  if (!cm.haveItem(4251202,4)) {
    cm.sendOk("�����#v4251202##z4251202#*4");
         cm.dispose();

  } else{
   cm.gainItem(4251202,-4);
    cm.gainItem(1112748,1);
   cm.sendOk("#b�һ��ɹ�")
   cm.dispose();
}

       } else if (selection == 12){
                  if (!cm.haveItem(4251202,2)) {
    cm.sendOk("�����#v4251202##z4251202#*2");
         cm.dispose();
  } else{
   cm.gainItem(4251202,-2	);
   cm.gainItem(2340000,1);
   cm.sendOk("#b�һ��ɹ�")
   cm.dispose();
}

       } else if (selection == 11){//�ϳ�����
                  if (!cm.haveItem(4000313,100)) {
    cm.sendOk("��Ҫһ����Ӧ��ӡ��ð��֮��\r\n20��#v4002001##z4002001#��1000��#v4001126##z4001126#�Լ�500��ð�ձ�\r\n�ռ����ϲ��ϾͿ��Զһ�");
         cm.dispose();
                  } else if (!cm.haveItem(1482029,1)) {
    cm.sendOk("�����#v1482029##z1482029#*1");
         cm.dispose();
                  } else if (cm.getMeso() < 5000000) {
    cm.sendOk("�����#v4001126#z4001126#*500");
         cm.dispose();
                  } else if (!cm.haveItem(4001126,500)) {
    cm.sendOk("�����#v4001126##z4001126#*500");
         cm.dispose();
  } else if (cm.getPlayer().getInventory
(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull(3)){
   cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
   cm.dispose();
  } else{
   cm.gainItem(4002001,-20);
   cm.gainItem(1482029,-1);
   cm.gainMeso(-5000000);
   cm.gainItem(4001126,-500);
   cm.gainItem(1482022,1);
   cm.sendOk("#b�һ��ɹ�")
   cm.dispose();
}


       } else if (selection == 13){
                  if (!cm.haveItem(4005001,100)) {
    cm.sendOk("�����#v4005001##z4005001#*100");
         cm.dispose();
                  } else if (!cm.haveItem(4001129,7)) {
    cm.sendOk("�����#v4001129##z4001129#*7");
         cm.dispose();
  } else{
   cm.gainItem(4005001,-100);
  cm.gainItem(4001129,-7);
   
   cm.gainItem(2041145,1);
   cm.sendOk("#b�һ��ɹ�")
   cm.dispose();
}


       } else if (selection == 14){
                  if (!cm.haveItem(4005002,100)) {
    cm.sendOk("�����#v4005002##z4005002#*100");
         cm.dispose();
                  } else if (!cm.haveItem(4001129,7)) {
    cm.sendOk("�����#v4001129##z4001129#*7");
         cm.dispose();
  } else{
   cm.gainItem(4005002,-100);
cm.gainItem(4001129,-7);
   cm.gainItem(2041139,1);
   cm.sendOk("#b�һ��ɹ�")
   cm.dispose();
}


       } else if (selection == 15){
                  if (!cm.haveItem(4251202,7)) {
    cm.sendOk("�����#v4251202##z4251202#*7");
         cm.dispose();
                  } else if (!cm.haveItem(4001129,1)) {
    cm.sendOk("�����#v4001129##z4001129#*1");
         cm.dispose();
  } else{
   cm.gainItem(4251202,-7);
   cm.gainItem(4001129,-1);
   cm.gainItem(1102612,1);
   cm.sendOk("#b�һ��ɹ�")
   cm.dispose();
}

       } else if (selection == 16){
                  if (!cm.haveItem(4251202,7)) {
    cm.sendOk("�����#v4251202##z4251202#*7");
         cm.dispose();
                  } else if (!cm.haveItem(4001129,1)) {
    cm.sendOk("�����#v4001129##z4001129#*1");
         cm.dispose();
  } else{
   cm.gainItem(4251202,-7);
   cm.gainItem(4001129,-1);
   cm.gainItem(1003946,1);
   cm.sendOk("#b�һ��ɹ�")
   cm.dispose();
}


       } else if (selection == 17){
         
                  if (!cm.haveItem(4251202,7)){
    cm.sendOk("�����#v4251202##z4251202#*7#v4001129##z4001129#");
         cm.dispose();
                  } else if (!cm.haveItem(4001129,1)) {
    cm.sendOk("�����#v4001129##z4001129#*1");
         cm.dispose();
  } else{
   cm.gainItem(4251202,-7);
   cm.gainItem(4001129,-1);
   cm.gainItem(1072853,1);
   cm.sendOk("#b�һ��ɹ�")
   cm.dispose();
}

       } else if (selection == 18){
                  if (!cm.haveItem(4002001,30)) {
    cm.sendOk("�����#v4002001##z4002001#*30");
         cm.dispose();
  } else if (cm.getPlayer().getInventory
(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull(3)){
   cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
   cm.dispose();
  } else{
   cm.gainItem(4002001,-30);
   cm.gainItem(1072853,1);
   cm.sendOk("#b�һ��ɹ�")
   cm.dispose();
}

       } else if (selection == 19){
                 if (!cm.haveItem(4002001,30)) {
    cm.sendOk("�����#v4002001##z4002001#*30");
         cm.dispose();
                  } else if (!cm.haveItem(4001126,1000)) {
    cm.sendOk("�����#v4001126##z4001126#*1000");
         cm.dispose();
		  } else  if (cm.getMeso() < 20000000) {
 			cm.sendOk("�����#r20000000W#k���#k");
      			cm.dispose();
                  } else if (!cm.haveItem(1122031,1)) {
    cm.sendOk("�����#v1122031##z1122031#*1");
         cm.dispose();
  } else if (cm.getPlayer().getInventory
(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull(3)){
   cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
   cm.dispose();
  } else{
   cm.gainItem(4002001,-30);
   cm.gainItem(4001126,-1000);
   cm.gainMeso(-20000000);
   cm.gainItem(1122031,-1);
   cm.gainItem(1122036,1);
   cm.sendOk("#b�һ��ɹ�")
   cm.dispose();
}

       } else if (selection == 20){
                 if (!cm.haveItem(4002001,30)) {
    cm.sendOk("�����#v4002001##z4002001#*30");
         cm.dispose();
                  } else if (!cm.haveItem(4001126,1000)) {
    cm.sendOk("�����#v4001126##z4001126#*1000");
         cm.dispose();
		  } else  if (cm.getMeso() < 20000000) {
 			cm.sendOk("�����#r20000000W#k���#k");
      			cm.dispose();
                  } else if (!cm.haveItem(1122032,1)) {
    cm.sendOk("�����#v1122032##z1122032#*1");
         cm.dispose();
  } else if (cm.getPlayer().getInventory
(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull(3)){
   cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
   cm.dispose();
  } else{
   cm.gainItem(4002001,-30);
   cm.gainItem(4001126,-1000);
   cm.gainMeso(-20000000);
   cm.gainItem(1122032,-1);
   cm.gainItem(1122037,1);
   cm.sendOk("#b�һ��ɹ�")
   cm.dispose();
}

       } else if (selection == 210){
                  if (!cm.haveItem(4021000,2)) {
    cm.sendOk("�����#v4021000##z4021000#*2");
         cm.dispose();
                  } else if (!cm.haveItem(4021001,2)) {
    cm.sendOk("�����#v4021001##z4021001#*2");
         cm.dispose();
                  } else if (!cm.haveItem(4021002,2)) {
    cm.sendOk("�����#v4021002##z4021002#*2");
         cm.dispose();
                  } else if (!cm.haveItem(4021003,2)) {
    cm.sendOk("�����#v4021003##z4021003#*2");
         cm.dispose();
                  } else if (!cm.haveItem(4021004,2)) {
    cm.sendOk("�����#v4021004##z4021004#*2");
         cm.dispose();
                  } else if (!cm.haveItem(4021005,2)) {
    cm.sendOk("�����#v4021005##z4021005#*2");
         cm.dispose();
                  } else if (!cm.haveItem(4021006,2)) {
    cm.sendOk("�����#v4021006##z4021006#*2");
         cm.dispose();
                  } else if (!cm.haveItem(4021007,2)) {
    cm.sendOk("�����#v4021007##z4021007#*2");
         cm.dispose();
                  } else if (!cm.haveItem(4021008,2)) {
    cm.sendOk("�����#v4021008##z4021008#*2");
         cm.dispose();
                  } else if (!cm.haveItem(1132205,1)) {
    cm.sendOk("�����#v1132205##z1132205#*1");
         cm.dispose();
         cm.dispose();
  } else if (cm.getPlayer().getInventory
(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull(3)){
   cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
   cm.dispose();
  } else{
   cm.gainItem(4021000,-2);
   cm.gainItem(4021001,-2);
   cm.gainItem(4021002,-2);
   cm.gainItem(4021003,-2);
   cm.gainItem(4021004,-2);
   cm.gainItem(4021005,-2);
   cm.gainItem(4021006,-2);
   cm.gainItem(4021007,-2);
   cm.gainItem(4021008,-2);
   cm.gainItem(1132205,-1);
   cm.gainItem(1132204,1);
   cm.sendOk("#b�һ��ɹ�")
   cm.dispose();
}


       } else if (selection == 21){
                  if (!cm.haveItem(4001126,200)) {
    cm.sendOk("�����#v4001126##z4001126#*200");
         cm.dispose();
  } else if (cm.getPlayer().getInventory
(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull(3)){
   cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
   cm.dispose();
  } else{
   cm.gainItem(4001126,-200);
   cm.gainItem(1092110,1);
   cm.sendOk("#b�һ��ɹ�")
   cm.dispose();
}


       } else if (selection == 22){
                  if (!cm.haveItem(4001126,200)) {
    cm.sendOk("�����#v4001126##z4001126#*200");
         cm.dispose();
  } else if (cm.getPlayer().getInventory
(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull(3)){
   cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
   cm.dispose();
  } else{
   cm.gainItem(4001126,-200);
   cm.gainItem(1092111,1);
   cm.sendOk("#b�һ��ɹ�")
   cm.dispose();
}


}
}
}
}
