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
            text += "����������Զһ���ͨ�齱��Ŷ������\r\n\r\n#b��Ļ���ʣ�ࣺ" + cm.getPlayer().getjf() + "�㣡\r\n"//3
            //text += "#L15##r" + ��ɫ��ͷ + "��ȡ#v4031326##z4031326#\t��Ҫ���ȼ��ﵽ70����\r\n\r\n"//
            //text += "#L11##b" + ��ɫ��ͷ + "����#v1112424##z1112424#\t��Ҫ��#r#v4310015#x500#k��\r\n\r\n"//
            //text += "#L1##b" + ��ɫ��ͷ + "#v4310059#�һ��سɾ�\r\n\r\n"//
            //text += "#L2##b" + ��ɫ��ͷ + "#v4310061#�һ�������\r\n\r\n"//
            //text += "#L3##b" + ��ɫ��ͷ + "#v4310063#�һ�����"//
            text += "#L3##b" + ��ɫ��ͷ + "#v4310158#�һ���ͨ�齱��x1��\t��Ҫ���֣�10\r\n\r\n"//
            text += "#L4##b" + ��ɫ��ͷ + "#v4310158#�һ���ͨ�齱��x10��\t��Ҫ���֣�100\r\n\r\n"//
            //text += "#L5##b" + ��ɫ��ͷ + "#v4310100#�ϳɴ���ð�յ�����\r\n\r\n"//
            //text += "#L6##b" + ��ɫ��ͷ + "#v3994731#�һ�Ů��ר������ñ\r\n\r\n"//
            //text += "#L7##b" + ��ɫ��ͷ + "����#v1052461##z1052461#\t��Ҫ��#r#v4310015#x300#k��\r\n\r\n"//
            //text += "#L8##b" + ��ɫ��ͷ + "����#v2100902##z2100902#\t��Ҫ��#r#v4310015#x100#k��\r\n\r\n"//
			//text += "#L9##b" + ��ɫ��ͷ + "�һ�#v2049100##z2049100#\t��Ҫ��#r#v4310015#x20#k��\r\n\r\n"//
			//text += "#L10##b" + ��ɫ��ͷ + "����#v2340000##z2340000#\t��Ҫ��#r#v4310015#x20#k��\r\n\r\n"//
            //text += "#L9##b" + ��ɫ��ͷ + "����#v1452205##z1452205#\r\n"//
            //text += "#L10##b" + ��ɫ��ͷ + "����#v1462193##z1462193#\r\n"//
            //text += "#L11##b" + ��ɫ��ͷ + "����#v1332225##z1332225#\r\n"//
            //text += "#L12##b" + ��ɫ��ͷ + "����#v1472214##z1472214#\r\n"//
            //text += "#L13##b" + ��ɫ��ͷ + "����#v1482168##z1482168#\r\n"//
            //text += "#L14##b" + ��ɫ��ͷ + "����#v1492179##z1492179#\r\n"//
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9300000, 1);
        } else if (selection == 2) {
		cm.openNpc(9300000, 2);
        } else if (selection == 3) {
			if(cm.getPlayer().getjf() >= 10){
				cm.getPlayer().gainjf(-10);
				cm.gainItem(4310158,1);
				cm.sendOk("�����ɹ������#v4310158#x1����");
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "�����ֶһ���ͨ�齱�ҡ�" + " : " + "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���10���ֶһ�����ͨ�齱��x1����,ף��һ����꣡"));
					cm.dispose();
					}else{
					cm.sendOk("���ֲ��㣬���ֵ��û��֣�");
					cm.dispose();
				}
        } else if (selection == 4) {
			if(cm.getPlayer().getjf() >= 100){
				cm.getPlayer().gainjf(-100);
				cm.gainItem(4310158,10);
				cm.sendOk("�����ɹ������#v4310158#x10����");
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "�����ֶһ���ͨ�齱�ҡ�" + " : " + "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���100���ֶһ�����ͨ�齱��x10����,ף��һ����꣡"));
					cm.dispose();
					}else{
					cm.sendOk("���ֲ��㣬���ֵ��û��֣�");
					cm.dispose();
				}
        } else if (selection == 5) {
		cm.openNpc(9300000, 14);
        } else if (selection == 6) {
		cm.openNpc(9300000, 6);
        } else if (selection == 7) {
		cm.openNpc(9900004, 907);
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


