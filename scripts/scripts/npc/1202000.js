var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getPlayer().getMapId() != 140090000) {
        if (status == 0) {
            cm.sendSimple("�����г�����Ϣ�����ǽ�����10��������ν�����Ϸ�Ĳ������� \n\r ��ô, �������ѧ��ʲô��?  \n\r #b#L1#С��ͼ�ǣ�#l \n\r #b#L2#�����ǣ�#l \n\r #b#L3#���е����ǣ�#l \n\r #b#L4#��ι�����#l \n\r #b#L5#��μ�ȡ���ߣ�#l \n\r #b#L6#������װ����#l \n\r #b#L7#�����߼��ܵ�����#l \n\r #b#L8#���ʹ�ÿ�ݼ���#l \n\r #b#L9#��δ������ӣ�#l \n\r #b#L10#��������ӣ�#l \n\r #b#L11#��β鿴���ͼ��#l");
        } else {
            cm.summonMsg(selection);
            cm.dispose();
        }
    } else {
        if (cm.getInfoQuest(21019).equals("")) {
            if (status == 0) {
                cm.sendNext("�㡭�������ˣ�");
            } else if (status == 1) {
                cm.sendNextPrevS("...����˭?", 2);
            } else if (status == 2) {
                cm.sendNextPrev("��һֱ�ڵ���. �ȴ������ħ��ʦս����Ӣ���������ѹ���...!");
            } else if (status == 3) {
                cm.sendNextPrevS("�ȵȣ�����˵ʲô������˭��...?", 2);
            } else if (status == 4) {
                cm.sendNextPrevS("...����˭���Ҳ��ǵù�ȥ�����ˡ���...�ҵ�ͷ��ʹ��", 2);
            } else if (status == 5) {
                cm.updateInfoQuest(21019, "helper=clear");
                cm.showWZEffect("Effect/Direction1.img/aranTutorial/face", -1);
                cm.showWZEffect("Effect/Direction1.img/aranTutorial/ClickLirin", -1);
                //cm.playerSummonHint(true);
                cm.dispose();
            }
        } else {
            if (status == 0) {
                cm.sendNext("���Щ����?");
            } else if (status == 1) {
                cm.sendNextPrevS("��. ..���һ�㶼���ǵ��ˡ������������˭��", 2);
            } else if (status == 2) {
                cm.sendNextPrev("��һ�㡣��ħ��ʦ����������ʧȥ�˼��䡭���������ò��ŵ��ġ�����֪�������飬�Ҷ���һһ������.");
            } else if (status == 3) {
                cm.sendNextPrev("�������ǵ�Ӣ�ۡ�������ǰ�����¸ҵغͺ�ħ��ʦս������������ð�յ����硣�����������ʱ�������˺�ħ��ʦ�����䣬���ⶳ�ڱ������˯�˺þúþá����ԣ�����Ҳ������ʧ�ˡ�.");
            } else if (status == 4) {
                cm.sendNextPrev("����ط��������������ħ��ʦ����ⶳ��������ں�ħ��ʦ�������£������ļ��仯��������Զ���Ǳ���ѩƮ���������ڱ��ߵ����������ġ�");
            } else if (status == 5) {
                cm.sendNextPrev("�ҽ����գ��������һ�塣���һ��Ӻܾ���ǰ������Ԥ��������ȴ���Ӣ�۵Ĺ�����Ȼ�󡭡��������ڷ������㡣��������ط�����");
            } else if (status == 6) {
                cm.sendNextPrev("���ǲ���һ��˵��̫�ࣿ���������Щ���ѣ�û��ϵ��������ͻ����ס���#b���ǸϽ��ش������#k���ش��ӵ�·�ϣ���������������͡�");
            } else if (status == 7) {
                cm.playerSummonHint(true);
                cm.warp(140090100, 1);
                cm.dispose();
            }
        }
    }
}