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
                text += "������������������յ�����Ŷ����\r\n\r\n";
            text += "" + ��ɫ��ͷ + "#L1##r����#v1132243#�ͼ����յ¿�ӡ������5G 5M��\r\n��Ҫ��#v4031456# 20����#v4031311# 20����#v4000463# 5����#v4002000# 60����#v4002001# 60����#v4002002# 40����#v4002003# 20�������=1000W\r\n\r\n"//3
            text += "" + ��ɫ��ͷ + "#L2##r����#v1132244##z1132244#\r\n��Ҫ��#v4031456# 40����#v4031311# 40����#v4000463# 10����#v4005004# 20����#v4005000# 20����#v4005001# 20����#v4005002# 20����#v4005003# 20����#v4001085# 1����#v1132243# 1�������=2000W\r\n\r\n"//3
            text += "" + ��ɫ��ͷ + "#L3##r����#v1132245##z1132245#\r\n��Ҫ��#v4031456# 80����#v4031311# 80����#v4000463# 20����#v4031559# 100����#v4031558# 100����#v4001084# 1����#v1132244# 1�������=3000W\r\n\r\n"//3
            text += "" + ��ɫ��ͷ + "#L4##r����#v1132246##z1132246#\r\n��Ҫ��#v4031456# 200����#v4031311# 200����#v4000463# 40����#v4001085# 1����#v4001084# 1����#v4001083# 1����#v1122000# 1����#v1132245# 1�������=5000W\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L5##r����#v1122126##z1122126#\r\n��Ҫ��#v4001126# 5000����#v1122147# 1�������=1�ڡ�#v4005004# 100��\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L6##r#v5211047##z5211047#\tʹ��Ȩ��7��Ȩ\t��Ҫ���3000��\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L7##r#v2049100##z2049100#10��\t��Ҫ���15000��\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L8##r#v2340000##z2340000#10��\t��Ҫ���15000��\r\n\r\n"//3
            cm.sendSimple(text);
            }
        } else if (selection == 1) {
			if(cm.haveItem(4031456,20) && cm.haveItem(4031311,20) && cm.haveItem(4000463,5) && cm.haveItem(4002000,60) && cm.haveItem(4002001,60) && cm.haveItem(4002002,40) && cm.haveItem(4002003,20) && cm.getMeso() >= 10000000){
				cm.gainItem(4031456, -20);
				cm.gainItem(4031311, -20);
				cm.gainItem(4000463, -5);
				cm.gainItem(4002000, -60);
				cm.gainItem(4002001, -60);
				cm.gainItem(4002002, -40);
				cm.gainItem(4002003, -20);
				cm.gainMeso(-10000000);
		cm.gainItem(1132243,8,8,8,8,100,100,5,5,80,80,0,0,0,0);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����[�ͼ����յ�����]������˱�ǿ�ĵ�һ����");
            cm.dispose();
			}else{
            cm.sendOk("���߲����޷�������");
            cm.dispose();
			}
        } else if (selection == 2) {
			if(cm.haveItem(4031456,40) && cm.haveItem(4031311,40) && cm.haveItem(4000463,10) && cm.haveItem(4005004,20) && cm.haveItem(4005000,20) && cm.haveItem(4005001,20) && cm.haveItem(4005002,20) && cm.haveItem(4005003,20) && cm.haveItem(4001085,1) && cm.haveItem(1132243,1) && cm.getMeso() >= 20000000){
				cm.gainItem(4031456, -40);
				cm.gainItem(4031311, -40);
				cm.gainItem(4000463, -10);
				cm.gainItem(4005004, -20);
				cm.gainItem(4005000, -20);
				cm.gainItem(4005001, -20);
				cm.gainItem(4005002, -20);
				cm.gainItem(4005003, -20);
				cm.gainItem(4001085, -1);
				cm.gainItem(1132243, -1);
				cm.gainMeso(-20000000);
		cm.gainItem(1132244,1);//��������
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����[�м����յ�����]������˱�ǿ�ĵڶ�����");
            cm.dispose();
			}else{
            cm.sendOk("���߲����޷�������");
            cm.dispose();
			}
        } else if (selection == 3) {
			if(cm.haveItem(4031456,80) && cm.haveItem(4031311,80) && cm.haveItem(4000463,20) && cm.haveItem(4031559,100) && cm.haveItem(4031558,100) && cm.haveItem(4001084,1) && cm.haveItem(1132244,1) && cm.getMeso() >= 30000000){
				cm.gainItem(4031456, -80);
				cm.gainItem(4031311, -80);
				cm.gainItem(4000463, -20);
				cm.gainItem(4031559, -100);
				cm.gainItem(4031558, -100);
				cm.gainItem(4001084, -1);
				cm.gainItem(1132244, -1);
				cm.gainMeso(-30000000);
		cm.gainItem(1132245,1);//��������
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����[�߼����յ�����]������˱�ǿ�ĵ�������");
            cm.dispose();
			}else{
            cm.sendOk("���߲����޷�������");
            cm.dispose();
			}
        } else if (selection == 4) {
			if(cm.haveItem(4031456,200) && cm.haveItem(4031311,200) && cm.haveItem(4000463,40) && cm.haveItem(4001085,1) && cm.haveItem(4001084,1) && cm.haveItem(4001083,1) && cm.haveItem(1122000,1) && cm.haveItem(1132245,1) && cm.getMeso() >= 50000000){
				cm.gainItem(4031456, -200);
				cm.gainItem(4031311, -200);
				cm.gainItem(4000463, -40);
				cm.gainItem(4001085, -1);
				cm.gainItem(4001084, -1);
				cm.gainItem(4001083, -1);
				cm.gainItem(1122000, -1);
				cm.gainItem(1132245, -1);
				cm.gainMeso(-50000000);
		cm.gainItem(1132246,1);//��������
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����[��߼����յ�����]������˱�ǿ�����һ����");
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


