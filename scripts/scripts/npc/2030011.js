/* Ali
 * 
 * Adobis's Mission I: The Room of Tragedy (280090000)
 * 
 * Zakum Quest NPC Exit
*/

function start() {
    if (cm.haveItem(4031061)) {
        cm.sendNext("��ܺõ�����˵�һ�ص����� �ðɡ����� �һ�����͵� #b#p2030008##k ��� ��������֮ǰ���� �㲻�ܰ���������Ķ�����������ȥ���ҽ�������ı�����������Щ��������ô���������ɣ���ͷ����");
    } else {
        cm.sendNext("������;�˳������񡣺ðɡ������һ������ȥ����������֮ǰ�����㲻�ܰ���������Ķ�����������ȥ���ҽ�������ı�����������Щ��������ô���������ɣ���ͷ����");
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
        cm.removeAll(4001015);
        cm.removeAll(4001016);
        cm.removeAll(4001018);
        cm.warp(211042300, 0);
    }
    cm.dispose();
}