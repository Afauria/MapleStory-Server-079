/* global cm */

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else if (mode === 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }

    if (status === 0) {
        if (!cm.isQuestFinished(29933)) {
            NewPlayer();
        }
        cm.sendSimple("������԰ڷ��ڻ���Ŷ~#b\r\n" +
                "#L2#��Ҫ����ɫС����#l\r\n" +
                "#L3#������Ĵ����Ǯ��(100�����ϲ�����)��δ������������#l\r\n" +
                "#L4#��Ҫ����ɫ����!!#l\r\n" +
                "#L5#��Ҫ������Ӱ˲ɱ������(��ת�����޶�)#l\r\n" +
                "#L6#��Ҫɾ���������հ׵���(���Ҳ���һ�ε���)#l\r\n" +
                "#L7#��Ҫ��ɵ��ݲ��ܽӵ�����#l\r\n" +
                /* "#L8#����ȡ�㲥����#ll\r\n" +
                 "#L9#����ȡ���Ĺ㲥����#\l\r\n" + 
                "#L10#����ȡ��¨�㲥����#l\r\n" +*/
                "#L11#����ȡ��������#l\r\n" +
                "#L12#��Ҫ��ǡ��#l\r\n" +
                "#L13#��Ҫ�㲥����");
    } else if (status === 1) {
        var level = cm.getPlayer().getLevel();
        if (selection === 2) {
            if (!cm.haveItem(2000000, 1)) {
                cm.sendOk("#b���һ�±�����û����ɫ�����Ŷ");
                cm.dispose();
                return;
            }
            cm.gainItem(2000000, -1);
            cm.gainItem(2020020, 100);
            cm.sendOk("#b���ⲻҪ��̫��~�������~");
        } else if (selection === 3) {
            if (level < 100) {
                cm.sendOk("��ĵȼ���������");
                cm.dispose();
                return;
            }
            cm.gainItem(5252002, 1);
        } else if (selection === 4) {
            if (!cm.haveItem(4000264, 400) || !cm.haveItem(4000266, 400) || !cm.haveItem(4000267, 400) || level < 120) {
                cm.sendOk("����һ�±�����û�н�ɫƤ���������ľͷ�绤���������������ü绤����������,��������ȼ�����");
                cm.dispose();
                return;
            }
            cm.gainItem(4000264, -400);
            cm.gainItem(4000266, -400);
            cm.gainItem(4000267, -400);
            cm.gainItem(1902001, 1);
            cm.sendOk("#b�ú���ϧҰ��~~");
        } else if (selection === 8 || selection === 9 || selection === 10) { //�㲥
            var Item = 0;
            var amount = 0;
            var reqLevel = 0;
            var BossLog = '';
            switch (selection) {
                case 8:
                    Item = 5072000;
                    amount = 5;
                    BossLog = '1';
                    reqLevel = 1;
                    break;
                case 9:
                    Item = 5073000;
                    amount = 10;
                    BossLog = '30';
                    reqLevel = 30;
                    break;
                case 10:
                    Item = 5074000;
                    amount = 5;
                    BossLog = '70';
                    reqLevel = 70;
                    break;
            }
            if (level < reqLevel || cm.getPlayer().getBossLog(BossLog) > 0) {
                cm.sendNext("һ��ֻ����һ�λ���ĵȼ���������");
                cm.dispose();
                return;
            }

            cm.setBossLog(BossLog);
            cm.gainItem(Item, amount);
            cm.sendNext("�Ѿ����#i" + Item + "#x" + amount + "��");
        } else if (selection === 11) { //����
            if (level < 10 || cm.getPlayer().getBossLog('sell') > 1) {
                cm.sendOk("1��ֻ����һ�λ���ĵȼ�������10�Ȳ�����ࡡ�");
                cm.dispose();
                return;
            }
            cm.setBossLog('sell');
            cm.gainItem(5030000, 1);
        } else if (selection === 5) {
            if (cm.getJob() === 412) {
                cm.warp(910300000, 3);
                cm.spawnMonster(9300088, 6, -572, -1894);
            } else if (cm.getJob() === 422) {
                cm.warp(910300000, 3);
                cm.spawnMonster(9300088, 6, -572, -1894);
            } else {
                cm.sendOk("���Ǹ������йص�����Ŷ");
            }
        } else if (selection === 6) {
            if (cm.haveItem(2070018)) {
                cm.removeAll(2070018);
                cm.gainItem(5490000, 1);
                cm.gainItem(4280000, 1);
                cm.sendOk("��ϲ��ɾ����ϲ������˽���");
            } else if (cm.haveItem(1432036)) {
                cm.removeAll(1432036);
                cm.gainItem(5490001, 1);
                cm.gainItem(4280001, 1);
                cm.sendOk("��ϲ��ɾ����ϲ�������������");
            } else {
                cm.sendOk("��Ǹ��û�пհ׵���...");
            }
        } else if (selection === 7) {
            if (cm.getQuestStatus(29507) === 1) {
                cm.gainItem(1142082, 1);
                cm.forceCompleteQuest(29507);
            }
            cm.forceCompleteQuest(3083);
            cm.forceCompleteQuest(8248);
            cm.forceCompleteQuest(8249);
            cm.forceCompleteQuest(8510);
            cm.forceCompleteQuest(20527);
            cm.forceCompleteQuest(50246);
            cm.sendOk("�������");
        } else if (selection === 12) {
            cm.warp(229010000);
        } else if (selection === 13) {
			cm.dispose();
            cm.openNpc(9000056);
			return;
        }
        cm.dispose();
    }
}

function NewPlayer() {
    var item = [5000007, 2450000, 1002419, 5030000, 5100000, 5370000, 5180000, 5170000];
    var amount = [1, 10, 1, 1, 1, 1, 1, 1];
    var next = true;
    for (var i = 0; i < item.length; i++) {
        if (!cm.canHold(item[i], amount[i])) {
            next = false;
        }
    }
    if (!next) {
        cm.sendNext("�����ռ䲻��ࡡ�");
        cm.dispose();
        return;
    }
    cm.gainPet(5000007, "��ɫС��", 1, 0, 100, 0);//
    cm.gainItem(2450000, 10); //���˵�����
    cm.gainItemPeriod(1002419, 1, 30);//��Ҷ��ͷ��
    cm.gainItemPeriod(5030000, 1, 30);//��������
    cm.gainItem(5100000, 1);//����
    cm.gainItemPeriod(5370000, 1, 7);//�ڰ� 7��
    cm.gainItemPeriod(5170000, 1, 30);//ȡ������
    cm.forceCompleteQuest(29933); //������ֽ���
    cm.sendOk("��ӭ���� ƨƨ�� ��ʹ�� @help/@���� �˽��ʽָ��\r\n\r\n\r\n��Ϸ���^^");
    cm.dispose();
    return;
}
