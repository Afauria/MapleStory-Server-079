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
            text += " \t\t\t  #e#d#r��ӭ����ͯȤð�յ�װ���ϳ�ϵͳ#k#n\r\n"

            text += "\t\t\t#e#d��ǰ����ʱ�䣺" + cm.getGamePoints() + "���ӣ�#k#n\r\n"

            text += "\t#e#d�˻���ʣ����" + cm.getNX(1) + "#k\tʣ����þ�" + cm.getNX(2) + "#k#n\r\n"

            text += " #L1##r#e����ñ��#l       #L2#����Ь��#l\r\n" 
			//text += " #L3##b#e��������#l       #L4##b#e������ָ#l\r\n"
			//text += " #L5##r#e��������#l       #L6##r#e��������#l \r\n" 
			//text += " #L7##b#e��������#l       #L8##b#e��������#l \r\n"
			
			cm.sendSimple(text);
			
		} else if (selection == 1) {
            cm.openNpc(9110013, 1);
        
		} else if (selection == 2) {
            cm.openNpc(9110013, 2);

        } else if (selection == 3) {
            cm.openNpc(9110013, 3);

        } else if (selection == 4) {
            cm.openNpc(9110013, 4);
			
			} else if (selection == 5) {
            cm.openNpc(9110013, 5);
			
			} else if (selection == 6) {
            cm.openNpc(9110013, 6);

        } else if (selection == 7) {
            cm.openNpc(9110013, 7);
			
        } else if (selection == 8) {
            cm.openNpc(9110013, 8);
        }
    }
}
