/*
	Lakelis - Victoria Road: Kerning City (103000000)
**/

var minMember = 1;
var maxMember = 7;

function start() {
    cm.removeAll(4001007);
    cm.removeAll(4001008);
    if (cm.getParty() == null) { // No Party
	cm.sendOk("�������������");
    } else if (!cm.isLeader()) { // Not Party Leader
	cm.sendOk("�����Ķӳ�������!");
    } else {
	// Check if all party members are within Levels 21-30
	var party = cm.getParty().getMembers();
	var mapId = cm.getMapId();
	var next = true;
	var levelValid = 0;
	var inMap = 0;

	var it = party.iterator();
	while (it.hasNext()) {
	    var cPlayer = it.next();
	    if ((cPlayer.getLevel() >= 21 && cPlayer.getLevel() <= 200) || cPlayer.getJobId() == 900) {
		levelValid += 1;
	    } else {
		next = false;
	    }
	    if (cPlayer.getMapid() == mapId) {
		inMap += (cPlayer.getJobId() == 900 ? 4 : 1);
	    }
	}
	if (party.size() >= maxMember || inMap < minMember) {
	    next = false;
	}
	if (next) {
	    var em = cm.getEventManager("KerningPQ");
	    if (em == null) {
			cm.sendOk("�Ҳ����ű�������ϵGM��");
			cm.dispose();
			return;		
	    } else {
		var prop = em.getProperty("state");
		if (prop == null || prop.equals("0")) {
		    em.startInstance(cm.getParty(),cm.getMap());
		} else {
		    cm.sendOk("�Ѿ��ж�����������ս�ˡ�");
			cm.dispose();
			return;
		}
		cm.removeAll(4001008);
		cm.removeAll(4001007);
	    }
	} else {
	    cm.sendOk("��Ķ�����Ҫ����,�ȼ�������21-200֮��,��ȷ����Ķ�����û�ж�������,���������Ѿ�������!");
		cm.dispose();
		return;
	}
    }
    cm.dispose();
}

function action(mode, type, selection) {
}