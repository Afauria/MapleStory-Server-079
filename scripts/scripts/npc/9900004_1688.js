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
            cm.sendSimple ("#e���ã��𾴵� #b#h ##k, ���Ǳ�����#r�Ի�ϵͳ#k������\r\n#k#n \r\n#L12##e�ϳ�#v2022035#X1#r��Ҫ#v4001126#X100��#k#l\r\n#L112##e�ϳ�#v2022035#X10#r��Ҫ#v4001126#X1000��#k#l\r\n#L13##e�ϳ�#v2020031#X1#r��Ҫ#v4000313#X10��#k#l\r\n#L113##e�ϳ�#v2020031#X10#r��Ҫ#v4000313#X100��#k#l\r\n#L6##e�ϳ�#v2020007#X1#r��Ҫ#v4031640#X100��#k#l\r\n#L14##e�ϳ�#v2022002#X1#r��Ҫ#v4000003#X100��#v4000020#X100��#v4000177#X100��#k#l\r\n#L15##e�ϳ�#v2022002#X1#r��Ҫ#v4000004#X100��#v4000007#X100��#v4000036#X100��#k#l\r\n#L16##e�ϳ�#v2022002#X2#r��Ҫ#v4004002#X50��#v4004001#X50��#v4004003#X50��#v4004000#X50��#v4004004#X50��#k#l\r\n\r\n");
        } else if (status == 1) {
            switch(selection) {
				case 6: 

          if (cm.haveItem(4031640,100)){
                cm.sendOk("��ϲ�㣬�ϳ�#v2020007#X1�ɹ�! .");//
                cm.gainItem(4031640, -100);
                		
				cm.gainItem(2020007,1);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳ������X1!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
			
			case 12: 

          if (cm.haveItem(4001126,100)){
                cm.sendOk("��ϲ�㣬�ϳ�#v2022035#X1�ɹ�! .");
                cm.gainItem(4001126, -100);
                		
				cm.gainItem(2022035,1);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳɿ���X1!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
			
			case 112: 

          if (cm.haveItem(4001126,1000)){
                cm.sendOk("��ϲ�㣬�ϳ�#v2022035#X10�ɹ�! .");
                cm.gainItem(4001126, -1000);
                		
				cm.gainItem(2022035,10);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳɿ���X10!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
			
			case 13: 

          if (cm.haveItem(4000313,10)){
                cm.sendOk("��ϲ�㣬�ϳ�#v2020031#X1�ɹ�! .");
                cm.gainItem(4000313, -10);
                		
				cm.gainItem(2020031,1);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳɿ���X1!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
			
			case 113: 

          if (cm.haveItem(4000313,100)){
                cm.sendOk("��ϲ�㣬�ϳ�#v2020031#X10�ɹ�! .");
                cm.gainItem(4000313, -100);
                		
				cm.gainItem(2020031,10);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳɿ���X10!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
			
			case 14: 

          if (cm.haveItem(4000003,100) && cm.haveItem(4000020,100) && cm.haveItem(4000177,100)){
                cm.sendOk("��ϲ�㣬�ϳ�#v2022002#X1�ɹ�! .");
                cm.gainItem(4000003, -100);
				cm.gainItem(4000020, -100);
				cm.gainItem(4000177, -100);
                		
				cm.gainItem(2022002,1);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳ�ѩ��X1!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
			
			case 15: 

          if (cm.haveItem(4000004,100) && cm.haveItem(4000007,100) && cm.haveItem(4000036,100)){
                cm.sendOk("��ϲ�㣬�ϳ�#v2022002#X1�ɹ�! .");
                cm.gainItem(4000004, -100);
				cm.gainItem(4000007, -100);
				cm.gainItem(4000036, -100);
                		
				cm.gainItem(2022002,1);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳ�ѩ��X1!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
			
			case 16: 

          if (cm.haveItem(4004000,50) && cm.haveItem(4004001,50) && cm.haveItem(4004002,50) && cm.haveItem(4004003,50) && cm.haveItem(4004004,50)){
                cm.sendOk("��ϲ�㣬�ϳ�#v2022002#X2�ɹ�! .");
                cm.gainItem(4004000, -50);
				cm.gainItem(4004001, -50);
				cm.gainItem(4004002, -50);
				cm.gainItem(4004003, -50);
				cm.gainItem(4004004, -50);
                		
				cm.gainItem(2022002,2);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳ�ѩ��X2!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
			
			 case 7: 

          if (cm.haveItem(2020007,20) && cm.haveItem(2002023,80) && cm.haveItem(4310149,20) && cm.haveItem(1102481,1) && cm.haveItem(1082543,1) && cm.haveItem(1072743,1) && cm.haveItem(1132174,1)){
                cm.sendOk("��ϲ�㣬�ϳ�200����װ�ļ��ɹ�! .");
                cm.gainItem(2020007, -20);
                cm.gainItem(2002023, -80);
                cm.gainItem(4310149, -20);
				cm.gainItem(1102481, -1);
				cm.gainItem(1082543, -1);
				cm.gainItem(1072743, -1);
				cm.gainItem(1132174, -1);
				cm.gainItem(1052929,50,50,50,50,0,0,30,30,300,300,0,0,0,0); //
				cm.gainItem(1073057,50,50,50,50,0,0,30,30,300,300,0,0,0,0); //
				cm.gainItem(1082647,50,50,50,50,0,0,30,30,300,300,0,0,0,0); //
				cm.gainItem(1102828,50,50,50,50,0,0,30,30,300,300,0,0,0,0); //
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳ�200����װ�ļ�!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
			
			case 8: 

          if (cm.haveItem(2020007,20) && cm.haveItem(2002023,80) && cm.haveItem(4310149,20) && cm.haveItem(1102482,1) && cm.haveItem(1082544,1) && cm.haveItem(1072744,1) && cm.haveItem(1132175,1)){
                cm.sendOk("��ϲ�㣬�ϳ�200����װ�ļ��ɹ�! .");
                cm.gainItem(2020007, -20);
                cm.gainItem(2002023, -80);
                cm.gainItem(4310149, -20);
				cm.gainItem(1102482, -1);
				cm.gainItem(1082544, -1);
				cm.gainItem(1072744, -1);
				cm.gainItem(1132175, -1);
				cm.gainItem(1052929,50,50,50,50,0,0,30,30,300,300,0,0,0,0); //
				cm.gainItem(1073057,50,50,50,50,0,0,30,30,300,300,0,0,0,0); //
				cm.gainItem(1082647,50,50,50,50,0,0,30,30,300,300,0,0,0,0); //
				cm.gainItem(1102828,50,50,50,50,0,0,30,30,300,300,0,0,0,0); //
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳ�200����װ�ļ�!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
			
			case 9: 

          if (cm.haveItem(2020007,20) && cm.haveItem(2002023,80) && cm.haveItem(4310149,20) && cm.haveItem(1102483,1) && cm.haveItem(1082545,1) && cm.haveItem(1072745,1) && cm.haveItem(1132176,1)){
                cm.sendOk("��ϲ�㣬�ϳ�200����װ�ļ��ɹ�! .");
                cm.gainItem(2020007, -20);
                cm.gainItem(2002023, -80);
                cm.gainItem(4310149, -20);
				cm.gainItem(1102483, -1);
				cm.gainItem(1082545, -1);
				cm.gainItem(1072745, -1);
				cm.gainItem(1132176, -1);
				cm.gainItem(1052929,50,50,50,50,0,0,30,30,300,300,0,0,0,0); //
				cm.gainItem(1073057,50,50,50,50,0,0,30,30,300,300,0,0,0,0); //
				cm.gainItem(1082647,50,50,50,50,0,0,30,30,300,300,0,0,0,0); //
				cm.gainItem(1102828,50,50,50,50,0,0,30,30,300,300,0,0,0,0); //
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳ�200����װ�ļ�!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
			
			case 10: 

          if (cm.haveItem(2020007,20) && cm.haveItem(2002023,80) && cm.haveItem(4310149,20) && cm.haveItem(1102484,1) && cm.haveItem(1082546,1) && cm.haveItem(1072746,1) && cm.haveItem(1132177,1)){
                cm.sendOk("��ϲ�㣬�ϳ�200����װ�ļ��ɹ�! .");
                cm.gainItem(2020007, -20);
                cm.gainItem(2002023, -80);
                cm.gainItem(4310149, -20);
				cm.gainItem(1102484, -1);
				cm.gainItem(1082546, -1);
				cm.gainItem(1072746, -1);
				cm.gainItem(1132177, -1);
				cm.gainItem(1052929,50,50,50,50,0,0,30,30,300,300,0,0,0,0); //
				cm.gainItem(1073057,50,50,50,50,0,0,30,30,300,300,0,0,0,0); //
				cm.gainItem(1082647,50,50,50,50,0,0,30,30,300,300,0,0,0,0); //
				cm.gainItem(1102828,50,50,50,50,0,0,30,30,300,300,0,0,0,0); //
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳ�200����װ�ļ�!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
			
			case 11: 

          if (cm.haveItem(2020007,20) && cm.haveItem(2002023,80) && cm.haveItem(4310149,20) && cm.haveItem(1102485,1) && cm.haveItem(1082547,1) && cm.haveItem(1072747,1) && cm.haveItem(1132178,1)){
                cm.sendOk("��ϲ�㣬�ϳ�200����װ�ļ��ɹ�! .");
                cm.gainItem(2020007, -20);
                cm.gainItem(2002023, -80);
                cm.gainItem(4310149, -20);
				cm.gainItem(1102485, -1);
				cm.gainItem(1082547, -1);
				cm.gainItem(1072747, -1);
				cm.gainItem(1132178, -1);
				cm.gainItem(1052929,50,50,50,50,0,0,30,30,300,300,0,0,0,0); //
				cm.gainItem(1073057,50,50,50,50,0,0,30,30,300,300,0,0,0,0); //
				cm.gainItem(1082647,50,50,50,50,0,0,30,30,300,300,0,0,0,0); //
				cm.gainItem(1102828,50,50,50,50,0,0,30,30,300,300,0,0,0,0); //
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳ�200����װ�ļ�!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
			
        case 2:
		
		     if(cm.haveItem(4251201,5)){
                cm.sendOk("��ϲ�㣬�ϳɸߵ����#v4251202#�ɹ�! .");
                cm.gainItem(4251201,-5);
				cm.gainItem(4251202,1);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳɸߵ����ˮ��X1!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
        case 1:
             		
           if(cm.haveItem(4251200,5)){
                cm.sendOk("��ϲ�㣬�ϳ��е����#v4251202#�ɹ�! .");
                cm.gainItem(4251200,-5);
				cm.gainItem(4251201,1);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳ��е����ˮ��X1!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
         case 0: 

          if (cm.haveItem(4001038,1) && cm.haveItem(4001042,1) && cm.haveItem(4001041,1) && cm.haveItem(4001040,1) && cm.haveItem(4001043,1) && cm.haveItem(4001039,1)){
                cm.sendOk("��ϲ�㣬�ϳɸߵ����#v4251202#�ɹ�! .");
                cm.gainItem(4001038, -1);
                cm.gainItem(4001042, -1);
                cm.gainItem(4001041, -1);
				cm.gainItem(4001040, -1);
				cm.gainItem(4001043, -1);
				cm.gainItem(4001039, -1);
				cm.gainItem(4251202,1);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳɸߵ����ˮ��X1!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
            case 3: 
              if (cm.haveItem(4002000,100)){
                cm.sendOk("��ϲ�㣬�ϳ��й���#v4000464#�ɹ�! .");
                cm.gainItem(4002000, -100);
				cm.gainItem(4000464,1);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳ��й���X1!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
            case 4: 

          if (cm.haveItem(4001083,1) && cm.haveItem(4001084,1) && cm.haveItem(4001085,1)){
                cm.sendOk("��ϲ�㣬�ϳɴ�˵��Ҷ��#v4310028#�ɹ�! .");
                cm.gainItem(4001083, -1);
                cm.gainItem(4001084, -1);
                cm.gainItem(4001085, -1);
				cm.gainItem(4310028,1);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳɴ�˵��Ҷ��X1!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
            case 5: 
            if (cm.haveItem(4001226,1) && cm.haveItem(4001227,1) && cm.haveItem(4001228,1) && cm.haveItem(4001229,1) && cm.haveItem(4001230,1)){
                cm.sendOk("��ϲ�㣬�ϳ��й���#v4000464#�ɹ�! .");
                cm.gainItem(4001226, -1);
                cm.gainItem(4001227, -1);
                cm.gainItem(4001228, -1);
				cm.gainItem(4001229, -1);
				cm.gainItem(4001230, -1);
				cm.gainItem(4000464,1);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳ��й���X1!");
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