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
            cm.sendSimple ("#e���ã��𾴵� #b#h ##k, ���Ǳ�����#r�һ�ϵͳ#k������\r\n#r����������;��50%�ɹ����ɼӻ����κ���ͨװ���ϣ��������װ������ȫ����1-5��#k\r\n#k#n \r\n#L6##e�ϳ���������#v2049124#X50#r��Ҫ#v4005000##v4005001##v4005002##v4005003##v4005004#��1��#k#n#l#k\r\n#L7##e�ϳ���������#v2049124#X50#r��Ҫ#v4011000##v4011001##v4011002##v4011003##v4011004##v4011005##v4011006#��1��#k#n#l#k\r\n#L8##e�ϳ���������#v2049124#X50#r��Ҫ#v4021000##v4021001##v4021002##v4021003##v4021004##v4021005##v4021006##v4021007##v4021008#��1��#k#n#l#k");
        } else if (status == 1) {
            switch(selection) {
				case 6: 
 if (cm.haveItem(4005000,1) && cm.haveItem(4005001,1) && cm.haveItem(4005002,1) && cm.haveItem(4005003,1) && cm.haveItem(4005004,1)){
                cm.sendOk("��ϲ�㣬�ϳ���������#v2049124#X50�ɹ�! .");
                cm.gainItem(4004000, -1);
                cm.gainItem(4004001, -1);
                cm.gainItem(4004002, -1);
				cm.gainItem(4004003, -1);
                cm.gainItem(4004004, -1);				
				cm.gainItem(2049124,50);
				cm.setBossLog('����һ�');
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]��������X50!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
        case 7: 
  if (cm.haveItem(4011000,1) && cm.haveItem(4011001,1) && cm.haveItem(4011002,1) && cm.haveItem(4011003,3) && cm.haveItem(4011004,1) && cm.haveItem(4011005,1) && cm.haveItem(4011006,1)){
                cm.sendOk("��ϲ�㣬�ϳ���������#v2049124#X50�ɹ�! .");
                cm.gainItem(4011000, -1);
                cm.gainItem(4011001, -1);
                cm.gainItem(4011002, -1);
				cm.gainItem(4011003, -1);
                cm.gainItem(4011004, -1);
                cm.gainItem(4011005, -1);
                cm.gainItem(4011006, -1);
				cm.gainItem(2049124,50);
				cm.setBossLog('����һ�');
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]��������X50!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
			case 8: 
 if (cm.haveItem(4021000,1) && cm.haveItem(4021001,1) && cm.haveItem(4021002,1) && cm.haveItem(4021003,3) && cm.haveItem(4021004,1) && cm.haveItem(4021005,1) && cm.haveItem(4021006,1) && cm.haveItem(4021007,1) && cm.haveItem(4021008,1)){
                cm.sendOk("��ϲ�㣬�ϳ���������#v2049124#X50�ɹ�! .");
                cm.gainItem(4021000, -1);
                cm.gainItem(4021001, -1);
                cm.gainItem(4021002, -1);
				cm.gainItem(4021003, -1);
                cm.gainItem(4021004, -1);
                cm.gainItem(4021005, -1);
                cm.gainItem(4021006, -1);
				cm.gainItem(4021007, -1);
				cm.gainItem(4021008, -1);
				cm.gainItem(2049124,50);
				cm.setBossLog('����һ�');
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]��������X50!");
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