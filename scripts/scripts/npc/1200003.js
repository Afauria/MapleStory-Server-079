/* Dawnveil
 To Rien
 Puro
 Made by Daenerys
 */
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        cm.sendOk("��... �Ҳ��㻹�������������£�");
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;

    if (status == 0) {
        cm.sendYesNo("���������Ҵ��������ǰ������Ĵ�½ð�ա� ֻҪ���� #e80 ���#n���һ����ȥ #b�����#k ����Ҫȥ�������");
    } else if (status == 1) {
        if (cm.haveItem(4031801)) {
            cm.sendNextPrev("��Ȼ�����Ƽ��ţ��Ҳ��������κεķ��á������������ǽ�ǰ������ۣ����ã���;�п��ܻ��е㶯����");
        } else {
            cm.sendNext("���ֻҪ #e80 ���#n ���ܴ!!");
        }
    } else if (status == 2) {
        if (cm.haveItem(4032338)) {
            cm.sendNextPrev("��Ȼ�����Ƽ��ţ��Ҳ��������κεķ��á������������ǽ�ǰ������ۣ����ã���;�п��ܻ��е㶯����");
        } else {
            if (cm.getPlayerStat("LVL") >= 8) {
                if (cm.getMeso() < 80) {
                    cm.sendOk("ʲô����˵�������ѵĴ��� �����Ǹ����ˣ�");
                    cm.dispose();
                } else {
                    cm.sendNext("��! #e80#n ������յ��ˣ� �ã�׼������ȥά�����Ǹۆ���");
                }
            } else {
                cm.sendOk("���ҿ���... �Ҿ����㻹����ǿ׳�� ������Ҫ�ﵽ7���Ҳ������㵽����ۆ���");
                cm.dispose();
            }
        }
    } else if (status == 3) {
        if (cm.haveItem(4032338)) {
            cm.warpBack(200090070, 104000000, 80);
            cm.dispose();
        } else {
            cm.gainMeso(-80);
            cm.warpBack(200090070, 104000000, 80);
            cm.dispose();
        }
    }
}
