var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        var mapId = cm.getMapId();
        if (cm.isLeader()) {//�Ƕӳ�
            if (mapId == 103000890) {
                cm.warpParty(103000000, "mid00");
                //cm.removeAll(4001007);
                //cm.removeAll(4001008);
                cm.dispose();
            } else {
                var outText;
                if (mapId == 103000805) {
                    outText = "��ȷ��Ҫ�뿪��ͼ����";
                } else {
                    outText = "һ�����뿪��ͼ���ͱ������¿�ʼ�����ˡ���ȷ��Ҫ�뿪��";
                }
                if (status == 0) {
                    cm.sendYesNo(outText);
                } else if (mode == 1) {
                    cm.warpParty(103000890, "st00"); // Warp player
                    cm.dispose();
                }
            }
        } else {
            cm.sendOk("������Ķӳ�������˵������Ա�޷���������������");
			cm.warp(103000000);
            cm.dispose();
        }
    }
}