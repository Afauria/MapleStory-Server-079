/*
 ������ɮ -- ���NPC
 */

var shaoling = 2;
function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
	//	if (cm.getPlayer().getClient().getChannel() != 1) {
		//	cm.sendOk("��ɮֻ����Ƶ�� #r1#k ������ս");
		//	cm.dispose();
		//	return;
	//    }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("#b�װ��� #k#h  ##e\r\n#b�Ƿ�Ҫ��ս������ɮ������100���ɽ�#k \r\n\r\n\r\n  #L0##r��Ҫ��ս������ɮ#k#l\r\n\r\n\r\n ");//#L0##r��Ҫ��ս������ɮ#k#l
        } else if (status == 1) {
            if (selection == 0) {
                var pt = cm.getPlayer().getParty();
                if ( cm.getQuestStatus(8534) != 0 ) {
                    cm.sendOk("��ɮ��ʱ�ر�ά�ޣ�");
                    cm.dispose();
             //   } else if (cm.getBossLog('shaoling') >2) {
                   // cm.sendOk("ÿ��ֻ�ܴ�3����ɮ��");
                  //  cm.dispose();
				} else if (cm.getLevel() < 100 ) {  
				cm.sendOk("����ͼ���Ƶȼ�100������������û���ʸ���ս��ɮ");
                cm.dispose();
                } else if (cm.getParty() == null) {
                    cm.sendOk("�������������....");
                    cm.dispose();
                } else if (!cm.isLeader()) {
                    cm.sendOk("�����Ķӳ�������!");
                    cm.dispose();
                } else if (pt.getMembers().size() < 1) {
                    cm.sendOk("��Ҫ 1 �����ϵ���Ӳ��ܽ��룡!");
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
                        if ((cPlayer.getLevel() >= 135 && cPlayer.getLevel() <=255 ) || cPlayer.getJobId() == 000) {
                            levelValid += 1;
                        } else {
                            next = false;
                        }
                        if (cPlayer.getMapid() == mapId) {
                            inMap += (cPlayer.getJobId() == 900 ? 3 : 1);
                        }
                    }
                    if ( inMap < 1) {
                        next = false;
                    }
                    if (next) {
                        var em = cm.getEventManager("shaoling");
                        if (em == null) {
                            cm.sendOk("��ǰ���������⣬���������Ա....");
                        } else {
                            var prop = em.getProperty("state");
                            if (prop.equals("0") || prop == null) {
                                em.startInstance(cm.getParty(), cm.getMap());
                                cm.setBossLog("shaoling");
                                cm.dispose();
                                return;
                            } else {
                                cm.sendOk("�����Ѿ���������ս�ˣ�������ŶӵȺ�һ�¡�...");
                            }
                        }
                    } else {
                        cm.sendOk("�ȼ���δ�ﵽ #r135#k ");
                    }
                }
                cm.dispose();
            }
        }
    }
}
