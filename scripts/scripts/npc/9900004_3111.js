function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			//��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
            text += "�����ǽ��и��ָ����һ���Ŀ���ͨ����������Ҫ�һ�ʲô��\r\n\r\n"//3
            //text += "#L1##r�����������Ϲ����Ž�ָ#k>>>>>>>>>#bͨ��1#l\r\n\r\n"//3
            text += "#L2##r#v4031456#�һ�60%����\r\n\r\n"//3
            text += "#L3##r#v4031456#�һ�10%����\r\n\r\n"//3		
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9000017, 0);
        } else if (selection == 2) {
		cm.openNpc(9900004, 31111);
        } else if (selection == 3) {
		cm.openNpc(9900004, 31112);		
	}
    }
}


