var status;


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        cm.dispose();
        return;
    }
	if(!cm.getPlayer().isGM()){
		cm.dispose();
		return;
	}
    if (status == 0) {
        var text="��ѡ����Ҫ�һ���װ��:\r\n";
		text+="#b#L1##v4000487#x10 + #v4000017#x10�һ� #v1002419#(��ά+5)#l\r\n";
		text+="#b#L2##v4000487#x10 + #v1002419#x1 + #v4000017#x20 �һ� #v1002238#(��ά+10,��ħ+10)#l\r\n";
		text+="#b#L3##v4000487#x30 + #v1002419#x1 + #v1002238#x1 + #v4000017#x30 �һ� #v1002424#(��ά+30,��ħ+30)#l\r\n";

	      cm.sendSimple(text);
	}
	else if(status==1){
		if(selection==1){
			if(cm.haveItem(4000487,10)&& cm.haveItem(4000017,10)){
			cm.gainItem(4000487,-10);
			cm.gainItem(4000017,-10);
			cm.gainItem(1002419,5,5,5,5,0,0,5,5,0,0,0,0,0,0,0);
			cm.sendOk("��ϲ������װ���һ��ɹ�");
			cm.����(3, "��ң�[" + cm.getName() + "]����װ���һ��ɹ���");
			cm.dispose();
			}else{
				cm.sendOk("�һ����ϲ��㣬����Ŭ���ɣ�");
			cm.dispose();
			}
		}
		else if(selection==2){
			if(cm.haveItem(4000487,10)&& cm.haveItem(1002419,1)&& cm.haveItem(4000017,20)){
			cm.gainItem(4000487,-10);
			cm.gainItem(1002419,-1);
			cm.gainItem(4000017,-20);
			cm.gainItem(4005004,-10);
			cm.gainItem(1002238,10,10,10,10,0,0,10,10,0,0,0,0,0,0,0);
			cm.sendOk("��ϲ������ñ�������ɹ�");
			cm.����(3, "��ң�[" + cm.getName() + "]����ñ�������ɹ���");
			cm.dispose();
			}else{
				cm.sendOk("�һ����ϲ��㣬����Ŭ���ɣ�");
			cm.dispose();
			}
		}
		else if(selection==3){
			if(cm.haveItem(4000487,30)&& cm.haveItem(1002419,1) && cm.haveItem(1002238,1)&& cm.haveItem(4000017,30)){
			cm.gainItem(4000487,-30);
			cm.gainItem(1002419,-1);
			cm.gainItem(1002238,-1);
			cm.gainItem(4000017,-30);
			cm.gainItem(1002424,30,30,30,30,0,0,30,30,0,0,0,0,0,0,0);
			cm.sendOk("��ϲ��ʱװ�����ɹ�");
			cm.����(3, "��ң�[" + cm.getName() + "]ʱװ�����ɹ���");
			cm.dispose();
			}else{
				cm.sendOk("�һ����ϲ��㣬����Ŭ���ɣ�");
			cm.dispose();
			}
		}

	}

	
	else if(status==2){
		
	}
}