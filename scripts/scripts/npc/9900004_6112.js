var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
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
                text += "";
            }
			//��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
            text += "#k������ð��֮�������б���ѡ����Ҫ��������Ʒ����\r\n\r\n"//3
            text += "#L1##b" + ��ɫ��ͷ + "����սʿ����֮��"//
            text += "#L2##b" + ��ɫ��ͷ + "������ʦ����֮��\r\n\r\n"//
            text += "#L3##b" + ��ɫ��ͷ + "�������־���֮��"//
            text += "#L4##b" + ��ɫ��ͷ + "������������֮��\r\n\r\n"//
            text += "#L5##b" + ��ɫ��ͷ + "������������֮��"//
            //text += "#L6##b" + ��ɫ��ͷ + "����Ѫ��\r\n\r\n"//
            //text += "#L7##b" + ��ɫ��ͷ + "����ð��֮��"//
			//text += "#L8##b" + ��ɫ��ͷ + "�һ�#v2049100##z2049100#\t��Ҫ��#r#v4310015#x20#k��\r\n\r\n"//
			//text += "#L9##b" + ��ɫ��ͷ + "����#v2340000##z2340000#\t��Ҫ��#r#v4310015#x20#k��\r\n\r\n"//
            //text += "#L9##b" + ��ɫ��ͷ + "����#v1452205##z1452205#\r\n"//
            //text += "#L10##b" + ��ɫ��ͷ + "����#v1462193##z1462193#\r\n"//
            //text += "#L11##b" + ��ɫ��ͷ + "����#v1332225##z1332225#\r\n"//
            //text += "#L12##b" + ��ɫ��ͷ + "����#v1472214##z1472214#\r\n"//
            //text += "#L13##b" + ��ɫ��ͷ + "����#v1482168##z1482168#\r\n"//
            //text += "#L14##b" + ��ɫ��ͷ + "����#v1492179##z1492179#\r\n"//
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9900004, 312);
        } else if (selection == 2) {
		cm.openNpc(9900004, 313);
        } else if (selection == 3) {
		cm.openNpc(9900004, 314);
        } else if (selection == 4) {
		cm.openNpc(9900004, 315);
        } else if (selection == 5) {
		cm.openNpc(9900004, 316);
        } else if (selection == 6) {
            cm.openNpc(1002006, 0);
        } else if (selection == 7) {
		cm.openNpc(9900004, 311);
        } else if (selection == 8) {
		cm.openNpc(9900004, 908);
        } else if (selection == 9) {
		cm.openNpc(9900004, 909);
        } else if (selection == 10) {
		cm.openNpc(9900004, 910);
        } else if (selection == 11) {
		cm.openNpc(9900004, 911);
        } else if (selection == 12) {
		cm.openNpc(9900004, 512);
        } else if (selection == 13) {
		cm.openNpc(9900004, 513);
        } else if (selection == 14) {
		cm.openNpc(9900004, 514);
        } else if (selection == 15) {
            if (cm.getPlayer().getLevel() < 70) {
                cm.sendOk("��ĵȼ�С�� 70 �����޷���ȡ������ż���");
                cm.dispose();
            } else if(cm.haveItem(4031326,1)){
                cm.sendOk("���Ѿ�ӵ�в�����ż����벻Ҫ�ظ���ȡ��С�Ĵ�����ʺ���㣡");
                cm.dispose();
            } else {
cm.gainItem(4031326,+1);//������ż�
                cm.sendOk("��ϲ����ȡ�ɹ�����ȥ�����˰ѣ�");
cm.����(3, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���ȡ������ż�����ȥ�����˰ѣ���");
                cm.dispose();
	}
	}
    }
}


