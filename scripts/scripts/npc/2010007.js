/* guild creation npc */
var status = 0;
var sel;
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;

		if (status == 0)
			cm.sendSimple("��ӭ�������幫�ݣ�����������ʲô��?\r\n#b#L0#�������� #r1500W#k#l\r\n#L1#��ɢ����#l\r\n#L2#���Ӽ����Ա��������#l#k");
		else if (status == 1)
		{
			sel = selection;
			if (selection == 0)
			{
				if (cm.getChar().getGuildId() > 0)
				{
					cm.sendOk("���Ѿ�ӵ�м����ˣ������ٴ�������.");
					cm.dispose();
				}
				else
					cm.sendYesNo("����һ���µļ�����Ҫ #b1500W���#k, ��ȷ����������һ���µļ�����");
			}
			else if (selection == 1)
			{
				if (cm.getChar().getGuildId() <= 0 || cm.getChar().getGuildRank() != 1)
				{
					cm.sendOk("�㻹û�м��壡\r\n�㲻���峤������㲻�ܽ�ɢ�ü���.");
					cm.dispose();
				}
				else
					cm.sendYesNo("��ȷ�����Ҫ��ɢ��ļ��壿����ɢ���㽫���ָܻ����м�����������Լ�GP����ֵ���Ƿ������");
			}
			else if (selection == 2)
			{
				if (cm.getChar().getGuildId() <= 0 || cm.getChar().getGuildRank() != 1)
				{
					cm.sendOk("�㲻���峤������㽫�������Ӽ����Ա����������.");
					cm.dispose();
				}
				else
					//cm.sendYesNo("�����Ա����ÿ���� #b5#k λ��Ҫ֧�� #b" + cm.getChar().capacityCost() + " ���#k, ��ȷ��Ҫ������");
					cm.sendYesNo("�����Ա����ÿ���� #b5#k λ��Ҫ֧�� #b2500000 ���#k, ��ȷ��Ҫ������");
			}
		}
		else if (status == 2)
		{
			if (sel == 0 && cm.getChar().getGuildId() <= 0)
			{
				cm.genericGuildMessage(1);
				cm.dispose();
			}
			else if (sel == 1 && cm.getChar().getGuildId() > 0 && cm.getChar().getGuildRank() == 1)
			{
				//cm.getChar().disbandGuild();
				cm.disbandGuild();
				cm.dispose();
			}
			else if (sel == 2 && cm.getChar().getGuildId() > 0 && cm.getChar().getGuildRank() == 1 && cm.getMeso() >= 2500000)
			{
				//cm.getChar().increaseGuildCapacity();
				cm.increaseGuildCapacity();
				cm.dispose();
			}else{
				cm.dispose();
}
		}
	}
}
