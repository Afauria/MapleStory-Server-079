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
                text += "#e#k#r             ��ӭ���������ȡ����#k#n\r\n1:Ϊ������ȳ�ֵӰ�������̬��ÿ�³�ֵ����800�������������Ӵ~\r\n\r\n2����л��ÿһ�ֵ�����������ð�յ�������ҵ�����İ��������ǻ᲻�ϸ�����������Ϸ���飡\r\n\r\n";
            // text += "#L1##d�·����������#l\r\n\r\n"//
            text += "#L2##d#v4310025##z4310025#\t��ȡ�ۼƳ�ֵ100���#l\r\n\r\n"//
            text += "#L3##d#v4310048##z4310048#\t��ȡ�ۼƳ�ֵ300���#l\r\n\r\n"
            text += "#L4##d#v4310079##z4310079#\t��ȡ�ۼƳ�ֵ500���#l\r\n\r\n"
            text += "#L5##d#v4310119##z4310119#\t��ȡ�ۼƳ�ֵ800���#l\r\n\r\n"
            text += "#L6##d#v4310022##z4310022#\t     ��ȡŮ����֤���#l\r\n\r\n"
            //text += "#L7##d#v4310025##z4310025#\t��ȡ�ۼƳ�ֵ5000���#l\r\n\r\n"
            //text += "#L8##d#v4310010##z4310010#\t��ȡ�ٷ���֤��������#l\r\n\r\n"
            cm.sendSimple(text);
            }
        } else if (selection == 1) {
			 if(cm.getPlayer().getOneTimeLog("kaifulibao") > 0){
				cm.sendOk("���Ѿ���ȡ���·�������������޷�������ȡ");
				cm.dispose();
        } else {
				cm.gainItem(5040000, 20);
				cm.gainItem(5041000, 10);
				cm.gainNX(900);
				cm.gainDY(3000);
				cm.sendOk("��ϲ����ȡ�ɹ������20����ͨ���أ�10���߼����أ�900��ȯ��3000����");
			cm.getPlayer().setOneTimeLog("kaifulibao");
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���·������������" + " : " + "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���ȡ���·������������,����ð�յ���ӭ��ĵ�������"));
	    }
        } else if (selection == 2) {
		cm.openNpc(9900004, 802);
        } else if (selection == 3) {
		cm.openNpc(9900004, 803);
        } else if (selection == 4) {
		cm.openNpc(9900004, 804);
        } else if (selection == 5) {
		cm.openNpc(9900004, 805);
        } else if (selection == 6) {
		cm.openNpc(9900004, 806);
        } else if (selection == 7) {
		cm.openNpc(9900004, 807);
        } else if (selection == 8) {
		cm.openNpc(9900004, 808);
	}
    }
}


