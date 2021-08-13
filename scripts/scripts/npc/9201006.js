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
    if (cm.getMapId() != 680000200) {
	cm.dispose();
	return;
    }
    if (status == 0) {
	cm.sendYesNo("��Ҫǰ�����������?");
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
		    cm.sendOk("��ȷ��������һ���ڵ�ͼ�ϡ�");
		    cm.dispose();
		    return;
	    	}
		var maps = Array(680000210, 680000300, 680000400, 680000401);
		for (var i = 0; i < maps.length; i++) {
		    if (cm.getMap(maps[i]).getCharactersSize() > 0) {
			cm.sendNext("Ŀǰ�������ھ��л����鷳����������Ե�һ�¡�");
			cm.dispose();
			return;
		    }
		}
		var map = cm.getMap(680000210);
		cm.getPlayer().changeMap(map, map.getPortal("we00"));
		chr.changeMap(map, map.getPortal("we00"));
//		cm.getPlayer().changeMap(map, map.getPortal(0));
//		chr.changeMap(map, map.getPortal(0));
		cm.worldMessage(5, "<Ƶ�� " + cm.getClient().getChannel() + "> " + cm.getPlayer().getName() + " �� " + chr.getName() + "'�Ļ��񼴽���ʼ����,Ҫ�μӵ�����뵽���С������Ů���룡");
	    } else {
		if (cm.getMap(680000210).getCharactersSize() == 0) {
		    cm.sendNext("Ŀǰû�л����ھ��У����Ժ��ٳ��ԡ�");
		    cm.dispose();
		    return;
		}
//		if (cm.haveItem(4150000)) {
		    cm.warp(680000210,0);
//		} else {
//		    cm.sendOk("You do not have a wedding invitation.");
//		}
	    }
	cm.dispose();
    }
}