var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 2) {
            qm.sendNext("��˵����Ӣ�ۣ���ô����ô��ԥ��������û��������Ҫ���������ǿ�Ļ����ǾͿ�㿪ʼ�ɣ�");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNext("��ô��˵���͵��˽��������ڽ�����һ�׶Ρ���һ���׶���ʲô�أ��ողŸ���˵��������Ҫ������ǿ������Գ�����ħ��ʦ�ĳ̶ȡ�");
    } else if (status == 1) {
        qm.sendNextPrev("����Ȼ��ȥ��Ӣ�ۣ��������Ѿ��Ǽ�����ǰ�����ˡ����㲻�Ǻ�ħ��ʦ�����䣬���ڱ�ѩ������ô����ʱ�䣬����һ�����úܽ�Ӳ�ɣ��������ɿ���Ӳ�����塣��������Σ�");
    } else if (status == 2) {
        qm.askAcceptDecline("��������ս����Ӣ�۵Ļ������������� ... ��û������Щ���𣿵�ȻҪ����#b������������#k ... ���� ��ɥʧ��������ʲô�����ˡ���֪��Ҳû��ϵ����ô���ھͽ���������������ɣ�");
    } else if (status == 3) {
        qm.forceStartQuest();
        qm.showWZEffect("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow3", 1);
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
