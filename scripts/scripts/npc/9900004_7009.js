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
            text += " \t\t\t  #e#d#r��ӭ����С��ð�յ�����װ��ϵͳ#k#n\r\n"

            text += "\t\t\t#e#d��ǰ����ʱ�䣺" + cm.getGamePoints() + "���ӣ�#k#n\r\n"

            text += "\t#e#d�˻���ʣ����" + cm.getNX(1) + "#k\tʣ����þ�" + cm.getNX(2) + "#k#n\r\n"

            text += " #L1##r#e����������װ#l       #L2#������������#l\r\n" 
			text += " #L3##b#e����Ѱ����#l         #L4##b#e����ʨ����#l\r\n"
			text += " #L5##r#e������ɫ����#l       #L6##r#e��������������#l \r\n" 
			text += " #L7##b#e��������װ��#l       #L8##b#e�����޽�����#l \r\n"
			
			cm.sendSimple(text);
			
		} else if (selection == 1) {
            cm.openNpc(9900004, 7010);
        
		} else if (selection == 2) {
            cm.openNpc(9900004, 7011);

        } else if (selection == 3) {
            cm.openNpc(9900004, 7012);

        } else if (selection == 4) {
            cm.openNpc(9900004, 7013);
			
			} else if (selection == 5) {
            cm.openNpc(9900004, 7014);
			
			} else if (selection == 6) {
            cm.openNpc(9900004, 7015);

        } else if (selection == 7) {
            cm.openNpc(9900004, 7016);
			
        } else if (selection == 8) {
            cm.openNpc(9900004, 7017);
        }
    }
}
