var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }		
			text +="\t\t#e#d��ӭ��ȡ#r���߽���  #d����ʱ�䣺#r" + cm.getGamePoints() + "����#k#n\r\n "
			// text +="#b���߽�������Ϊ.����50������Ҷ50��-����50���������ߵ�ף��1��-ǿ��3����ף��3��-��ɫ��Ҷ20�����ʼ���1��-����ţһ�š�����1000-����1�š�����1500-��ˮ��һ�š������2��\r\n"
			text +="#L1##r��ȡ���ù�Ӷ���ˣ�#v5030001# x1 �г���̯#l\r\n\r\n\r\n"//3
            if(cm.getPlayer().getGamePoints() >= 60 && cm.getPlayer().getGamePointsPD() == 0){
					text += "#L2##r"+��ɺ�+"����ʱ�䳬��60���ӣ�"+���+"���*60W#v2022035#*1��#v2020031#*1��#v2000019#*60��\r\n\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 60 && cm.getPlayer().getGamePointsPD() > 0){
					text += ""+��ɺ�+"#r����ʱ�䳬��60���ӣ�#l"+���+"���*60W#v2022035#*1��#v2020031#*1��#v2000019#*60��\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��60���ӣ�#l"+���ڽ�����+"���*60W#v2022035#*1��#v2020031#*1��#v2000019#*60��\r\n\r\n"//3
			}		
		    if(cm.getPlayer().getGamePoints() >= 120 && cm.getPlayer().getGamePointsPD() == 1){
					text += "#L3##r"+��ɺ�+"����ʱ�䳬��120���ӣ�"+���+"���*120W ���*1000 #v5440000#*1200 \r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 120 && cm.getPlayer().getGamePointsPD() > 1){
					text += ""+��ɺ�+"#r����ʱ�䳬��120���ӣ�#l"+���+"���*120W ���*1000 #v5440000#*1200\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��120���ӣ�#l"+���ڽ�����+"���*120W ���*1000 #v5440000#*1200\r\n\r\n"//3
			}
			if(cm.getPlayer().getGamePoints() >= 180 && cm.getPlayer().getGamePointsPD() == 2){
					text += "#L4##r"+��ɺ�+"����ʱ�䳬��180���ӣ�"+���+"���*180W #v5440000#*1800 #v2049116#*20�� \r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 180 && cm.getPlayer().getGamePointsPD() > 2){
					text += ""+��ɺ�+"#r����ʱ�䳬��180���ӣ�#l"+���+"���*180W #v5440000#*1800 #v2049116#*20��\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��180���ӣ�#l"+���ڽ�����+"���*180W #v5440000#*1800 #v2049116#*20��\r\n\r\n"//3
			}
			if(cm.getPlayer().getGamePoints() >= 240 && cm.getPlayer().getGamePointsPD() == 3){
					text += "#L5##r"+��ɺ�+"����ʱ�䳬��240���ӣ�"+���+"���*240W #v5440000#*2400 #v2340000#*20��\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 240 && cm.getPlayer().getGamePointsPD() > 3){
					text += ""+��ɺ�+"#r����ʱ�䳬��240���ӣ�#l"+���+"���*240W #v5440000#*2400 #v2340000#*20��\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��240���ӣ�#l"+���ڽ�����+"���*240W #v5440000#*2400 #v2340000#*20��\r\n\r\n"//3
			}
			if(cm.getPlayer().getGamePoints() >= 300 && cm.getPlayer().getGamePointsPD() == 4){
					text += "#L8##r"+��ɺ�+"����ʱ�䳬��420���ӣ�"+���+"#v5440000#*4200 #v2000004#*50�� ���*1500W\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 300 && cm.getPlayer().getGamePointsPD() > 4){
					text += ""+��ɺ�+"#r����ʱ�䳬��420���ӣ�#l"+���+"#v5440000#*4200 #v2000004#*50�� ���*1500W\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��300���ӣ�#l"+���ڽ�����+"#v5440000#*4200 #v2000004#*50�� ���*1500W\r\n\r\n"//3
			}
			if(cm.getPlayer().getGamePoints() >= 360 && cm.getPlayer().getGamePointsPD() == 5){
					text += "#L7##r"+��ɺ�+"����ʱ�䳬��360���ӣ�"+���+"���*1000W #v5440000#*3600 #v2010006#*1��#k\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 360 && cm.getPlayer().getGamePointsPD() > 5){
					text += ""+��ɺ�+"#r����ʱ�䳬��360���ӣ�#l"+���+"���*1000W #v5440000#*3600 #v2010006#*1��#k\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��360���ӣ�#l"+���ڽ�����+"���*1000W #v5440000#*3600 #v2010006#*1��#k\r\n\r\n"//3
			}
			if(cm.getPlayer().getGamePoints() >= 420 && cm.getPlayer().getGamePointsPD() == 6){
					text += "#L8##r"+��ɺ�+"����ʱ�䳬��420���ӣ�"+���+"���2000W+���5000+#v2000019#80��+#v4251202#1��+#v2002031#2��\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 420 && cm.getPlayer().getGamePointsPD() > 6){
					text += ""+��ɺ�+"#r����ʱ�䳬��420���ӣ�#l"+���+"���2000W+���5000+#v2000019#80��+#v4251202#1��+#v2002031#2��\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��420���ӣ�#l"+���ڽ�����+"���2000W+���5000+#v2000019#80��+#v4251202#1��+#v2002031#2��\r\n\r\n"//3
			}
            cm.sendSimple(text);
        } else if (selection == 1) {
			if(cm.haveItem(5030001, 1)){
            cm.sendOk("���Ѿ���ȡ���ˡ��޷�������ȡ��");
            cm.dispose();
			}else if (cm.haveItem(5030000, 1)){
            cm.sendOk("���Ѿ���ȡ���ˡ��޷�������ȡ��");
            cm.dispose();
			}else{
			cm.gainItem(5030001, 1);//
			//cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ���ù�Ӷ���ˣ�");
            cm.dispose();
			}
        } else if (selection == 2) {
			cm.gainItem(2020031, 1);//����ҩˮ50��
			cm.gainItem(2022035, 1);//��Ҷ60��
			cm.gainMeso(+600000);
			cm.gainDY(600)//����ȯ
			cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��60�������߽��������60W+��Ѻ��600+���¿���60ƿ+�ɿڿ���6ƿ+����ҩˮ60��");
            cm.dispose();
        } else if (selection == 3) {
			cm.gainMeso(+1200000);
			cm.gainDY(1200)//����ȯ
			cm.gainNX(1000)//
			cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��120�������߽��������120W + ��Ѻ��1200 + 1000��ȯ.");
            cm.dispose();
        } else if (selection == 4) {
			cm.gainItem(2049116, 20);//ƯƯ��ĵ���
			cm.gainDY(1800)//����ȯ
			//cm.gainNX(1000)//
			cm.gainMeso(+1800000);
			cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��180�������߽��������180W+��Ѻ��1800+�����20��");
            cm.dispose();
        } else if (selection == 5) {
			cm.gainItem(2340000, 20);//ƯƯ��ĵ���
			cm.gainDY(2400)//����ȯ
			cm.gainMeso(+2400000);
			cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��240�������߽��������240W+��Ѻ��2400+ף����20��");
            cm.dispose();
        } else if (selection == 6) {
			cm.gainItem(2000004,50)//������Ʊһ��
			cm.gainItem(4001017,1)//
			cm.gainDY(4200)//����ȯ500
			//cm.gainNX(5000)//
			cm.gainMeso(+15000000);
			cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��300�������߽�������Ѻ��4200+����ҩˮ50��+���1500W");
            cm.dispose();
        } else if (selection == 7) {
            cm.gainItem(2010006,1)//������Ʊһ��
			cm.gainDY(3600)//����ȯ500
			//cm.gainNX(5000)//
			cm.gainMeso(+10000000);
			cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��360�������߽��������1000W+��Ѻ��3600+����1��");
            cm.dispose();
        } else if (selection == 8) {
            cm.gainItem(4251202,1);//���
            cm.gainItem(2002031,2);//
            cm.gainItem(2000019,80);			
			cm.gainNX(5000);//����ȯ500
			cm.gainMeso(+20000000);
			//cm.gainNX(5000)//
		//	cm.gainMeso(+3600000);
			cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��420�������߽��������2000W+���5000+����ҩˮ80��+�ߵ����ˮ��1��+��ݮ����2��");
            cm.dispose();
		}
    }
}


