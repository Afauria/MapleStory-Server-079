/* Dawnveil
    To Rien
	Puro
    Made by Daenerys
*/
function start() {
    cm.sendYesNo("����ҪȥҮ�׸�����֧��#b 5000 ���#k ���һ����...");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendOk("���㿼�Ǻ��������Ұ�!");
	cm.dispose();
	} else {
    if(cm.getPlayer().getMeso() >= 5000) {
	cm.gainMeso(-5000);
	cm.warpBack(200090020,130000210,80);
    }
    cm.dispose();
}
}