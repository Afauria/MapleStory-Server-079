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
            text += "#e#r��ã�ֻҪ����װ�����޾�����������������װ��.\r\n\r\n#bʹ��ʱ��:#r3Сʱʹ��Ȩ\r\n"//3
            text += "#L1##e#d��Ҫ����#v5220007#\t��Ҫ�����=200  ʱ��:3Сʱʹ��Ȩ#l\r\n\r\n"//3
            text += "#L2##e#d#v1302071#��ɫ������ӾȦ�����ֽ���  3Сʱʹ��Ȩ#l\r\n"//3
            text += "#L3##e#d#v1312034#��ɫ������ӾȦ�����ָ���  3Сʱʹ��Ȩ#l\r\n"//3
            text += "#L4##e#d#v1402041#��ɫ������ӾȦ��˫�ֽ���  3Сʱʹ��Ȩ#l\r\n"//3
            text += "#L5##e#d#v1432042#��ɫ������ӾȦ��ǹ��      3Сʱʹ��Ȩ#l\r\n"//3
            text += "#L6##e#d#v1442053#��ɫ������ӾȦ��ì��      3Сʱʹ��Ȩ#l\r\n"//3
            text += "#L7##e#d#v1382042#��ɫ������ӾȦ�����ȣ�    3Сʱʹ��Ȩ#l\r\n"//3
            text += "#L8##e#d#v1452048#��ɫ������ӾȦ������      3Сʱʹ��Ȩ#l\r\n"//3
            text += "#L9##e#d#v1462043#��ɫ������ӾȦ����      3Сʱʹ��Ȩ#l\r\n"//3
            text += "#L10##e#d#v1332059#��ɫ������ӾȦ���̵���    3Сʱʹ��Ȩ#l\r\n"//3
            text += "#L11##e#d#v1472058#��ɫ������ӾȦ��ȭ�ף�    3Сʱʹ��Ȩ#l\r\n"//3
            text += "#L12##e#d#v1492026#��ɫ������ӾȦ����ǹ��    3Сʱʹ��Ȩ#l\r\n"//3
            text += "#L13##e#d#v1482025#��ɫ������ӾȦ��ָ�ڣ�    3Сʱʹ��Ȩ#l\r\n"//3

            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9000018, 1);
        } else if (selection == 2) {
		cm.openNpc(9000018, 2);
        } else if (selection == 3) {
		cm.openNpc(9000018, 3);
        } else if (selection == 4) {
		cm.openNpc(9000018, 4);
        } else if (selection == 5) {
		cm.openNpc(9000018, 5);
        } else if (selection == 6) {
		cm.openNpc(9000018, 6);
        } else if (selection == 7) {
		cm.openNpc(9000018, 7);
        } else if (selection == 8) {
		cm.openNpc(9000018, 8);
        } else if (selection == 9) {
		cm.openNpc(9000018, 9);
        } else if (selection == 10) {
		cm.openNpc(9000018, 10);
        } else if (selection == 11) {
		cm.openNpc(9000018, 11);
        } else if (selection == 12) {
		cm.openNpc(9000018, 12);
        } else if (selection == 13) {
		cm.openNpc(9000018, 13);
	}
    }
}


