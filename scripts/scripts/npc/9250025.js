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
        ��)#k#l\r\n\r\n"
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
