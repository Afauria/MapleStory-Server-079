/*
 *  Strawhat Snowman - Happy Ville NPC
 */

function start() {
    cm.sendSimple("���� ���� #p2001003# ��Ҫȥ�ĸ�С����? PS�ɽ��ͬ�� \n\r #b#L0#�¹�ɭ��11#l \n\r #L1#�¹�ɭ��12#l \n\r #L2#�¹�ɭ��13#l \n\r #L3#�¹�ɭ��14#l \n\r #L4#�¹�ɭ��15#l");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(209000011 + selection, 0);
    }
    cm.dispose();
}
