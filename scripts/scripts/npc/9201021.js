var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.sendOk("�ðɣ���������Ҫ�������ҡ�");
	    cm.dispose();
	    return;
	}
	status--;
    }
    if (cm.getMapId() == 680000300 && cm.getQuestRecord(160002).getCustomData() != null) {
	var dat = parseInt(cm.getQuestRecord(160002).getCustomData());
	if (cm.getPlayer().getMarriageId() > 0) {
	    var WeddingMap = cm.getMap(680000400);
	    WeddingMap.resetFully();
	    var BounsMap = cm.getMap(680000401);
	    BounsMap.resetFully();
		cm.warpMap(680000400,0);
		cm.dispose();
	    return;
               } else {
            cm.dispose();
	}
    }
    if (cm.getMapId() == 680000400 && cm.getQuestRecord(160002).getCustomData() != null) {
	var dat = parseInt(cm.getQuestRecord(160002).getCustomData());
        var chr = cm.getMap().getCharacterById(cm.getPlayer().getMarriageId());
	var map = cm.getMap(680000401);
	if (cm.getPlayer().getMarriageId() > 0 && chr != null) {
            cm.getPlayer().changeMap(map, map.getPortal(0));
            chr.changeMap(map, map.getPortal(0));
	    cm.dispose();
	    return;
        } else if ( chr == null ) {
            cm.sendOk("�����һ������ȥ��?");
        } 
        else {
	    cm.dispose();
	}
    }
    if (cm.getMapId() == 680000401 && cm.getQuestRecord(160002).getCustomData() != null) {
	var dat = parseInt(cm.getQuestRecord(160002).getCustomData());
//	    if (status == 0) {
//	    	cm.sendYesNo("��Ҫ��ȥ��?");
//	    } else {
		cm.warpMap(680000500,0);
		cm.dispose();
//	    }
	    return;
//	}
    }
    if (status == 0) {
	cm.sendYesNo("��ȷ��Ҫ�뿪����᳡��? �뿪�˾ͽ��������");
    } else if (status == 1) {
	cm.warp(680000500, 0);
	cm.dispose();
    }
}
