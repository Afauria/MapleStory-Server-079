function start() {
	if (cm.getQuestStatus(8626) == 1 || cm.getQuestStatus(8626) == 2) {
             cm.warp(741020100);
             cm.dispose();
	} else {
	    cm.sendOk("��û�н���ǰ������");
            cm.dispose();
        }
    }