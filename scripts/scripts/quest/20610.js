/*
 * Cygnus Skill -
 */

var status = -1;

function start(mode, type, selection) {
    status++;

    if (status == 0) {
        qm.askAcceptDecline("����û��������ļ������أ����������Ѿ����������м���ʹ�õķ������������ҽ��ٴ���һ��#b���ռ���#k���㡣");
    } else if (status == 1) {
        if (mode == 0) {
            qm.sendOk("�ðɣ�������ʲô�����ڲ���ʹ�㿴����������˵��ǫ�顣��ֻҪ���������������������Ǵ���û��һ���ö�����");
        } else {
            qm.forceStartQuest();
        }
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}