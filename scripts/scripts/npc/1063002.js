function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += " \t\t\t  #e#d��ӭ����#r���������#k#n\r\n"

           // text += "\t\t\t#e#d��ǰ����ʱ�䣺" + cm.getGamePoints() + "���ӣ�#k#n\r\n"

       //     text += "\t#e#d�˻���ʣ����" + cm.getNX(1) + "#k\tʣ����þ�" + cm.getNX(2) + "#k#n\r\n"

            text += " #L2#10�����ϣ���ȡ��˯��������(��ȡ��ɺ�ص������г�-ÿ��5��)#l\r\n\r\n"
			//text += " #L1#���߽���#l#L55##r��ʯVIPר����ͼ(Ӳͨ����������)#k#l\r\n\r\n"
		//	text += " #L3#ÿ������#l\r\n\r\n"229010000
			//text += " #L4#��������#l\r\n\r\n"
		//	text += " #L6#ÿ�մ���#l\r\n\r\n"
           // text += " #L5#��ȡǩ������#l \r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
            cm.openNpc(9900004, 1111);

			 } else if (selection == 7) {
            cm.openNpc(9900004, 132);
			
			 } else if (selection == 55) {
				 
			if (!cm.haveItem(1142145, 1)) {
 cm.sendOk("��������VIP�޷�����ר��������ͼ~\r\n(PS����Ա���VIPѫ�·Ž������ٵ��ң�)");
                cm.dispose();

			}else if (cm.getPlayerCount(229000100) > 0){
	            cm.sendOk("�������Ѿ���������ս�ˣ��뻻�߻��ߵȻ��ٽ���");
                cm.dispose();
			}else{
				cm.warpParty(229000100);
				cm.dispose();
                return;
	      }
				 
					
				
        } else if (selection == 2) {
				if (cm.getBossLog('ÿ������') >= 5) {//��ȡ���ǩ��״̬
				cm.sendOk("������������5��!");
			cm.dispose();
			} else {
                cm.setBossLog('ÿ������');//����ǩ������
             
                cm.sendOk("��ϲ��ȡ�ɹ���");
				
              //  cm.gainMeso(100000000);//1E
				cm.gainItem(2022468,20);//�����
				
				cm.gainNX(20000);
				cm.gainItem(2340000,10);//ף��
				cm.gainItem(2049122,10);//����
				cm.gainItem(4310149,2);
				
				cm.warp(910000000);
				cm.����(1, "[ÿ������]��" + cm.getPlayer().getName() + "��÷������");
                cm.dispose();
           
            }
            // cm.openNpc(9900004, 1112);

        } else if (selection == 3) {
            cm.openNpc(9010009, 0);

        } else if (selection == 4) {
            cm.openNpc(9900004, 1114);

       } else if (selection == 5) {
            if (cm.getBossLog("vipqiandao3") == 0 && cm.haveItem(1142145, 1)) {//��ȡ���ǩ��״̬
                cm.setBossLog('vipqiandao3');//����ǩ������
                cm.getPlayer().gainqiandao(1);
                cm.sendOk("��ϲǩ���ɹ���");
				//cm.gainDY(3000)
				cm.gainMeso(100000000);
				cm.gainItem(4000463, 4);
				cm.gainItem(4000487, 2);
				cm.gainItem(2340000,6);//ף��2022468
				cm.gainItem(2049122,2);//����
				cm.gainItem(2022468,5);
                cm.����(1, "[VIPǩ��]��" + cm.getPlayer().getName() + "�������ѳɹ�ǩ������1E��Ϸ��+ �����4��+ ף����6��+��Ӱ��2��+�������2�� ��ǰ��ǩ������Ϊ��" + cm.getPlayer().getqiandao() + "��.");
                cm.dispose();
            } else {
                cm.sendOk("��������ǩ�����ˣ�");
                cm.dispose();
            }
			
        } else if (selection == 6) {
            cm.openNpc(9900004, 1113);
        }
    }
}
