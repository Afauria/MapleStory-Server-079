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
            cm.sendSimple ("#e���ã��𾴵� #b#h ##k, ���Ǳ�����#r�ƹ�ϵͳ#k������\r\nÿ����һ���ƹ��ȼ����ƹ���������10000\r\n\r\n#b��Ŀǰ�ƹ��ȼ�Ϊ�� #e#r" + cm.getvip() + "#k#n \r\n#L5##e�ϳɷŴ�#v2460005##r��Ҫ#v2010006#X1#v4251202#X1#v4000464#X1+���1E#k#n#l#k\r\n#L3##e�ϳ��ƹ�ʯ#v2614015##r��Ҫ#v2010006#X1#v4251202#X1#v4000464#X1+���1E#k#n#l#k\r\n#L4##e����ͨ�ƹ���ʹ���ƹ�ʯ#v2614015##r����1����ƹ�����(10��/��)#k#n#l#k\r\n#L6##e����ʯVIP��ʹ���ƹ�ʯ#v2614015##r����2����ƹ�����(���޴���)#k#n#l#k\r\n\r\n");
        } else if (status == 1) {
            switch(selection) {
        case 2:
		
		     if(cm.getMeso() < 30000000){
                cm.sendOk("��Ǹ��Ľ�Ҳ���3000W�����Ժϳ�! .");
				cm.dispose();
          } else   if(cm.haveItem(4251201,5)){
                cm.sendOk("��ϲ�㣬�ϳɸߵ����#v4251202#�ɹ�! .");
                cm.gainItem(4251201,-5);
				cm.gainMeso(-30000000);
				cm.gainItem(4251202,1);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳɸߵ����ˮ��X1!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
        case 1:
             		
             if(cm.getMeso() < 30000000){
                cm.sendOk("��Ǹ��Ľ�Ҳ���3000W�����Ժϳ�! .");
				cm.dispose();
          } else   if(cm.haveItem(4251200,5)){
                cm.sendOk("��ϲ�㣬�ϳ��е����#v4251202#�ɹ�! .");
                cm.gainItem(4251200,-5);
				cm.gainMeso(-30000000);
				cm.gainItem(4251201,1);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳ��е����ˮ��X1!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
         case 0: 
             if(cm.getMeso() < 30000000){
                cm.sendOk("��Ǹ��Ľ�Ҳ���3000W�����Ժϳ�! .");
				cm.dispose();
          } else   if (cm.haveItem(4001038,1) && cm.haveItem(4001042,1) && cm.haveItem(4001041,1) && cm.haveItem(4001040,1) && cm.haveItem(4001043,1) && cm.haveItem(4001039,1)){
                cm.sendOk("��ϲ�㣬�ϳɸߵ����#v4251202#�ɹ�! .");
                cm.gainItem(4001038, -1);
                cm.gainItem(4001042, -1);
                cm.gainItem(4001041, -1);
				cm.gainItem(4001040, -1);
				cm.gainItem(4001043, -1);
				cm.gainItem(4001039, -1);
				cm.gainMeso(-30000000);
				cm.gainItem(4251202,1);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳɸߵ����ˮ��X1!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
            case 3: 
              if(cm.getMeso() < 100000000){
                cm.sendOk("��Ǹ��Ľ�Ҳ���1E�����Ժϳ�! .");
				cm.dispose();
          } else   if (cm.haveItem(4251202,1) && cm.haveItem(2010006,1) && cm.haveItem(4000464,1)){
                cm.sendOk("��ϲ�㣬�ϳ��ƹ�ʯ#v2614015#�ɹ�! .");
                cm.gainItem(4251202, -1);
                cm.gainItem(2010006, -1);
                cm.gainItem(4000464, -1);
				//cm.gainItem(4001040, -1);
				//cm.gainItem(4001043, -1);
				//cm.gainItem(4001039, -1);
				cm.gainMeso(-100000000);
				cm.gainItem(2614015,1);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳ��ƹ�ʯX1!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
			case 7: 
              if(cm.getMeso() < 80000000){
                cm.sendOk("��Ǹ��Ľ�Ҳ���8000W�����Ժϳ�! .");
				cm.dispose();
          } else if (cm.haveItem(4251202,2) && cm.haveItem(2010006,4) && cm.haveItem(4000464,1) && cm.haveItem(3700148,1)){
                cm.sendOk("��ϲ�㣬�ϳ��ƹ�ʯ#v2614015#�ɹ�! .");
                cm.gainItem(4251202, -2);
                cm.gainItem(2010006, -4);
                cm.gainItem(4000464, -1);
				//cm.gainItem(4001040, -1);
				//cm.gainItem(4001043, -1);
				//cm.gainItem(4001039, -1);
				cm.gainMeso(-80000000);
				cm.gainItem(2614015,1);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳ��ƹ�ʯX1!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ�������������ʯ��Ա���Ҳ��ܸ���ϳ�~.");
                cm.dispose();
            }
            break;
			
            case 4: 
			  if (cm.getBossLog('PlayQuest80') >= 10) {
			cm.sendOk("������ƹ���������10��!");
			cm.dispose();
           }	else  if (cm.haveItem(2614015,1)){
                //cm.gainDY(100);
				cm.gainItem(2614015,-1);
				cm.gainvip(+1);
				cm.setBossLog('PlayQuest80');
				cm.sendOk("��ϲ�㣬������ͨ�ƹ��ɹ�! .");
			        cm.worldMessage(6,"���ƹ�ϵͳ��["+cm.getName()+"]������ͨ�ƹ�1������޳ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻���ƹ�ʯ#v2614015#���Ҳ��ܸ����ƹ�~.");
                cm.dispose();
            }
            break;
			
			case 6: 
		if (cm.haveItem(2614015,1) && cm.haveItem(3700148,1)){
                //cm.gainDY(100);
				cm.gainItem(2614015,-1);
				cm.gainvip(+2);
				//cm.setBossLog('PlayQuest80');
				cm.sendOk("��ϲ�㣬����VIP�ƹ��ɹ�! .");
			        cm.worldMessage(6,"���ƹ�ϵͳ��["+cm.getName()+"]����VIP�ƹ�2������޳ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻���ƹ�ʯ#v2614015#���Ҳ��ܸ����ƹ�~.");
                cm.dispose();
            }
            break;
			
            case 5: 
             if(cm.getMeso() < 100000000){
                cm.sendOk("��Ǹ��Ľ�Ҳ���1E�����Ժϳ�! .");
				cm.dispose();
          } else   if (cm.haveItem(4251202,1) && cm.haveItem(2010006,1) && cm.haveItem(4000464,1)){
                cm.sendOk("��ϲ�㣬�ϳɷŴ�#v2460005#�ɹ�! .");
                cm.gainItem(4251202, -1);
                cm.gainItem(2010006, -1);
                cm.gainItem(4000464, -1);
				//cm.gainItem(4001040, -1);
				//cm.gainItem(4001043, -1);
				//cm.gainItem(4001039, -1);
				cm.gainMeso(-100000000);
				cm.gainItem(2460005,1);
				cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳɷŴ�X1!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ���ϳ�~.");
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