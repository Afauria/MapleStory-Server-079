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
            text += " \t\t     #e#d�����������һ�������ƷŶ#n\r\n"
            
          text += "\t\t\t#e#d��ǰ����ʱ�䣺" + cm.getGamePoints() + "���ӣ�#k#n\r\n"
            
          text += "\t#e#d�˻���ʣ����" + cm.getNX(1) + "#k\tʣ����þ�" + cm.getNX(2) + "#k#n\r\n"
			
			//text += "#r�һ�ǰ����ؼ�鱳���Ƿ��п�λ������ϵͳ���̸Ų�����#d\r\n"
			
			text += "#r�һ�ǰ����ؼ�鱳���Ƿ��п�λ������ϵͳ���̸Ų�����#d\r\n"
			
			//text += "#r�һ�ǰ����ؼ�鱳���Ƿ��п�λ������ϵͳ���̸Ų�����#d\r\n"
            
            text += "#L1#��Ҷ��һ�#l #L2#��Ʊ�һ�#l #L5#�سɱҹ���#l #L4#�سɱҶһ���#l\r\n\r\n"
            
            cm.sendSimple(text);
        } else if (selection == 1) {
            cm.openNpc(9900004, 3111);

        } else if (selection == 2) {
            cm.openNpc(9900004, 3112);

        } else if (selection == 3) {
            cm.openNpc(9900004, 3113);

        } else if (selection == 4) {
            cm.openNpc(9900004, 3114);

        } else if (selection == 5) {
            cm.openNpc(9900004, 82);
        }
    }
}