var status = -1;

function action(mode, type, selection) {
    if (cm.isQuestActive(3114)) {
		cm.forceCompleteQuest(3114);
		cm.playerMessage(5, "�˸��Ѳ��� +20 ����");
		if ((cm.getPlayer().getFame() + 20) <= 30000) {
			cm.getPlayer().addFame(20);
			cm.getPlayer().updateFame();
		}
    }
    cm.playSound(false, "orbis/do");
    cm.dispose();
}