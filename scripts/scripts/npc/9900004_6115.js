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
                text += "������������������յ¶���Ŷ����\r\n\r\n";
            text += "" + ��ɫ��ͷ + "#L1##r����#v1032220#�ͼ����յ¶�����5��ά��5G5M��\r\n��Ҫ��#v4001126# 300����#v4031559# 40����#v4031558# 40����#v4002003# 40����#v4021010# 1����#v4000463# 3�������=500W\r\n\r\n"//3
            text += "" + ��ɫ��ͷ + "#L2##r����#v1032221#�м����յ¶�����10��ά��10G10M��\r\n��Ҫ��#v4001126# 500����#v1032220# 1����#v4031559# 60����#v4031558# 60����#v4002003# 60����#v4021010# 1����#v4000463# 5�������=1000W\r\n\r\n"//3
            text += "" + ��ɫ��ͷ + "#L3##r����#v1032222#�߼������յ¶�����15��ά��15G15M��\r\n��Ҫ��#v4001126# 1000����#v1032221# 1����#v4031559# 80����#v4031558# 80����#v4002003# 80����#v4021010# 2����#v4000463# 10�������=2000W\r\n\r\n"//3
            text += "" + ��ɫ��ͷ + "#L4##r����#v1032223#��߼����յ¶�����20��ά��20G20M��\r\n��Ҫ��#v4001126# 3000����#v1032222# 1����#v4031559# 100����#v4031558# 100����#v4002003# 100����#v4021010# 3����#v4000463# 20�������=5000W\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L5##r����#v1122126##z1122126#\r\n��Ҫ��#v4001126# 5000����#v1122147# 1�������=1�ڡ�#v4005004# 100��\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L6##r#v5211047##z5211047#\tʹ��Ȩ��7��Ȩ\t��Ҫ���3000��\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L7##r#v2049100##z2049100#10��\t��Ҫ���15000��\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L8##r#v2340000##z2340000#10��\t��Ҫ���15000��\r\n\r\n"//3
            cm.sendSimple(text);
            }
        } else if (selection == 1) {
			if(cm.haveItem(4001126,300) && cm.haveItem(4031559,40) && cm.haveItem(4031558,40) && cm.haveItem(4002003,40) && cm.haveItem(4021010,1) && cm.haveItem(4000463,3) && cm.getMeso() >= 5000000){
				cm.gainItem(4001126, -300);
				cm.gainItem(4031559, -40);
				cm.gainItem(4031558, -40);
				cm.gainItem(4002003, -40);
				cm.gainItem(4021010, -1);
				cm.gainItem(4000463, -3);
				cm.gainMeso(-5000000);
		cm.gainItem(1032220,5,5,5,5,0,0,5,5,0,0,0,0,0,0);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����[�ͼ����յ¶���]������˱�ǿ�ĵ�һ����");
            cm.dispose();
			}else{
            cm.sendOk("���߲����޷�������");
            cm.dispose();
			}
        } else if (selection == 2) {
			if(cm.haveItem(4001126,500) && cm.haveItem(1032220,1) && cm.haveItem(4031559,60) && cm.haveItem(4031558,60) && cm.haveItem(4002003,60) && cm.haveItem(4021010,1) && cm.haveItem(4000463,5) && cm.getMeso() >= 10000000){
				cm.gainItem(4001126, -500);
				cm.gainItem(1032220, -1);
				cm.gainItem(4031559, -60);
				cm.gainItem(4031558, -60);
				cm.gainItem(4002003, -60);
				cm.gainItem(4021010, -1);
				cm.gainItem(4000463, -5);
				cm.gainMeso(-10000000);
		cm.gainItem(1032221,10,10,10,10,0,0,10,10,0,0,0,0,0,0);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����[�м����յ¶���]������˱�ǿ�ĵڶ�����");
            cm.dispose();
			}else{
            cm.sendOk("���߲����޷�������");
            cm.dispose();
			}
        } else if (selection == 3) {
			if(cm.haveItem(4001126,1000) && cm.haveItem(1032221,1) && cm.haveItem(4031559,80) && cm.haveItem(4031558,80) && cm.haveItem(4002003,80) && cm.haveItem(4021010,2) && cm.haveItem(4000463,10) && cm.getMeso() >= 20000000){
				cm.gainItem(4001126, -1000);
				cm.gainItem(1032221, -1);
				cm.gainItem(4031559, -80);
				cm.gainItem(4031558, -80);
				cm.gainItem(4002003, -80);
				cm.gainItem(4021010, -2);
				cm.gainItem(4000463, -10);
				cm.gainMeso(-20000000);
		cm.gainItem(1032222,15,15,15,15,0,0,15,15,0,0,0,0,0,0);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����[�߼����յ¶���]������˱�ǿ�ĵ�������");
            cm.dispose();
			}else{
            cm.sendOk("���߲����޷�������");
            cm.dispose();
			}
        } else if (selection == 4) {
			if(cm.haveItem(4001126,3000) && cm.haveItem(1032222,1) && cm.haveItem(4031559,100) && cm.haveItem(4031558,100) && cm.haveItem(4002003,100) && cm.haveItem(4021010,3) && cm.haveItem(4000463,20) && cm.getMeso() >= 50000000){
				cm.gainItem(4001126, -3000);
				cm.gainItem(1032222, -1);
				cm.gainItem(4031559, -100);
				cm.gainItem(4031558, -100);
				cm.gainItem(4002003, -100);
				cm.gainItem(4021010, -3);
				cm.gainItem(4000463, -20);
				cm.gainMeso(-20000000);
		cm.gainItem(1032223,20,20,20,20,0,0,20,20,0,0,0,0,0,0);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����[��߼����յ¶���]������˱�ǿ�����һ����");
            cm.dispose();
			}else{
            cm.sendOk("���߲����޷�������");
            cm.dispose();
			}
        } else if (selection == 5) {
			if(cm.haveItem(4001126,5000) && cm.haveItem(1122147,1) && cm.haveItem(4005004,100) && cm.getMeso() >= 100000000){
				cm.gainItem(4001126, -5000);
				cm.gainItem(1122147, -1);
				cm.gainItem(4005004, -100);
				cm.gainMeso(-100000000);
				cm.gainItem(1122126, 1);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����[�����ð��֮��-����ר��]������˱�ǿ�����һ����");
            cm.dispose();
			}else{
            cm.sendOk("���߲����޷�������");
            cm.dispose();
			}
        } else if (selection == 6) {
if (cm.getPlayer().getCSPoints(1) >= 3000) {
cm.gainNX(-3000);
cm.gainItem(5211047,1,7);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����(˫�����鿨--7��Ȩ)1������ȥ������");
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


