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
            cm.sendSimple ("���ã��𾴵� #b#h ##k, ���Ǳ�����#r�һ�ϵͳ#k������\r\n\r\n��Ŀǰ�н�ң� #e#r" + cm.getMeso() + "\r\n#n#L2#100��#d#v4001126##d=====#r10��#d#v4000313##d#l\r\n");
        } else if (status == 1) {
            switch(selection) {
        case 0:
            if((cm.getPlayer().getCSPoints(1) >= 3000)){
                //cm.gainDY(100);             
				 cm.gainNX(-3000);
				cm.gainItem(4000463,10);
				cm.sendOk("��ϲ�㣬�һ��ɹ� .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]3000��һ�����ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�ĵ�� ���Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
        case 1: 
            if(cm.haveItem(4001126,1000)){
                //cm.gainDY(100);
                cm.gainNX(3000);
				cm.gainItem(4001126,-1000);
				cm.sendOk("��ϲ�㣬������ 3000 ��ȯ! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]1000�ŷ�Ҷ�һ�3000���ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� ��Ҷ���Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
         case 2: 
            if(cm.haveItem(4001126,100)){
                //cm.gainDY(100);
                //cm.gainNX(200);
				cm.gainItem(4001126,-100);
				cm.gainItem(4000313,10);
				cm.sendOk("��ϲ�㣬������ 10�Żƽ��Ҷ! .");
			    cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]100�ŷ�Ҷ�һ�10�Żƽ��Ҷ�ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� ��Ҷ���Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 3: 
            if((cm.getPlayer().getCSPoints(1) >= 300)){
                //cm.gainDY(100);             
				 cm.gainNX(-300);
				cm.gainItem(4000463,1);
				cm.sendOk("��ϲ�㣬�һ��ɹ� .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]300��һ�����ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�ĵ�� ���Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 4: 
            if(cm.haveItem(4000463,10)){              
				cm.gainItem(4000463,-10);
				cm.gainNX(2600);
				cm.sendOk("��ϲ�㣬������ 2600���! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]����һ�2600���ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� ����ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 5: 
            if(cm.haveItem(4032226,10)){
                //cm.gainDY(100);
                cm.gainMeso(2000000);
				cm.gainItem(4032226,-10);
				cm.sendOk("��ϲ�㣬������ 2000000 ���! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]10ֻ�ƽ�����һ�2000000��ҳɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� �ƽ������Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
           case 6: 
            if(cm.haveItem(4000463,1)){              
				cm.gainItem(4000463,-1);
				cm.gainNX(260);
				cm.sendOk("��ϲ�㣬������ 260���! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]����һ�260���ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� ����ң��Ҳ��ܸ��㻻��~.");
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
            case 9: 
                cm.openNpc(9270052, 0);
            }
        }
    }
}