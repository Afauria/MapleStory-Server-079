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
        var selStr = "�����μӹ�����껪!\r\n#L100#�һ��ݱ˵�������#l";
        var found = false;
        for (var i = 0; i < 6; i++) {
            if (getCPQField(i + 1) != "") {
                selStr += "\r\n#b#L" + i + "# " + getCPQField(i + 1) + "#l#k";
                found = true;
            }
        }
        if (cm.getParty() == null) {
            cm.sendSimple("�㻹û��һ�����顣\r\n#L100#�һ��ݱ˵�������.#l");
            //cm.dispose();
        } else {
            if (cm.isLeader()) {
                if (found) {
                    cm.sendSimple(selStr);
                } else {
                    cm.sendSimple("Ŀǰû�п��෿��.\r\n#L100#�һ��ݱ˵�������.#l");
                    cm.dispose();
                }
            } else {
                cm.sendSimple("���������ӳ�����˵��.\r\n#L100#�һ��ݱ˵�������.#l");
                cm.dispose();
            }
        }
    } else if (status == 1) {
        if (selection == 100) {
            cm.sendSimple("#b#L0#50 ���껪�� = �һ��ݱ˵�������#l\r\n#L1#30 ���껪�� = �һ��ݱ˵�������#l\r\n#L2#150 ���껪�� = �һ��ݱ˵�����������#l#k");
        } else if (selection >= 0 && selection < 6) {
            var mapid = 980000000 + ((selection + 1) * 100);
            if (cm.getEventManager("cpq").getInstance("cpq" + mapid) == null) {
                if ((cm.getParty() != null && 1 < cm.getParty().getMembers().size() && cm.getParty().getMembers().size() < (selection == 4 || selection == 5 || selection == 8 ? 4 : 3)) || cm.getPlayer().isGM()) {
                    if (checkLevelsAndMap(30, 255) == 1) {
                        cm.sendOk("���������˵ȼ�������.");
                        cm.dispose();
                    } else if (checkLevelsAndMap(30, 255) == 2) {
                        cm.sendOk("�����ϵ�����������Ա���㲻��ͬһ��ͼ");
                        cm.dispose();
                    } else {
                        cm.getEventManager("cpq").startInstance("" + mapid, cm.getPlayer());
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("��Ķ�����������.");
                    cm.dispose();
                }
            } else if (cm.getParty() != null && cm.getEventManager("cpq").getInstance("cpq" + mapid).getPlayerCount() == cm.getParty().getMembers().size()) {
                if (checkLevelsAndMap(30, 255) == 1) {
                    cm.sendOk("���������˵ĵȼ�������.");
                    cm.dispose();
                } else if (checkLevelsAndMap(30, 255) == 2) {
                    cm.sendOk("��Ķ����Ա����û��ȫ�������ͼ");
                    cm.dispose();
                } else {
                    //Send challenge packet here
                    var owner = cm.getChannelServer().getPlayerStorage().getCharacterByName(cm.getEventManager("cpq").getInstance("cpq" + mapid).getPlayers().get(0).getParty().getLeader().getName());
                    owner.addCarnivalRequest(cm.getCarnivalChallenge(cm.getChar()));
                    //if (owner.getConversation() != 1) {
                    cm.openNpc(owner.getClient(), 2042001);
                    //}
                    cm.sendOk("�����ս�����Ѿ�����.");
                    cm.dispose();
                }
            } else {
                cm.sendOk("�μӹ�����껪PQ��˫�����飬���뱣֤��������һ�£�");
                cm.dispose();
            }
        } else {
            cm.dispose();
        }
    } else if (status == 2) {
        if (selection == 0) {
            if (!cm.haveItem(4001129, 50)) {
                cm.sendOk("��û�� 50�� #i4001129# �޷��һ� #i1122007#");
            } else if (!cm.canHold(1122007, 1)) {
                cm.sendOk("���ڳ������ռ�");
            } else {
                cm.gainItem(1122007, 1);
                cm.gainItem(4001129, -50);
            }
            cm.dispose();
        } else if (selection == 1) {
            if (!cm.haveItem(4001129, 30)) {
                cm.sendOk("��û�� 30�� #i4001129# �޷��һ� #i2041211#");
            } else if (!cm.canHold(2041211, 1)) {
                cm.sendOk("���ڳ������ռ�");
            } else {
                cm.gainItem(2041211, 1);
                cm.gainItem(4001129, -30);
            }
            cm.dispose();
        } else if (selection == 2) {
            if (!cm.haveItem(4001254, 150)) {
                cm.sendOk("��û�� 150�� #i4001129# �޷��һ� #i1122058#");
            } else if (!cm.canHold(1122058, 1)) {
                cm.sendOk("���ڳ������ռ�");
            } else {
                cm.gainItem(1122058, 1);
                cm.gainItem(4001254, -150);
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
    var event1 = cm.getEventManager("cpq");
    if (event1 != null) {
        var event = event1.getInstance("cpq" + (980000000 + (fieldnumber * 100)));
        if (event == null && fieldnumber != 5 && fieldnumber != 6 && fieldnumber != 9) {
            status = "������껪ս�� " + fieldnumber + "(2v2)";
        } else if (event == null) {
            status = "������껪ս�� " + fieldnumber + "(3v3)";
        } else if (event != null && (event.getProperty("started").equals("false"))) {
            var averagelevel = 0;
            for (i = 0; i < event.getPlayerCount(); i++) {
                averagelevel += event.getPlayers().get(i).getLevel();
            }
            averagelevel /= event.getPlayerCount();
            status = event.getPlayers().get(0).getParty().getLeader().getName() + "/" + event.getPlayerCount() + "����/ƽ���ȼ� " + averagelevel;
        }
    }
    return status;
}
