function action(mode, type, selection) {
	cm.removeAll(4032248);
	    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
		cm.sendOk("���Ҷӳ�������̸����");
	    } else {
		var party = cm.getPlayer().getParty().getMembers();
		var mapId = cm.getPlayer().getMapId();
		var next = true;
		var size = 0;
		var it = party.iterator();
		while (it.hasNext()) {
			var cPlayer = it.next();
			var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			if (ccPlayer == null || ccPlayer.getLevel() < 8) {
				next = false;
				break;
			}
			size += (ccPlayer.isGM() ? 2 : 1);
		}	
		if (next && size >= 2) {
			var em = cm.getEventManager("MV");
			if (em == null) {
				cm.sendOk("Ŀǰ��������һ��״�������Ժ��ٳ��ԡ�");
			} else {
				em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap());
			}
		} else {
			cm.sendOk("����Ҫ2��8�����ϵġ�");
		}
	    }
	cm.dispose();
}