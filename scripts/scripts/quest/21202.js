var status = -1;

function start(mode, type, selection) {
    qm.sendNext("You want a pole arm? Hah! You don't look strong at all. Way outta your league. If you want a pole arm, prove me wrong by hunting #r#o9001012#s#k to the west of here, and find 30 #b#t4032311##k!");
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        qm.sendNext("�������Ѿ�֤�����Լ��ļ�ֵ�����õ�����Ҫ�ģ��Ƿ�תְ��");
    } else if (status == 1) {
        if (qm.getPlayerStat("RSP") > (qm.getPlayerStat("LVL") - 30) * 3) {
            qm.sendNext("����̫��δ����� #bSP#k. ��ǿ�ҽ����������һת�Ͷ�ת������ʹ�ø����SP��.");
            qm.dispose();
            return;
        }
        qm.sendNextS("�ҵĻ����ֻ����ˡ�", 2);
        qm.changeJob(2110);
        qm.gainItem(1142130, 1);
        qm.gainItem(4032311, -30);
		qm.teachSkill(21100000,0,20);//���뾫׼ì
        qm.forceCompleteQuest(21201);
        qm.forceCompleteQuest();
    } else if (status == 2) {
        qm.sendOk("����!���Ѿ��õ�����Ҫ���ˣ���ת�ɹ��������뿪��");
        qm.dispose();
    }
}