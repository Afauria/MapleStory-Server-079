/*
 By ����
 */

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            var Editing = false //true=��ʾ;false=��ʼ�
            if (Editing) {
                cm.sendOk("��ͣ����");
                cm.dispose();
                return;
            }
            cm.sendSimple("#b��ӭ��� #r#h ##k ,��֪������������ÿ�ξٰ������ûƽ���������������һ�������Ʒ�һ���" +
                    "#k\r\n#L101##r�ƽ���#i4032226##bx20#r��#b�����˴� #i3010054#\r\n#L102##r�ƽ���#i4032226##bx2#r��#b�ӳֵ���(�ӹ���)#i2022483#x1\r\n#L103##r�ƽ���#i4032226##bx1#r��#b�ӳֵ���(������)#i2022484#x1\r\n#L104##r�ƽ���#i4032226##bx1#r��#b�ӳֵ���(����Ծ)#i2022485#x1\r\n#L105##r�ƽ���#i4032226##bx1#r��#b�ӳֵ���(�ӻر�)#i2022486#x1\r\n#L106##r�ƽ���#i4032226##bx1#r��#b�ӳֵ���(������)#i2022487#x1");
        } else if (status == 1) {

            if (selection == 101) {
                if (cm.haveItem(4032226, 20)) {
                    cm.gainItem(4032226, -20);
                    cm.gainItem(3010054, 1);
                    cm.sendOk("���#i3010054#");
                    cm.dispose();
                } else {
                    cm.sendOk("������û���㹻��#i4032226#,���ڴ�ȷ��");
                    cm.dispose();
                }
            } else if (selection == 102) {
                if (cm.haveItem(4032226, 2)) {
                    cm.gainItem(4032226, -2);
                    cm.gainItem(2022483, 1);
                    cm.sendOk("���#i2022483#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��#i4032226#,���ڴ�ȷ��");
                    cm.dispose();
                }
            } else if (selection == 103) {
                if (cm.haveItem(4032226, 1)) {
                    cm.gainItem(4032226, -1);
                    cm.gainItem(2022484, 1);
                    cm.sendOk("���#i2022484#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��#i4032226#,���ڴ�ȷ��");
                    cm.dispose();
                }
            } else if (selection == 104) {
                if (cm.haveItem(4032226, 1)) {
                    cm.gainItem(4032226, -1);
                    cm.gainItem(2022485, 1);
                    cm.sendOk("���#i2022485#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��#i4032226#,���ڴ�ȷ��");
                    cm.dispose();
                }
            } else if (selection == 105) {
                if (cm.haveItem(4032226, 1)) {
                    cm.gainItem(4032226, -1);
                    cm.gainItem(2022486, 1);
                    cm.sendOk("���#i2022486#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��#i4032226#,���ڴ�ȷ��");
                    cm.dispose();
                }
            } else if (selection == 106) {
                if (cm.haveItem(4032226, 1)) {
                    cm.gainItem(4032226, -1);
                    cm.gainItem(2022487, 1);
                    cm.sendOk("���#i2022487#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��#i4032226#,���ڴ�ȷ��");
                    cm.dispose();
                }
            } else if (selection == 107) {
                if (cm.haveItem(4032226, 1)) {
                    cm.gainItem(4032226, -1);
                    cm.gainItem(2022488, 1);
                    cm.sendOk("���#i2022488#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��#i4032226#,���ڴ�ȷ��");
                    cm.dispose();
                }
            } else if (selection == 108) {
                if (cm.haveItem(4032226, 20)) {
                    cm.gainItem(4032226, -20);
                    cm.gainItem(2022489, 1);
                    cm.sendOk("���#i2022489#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��#i4032226#,���ڴ�ȷ��");
                    cm.dispose();
                }
            } else if (selection == 109) {
                if (cm.haveItem(4032226, 20)) {
                    cm.gainItem(4032226, -20);
                    cm.gainItem(2022490, 1);
                    cm.sendOk("���#i2022490#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��#i4032226#,���ڴ�ȷ��");
                    cm.dispose();
                }
            }
        }
    }
}

	