var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 2) {
            qm.sendNext("��...���������Ҳ���ָܻ������𣿿���û�Թ�Ҳ�����ã����ٿ��ǿ����ɡ�");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNext("��Ӣ�ۣ����ã���˵��ô֪������Ӣ����ǰ���������˴����Ľк�����Ȼ֪��������������Ѿ�������Ӣ�ۻ�������Ϣ��");
    } else if (status == 1) {
        qm.sendNextPrev("��֮��Ӣ�۵���ɫ��ô����ô�ѿ��أ�����ʲô��������˵���������Լ��ǲ���������Ӣ���� Ӣ��ɥʧ����������ô������...Ӧ���������걻���ڱ�ѩ֮�еĸ����á�");
    } else if (status == 2) {
        qm.askAcceptDecline("���� ��Ȼ����Ӣ�� ��ֻҪ�ӻӽ�Ӧ�û�����ʲô�ɣ����벻��ȥ#b�Բ�����#k��?");
    } else if (status == 3) {
        qm.forceStartQuest();
        qm.sendNext("�����⸽���кܶ� #r#o9300383#s#k ����ȥ���� #r3ֻ#k��	�㲻�û�����Щʲô��");
    } else if (status == 4) {
        qm.sendNextPrevS("�����ò���������ʹ�÷����������˰ɣ� #b�����ܷ��������Ϳ�������ʹ��#k�� ��ֻ�Ǽ��ܣ������ĵ���Ҳ���ԷŽ�ȥ���������á�", 1);
    } else if (status == 5) {
        qm.summonMsg(17);
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            qm.sendNext("ʲô���㲻ϲ��ҩˮ��");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendYesNo("��...�����ı��飬�ƺ�ʲô��û��������...�����벻Ҫ���ġ�����һ���������ġ���������������Щҩˮ��������: \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i2000022# 10 #t2000022# \r\n#i2000023# 10 #t2000023# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 57 ����ֵ");
    } else if (status == 1) {
        qm.gainItem(2000022, 10);
        qm.gainItem(2000023, 10);
        qm.gainExp(57);
        qm.forceCompleteQuest();
        qm.sendOkS("#b(��������������Ӣ��...����ʲô������û�е�Ӣ�ۻ����ô���)#k", 2);
        qm.dispose();
    }
}