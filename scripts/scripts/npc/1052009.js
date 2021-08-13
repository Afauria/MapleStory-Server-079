/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Treasure Chest - Line 3 Construction Site: B2 <Subway Depot> (103000905)
-- By ---------------------------------------------------------------------------------------------
	Unknown
-- Version Info -----------------------------------------------------------------------------------
	1.1 - Statement fix [Information]
	1.0 - First Version by Unknown
---------------------------------------------------------------------------------------------------
**/

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 2 && mode == 0) {
	cm.sendOk("Alright, see you next time.");
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
	if (cm.getQuestStatus(2056) == 1) {
	    cm.gainItem(4031040, 1); // Shumi's Roll of Cash
	    cm.warp(103000100, 0);
	}
	else {
	    var rand = 1 + Math.floor(Math.random() * 7);
	    if (rand == 1) {
		cm.gainItem(4020005, 2); // Sapphire Ore
	    }
	    else if (rand == 2) {
		cm.gainItem(4020006, 2); // Topaz Ore
	    }
	    else if (rand == 3) {
		cm.gainItem(4020004, 2); // Opal Ore
	    }
	    else if (rand == 4) {
		cm.gainItem(4020001, 2); // Amethyst Ore
	    }
	    else if (rand == 5) {
		cm.gainItem(4020003, 2); // Emerald Ore
	    }
	    else if (rand == 6) {
		cm.gainItem(4020000, 2); // Garnet Ore
	    }
	    else if (rand == 7) {
		cm.gainItem(4020002, 2); // AquaMarine Ore
	    }
	    cm.warp(103000100, 0);
	}
	cm.dispose();
    }
}	


