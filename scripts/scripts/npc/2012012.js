var status = -1;

function action(mode, type, selection) {
	if (cm.getQuestStatus(3004) == 1) {
        cm.sendNext("�������");
		cm.forceCompleteQuest(3004);
    } else {
        cm.sendNext("������ʲô������??");
		cm.dispose();
    }   
}

