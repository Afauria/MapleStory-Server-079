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
                text += "�������������������ְҵð��֮��Ŷ����\r\n\r\n";
            text += "" + ��ɫ��ͷ + "#L1##r����#v1122129##z1122129#\r\n��Ҫ��#v4001126# 300�������=100W\r\n\r\n"//3
            text += "" + ��ɫ��ͷ + "#L2##r����#v1122137##z1122137#\r\n��Ҫ��#v4001126# 800����#v1122129# 1�������=500W\r\n\r\n"//3
            text += "" + ��ɫ��ͷ + "#L3##r����#v1122142##z1122142#\r\n��Ҫ��#v4001126# 2000����#v1122137# 1�������=1000W��#v4005004# 15��\r\n\r\n"//3
            text += "" + ��ɫ��ͷ + "#L4##r����#v1122147##z1122147#\r\n��Ҫ��#v4001126# 3000����#v1122142# 1�������=2500W��#v4005004# 25��\r\n\r\n"//3
            text += "" + ��ɫ��ͷ + "#L5##r����#v1122126##z1122126#\r\n��Ҫ��#v4001126# 5000����#v1122147# 1�������=5000W��#v4005004# 50��\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L6##r#v5211047##z5211047#\tʹ��Ȩ��7��Ȩ\t��Ҫ���3000��\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L7##r#v2049100##z2049100#10��\t��Ҫ���15000��\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L8##r#v2340000##z2340000#10��\t��Ҫ���15000��\r\n\r\n"//3
            cm.sendSimple(text);
            }
        } else if (selection == 1) {
			if(cm.haveItem(4001126,300) && cm.getMeso() >= 1000000){
				cm.gainItem(4001126, -300);
				cm.gainMeso(-1000000);
				cm.gainItem(1122129, 1);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����[ð��֮��]������˱�ǿ�ĵ�һ����");
            cm.dispose();
			}else{
            cm.sendOk("���߲����޷�������");
            cm.dispose();
			}
        } else if (selection == 2) {
			if(cm.haveItem(4001126,800) && cm.haveItem(1122129,1) && cm.getMeso() >= 5000000){
				cm.gainItem(4001126, -800);
				cm.gainItem(1122129, -1);
				cm.gainMeso(-5000000);
				cm.gainItem(1122137, 1);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����[��ӡð��֮��-����ר��]������˱�ǿ�ĵڶ�����");
            cm.dispose();
			}else{
            cm.sendOk("���߲����޷�������");
            cm.dispose();
			}
        } else if (selection == 3) {
			if(cm.haveItem(4001126,2000) && cm.haveItem(1122137,1) && cm.haveItem(4005004,15) && cm.getMeso() >= 10000000){
				cm.gainItem(4001126, -2000);
				cm.gainItem(1122137, -1);
				cm.gainItem(4005004, -15);
				cm.gainMeso(-10000000);
				cm.gainItem(1122142, 1);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����[����ð��֮��-����ר��]������˱�ǿ�ĵ�������");
            cm.dispose();
			}else{
            cm.sendOk("���߲����޷�������");
            cm.dispose();
			}
        } else if (selection == 4) {
			if(cm.haveItem(4001126,3000) && cm.haveItem(1122142,1) && cm.haveItem(4005004,25) && cm.getMeso() >= 25000000){
				cm.gainItem(4001126, -3000);
				cm.gainItem(1122142, -1);
				cm.gainItem(4005004, -25);
				cm.gainMeso(-25000000);
				cm.gainItem(1122147, 1);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����[����ð��֮��-����ר��]������˱�ǿ�ĵ��Ĳ���");
            cm.dispose();
			}else{
            cm.sendOk("���߲����޷�������");
            cm.dispose();
			}
        } else if (selection == 5) {
			if(cm.haveItem(4001126,5000) && cm.haveItem(1122147,1) && cm.haveItem(4005004,50) && cm.getMeso() >= 50000000){
				cm.gainItem(4001126, -5000);
				cm.gainItem(1122147, -1);
				cm.gainItem(4005004, -50);
				cm.gainMeso(-50000000);
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


