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
                text += "������������������յ�֮��Ŷ����\r\n";
            text += "" + ��ɫ��ͷ + "#L1##r����#v1113072#�ͼ����յ½�ָ��5��ά��5G5M��\r\n��Ҫ��#v4031559# 40����#v4031558# 40����#v4002002# 40����#v4000244# 5����#v4000245# 5�������=1000W\r\n\r\n"//3
            text += "" + ��ɫ��ͷ + "#L2##r����#v1113073#�м����յ½�ָ��10��ά��10G10M��\r\n��Ҫ��#v1113072# 1����#v4031559# 60����#v4031558# 60����#v4002002# 60����#v4000244# 10����#v4000245# 10�������=2000W\r\n\r\n"//3
            text += "" + ��ɫ��ͷ + "#L3##r����#v1113074#�߼����յ½�ָ��15��ά��15G15M��\r\n��Ҫ��#v1113073# 1����#v4031559# 80����#v4031558# 80����#v4002002# 80����#v4000244# 15����#v4000245# 15�������=3000W\r\n\r\n"//3
            text += "" + ��ɫ��ͷ + "#L4##r����#v1113075#��߼����յ½�ָ��25��ά��25G25M��\r\n��Ҫ��#v1113074# 1����#v4031559# 100����#v4031558# 100����#v4002002# 100����#v4000244# 20����#v4000245# 20�������=5000W\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L5##r����#v1122126##z1122126#\r\n��Ҫ��#v4001126# 5000����#v1122147# 1�������=1�ڡ�#v4005004# 100��\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L6##r#v5211047##z5211047#\tʹ��Ȩ��7��Ȩ\t��Ҫ���3000��\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L7##r#v2049100##z2049100#10��\t��Ҫ���15000��\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L8##r#v2340000##z2340000#10��\t��Ҫ���15000��\r\n\r\n"//3
            cm.sendSimple(text);
            }
        } else if (selection == 1) {
			if(cm.haveItem(4031559,40) && cm.haveItem(4031558,40) && cm.haveItem(4002002,40) && cm.haveItem(4000244,5) && cm.haveItem(4000245,5) && cm.getMeso() >= 10000000){
				cm.gainItem(4031559, -40);
				cm.gainItem(4031558, -40);
				cm.gainItem(4002002, -40);
				cm.gainItem(4000244, -5);
				cm.gainItem(4000245, -5);
				cm.gainMeso(-10000000);
		cm.gainItem(1113072,5,5,5,5,0,0,5,5,0,0,0,0,0,0);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����[�ͼ����յ½�ָ]������˱�ǿ�ĵ�һ����");
            cm.dispose();
			}else{
            cm.sendOk("���߲����޷�������");
            cm.dispose();
			}
        } else if (selection == 2) {
			if(cm.haveItem(4031559,60) && cm.haveItem(1113072,1) && cm.haveItem(4031558,60) && cm.haveItem(4002002,60) && cm.haveItem(4000244,10) && cm.haveItem(4000245,10) && cm.getMeso() >= 20000000){
				cm.gainItem(4031559, -60);
				cm.gainItem(1113072, -1);
				cm.gainItem(4031558, -60);
				cm.gainItem(4002002, -60);
				cm.gainItem(4000244, -10);
				cm.gainItem(4000245, -10);
				cm.gainMeso(-20000000);
		cm.gainItem(1113073,10,10,10,10,0,0,10,10,0,0,0,0,0,0);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����[�м����յ½�ָ]������˱�ǿ�ĵڶ�����");
            cm.dispose();
			}else{
            cm.sendOk("���߲����޷�������");
            cm.dispose();
			}
        } else if (selection == 3) {
			if(cm.haveItem(4031559,80) && cm.haveItem(1113073,1) && cm.haveItem(4031558,80) && cm.haveItem(4002002,80) && cm.haveItem(4000244,15) && cm.haveItem(4000245,15) && cm.getMeso() >= 30000000){
				cm.gainItem(4031559, -80);
				cm.gainItem(1113073, -1);
				cm.gainItem(4031558, -80);
				cm.gainItem(4002002, -80);
				cm.gainItem(4000244, -15);
				cm.gainItem(4000245, -15);
				cm.gainMeso(-30000000);
		cm.gainItem(1113074,15,15,15,15,0,0,15,15,0,0,0,0,0,0);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����[�߼����յ½�ָ]������˱�ǿ�ĵ�������");
            cm.dispose();
			}else{
            cm.sendOk("���߲����޷�������");
            cm.dispose();
			}
        } else if (selection == 4) {
			if(cm.haveItem(4031559,100) && cm.haveItem(1113074,1) && cm.haveItem(4031558,100) && cm.haveItem(4002002,100) && cm.haveItem(4000244,20) && cm.haveItem(4000245,20) && cm.getMeso() >= 50000000){
				cm.gainItem(4031559, -100);
				cm.gainItem(1113074, -1);
				cm.gainItem(4031558, -100);
				cm.gainItem(4002002, -100);
				cm.gainItem(4000244, -20);
				cm.gainItem(4000245, -20);
				cm.gainMeso(-50000000);
		cm.gainItem(1113075,25,25,25,25,0,0,25,25,0,0,0,0,0,0);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����[��߼����յ½�ָ]������˱�ǿ�����һ����");
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


