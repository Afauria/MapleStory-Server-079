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
                text += "�������������������Ѫ��װ��ŶŶ����\r\n\r\n";
            text += "" + ��ɫ��ͷ + "#L1##r����#v1012187#��HP+500 MP+500 ��ά+5��\r\n��Ҫ��#v4000313# 200����#v4002000# 30����#v4002001# 30����#v4002002# 30����#v4002003# 30�������=500W\r\n\r\n"//3
			
            text += "" + ��ɫ��ͷ + "#L2##r����#v1012188#��HP+1000 MP+1000 ��ά+10��\r\n��Ҫ��#v4001266# 10����#v4002000# 50����#v4002001# 50����#v4002002# 50����#v4002003# 50�� ��#v4031559# 10����#v1012187# 1�������=500W\r\n\r\n"//3
			
            text += "" + ��ɫ��ͷ + "#L3##r����#v1012189#��HP+2000 MP+2000 ��ά+20��\r\n��Ҫ��#v4000313# 1000����#v4000243# 5����#v4000235# 5����#v4031559# 50����#v4031558# 20����#v1012188# 1�������=1000W\r\n\r\n"//3
			
            text += "" + ��ɫ��ͷ + "#L4##r����#v1012190#��HP+3000 MP+3000 ��ά+30��\r\n��Ҫ��#v4000313# 2000����#v4001266# 20����#v4000244# 5����#v4000245# 5����#v4000463# 5����#v1012189# 1�������=2000W\r\n\r\n"//3
			
            text += "" + ��ɫ��ͷ + "#L5##r����#v1012191#��HP+4000 MP+4000 ��ά+40��\r\n��Ҫ��#v4001084# 1����#v1002927# 1����#v1002926# 1����#v4031196# 20����#v4000463# 20����#v1012190# 1�������=4000W\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L5##r����#v1122126##z1122126#\r\n��Ҫ��#v4001126# 5000����#v1122147# 1�������=1�ڡ�#v4005004# 100��\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L6##r#v5211047##z5211047#\tʹ��Ȩ��7��Ȩ\t��Ҫ���3000��\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L7##r#v2049100##z2049100#10��\t��Ҫ���15000��\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L8##r#v2340000##z2340000#10��\t��Ҫ���15000��\r\n\r\n"//3
            cm.sendSimple(text);
            }
        } else if (selection == 1) {
			if(cm.haveItem(4000313,200) && cm.haveItem(4002000,30) && cm.haveItem(4002001,30) && cm.haveItem(4002002,30) && cm.haveItem(4002003,30) && cm.getMeso() >= 5000000){
				cm.gainItem(4000313, -200);
				cm.gainItem(4002000, -30);
				cm.gainItem(4002001, -30);
				cm.gainItem(4002002, -30);
				cm.gainItem(4002003, -30);
				cm.gainMeso(-5000000);
		cm.gainItem(1012187,5,5,5,5,500,500,0,0,0,0,0,0,0,0);//Ѫ��
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����[Ѫ���һ�׶�]������˱�ǿ�ĵ�1����");
            cm.dispose();
			}else{
            cm.sendOk("���߲����޷�������");
            cm.dispose();
			}
        } else if (selection == 2) {
			if(cm.haveItem(4001266,10) && cm.haveItem(4002000,50) && cm.haveItem(4002001,50) && cm.haveItem(4002002,50) && cm.haveItem(4002003,50) && cm.haveItem(4031559,10) && cm.haveItem(1012187,1) && cm.getMeso() >= 5000000){
				cm.gainItem(4001266, -10);
				cm.gainItem(4002000, -50);
				cm.gainItem(4002001, -50);
				cm.gainItem(4002002, -50);
				cm.gainItem(4002003, -50);
				cm.gainItem(4031559, -10);
				cm.gainItem(1012187, -1);
				cm.gainMeso(-5000000);
		cm.gainItem(1012188,10,10,10,10,1000,1000,0,0,0,0,0,0,0,0);//��������
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����[Ѫ��ڶ��׶�]������˱�ǿ�ĵ�2����");
            cm.dispose();
			}else{
            cm.sendOk("���߲����޷�������");
            cm.dispose();
			}
        } else if (selection == 3) {
			if(cm.haveItem(4000313,1000) && cm.haveItem(4000243,5) && cm.haveItem(4000235,5) && cm.haveItem(4031559,50) && cm.haveItem(4031558,20) && cm.haveItem(1012188,1) && cm.getMeso() >= 10000000){
				cm.gainItem(4000313, -1000);
				cm.gainItem(4000243, -5);
				cm.gainItem(4000235, -5);
				cm.gainItem(4031559, -50);
				cm.gainItem(4031558, -20);
				cm.gainItem(1012188, -1);
				cm.gainMeso(-10000000);
		cm.gainItem(1012189,20,20,20,20,2000,2000,0,0,0,0,0,0,0,0);//��������
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����[Ѫ������׶�]������˱�ǿ�ĵ�3����");
            cm.dispose();
			}else{
            cm.sendOk("���߲����޷�������");
            cm.dispose();
			}
        } else if (selection == 4) {
			if(cm.haveItem(4001266,20) && cm.haveItem(4000313,2000) && cm.haveItem(4000244,5) && cm.haveItem(4000245,5) && cm.haveItem(4000463,5) && cm.haveItem(1012189,1) && cm.getMeso() >= 20000000){
				cm.gainItem(4001266, -20);
				cm.gainItem(4000313, -2000);
				cm.gainItem(4000244, -5);
				cm.gainItem(4000245, -5);
				cm.gainItem(4000463, -5);
				cm.gainItem(1012189, -1);
				cm.gainMeso(-20000000);
		cm.gainItem(1012190,30,30,30,30,3000,3000,0,0,0,0,0,0,0,0);//��������
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����[Ѫ����Ľ׶�]������˱�ǿ�ĵ�4����");
            cm.dispose();
			}else{
            cm.sendOk("���߲����޷�������");
            cm.dispose();
			}
        } else if (selection == 5) {
			if(cm.haveItem(4001084,1) && cm.haveItem(1002927,1) && cm.haveItem(1002926,1) && cm.haveItem(4031196,20) && cm.haveItem(4000463,20) && cm.haveItem(1012190,1) && cm.getMeso() >= 40000000){
				cm.gainItem(4001084, -1);
				cm.gainItem(1002927, -1);
				cm.gainItem(1002926, -1);
				cm.gainItem(4031196, -20);
				cm.gainItem(4000463, -20);
				cm.gainItem(1012190, -1);
				cm.gainMeso(-40000000);
		cm.gainItem(1012191,40,40,40,40,4000,4000,6,6,0,0,0,0,0,0);//��������
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����[Ѫ�����׶�]������˱�ǿ�ĵ�5����");
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


