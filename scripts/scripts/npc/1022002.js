var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (cm.getPlayer().getLevel() < 50) {
        cm.sendOk("����������ǰ���Ͽ��뿪��.");
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendYesNo("�㿴������ǿ�����ӣ�Ҫ��Ҫȥһ�˰����������?");
    } else if (status == 1) {
        cm.warp(105100100);
        cm.dispose();
    }
}