importPackage(Packages.tools);

var eim;

var closeTime = 24000; //���ŵ�ʱ�䵽��
var beginTime = 30000; //��ʼ��ʻ��ʱ�䵽��
var rideTime = 60000; //��Ҫ�ƶ���Ŀ�ĵص�ʱ��

function init() {
    scheduleNew();
}

function scheduleNew() {
    eim = em.newInstance("Cabin");
    em.setProperty("docked", "true");
    em.setProperty("entry", "true");
    em.getChannelServer().getMapFactory().getMap(240000110).broadcastMessage(MaplePacketCreator.serverNotice(6, "��ľ�忪�����֮�ǵĴ��Ѿ�����.��ץ��ʱ���ϴ�"));
    em.getChannelServer().getMapFactory().getMap(240000110).broadcastMessage(MaplePacketCreator.playSound("Whistle"));
    em.getChannelServer().getMapFactory().getMap(200000131).broadcastMessage(MaplePacketCreator.serverNotice(6, "���֮�ǿ�����ľ��Ĵ��Ѿ�����.��ץ��ʱ���ϴ�"));
    em.getChannelServer().getMapFactory().getMap(200000131).broadcastMessage(MaplePacketCreator.playSound("Whistle"));
    em.schedule("stopEntry", closeTime);
    em.schedule("takeoff", beginTime);
}

function stopEntry() {
    em.setProperty("entry", "false");
}

function takeoff() {
    var Omap = eim.getMapFactory().getMap(200090200);
    var Lmap = eim.getMapFactory().getMap(200090210);
    em.setProperty("docked", "false");
    if (eim.getPlayerCount() != 0) {
        var iter = eim.getPlayers().iterator();
        while (iter.hasNext()) {
            var player = iter.next();
            if (player.getMapId() == 200000132) {
                player.changeMap(Omap, Omap.getPortal(0));
            } else {
                player.changeMap(Lmap, Lmap.getPortal(0));
            }
        }
    }
    em.getChannelServer().getMapFactory().getMap(240000110).broadcastMessage(MaplePacketCreator.serverNotice(6, "��ľ�忪�����֮�ǵĴ��Ѿ�����."));
    em.getChannelServer().getMapFactory().getMap(240000110).broadcastMessage(MaplePacketCreator.playSound("Whistle"));
    em.getChannelServer().getMapFactory().getMap(200000131).broadcastMessage(MaplePacketCreator.serverNotice(6, "���֮�ǿ�����ľ��Ĵ��Ѿ�����."));
    em.getChannelServer().getMapFactory().getMap(200000131).broadcastMessage(MaplePacketCreator.playSound("Whistle"));
    em.schedule("arrived", rideTime);
}

function arrived() {
    var Odocked = em.getChannelServer().getMapFactory().getMap(200000100);
    var Ldocked = em.getChannelServer().getMapFactory().getMap(240000100);
    if (eim.getPlayerCount() != 0) {
        var iter = eim.getPlayers().iterator();
        while (iter.hasNext()) {
            var player = iter.next();
            if (player.getMapId() == 200090200) {
                player.changeMap(Ldocked, Ldocked.getPortal(0));
            } else {
                player.changeMap(Odocked, Odocked.getPortal(0));
            }
            eim.unregisterPlayer(player);
        }
    }
    em.disposeInstance("Cabin");
    eim.dispose();
    scheduleNew();
}

function playerEntry(eim, player) {
    var BFtakeoff;
    if (player.getMapId() == 200000131)
        BFtakeoff = em.getChannelServer().getMapFactory().getMap(200000132);
    else
        BFtakeoff = em.getChannelServer().getMapFactory().getMap(240000111);
    player.changeMap(BFtakeoff, BFtakeoff.getPortal(0));
}

function playerExit(eim, player) {
    var getOff;
    if (player.getMapId() == 200000132)
        getOff = em.getChannelServer().getMapFactory().getMap(200000131);
    else
        getOff = em.getChannelServer().getMapFactory().getMap(240000110);
    player.changeMap(getOff, getOff.getPortal(0));
}

function playerDisconnected(eim, player) {
    var playerMap = player.getMapId();
    eim.unregisterPlayer(player);
    player.getMap().removePlayer(player);
    if (playerMap == 200000132)
        player.setMap(em.getChannelServer().getMapFactory().getMap(200000100));
    else
        player.setMap(em.getChannelServer().getMapFactory().getMap(240000100));
}

function cancelSchedule() {
}