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
            text += "��������Ʊ�һ�����Ŀ���ͨ����������Ҫ�һ�ʲô���᣿\r\n\r\n"//3
            text += "#L1#�һ�#v2043001#60%����\t        ��Ҫ��#v4002000#X10��\r\n\r\n"//3
            text += "#L2#�һ�#v2043002#10%����\t        ��Ҫ��#v4002000#X5��\r\n\r\n"//3
            text += "#L3#�һ�#v2340000#ף������\t    ��Ҫ��#v4002000#X20��\r\n\r\n"//3		
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9900004, 31121);
        } else if (selection == 2) {
		cm.openNpc(9900004, 31122);
        } else if (selection == 3) {
		cm.openNpc(9900004, 31123);		
	}
    }
}


