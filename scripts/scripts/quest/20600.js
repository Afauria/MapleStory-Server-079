/*
 * Cygnus Skill - Training Never ends
 */

var status = -1;

function start(mode, type, selection) {
    status++;

    if (status == 0) {
        qm.askAcceptDecline("#h0#. ����û����ѵ��и������Ϊ�ﵽ100�������Ƕ�֪�����Ƕ�ôǿ�󣬵�ѵ���ǲ������ġ�һ����������Щ��ʿָ�ӹ١�����ѵ����һ��һҹ��׼��Ϊ�Լ��ĺھ���������������⡣");
    } else {
        if (mode == 1) {
            qm.forceStartQuest();
        }
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}