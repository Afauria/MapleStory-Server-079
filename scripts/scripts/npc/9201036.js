/*
	����: 		�������
	��ͼ: 		�����
	����: 		������������
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        if (cm.getPlayer().getMarriageId() <= 0) {
            cm.sendOk("�����û����أ��鶼û�����Ҫ����ָ���㻹�����Ҹ��İ����ˣ������������~");
            cm.dispose();
        } else {
            cm.sendSimple("��Ҫ�Ұ�æ��\r\n#b#L0##b����鿴������#l#k");
        }
    } else if (status == 1) {
        cm.sendNext("���Ľ���������ո��Ѿ��������ˣ���");
        cm.dispose();
    }
}