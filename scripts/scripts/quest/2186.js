var status = -1;

function start(mode, type, selection) {
    qm.dispose();
}
function end(mode, type, selection) {
    status++;
    if (status == 0) {
        qm.sendNext("�ҵ��۾���������ҵ��ˣ�лл��^^\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v2030019# 5 #t2030019#s\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0#  1000 ����ֵ");
    } else {
        qm.gainItem(2030019, 5);
        qm.gainExp(1000);
        qm.forceCompleteQuest();
        qm.dispose();
    }
}
