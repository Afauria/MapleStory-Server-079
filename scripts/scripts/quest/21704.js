var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 2) {
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNextS("�������еĲ���ɣ������ʦ#p1202006#���Ժ�ǿ���һ�������Ҫ�ǳմ��˾Ͳ��ð��ˡ�������Ӣ�۵ļ���ȷʵ�����о�������Ӧ���ܰ��ϲ���æ��", 8);
    } else if (status == 1) {
        qm.sendNextPrevS("#b(�������Լ�����������������������ܡ�)#k", 2);
    } else if (status == 2) {
        qm.askAcceptDecline("���𣡿�������#p1202006#��ѵ����ʽ֮�⣬���Լ���Ȼ�ǵĴ�ǰ����Щ����Ҳ�ܹؼ�����������ֻ���ڱ�����ⶳ��̫�ã���Ҫʱ��ָ����ѡ�#b�������������ɣ���ȡ���ջָ����еļ��ܣ�#k  \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 500 exp");
    } else if (status == 3) {
        qm.forceCompleteQuest();
        qm.gainExp(500);
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}