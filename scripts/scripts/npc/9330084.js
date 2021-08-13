/* global cm */

var slot;
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
        cm.sendGetNumber("��������Ҫ�һ��Ŀ���. \r\n������ƷΪ#i4032225#\r\n#r(��ֵ:1#i4032225#x1:#i4032226#x1)\r\n��ע�����ϱ����Ŀռ�#k", 1, 1, 100);
    } else if (status === 1) {
        slot = selection;
        if (!cm.haveItem(4032225, slot)) {
            cm.sendNext("��ȷ���Ƿ���#i4032225#��");
            cm.dispose();
            return;
        }
        cm.sendYesNo("��ȷ��Ҫ�һ��𣿣�");
    } else if (status === 2) {
        if (!cm.canHold(4032226, slot)) {
            cm.sendNext("�����ռ䲻�㡣");
            cm.dispose();
            return;
        }
        cm.gainItem(4032225, -slot);
        cm.gainItem(4032226, slot);
        cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!#k");
        cm.dispose();
    } else {
        cm.dispose();
    }
}
