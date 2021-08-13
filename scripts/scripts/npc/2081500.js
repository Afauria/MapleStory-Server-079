/*  NPC : ���°���
	���� 4ת ����ű�
	��ͼ���� (240010501)
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }

    if (status == 0) {
	if (!(cm.getJob() == 511 || cm.getJob() == 521)) {
	    cm.sendOk("Ϊʲô��Ҫ����??��������Ҫ���ҹ���ʲô����??");
	    cm.dispose();
	    return;
	} else if (cm.getPlayer().getLevel() < 120) {
	    cm.sendOk("��ȼ���δ����120��.");
	    cm.dispose();
	    return;
	} else {
		if (cm.getJob() == 511){
		    cm.sendSimple("��ϲ�����ʸ�4ת. \r\n��������4ת��??\r\n#b#L0#�����Ϊȭ��.#l\r\n#b#L1#������һ��...#l");
		} else if (cm.getJob() == 521){
		    cm.sendSimple("��ϲ�����ʸ�4ת. \r\n��������4ת��??\r\n#b#L0#�����Ϊǹ��.#l\r\n#b#L1#������һ��...#l");
	    } else {
		cm.sendOk("�ðɼ�������Ҫ4ת�鷳��������");
	    cm.dispose();
		return;
	    }
	}
    } else if (status == 1) {
	if (selection == 1) {
		cm.sendOk("�ðɼ�������Ҫ4ת�鷳��������");
	    cm.dispose();
	    return;
	}
	if (cm.getPlayerStat("RSP") > (cm.getPlayerStat("LVL") - 120) * 3) {
	    cm.sendOk("��ļ��ܵ�����û����..");
	    cm.dispose();
	    return;
	} else if (!cm.haveItem(4031348, 1)){
		cm.sendOk("����Ҫ#t4031348# 1�š�");
		cm.dispose();
		return;
	} else {
	    if (cm.canHold(2280003)) {
		cm.gainItem(2280003, 1);

		if (cm.getJob() == 511) {
		    cm.changeJob(512);
		    cm.teachSkill(5121007,0,10);
		    cm.teachSkill(5121001,0,10);
		    cm.teachSkill(5121002,0,10);
		    cm.teachSkill(5121009,0,10);
			cm.gainItem(4031348, -1);
		    cm.sendNext("��ϲ��תְΪ #bȭ��#k.������һЩ����С����^^");
		} else if (cm.getJob() == 521) {
		    cm.changeJob(522);
		    cm.teachSkill(5221004,0,10);
		    cm.teachSkill(5220001,0,10);
		    cm.teachSkill(5220002,0,10);
		    cm.teachSkill(5220011,0,10);
			cm.gainItem(4031348, -1);
		    cm.sendNext("��ϲ��תְΪ #bǹ��#k.������һЩ����С����^^");
		}
	    } else {
		cm.sendOk("��û�ж����λ�������������һ��!");
		cm.safeDispose();
		return;
	    }
	}
	
    } else if (status == 2) {
	if (cm.getJob() == 512) {
	    cm.sendNext("��Ҫ��������һ�ж�ȡ���������˶���.");
	} else {
	    cm.sendNext("��Ҫ��������һ�ж�ȡ���������˶���.");
	}
    } else if (status == 3) {
	cm.sendNextPrev("������Ϊ��.");
    } else if (status == 4) {
	cm.dispose();
    }
}