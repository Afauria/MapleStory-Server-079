/* 
 *  NPC  : Guide Summoner
 *  Maps : Erev Map of the Start // 20021
 */

var status = -1;

function start() {
    cm.sendSimple("��Щ��������붼�����õ�\r\n���ˣ�����Ҫ֪����һ�����飿��  \n\r #b#L0#�����Ҹ������������顣#l \n\r #b#L1#С��ͼ���ܡ�#l \n\r #b#L2#��δ������Ӵ���#l \n\r #b#L3#��δ򿪵�������#l \n\r #b#L4#��ι�����#l \n\r #b#L5#��μ���ߡ�#l \n\r #b#L6#��δ�װ����#l \n\r #b#L7#�����Ӵ���#l \n\r #b#L8#��ΰѼ��ܷŵ���ݼ��ϡ�#l \n\r #b#L9#��δ������ӡ�#l \n\r #b#L10#��������ӡ�#l \n\r #b#L11#��β鿴�����ͼ��#l \n\r #b#L12#ʲô�ǻʼ���ʿ�š�#l");
}

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
    }
    if (status == 0) {
	if (selection == 0) {
	    cm.sendNext("���������ᣡ");
	} else if (selection == 12) {
	    cm.sendOk("�ʼ���ʿ�ž��ǻʼ���ʿ�š�");
	    cm.dispose();
	} else {
	    cm.summonMsg(selection);
	    cm.dispose();
	}
    } else if (status == 1) {
	cm.sendNext("�ܸ�����ʶ�㡣");
	cm.dispose();
    }
}