var status = -1;
var job = 0;
var type = -1;
//1007 - ȫְҵͨ��-���� - [��ߵȼ� : 3]\n����ʹ��������������Ʒ�����������ɫ�ȼ��Ĳ�ͬ������������Ʒ��ͬ��

//8 - ð�ռ�Ⱥ�� - [��ߵȼ���1]��Я����ֻ������Я��3ֻ��
//1004 - ð�ռ����޼��� - [��ߵȼ� : 1]\n�ܹ�������ﲢ�ƶ�
//1017 - ð�ռһʼ����

//10000018 - ��ʿ��Ⱥ�� - [��ߵȼ���1]��Я����ֻ������Я��3ֻ��
//10001004 - ��ʿ�����޼��� - [��ߵȼ���1]\n�ܹ�������ﲢ�ƶ�
//10001019 - ��ʿ�Żʼ����

//20000024 - ս��Ⱥ�� - [��ߵȼ���1]��Я����ֻ������Я��3ֻ��
//20001004 - ս�����޼��� - [��ߵȼ���1]\n�ܹ�������ﲢ�ƶ�
//20001019 - ս��ʼ����
var skill = [[8, 1004, 1007, 1017], [10000018, 10001004, 10001019], [20000024, 20001004, 20001019]];

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        status--;
    } else if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    if (status == 0) {
        cm.sendYesNo("����ȼ�10������������԰���һ��ѧϰ ���޼���#s8#-Ⱥ��#s1004#-����#s1007#-�ʼ���輼��#s1017#");
    } else if (status == 1) {
        if (cm.getPlayer().getLevel() < 10) {
            cm.sendNext("��ĵȼ�û�дﵽ10��");
            cm.dispose();
            return;
        }
        job = cm.getPlayer().getJob();
        if (job < 1000) {// Adv(0 ~ 522)
            type = 0;
        } else if (job < 2000) {// Cy(1000 ~ 1512)
            type = 1;
        } else if (job < 3000) {// Aran(2000 ~ 2112)
            type = 2;
        } else {
            cm.dispose();
            return;
        }
        for (var i = 0; i < skill[type].length; i++) {
            var level = 1;
            if (i == 2) {
                level = 3;
            }
            cm.teachSkill(skill[type][i], level);
        }
		cm.completeQuest(8001);
        cm.sendNext("�����Ѿ�ѧϰ�ɹ�");
        cm.dispose();
    } else {
        cm.dispose();
    }
}