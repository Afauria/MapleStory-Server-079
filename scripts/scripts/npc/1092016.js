/* Author: aaroncsn (MapleSea Like)
	NPC Name: 		Glittering Stone
	Map(s): 		Nautilus:Power Source Chamber(120000301)
	Description: 		Unknown
*/

function start() {
    if(cm.getQuestStatus(2166) == 1) {
        cm.sendNext("����һ�������ģ���������ʯ�����ܸо�������Χ������������");
		cm.forceCompleteQuest(2166);
    } else
        cm.sendNext("�����ҵ�����������������ʯ���Ҹе�һ�����ص����������ҵ����塣");
    cm.dispose();
}