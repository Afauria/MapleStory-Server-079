var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 6) {
            qm.sendNext("��ʲô����ԥ���أ�����#p1201001#û�з�Ӧ��Ҳûʲô��ʧ���ġ����ȥ��#p1201001#�����ʵ��ĵط�#b��ѡ#k�Ϳ����ˡ�");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNextS("�ͺ�ħ��ʦ������Ӣ��...����û���κ���ص���Ѷ����������Ԥ������Ҳֻ��¼������Ӣ�ۣ�û���κκ���ò�йص����ϡ����ѵ�ʲô���벻������", 8);
    } else if (status == 1) {
        qm.sendNextPrevS("ʲô���벻����...", 2);
    } else if (status == 2) {
        qm.sendNextPrevS("ԭ����ˡ���ħ��ʦ�����䲻����ô���׾ͱ���������Ǿ�����ˣ�Ӣ�����͹�ȥ֮��Ӧ����ʲô���ᡣ������ʲô�����أ���Ϊ�����Ĺ�ϵ���������·���������...�������ˣ� #b����#k��", 8);
    } else if (status == 3) {
        qm.sendNextPrevS("������", 2);
    } else if (status == 4) {
        qm.sendNextPrevS("֮ǰ�ڱ�ѩ���ھ�Ӣ��ʱ�����ҵ�һЩ��������������ʱ�Ʋ�Ӧ����Ӣ��ʹ�ù��Ķ�������˱����ڴ�ׯ���롣������ʱû������ #b#p1201001##k... \r\r#i4032372#\r\r��������...", 8);
    } else if (status == 5) {
        qm.sendNextPrevS("�ѹ��Ҿ��ú���֣��а� #p1201001# ���ڴ�ׯ����...", 2);
    } else if (status == 6) {
        qm.askAcceptDecline("�ǣ������Ǹ������ݼ�¼Ӣ�۵������������ˡ���������ʹ�� #p1201001#��Ӣ�ۣ�ץס #p1201001#ʱӦ�û���ʲô��Ӧ�����ȥ��#b#p1201001#�ɡ�#k");
    } else if (status == 7) {
        if (qm.getQuestStatus(21100) == 0) {
            qm.forceCompleteQuest();
        }
        qm.sendOkS("���� #p1201001#�з�Ӧ�Ļ�������ʹ��#p1201001#��Ӣ�� #bս��#k��", 8);
        qm.showWZEffect("Effect/Direction1.img/aranTutorial/ClickPoleArm", 1);
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
