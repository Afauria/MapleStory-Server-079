/*
 Ѱ����ӷ��㲥npc
 by:Kodan
 */

var status = -1;
var msg = "";
var edit = false;
var pt = 0;
var selected = 0;
var ppl = -1;

function start() {
    if (edit && !cm.getPlayer().isGM()) {
        msg = "��NPC#rά����#k�����Ժ����ԡ�";
        cm.sendNext(msg);
        cm.dispose();
        return;
    }
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }

    if (status == 0) {
        msg = "�ҿ����ṩ���������������\r\n" +
                "����Ҫ#r 1���#k\r\n" +
                "����Ҫ#r 1���#k\r\n" +
                "����Ҫ#r 1���#k\r\n" +
                "����Ҫ#r 1���#k\r\n" +
                "����Ҫ#r 1���#k\r\n" +
                "����Ҫ#r 1���#k\r\n" +
                "#L1##r�ǣ���Ҫ�������#l";
        cm.sendSimple(msg);
    } else if (status == 1) {
        if (mode == 1) {
            pt = selection;
        }
        msg = "��Ҫ���ռ�����??#b\r\n" +
                "#L1#1\r\n" +
                "#L2#2\r\n" +
                "#L3#3\r\n" +
                "#L4#4\r\n" +
                "#L5#5\r\n";
        cm.sendSimple(msg);
    } else if (status == 2) {
        if (cm.getParty() == null) {
            cm.sendOk("�������������....");
            cm.dispose();
            return;
        } else if (!cm.isLeader()) {
            cm.sendOk("�����Ķӳ�������!");
            cm.dispose();
            return;
        } else if (cm.getPlayer().getCSPoints(2) < 1) {
            cm.sendOk("#d��Ǹ����ķ�㲻��!!!!!!!��");
            cm.dispose();
            return;
        }
        cm.getPlayer().modifyCSPoints(2, -1, false);
        ppl = selection;
        pqname = getPQMap(cm.getPlayer());
        cm.sendNext("�ѷ���ȥ�����ˣ���������ɡ�");
        cm.worldMessage("�������ļ����<Ƶ��: " + cm.getClient().getChannel() + ">�������" + cm.getChar().getName() + " �������:" + pqname + " ȱ��:" + ppl + " ��");
        cm.dispose();
    } else {
        cm.dispose();
    }
}

function getPQMap(chr) {
    switch (chr.getMapId()) {
        case 103000000:
            pqname = "����";
            break;
        case 221024500:
            pqname = "101";
            break;
        case 300030100:
            pqname = "����";
            break;
        case 200080101:
            pqname = "Ů��";
            break;
        case 261000011:
        case 261000021:
            pqname = "����ŷ&&����Ҷ";
            break;
        case 251010404:
            pqname = "�𹴺�����";
            break;
        case 910000000:
            pqname = "bspq";
            break;


    }
    return pqname;
}