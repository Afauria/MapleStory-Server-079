/* Kedrick
	Fishking King NPC
*/

var status = -1;
var sel;
var t = Math.floor(Math.random()*2);
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
	if( t == 0 ) {
            cm.sendSimple("����Ϊ����ʲô�𣿣�#b\n\r #L1#����ͨ�����#l \n\r #L3#ʹ�ø߼��������#l#k");
        } else {
            cm.sendSimple("����Ϊ����ʲô�𣿣�#b\n\r #L1#ʹ�ø߼������#l \n\r #L3#����ͨ�����#l#k");  
        }
  } else if (status == 1) {
	sel = selection;
	if ( ( t == 1 && sel == 3  )  || (sel == 1 && t == 0) ) {
	    cm.sendYesNo("����ȷ��Ҫ�� 6�� ��� �� 120 ����ͨ�������");
	} else if (sel == 3) {
            cm.dispose();
	    return;
            if (cm.canHold(2300001,120) && cm.haveItem(5350000,1)) {
		if (!cm.haveItem(2300001)) {
		    cm.gainItem(2300001, 120);
		    cm.gainItem(5350000,-1);
		    cm.sendNext("���ĵ���ɣ�");
		} else {
		    cm.sendNext("��̰�ģ��������������ң�");
		}
	    } else {
		cm.sendOk("��ȷ���Ƿ��и߼��������ͷ�����߼�����ĵ�������û�����ˡ�");
	    }
	    cm.safeDispose();
	}
    } else if (status == 2) {
	if ( ( t == 1 && sel == 3  )  || (sel == 1 && t == 0) ) {    
            if (cm.canHold(2300000,120) && cm.getMeso() >= 60000) {
		if (!cm.haveItem(2300000)) {
		    cm.gainMeso(-60000);
		    cm.gainItem(2300000, 120);
		    cm.sendNext("���ĵ���ɣ�");
		} else {
		    cm.sendNext("��̰�ģ��������������ң�");
		}
	    } else {
		cm.sendOk("��ȷ���Ƿ����㹻�ķ�ң����߼�����ĵ�������û�����ˡ�");
	    }
	    cm.safeDispose();
	}
    }
}
