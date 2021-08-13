function action(mode, type, selection) {
    var em = cm.getEventManager("Juliet");
    if (em == null) {
	cm.sendOk("�Ҳ����ű�������ϵGM��");
	cm.dispose();
	return;
    }
    switch(cm.getPlayer().getMapId()) {
	case 261000021:
	    cm.removeAll(4001130);
	    cm.removeAll(4001131);
	    cm.removeAll(4001132);
	    cm.removeAll(4001133);
	    cm.removeAll(4001134);
	    cm.removeAll(4001135);
	    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
		cm.sendOk("���Ҷӳ�������̸��");
	    } else {
		var party = cm.getPlayer().getParty().getMembers();
		var mapId = cm.getPlayer().getMapId();
		var next = true;
		var size = 0;
		var it = party.iterator();
		while (it.hasNext()) {
			var cPlayer = it.next();
			var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			if (ccPlayer == null || ccPlayer.getLevel() < 70 || ccPlayer.getLevel() > 120) {
				next = false;
				break;
			}
			size += (ccPlayer.isGM() ? 4 : 1);
		}	
		if (next && (cm.getPlayer().isGM() || size >= 4)) {
			em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap());
		} else {
			cm.sendOk("����Ķ�Ա����4����(��)��Ҫ70������(��)120������(120Ҳ��)��Ҫ�����ŵ�ͼ��������");
		}
	    }
	    break;
	case 926110000:
	    cm.sendOk("��Ӧ�ó��������������ء��������е��ļ���ֱ��������ҵ����ʵ����.");
	    break;
	case 926110001:
	    cm.sendOk("���������еĹ��");
	    break;
	case 926110100:
	    cm.sendOk("����ձ��������װ����");
	    break;
	case 926110200:
	    if (cm.haveItem(4001131,1)) {
		cm.sendOk("Ŷ���ҵ����ҵ��ˣ�лл��");
		cm.gainItem(4001131,-1);
		em.setProperty("stage", "1");
	    } else if (cm.haveItem(4001134,1)) {
		cm.gainItem(4001134,-1);
		cm.sendOk("лл�㣬���ڰ�����#t4001135#.");
		em.setProperty("stage4", "1");
	    } else if (cm.haveItem(4001135,1) && em.getProperty("stage4").equals("1")) {
		cm.gainItem(4001135,-1);
		cm.sendOk("лл�㣬�Ѿ������ˡ�.");
		em.setProperty("stage4", "2");
		cm.getMap().getReactorByName("jnr3_out3").hitReactor(cm.getClient());
	    } else {
	    	cm.sendOk("�������Ǳ���ֹͣ��ͻ��������ҳ�#t4001134# �� #t4001135#��");
	    }
	    break;
	case 926100300:
	    cm.sendOk("����һ��Ҫ��ʵ���ҵĶ���.");
	    break;
	case 926100400:
	    cm.sendOk("����׼�����ˣ�����Ҫ��ȥ�Ⱦ��ҵİ���.");
	    break;
	case 926110401:
	    cm.warpParty(926110500); //urete
	    break;
    }
    cm.dispose();
}