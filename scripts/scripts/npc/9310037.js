function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

     cm.sendNext("��δ����VIPϵͳŶ");
     cm.dispose();

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
            text += " \t\t\t#e#d��ӭ����#rVIPϵͳ����#k#n\r\n"

            text += "\t\t\t#e#d��ǰ����ʱ�䣺" + cm.getGamePoints() + "����#k#n\r\n\r\n"
                 
			//text += "\t\t\t\t#e#r1���ñ�=1��ֵ��#v4031039#   \r\n\r\n"  				   
           
            text += " #r#L1#�¿�����#k#l #L10#ϡ�з���#l #L12#����Ч��#l \r\n"            
			//text += " #L12#����Ч��#l  \r\n"
			
		//	text += " #L3#ÿ������#l\r\n\r\n"#L13#VIP��ָ����HP/MP��#l#r#L14#�񼶾���#l
			//text += " #L4#��������#l\r\n\r\n"
			//text += " #L6#ÿ�մ���#l\r\n\r\n"

           // text += " #L5#��ȡǩ������#l \r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
            cm.openNpc(9900004, 1009);
			
		} else if (selection == 10) {
            cm.openNpc(9900004, 1010);	
			
		} else if (selection == 11) {
            cm.openNpc(9900004, 1011);	

		} else if (selection == 12) {
            cm.openNpc(9900004, 1012);

		} else if (selection == 13) {
            cm.openNpc(9900004, 1013);

		} else if (selection == 14) {
            cm.openNpc(9900004, 1023);		

        } else if (selection == 3) {
            if (cm.getBossLog("vipqiandao1") == 0 && cm.haveItem(3700149, 1)) {//��ȡ���ǩ��״̬
                cm.setBossLog('vipqiandao1');//����ǩ������
                cm.getPlayer().gainqiandao(1);
                cm.sendOk("��ϲǩ���ɹ���");
				//cm.gainDY(3000)
				cm.gainMeso(+10000000);//���
				cm.gainNX(+10000);
                cm.����(1, "[VIPǩ��]��" + cm.getPlayer().getName() + "�������ѳɹ�ǩ�������+1000W����ȯ+1W.��ǰ��ǩ������Ϊ��" + cm.getPlayer().getqiandao() + "��.");
                cm.dispose();
            } else {
                cm.sendOk("��������ǩ�����ˣ�");
                cm.dispose();
            }
            // cm.openNpc(9900004, 1112);
        } else if (selection == 4) {
            if (cm.getBossLog("vipqiandao2") == 0 && cm.haveItem(3700150, 1)) {//��ȡ���ǩ��״̬
                cm.setBossLog('vipqiandao2');//����ǩ������
                cm.getPlayer().gainqiandao(1);
                cm.sendOk("��ϲǩ���ɹ���");
				//cm.gainDY(3000)
				cm.gainMeso(10000000);
				cm.gainItem(4000463, 2);
				cm.gainItem(2340000,4);//ף��
                cm.����(1, "[VIPǩ��]��" + cm.getPlayer().getName() + "�������ѳɹ�ǩ������1000W��Ϸ��+ �����2��+ ף����4��.��ǰ��ǩ������Ϊ��" + cm.getPlayer().getqiandao() + "��.");
                cm.dispose();
            } else {
                cm.sendOk("��������ǩ�����ˣ�");
                cm.dispose();
            }
			
			
			
        } else if (selection == 3) {
            cm.openNpc(9900004, 31);

        } else if (selection == 4) {
            cm.openNpc(9900004, 1114);

        } else if (selection == 5) {
            cm.openNpc(9900004, 1112);
			
        } else if (selection == 6) {
            cm.openNpc(9900004, 1113);
        }
    }
}
