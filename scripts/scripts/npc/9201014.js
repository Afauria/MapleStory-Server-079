var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
	return;
    }
    if (status == 0) {
	if (cm.getPlayer().getMarriageId() > 0) {
	    cm.sendSimple("��ô�ˣ�������������....\r\n#b#L0#����Ҫ��顣#l\r\n#L1#����Ҫ����װ����ɾ���ҵĽ�ָ��#l#k");
	} else  {
	    cm.sendSimple("�ˣ��ҿ���Ϊ����ʲô���� \r\n#L1#����Ҫ����װ����ɾ���ҵĽ�ָ��#l#k");
	}
    } else if (status == 1) {
	if (selection == 0) {
	    cm.sendYesNo("��飿��ȷ����������飿�ⲻ����Ц��...��");
	} else {
	    var selStr = "����Ҫɾ��ʲô��ָ�����ҿ�����";
	    var found = false;
	    for (var i = 1112300; i < 1112312; i++) {
		if (cm.haveItem(i)) {
		    found = true;
		    selStr += "\r\n#L" + i + "##v" + i + "##t" + i + "##l";
			}
	    }
	    for (var i = 2240004; i < 2240016; i++) {
		if (cm.haveItem(i)) {
		    found = true;
		    selStr += "\r\n#L" + i + "##v" + i + "##t" + i + "##l";
			}
	    }
	    if (!found) {
		cm.sendOk("����û���κν�ָ��");
		cm.dispose();
	    } else {
		cm.sendSimple(selStr);
	    }
	}
    } else if (status == 2) {
	if (selection == -1) {
	    var cPlayer = cm.getClient().getChannelServer().getPlayerStorage().getCharacterById(cm.getPlayer().getMarriageId());
	    if (cPlayer == null) {
	        cm.sendNext("��ȷ����İ��������ϡ�");
	    } else {
	    	cPlayer.dropMessage(1, "��İ�����Ҫ������顣");
	    	cPlayer.setMarriageId(0);
	    	cm.setQuestRecord(cPlayer, 160001, "0");
	    	cm.setQuestRecord(cm.getPlayer(), 160001, "0");
	    	cm.setQuestRecord(cPlayer, 160002, "0");
	    	cm.setQuestRecord(cm.getPlayer(), 160002, "0");
	    	cm.getPlayer().setMarriageId(0);
                for (var i = 1112300; i < 1112312; i++) {
                cm.gainItem(i, -1);
	        }
	    	cm.sendNext("�ɹ�����ˡ�");
	    }
	} else {
	    if (selection >= 1112300 && selection < 1112312) {
		cm.gainItem(selection, -1);
		cm.sendOk("��ɹ��Ƴ��˽�ָ��");
	    } else if (selection >= 2240004 && selection < 2240016) {
		cm.gainItem(selection, -1);
		cm.sendOk("��Ķ����ָ�ѱ�ɾ����");
	    }
	}		
	cm.dispose();
    }
}