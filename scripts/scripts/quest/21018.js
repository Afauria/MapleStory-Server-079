var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 1) {
            qm.sendNext("ʲô���ò�������5ֻ̫���˰ɣ������Ϊ�����������һЩ�Ļ�Ҳ��û��ϵ��Ϊ��Ӣ�ۣ�����Ȼ��ʹ������Ҳ����һֻ�۱�һֻ��");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNext("�ã���ô����Ҫ���л��������Ĳ��ԡ������ܼ򵥡�ֻҪ���ܵ�����ǿ���׶�Ĺ�� #o0100134# �Ϳ����ˣ�������Ի��� #r50ֻ#k �Ǿ�̫���ˣ�����...");
    } else if (status == 1) {
        qm.askAcceptDecline("�������ʣû��ֻ�� #o0100134#ȫ�����ˣ�����̬���ƺ�����ɲ��õ�Ӱ�죬��ô�����5ֻ�����ǵ���Ȼ�ͻ����Ķ�����������̫����...");
    } else if (status == 2) {
        qm.forceStartQuest();
        qm.showWZEffect("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow1", 1);
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
