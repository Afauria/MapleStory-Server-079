var status = -1;
var itemids = Array(2040728, 2040729, 2040730, 2040731, 2040732, 2040733, 2040734, 2040735, 2040736, 2040737, 2040738, 2040739);

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
        cm.sendSimple("�����ˣ����Ѿ����ö���ˡ����������е��������������Ҫ�����ң��Ѿ�ȡ�ð���ŵ�Ƥ�ˣ�\r\n\r\n#r#L1#�һ�һЩ����#l#k");
    } else if (status == 1) {
        var selStr = "Ҫ���ɺ��־���? ���ž�������࣬�����Ƥ������Ҳ��ͬ��\r\n\r\n#b";
        for (var i = 0; i < itemids.length; i++) {
            selStr += "#L" + i + "##i" + itemids[i] + "##z" + itemids[i] + "##l\r\n";
        }
        cm.sendSimple(selStr);
    } else if (status == 2) {
        if (!cm.canHold(itemids[selection], 1)) {
            cm.sendOk("��ճ�һЩ��λ��");
        } else if (cm.itemQuantity(4001261) < 1) {
            cm.sendOk("��û���㹻��#b#t4001261##k��");
        } else {
            cm.gainItem(4001261, -1);
            cm.gainItem(itemids[selection], 1);
            cm.sendOk("��л���٣���ӭ�´�����~");
        }
        cm.dispose();
    }
}