var status = -1;
var yaoshi = 2;

function start() {
    if (cm.getPlayer().getMapId() == 551030200) {
        cm.sendYesNo("��Ҫ�뿪����?");
        status = 1;
        return;
    }
    if (cm.getPlayer().getLevel() < 90) {
        cm.sendOk("��ĵȼ���δ�ﵽ90....");
        cm.dispose();
        return;
    } else if (!cm.haveItem(4032246)) {
        cm.sendOk("��û���������!");
        cm.dispose();
        return;
    }
    if ( !cm.getPlayer().isGM() &&  cm.getPlayer().getClient().getChannel() != 5 && cm.getPlayer().getClient().getChannel() != 6) {
        cm.sendOk("��ʨֻ����5,6Ƶ��ս.");
        cm.dispose();
        return;
    }
    if (cm.getBossLog("��ʨ������") >= yaoshi) {
        cm.sendOk("�ܱ�Ǹÿ��ֻ�ܴ�����..");
        cm.dispose();
        return;
    }
    var em = cm.getEventManager("ScarTarBattle");

    if (em == null) {
        cm.sendOk("�����δ����.");
        cm.dispose();
        return;
    }
    var eim_status = em.getProperty("state");
    var marr = cm.getQuestRecord(160108);
    var data = marr.getCustomData();
    if (data == null) {
        marr.setCustomData("0");
        data = "0";
    }
    var time = parseInt(data);
    var dat = parseInt(marr.getCustomData());
    if (eim_status == null || eim_status.equals("0")) {
        var squadAvailability = cm.getSquadAvailability("ScarTar");
        if (squadAvailability == -1) {
            status = 0;
            cm.sendYesNo("��������������ս���У�������������Զ�����Ŷӣ������ΪԶ���Ӷӳ���");
            if (cm.getBossLog("��ʨ������") >= yaoshi) {
                cm.sendOk("�ܱ�Ǹÿ��ֻ�ܴ�����..");
                cm.dispose();
                return;
            }
        } else if (squadAvailability == 1) {
            // -1 = Cancelled, 0 = not, 1 = true
            var type = cm.isSquadLeader("ScarTar");
            if (type == -1) {
                cm.sendOk("�Ѿ����������롣");
                cm.dispose();
            } else if (type == 0) {
                var memberType = cm.isSquadMember("ScarTar");
                if (memberType == 2) {
                    cm.sendOk("��Զ���ӵ��Ʋ�������");
                    cm.dispose();
                } else if (memberType == 1) {
                    status = 5;
                    cm.sendSimple("��Ҫ��ʲô? \r\n#b#L0#����Զ����#l \r\n#b#L1#�˳�Զ����#l \r\n#b#L2#�鿴Զ��������#l");
                } else if (memberType == -1) {
                    cm.sendOk("Զ����Ա�Ѿ��ﵽ30�������Ժ����ԡ�");
                    cm.dispose();
                } else {
                    status = 5;
                    cm.sendSimple("��Ҫ��ʲô? \r\n#b#L0#����Զ����#l \r\n#b#L1#�˳�Զ����#l \r\n#b#L2#�鿴Զ��������#l");
                }
            } else { // Is leader
                status = 10;
                cm.sendSimple("����������ʲô��\r\n#b#L0#�鿴Զ���ӳ�Ա��#l \r\n#b#L1#����Զ���ӳ�Ա��#l \r\n#b#L2#�༭�����б�#l \r\n#r#L3#�����ͼ��#l");
                // TODO viewing!
            }
        } else {
            var eim = cm.getDisconnected("ScarTarBattle");
            if (eim == null) {
                var squd = cm.getSquad("ScarTar");
                if (squd != null) {
                    cm.sendYesNo("�Ѿ�Զ�������ڽ�����ս��.\r\n" + squd.getNextPlayer());
                    status = 3;
                } else {
                    cm.sendOk("Զ���ӵ���ս�Ѿ���ʼ.");
                    cm.safeDispose();
                }
            } else {
                cm.sendYesNo("��Ҫ��������Զ��������?");
                status = 2;
            }
        }
    } else {
        var eim = cm.getDisconnected("ScarTarBattle");
        if (eim == null) {
            var squd = cm.getSquad("ScarTar");
            if (squd != null) {
                cm.sendYesNo("�Ѿ�Զ�������ڽ�����ս��.\r\n" + squd.getNextPlayer());
                status = 3;
            } else {
                cm.sendOk("Զ���ӵ���ս�Ѿ���ʼ.");
                cm.safeDispose();
            }
        } else {
            cm.sendYesNo("��Ҫ��������Զ��������");
            status = 2;
        }
    }
}

