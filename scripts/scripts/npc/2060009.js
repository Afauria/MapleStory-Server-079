var status = 0;
var menu;
var payment = false;

function start() {
    status = -1;
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
        if (cm.haveItem(4031242)) {
            menu = "#L0##b����ʹ�� #t4031242##k ȥ #b#m230030200##k.#l\r\n#L1#����ȥ #b#m251000000##k ���� #b10000���#k.#l";
        } else {
            menu = "#L0#����ȥ #b#m230030200##k ���� #b1000���#k#l\r\n#L1#����ȥ #b#m251000000##k ���� #b10000���#k#l";
            payment = true;
        }
        cm.sendSimple("�˼Ƴ̳�������������ͽ����·�Ϳ���ǰ����������� \r\n#b��ô�������ȥ����??#k\r\n" + menu);
    } else if (status == 1) {
        if (selection == 0) {
            if (payment == true) {
                if (cm.getMeso() < 1000) {
                    cm.sendOk("�ܱ�Ǹ����û���㹻�Ľ��...");
                    cm.dispose();
                } else {
                    cm.gainMeso(-1000);
                }
            } else {
                cm.gainItem(4031242, -1);
            }
            cm.warp(230030200);
            cm.dispose();
        } else if (selection == 1) {
            if (cm.getMeso() < 10000) {
                cm.sendOk("�ܱ�Ǹ����û���㹻�Ľ��...");
                cm.dispose();
            }
            cm.gainMeso(-10000);
            cm.warp(251000100);
            cm.dispose();
        }
    }
}
