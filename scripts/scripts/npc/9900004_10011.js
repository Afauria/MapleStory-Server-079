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
            text += "#e#r��ã�����������԰�������������Ҫ���������������ҿ���Ϊ�������������б�.\r\n\r\n#b�ƽ��Ҷ������������������#r+9#bŶ\r\n\r\n"//3
            text += "#L1##e#d#v1302142##z1302142#�ƽ��Ҷ���ֽ�����.\r\n"//3
            text += "#L2##e#d#v1332114##z1332114#�ƽ��Ҷ�̵�����#l\r\n"//3
            text += "#L3##e#d#v1372071##z1372071#�ƽ��Ҷ��������#l\r\n"//3
            text += "#L4##e#d#v1382093##z1382093#�ƽ��Ҷ��������#l\r\n"//3
            text += "#L5##e#d#v1402085##z1402085#�ƽ��Ҷ˫�ֽ�����#l\r\n"//3
            text += "#L6##e#d#v1432075##z1432075#�ƽ��Ҷǹ����#l\r\n"//3
            text += "#L7##e#d#v1442104##z1442104#�ƽ��Ҷ��ɽ������#l\r\n"//3
            text += "#L8##e#d#v1452100##z1452100#�ƽ��Ҷ������#l\r\n"//3
            text += "#L9##e#d#v1462085##z1462085#�ƽ��Ҷ������#l\r\n"//3
            text += "#L10##e#d#v1472111##z1472111#�ƽ��Ҷȭ������#l\r\n"//3
            text += "#L11##e#d#v1312056##z1312056#�ƽ��Ҷ���ָ�����#l\r\n"//3
            text += "#L12##e#d#v1322084##z1322084#�ƽ��Ҷ���ִ�����#l\r\n"//3
            text += "#L13##e#d#v1412055##z1412055#�ƽ��Ҷ˫�ָ�����#l\r\n"//3
            text += "#L14##e#d#v1422057##z1422057#�ƽ��Ҷ˫�ִ�����#l\r\n"//3
            text += "#L15##e#d#v1482073#�ƽ��Ҷָ������#l\r\n"//3
            text += "#L16##e#d#v1492073##z1492073#�ƽ��Ҷ��ǹ����#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9900004, 60);
        } else if (selection == 2) {
		cm.openNpc(9900004, 61);
        } else if (selection == 3) {
		cm.openNpc(9900004, 62);
        } else if (selection == 4) {
		cm.openNpc(9900004, 63);
        } else if (selection == 5) {
		cm.openNpc(9900004, 64);
        } else if (selection == 6) {
		cm.openNpc(9900004, 65);
        } else if (selection == 7) {
		cm.openNpc(9900004, 66);
        } else if (selection == 8) {
		cm.openNpc(9900004, 67);
        } else if (selection == 9) {
		cm.openNpc(9900004, 68);
        } else if (selection == 10) {
		cm.openNpc(9900004, 69);
        } else if (selection == 11) {
		cm.openNpc(9900004, 70);
        } else if (selection == 12) {
		cm.openNpc(9900004, 72);
        } else if (selection == 13) {
		cm.openNpc(9900004, 73);
        } else if (selection == 14) {
		cm.openNpc(9900004, 74);
        } else if (selection == 15) {
		cm.openNpc(9900004, 75);
        } else if (selection == 16) {
		cm.openNpc(9900004, 76);
	}
    }
}


