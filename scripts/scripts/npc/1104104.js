/* 
 * NPC :      Mihai
 * Map :      Timu's Forest
 */

function start() {
    cm.sendNext("�Ǻ�...�ѵ��ҷ�����ʲô��������ôֻ��һ���취�ˣ������ɣ�!");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.removeNpc(cm.getMapId(), cm.getNpc());
	cm.spawnMonster(9001009,1); // Transforming
    }
    cm.dispose();
}