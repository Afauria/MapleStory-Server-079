/*
*   �����̵꣬��ǿ��  NPC
*   By: ZreHy_MS               �����Ҫ�Ķ����������޸ģ����˿����õ�~
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple ("#e���ã��𾴵� #b#h ##k, ���Ǳ�����#rѫ������#k������\r\n#k#n \r\n#L5##e�ϳɻ�ʿѫ��#v1142109##r��Ҫ�ȼ�200��+#v4031648#X10+���2E+5W���#k#n#l#k\r\n#L6##e�ϳɻ�ʦѫ��#v1142110##r��Ҫ�ȼ�205��+#v4031648#X30+���3E+7W���#k#n#l#k\r\n#L7##e�ϳɴ��ʦѫ��#v1142509##r��Ҫ�ȼ�210��+#v4031648#X45+���4E+8W���#k#n#l#k\r\n#L8##e�ϳɻ���ѫ��#v1142408##r��Ҫ�ȼ�215��+#v4031648#X60+���5E+9W���#k#n#l#k\r\n#L9##e�ϳɻ���ѫ��#v1142100##r��Ҫ�ȼ�220��+#v4031648#X75+���6E+10W���#k#n#l#k\r\n#L10##e�ϳɻ���ѫ��#v1142304##r��Ҫ�ȼ�225��+#v4031648#X90+���7E+11W���#k#n#l#k\r\n#L11##e�ϳɻ��ѫ��#v1142610##r��Ҫ�ȼ�230��+#v4031648#X110+���8E+12W���#k#n#l#k\r\n#L12##e�ϳɻ�ʥѫ��#v1142587##r��Ҫ�ȼ�235��+#v4031648#X130+���9E+13W���#k#n#l#k\r\n#L13##e�ϳɻ궷��ѫ��#v1142683##r��Ҫ�ȼ�240��+#v4031648#X150+���10E+14W���#k#n#l#k\r\n#L14##e�ϳɷ�Ŷ���ѫ��#v1142788##r��Ҫ�ȼ�245��+#v4031648#X170+���11E+15W���#k#n#l#k\r\n#L15##e�ϳɽ̻�ѫ��#v1142789##r��Ҫ�ȼ�250��+#v4031648#X200+���15E+20W���#k#n#l#k\r\n\r\n\r\n");
        } else if (status == 1) {
            switch(selection) {
        
            case 5: 
			if (cm.getLevel() < 200 ) {  
                cm.sendOk("���ĵȼ�����200�����޷��ϳ�ѫ��");
                cm.dispose();
		  } else   if (cm.getPlayer().getNX() < 50000) {
			    cm.sendOk("��Ǹ��ĵ����5W�����Ժϳ�! .");
				cm.dispose();
          } else   if(cm.getMeso() < 200000000){
                cm.sendOk("��Ǹ��Ľ�Ҳ���2E�����Ժϳ�! .");
				cm.dispose();
          } else   if (cm.haveItem(4031648,10)){
                cm.sendOk("��ϲ�㣬�ϳɻ�ʿѫ��#v1142109#�ɹ�! .");
                cm.gainItem(4031648, -10);
				cm.gainMeso(-200000000);
				cm.gainNX(-50000);
				cm.gainItem(1142109, 10,10,10,10,0,0,10,10,0,0,0,0,0,0);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳɻ�ʿѫ��!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
            case 6: 
			if (cm.getLevel() < 205 ) {  
                cm.sendOk("���ĵȼ�����205�����޷��ϳ�ѫ��");
                cm.dispose();
		  } else   if (cm.getPlayer().getNX() < 70000) {
			    cm.sendOk("��Ǹ��ĵ����7W�����Ժϳ�! .");
				cm.dispose();
          } else   if(cm.getMeso() < 300000000){
                cm.sendOk("��Ǹ��Ľ�Ҳ���3E�����Ժϳ�! .");
				cm.dispose();
          } else   if (cm.haveItem(4031648,30) && cm.haveItem(1142109,1)){
                cm.sendOk("��ϲ�㣬�ϳɻ�ʦѫ��#v1142110#�ɹ�! .");
				cm.gainItem(1142109, -1);
                cm.gainItem(4031648, -30);
				cm.gainMeso(-300000000);
				cm.gainNX(-70000);
				cm.gainItem(1142110, 25,25,25,25,0,0,25,25,0,0,0,0,0,0);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳɻ�ʦѫ��!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
			case 7: 
			if (cm.getLevel() < 210 ) {  
                cm.sendOk("���ĵȼ�����210�����޷��ϳ�ѫ��");
                cm.dispose();
		  } else   if (cm.getPlayer().getNX() < 80000) {
			    cm.sendOk("��Ǹ��ĵ����8W�����Ժϳ�! .");
				cm.dispose();
          } else   if(cm.getMeso() < 400000000){
                cm.sendOk("��Ǹ��Ľ�Ҳ���4E�����Ժϳ�! .");
				cm.dispose();
          } else   if (cm.haveItem(4031648,45) && cm.haveItem(1142110,1)){
                cm.sendOk("��ϲ�㣬�ϳɴ��ʦѫ��#v1142509#�ɹ�! .");
				cm.gainItem(1142110, -1);
                cm.gainItem(4031648, -45);
				cm.gainMeso(-400000000);
				cm.gainNX(-80000);
				cm.gainItem(1142509, 40,40,40,40,0,0,40,40,0,0,0,0,0,0);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳɴ��ʦѫ��!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
			case 8: 
			if (cm.getLevel() < 215 ) {  
                cm.sendOk("���ĵȼ�����215�����޷��ϳ�ѫ��");
                cm.dispose();
		  } else   if (cm.getPlayer().getNX() < 90000) {
			    cm.sendOk("��Ǹ��ĵ����9W�����Ժϳ�! .");
				cm.dispose();
          } else   if(cm.getMeso() < 500000000){
                cm.sendOk("��Ǹ��Ľ�Ҳ���5E�����Ժϳ�! .");
				cm.dispose();
          } else   if (cm.haveItem(4031648,60) && cm.haveItem(1142509,1)){
                cm.sendOk("��ϲ�㣬�ϳɻ���ѫ��#v1142509#�ɹ�! .");
				cm.gainItem(1142509, -1);
                cm.gainItem(4031648, -60);
				cm.gainMeso(-500000000);
				cm.gainNX(-90000);
				cm.gainItem(1142408, 55,55,55,55,0,0,55,55,0,0,0,0,0,0);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳɻ���ѫ��!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
			case 9: 
			if (cm.getLevel() < 220 ) {  
                cm.sendOk("���ĵȼ�����220�����޷��ϳ�ѫ��");
                cm.dispose();
		  } else   if (cm.getPlayer().getNX() < 100000) {
			    cm.sendOk("��Ǹ��ĵ����10W�����Ժϳ�! .");
				cm.dispose();
          } else   if(cm.getMeso() < 600000000){
                cm.sendOk("��Ǹ��Ľ�Ҳ���6E�����Ժϳ�! .");
				cm.dispose();
          } else   if (cm.haveItem(4031648,75) && cm.haveItem(1142408,1)){
                cm.sendOk("��ϲ�㣬�ϳɻ���ѫ��#v1142100#�ɹ�! .");
				cm.gainItem(1142408, -1);
                cm.gainItem(4031648, -75);
				cm.gainMeso(-600000000);
				cm.gainNX(-100000);
				cm.gainItem(1142100, 70,70,70,70,0,0,70,70,0,0,0,0,0,0);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳɻ���ѫ��!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
			case 10: 
			if (cm.getLevel() < 225 ) {  
                cm.sendOk("���ĵȼ�����225�����޷��ϳ�ѫ��");
                cm.dispose();
		  } else   if (cm.getPlayer().getNX() < 110000) {
			    cm.sendOk("��Ǹ��ĵ����11W�����Ժϳ�! .");
				cm.dispose();
          } else   if(cm.getMeso() < 700000000){
                cm.sendOk("��Ǹ��Ľ�Ҳ���7E�����Ժϳ�! .");
				cm.dispose();
          } else   if (cm.haveItem(4031648,90) && cm.haveItem(1142100,1)){
                cm.sendOk("��ϲ�㣬�ϳɻ���ѫ��#v1142304#�ɹ�! .");
				cm.gainItem(1142100, -1);
                cm.gainItem(4031648, -90);
				cm.gainMeso(-700000000);
				cm.gainNX(-110000);
				cm.gainItem(1142304, 85,85,85,85,0,0,85,85,0,0,0,0,0,0);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳɻ���ѫ��!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
			case 11: 
			if (cm.getLevel() < 230 ) {  
                cm.sendOk("���ĵȼ�����230�����޷��ϳ�ѫ��");
                cm.dispose();
		  } else   if (cm.getPlayer().getNX() < 120000) {
			    cm.sendOk("��Ǹ��ĵ����12W�����Ժϳ�! .");
				cm.dispose();
          } else   if(cm.getMeso() < 800000000){
                cm.sendOk("��Ǹ��Ľ�Ҳ���8E�����Ժϳ�! .");
				cm.dispose();
          } else   if (cm.haveItem(4031648,110) && cm.haveItem(1142304,1)){
                cm.sendOk("��ϲ�㣬�ϳɻ��ѫ��#v1142610#�ɹ�! .");
				cm.gainItem(1142304, -1);
                cm.gainItem(4031648, -110);
				cm.gainMeso(-800000000);
				cm.gainNX(-120000);
				cm.gainItem(1142610, 100,100,100,100,0,0,100,100,0,0,0,0,0,0);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳɻ��ѫ��!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
			case 12: 
			if (cm.getLevel() < 235 ) {  
                cm.sendOk("���ĵȼ�����235�����޷��ϳ�ѫ��");
                cm.dispose();
		  } else   if (cm.getPlayer().getNX() < 130000) {
			    cm.sendOk("��Ǹ��ĵ����13W�����Ժϳ�! .");
				cm.dispose();
          } else   if(cm.getMeso() < 900000000){
                cm.sendOk("��Ǹ��Ľ�Ҳ���9E�����Ժϳ�! .");
				cm.dispose();
          } else   if (cm.haveItem(4031648,130) && cm.haveItem(1142610,1)){
                cm.sendOk("��ϲ�㣬�ϳɻ�ʥѫ��#v1142587#�ɹ�! .");
				cm.gainItem(1142610, -1);
                cm.gainItem(4031648, -130);
				cm.gainMeso(-900000000);
				cm.gainNX(-130000);
				cm.gainItem(1142587, 115,115,115,115,0,0,115,115,0,0,0,0,0,0);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳɻ�ʥѫ��!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
			case 13: 
			if (cm.getLevel() < 240 ) {  
                cm.sendOk("���ĵȼ�����240�����޷��ϳ�ѫ��");
                cm.dispose();
		  } else   if (cm.getPlayer().getNX() < 140000) {
			    cm.sendOk("��Ǹ��ĵ����14W�����Ժϳ�! .");
				cm.dispose();
          } else   if(cm.getMeso() < 1000000000){
                cm.sendOk("��Ǹ��Ľ�Ҳ���10E�����Ժϳ�! .");
				cm.dispose();
          } else   if (cm.haveItem(4031648,150) && cm.haveItem(1142587,1)){
                cm.sendOk("��ϲ�㣬�ϳɻ궷��ѫ��#v1142683#�ɹ�! .");
				cm.gainItem(1142587, -1);
                cm.gainItem(4031648, -150);
				cm.gainMeso(-1000000000);
				cm.gainNX(-140000);
				cm.gainItem(1142683, 130,130,130,130,0,0,130,130,0,0,0,0,0,0);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳɻ궷��ѫ��!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
			case 14: 
			if (cm.getLevel() < 245 ) {  
                cm.sendOk("���ĵȼ�����245�����޷��ϳ�ѫ��");
                cm.dispose();
		  } else   if (cm.getPlayer().getNX() < 150000) {
			    cm.sendOk("��Ǹ��ĵ����15W�����Ժϳ�! .");
				cm.dispose();
          } else   if(cm.getMeso() < 1100000000){
                cm.sendOk("��Ǹ��Ľ�Ҳ���11E�����Ժϳ�! .");
				cm.dispose();
          } else   if (cm.haveItem(4031648,170) && cm.haveItem(1142683,1)){
                cm.sendOk("��ϲ�㣬�ϳɷ�Ŷ���ѫ��#v1142788#�ɹ�! .");
				cm.gainItem(1142683, -1);
                cm.gainItem(4031648, -170);
				cm.gainMeso(-1100000000);
				cm.gainNX(-150000);
				cm.gainItem(1142788, 145,145,145,145,0,0,145,145,0,0,0,0,0,0);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳɷ�Ŷ���ѫ��!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
			case 15: 
			if (cm.getLevel() < 250 ) {  
                cm.sendOk("���ĵȼ�����250�����޷��ϳ�ѫ��");
                cm.dispose();
		  } else   if (cm.getPlayer().getNX() < 200000) {
			    cm.sendOk("��Ǹ��ĵ����20W�����Ժϳ�! .");
				cm.dispose();
          } else   if(cm.getMeso() < 1500000000){
                cm.sendOk("��Ǹ��Ľ�Ҳ���15E�����Ժϳ�! .");
				cm.dispose();
          } else   if (cm.haveItem(4031648,200) && cm.haveItem(1142788,1)){
                cm.sendOk("��ϲ�㣬�ϳɽ̻�ѫ��#v1142789#�ɹ�! .");
				cm.gainItem(1142788, -1);
                cm.gainItem(4031648, -200);
				cm.gainMeso(-1500000000);
				cm.gainNX(-200000);
				cm.gainItem(1142789, 200,200,200,200,0,0,200,200,0,0,0,0,0,0);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳɽ̻�ѫ��!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
            }
        }
    }
}