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
            text += "#e#d���!��������걾����!#v3994093#����۸�Ϊ#r200��#dð�ձ�.\r\n���ܵ������۸�Ϊ#r200��#dð�ձҡ��۸��и�����������������ٺ٣�\r\n"//3
            text += "#L1##e#k#v4031975#����#v3994093##l\r\n"//3
            text += "#L2##e#k#v4031975#����#v3994093##l\r\n"//3
            //text += "#L4##e#d#v4031975#�ƽ��Ҷϵ��#l\r\n"//3
            //text += "#L5##e#d#v4031975#��������ϵ��#l\r\n"//3
            //text += "#L6##e#d#v4031975#��������ϵ��#l\r\n"//3
            //text += "#L7##e#d#v4031975#��������ϵ��#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9209005, 1);
        } else if (selection == 2) {
		cm.openNpc(9209005, 2);
        } else if (selection == 3) {
		cm.openNpc(9000018, 2);
        } else if (selection == 4) {
		cm.openNpc(9000018, 3);
        } else if (selection == 5) {
		cm.openNpc(9000018, 4);
        } else if (selection == 6) {
		cm.openNpc(9000018, 5);
        } else if (selection == 7) {
		cm.openNpc(9000018, 6);
	}
    }
}


