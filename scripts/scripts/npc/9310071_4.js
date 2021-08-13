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
            cm.sendOk("��Ҫ��ʱ���������ҡ�");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("���ã�����#p1032102# ��ʲô�ҿ��԰������𣿣� \r\n#r#L0#��Ҫ��������������#l#k\r\n#g#L1#��Ҫ�����ҵĻ�����#l#k\r\n#b#L2#��Ҫ�����ҵĳ���#l#k\r\n#L3#����Ҫ�õ�Ⱥ�輼��#l#k\r\n#L4##d��Ҫ�⿲�ص�����#l#k");
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
                if (pet == null || !cm.haveItem(5380000, 1)) {
                    cm.sendOk("��û�� #i5380000##t5380000#, Ȼ�󣬳���ȼ�15�������ٸ�������ô����");
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
                    cm.getPlayer().unequipPet(pet, false);
                    cm.gainItem(5380000, -1);
                    cm.removeSlot(5, slot, 1);
                    cm.gainPet(after, name, level, closeness, fullness, flag);
                    cm.getPlayer().spawnPet(slot);
                    cm.sendOk("�������Ѿ������ˣ���������һֻ #i" + id + "##t" + id + "#, ��������һֻ #i" + after + "##t" + after + "#!");
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
                if (pet == null || !cm.haveItem(5380000, 1)) {
                    cm.sendOk("��û�� #i5380000##t5380000#, Ȼ�󣬳���ȼ�15�������ٸ�������ô����");
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
                    cm.getPlayer().unequipPet(pet, false);
                    cm.gainItem(5380000, -1);
                    cm.removeSlot(5, slot, 1);
                    cm.gainPet(after, name, level, closeness, fullness, flag);
                    cm.getPlayer().spawnPet(slot);
                    cm.sendOk("�������Ѿ������ˣ���������һֻ #i" + id + "##t" + id + "#, ��������һֻ #i" + after + "##t" + after + "#!");
                    cm.dispose();
                }
            } else if (selection == 3) {
                if (cm.haveItem(5380000, 15)) {
					if (cm.getPlayer().isKOC()) {
						cm.teachSkill(10000018, 1, 1);
						cm.gainItem(5380000, -15);
						cm.sendOk("�Ѿ�ѧ�ᆪ����");
						cm.dispose();
					} else if (cm.getPlayer().isAran()) {
						cm.teachSkill(20000024, 1, 1);
						cm.gainItem(5380000, -15);
						cm.sendOk("�Ѿ�ѧ�ᆪ����");
						cm.dispose();	
					} else {
						cm.teachSkill(0000008, 1, 1);
						cm.gainItem(5380000, -15);
						cm.sendOk("�Ѿ�ѧ�ᆪ����");
						cm.dispose();		
					}
                } else {
                    cm.sendOk("�ܱ�Ǹ����Ҫ#t5380000# 15����");
                    cm.dispose();
                }
			} else if (selection == 4) {
				if (cm.getQuestStatus(3096) == 2) {
					cm.sendOk("���Ѿ���ɹ������ˡ�");
					cm.dispose();
				}
				if (cm.haveItem(4031274,1) && cm.haveItem(4031275,1) && cm.haveItem(4031276,1) && cm.haveItem(4031277,1)&& cm.haveItem(4031278,1)) {
					cm.removeAll(4031274);
					cm.removeAll(4031275);
					cm.removeAll(4031276);
					cm.removeAll(4031277);
					cm.removeAll(4031278);
					cm.forceCompleteQuest(3096);
					cm.gainExp(3000);
					cm.sendOk("��ɿ��ص����顣");
					cm.dispose();
				} else {
					cm.sendOk("����Ҫ#i4031274# x1��#i4031275# x1 �� #i4031276# x1 �� #i4031277# x1 �� #i4031278# �鷳׼�����������ҡ�");
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
                    cm.sendOk("��û�������ĳ���");
                    cm.dispose();
                } else {
                    var selStr = "��ѡ��һ���븴��ĳ��#b\r\n";
                    for (var i = 0; i < theitems.length; i++) {
                        selStr += "\r\n#L" + i + "##v" + theitems[i].getItemId() + "##i" + theitems[i].getItemId() + "##l";
                    }
                    cm.sendSimple(selStr);
                }
            }
        } else if (status == 2) {
            if (theitems.length <= 0) {
                cm.sendOk("û�������ĳ��");
            } else if (!cm.haveItem(5180000, 1)) {
                cm.sendOk("����Ҫ #v5180000##i5180000#.");
            } else {
                theitems[selection].setExpiration(cm.getCurrentTime() + (45 * 24 * 60 * 60 * 1000));
                cm.getPlayer().fakeRelog();
                cm.sendOk("��ĳ������ӳ�45������ ��úöԴ���");
                cm.gainItem(5180000, -1);
            }
            cm.dispose();
        }
    }
}