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
            text += " \t\t\t  #e#d#r��ӭ����װ������ϵͳ#k#n\r\n"

            text += "\t\t\t#e#d��ǰ����ʱ�䣺" + cm.getGamePoints() + "���ӣ�#k#n\r\n"

            text += "\t#e#d�˻���ʣ����" + cm.getNX(1) + "#k\tʣ����þ�" + cm.getNX(2) + "#k#n\r\n"

            text += " #L1##r#e�ӻ��̵�#l           \r\n" 
			text += " #L3##b#e����ר��#l           \r\n"
			text += " #L5##r#eװ������#l            \r\n" 
			text += " #L6##r#e�弶����#l            \r\n"
			//text += " #L7##b#e120��Ѱ������#l      #L8##b#e79���Ͻ��Ҷ��#l \r\n" 
			  
			
			cm.sendSimple(text);
			
		} else if (selection == 1) {//�ӻ��̵�
            cm.openShop(30);
            cm.dispose();
			
		} else if (selection == 9) {//����̵�
            cm.openShop(86);
            cm.dispose();	
        
		} else if (selection == 2) {//43����Ҷ����
            cm.openShop(1);
            cm.dispose();

        } else if (selection == 3) {//���ڹ���
            cm.openShop(10000006);
            cm.dispose();

        } else if (selection == 4) {//79���Ͻ��Ҷ����
            cm.openShop(4);
            cm.dispose();
			
			} else if (selection == 5) {//�弶��װ
            cm.openShop(32);
            cm.dispose();
			
			} else if (selection == 6) {
				cm.sendNext("�ڴ�����");
				cm.dispose();
            //cm.openShop(9310001);
            //cm.dispose();

        } else if (selection == 7) {
            cm.openShop(8);
            cm.dispose();
			
        } else if (selection == 8) {
           cm.openShop(9);
            cm.dispose();
        }
    }
}
