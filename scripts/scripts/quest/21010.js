/*
 * The return of the Hero
 * Rien Cold Forest 1
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 3) {
            qm.sendNext("��ѽ�����ÿ���������Ӣ��һƿҩˮҲ����ʲô�˲�����¡��������ı������ڸ����Ұɣ�");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNext("�ף� ������ϵ�ʲô�ˣ� ร� ����ʶ #p1201000#�� #p1201000#��������ʲô����...������λ�ǲ���#p1201000#������ʶ�����أ���ô����˵��λ��Ӣ����");
    } else if (status == 1) {
        qm.sendNextPrev("     #i4001170#");
    } else if (status == 2) {
        qm.sendNextPrev("��λ���� #p1201000#����������ȴ���Ӣ�ۣ��ร��ѹֿ���������ʲôƽ��������...");
    } else if (status == 3) {
        qm.askAcceptDecline("���ǣ���Ϊ��ħ��ʦ��������ھޱ����˯�ţ����ԣ�����Ӣ�۵����������ĵ��˵����ӡ�#b�Ҹ���һ���ָ������õ�ҩˮ���Ͻ��Ⱥȿ�#k��");
    } else if (status == 4) { // TODO HP set to half
        qm.sendNext("���ȴ�ں��£����ټ���˵��ȥ~");
        qm.gainItem(2000022, 1);
        qm.forceStartQuest();
    } else if (status == 5) {
        qm.sendNextPrevS("#b(ҩˮ����ô���أ�...�벻������...)#k", 3);
    } else if (status == 6) {
        qm.summonMsg(0xE);
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        qm.sendNext("��������Ѱ��Ӣ�۵ĺۼ����ڱ�ѩ���ھ򣬹�Ȼ������Ӣ�۳����ˣ�Ԥ�Թ�������ģ�#p1201000#����������ȷ��ѡ��Ӣ�ۻ����ˣ�����û�б�Ҫ��η���ħ��ʦ�ˣ�");
    } else if (status == 1) {
        qm.sendNextPrev("�������ǵģ��ҵ���Ӣ��̫���ˡ�����ʰ����ֵ�����...�������Ӧ��Ҳ��ͬ�����뷨����֪������æ��������ǰ����ׯ��·�� #bҲ���������������̸һ̸#k�����Ժ�Ӣ��̸�������Ӧ�û���˷ܣ� \n\r #fUI/UIWindow.img/QuestIcon/4/0# \r #i2000022# #t2000022# 5 \r #i2000023# #t2000023# 5 \n\r #fUI/UIWindow.img/QuestIcon/8/0# 16 ����ֵ");
    } else if (status == 2) {
        qm.sendNextPrev("��Ҫ�����𣿲���������û�л�ü��ܵ������ڷ�֮����͸��תְ֮��ÿ����1���ͻ���3��ļ��ܵ��������� #bK��#k ������λ����ȷ�ϡ�");
        if (qm.getQuestStatus(21010) == 1) {
            qm.gainExp(16);
            qm.gainItem(2000022, 5);
            qm.gainItem(2000023, 5);
            qm.forceCompleteQuest();
        }
    } else if (status == 3) {
        qm.sendNextPrevS("#b(��ô���е�˵����������ʲô���벻�������������Ӣ������ô��ȷ�ϼ��ܿ���...�����Ҹ���ôȷ���أ�)#k");
    } else if (status == 4) {
        qm.summonMsg(0xF);
        qm.dispose();
    }
}