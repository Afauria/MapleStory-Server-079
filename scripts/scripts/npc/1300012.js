function start() {
    cm.sendSimple("�ƶ���#b#m106021500##k Ҫǰ���������أ� #b\r\n#L0#����ɫѩ���� (��Ҫ300����)#l\r\n#L1#���ȷ�ŷ��#l#k");
}

function action(mode,type,selection) {
    if (mode == 1) {
	switch(selection) {
	    case 0:
		
		//if (cm.getPlayer().getClient().getChannel() != 4 && cm.getPlayer().getClient().getChannel() != 5) {
			//cm.sendOk("ֻ����Ƶ�� #r 4��5#k �߿�����ս");
			//cm.dispose();
		//	return;
	  //  }
	    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
		cm.sendOk("������Ķӳ�������˵����");
	    } else {
		var party = cm.getPlayer().getParty().getMembers();
		var mapId = cm.getPlayer().getMapId();
		var next = true;
		var size = 0;
		var it = party.iterator();
		while (it.hasNext()) {
			var cPlayer = it.next();
			var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			if (ccPlayer == null) {
				next = false;
				break;
			}
			size += (ccPlayer.isGM() ? 4 : 1);
		}	
		if (next && (cm.getPlayer().isGM() || size >= 2)) {
	    	    for(var i = 0; i < 10; i++) {
			if (cm.getMap(106021500 + i).getCharactersSize() == 0) {
		    		cm.warpParty(106021500 + i);
				cm.dispose();
		    		return;
			}
	    	    }
			cm.sendOk("�Ѿ�����һ����������ս�����Ժ��ٳ��ԡ�");
		} else {
			cm.sendOk("��������Ҫ1�������ϡ�");
		}
	    }
		break;
	    case 1:
		cm.warp(106021401,0);
		break;
	}
    }
    cm.dispose();
}