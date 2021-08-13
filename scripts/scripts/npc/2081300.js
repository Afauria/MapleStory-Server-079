/*  NPC : �𼪶�
	������ 4ת ����ű�
	��ͼ���� (240010501)
*/

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;

    if (status == 0) {
	if (!(cm.getJob() == 311 || cm.getJob() == 321)) {
	    cm.sendOk("Ϊʲô��Ҫ����??��������Ҫ���ҹ���ʲô����??");
	    cm.dispose();
	    return;
	} else if (cm.getPlayer().getLevel() < 120) {
	    cm.sendOk("��ȼ���δ����120��.");
	    cm.dispose();
	    return;
	} else {
		if (cm.getJob() == 311){
		    cm.sendSimple("��ϲ�����ʸ�4ת. \r\n��������4ת��??\r\n#b#L0#�����Ϊ����.#l\r\n#b#L1#������һ��...#l");
		} else if(cm.getJob() == 321){
		    cm.sendSimple("��ϲ�����ʸ�4ת. \r\n��������4ת��??\r\n#b#L0#�����Ϊ������.#l\r\n#b#L1#������һ��...#l");
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

		if (cm.getJob() == 311) {
		    cm.changeJob(312);
		    cm.teachSkill(3120005,0,10);
		    cm.teachSkill(3121007,0,10);
		    cm.teachSkill(3121002,0,10);
			cm.gainItem(4031348, -1);
		    cm.sendNext("��ϲ��תְΪ #b����#k.������һЩ����С����^^");
		} else {
		    cm.changeJob(322);
		    cm.teachSkill(3221006,0,10);
		    cm.teachSkill(3220004,0,10);
		    cm.teachSkill(3221002,0,10);
			cm.gainItem(4031348, -1);
		    cm.sendNext("��ϲ��תְΪ #b������#k.������һЩ����С����^^");
		}
	    } else {
		cm.sendOk("��û�ж����λ�������������һ��!");
		cm.dispose();
		return;
	    }
	}
    } else if (status == 2) {
	if (cm.getJob() == 312) {
	    cm.sendNext("��Ҫ��������һ�ж�ȡ���������˶���.");
	} else {
	    cm.sendNext("��Ҫ��������һ�ж�ȡ���������˶���.");
	}
    } else if (status == 3) {
	cm.sendNextPrev("������Ϊ��.");
	cm.dispose();
    }
}