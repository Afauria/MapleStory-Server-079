function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
      cm.sendNext("�������ˣ��綼���˳Թ���ˣ���");
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
            text += " \t\t     #e��ӭ����#r����ʢ��#n\r\n"
            
            //text += "\t\t\t#e#d��ǰ����ʱ�䣺" + cm.getGamePoints() + "���ӣ�#k#n\r\n"
            
            //text += "\t#e#d�˻���ʣ����" + cm.getNX(1) + "#k\tʣ����þ�" + cm.getNX(2) + "#k#n\r\n"#L2#�ϳ�ˮ��#l#L3#�ϳɿ�ʯ#l#L4#�ϳɱ�ʯ#l
            
          //  text += "    #L1#����ѫ��(#v4170007##v4170001#��������߸�������ո���)#l\r\n\r\n"
			
			//text += "    #L2#�����һ�#l#L9#�Ϲ����Ž�ָ����#l\r\n\r\n"
			
			text += "    #L3#��ʳС��#l#L4#����ȫϯ#l#L5#�㻨Ǯ#l\r\n\r\n"
			
			//text += "    #L5#Ѫ�ºϳ�#l\r\n\r\n"
			
			//text += "    #L4#��������#l\r\n\r\n"
			
            
            cm.sendSimple(text);
        } else if (selection == 1) {
            cm.openNpc(9900004, 5111);

        } else if (selection == 2) {
            cm.openNpc(9900004, 5121);

        } else if (selection == 3) {
            cm.openNpc(9900004, 1688);

        } else if (selection == 4) {
            cm.openNpc(9900004, 1689);

        } else if (selection == 5) {
            cm.openNpc(9900004, 1690);
			
			} else if (selection == 9) {
            cm.openNpc(9010000, 0);
        }
    }
}