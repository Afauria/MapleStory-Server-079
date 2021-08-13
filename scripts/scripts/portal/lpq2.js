﻿function enter(pi) {
    var eim = pi.getEventManager("LudiPQ").getInstance("LudiPQ");
    
    // only let people through if the eim is ready
    if (eim.getProperty("stage2status") == null) { // do nothing; send message to player
	pi.playerMessage(5, "該洞口目前無法進入。");
    } else {
			pi.removeAll(4001022);
	pi.warp(pi.getMapId() + 100, "st00");
    }
}