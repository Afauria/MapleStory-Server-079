var points;

function start() {
    var record = cm.getQuestRecord(150001);
    points = record.getCustomData() == null ? "0" : record.getCustomData();
    cm.sendSimple("����սBOSS�����𣿣�\n\r\n\r #b#L3#�鿴�ɶһ�����#l#k \r\n\r\n #b#L0##v03994115##l#l#L1##v03994116##l#L2##v03994117##l#L28##v03994118##l \r\n #b#L4#�����Ҹ���#l#k");
}

function action(mode, type, selection) {
    if (mode == 1) {
        switch (selection) {
            case 0:
                if (cm.getParty() != null) {
                    if (cm.getDisconnected("BossQuestEASY") != null) {
                        cm.getDisconnected("BossQuestEASY").registerPlayer(cm.getPlayer());
                    } else if (cm.isLeader()) {
                        var party = cm.getPlayer().getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var it = party.iterator();
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                            if (ccPlayer == null || ccPlayer.getLevel() < 70) {
                                next = false;
                                break;
                            }
                        }	
                        if (next) {
                            var q = cm.getEventManager("BossQuestEASY");
                            if (q == null) {
                                cm.sendOk("�Ҳ����ű�������ϵGM��");
								cm.dispose();
								break;
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());
                            }
                        } else {
                            cm.sendOk("ȫ�����ѱ���ﵽ70��.");
							cm.dispose();
							break;
                        }
                    } else {
                        cm.sendOk("�㲻�Ƕӳ�.");
						cm.dispose();
						break;
                    }
                } else {
                    cm.sendOk("��û�ж���.");
					cm.dispose();
					break;
                }
                break;
            case 1:
                if (cm.getParty() != null) {
                    if (cm.getDisconnected("BossQuestMed") != null) {
                        cm.getDisconnected("BossQuestMed").registerPlayer(cm.getPlayer());
                    } else if (cm.isLeader()) {
                        var party = cm.getPlayer().getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var it = party.iterator();
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                            if (ccPlayer == null || ccPlayer.getLevel() < 100) {
                                next = false;
                                break;
                            }
                        }	
                        if (next) {
                            var q = cm.getEventManager("BossQuestMed");
                            if (q == null) {
                                cm.sendOk("�Ҳ����ű�������ϵGM��");
								cm.dispose();
								break;
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());
                            }
                        } else {
                            cm.sendOk("ȫ�����ѱ���ﵽ100��.");
							cm.dispose();
							break;
                        }
                    } else {
                        cm.sendOk("�㲻�Ƕӳ�.");
						cm.dispose();
						break;
                    }
                } else {
                    cm.sendOk("��û�ж���.");
					cm.dispose();
					break;
                }
                break;
            case 2:
                if (cm.getParty() != null) {
                    if (cm.getDisconnected("BossQuestHARD") != null) {
                        cm.getDisconnected("BossQuestHARD").registerPlayer(cm.getPlayer());
                    } else if (cm.isLeader()) {
                        var party = cm.getPlayer().getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var it = party.iterator();
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                            if (ccPlayer == null || ccPlayer.getLevel() < 120) {
                                next = false;
                                break;
                            }
                        }	
                        if (next) {
                            var q = cm.getEventManager("BossQuestHARD");
                            if (q == null) {
                                cm.sendOk("�Ҳ����ű�������ϵGM��");
								cm.dispose();
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());
                            }
                        } else {
                            cm.sendOk("ȫ�����ѱ���ﵽ120��.");
							cm.dispose();
							break;
                        }
                    } else {
                        cm.sendOk("�㲻�Ƕӳ�.");
						cm.dispose();
						break;
                    }
                } else {
                    cm.sendOk("��û�ж���.");
					cm.dispose();
					break;
                }
                break;
            case 28:
                if (cm.getParty() != null) {
                    if (cm.getDisconnected("BossQuestHELL") != null) {
                        cm.getDisconnected("BossQuestHELL").registerPlayer(cm.getPlayer());
                    } else if (cm.isLeader()) {
                        var party = cm.getPlayer().getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var it = party.iterator();
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                            if (ccPlayer == null || ccPlayer.getLevel() < 160) {
                                next = false;
                                break;
                            }
                        }	
                        if (next) {
                            var q = cm.getEventManager("BossQuestHELL");
                            if (q == null) {
                                cm.sendOk("�Ҳ����ű�������ϵGM��");
								cm.dispose();
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());
                            }
                        } else {
                            cm.sendOk("ȫ�����ѱ���ﵽ160��.");
							cm.dispose();
							break;
                        }
                    } else {
                        cm.sendOk("�㲻�Ƕӳ�.");
						cm.dispose();
						break;
                    }
                } else {
                    cm.sendOk("��û�ж���.");
					cm.dispose();
					break;
                }
                break;
            case 3:
                cm.sendOk("#b�������� : " + points);
				cm.dispose();
                break;
            case 4:
                cm.warp(209000000);
                break;
        }
    }
    cm.dispose();
}
