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
            text += " \t  #e#d�����������������������ǿ���װ��Ŷ��#n\r\n"
            
            //text += "\t\t\t#e#d��ǰ����ʱ�䣺" + cm.getGamePoints() + "���ӣ�#k#n\r\n"
            
            //text += "\t#e#d�˻���ʣ����" + cm.getNX(1) + "#k\tʣ����þ�" + cm.getNX(2) + "#k#n\r\n"
            
            text += "          \t#L1#Ѫɫ���#l\t#L2#ð��֮��#l\r\n\r\n\t#L3#��������#l\t#L4#���ս�ָ#l\t#L5#���ն���#l\r\n\r\n"
            
            cm.sendSimple(text);
        } else if (selection == 1) {
            cm.openNpc(9900004, 6111);

        } else if (selection == 2) {
            cm.openNpc(9900004, 6112);

        } else if (selection == 3) {
            cm.openNpc(9900004, 6113);

        } else if (selection == 4) {
            cm.openNpc(9900004, 6114);

        } else if (selection == 5) {
            cm.openNpc(9900004, 6115);
        }
    }
}