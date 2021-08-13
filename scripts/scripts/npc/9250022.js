/*
 ����а�� -- ���NPC
 */

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (cm.getPlayer().getClient().getChannel() != 2) {
		cm.sendOk("����а��ֻ����Ƶ�� 2 �ܴ���ѡ�");
		cm.dispose();
	} else if (cm.getPlayer().getMapId() != 501030104) {
		cm.sendOk("Ҫ�� #b����а��#k �뵽 #r#m501030104##k ��������ɣ���");
        cm.dispose();
	} else if (!cm.haveItem(4031722)) {
		cm.sendOk("�����������޷����룬��Ҫ��̫���𻨡�");
		cm.dispose();
		}
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("#b�װ��� #k#h  ##e\r\n#b�Ƿ�Ҫ��ս����а�񸱱�??#k \r\n#L0##r��Ҫ��ս����а��#k#l");
        } else if (status == 1) {
            if (selection == 0) {
                var pt = cm.getPlayer().getParty();
				if (cm.getParty() == null) {
                    cm.sendOk("�������������....");
                } else if (!cm.isLeader()) {
                    cm.sendOk("�����Ķӳ�������!");
                } else if (pt.getMembers().size() < 3) {
                    cm.sendOk("��Ҫ 3 �����ϵ���Ӳ��ܽ��룡!");
                    cm.dispose();
                } else {
                    var party = cm.getParty().getMembers();
                    var mapId = cm.getMapId();
                    var next = true;
                    var levelValid = 0;
                    var inMap = 0;

                    var it = party.iterator();
                    while (it.hasNext()) {
                        var cPlayer = it.next();
                        if ((cPlayer.getLevel() >= 90 && cPlayer.getLevel() <= 200) || cPlayer.getJobId() == 900) {
                            levelValid += 1;
                        } else {
                            next = false;
                        }
                        if (cPlayer.getMapid() == mapId) {
                            inMap += (cPlayer.getJobId() == 900 ? 3 : 1);
                        }
                    }
                    if (party.size() > 3 || inMap < 1) {
                        next = false;
                    }
                    if (next) {
                        var em = cm.getEventManager("Ravana");
                        if (em == null) {
                            cm.sendOk("��ǰ���������⣬���������Ա....");
                        } else {
                            var prop = em.getProperty("state");
                            if (prop.equals("0") || prop == null) {
                                em.startInstance(cm.getParty(), cm.getMap());
                                cm.dispose();
                                return;
                            } else {
                                cm.sendOk("�����Ѿ���������ս...");
                            }
                        }
                    } else {
                        cm.sendOk("�ȼ���δ�ﵽ #r90#k �����Ѿ����� #r200#k");
                    }
                }
                cm.dispose();
            }
        }
    }
}