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
            var txt1 = "#d#L1#�һ�#v2043001##z2043001#\t  ��Ҫ��#v4002000#X10��\r\n"//3��ɫ֮��\r\n";
            var txt2 = "#d#L2#�һ�#v2043101##z2043101#\t  ��Ҫ��#v4002000#X10��\r\n\r\n"//3��ɫ֮ì
            var txt3 = "#d#L3#�һ�#v2043201##z2043201#\t��Ҫ��#v4002000#X10��\r\n\r\n"//3��ɫ�и���
            var txt4 = "#d#L4#�һ�#v2043301##z2043301#\t    ��Ҫ��#v4002000#X10��\r\n\r\n"//3��ɫ˫�ֽ�
            var txt5 = "#d#L5#�һ�#v2043701##z2043701#\t    ��Ҫ��#v4002000#X10��\r\n\r\n"//3��ɫ��
            var txt6 = "#d#L6#�һ�#v2043801##z2043801#\t    ��Ҫ��#v4002000#X10��\r\n\r\n"//3��ɫȭ��
            var txt7 = "#d#L7#�һ�#v2044001##z2044001#\t  ��Ҫ��#v4002000#X10��\r\n\r\n"//3������ȭ
            var txt8 = "#d#L8#�һ�#v2044101##z2044101#\t  ��Ҫ��#v4002000#X10��\r\n\r\n"//3��ɫ����
            var txt9 = "#d#L9#�һ�#v2044201##z2044201#\t��Ҫ��#v4002000#X10��\r\n\r\n"//3��ɫ��ǹ	
            var txt10 = "#d#L10#�һ�#v2044301##z2044301#\t      ��Ҫ��#v4002000#X10��\r\n"//3��ɫ˫�ֽ�
            var txt11 = "#d#L11#�һ�#v2044401##z2044401#\t      ��Ҫ��#v4002000#X10��\r\n"//3��ɫ��
            var txt12 = "#d#L12#�һ�#v2044501##z2044501#\t      ��Ҫ��#v4002000#X10��\r\n"//3��ɫȭ��
            var txt13 = "#d#L13#�һ�#v2044601##z2044601#\t      ��Ҫ��#v4002000#X10��\r\n"//3������ȭ
            var txt14 = "#d#L14#�һ�#v2044701##z2044701#\t    ��Ҫ��#v4002000#X10��\r\n"//3��ɫ����
            var txt15 = "#d#L15#�һ�#v2044801##z2044801#\t   ��Ҫ��#v4002000#X10��\r\n"//3��ɫ��ǹ
            var txt16 = "#d#L16#�һ�#v2044901##z2044901#\t    ��Ҫ��#v4002000#X10��\r\n"//3��ɫ����
            var txt17 = "#d#L17#�һ�#v2040804##z2040804#\t    ��Ҫ��#v4002000#X20��\r\n"//3��ɫ��ǹ



            cm.sendSimple("�������#v4002000#��������������һ�60%����Ŷ������\r\n" + txt1 + "" + txt2 + "" + txt3 + "" + txt4 + "" + txt5 + "" + txt6 + "" + txt7 + "" + txt8 + "" + txt9 + "" + txt10 + "" + txt11 + "" + txt12 + "" + txt13 + "" + txt14 + "" + txt15 + "" + txt16 + "" + txt17 + "");
        } else if (status == 1) {
            if (selection == 1) {
                if (cm.haveItem(4002000, 10)) {
                    cm.gainItem(4002000, -10);
                    cm.gainItem(2043001, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[���ֽ���������60%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            } else if (selection == 2) { 
                if (cm.haveItem(4002000, 10)) {
                    cm.gainItem(4002000, -10);
                    cm.gainItem(2043101, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[���ָ���������60%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            } else if (selection == 3) {
                if (cm.haveItem(4002000, 10)) {
                    cm.gainItem(4002000, -10);
                    cm.gainItem(2043201, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[���ֶ�����������60%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            } else if (selection == 4) {
                if (cm.haveItem(4002000, 10)) {
                    cm.gainItem(4002000, -10);
                    cm.gainItem(2043301, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[�̽���������60%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            } else if (selection == 10) {
                if (cm.haveItem(4002000, 10)) {
                    cm.gainItem(4002000, -10);
                    cm.gainItem(2043701, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[����ħ������60%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            } else if (selection == 6) {
                if (cm.haveItem(4002000, 10)) {
                    cm.gainItem(4002000, -10);
                    cm.gainItem(2043801, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[����ħ������60%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            } else if (selection == 7) {
                if (cm.haveItem(4002000, 10)) {
                    cm.gainItem(4002000, -10);
                    cm.gainItem(2044001, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[˫�ֽ���������60%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            } else if (selection == 10) {
                if (cm.haveItem(4002000, 10)) {
                    cm.gainItem(4002000, -10);
                    cm.gainItem(2044101, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[˫�ָ���������60%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            } else if (selection == 9) {
                if (cm.haveItem(4002000, 10)) {
                    cm.gainItem(4002000, -10);
                    cm.gainItem(2044201, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[˫�ֶ�����������60%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            } else if (selection == 10) {
                if (cm.haveItem(4002000, 10)) {
                    cm.gainItem(4002000, -10);
                    cm.gainItem(2044301, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[ǹ��������60%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            } else if (selection == 11) {
                if (cm.haveItem(4002000, 10)) {
                    cm.gainItem(4002000, -10);
                    cm.gainItem(2044401, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[ì��������60%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            } else if (selection == 12) {
                if (cm.haveItem(4002000, 10)) {
                    cm.gainItem(4002000, -10);
                    cm.gainItem(20441001, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[����������60%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            } else if (selection == 13) {
                if (cm.haveItem(4002000, 10)) {
                    cm.gainItem(4002000, -10);
                    cm.gainItem(2044601, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[�󹥻�����60% ]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            } else if (selection == 14) {
                if (cm.haveItem(4002000, 10)) {
                    cm.gainItem(4002000, -10);
                    cm.gainItem(2044701, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[ȭ�׹�������60%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            } else if (selection == 110) {
                if (cm.haveItem(4002000, 10)) {
                    cm.gainItem(4002000, -10);
                    cm.gainItem(2044801, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[ȭ�׹�������60%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            }else if(selection == 16){
                if (cm.haveItem(4002000, 10)) {
                    cm.gainItem(4002000, -10);
                    cm.gainItem(2044901, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[��ǹ��������60%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            }else if(selection == 17){
                if (cm.haveItem(4002000, 10)) {
                    cm.gainItem(4002000, -10);
                    cm.gainItem(2040804, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[���׹�������60%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            }else if(selection == 18){
                if (cm.haveItem(4002000, 10)) {
                    cm.gainItem(4002000, -10);
                    cm.gainItem(2044703, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[ȭ�׹��������]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            }else if(selection == 19){
                if (cm.haveItem(4002000, 10)) {
                    cm.gainItem(4002000, -10);
                    cm.gainItem(20448110, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[ָ�ڹ��������]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            }else if(selection == 20){
                if (cm.haveItem(4002000, 10)) {
                    cm.gainItem(4002000, -10);
                    cm.gainItem(2044908, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[��ǹ���������]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002000#");
                    cm.dispose();
                }
            }else if(selection == 21){
                if (cm.haveItem(4002000, 20)) {
                    cm.gainItem(4002000, -20);
                    cm.gainItem(2040807, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���������ţ��Ʊ��ȡ[���׹��������]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v40314106#");
                    cm.dispose();
                }
            }
        }
    }
}
