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
            text += " \t\t\t  #e#d��ӭ����#rð�յ�����#k#n\r\n"

            text += "\t\t\t#e#d��ǰ����ʱ�䣺" + cm.getGamePoints() + "���ӣ�#k#n\r\n"

            text += "\t#e#d�˻���ʣ����" + cm.getNX(1) + "#k\tʣ����þ�" + cm.getNX(2) + "#k#n\r\n"

            text += " #L2#ÿ��ǩ��#l #L5##r��ʯVIPǩ��#k#l\r\n\r\n"
		//	text += " #L1#���߽���#l\r\n\r\n"
		//	text += " #L3#ÿ������#l\r\n\r\n"
			//text += " #L4#��������#l\r\n\r\n"
			text += " #L6#ÿ�մ���#l\r\n\r\n"
        //    text += " #L5#��ȡǩ������#l \r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
            cm.openNpc(9900004, 1111);

        } else if (selection == 2) {
            if (cm.getBossLog("qiandao") == 0) {//��ȡ���ǩ��״̬
                cm.setBossLog('qiandao');//����ǩ������
                cm.getPlayer().gainqiandao(1);
                cm.sendOk("��ϲǩ���ɹ���");
				//cm.gainDY(1000)
                cm.gainMeso(50000000);
				cm.gainItem(2010006,1);
				cm.gainItem(2340000,2);//ף��
				cm.gainItem(2022468,10);
				cm.spawnMonster(9300340,1);
				//cm.gainvip(+2);//�ƹ��ȼ�
				cm.����(1, "[ÿ��ǩ��]��" + cm.getPlayer().getName() + "�������ѳɹ�ǩ��.ÿ�յ����������ˣ�����");
                cm.dispose();
            } else {
                cm.sendOk("��������ǩ�����ˣ�");
                cm.dispose();
            }
            // cm.openNpc(9900004, 1112);

        } else if (selection == 3) {
            cm.openNpc(9010009, 0);

        } else if (selection == 4) {
            cm.openNpc(9900004, 1114);

       } else if (selection == 5) {
            if (cm.getBossLog("vipqiandao3") == 0 && cm.haveItem(3700148, 1)) {//��ȡ���ǩ��״̬
                cm.setBossLog('vipqiandao3');//����ǩ������
                cm.getPlayer().gainqiandao(1);
                cm.sendOk("��ϲǩ���ɹ���");
				//cm.gainDY(3000)
				cm.gainMeso(100000000);
				cm.gainItem(2010006,4);//����
				cm.gainItem(2340000,6);//ף��
				cm.gainItem(2022468,10);
				cm.spawnMonster(9300340,1);
                cm.����(1, "[VIPǩ��]��" + cm.getPlayer().getName() + "�������ѳɹ�ǩ������1E���+ ����4��+ ף����6��+��������10����ÿ�յ����������ˣ�����");
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
