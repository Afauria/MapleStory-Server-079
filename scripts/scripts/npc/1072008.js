/**
 Author: xQuasar
 NPC: Kyrin - Pirate Job Advancer
 Inside Test Room
 **/

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == -1) {
        if (cm.getMapId() == 108000500) {
            if (!(cm.haveItem(4031857, 15))) {
                cm.sendNext("��ȥ�ռ� 15�� #bǿ��ķ����ᾧ#k ����.");
                cm.dispose();
            } else {
                status = 2;
                cm.sendNext("wow ��Ȼ�Ǹ�������ϲͨ����θ����� ���Ѿ��Ǹ�ǿ��ĺ����������ҽ������������ص�С����.");
            }
        } else if (cm.getMapId() == 108000502) {
            if (!(cm.haveItem(4031856, 15))) {
                cm.sendNext("��ȥ�ռ�15�� #bǿ�������ᾧ#k ����.");
                cm.dispose();
            } else {
                status = 2;
                cm.sendNext("wow ��Ȼ�Ǹ�������ϲͨ����θ����� ���Ѿ��Ǹ�ǿ��ĺ����������ҽ������������ص�С����.");
            }
        } else {
            cm.sendNext("�������ٳ���һ��.");
            cm.dispose();
        }
    } else if (status == 2) {
        cm.gainItem(4031012, 1);
        cm.warp(120000101, 0);
        cm.dispose();
    }
}