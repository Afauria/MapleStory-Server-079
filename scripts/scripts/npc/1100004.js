/* Dawnveil
    To Rien
	Puro
    Made by Daenerys
*/
function start() {
    cm.sendYesNo("����Ҫȥ���֮�Ǳ���֧��#b 5000 ���#k ���һ����...");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendOk("���㿼�Ǻ��������Ұ�!");
	cm.dispose();
	} else {
    if(cm.getPlayer().getMeso() >= 5000) {
	cm.gainMeso(-5000);
	cm.warpBack(200090021,200000100,80);
    }
    cm.dispose();
}
}