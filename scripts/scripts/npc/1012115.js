function start() {
    var status = cm.getQuestStatus(20706);
    
    if (status == 0) {
        cm.sendNext("������������ʲô���ɵĵط�.");
    } else if (status == 1) {
        cm.forceCompleteQuest(20706);
        cm.sendNext("���Ѿ����ֵ�Ӱ�ӣ�����Ǳ���� #p1103001#.");
    } else if (status == 2) {
        cm.sendNext("��Ӱ�Ѿ������֡�����Ǳ���� #p1103001#.");
    }
    cm.dispose();
}
function action(mode, type, selection) {
    cm.dispose();
}