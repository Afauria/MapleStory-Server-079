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
                text += "���빺��#v5150040##z5150040#��!\r\n\r\n";
            text += "" + ��ɫ��ͷ + "#L1##r#v5150040##z5150040#\t������1��\t��Ҫ���10000��\r\n\r\n"//3
            text += "" + ��ɫ��ͷ + "#L2##r#v5150040##z5150040#\t������10��\t��Ҫ���90000��\r\n\r\n"//3
            text += "" + ��ɫ��ͷ + "#L3##r#v5150038##z5150038#\t������1��\t��Ҫ���50000��\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L4##r#v1122017##z1122017#\tʹ��Ȩ��7��\t��Ҫ���6000��\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L5##r#v4310003##z4310003#1��\t��Ҫ���800��\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L6##r#v4310003##z4310003#11��\t��Ҫ���8000��\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L7##r#v2049100##z2049100#10��\t��Ҫ���15000��\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L8##r#v2340000##z2340000#10��\t��Ҫ���15000��\r\n\r\n"//3
            cm.sendSimple(text);
            }
        } else if (selection == 1) {
if (cm.getPlayer().getCSPoints(1) >= 10000) {
cm.gainNX(-10000);
cm.gainItem(5150040,1);
cm.sendOk("��ϲ�㣬�ɹ�����1��#v5150040#");
//cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�������׹��3Сʱʹ��Ȩ��");
            cm.dispose();
			}else{
            cm.sendOk("����㣬�޷�������");
            cm.dispose();
			}
        } else if (selection == 2) {
if (cm.getPlayer().getCSPoints(1) >= 90000) {
cm.gainNX(-90000);
cm.gainItem(5150040,10);
cm.sendOk("��ϲ�㣬�ɹ�����10��#v5150040#");
//cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�������׹��10Сʱʹ��Ȩ��");
cm.dispose();
}else{
cm.sendOk("����㣬�޷�������");
cm.dispose();
}
        } else if (selection == 3) {
if (cm.getPlayer().getCSPoints(1) >= 50000) {
cm.gainNX(-50000);
cm.gainItem(5150038,1);
cm.sendOk("��ϲ�㣬�ɹ�����1��#v5150038#");
//cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�������׹��1��ʹ��Ȩ��");
cm.dispose();
}else{
cm.sendOk("����㣬�޷�������");
cm.dispose();
}
        } else if (selection == 4) {
if (cm.getPlayer().getCSPoints(1) >= 6000) {
cm.gainNX(-6000);
cm.gainItem(1122017,0,0,0,0,0,0,0,0,0,0,0,0,0,0,168);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�������׹��7��ʹ��Ȩ��");
cm.dispose();
}else{
cm.sendOk("���߲����޷�������");
cm.dispose();
}
        } else if (selection == 5) {
if (cm.getPlayer().getCSPoints(1) >= 800) {
cm.gainNX(-800);
cm.gainItem(4310003,1);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����(�����ڱ��������)1������ȥ�齱�ɣ�");
cm.dispose();
}else{
cm.sendOk("����㣬�޷�����");
cm.dispose();
}
        } else if (selection == 6) {
if (cm.getPlayer().getCSPoints(1) >= 8000) {
cm.gainNX(-8000);
cm.gainItem(4310003,11);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����(�����ڱ��������)11������ȥ�齱�ɣ�");
cm.dispose();
}else{
cm.sendOk("����㣬�޷�����");
cm.dispose();
}
        } else if (selection == 7) {
if (cm.getPlayer().getCSPoints(1) >= 15000) {
cm.gainNX(-15000);
cm.gainItem(2049100,10);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����������10������ϲ��");
cm.dispose();
}else{
cm.sendOk("����㣬�޷�����");
cm.dispose();
}
        } else if (selection == 8) {
if (cm.getPlayer().getCSPoints(1) >= 15000) {
cm.gainNX(-15000);
cm.gainItem(2340000,10);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����ף������10������ϲ��");
cm.dispose();
}else{
cm.sendOk("����㣬�޷�����");
cm.dispose();
}
		}
    }
}


