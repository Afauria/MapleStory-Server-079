/* ===========================================================
 Resonance
 NPC Name: 		Maple Administrator
 Description: 	Quest -  Kingdom of Mushroom in Danger
 =============================================================
 Version 1.0 - Script Done.(17/7/2010)
 =============================================================
 */

var status = -1;

function start(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (type == 1 && mode == 0)
            status -= 2;
        else {
            if (status == 0) {
                qm.sendOk("��ģ����Ǽ����£������������ʱ�䣬�������ҡ�");
                qm.dispose();
                return;
            } else if (status == 3) {
                qm.sendNext("���ԣ�����������Ļ�, ��ֻ����ͨ��Ģ��������·�ߡ�. #b���ִ������ڸ�����#k��ᷢ��һ�� #b�յ����ķ���#k. ���뷿�ӣ�Ȼ����ת����#b<������Σ�Ģ���Ǳ�>#k. ����Ģ����������ڣ�ʱ�䲻����");
                qm.forceStartQuest();
                return;
            }
        }
    }
    if (status == 0)
        qm.sendAcceptDecline("��Ȼ���Ѿ�ȡ����ְҵ�ϵĽ������㿴�����Ѿ�׼�����ˡ�����Щ���������æ����Ը������");
    if (status == 1)
        qm.sendNext("���������� #bĢ������#k ����Ŀǰ���ڻ���״̬, Ģ�����������ִ帽��, �����Ĺ���. ���, ����ʼ�е������, ����������������Ψһ��Ů�� #b���� ޱ������#k. ����ʱ�������ʹ��ڵ�ǰ״̬��һ��������ʲô���顣.");
    if (status == 2)
        qm.sendNext("�Ҳ�֪�������ϸ��, ���Ǻ����Է����˿��µ�����, ��������Ϊ��������Բ鿴�����. ����������̽�ռ��ƺ�������������Ģ������. �ҸղŸ���д��һ�� #b�Ƽ���#k, �����ҽ��������ϵ�Ģ����������#b�����ӳ�#k.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v4032375# #t4032375#");
    if (status == 3)
        qm.sendYesNo("˳��˵һ��, ��֪��Ģ��������������? ��������ҵ�·�ͺ���, ��������㲻����Ļ�, �ҿ���ֱ�Ӵ��㵽�ſ�.");
    if (status == 4) {
        qm.gainItem(4032375, 1);
        qm.warp(106020000);
        qm.forceStartQuest();
        qm.dispose();
    }
}

function end(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (type == 1 && mode == 0)
            status -= 2;
        else {
            qm.dispose();
            return;
        }
    }
    if (status == 0)
        qm.sendNext("��������һ��#bְҵָ����ʦ���Ƽ���#k??! ����ʲô����������������Ģ���������Ǹ�����,");
    if (status == 1)
        qm.sendNextPrev("��...����, ��Ϊ�������ְҵָ����ʦд��. �Һܱ�Ǹû��������������ҽ���. ���� #b�����ӳ���#k ���𱣻�����. ����Կ����������ʱ�Ĳ���֮������������ʿ���Ķ��鱣�ϡ����ǵĴ��������ǿ��µģ����ǣ���ӭ����Ģ��������");
    if (status == 2) {
        qm.gainItem(4032375, -1);
        qm.forceCompleteQuest();
        qm.forceStartQuest(2312);
        qm.dispose();
    }
}
