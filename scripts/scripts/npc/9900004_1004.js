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
                text += "��������Ը���һ�һЩ��������Ŷ��\r\n\r\n\r\n\r\n";
          //  text += "" + ��ɫ��ͷ + "#L1##r#v1122017##z1122017#\tʹ��Ȩ������\t��Ҫ���12000��\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L2##r#v1122017##z1122017#\tʹ��Ȩ��10Сʱ\t��Ҫ���600��\r\n\r\n"//3
			text += "" + ��ɫ��ͷ + "#L4##r#v4000463##z4000463#500��Ҷ�����죡ÿ����3��\r\n\r\n\r\n\r\n"//3
           // text += "" + ��ɫ��ͷ + "#L3##r#v1122017##z1122017#\tʹ��Ȩ��1��\t��Ҫ��120������ѣ�\r\n\r\n"//3
          //  text += "" + ��ɫ��ͷ + "#L5##r#v4310003##z4310003#1��\t��Ҫ���800��\r\n\r\n"//3
         //   text += "" + ��ɫ��ͷ + "#L6##r#v4310003##z4310003#11��\t��Ҫ���8000��\r\n\r\n"//3
         //   text += "" + ��ɫ��ͷ + "#L7##r#v2049100##z2049100#10��\t��Ҫ���15000��\r\n\r\n"//3
         //   text += "" + ��ɫ��ͷ + "#L8##r#v2340000##z2340000#10��\t��Ҫ���15000��\r\n\r\n"//3
            cm.sendSimple(text);
            }
        } else if (selection == 1) {
if (cm.getPlayer().getCSPoints(1) >= 1200) {
cm.gainNX(-12000);
cm.gainItem(1122017,1);
cm.worldMessage(6, "[" + cm.getPlayer().getName() + "]�ɹ�������׹��3Сʱʹ��Ȩ��");
            cm.dispose();
			}else{
            cm.sendOk("���߲����޷�������");
            cm.dispose();
			}
        } else if (selection == 2) {
if (cm.getPlayer().getCSPoints(1) >= 600) {
cm.gainNX(-600);
cm.gainItem(1122017,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10);
cm.worldMessage(6, "[" + cm.getPlayer().getName() + "]�ɹ�������׹��10Сʱʹ��Ȩ��");
cm.dispose();
}else{
cm.sendOk("���߲����޷�������");
cm.dispose();
}
        } else if (selection == 3) {
if (cm.getPlayer().getLevel() < 120) {
//cm.gainNX(-1200);
cm.gainItem(1122017,1,1);
//cm.worldMessage(6, "[" + cm.getPlayer().getName() + "]�ɹ�������׹��1��ʹ��Ȩ��");
cm.dispose();
}else{
cm.sendOk("���ѳ���120����");
cm.dispose();
}
        } else if (selection == 4) {
if ((cm.haveItem(4001126,500) && cm.getBossLog("����Ҷһ�") < 3 ) ){
cm.setBossLog("����Ҷһ�");
cm.gainItem(4001126,-500);
cm.gainItem(4000463,1);
//cm.serverNotice("["+cm.getName()+"]��ȡ��ÿ�����˵�����(30����˫�����鿨)����Ҽǵ�ȥ��ȡŶ��");
cm.dispose();
}else{
cm.sendOk("��Ҷ������߶һ������Ѿ�����3�Σ�");
cm.dispose();
}
        } else if (selection == 5) {
if (cm.getPlayer().getCSPoints(1) >= 800) {
cm.gainNX(-800);
cm.gainItem(4310003,1);
cm.worldMessage(6, "[" + cm.getPlayer().getName() + "]�ɹ�����(�����ڱ��������)1������ȥ�齱�ɣ�");
cm.dispose();
}else{
cm.sendOk("����㣬�޷�����");
cm.dispose();
}
        } else if (selection == 6) {
if (cm.getPlayer().getCSPoints(1) >= 8000) {
cm.gainNX(-8000);
cm.gainItem(4310003,11);
cm.worldMessage(6, "[" + cm.getPlayer().getName() + "]�ɹ�����(�����ڱ��������)11������ȥ�齱�ɣ�");
cm.dispose();
}else{
cm.sendOk("����㣬�޷�����");
cm.dispose();
}
        } else if (selection == 7) {
if (cm.getPlayer().getCSPoints(1) >= 15000) {
cm.gainNX(-15000);
cm.gainItem(2049100,10);
cm.worldMessage(6, "[" + cm.getPlayer().getName() + "]�ɹ�����������10������ϲ��");
cm.dispose();
}else{
cm.sendOk("����㣬�޷�����");
cm.dispose();
}
        } else if (selection == 8) {
if (cm.getPlayer().getCSPoints(1) >= 15000) {
cm.gainNX(-15000);
cm.gainItem(2340000,10);
cm.worldMessage(6, "[" + cm.getPlayer().getName() + "]�ɹ�����ף������10������ϲ��");
cm.dispose();
}else{
cm.sendOk("����㣬�޷�����");
cm.dispose();
}
		}
    }
}

