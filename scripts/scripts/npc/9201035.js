/*
	����: 		������
	��ͼ: 		�����С��
	����: 		����ָ����
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
            cm.sendSimple("��ð�~ ���ŵ���һ�������۵��»�ζ��Ŷ~ ��Ӵ����ô�����Ŷ����ָ�������˻��Ҫ��Ư���Ľ���ָ�������Ը��Ļ����ҿ��Ը����ǻ�����ô����\r\n\r\n#L0# �Ѷ����ָ���ɽ���ָ��#l");
        }
    } else if (status == 1) {
        cm.sendNext("����ָҲ����װ���ģ�һ��Ҫ���Կ�Ŷ~");
        cm.dispose();
    }
}