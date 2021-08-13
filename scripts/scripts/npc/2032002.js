/* 
 * 
 * Adobis's Mission I: Unknown Dead Mine (280010000)
 * 
 * Zakum PQ NPC (the one and only)
 */

var status = -1;
var selectedType;
var scrolls;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendSimple("��ô�������Ѽ�������#b\r\n#L0#������Ӧ����ʲô��#l\r\n#L1#�Ѿ��Ѽ�������Ʒ��#l\r\n#L2#��Ҫ�뿪���#l");
    } else if (status == 1) {
        selectedType = selection;
        if (selection == 0) {
            cm.sendNext("Ϊ�˽��������ǰ�ã�������ռ�����Ҫ�ĺ��Ĳ��ϡ�")
            cm.safeDispose();
        } else if (selection == 1) {
            if (!cm.haveItem(4001018)) { //documents
                cm.sendNext("�����#b#t4001018##kлл��")
                cm.safeDispose();
            } else {
                if (cm.haveItem(4001015,30)) { //documents
                    cm.sendYesNo("����������??\r\nΪ��ȷ�������õ��������ȿճ��ռ�");
                    scrolls = true;
                } else {
                    cm.sendYesNo("����������??\r\nΪ��ȷ�������õ��������ȿճ��ռ�");
                    scrolls = false;
                }
            }
        } else if (selection == 2) {
            cm.sendYesNo("��ȷ��Ҫ�˳������������ӳ���һ�����뿪��ӣ���ô����������޷�������ȥ���Ƿ�����˳���")
        }
    } else if (status == 2) {
        var eim = cm.getEventInstance();
        if (selectedType == 1) {
            cm.gainItem(4001018, -1);
            if (scrolls) {
                cm.gainItem(4001015, -30);
            }
            //give items/exp
            cm.�������Ʒ(4031061, 1);
            if (scrolls) {
                cm.�������Ʒ(2030007, 5);
                cm.����Ӿ���(20000);
            } else {
                cm.����Ӿ���(12000);
            }
            //clear PQ
            if (eim != null) {
                eim.finishPQ();
            }
            cm.dispose();
        } else if (selectedType == 2) {
            if (eim != null) {
                if (cm.isLeader()) {
                    eim.disbandParty();
                } else {
                    eim.leftParty(cm.getChar());
                }
            } else {
                cm.warp(280090000, 0);
            }
            cm.dispose();
        }
    }
}