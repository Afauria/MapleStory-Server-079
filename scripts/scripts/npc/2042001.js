var status = 0;
var request;

function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status = 0;
    if (status == 0) {
        request = cm.getNextCarnivalRequest();
        if (request != null) {
            cm.sendYesNo(request.getChallengeInfo() + "\r\n�Ƿ����������ս??");
        } else {
            cm.dispose();
        }
    } else if (status == 1) {
		var pt = cm.getPlayer().getParty();
		if (checkLevelsAndMap(30, 200) == 1) {
           cm.sendOk("���������˵ȼ������ϡ�");
           cm.dispose();
        } else if (checkLevelsAndMap(30, 200) == 2) {
           cm.sendOk("�ڵ�ͼ���Ҳ������Ķ��ѡ�");
           cm.dispose();
		} else if (pt.getMembers().size() < 1) {
			cm.sendOk("��Ҫ 2 �����ϲſ�����̨����");
			cm.dispose();
		} else {
        try {
            cm.getChar().getEventInstance().registerCarnivalParty(request.getChallenger(), request.getChallenger().getMap(), 1);
            cm.dispose();
        } catch (e) {
            cm.sendOk("Ŀǰ��ս��������Ч�ġ�");
        }
        status = -1;
    }
}
}

function checkLevelsAndMap(lowestlevel, highestlevel) {
    var party = cm.getParty().getMembers();
    var mapId = cm.getMapId();
    var valid = 0;
    var inMap = 0;

    var it = party.iterator();
    while (it.hasNext()) {
        var cPlayer = it.next();
        if (!(cPlayer.getLevel() >= lowestlevel && cPlayer.getLevel() <= highestlevel) && cPlayer.getJobId() != 900) {
            valid = 1;
        }
        if (cPlayer.getMapid() != mapId) {
            valid = 2;
        }
    }
    return valid;
}