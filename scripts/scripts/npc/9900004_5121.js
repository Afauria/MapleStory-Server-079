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
            cm.sendSimple ("#e���ã��𾴵� #b#h ##k, ���Ǳ�����#r�һ�ϵͳ#k������\r\n#k#n \r\n#L9##e�ϳ�X1#v2049124#�����(��ȫ����1-5��)#r��Ҫ#v2022279#10��#k#n#l#k\r\n#L99##e�ϳ�X10#v2049124#�����(��ȫ����1-5��)#r��Ҫ#v2022279#100��#k#n#l#k\r\n#L4##e�ϳɴ�˵��Ҷ��#v4310028##r��Ҫ#v4001083##v4001084##v4001085#��һ��#k#n#l#k\r\n");
        } else if (status == 1) {
            switch(selection) {
				case 6: 

          if (cm.haveItem(4170000,1) && cm.haveItem(4170002,1) && cm.haveItem(4170004,1) && cm.haveItem(4170007,1)){
                cm.sendOk("��ϲ�㣬�ϳ����˱�#v2022279#X2�ɹ�! .");
                cm.gainItem(4170000, -1);
                cm.gainItem(4170002, -1);
                cm.gainItem(4170004, -1);
				cm.gainItem(4170007, -1);			
				cm.gainItem(2022279,2);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳ����˱�X2!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
			case 9:
		
		     if(cm.haveItem(2022279,10)){
                cm.sendOk("��ϲ�㣬�ϳ���������#v2049124#�ɹ�! .");
                cm.gainItem(2022279,-10);
				cm.gainItem(2049124,1);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳ���������X1!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
			
			case 99:
		
		     if(cm.haveItem(2022279,100)){
                cm.sendOk("��ϲ�㣬�ϳ���������#v2049124#�ɹ�! .");
                cm.gainItem(2022279,-100);
				cm.gainItem(2049124,10);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳ���������X10!");
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
           case 6: 
            if(cm.haveItem(4001126,100)){
                cm.gainItem(4000313,10);
				cm.gainItem(4001126,-100);
				cm.sendOk("��ϲ�㣬������ 10�Żƽ��Ҷ! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]100�ŷ�Ҷ�һ�10�Żƽ��Ҷ�ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� ��Ҷ���Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 7: 
            if(cm.getMeso() >= 10000000){
                cm.sendOk("��ϲ�㣬������ 2000000 ����ֵ! .");
                cm.gainMeso(-10000000);
                cm.gainExp(2000000);
                cm.dispose();
            }else{
                cm.sendOk("��û�� 10000000 ��ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 8: 
            if(cm.getMeso() >= 100000000){
                cm.sendOk("��ϲ�㣬������ 50000000 ����ֵ! .");
                cm.gainMeso(-100000000);
                cm.gainExp(50000000);
                cm.dispose();
            }else{
                cm.sendOk("��û�� 1�� ��ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            }
        }
    }
}