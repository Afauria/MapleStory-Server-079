/*
 NPC Name: 		Cobra - Retired dragon trainer
 Map(s): 		Leafre : Cabin
 */
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;

    if (status == 0) {
        cm.sendSimple("������г���Ҹҿ϶��������ȥ������ǣ��Ȿ��û���㹻�ġ��������Ҫ�ɣ���Ȼ����ȵ�Ƭ����������Ҫ���͵ĳ߶�Ϊ�á�����Ψһ��������Ǹ�֪��������·��......�������ȥ����ҿ��Ըı��㡣��������ʲô����һ�̣�����Ϊһ�� #b��#k...\r\n #L0##b������һֻ��.#k#l");
    } else if (status == 1) {
        cm.useItem(2210016);
        cm.warp(200090500, 0);
        cm.dispose();
    }
}