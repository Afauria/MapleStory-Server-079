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
//var txt1 = "#d#L1#�һ�#v2040303##z2040303#��1#l\r\n"//3���������سɾ�\r\n";
  //          var txt2 = "#d#L2#�һ�#v2040506##z2040506#��1#l\r\n"//3ȫ��������ݱسɾ�
    //        var txt3 = "#d#L3#�һ�#v2040709##z2040709#��1#l\r\n"//3Ь�����ݱسɾ�
      //      var txt4 = "#d#L4#�һ�#v2040806##z2040806#��1#l\r\n"//3�������ݱسɾ�
            var txt5 = "#d#L5#�һ�#v2043003##z2043003#��1#l\r\n"//3���ֽ������سɾ�
            var txt6 = "#d#L6#�һ�#v2043103##z2043103#��1#l\r\n"//3���ָ������سɾ�
            var txt7 = "#d#L7#�һ�#v2043203##z2043203#��1#l\r\n"//3���ֶ��������سɾ�
            var txt8 = "#d#L8#�һ�#v2043303##z2043303#��1#l\r\n"//3�̽������سɾ�
            var txt9 = "#d#L9#�һ�#v2043703##z2043703#��1#l\r\n"//3���ȹ����سɾ�
            var txt10 = "#d#L10#�һ�#v2043803##z2043803#��1#l\r\n"//3���ȹ����سɾ�
            var txt11 = "#d#L11#�һ�#v2044003##z2044003#��1#l\r\n"//3˫�ֽ������سɾ�
            var txt12 = "#d#L12#�һ�#v2044103##z2044103#��1#l\r\n"//3˫�ָ������سɾ�
			var txt13 = "#d#L13#�һ�#v2044203##z2044203#��1#l\r\n"//3˫�ֶ��������سɾ�
            var txt14 = "#d#L14#�һ�#v2044303##z2044303#��1#l\r\n"//3ǹ�����سɾ�
            var txt15 = "#d#L15#�һ�#v2044403##z2044403#��1#l\r\n"//3ì�����سɾ�
            var txt16 = "#d#L16#�һ�#v2044503##z2044503#��1#l\r\n"//3�������سɾ�
            var txt17 = "#d#L17#�һ�#v2044603##z2044603#��1#l\r\n"//3�󹥻��سɾ�
            var txt18 = "#d#L18#�һ�#v2044703##z2044703#��1#l\r\n"//3ȭ�׹����سɾ�
            var txt19 = "#d#L19#�һ�#v2044815##z2044815#��1#l\r\n"//3ָ�ڹ����سɾ�
            var txt20 = "#d#L20#�һ�#v2044908##z2044908#��1#l\r\n"//3��ǹ�����سɾ�
        //    var txt21 = "#d#L21#�һ�#v2040807##z2040807#��1#l\r\n"//3���׹����سɾ�



           cm.sendSimple("�������#v4310059#��������������һ����ֱسɾ�Ŷ������\r\n" + "" + txt5 + "" + txt6 + "" + txt7 + "" + txt8 + "" + txt9 + "" + txt10 + "" + txt11 + "" + txt12 + "" + txt13 + "" + txt14 + "" + txt15 + "" + txt16 + "" + txt17 + "" + txt18 + "" + txt19 + "" + txt20 +  "");
        } else if (status == 1) {
            if (selection == 1) {
                if (cm.haveItem(4310059, 1)) {
                    cm.gainItem(4310059, -1);
                    cm.gainItem(2040303, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ñسɶһ��һ�ȡ[���������سɾ�]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ�س���Ҫ��#v4310059#");
                    cm.dispose();
                }
            } else if (selection == 2) { 
                if (cm.haveItem(4310059, 1)) {
                    cm.gainItem(4310059, -1);
                    cm.gainItem(2040506, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ñسɶһ��һ�ȡ[ȫ��������ݱسɾ�]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ�س���Ҫ��#v4310059#");
                    cm.dispose();
                }
            } else if (selection == 3) {
                if (cm.haveItem(4310059, 1)) {
                    cm.gainItem(4310059, -1);
                    cm.gainItem(2040709, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ñسɶһ��һ�ȡ[Ь�����ݱسɾ�]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ�س���Ҫ��#v4310059#");
                    cm.dispose();
                }
            } else if (selection == 4) {
                if (cm.haveItem(4310059, 1)) {
                    cm.gainItem(4310059, -1);
                    cm.gainItem(2040806, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ñسɶһ��һ�ȡ[�������ݱسɾ�]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ�س���Ҫ��#v4310059#");
                    cm.dispose();
                }
            } else if (selection == 5) {
                if (cm.haveItem(4310059, 1)) {
                    cm.gainItem(4310059, -1);
                    cm.gainItem(2043003, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ñسɶһ��һ�ȡ[���ֽ������سɾ�]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ�س���Ҫ��#v4310059#");
                    cm.dispose();
                }
            } else if (selection == 6) {
                if (cm.haveItem(4310059, 1)) {
                    cm.gainItem(4310059, -1);
                    cm.gainItem(2043103, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ñسɶһ��һ�ȡ[���ָ������سɾ�]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ�س���Ҫ��#v4310059#");
                    cm.dispose();
                }
            } else if (selection == 7) {
                if (cm.haveItem(4310059, 1)) {
                    cm.gainItem(4310059, -1);
                    cm.gainItem(2043203, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ñسɶһ��һ�ȡ[���ֶ��������سɾ�]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ�س���Ҫ��#v4310059#");
                    cm.dispose();
                }
            } else if (selection == 8) {
                if (cm.haveItem(4310059, 1)) {
                    cm.gainItem(4310059, -1);
                    cm.gainItem(2043303, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ñسɶһ��һ�ȡ[�̽������سɾ�]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ�س���Ҫ��#v4310059#");
                    cm.dispose();
                }
            } else if (selection == 9) {
                if (cm.haveItem(4310059, 1)) {
                    cm.gainItem(4310059, -1);
                    cm.gainItem(2043703, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ñسɶһ��һ�ȡ[���ȹ����سɾ�]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ�س���Ҫ��#v4310059#");
                    cm.dispose();
                }
            } else if (selection == 10) {
                if (cm.haveItem(4310059, 1)) {
                    cm.gainItem(4310059, -1);
                    cm.gainItem(2043803, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ñسɶһ��һ�ȡ[���ȹ����سɾ�]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ�س���Ҫ��#v4310059#");
                    cm.dispose();
                }
            } else if (selection == 11) {
                if (cm.haveItem(4310059, 1)) {
                    cm.gainItem(4310059, -1);
                    cm.gainItem(2044003, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ñسɶһ��һ�ȡ[˫�ֽ������سɾ�]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ�س���Ҫ��#v4310059#");
                    cm.dispose();
                }
            } else if (selection == 12) {
                if (cm.haveItem(4310059, 1)) {
                    cm.gainItem(4310059, -1);
                    cm.gainItem(2044103, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ñسɶһ��һ�ȡ[˫�ָ������سɾ�]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ�س���Ҫ��#v4310059#");
                    cm.dispose();
                }
            } else if (selection == 13) {
                if (cm.haveItem(4310059, 1)) {
                    cm.gainItem(4310059, -1);
                    cm.gainItem(2044203, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ñسɶһ��һ�ȡ[˫�ֶ��������سɾ�]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ�س���Ҫ��#v4310059#");
                    cm.dispose();
                }
            } else if (selection == 14) {
                if (cm.haveItem(4310059, 1)) {
                    cm.gainItem(4310059, -1);
                    cm.gainItem(2044303, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ñسɶһ��һ�ȡ[ǹ�����سɾ�]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ�س���Ҫ��#v4310059#");
                    cm.dispose();
                }
            } else if (selection == 15) {
                if (cm.haveItem(4310059, 1)) {
                    cm.gainItem(4310059, -1);
                    cm.gainItem(2044403, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ñسɶһ��һ�ȡ[ì�����سɾ�]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ�س���Ҫ��#v4310059#");
                    cm.dispose();
                }
            }else if(selection == 16){
                if (cm.haveItem(4310059, 1)) {
                    cm.gainItem(4310059, -1);
                    cm.gainItem(2044503, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ñسɶһ��һ�ȡ[�������سɾ�]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ�س���Ҫ��#v4310059#");
                    cm.dispose();
                }
            }else if(selection == 17){
                if (cm.haveItem(4310059, 1)) {
                    cm.gainItem(4310059, -1);
                    cm.gainItem(2044603, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ñسɶһ��һ�ȡ[�󹥻��سɾ�]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ�س���Ҫ��#v4310059#");
                    cm.dispose();
                }
            }else if(selection == 18){
                if (cm.haveItem(4310059, 1)) {
                    cm.gainItem(4310059, -1);
                    cm.gainItem(2044703, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ñسɶһ��һ�ȡ[ȭ�׹����سɾ�]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ�س���Ҫ��#v4310059#");
                    cm.dispose();
                }
            }else if(selection == 19){
                if (cm.haveItem(4310059, 1)) {
                    cm.gainItem(4310059, -1);
                    cm.gainItem(2044815, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ñسɶһ��һ�ȡ[ָ�ڹ����سɾ�]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ�س���Ҫ��#v4310059#");
                    cm.dispose();
                }
            }else if(selection == 20){
                if (cm.haveItem(4310059, 1)) {
                    cm.gainItem(4310059, -1);
                    cm.gainItem(2044908, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ñسɶһ��һ�ȡ[��ǹ�����سɾ�]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ�س���Ҫ��#v4310059#");
                    cm.dispose();
                }
            }else if(selection == 21){
                if (cm.haveItem(4310059, 1)) {
                    cm.gainItem(4310059, -1);
                    cm.gainItem(2040807, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ñسɶһ��һ�ȡ[���׹����سɾ�]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ�س���Ҫ��#v4310059#");
                    cm.dispose();
                }
            }
        }
    }
}
