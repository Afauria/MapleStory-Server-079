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
            cm.sendSimple ("���ã��𾴵� #b#h ##k, ���Ƿ���ð�յ���#rϵͳ����#k������\r\nÿ����һ��VIP�ȼ����ƹ���������10W\r\n\r\n��Ŀǰ�ƹ��ȼ�Ϊ�� #e#r" + cm.getvip() + "#k#n \r\n#L2##e100w���=====#r����1���ƹ��ȼ�(10W��������)#k#n#l#k\r\n\r\n");
        } else if (status == 1) {
            switch(selection) {
        case 2:
            if(cm.getPlayer().getMeso() > 1000000){
                cm.sendOk("��ϲ�㣬��������1��VIP�ȼ�! .");
				cm.gainvip(+10);
                cm.gainMeso(-1000000);
				cm.worldMessage(6,"���ƹ�ϵͳ��["+cm.getName()+"]������1��VIP�ȼ�!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ľ�ң��Ҳ��ܸ�������~.");
                cm.dispose();
            }
            break;
        case 1: 
            if(cm.getMeso() >= 1000000){
                cm.sendOk("��ϲ�㣬������ 10000 ��ȯ! .");
                cm.gainMeso(-1000000);
                cm.gainNX(10000);
                cm.dispose();
            }else{
                cm.sendOk("��û�� 1000000 ��ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
         case 0: 
            if(cm.haveItem(4001126,100)){
                //cm.gainDY(100);
                cm.gainvip(+10);
				cm.gainItem(4001126,-100);
				cm.sendOk("��ϲ�㣬��������1��VIP�ȼ�! .");
			        cm.worldMessage(6,"���ƹ�ϵͳ��["+cm.getName()+"]������1��VIP�ȼ�!");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� ��Ҷ���Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 3: 
            if(cm.haveItem(4001126,1000)){
                //cm.gainDY(100);
                cm.gainMeso(5000000);
				cm.gainItem(4001126,-1000);
				cm.sendOk("��ϲ�㣬������ 5000000 ���! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]1000�ŷ�Ҷ�һ�5000000��ҳɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� ��Ҷ���Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 4: 
            if(cm.haveItem(4000313,100)){
                //cm.gainDY(100);
                cm.gainMeso(15000000);
				cm.gainItem(4000313,-100);
				cm.sendOk("��ϲ�㣬������ 15000000 ���! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]100�Żƽ��Ҷ�һ�15000000��ҳɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� �ƽ��Ҷ���Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 5: 
            if(cm.haveItem(4032226,100)){
                //cm.gainDY(100);
                cm.gainvip(+10);
				cm.gainItem(4032226,-100);
				cm.sendOk("��ϲ�㣬��������10��VIP�ȼ�! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]100ֻ�ƽ���������10��VIP�ȼ�!�ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� �ƽ������Ҳ��ܸ��㻻��~.");
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