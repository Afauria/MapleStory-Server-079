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
            cm.sendSimple ("���ã��𾴵� #b#h ##k, ����#r�һ�ϵͳ#k������\r\n\r\n      ����ǰ�ĵ�������:#b#c2002033#��\r\n#n#b#L4#1��#v2002033##d===#r1W���#k#n#l\r\n#n#b#L5#10��#v2002033##d===#r10W���#k#n#l\r\n#n#b#L6#1��#v2002033##d===#r5��#v2010006##k#n#l\r\n#n#b#L7#10��#v2002033##d===#r50��#v2010006##k#n#l\r\n#n#b#L8#2��#v2002033##d===#r1��#v4000464##k#n#l\r\n#n#b#L9#20��#v2002033##d===#r10��#v4000464##k#n#l\r\n\r\n");
        } else if (status == 1) {
            switch(selection) {
        case 0:
            if(cm.getmoneyb() >= 5){
                 cm.setmoneyb(-5);				
				 cm.gainItem(2002033, 1);
                 cm.gainjf(+5);				 
				cm.sendOk("��ϲ�㣬�һ��ɹ� .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]�һ�1���ɿ�������ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�ĳԻ���� ���Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
        case 1: 
            if(cm.getmoneyb() >= 100){
                cm.setmoneyb(-100);				
				 cm.gainItem(2002033, 20);
				  cm.gainjf(+100);
				cm.sendOk("��ϲ�㣬�һ��ɹ�! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]�һ�20���ɿ�������ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�ĳԻ����Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
			case 2: 
            if(cm.getmoneyb() >= 1){
                cm.setmoneyb(-1);
 cm.gainjf(+1);				
				 cm.gainNX(+1000);
				cm.sendOk("��ϲ�㣬�һ��ɹ�! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]1000��һ��ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�ĳ�ֵ�ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
         case 4: 
            if(cm.haveItem(2002033,1)){
                cm.gainNX(10000);
				cm.gainItem(2002033,-1);
				cm.sendOk("��ϲ�㣬������ 1W ��ȯ! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]1���ɿ�������һ�1W���ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� �ɿ������⣬�Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
			case 5: 
            if(cm.haveItem(2002033,10)){
                cm.gainNX(100000);
				cm.gainItem(2002033,-10);
				cm.sendOk("��ϲ�㣬������ 10W ��ȯ! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]10���ɿ�������һ�10W���ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� �ɿ������⣬�Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
			case 6: 
            if(cm.haveItem(2002033,1)){
                cm.gainItem(2010006, 5);
				cm.gainItem(2002033,-1);
				cm.sendOk("��ϲ�㣬������ 5������! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]1���ɿ�������һ�5�����۳ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� �ɿ������⣬�Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
			case 7: 
            if(cm.haveItem(2002033,10)){
                cm.gainItem(2010006, 50);
				cm.gainItem(2002033,-10);
				cm.sendOk("��ϲ�㣬������ 50������! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]10���ɿ�������һ�50�����۳ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� �ɿ������⣬�Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
			case 8: 
            if(cm.haveItem(2002033,2)){
                cm.gainItem(4000464, 1);
				cm.gainItem(2002033,-2);
				cm.sendOk("��ϲ�㣬������ 1���й���! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]2���ɿ�������һ�1���й��ĳɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� �ɿ������⣬�Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
			case 9: 
            if(cm.haveItem(2002033,20)){
                cm.gainItem(4000464, 10);
				cm.gainItem(2002033,-20);
				cm.sendOk("��ϲ�㣬������ 10���й���! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]20���ɿ�������һ�10���й��ĳɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� �ɿ������⣬�Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
		case 3: 
            if(cm.getmoneyb() >= 1000){
                cm.setmoneyb(-1000);
 cm.gainjf(+1000);				
				 cm.gainItem(2002033, 200);
				cm.sendOk("��ϲ�㣬�һ��ɹ�! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]�һ�200���ɿ�������ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�ĳԻ����Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 8: 
            if((cm.getPlayer().getCSPoints(1) >= 300)){          
				 cm.gainNX(-300);
				cm.gainItem(4001126,1);
				cm.sendOk("��ϲ�㣬�һ��ɹ� .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]300��һ�����ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�ĵ�� ���Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 9: 
            if(cm.haveItem(4001126,10)){              
				cm.gainItem(4001126,-10);
				cm.gainNX(2600);
				cm.sendOk("��ϲ�㣬������ 2600���! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]����һ�2600���ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� ����ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
			case 10: 
            if (cm.getPlayer().getNX() >= 20000) {
                cm.gainNX(-20000);
				cm.gainMeso(20000000);
				cm.sendOk("��ϲ�㣬������2000W��Ϸ��! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]�һ���Ϸ�ҳɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�ĵ���Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
			case 15: 
            if (cm.getPlayer().getNX() >= 100000) {
                cm.gainNX(-100000);
				cm.gainMeso(100000000);
				cm.sendOk("��ϲ�㣬������1E��Ϸ��! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]�һ���Ϸ�ҳɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�ĵ���Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 11: 
            if(cm.haveItem(4032226,10)){
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
           case 12: 
            if(cm.haveItem(4001126,1)){              
				cm.gainItem(4001126,-1);
				cm.gainNX(260);
				cm.sendOk("��ϲ�㣬������ 260���! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]����һ�260���ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� ����ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 13: 
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
            case 14: 
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
			case 16: 
                cm.openNpc(9000041, 0);
			
            case 9: 
                cm.openNpc(9270052, 0);
            }
        }
    }
}