function start() {
	    if (cm.haveItem(4000194,10) && cm.getBossLog('PlayQuest168') < 200) {
        cm.setBossLog('PlayQuest168');
			cm.gainItem(4000194, -10);
			cm.warp(701010322, "sp");	
			cm.dispose();
	} else {
	   cm.sendOk("��û�к���ë1��,�������Ѿ������200��!");
    cm.dispose();
}
}