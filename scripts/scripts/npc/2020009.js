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
            if (cm.getJob() == 211 || cm.getJob() == 221 || cm.getJob() == 231 || cm.getJob() == 212 || cm.getJob() == 222 || cm.getJob() == 232) {
                cm.sendOk("������ħ��ʦְҵȺ,�������Ѿ��ɹ���ת��,�Ѿ���Խ�˽̹ٵ�ǿ����!");
                cm.dispose();
                return;
            }
            if (!(cm.getJob() == 210 || cm.getJob() == 220 || cm.getJob() == 230)) {
                cm.sendOk("��������תְ�̹�,��������ħ��ʦְҵȺ��!");
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
                cm.warp(101000003);
                cm.sendOk("ȥ�� #r��˹#k ����������!");
                cm.dispose();
            } else if (cm.getPlayer().getRemainingSp() <= (cm.getLevel() - 70) * 3) {
                cm.sendNext("��ļ��ܵ�����û����..");
            } else {
                cm.sendOk("�㻹����תְ...");
                cm.dispose();
            }
        } else if (status == 1) {
            if (cm.haveItem(4031058, 1)) {
                if (cm.getJob() == 210) {
                    cm.changeJob(211);
                    //cm.getPlayer().gainAp(5);
                    cm.gainItem(4031057, -1);
                    cm.gainItem(4031058, -1);
                    cm.sendOk("��ϲ�������Ѿ���Ϊ��˧��ħ��ʿ(��.��)��!");
                    if (cm.getPlayer().getGender() == 0) {
                        cm.worldMessage("[תְ�챨]����ϲ˧��." + cm.getChar().getName() + "  �ɹ�תְ��Ϊһ�� ��ʦ���𣬶��������������ҵ�ף�����ɣ�����");
                    } else {
                        cm.worldMessage("[תְ�챨]����ϲ��Ů." + cm.getChar().getName() + "  �ɹ�תְ��Ϊһ�� ��ʦ���𣬶��������������ҵ�ף�����ɣ�����");
                    }
                    cm.dispose();
                } else if (cm.getJob() == 220) {
                    cm.changeJob(221);
                    //cm.getPlayer().gainAp(5);
                    cm.gainItem(4031057, -1);
                    cm.gainItem(4031058, -1);
                    cm.sendOk("��ϲ�������Ѿ���Ϊ��˧��ħ��ʿ(��.��)��!");
                    if (cm.getPlayer().getGender() == 0) {
                        cm.worldMessage("[תְ�챨]����ϲ˧��." + cm.getChar().getName() + "  �ɹ�תְ��Ϊһ�� ��ʦ���ף����������������ҵ�ף�����ɣ�����");
                    } else {
                        cm.worldMessage("[תְ�챨]����ϲ��Ů." + cm.getChar().getName() + "  �ɹ�תְ��Ϊһ�� ��ʦ���ף����������������ҵ�ף�����ɣ�����");
                    }
                    cm.dispose();
                } else if (cm.getJob() == 230) {
                    cm.changeJob(231);
                    //cm.getPlayer().gainAp(5);
                    cm.gainItem(4031057, -1);
                    cm.gainItem(4031058, -1);
                    cm.sendOk("��ϲ�������Ѿ���Ϊ��˧�ļ�˾��!");
                    if (cm.getPlayer().getGender() == 0) {
                        cm.worldMessage("[תְ�챨]����ϲ˧��." + cm.getChar().getName() + "  �ɹ�תְ��Ϊһ�� ��˾�����������ҵ�ף�����ɣ�����");
                    } else {
                        cm.worldMessage("[תְ�챨]����ϲ��Ů." + cm.getChar().getName() + "  �ɹ�תְ��Ϊһ�� ��˾�����������ҵ�ף�����ɣ�����");
                    } cm.dispose();
                }
            } else if (cm.haveItem(4031057, 1))
                cm.sendAcceptDecline("��׼���е����ղ���??");
            else
                cm.sendAcceptDecline("���ǣ��ҿ����������ǿ����Ȼ�����֤�����������ʵ���������֪ʶ����׼������ս����");
        } else if (status == 2) {
            if (cm.haveItem(4031057, 1)) {
                cm.sendOk("ȥ����ʥ��ʯͷ�����!!.");
                cm.dispose();
            }
        }
    }
}
