var status = 0;
var pet = null;
var theitems = Array();

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.sendOk("�Ǻðɣ��ڴ������´����Ӵ");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("��ã������������ҿ��Ը������������ĳ���Ŷ~ #b\r\n#L0#�����ҵĳ�����.#l\r\n#L1#�����ҵĻ�����.#l\r\n#L2#�Ⱦ��ҵĳ���.#l#k");
		} else if (status == 1) {
			if (selection == 0) {
				var currentpet = null;
				for (var i = 0; i < 3; i++) {
					currentpet = cm.getPlayer().getPet(i);
					if (currentpet != null && pet == null) {
						if (currentpet.getSummoned() && currentpet.getPetItemId() > 5000028 && currentpet.getPetItemId() < 5000034 && currentpet.getLevel() >= 15) {
							pet = currentpet;
							break;
						}
					}
				}
				if (pet == null || !cm.haveItem(5380000,1)) {
					cm.sendOk("�ҿ���û�취������. �������� #i5380000##t5380000#, �����ĳ���������֮һ�� #d#i5000029##t5000029##k, #g#i5000030##t5000030##k, #r#i5000031##t5000031##k, #b#i5000032##t5000032##k, ���� #e#i5000033##t5000033##n ֻҪ�ȼ��ﵽ15�����ҾͿ��԰�������Ӵ.");
					cm.dispose();
				} else {
					var id = pet.getPetItemId();
					var name = pet.getName();
					var level = pet.getLevel();
					var closeness = pet.getCloseness();
					var fullness = pet.getFullness();
					var slot = pet.getInventoryPosition();
					var flag = pet.getFlags();
					var rand = 0;
					var after = id;
					while (after == id) {
						rand = 1 + Math.floor(Math.random() * 10);
						if (rand >= 1 && rand <= 3) {
							after = 5000030;
						} else if (rand >= 4 && rand <= 6) {
							after = 5000031;
						} else if (rand >= 7 && rand <= 9) {
							after = 5000032;
						} else if (rand == 10) {
							after = 5000033;
						}
					}
					if (name.equals(cm.getItemName(id))) {
						name = cm.getItemName(after);
					}
					cm.getPlayer().unequipPet(pet, true, false);
					cm.gainItem(5380000, -1);
					cm.removeSlot(5, slot, 1);
					cm.gainPet(after, name, level, closeness, fullness, 45, flag);
					cm.getPlayer().spawnPet(slot);
					cm.sendOk("��ĳ��������������������� #i" + id + "##t" + id + "#, ���ڽ����� #i" + after + "##t" + after + "#��!");
					cm.dispose();
				}
			} else if (selection == 1) {
				var currentpet = null;
				for (var i = 0; i < 3; i++) {
					currentpet = cm.getPlayer().getPet(i);
					if (currentpet != null && pet == null) {
						if (currentpet.getSummoned() && currentpet.getPetItemId() > 5000047 && currentpet.getPetItemId() < 5000054 && currentpet.getLevel() >= 15) {
							pet = currentpet;
							break;
						}
					}
				}
				if (pet == null || !cm.haveItem(5380000,1)) {
					cm.sendOk("�ҿ����޷������㣡 �������� #i5380000##t5380000#,�����ĳ���������֮һ�� #g#i5000048##t5000048##k, #r#i5000049##t5000049##k, #b#i5000050##t5000050##k, #d#i5000051##t5000051##k, #d#i5000052##t5000052##k, ���� #e#i5000053##t5000053##n ֻҪ�ȼ��ﵽ15�����ҾͿ��԰�������Ӵ.");
					cm.dispose();
				} else {
					var id = pet.getPetItemId();
					var name = pet.getName();
					var level = pet.getLevel();
					var closeness = pet.getCloseness();
					var fullness = pet.getFullness();
					var slot = pet.getInventoryPosition();
					var flag = pet.getFlags();
					var rand = 0;
					var after = id;
					while (after == id) {
						rand = 1 + Math.floor(Math.random() * 9);
						if (rand >= 1 && rand <= 2) {
							after = 5000049;
						} else if (rand >= 3 && rand <= 4) {
							after = 5000050;
						} else if (rand >= 5 && rand <= 6) {
							after = 5000051;
						} else if (rand >= 7 && rand <= 8) {
							after = 5000052;
						} else if (rand == 9) {
							after = 5000053;
						}
					}
					if (name.equals(cm.getItemName(id))) {
						name = cm.getItemName(after);
					}
					cm.getPlayer().unequipPet(pet, true, false);
					cm.gainItem(5380000, -1);
					cm.removeSlot(5, slot, 1);
					cm.gainPet(after, name, level, closeness, fullness, 45, flag);
					cm.getPlayer().spawnPet(slot);
					cm.sendOk("��Ļ����˳ɹ�������!!�������� #i" + id + "##t" + id + "#, ���ڱ���� #i" + after + "##t" + after + "#!");
					cm.dispose();
				}
			} else if (selection == 2) { //revive	
				var inv = cm.getInventory(5);
				var pets = cm.getPlayer().getPets(); //includes non-summon
				for (var i = 0; i <= inv.getSlotLimit(); i++) {
					var it = inv.getItem(i);
					if (it != null && it.getItemId() >= 5000000 && it.getItemId() < 5010000 && it.getExpiration() > 0 && it.getExpiration() < cm.getCurrentTime()) {
						theitems.push(it);

					}
				}
				if (theitems.length <= 0) {
					cm.sendOk("��û����Ҫ����ĳ��");
					cm.dispose();
				} else {
					var selStr = "��ѡ��Ҫ����ĳ������Ҫ����֮ˮ��������.#b\r\n";
					for (var i = 0; i < theitems.length; i++) {
						selStr += "\r\n#L" + i + "##v" + theitems[i].getItemId() + "##i" + theitems[i].getItemId() + "##l";
					}
					cm.sendSimple(selStr);
				}
			}
		} else if (status == 2) {
			if (theitems.length <= 0) {
				cm.sendOk("��û����Ҫ����ĳ��");
			} else if (!cm.haveItem(5180000,1)) {
				cm.sendOk("����Ҫ����� #v5180000##i5180000#.");
			} else {
				theitems[selection].setExpiration(cm.getCurrentTime() + (45 * 24 * 60 * 60 * 1000));
				cm.getPlayer().fakeRelog();
				cm.sendOk("��������ĳ���ɹ����������������ȥ��ˣ��");
				cm.gainItem(5180000,-1);
			}
			cm.dispose();
		}
	}
}