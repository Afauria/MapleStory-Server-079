/* Dawnveil
    To Rien
	Puro
    Made by Daenerys
*/
function start() {
    cm.sendYesNo("����Ҫȥά�����Ǹ۱���֧��#b 500 ���#k ���Ǳ�Լһ����.");
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.sendOk("���㿼�Ǻ��������Ұ�!");
        cm.dispose();
    } else {
        if(cm.getPlayer().getMeso() >= 500) {
            cm.gainMeso(-500);
            cm.warpBack(200090051,101000400,80);
        } else {
            cm.sendSimple("���Ǯ���񲻹�");
        }
        cm.dispose();
    }
}
