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
            text += " \t  #e#d��ӭ����#rľľð�յ�VIP�¿�ǩ������#k#n\r\n"

            text += "\t\t\t#e#d��ǰ����ʱ�䣺" + cm.getGamePoints() + "����#k#n\r\n"

            //text += " #L1#��ͨ���#l\r\n\r\n"
			//text += " #L2##e#b������ƣ�ÿ��ǩ����#l\r\n\r\n"
		    text += " #L3#������ƣ�ÿ��ǩ����#l\r\n\r\n"
			//text += " #L4#��������#l\r\n\r\n"
			//text += " #L6#ÿ�մ���#l\r\n\r\n"

        //    text += " #L5#��ȡǩ������#l \r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.getBossLog("1vipqiandao") == 0 && cm.haveItem(3700150, 1)) {//��ȡ���ǩ��״̬
                cm.setBossLog('1vipqiandao');//����ǩ������
                cm.getPlayer().gainqiandao(1);
                cm.sendOk("��ϲǩ���ɹ���");
				cm.gainItem(4031890,3);
				cm.gainItem(2340000,1);
				cm.gainMeso(1500000);
				cm.gainNX(3000);

				
                cm.����(1, "[ÿ��ǩ��]��" + cm.getPlayer().getName() + "�������ѳɹ�ǩ����ͨ��ƣ���ǰ��ǩ������Ϊ��" + cm.getPlayer().getqiandao() + "��.");
                cm.dispose();
            } else {
                cm.sendOk("��������ǩ�����ˣ�������û��VIP");
                cm.dispose();
            }

        } else if (selection == 2) {
            if (cm.getBossLog("2vipqiandao") == 0 && cm.haveItem(3700149, 1)) {//��ȡ���ǩ��״̬
                cm.setBossLog('2vipqiandao');//����ǩ������
                cm.getPlayer().gainqiandao(1);
                cm.sendOk("��ϲǩ���ɹ���");
				cm.gainMeso(1000000);
				cm.gainNX(1000);
				//cm.gainItem(2049116,2);
				//cm.gainItem(2340000,2);
				cm.����(1, "[ÿ��ǩ��]��" + cm.getPlayer().getName() + "�������ѳɹ�ǩ��������ƣ���ǰ��ǩ������Ϊ��" + cm.getPlayer().getqiandao() + "��.");
                cm.dispose();
            } else {
                cm.sendOk("��������ǩ�����ˣ�������û��VIP");
                cm.dispose();
            }
            // cm.openNpc(9900004, 1112);

        } else if (selection == 3) {
            if (cm.getBossLog("3vipqiandao") == 0 && cm.haveItem(3700148, 1)) {//��ȡ���ǩ��״̬
                cm.setBossLog('3vipqiandao');//����ǩ������
                cm.getPlayer().gainqiandao(1);
                cm.sendOk("��ϲǩ���ɹ���");
				cm.gainMeso(100000000);
				//cm.gainNX(3000);	
				cm.gainItem(2049116,5);
                cm.gainItem(2340000,5);
				cm.gainItem(5131000,5,1);
                cm.����(1, "[ÿ��ǩ��]��" + cm.getPlayer().getName() + "�������ѳɹ�ǩ��������Ա����ǰ��ǩ������Ϊ��" + cm.getPlayer().getqiandao() + "��.");
                cm.dispose();
            } else {
                cm.sendOk("��������ǩ�����ˣ�������û��VIP");
                cm.dispose();
	        }

        } else if (selection == 4) {
            cm.openNpc(9900004, 1114);

        } else if (selection == 5) {
            cm.openNpc(9900004, 1112);
			
        } else if (selection == 6) {
            cm.openNpc(9900004, 1113);
        }
    }
}
