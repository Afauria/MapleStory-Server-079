var status = 0;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 1) {
            cm.sendOk("�����¶������ٴ����Ұ�.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (cm.getJob() == 311 || cm.getJob() == 321 || cm.getJob() == 312 || cm.getJob() == 322) {
                cm.sendOk("�����ڹ�����ְҵȺ,�������Ѿ��ɹ���ת��,�Ѿ���Խ�˽̹ٵ�ǿ����!\r\n�����Ҫ��ת����ȥ��ľ��ļ�˾֮�֣�����ת�ٰ̹ɣ�");
                cm.dispose();
                return;
            }
            if (!(cm.getJob() == 310 || cm.getJob() == 320)) {
                cm.sendOk("��������תְ�̹�,�������ڹ�����ְҵȺ!");
                cm.dispose();
                return;
            } else if (cm.getPlayer().getLevel() < 70) {
                cm.sendOk("��ĵȼ���δ��70");
                cm.dispose();
                return;
            }
            if (cm.haveItem(4031057, 1)) {
                cm.sendNext("��ϲ�㵽������,����ҽ�����һ������!");
            } else if (!(cm.haveItem(4031057, 1))) {
                cm.warp(100000201);
                cm.sendOk("ȥ�� #r������#k ����������!");
                cm.dispose();
            } else if (cm.getPlayer().getRemainingSp() <= (cm.getLevel() - 70) * 3) {
                cm.sendNext("��ļ��ܵ�����û����..");
            } else {
                cm.sendOk("�㻹����תְ...");
                cm.dispose();
            }
        } else if (status == 1) {
            if (cm.haveItem(4031058, 1)) {
                if (cm.getJob() == 310) {
                    cm.changeJob(311);
                    //cm.getPlayer().gainAp(5);
                    cm.gainItem(4031057, -1);
                    cm.gainItem(4031058, -1);
                    cm.sendOk("��ϲתְ��!");
                    if (cm.getPlayer().getGender() == 0) {
                        cm.worldMessage("[תְ�챨]����ϲ˧��." + cm.getChar().getName() + "  �ɹ�תְ��Ϊһ�� ���֣����������ҵ�ף�����ɣ�����");
                    } else {
                        cm.worldMessage("[תְ�챨]����ϲ��Ů." + cm.getChar().getName() + "  �ɹ�תְ��Ϊһ�� ���֣����������ҵ�ף�����ɣ�����");
                    }
                    cm.dispose();
                } else if (cm.getJob() == 320) {
                    cm.changeJob(321);
                    //cm.getPlayer().gainAp(5);
                    cm.gainItem(4031057, -1);
                    cm.gainItem(4031058, -1);
                    cm.sendOk("��ϲתְ��!");
                    if (cm.getPlayer().getGender() == 0) {
                        cm.worldMessage("[תְ�챨]����ϲ˧��." + cm.getChar().getName() + "  �ɹ�תְ��Ϊһ�� ���������������ҵ�ף�����ɣ�����");
                    } else {
                        cm.worldMessage("[תְ�챨]����ϲ��Ů." + cm.getChar().getName() + "  �ɹ�תְ��Ϊһ�� ���������������ҵ�ף�����ɣ�����");
                    }
                    cm.dispose();
                }
            } else if (cm.haveItem(4031057, 1))
                cm.sendAcceptDecline("��׼���е����ղ���??");
            else
                cm.sendAcceptDecline("���ǣ��ҿ����������ǿ����Ȼ�����֤�����������ʵ���������֪ʶ����׼������ս����");
        } else if (status == 2) {
            if (cm.haveItem(4031057, 1)) {
                cm.warp(211040401);
                cm.sendOk("ȥ����ʥ��ʯͷ�����!!.");
                cm.dispose();
            }
        }
    }
}
