/* 
 * NPC :      Mihai
 * Map :      Timu's Forest
 */

function start() {
    cm.sendNext("�Ǻ�...�ѵ��Ҹո����ı��������𣿣�");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.removeNpc(cm.getMapId(), cm.getNpc());
	cm.spawnMonster(9001010,1); // Transforming
    }
    cm.dispose();
}