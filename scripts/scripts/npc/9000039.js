var status = -1;
var items = Array(1102041, 1082149, 5220000);
var itemsp = Array(2000, 2000, 500);
var itemsu = Array(0, 2, 0); // extra slots, not set.
var itemsq = Array(1, 1, 150);
var itemse = Array(7, -1, -1);
var chairs = Array(3010025, 3010045, 3010054, 3012002, 3010014, 3010068, 3010022, 3010023, 3010041);
var chairsp = Array(1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000);
var fame = 100;
var famep = 500;
var acashp = 10000;
var sel = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0) {
        cm.sendSimple("�ˣ� #r#h ##k! �ҵ������� #r#p9000039##k. ������� #b��������#k. �������һ�����Ŷ�� ��������Ҫʲô����\r\n#b#L0#ʲô������������#l\r\n#b#L1#��һЩ������Ʒ#l \r\n#b#L2#��һЩ����#l \r\n#b#L3#��һЩ����#l\r\n#L4#��һЩ����#l\r\n#L6#��Ŀǰ�ж�����������?\r\n#L5#��ɫ������1ǧ������#l \r\n#L7#1ǧ�����㻻��ɫ����#l#k");
    } else if (status == 1) {
        sel = selection;
        if (selection == 0) {
            cm.sendNext("��������������һЩ��Ʒ��������ô������������...��Ҫ��\r\nGM��=)");
            status = -1;
        } else if (selection == 1) {
            var selStr = "����Ҫʲô����#b\r\n\r\n";
            for (var i = 0; i < items.length; i++) {
                selStr += "#L" + i + "##v" + items[i] + "##t" + items[i] + "#" + (itemsu[i] > 0 ? "(���� " + itemsu[i] + " ��)" : "") + " x " + itemsq[i] + " Ϊ #e" + itemsp[i] + "#n ������#n" + (itemse[i] > 0 ? (" ...���� #r#e" + itemse[i] + "#n#b��") : "") + "#l\r\n";
            }
            cm.sendSimple(selStr + "#k");
        } else if (selection == 2) {
            var selStr = "����Ҫʲô����#b\r\n\r\n";
            for (var i = 0; i < chairs.length; i++) {
                selStr += "#L" + i + "##v" + chairs[i] + "##t" + chairs[i] + "# Ϊ #e" + chairsp[i] + "#n ������#n#l\r\n";
            }
            cm.sendSimple(selStr + "#k");
        } else if (selection == 3) {
            cm.sendYesNo("����Ҫ����?? �ҿ��Ը��㽻�� #b#e" + fame + " ����Ϊ " + famep + " ������.#n#k. �����������??");
        } else if (selection == 4) {
            cm.sendYesNo("����ҪGASH�԰�?? �ҿ��Ը��㽻�� #r#e1000 GASH Ϊ " + acashp + " ������.#n#k. �����������??");
        } else if (selection == 5) {
            if (!cm.getPlayer().haveItem(3993003)) {
                cm.sendOk("����Ҫ��һ��#b#t3993003##k��");
                cm.dispose();
            } else {
                cm.sendGetNumber("����Ҫ�ö���#r#t3993003##k�������������� \r\n��ֵ: (1 #t3993003# = 1000 ������) \r\n(Ŀǰ����: " + cm.getPlayer().itemQuantity(3993003) + "�� #r#t3993003##k) \r\n(Ŀǰ����: " + cm.getPlayer().getPoints() + "������)", cm.getPlayer().itemQuantity(3993003), 1, cm.getPlayer().itemQuantity(3993003));
            }
        } else if (selection == 7) {
            if (cm.getPlayer().getPoints() < 1000) {
                cm.sendOk("����Ҫ��#bһǧ������#k��");
                cm.dispose();
            } else {
                cm.sendGetNumber("����Ҫ�ö���#r��������#k��#t3993003#���� \r\n��ֵ: (1 #t3993003# = 1000 ������) \r\n(Ŀǰ����: " + cm.getPlayer().getPoints() + "������) (Ŀǰ����:  " + cm.getPlayer().itemQuantity(3993003) + "�� #r#t3993003##k)", cm.getPlayer().getPoints() / 1000, 1, cm.getPlayer().getPoints() / 1000);
            }
        } else if (selection == 6) {
            cm.sendOk("Ŀǰ���� #e" + cm.getPlayer().getPoints() + "#n ����������");
            cm.dispose();
        }
    } else if (status == 2) {
        if (sel == 1) {
            var it = items[selection];
            var ip = itemsp[selection];
            var iu = itemsu[selection];
            var iq = itemsq[selection];
            var ie = itemse[selection];
            if (cm.getPlayer().getPoints() < ip) {
                cm.sendOk("�ܱ�Ǹ����û���㹻���������� ��Ŀǰ�� " + cm.getPlayer().getPoints() + " ����Ҫ " + ip + ".");
            } else if (!cm.canHold(it, iq)) {
                cm.sendOk("��ճ�һЩ��λ��");
            } else {
                if (iu > 0) {
                    cm.gainItem(it, iq, false, ie, iu);
                } else {
                    cm.gainItemPeriod(it, iq, ie);
                }
                cm.getPlayer().setPoints(cm.getPlayer().getPoints() - ip);
                cm.sendOk("��л����");
            }
        } else if (sel == 2) {
            var it = chairs[selection];
            var cp = chairsp[selection];
            if (cm.getPlayer().getPoints() < cp) {
                cm.sendOk("�ܱ�Ǹ����û���㹻���������� ��Ŀǰ�� " + cm.getPlayer().getPoints() + " ����Ҫ " + cp + ".");
            } else if (!cm.canHold(it)) {
                cm.sendOk("��ճ�һЩ��λ��");
            } else {
                cm.gainItem(it, 1);
                cm.getPlayer().setPoints(cm.getPlayer().getPoints() - cp);
                cm.sendOk("��л����");
            }
        } else if (sel == 3) {
            if (cm.getPlayer().getPoints() < famep) {
                cm.sendOk("�ܱ�Ǹ����û���㹻���������� ��Ŀǰ�� " + cm.getPlayer().getPoints() + " ����Ҫ " + famep + ".");
            } else if (cm.getPlayer().getFame() > (30000 - fame)) {
                cm.sendOk("���Ѿ���̫��������ˡ�");
            } else {
                cm.getPlayer().setPoints(cm.getPlayer().getPoints() - famep);
                cm.getPlayer().addFame(fame);
                cm.getPlayer().updateSingleStat(client.MapleStat.FAME, cm.getPlayer().getFame());
                cm.sendOk("��л����");
            }
        } else if (sel == 4) {
            if (cm.getPlayer().getPoints() < acashp) {
                cm.sendOk("�ܱ�Ǹ����û���㹻���������� ��Ŀǰ�� " + cm.getPlayer().getPoints() + " ����Ҫ " + acashp + ".");
            } else if (cm.getPlayer().getCSPoints(1) > (java.lang.Integer.MAX_VALUE - 100000)) {
                cm.sendOk("���Ѿ���̫��GASH�ˡ�");
            } else {
                cm.getPlayer().setPoints(cm.getPlayer().getPoints() - acashp);
                cm.getPlayer().modifyCSPoints(1, 100, true);
                cm.sendOk("��л����");
            }
        } else if (sel == 5) {
            if (selection >= 1 && selection <= cm.getPlayer().itemQuantity(3993003)) {
                if (cm.getPlayer().getPoints() > (2147483647 - (selection * 1000))) {
                    cm.sendOk("����̫���������ˡ�");
                } else {
                    cm.gainItem(3993003, -selection);
                    cm.getPlayer().setPoints(cm.getPlayer().getPoints() + (selection * 1000));
                    cm.sendOk("��ʧȥ�� " + selection + " #r��#t3993003##k �� ����� " + (selection * 1000) + " ������. \r\nĿǰ������: " + cm.getPlayer().getPoints());
                }
            }
        } else if (sel == 7) {
            if (selection >= 1) {
                if (selection > (cm.getPlayer().getPoints() / 1000)) {
                    cm.sendOk("�����ֻ�ܵõ� " + (cm.getPlayer().getPoints() / 1000) + ". 1 ���� = 1000 ������.");
                } else if (!cm.canHold(3993003, selection)) {
                    cm.sendOk("��ճ�һЩװ������");
                } else {
                    cm.gainItem(3993003, selection);
                    cm.getPlayer().setPoints(cm.getPlayer().getPoints() - (selection * 1000));
                    cm.sendOk("������ " + selection + " #r��#t3993003##k �� ʧȥ�� " + (selection * 1000) + " ������. \r\nĿǰ������: " + cm.getPlayer().getPoints());
                }
            }
        }
        cm.dispose();
    }
}