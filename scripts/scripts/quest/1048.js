var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            qm.sendOk("��λ�µ������߰ɣ�����İ���ɣ�����ð�յ���ӪԱ���ú����ţ�����ĸ������Զ���ϵ���Ժ��ð�վ������棬������ȷ��ѡ��ְҵ���Ǻ���Ҫ�ġ�����㻹��֪��Ӧ��ѡ��ʲôְҵ������Ե��������#b��#k̸̸��Ҳ�����������һЩ����Ҫ֪���ġ�");
            qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}