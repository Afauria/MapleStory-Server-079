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
            text += " \t\t\t  #e#d��ӭ����#r����ð�յ�#k#n\r\n"
            //text += "#L1#���ʲ�ѯ#l\t#L2#��ʯ�ϳ�#l\t#L3#ÿ������#l\t#L4#�����̳�#l\r\n"
            text += "#L1005#�����¼�#l#L1006#���ر���#l#L1007#���ط�Ӧ��#l#L1008#���ش��͵�#l\r\n"
            if (cm.getPlayer().isGM()) {
                text += " \t\t#r���¹��ܣ�������Ա�ɼ�����ͨ��ҿ�����\r\n"
                text += "#L1000#��ݴ���#l\t#L1001#����תְ#l\r\n"
                text += "#L1002#ˢ�µ�ǰ��ͼ#l#L1003#ˢ�¸���״̬#l\r\n"
                text += "#L1005#�����¼�#l#L1006#���ر���#l#L1007#���ط�Ӧ��#l#L1008#���ش��͵�#l\r\n"
                text += "#L1009#��������#l#L1010#�����̵�#l\r\n"
            }
            cm.sendSimple(text);
        } else if (selection == 1) {
            cm.openNpc(9900004, 1);

        } else if (selection == 2) {
            cm.openNpc(2020000, 0);

        } else if (selection == 3) {
            cm.openNpc(9010009, 0);

        } else if (selection == 4) {
            cm.openNpc(9900004, 4);

        } else if (selection == 5) {
            cm.openNpc(9900004, 5);

        } else if (selection == 6) {
            cm.openNpc(9900004, 6);

        } else if (selection == 7) {
            cm.openNpc(9900004, 7);

        } else if (selection == 8) {
            cm.openNpc(9900004, 8);

        } else if (selection == 9) {
            cm.openNpc(9900004, 9);

        } else if (selection == 10) {
            cm.openNpc(9900004, 10);

        } else if (selection == 11) {
            cm.openNpc(9900004, 11);

        } else if (selection == 12) {
            cm.openNpc(9900004, 12);

        } else if (selection == 13) {
            cm.openNpc(9900004, 13);

        } else if (selection == 14) {
            cm.openNpc(9900004, 14);

        } else if (selection == 15) {
            cm.openNpc(9900004, 15);

        } else if (selection == 16) {
            cm.openNpc(9900004, 16);

        } else if (selection == 17) {
            cm.openNpc(9900004, 17);

        } else if (selection == 18) {
            cm.openNpc(9900004, 18);

        } else if (selection == 19) {
            cm.openNpc(9900004, 19);

        } else if (selection == 20) {
            cm.openNpc(9900004, 20);

        } else if (selection == 21) {
            cm.openNpc(9900004, 21);

        } else if (selection == 22) {
            cm.openNpc(9900004, 22);

        } else if (selection == 23) {
            cm.openNpc(9900004, 23);

        } else if (selection == 24) {
            cm.openNpc(9900004, 24);

        } else if (selection == 25) {
            cm.openNpc(9900004, 25);

        } else if (selection == 26) {
            cm.openNpc(9900004, 26);

        } else if (selection == 27) {
            cm.openNpc(9900004, 27);

        } else if (selection == 28) {
            cm.openNpc(9900004, 28);

        } else if (selection == 29) {
            cm.openNpc(9900004, 29);

        } else if (selection == 30) {
            cm.openNpc(9900004, 30);

        } else if (selection == 31) {
            cm.openNpc(9900004, 31);

        } else if (selection == 32) {
            cm.openNpc(9900004, 32);

        } else if (selection == 33) {
            cm.openNpc(9900004, 33);

        } else if (selection == 34) {
            cm.openNpc(9900004, 34);

        } else if (selection == 35) {
            cm.openNpc(9900004, 35);

        } else if (selection == 36) {
            cm.openNpc(9900004, 36);

        } else if (selection == 37) {
            cm.openNpc(9900004, 37);

        } else if (selection == 38) {
            cm.openNpc(9900004, 38);

        } else if (selection == 39) {
            cm.openNpc(9900004, 39);

        } else if (selection == 40) {
            cm.openNpc(9900004, 40);

        } else if (selection == 1000) {//
            cm.openNpc(9900004, 1000);

        } else if (selection == 1001) {//
            cm.openNpc(9900004, 1001);

        } else if (selection == 1002) {//
            cm.ˢ�µ�ͼ();
            cm.dispose();
        } else if (selection == 1003) {//
            cm.ˢ��״̬();
            cm.dispose();
        } else if (selection == 1004) {//
            cm.gainItem(5211047, 1, 1);//���ʵ�����
            cm.dispose();
        } else if (selection == 1005) {//
            cm.�����¼�();
            cm.dispose();
        } else if (selection == 1006) {//
            cm.���ر���();
            cm.dispose();
        } else if (selection == 1007) {//
            cm.���ط�Ӧ��();
            cm.dispose();
        } else if (selection == 1008) {//
            cm.���ش��͵�();
            cm.dispose();
        } else if (selection == 1009) {//
            cm.��������();
            cm.dispose();
        } else if (selection == 1010) {//
            cm.�����̵�();
            cm.dispose();
        }
    }
}
