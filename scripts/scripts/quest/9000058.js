var status = -1;
var picked = 0;
var state = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2 || status == 0) {
            cm.dispose();
            return;
        }
        status--;
    }

    if (status == 0) {
        cm.sendSimple("������԰ڷ��ڻ���Ŷ~\r\n#b#L0#��Ҫ��ȡ��ɫС��#l\r\n#b#L1#��Ҫ��ȡ���#l\r\n#b#L2#��Ҫ����ɫС����#l\r\n#b#L3#������Ĵ����Ǯ��(100�����ϲ�����)��δ������������#l\r\n#b#L4#��Ҫ����ɫ����!!#l\r\n#b#L5#��Ҫ������Ӱ˲ɱ������(��ת�����޶�)#l\r\n#b#L6#��Ҫɾ���������հ׵���(���Ҳ���һ�ε���)#l\r\n#b#L7#��Ҫ��ɵ��ݲ��ܽӵ�����#k");
    } else if (status == 1) {
        if (selection == 0) {
            if (!cm.haveItem(5000007, 1, true, true) && cm.canHold(5000007, 1)) {
                cm.gainPet(5000007, "��ɫС��", 1, 0, 100, 0);
            }
            cm.dispose();
        } else if (selection == 1) {
            if (!cm.haveItem(5030000, 1, true, true) && cm.canHold(5030000, 1)) {
                cm.gainItem(5030000, 1);
            }
            if (!cm.haveItem(5100000, 1, true, true) && cm.canHold(5100000, 1)) {
                cm.gainItem(5100000, 1);
            }
            if (!cm.haveItem(5370000, 1, true, true) && cm.canHold(5370000, 1)) {
                cm.gainItem(5370000, 1);
            }
            if (!cm.haveItem(5520000, 1, true, true) && cm.canHold(5520000, 1)) {
                cm.gainItem(5520000, 1);
            }
            if (!cm.haveItem(5180000, 1, true, true) && cm.canHold(5180000, 1)) {
                cm.gainItem(5180000, 1);
            }
            if (!cm.haveItem(5170000, 1, true, true) && cm.canHold(5170000, 1)) {
                cm.gainItem(5170000, 1);
            }
            cm.dispose();
        } else if (selection == 2) {
            if (cm.haveItem(4031307, 1) == true)
            {
                cm.gainItem(4031307, -1);
                cm.gainItem(2020020, 100);
                cm.sendOk("#b���ⲻҪ��̫��~�������~");
                cm.dispose();
            } else {
                cm.sendOk("#b���һ�±�����û����ɫ�����Ŷ");
                cm.dispose();
            }
        } else if (selection == 3) {
            var level = cm.getPlayerStat("LVL");
            if (level >= 100) {
                cm.gainItem(5252002, 1);
            } else {
                cm.sendOk("��ĵȼ������� �˱ư�");
            }
            cm.dispose();
        } else if (selection == 4) {
            var level = cm.getPlayerStat("LVL");
            if (cm.haveItem(4000264, 400) && cm.haveItem(4000266, 400) && cm.haveItem(4000267, 400) && (level >= 120)) {

                cm.gainItem(4000264, -400);
                cm.gainItem(4000266, -400);
                cm.gainItem(4000267, -400);
                cm.gainItem(1902001, 1);
                cm.sendOk("#b�ú���ϧҰ��~~");
                cm.dispose();
            } else {
                cm.sendOk("����һ�±�����û�н�ɫƤ���������ľͷ�绤���������������ü绤����������,��������ȼ�����");
            }
            cm.dispose();
        } else if (selection == 5) {
            if (cm.getPlayerStat("LVL") >= 120 && cm.getJob() == 412) {
                cm.warp(910300000, 3);
                cm.spawnMonster(9300088, 6, -572, -1894)
                cm.dispose();
            } else if (cm.getJob() == 422) {
                cm.warp(910300000, 3);
                cm.spawnMonster(9300088, 6, -572, -1894)
                cm.dispose();
            } else {
                cm.sendOk("���Ǹ������йص�����Ŷ,������û�дﵽ120��");
                cm.dispose();
            }
        } else if (selection == 6) {
            if (cm.haveItem(2070018)) {
                cm.gainItem(2070018, -999);
                cm.gainItem(5490000, 1);
                cm.gainItem(4280000, 1);
                cm.sendOk("��ϲ��ɾ����ϲ������˽���");
                cm.dispose();
            } else if (cm.haveItem(1432036)) {
                cm.gainItem(1432036, -1);
                cm.gainItem(5490001, 1);
                cm.gainItem(4280001, 1);
                cm.sendOk("��ϲ��ɾ����ϲ�������������");
                cm.dispose();
            } else {
                cm.sendOk("��Ǹ��û�пհ׵���...");
                cm.dispose();
            }
        } else if (selection == 7) {
            if (cm.getQuestStatus(29507) == 1) {
                cm.gainItem(1142082, 1);
                cm.forceCompleteQuest(29507);
            }
            cm.forceCompleteQuest(2127);
            cm.forceCompleteQuest(3083);
            cm.forceCompleteQuest(20527);
            cm.forceCompleteQuest(50246);
            cm.sendOk("�������");
            cm.dispose();
        }
    }
}