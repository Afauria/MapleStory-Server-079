/*
 * 
 * @��֮��
 * ��������ϵͳ - ħ��˫��
 */
importPackage(net.sf.odinms.client);
var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            var txt1 = "#d#L1#�һ�#v2043002##z2043002#\t  ��Ҫ��#v4002000#X5��\r\n"//3��ɫ֮��\r\n";
            var txt2 = "#d#L2#�һ�#v2043102##z2043102#\t  ��Ҫ��#v4002000#X5��\r\n"//3��ɫ֮ì
            var txt3 = "#d#L3#�һ�#v2043202##z2043202#\t��Ҫ��#v4002000#X5��\r\n"//3��ɫ�и���
            var txt4 = "#d#L4#�һ�#v2043302##z2043302#\t    ��Ҫ��#v4002000#X5��\r\n"//3��ɫ˫�ֽ�
            var txt5 = "#d#L5#�һ�#v2043702##z2043702#\t    ��Ҫ��#v4002000#X5��\r\n"//3��ɫ��
            var txt6 = "#d#L6#�һ�#v2043802##z2043802#\t    ��Ҫ��#v4002000#X5��\r\n"//3��ɫȭ��
            var txt7 = "#d#L7#�һ�#v2044002##z2044002#\t  ��Ҫ��#v4002000#X5��\r\n"//3������ȭ
            var txt8 = "#d#L8#�һ�#v2044102##z2044102#\t  ��Ҫ��#v4002000#X5��\r\n"//3��ɫ����
            var txt9 = "#d#L9#�һ�#v2044202##z2044202#\t��Ҫ��#v4002000#X5��\r\n"//3��ɫ��ǹ	
            var txt10 = "#d#L10#�һ�#v2044302##z2044302#\t      ��Ҫ��#v4002000#X5��\r\n"//3��ɫ˫�ֽ�
            var txt11 = "#d#L11#�һ�#v2044402##z2044402#\t      ��Ҫ��#v4002000#X5��\r\n"//3��ɫ��
            var txt12 = "#d#L12#�һ�#v2044502##z2044502#\t      ��Ҫ��#v4002000#X5��\r\n"//3��ɫȭ��
            var txt13 = "#d#L13#�һ�#v2044602##z2044602#\t      ��Ҫ��#v4002000#X5��\r\n"//3������ȭ
            var txt14 = "#d#L14#�һ�#v2044702##z2044702#\t    ��Ҫ��#v4002000#X5��\r\n"//3��ɫ����
            var txt15 = "#d#L15#�һ�#v2044802##z2044802#\t   ��Ҫ��#v4002000#X5��\r\n"//3��ɫ��ǹ
            var txt16 = "#d#L16#�һ�#v2044902##z2044902#\t    ��Ҫ��#v4002000#X5��\r\n"//3��ɫ����
            var txt17 = "#d#L17#�һ�#v2040805##z2040805#\t    ��Ҫ��#v4002000#X10��\r\n"//3��ɫ��ǹ



            cm.sendSimple("�������#v4002000#��������������һ�10%����Ŷ������\r\n" + txt1 + "" + txt2 + "" + txt3 + "" + txt4 + "" + txt5 + "" + txt6 + "" + txt7 + "" + txt8 + "" + txt9 + "" + txt10 + "" + txt11 + "" + txt12 + "" + txt13 + "" + txt14 + "" + txt15 + "" + txt16 + "" + txt17 + "");
        } else if (status == 1) {
            if (selection == 1) {
                if (cm.haveItem(4002000, 5)) {
                    cm.gainItem(4002000, -5);
                    cm.gainItem(2043002, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[���ֽ���������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            } else if (selection == 2) { 
                if (cm.haveItem(4002000, 5)) {
                    cm.gainItem(4002000, -5);
                    cm.gainItem(2043102, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[���ָ���������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            } else if (selection == 3) {
                if (cm.haveItem(4002000, 5)) {
                    cm.gainItem(4002000, -5);
                    cm.gainItem(2043202, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[���ֶ�����������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            } else if (selection == 4) {
                if (cm.haveItem(4002000, 5)) {
                    cm.gainItem(4002000, -5);
                    cm.gainItem(2043302, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[�̽���������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            } else if (selection == 5) {
                if (cm.haveItem(4002000, 5)) {
                    cm.gainItem(4002000, -5);
                    cm.gainItem(2043702, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[����ħ������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            } else if (selection == 6) {
                if (cm.haveItem(4002000, 5)) {
                    cm.gainItem(4002000, -5);
                    cm.gainItem(2043802, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[����ħ������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            } else if (selection == 7) {
                if (cm.haveItem(4002000, 5)) {
                    cm.gainItem(4002000, -5);
                    cm.gainItem(2044002, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[˫�ֽ���������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            } else if (selection == 5) {
                if (cm.haveItem(4002000, 5)) {
                    cm.gainItem(4002000, -5);
                    cm.gainItem(2044102, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[˫�ָ���������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            } else if (selection == 9) {
                if (cm.haveItem(4002000, 5)) {
                    cm.gainItem(4002000, -5);
                    cm.gainItem(2044202, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[˫�ֶ�����������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            } else if (selection == 10) {
                if (cm.haveItem(4002000, 5)) {
                    cm.gainItem(4002000, -5);
                    cm.gainItem(2044302, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[ǹ��������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            } else if (selection == 11) {
                if (cm.haveItem(4002000, 5)) {
                    cm.gainItem(4002000, -5);
                    cm.gainItem(2044402, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[ì��������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            } else if (selection == 12) {
                if (cm.haveItem(4002000, 5)) {
                    cm.gainItem(4002000, -5);
                    cm.gainItem(2044502, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[����������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            } else if (selection == 13) {
                if (cm.haveItem(4002000, 5)) {
                    cm.gainItem(4002000, -5);
                    cm.gainItem(2044602, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[�󹥻�����10% ]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            } else if (selection == 14) {
                if (cm.haveItem(4002000, 5)) {
                    cm.gainItem(4002000, -5);
                    cm.gainItem(2044702, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[ȭ�׹�������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            } else if (selection == 15) {
                if (cm.haveItem(4002000, 5)) {
                    cm.gainItem(4002000, -5);
                    cm.gainItem(2044802, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[ȭ�׹�������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            }else if(selection == 16){
                if (cm.haveItem(4002000, 5)) {
                    cm.gainItem(4002000, -5);
                    cm.gainItem(2044902, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[��ǹ��������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            }else if(selection == 17){
                if (cm.haveItem(4002000, 15)) {
                    cm.gainItem(4002000, -15);
                    cm.gainItem(2040805, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[���׹�������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            }else if(selection == 18){
                if (cm.haveItem(4002000, 5)) {
                    cm.gainItem(4002000, -5);
                    cm.gainItem(2044703, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[ȭ�׹��������]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            }else if(selection == 19){
                if (cm.haveItem(4002000, 5)) {
                    cm.gainItem(4002000, -5);
                    cm.gainItem(2044815, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[ָ�ڹ��������]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            }else if(selection == 20){
                if (cm.haveItem(4002000, 5)) {
                    cm.gainItem(4002000, -5);
                    cm.gainItem(2044908, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[��ǹ���������]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            }else if(selection == 21){
                if (cm.haveItem(4002000, 10)) {
                    cm.gainItem(4002000, -10);
                    cm.gainItem(2040807, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[���׹��������]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4031456#");
                    cm.dispose();
                }
            }
        }
    }
}
