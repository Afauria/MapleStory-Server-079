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
            cm.sendSimple ("#e���ã��𾴵� #b#h ##k, ���Ǳ�����#r�Ի�ϵͳ#k������\r\n#k#n \r\n#L12##e�ϳ�#v1092048#(60G)#r��Ҫ#v2002034#X500��#k#l\r\n#L13##e�ϳ�#v1032205#(ȫ����100)#r��Ҫ#v2002034#X300��#k#l\r\n#L14##e�ϳ�#v1402310#(300G)#r��Ҫ#v2002034#X300��#k#l\r\n#L7##e�ϳ�200��սʿ��װ�ļ�#r��Ҫ#v2020007#X20��+#v2002023#X80+����սʿ���ļ�+#v4310149#X20#k#l\r\n#L8##e�ϳ�200����ʦ��װ�ļ�#r��Ҫ#v2020007#X20��+#v2002023#X80+������ʦ���ļ�+#v4310149#X20#k#l\r\n#L9##e�ϳ�200��������װ�ļ�#r��Ҫ#v2020007#X20��+#v2002023#X80+�����������ļ�+#v4310149#X20#k#l\r\n#L10##e�ϳ�200��������װ�ļ�#r��Ҫ#v2020007#X20��+#v2002023#X80+�����������ļ�+#v4310149#X20#k#l\r\n#L11##e�ϳ�200��������װ�ļ�#r��Ҫ#v2020007#X20��+#v2002023#X80+�����������ļ�+#v4310149#X20#k#l\r\n");
        } else if (status == 1) {
            switch(selection) {
				case 6: 

          if (cm.haveItem(4031640,100)){
                cm.sendOk("��ϲ�㣬�ϳ�#v2020007#X1�ɹ�! .");
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

          if (cm.haveItem(2002034,500)){
                cm.sendOk("��ϲ�㣬�ϳ�#v1092048#X1�ɹ�! .");
                cm.gainItem(2002034, -500);               		
				cm.gainItem(1092048,5,5,5,5,0,0,60,60,0,0,0,0,0,0);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳɡ������X1!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
			
			case 13: 

          if (cm.haveItem(2002034,300)){
                cm.sendOk("��ϲ�㣬�ϳ�#v1032205#X1�ɹ�! .");
                cm.gainItem(2002034, -300);               		
				cm.gainItem(1032205,100,100,100,100,100,100,50,50,0,0,0,0,0,0);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳ��񻰶���X1!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
			
			case 14: 

          if (cm.haveItem(2002034,300)){
                cm.sendOk("��ϲ�㣬�ϳ�#v1402310#X1�ɹ�! .");
                cm.gainItem(2002034, -300);               		
				cm.gainItem(1402310,10,10,0,0,0,0,300,0,0,0,0,0,0,0);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳɡ�����X1!");
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