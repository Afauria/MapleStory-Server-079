var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
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
                text += "#e#r\t\t  ��׼����ʲô������ȡ���ң�#n#k\r\n\r\n";
            text += "#L1##rʹ�� #v4000313# #z4000313# 150��  �һ�#v4310058##z4310058# 1ö\r\n\r\n"//3			
            text += "#L2##rʹ�� #v4031891# ���800W        �һ�#v4310058##z4310058# 1ö\r\n\r\n"//3			
            text += "#L3##rʹ�� #v4002000# #v4002001# ��10ö     �һ�#v4310058##z4310058# 1ö\r\n\r\n"//3				
            text += "#L4##rʹ�� #v4001266# #z4001266# 4ö     �һ�#v4310058##z4310058# 1ö\r\n\r\n"//3
            text += "#L5##rʹ�� #v4310100# ����ð�յ����� 1��  �һ�#v4310058##z4310058# 3ö\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L7##r����#v5360014##z5360014#��24СʱȨ��\r\n��Ҫ�����=600�� \r\n\r\n"//3
            //    text += "#b������������������������������������������������������\r\n\r\n";
            //text += "" + ��ɫ��ͷ + "#L9##r����#v5211047##z5211047#��3СʱȨ��\r\n��Ҫ�����þ�=600�� \r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L10##r����#v5360014##z5360014#��3СʱȨ��\r\n��Ҫ�����þ�=600�� \r\n\r\n"//3

            //text += "" + ��ɫ��ͷ + "#L5##r����#v1122126##z1122126#\r\n��Ҫ��#v4001126# 5000����#v1122147# 1�������=1�ڡ�#v4005004# 100��\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L6##r#v5211047##z5211047#\tʹ��Ȩ��7��Ȩ\t��Ҫ���3000��\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L7##r#v2049100##z2049100#10��\t��Ҫ���15000��\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L8##r#v2340000##z2340000#10��\t��Ҫ���15000��\r\n\r\n"//3
            cm.sendSimple(text);
            }
        } else if (selection == 1) {
                if (cm.haveItem(4000313, 150)) {
				cm.gainItem(4000313,-150);
				cm.gainItem(4310058,1);
cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ�ȡ��901��G-M���õ����Ϲ����ű�1ö");
            cm.dispose();
			}else{
            cm.sendOk("�㾹Ȼ��ˣ�ң���û�и��Ҵ��� #v4000313# #z4000313# 150�� \r\n��֪�������ҵĺ��ô������");
            cm.dispose();
			}
        } else if (selection == 2) {
                if (cm.getMeso() >= 8000000) {
				cm.gainMeso(-8000000);
				cm.gainItem(4310058,1);
cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ�ȡ��901��G-M���õ����Ϲ����ű�1ö");
            cm.dispose();
			}else{
            cm.sendOk("�㾹Ȼ��ˣ�ң���û�и��Ҵ��� 800W ��ң����� \r\n��֪�������ҵĺ��ô������");
            cm.dispose();
			}
        } else if (selection == 3) {
                if (cm.haveItem(4002000, 10) && cm.haveItem(4002001, 10)) {
				cm.gainItem(4002000,-10);
				cm.gainItem(4002001,-10);
				cm.gainItem(4310058,1);
cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ�ȡ��901��G-M���õ����Ϲ����ű�1ö");
            cm.dispose();
			}else{
            cm.sendOk("�㾹Ȼ��ˣ�ң���û�и��Ҵ��� #v4002000# #v4002001# ��10�� \r\n��֪�������ҵĺ��ô������");
            cm.dispose();
			}
        } else if (selection == 4) {
                if (cm.haveItem(4001266, 4)) {
				cm.gainItem(4001266,-4);
				cm.gainItem(4310058,1);
cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ�ȡ��901��G-M���õ����Ϲ����ű�1ö");
            cm.dispose();
			}else{
            cm.sendOk("�㾹Ȼ��ˣ�ң���û�и��Ҵ��� #v4001266# #z4001266# 3ö \r\n��֪�������ҵĺ��ô������");
            cm.dispose();
			}
        } else if (selection == 5) {
                if (cm.haveItem(4310100, 1)) {
				cm.gainItem(4310100,-1);
				cm.gainItem(4310058,3);
cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ�ȡ��901��G-M���õ����Ϲ����ű�3ö");
            cm.dispose();
			}else{
            cm.sendOk("�㾹Ȼ��ˣ�ң���û�и��Ҵ��� #v4310100# #z4310100# 1�� \r\n��֪�������ҵĺ��ô������");
            cm.dispose();
			}
        } else if (selection == 6) {
                if (cm.getPlayer().getNX() >= 300) {
				cm.gainNX(-300);
				cm.gainItem(5360014,1,10);
cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ�����[˫�����ʿ���10СʱȨ��]���������~");
            cm.dispose();
			}else{
            cm.sendOk("������޷�������");
            cm.dispose();
			}
        } else if (selection == 7) {
                if (cm.getPlayer().getNX() >= 600) {
				cm.gainNX(-600);
				cm.gainItem(5360014,1,24);
cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ�����[˫�����ʿ���24СʱȨ��]���������~");
            cm.dispose();
			}else{
            cm.sendOk("������޷�������");
            cm.dispose();
			}
        } else if (selection == 8) {
                if (cm.getPlayer().getNX() >= 2000) {
				cm.gainNX(-2000);
				cm.gainItem(5360014,1,168);
cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ�����[˫�����ʿ���7��Ȩ��]���������~");
            cm.dispose();
			}else{
            cm.sendOk("������޷�������");
            cm.dispose();
			}
        } else if (selection == 9) {
                if (cm.getPlayer().getDY() >= 600) {
				cm.gainDY(-600);
				cm.gainItem(5211047,1,3);
cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ�����[˫�����鿨��3СʱȨ��]���������~");
            cm.dispose();
			}else{
            cm.sendOk("���þ����޷�������");
            cm.dispose();
			}
        } else if (selection == 10) {
                if (cm.getPlayer().getDY() >= 600) {
				cm.gainDY(-600);
				cm.gainItem(5360014,1,3);
cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ�����[˫�����ʿ���3СʱȨ��]���������~");
            cm.dispose();
			}else{
            cm.sendOk("���þ����޷�������");
            cm.dispose();
			}
		}
    }
}


