var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    cm.removeAll(4031595);
    cm.removeAll(4031594);
    cm.removeAll(4031597);
    if (status == 0) {
        var marr = cm.getQuestRecord(160001);
        var data = marr.getCustomData();
        if (data == null) {
            marr.setCustomData("0");
            data = "0";
        }
        if (cm.getPlayer().getLevel() < 40 || cm.getPlayer().getMarriageId() <= 0 || !data.equals("3")) {
            cm.sendNext("������Ѿ�����ҵȼ��ﵽ40�����ϲ��ܸ���˵��ࡡ���");
            cm.dispose();
        } else {
            if (cm.haveItem(4031592)) {
                cm.sendNext("�ҿ��������ȥ. ��ȥ��ͻ�ʧȥ�볡����ࡡ�ȷ��Ҫ��.");
                return;
            }
            var apq = cm.getQuestRecord(160000);
            var data = apq.getCustomData();
            if (data == null) {
                apq.setCustomData("0");
                data = "0";
            }
            /*	    var time = parseInt(data);
             if (time + (6 * 3600000) < cm.getCurrentTime()) { //6 hours
             if (!cm.haveItem(4031592) && cm.haveItem(4031593, 10)) {
             cm.gainItem(4031593, -10);
             cm.gainItem(4031592, 1);
             cm.sendOk("Here you are. I've recorded your time right now.");
             apq.setCustomData("" + cm.getCurrentTime());
             } else {*/
            cm.sendOk("�ӹ�������ȡ�� 10 ������Կ�׸���. ��һ��ֻ��ӵ��һ���볡��.");
            /*		}
             } else {
             cm.sendNext("Oho, it looks like you've already went in here for the past 6 hours. Come back later.");
             }
             cm.dispose();*/
        }
    } else if (status == 1) {
        cm.gainItem(4031592, -1);
        cm.warp(670010100, 0);
        cm.dispose();
    }
}