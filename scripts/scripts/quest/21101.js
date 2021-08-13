var status = -1;
var skills = Array(21001003, 21000000, 21100002, 21100004, 21100005, 21110002);
//polearm booster, combo ability, polearm mastery, final charge, combo smash, combo drain, full swing
function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            qm.sendNext("#b(�ٿ���һ�º���...)#k");
            qm.dispose();
            return;
        } else if (status == 2) {
            qm.MovieClipIntroUI(true);
            qm.warp(914090100, 0);
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendYesNo("#b(���Լ�ȷ����ʹ�ù� #p1201001#��Ӣ���� ȷ���Ļ����ó�����ץס #p1201001#�� һ������ʲô��Ӧ��)#k");
    } else if (status == 1) {
        if (qm.getJob() == 2000) {
            qm.changeJob(2100);
            qm.forceCompleteQuest();
            qm.resetStats(35, 4, 4, 4);
            qm.expandInventory(1, 4);
            qm.expandInventory(2, 4);
            qm.expandInventory(3, 4);
            qm.expandInventory(4, 4);
            qm.gainItem(1142129, 1);
            qm.forceCompleteQuest(29924); //medal
            qm.teachSkill(20009000, 0, -1);
            qm.teachSkill(20009000, 1, 0);
            for (var i = 0; i < skills.length; i++) {
                qm.teachSkill(skills[i], 0);
            }
            qm.sendNextS("#b(��������ʲô��...)#k", 3);
        }
    } else if (status == 2) {
        qm.sendYesNoS("�Ƿ�Ҫ������������", 1);
    } else if (status == 3) {
        qm.warp(140000000, 0)
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
