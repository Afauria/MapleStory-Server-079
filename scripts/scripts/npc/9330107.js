/* 	
 * 	��ҹ�� �ռ���¯�-��ɽ��ʦ��
 */

var status = -1;
var time = 1;
var mode = false;

function action(mode, type, selection) {
    if(!mode) {
		cm.sendNext("����NPCά����");
		cm.dispose();
		return;
	}
	if(cm.getClient().getChannel() != 1) {
		cm.sendNext("����ֻ����Ƶ��һ�");
		cm.dispose();
		return;
	}
	if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendNext("���ã�����#p9330107#��Ŀǰ�������ھٰ������������ʩ�������¯�������������⹻�Ļ������������λһ�����ľ�ϲ�������ر��ġ�");
    } else if (status == 1) {
        cm.sendSimple("ÿ������ʩ��Խ�࣬����Խ������������� \n\r #b#L0#��Ҫʩ����¯#l#k \n\r #b#L1#�۲쿴Ŀǰ��¯���ռ���#l#k \n\r #b#L2#����ʲô�����أ�#l#k \n\r #b#L3#��Ҫ��ȡ���õ�����#l#k");
    } else if (status == 2) {
        if (selection == 1) {
            cm.sendNext("��¯Ŀǰ�Ľ��� \n\r #B" + cm.getKegs() + "# \n\r �����ʩ�������¯�������������⹻�Ļ������������λһ�����ľ�ϲ�������ر���...");
            cm.safeDispose();
		} else if (selection == 2) {
			cm.sendNext("���ܺ���ģ����������Ҫ�������ĵİ�~\r\n��˵�ǰɣ���");
			cm.safeDispose();
		} else if (selection == 3) {
			if (cm.getBossLog('time') < 1) {
				cm.sendNext("�Ǿ͸�����~");
				cm.gainItemPeriod(1472081,1,1);
				cm.gainItem(2070020,1500);
				cm.setBossLog("time");
				cm.safeDispose();
			} else {
				cm.sendNext("С�ֵܣ�����ô̰����~һ��ֻ����һ�εİ���");
				cm.safeDispose();
			}
        } else if (selection == 0) {
            cm.sendGetNumber("С�ֵ����Ѿ�������¯������ô��Ҫ���Ҽ��� #b#t4000516##k�أ��� \n\r", 0, 0, 5000);
        }
    } else if (status == 3) {
        var num = selection;
        if (!cm.haveItem(4000516) || num == 0) {
            cm.sendOk("����С�ֵ�����Ȼ��ƭ�ҡ�����\r\n�벻Ҫ��ƭ�ҡ�����");
        } else if (cm.haveItem(4000516, num)) {
            cm.gainItem(4000516, -num);
            cm.giveKegs(num);
            cm.sendOk("�Ҳ����������Ĵ����µģ�����");
        }
        cm.safeDispose();
    }
}