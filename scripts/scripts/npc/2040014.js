var status = -1;
var s = 0;
var t = 0;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var c = cm.getPlayer();
	if(!c.isVip()){
	cm.sendNext("��ӭ����ƨƨ��v113");
	cm.dispose();
	return
	}
    var VipMedal = c.getVipMedal() ? "#r��ʾ" : "#bδ��ʾ";
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("#b��NPC�ṩѡ����������ʾ�Ķ���\r\n#rPS: ���˿���Ҳ�����ʾ\r\n" +
                    "#g#L1#VIPѫ��	  : " + VipMedal + "\r\n" +
					"#d#L4#�趨���");
        } else if (status == 1) {
            s = selection;
            if (s == 1) {
                t = c.getVipMedal();
                if (t == true) {
                    t = false;
                } else {
                    t = true;
                }
                c.setVipMedat(t);
				cm.dispose();
                cm.openNpc(cm.getNpc());
            } else {
                c.fakeRelog();
                cm.dispose();
            }
        }
    }
}
