var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (cm.getMapId() != 680000100) {
	cm.dispose();
	return;
    }
    if (status == 0) {
	cm.sendYesNo("������������ã���");
    } else if (status == 1) {

	    var marr = cm.getQuestRecord(160001);
	    var data = marr.getCustomData();
	    if (data == null) {
		marr.setCustomData("0");
	        data = "0";
	    }
	    if (data.equals("1")) {
		if (cm.getPlayer().getMarriageId() <= 0) {
		    cm.sendOk("�������˴����ˣ�������û�и��κ��˽�飡");
		    cm.dispose();
		    return;
		}
	    	var chr = cm.getMap().getCharacterById(cm.getPlayer().getMarriageId());
	    	if (chr == null) {
		    cm.sendOk("��ȷ��������һ���Ƿ���ͬһ�ŵ�ͼ�ڡ�");
		    cm.dispose();
		    return;
	    	}
		var maps = Array(680000110, 680000300, 680000401);
		for (var i = 0; i < maps.length; i++) {
		    if (cm.getMap(maps[i]).getCharactersSize() > 0) {
			cm.sendNext("�������Ѿ�������һ���������ھ��л������Ժ��������ԡ�");
			cm.dispose();
			return;
		    }
		}
		var map = cm.getMap(680000110);
		cm.getPlayer().changeMap(map, map.getPortal(0));
		chr.changeMap(map, map.getPortal(0));
		cm.worldMessage(5, "<Ƶ�� " + cm.getClient().getChannel() + "> " + cm.getPlayer().getName() + " �� " + chr.getName() + "�����������ã����ҿ����ף�����ǡ�");
	    } else {
		if (cm.getMap(680000110).getCharactersSize() == 0) {
		    cm.sendNext("��������û�оٰ��κλ���ร����Ժ�������");
		    cm.dispose();
		    return;
		}
		if (cm.haveItem(4150000)) {
		    cm.warp(680000110,0);
			cm.removeAll(4150000);
		} else {
		    cm.sendOk("��ȷ���Ƿ���#b#t4150000##k��");
		}
	    }
	cm.dispose();
    }
}