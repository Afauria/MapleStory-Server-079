function start() {
    cm.sendYesNo("�������Ƿ�Ҫ�뿪��??");
}

function action(mode, type, selection) {
    if (mode == 1) {
        var map = cm.getMapId();
        var kill = cm.getMap().killAllMonsters(true);

        var tomap;

        if (map == 108010101) {//��ʦ��
            kill;
            tomap = 101000003;//ͼ���

        } else if (map == 108010201) {//սʿ��
            kill;
            tomap = 102000003;//- ������ - սʿʥ��

        } else if (map == 108010301) {//�����ֵ�
            kill;
            tomap = 100000201;//��������ѵ����

        } else if (map == 108010401) {//������
            kill;
            tomap = 103000003;//�϶��ư�

        } else if (map == 108010501) {//������
            kill;
            tomap = 120000101;//- ŵ����˹�� - �����ҡ�

        }
        cm.warp(tomap);
    }
    cm.dispose();
}
