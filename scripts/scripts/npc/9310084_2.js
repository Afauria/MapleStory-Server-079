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
            text += "#e#r�����ǹ̶����������һ���.ͨ�ظ�������õĸ��������ۼƿɶһ���ǰ�����̶�����.�����鿴.\r\n\r\n"//3			
            text += "#L1##e#d#v4170013#����  �������̶�����#l\r\n"//3
            text += "#L2##e#d#v4170002#����  �������̶�����#l\r\n"//3
            text += "#L3##e#d#v4170005#���  �������̶�����#l\r\n"//3
          //  text += "#L5##e#d#v4170009#����  �������̶�����#l\r\n"//3
          //  text += "#L7##e#d#v4170006#���  �������̶�����#l\r\n"//3
            text += "#L4##e#d#v4170017#����ŷ�������̶�����#l\r\n"//3
            text += "#L6##e#d#v4170001#����  �������̶�����#l\r\n"//3
		//	text += "#L8##e#d#v4002000#����ţ��Ʊ�һ�����������������#l\r\n"//3
		//	text += "#L9##e#d#v4002001#����ţ��Ʊ�һ�����߸���������#l\r\n"//3
		//	text += "#L10##e#d#v4002003#��ˮ����Ʊ�һ���������������#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9310084, 21);
        } else if (selection == 2) {
		cm.openNpc(9310084, 22);
        } else if (selection == 3) {
		cm.openNpc(9310084, 23);
        } else if (selection == 4) {
		cm.openNpc(9310084, 24);
        } else if (selection == 5) {
		cm.openNpc(9310084, 25);
        } else if (selection == 6) {
		cm.openNpc(9310084, 26);
        } else if (selection == 7) {
		cm.openNpc(9310084, 7);
		} else if (selection == 8) {
		cm.openNpc(9310084, 8);
		} else if (selection == 9) {
		cm.openNpc(9310084, 9);
		} else if (selection == 10) {
		cm.openNpc(9310084, 10);
        } else if (selection == 26) {
		cm.openNpc(9310084, 13);
	}
    }
}


