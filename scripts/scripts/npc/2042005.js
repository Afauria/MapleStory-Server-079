var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        cm.dispose();
    if (status == 0 && mode == 1) {
        var selStr = "��ѡ��һ����̨������!\r\n#L100#�һ�ð�յ������#l";
	var found = false;
        for (var i = 0; i < 3; i++){
            if (getCPQField(i+1) != "") {
                selStr += "\r\n#b#L" + i + "# " + getCPQField(i+1) + "#l#k";
		found = true;
            }
        }
        if (cm.getParty() == null) {
            cm.sendSimple("������������ҡ�\r\n#L100#ð�յ�����Ҷһ�#l");
        } else {
            if (cm.isLeader()) {
				var pt = cm.getPlayer().getParty();
				if (pt.getMembers().size() < 2) {
                if ((cm.getParty() != null && 1 < cm.getParty().getMembers().size() && cm.getParty().getMembers().size() < (selection == 4 || selection == 5 || selection == 8 ? 4 : 3)) || cm.getPlayer().isGM()) {
                    if (checkLevelsAndMap(51, 120) == 1) {
                        cm.sendOk("���������˵ȼ������ϡ�");
                        cm.dispose();
                    } else if (checkLevelsAndMap(51, 120) == 2) {
                        cm.sendOk("�ڵ�ͼ���Ҳ������Ķ��ѡ�");
                        cm.dispose();
                    }
				}
				}
		if (found) {
                    cm.sendSimple(selStr);
		} else {
		    cm.sendSimple("Ŀǰû�з���.\r\n#L100#�һ�ð�յ������#l");
		}
            } else {
                cm.sendSimple("�����Ķӳ�������\r\n#L100#ð�յ�����Ҷһ�#l");
            }
        }
    } else if (status == 1) {
	if (selection == 100) {
	    cm.sendSimple("#b#L0#50��ð�յ������ = �ݱ˵���������#l\r\n#L1#30��ð�յ������ = �ݱ˵���������#l\r\n#L2#50����ҫ��ð�յ������ = �ݱ˵����Ļ�������#l#k");
	} else if (selection >= 0 && selection < 3) {
	    var mapid = 980030000+((selection+1)*1000);
            if (cm.getEventManager("cpq2").getInstance("cpq"+mapid) == null) {
                var party = cm.getParty().getMembers();
                if (cm.getParty() != null && party.size() == 3) {
                    if (checkLevelsAndMap(51, 120) == 3) {
                        cm.sendOk("���������˵ȼ������ϡ�");
                        cm.dispose();
                    } else if (checkLevelsAndMap(51, 120) == 2) {
                        cm.sendOk("�ڵ�ͼ���Ҳ������Ķ��ѡ�");
                        cm.dispose();
                    } else {
                        cm.getEventManager("cpq2").startInstance(""+mapid, cm.getPlayer());
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("����������ֻ��3���ˡ�");
                }
            } else if (cm.getParty() != null && cm.getEventManager("cpq2").getInstance("cpq"+mapid).getPlayerCount() == cm.getParty().getMembers().size()) {
                if (checkLevelsAndMap(51, 120) == 1) {
                    cm.sendOk("���������˵ȼ������ϡ�");
                    cm.dispose();
                } else if (checkLevelsAndMap(51, 120) == 2) {
                    cm.sendOk("�ڵ�ͼ���Ҳ������Ķ��ѡ�");
                    cm.dispose();
                } else {
					var pt = cm.getPlayer().getParty();
					if (pt.getMembers().size() < 2) {
						cm.sendOk("��Ҫ 2 �����ϲſ�����̨����");
						cm.dispose();
					} else {
                    //Send challenge packet here
                    var owner = cm.getChannelServer().getPlayerStorage().getCharacterByName(cm.getEventManager("cpq2").getInstance("cpq"+mapid).getPlayers().get(0).getParty().getLeader().getName());
                    owner.addCarnivalRequest(cm.getCarnivalChallenge(cm.getChar()));
                    //if (owner.getConversation() != 1) {
                        cm.openNpc(owner.getClient(), 2042006);
                    //}
                    cm.sendOk("������ս�Ѿ����͡�");
                    cm.dispose();
                }
				}
            } else {
                cm.sendOk("���������������");
                cm.dispose();
            }
	} else {
	    cm.dispose();
	}
	} else if (status == 2) {
	    if (selection == 0) {
		if (!cm.haveItem(4001129,50)) {
		    cm.sendOk("�ܱ�Ǹ����û��#t4001129# #b50#k��");
		} else if (!cm.canHold(1122007,1)) {
		    cm.sendOk("������ռ�.");
		} else {
		    cm.gainItem(1122007,1);
		    cm.gainItem(4001129,-50);
		}
		cm.dispose();
	    } else if (selection == 1) {
		if (!cm.haveItem(4001129,30)) {
		    cm.sendOk("�ܱ�Ǹ����û��#t4001129# #b30#k��");
		} else if (!cm.canHold(2041211,1)) {
		    cm.sendOk("������ռ�.");
		} else {
		    cm.gainItem(2041211,1);
		    cm.gainItem(4001129,-30);
		}
		cm.dispose();
	    } else if (selection == 2) {
		if (!cm.haveItem(4001254,50)) {
		    cm.sendOk("�ܱ�Ǹ����û��#t4001254# #b50#k��");
		} else if (!cm.canHold(1122058,1)) {
		    cm.sendOk("������ռ�.");
		} else {
		    cm.gainItem(1122058,1);
		    cm.gainItem(4001254,-50);
		}
		cm.dispose();
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

function getCPQField(fieldnumber) {
    var status = "";
    var event1 = cm.getEventManager("cpq2");
    if (event1 != null) {
        var event = event1.getInstance("cpq"+(980030000+(fieldnumber*1000)));
        if (event == null && fieldnumber < 1) {
            status = "��̨������ "+fieldnumber+"(3v3)";
        } else if (event == null) {
            status = "��̨������ "+fieldnumber+"(3v3)";
        } else if (event != null && (event.getProperty("started").equals("false"))) {
            var averagelevel = 0;
            for (i = 0; i < event.getPlayerCount(); i++) {
                averagelevel += event.getPlayers().get(i).getLevel();
            }
            averagelevel /= event.getPlayerCount();
            status = event.getPlayers().get(0).getParty().getLeader().getName()+"/"+event.getPlayerCount()+"��/ƽ���ȼ�  "+averagelevel;
        }
    }
    return status;
}