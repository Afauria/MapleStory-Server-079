
var status = -1;

function start(mode, type, selection) {
    if (mode > 0)
        status++;
    else {
        qm.dispose();
        return;
    }
    if (status == 0)
        qm.sendAcceptDecline("��ȷ��Ҫ��ѫ������??");
    else if (status == 1) {
        qm.sendOk("��ϲ����ɡ�");
        qm.gainItem(1142103, 1)
        qm.forceCompleteQuest();
        qm.dispose();
    }
}