var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 6) {
            qm.sendNext("����Ҫ�������ֶ�����Ҫ��־��ʵ������Խ������ʦ�Ƿǳ����˵ģ����㲻�������Լ�׹����ȥ������벻�ϵ��������ܻ��ǿ���������ͬʱ�һ�ʧȥ�ļ��䡣");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNext("�����������������ʲô�̶ȣ��Ҵ���˽��ˡ����Ǻǡ���û�뵽������Ϲ�ͷ�����н��졭�����Ǹж���Ҫ�����ᡭ�������Ǳ��顭��");
    } else if (status == 1) {
        qm.sendNextPrevS("#b(����Ҳû��ô�������)#k", 2);
    } else if (status == 2) {
        qm.sendNextPrev("�ã����������ǿ�ʼ��3�׶ε����һ�׶εĶ�������������Ķ����ǡ���#r#o9300343##k���������˽�������");
    } else if (status == 3) {
        qm.sendNextPrevS("һ��㡭��", 2);
    } else if (status == 4) {
        qm.sendNextPrev("������������սʿ���ӳ�������һ���𣬶�ʳ��ͳ���������ķ�ŭ���������Ǿ����ĵط������������κ�ʳ��ܿ��°ɣ�");
    } else if (status == 5) {
        qm.sendNextPrevS("#b(�������ڿ���Ц�ɣ�)#k", 2);
    } else if (status == 6) {
        qm.askAcceptDecline("�������#b�ٴν���������#k��ȥ����Щ������սʿ�������õ�����ս���ɣ���#r30ֻ#k���������������һ���ʵķ�Ծ��ȫ���Ը���ȥս���ɣ���Խ�������ʦ��");
    } else if (status == 7) {
        qm.forceStartQuest();
        qm.sendOk("���߰ɣ�ȥ����Щ#o9300343#��");
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 2) {
            qm.sendNext("���᲻���뿪��ʦ�� ��������.... ��̫�ж��ˣ����㲻�ܵ���Ϊֹ��");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNext("��ô��ʹ���30ֻ#o9300343#����������ͷ�ӹ�Ȼû�п�����Ȼ��ʧȥ�������ļ��䣬ʧȥ��������������������Ȼ�Ǹ�Ӣ�ۣ�ֻҪ���ϵĳ�ì���ڣ�");
    } else if (status == 1) {
        qm.sendNextPrevS("#b(��ô˵��Ϊ�˰�ο����)#k", 2);
    } else if (status == 2) {
        qm.sendYesNo("���Ѿ�ûʲô�ɼ���������ˡ����Ѿ���Խ���������ͷ�ӡ��������ɽ�ˡ�������ûʲô�������ġ�������ͷ���ܹ��л���ָ���㣬�Ѿ��������ˡ�");
    } else if (status == 3) {
        if (qm.getQuestStatus(21703) == 1) {
            qm.forceCompleteQuest();
            qm.teachSkill(21000000, qm.getPlayer().getSkillLevel(21000000), 10);   // Combo Ability Skill
            qm.gainExp(2800);
        }
        qm.sendNextS("�������˼���#b��������#k�� �һ�������е�մ�����ͷ��ѵ����û��Ч���أ�û�뵽�����Ч��)", 2);
        qm.showWZEffect("Effect/BasicEff.img/AranGetSkill", 1);
    } else if (status == 4) {
        qm.sendPrev("�������ȥ��#p1201000#�ɡ���������Ľ�����ܸ��˵ģ�");
        qm.dispose();
    }
}