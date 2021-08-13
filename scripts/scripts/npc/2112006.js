function action(mode, type, selection) {
    var em = cm.getEventManager("Romeo");
    if (em == null) {
        cm.sendOk("Please try again later.");
        cm.dispose();
        return;
    }
    switch (cm.getPlayer().getMapId()) {
    case 261000011:
        cm.removeAll(4001130);
        cm.removeAll(4001131);
        cm.removeAll(4001132);
        cm.removeAll(4001133);
        cm.removeAll(4001134);
        cm.removeAll(4001135);
        if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
            cm.sendOk("�ӳ��������������������˵��.");
        } else {
            var party = cm.getPlayer().getParty().getMembers();
            var mapId = cm.getPlayer().getMapId();
            var next = true;
            var size = 0;
            var it = party.iterator();
            while (it.hasNext()) {
                var cPlayer = it.next();
                var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                if (ccPlayer == null || ccPlayer.getLevel() < 70 || ccPlayer.getLevel() > 200) {
                    next = false;
                    break;
                }
                size += (1);
            }
            if (next && (size >= 1)) {
                var prop = em.getProperty("state");
                if (prop.equals("0") || prop == null) {
                    em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap());
                } else {
                    cm.sendOk("Another party quest has already entered this channel.");
                }
            } else {
                cm.sendOk("��Ա����Ҫ70������.");
            }
        }
        break;
    case 926100000:
        cm.sendOk("You should try investigating around here. Look at the files in the Library until you can find the entrance to the Lab.");
        break;
    case 926100001:
        cm.sendOk("Please, eliminate all the monsters! I'll come right behind you.");
        break;
    case 926100100:
        cm.sendOk("These beakers have leaks in them. We must pour the Suspicious Liquid to the beakers' brims so we can continue.");
        break;
    case 926100200:
        if (cm.haveItem(4001130, 1)) {
            cm.sendOk("�ٵ���һ�Σ����ܹ��أ�");
            cm.gainItem(4001130, -1);
            em.setProperty("stage", "1");
        } else if (cm.haveItem(4001134, 1)) {
            cm.gainItem(4001134, -1);
            cm.sendOk("̫��л���ˣ����������ܽ�ȥ�ˣ��м���š��ӳ�����ɣ�");
            em.setProperty("stage4", "2");
			cm.getMap().getReactorByName("rnj3_out3").hitReactor(cm.getClient());
        } else if (cm.haveItem(4001135, 1) && cm.isLeader()) {
		cm.givePartyExp(400000);
	//	pi.warpParty(926100200);
	
            cm.gainItem(4001135, -1);
            cm.sendOk("̫��л���ˣ����������ܽ�ȥ��.");
            em.setProperty("stage4", "2");
            cm.getMap().getReactorByName("rnj3_out3").hitReactor(cm.getClient());
        } else {
            cm.sendOk("��ʦͨ���ұߵ��ţ���ȡͨ�ز��Ͻ����ӳ����ӳ����µ���һ�Ρ�");
        }
        break;
    case 926100300:
        cm.sendOk("���Ǳ���ﵽʵ���Ҷ���, each of your members.");
        break;
    case 926100400:
        cm.sendOk("Whenever you are ready, we shall go and save my love.");
        break;
    case 926100401:
        cm.warpParty(926100500); //urete
        break;
    }
    cm.dispose();
}