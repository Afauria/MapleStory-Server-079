/* Kedrick
	Fishking King NPC
*/

var status = -1;
var sel;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
		if (status == 0) {
			cm.dispose();
			return;
		}
	status--;
    }

    if (status == 0) {
	cm.sendSimple("����Ϊ����ʲô�𣿣�\n\r #L4#������ô���㡣#l \n\r #L5#ʹ��500�����㻻ȡ #i1142071#��׼����ѫ�� [���� : 30 ��]#l");
    } else if (status == 1) {
	sel = selection;
	if (sel == 4) {
	    cm.sendOk("���ŵ���Ȼ������������ÿ1���Ӿͻ��ж�����");
	    cm.safeDispose();
	} else if (sel == 5) {
	    if (cm.haveItem(4031648, 500)) {
		if (cm.canHold(1142071)) {
		    cm.gainItem(4031648, -500);
		    cm.gainItemPeriod(1142071, 1, 30);
		    cm.sendOk("��ϲ�õ��� #b#i1142071##k!")
		} else {
		    cm.sendOk("��ȷ��װ�����Ƿ����㹻��");
		}
	    } else {
		cm.sendOk("����� 500�� #i4031648:# �Ҳ��ܸ��� #i1142071#")
	    }
	    cm.safeDispose();
	}
    }
}