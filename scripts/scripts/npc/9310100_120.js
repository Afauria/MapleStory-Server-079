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
            cm.sendSimple ("���ã��𾴵� #b#h ##k, ���ǳԻ�ð�յ�#r��Ϸ���߶һ�#k������\r\n\r\n\r\n#L0#1��#d#v4030009##d#d�һ�=====#v4080000#����1��#k#n#l\r\n#L1#1��#d#v4030009##d#d�һ�=====#v4080006#����1��#k#n#l\r\n#L2#1��#d#v4030009##d#d�һ�=====#v4080007#����1��#k#n#l\r\n#L3#1��#d#v4030009##d#d�һ�=====#v4080008#����1��#k#n#l\r\n#L4#1��#d#v4030009##d#d�һ�=====#v4080009#����1��#k#n#l\r\n#L5#1��#d#v4030009##d#d�һ�=====#v4080010#����1��#k#n#l\r\n#L6#1��#d#v4030009##d#d�һ�=====#v4080011#����1��#k#n#l\r\n#L7#100��#d#v4030012##d#d�һ�=====#v4080100#�������1��#k#n#l\r\n");
        } else if (status == 1) {
            switch(selection) {
        case 0:
		 if(!cm.haveItem(4030009,1)){
			 cm.sendOk("��û�� 1��#d#v4030009#! .");
			 cm.dispose();
			
		  }else if (cm.getLevel() >= 10 && cm.getLevel() <=255 ) {         
                cm.sendOk("��ϲ�㣬�һ����̳ɹ�! ȥ��С���һ�����ְ�!.");
                cm.gainItem(4030009,-1);
                cm.gainItem(4080000,1);
                cm.dispose();
            }else{
                cm.sendOk("��ȼ�����10�����Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
        case 1: 
            if(!cm.haveItem(4030009,1)){
			 cm.sendOk("��û�� 1��#d#v4030009#! .");
			 cm.dispose();
			
		  }else if (cm.getLevel() >= 10 && cm.getLevel() <=255 ) {         
                cm.sendOk("��ϲ�㣬�һ����̳ɹ�! ȥ��С���һ�����ְ�!.");
                cm.gainItem(4030009,-1);
                cm.gainItem(4080006,1);
                cm.dispose();
            }else{
                cm.sendOk("��ȼ�����10�����Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
         case 2: 
             if(!cm.haveItem(4030009,1)){
			 cm.sendOk("��û�� 1��#d#v4030009#! .");
			 cm.dispose();
			
		  }else if (cm.getLevel() >= 10 && cm.getLevel() <=255 ) {         
                cm.sendOk("��ϲ�㣬�һ����̳ɹ�! ȥ��С���һ�����ְ�!.");
                cm.gainItem(4030009,-1);
                cm.gainItem(4080007,1);
                cm.dispose();
            }else{
                cm.sendOk("��ȼ�����10�����Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 3: 
            if(!cm.haveItem(4030009,1)){
			 cm.sendOk("��û�� 1��#d#v4030009#! .");
			 cm.dispose();
			
		  }else if (cm.getLevel() >= 10 && cm.getLevel() <=255 ) {         
                cm.sendOk("��ϲ�㣬�һ����̳ɹ�! ȥ��С���һ�����ְ�!.");
                cm.gainItem(4030009,-1);
                cm.gainItem(4080008,1);
                cm.dispose();
            }else{
                cm.sendOk("��ȼ�����10�����Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 4: 
            if(!cm.haveItem(4030009,1)){
			 cm.sendOk("��û�� 1��#d#v4030009#! .");
			 cm.dispose();
			
		  }else if (cm.getLevel() >= 10 && cm.getLevel() <=255 ) {         
                cm.sendOk("��ϲ�㣬�һ����̳ɹ�! ȥ��С���һ�����ְ�!.");
                cm.gainItem(4030009,-1);
                cm.gainItem(4080009,1);
                cm.dispose();
            }else{
                cm.sendOk("��ȼ�����10�����Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 5: 
            if(!cm.haveItem(4030009,1)){
			 cm.sendOk("��û�� 1��#d#v4030009#! .");
			 cm.dispose();
			
		  }else if (cm.getLevel() >= 10 && cm.getLevel() <=255 ) {         
                cm.sendOk("��ϲ�㣬�һ����̳ɹ�! ȥ��С���һ�����ְ�!.");
                cm.gainItem(4030009,-1);
                cm.gainItem(4080010,1);
                cm.dispose();
            }else{
                cm.sendOk("��ȼ�����10�����Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
           case 6: 
            if(!cm.haveItem(4030009,1)){
			 cm.sendOk("��û�� 1��#d#v4030009#! .");
			 cm.dispose();
			
		  }else if (cm.getLevel() >= 10 && cm.getLevel() <=255 ) {         
                cm.sendOk("��ϲ�㣬�һ����̳ɹ�! ȥ��С���һ�����ְ�!.");
                cm.gainItem(4030009,-1);
                cm.gainItem(4080011,1);
                cm.dispose();
            }else{
                cm.sendOk("��ȼ�����10�����Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 7: 
            if(!cm.haveItem(4030012,100)){
			 cm.sendOk("��û�� 100��#d#v4030012#! .");
			 cm.dispose();
			
		  }else if (cm.getLevel() >= 10 && cm.getLevel() <=255 ) {         
                cm.sendOk("��ϲ�㣬�һ����������Ϸ�ɹ�! ȥ��С���һ�����ְ�!.");
                cm.gainItem(4030012,-100);
                cm.gainItem(4080100,1);
                cm.dispose();
            }else{
                cm.sendOk("��ȼ�����10�����Ҳ��ܸ��㻻��~.");
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
			case 10: 
            if(cm.getMeso() >= 1000000){
                cm.sendOk("��ϲ�㣬������ #v2614000#ͻ��һ��֮ʯ! .");
                cm.gainMeso(-100000000);
                cm.gainItem(2614000,1);
                cm.dispose();
            }else{
                cm.sendOk("��û�� 100W ��ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
			case 11: 
            if(cm.getMeso() >= 10000000){
                cm.sendOk("��ϲ�㣬������ #v2614001#ͻ��ʮ��֮ʯ! .");
                cm.gainMeso(-100000000);
                cm.gainItem(2614001,1);
                cm.dispose();
            }else{
                cm.sendOk("��û�� 1000W ��ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
			case 9: 
                cm.openNpc(9270052, 0);
            break;
            }
        }
    }
}