function action(mode, type, selection) {
    switch (status) {
        case 0:
            if (mode == 1) {
                if (cm.registerSquad("ScarTar", 5, " �Ѿ���Ϊ��Զ���Ӷӳ�������������Զ���ӣ������´򿪶Ի��������Զ���ӡ�")) {
                    cm.sendOk("���Ѿ���Ϊ��Զ���Ӷӳ�����������5���ӣ���ȴ���Ա�ǵ����롣");
                } else {
                    cm.sendOk("δ֪����.");
                }
            }
            cm.dispose();
            break;
        case 1:
            if (mode == 1) {
                cm.warp(551030100, 0);
            }
            cm.dispose();
            break;
        case 2:
            if (!cm.reAdd("ScarTarBattle", "ScarTar")) {
                cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
            }
            cm.safeDispose();
            break;
        case 3:
            if (mode == 1) {
                var squd = cm.getSquad("ScarTar");
                if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
                    squd.setNextPlayer(cm.getPlayer().getName());
                    cm.sendOk("���Ѿ��ɹ��Ǽ�Ϊ��һ��..");
                }
            }
            cm.dispose();
            break;
        case 5:
            if (selection == 0) { // join
                var ba = cm.addMember("ScarTar", true);
                if (ba == 2) {
                    cm.sendOk("Զ����Ա�Ѿ��ﵽ30�������Ժ����ԡ�");
                } else if (ba == 1 && !cm.getPlayer().isGM()) {
                    cm.setBossLog("��ʨ������");
                    cm.sendOk("�������Զ���ӳɹ�����Ⱥ�ӳ�ָʾ��");
                } else {
                    cm.sendOk("���Ѿ��μ���Զ���ӣ���Ⱥ�ӳ�ָʾ��");
                }
            } else if (selection == 1) {// withdraw
                var baa = cm.addMember("ScarTar", false);
                if (baa == 1) {
                    cm.sendOk("�ɹ��˳�Զ���ӡ�");
                } else {
                    cm.sendOk("��û�вμ�Զ���ӡ�");
                }
            } else if (selection == 2) {
                if (!cm.getSquadList("ScarTar", 0)) {
                    cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
                }
            }
            cm.dispose();
            break;
        case 10:
            if (mode == 1) {
                if (selection == 0) {
                    if (!cm.getSquadList("ScarTar", 0)) {
                        cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
                    }
                    cm.dispose();
                } else if (selection == 1) {
                    status = 11;
                    if (!cm.getSquadList("ScarTar", 1)) {
                        cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
                        cm.dispose();
                    }
                } else if (selection == 2) {
                    status = 12;
                    if (!cm.getSquadList("ScarTar", 2)) {
                        cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
                        cm.dispose();
                    }
                } else if (selection == 3) { // get insode
                    if (cm.getSquad("ScarTar") != null) {
                        var dd = cm.getEventManager("ScarTarBattle");
                        dd.startInstance(cm.getSquad("ScarTar"), cm.getMap(), 160108);
                        cm.setBossLog("��ʨ������");
                    } else {
                        cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
                    }
                    cm.dispose();
                }
            } else {
                cm.dispose();
            }
            break;
        case 11:
            cm.banMember("ScarTar", selection);
            cm.dispose();
            break;
        case 12:
            if (selection != -1) {
                cm.acceptMember("ScarTar", selection);
            }
            cm.dispose();
            break;
    }
}
