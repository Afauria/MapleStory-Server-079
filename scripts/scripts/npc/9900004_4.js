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
            text += " \t\t     #e#d�������������������װ��Ŷ#n\r\n"
            
            //text += "\t\t\t#e#d��ǰ����ʱ�䣺" + cm.getGamePoints() + "���ӣ�#k#n\r\n"
            
            //text += "\t#e#d�˻���ʣ����" + cm.getNX(1) + "#k\tʣ����þ�" + cm.getNX(2) + "#k#n\r\n"#L4#�ϳ�ˮ��#l
            
            text += "    #L1#�Ϲ�����#l#L2#���崴��#l#L3#��������#l\r\n\r\n"
			
			text += "    #L5#�ƽ��Ҷ����#l#L6#��������#l#L7#120��������#l#L8#�ȴ����#l\r\n\r\n"
			
			
            
            cm.sendSimple(text);
        } else if (selection == 1) {
            cm.openNpc(9010000, 0);

        } else if (selection == 2) {
            cm.openNpc(2010007, 0);

        } else if (selection == 3) {
            cm.openNpc(2007, 0);

        } else if (selection == 4) {
            cm.openNpc(9900004, 5114);

        } else if (selection == 5) {
            cm.openNpc(9900004, 1001);
			
		} else if (selection == 6) {
            cm.openNpc(9900004, 901);

        } else if (selection == 7) {
             cm.openNpc(9900004, 401);

        } else if (selection == 8) {
           

        } else if (selection == 9) {
            

        } else if (selection == 10) {
            
	
	    
        }
    }
}