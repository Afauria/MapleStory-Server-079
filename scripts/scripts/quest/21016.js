var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            qm.sendNext("����û׼������ɱ #o0100132#�� ��ðѸ�׼���Ķ�׼������ȥ���ԱȽϺá�������ú�׼������;��һ���غ��ˣ���ֻ��������ǳ���ˣ�");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.askAcceptDecline("��ôҪ������������������׼��������������ȷ�Ͻ��Ƿ�װ�����ˣ����ܺ�ҩ�Ƿ��Ѿ����������ڣ�Ȼ��Ϳ�ʼ�ɣ�");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.showWZEffect("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow3", 1);
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
