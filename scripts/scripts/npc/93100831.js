/*
 *  Scarf Snowman - Happy Ville NPC
 */


function start() {
    cm.sendYesNo("��ô����Ҫ������ȥ�Ҹ�����?");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(209080100);
    } else {
	cm.sendNext("��������ң�");
    }
    cm.dispose();
}