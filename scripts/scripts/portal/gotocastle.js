function enter(pi) {
	if (pi.isQuestActive(2324)) {
	    pi.forceCompleteQuest(2324);
	    pi.removeAll(2430015);
	    pi.playerMessage("任務完成。");
	}
	pi.warp(106020501,0);
	return true;
}