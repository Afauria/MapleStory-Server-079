/* 
 *  NPC   : Kiriko
 *  Maps  : Training Hall 2
 *  FUNC  : Second job Advancement
 */

function start() {
    cm.askAcceptDecline("�����뿪����");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendNext("�������ҪһЩʱ�䡣.");
    } else {
	cm.warp(130020000, 0);
    }
    cm.dispose();
}