/**
	Chief Tatamo - Leafre(240000000)
**/

var section;
var temp;
var cost;
var count;
var menu = "";
var itemID = new Array(4000226, 4000229, 4000236, 4000237, 4000261, 4000231, 4000238, 4000239, 4000241, 4000242, 4000234, 4000232, 4000233, 4000235, 4000243);
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
	    cm.dispose();
	}
        if (status > 2) {
            if (section == 0) {
                cm.sendOk("�����ؿ��ǡ�һ���������˾���������֪����");
            } else {
                cm.sendOk("����ɣ�Ȼ������֪����ľ�����");
            }
            cm.safeDispose();
        }
        status--;
    }
    if (status == 0) {
        cm.sendSimple("������������\r\n#L0##bħ������#k#l\r\n#L1##bΪ����ľ����ж�#k#l");
    } else if (status == 1) {
        section = selection;
        if (section == 0) {
            cm.sendSimple("��Ҫ�Ұ����㣿��\r\n#L0##b���������һЩ #t4031346#.#k#l");
        } else if (section == 1) {
            cm.sendNext("���õĽ�������Ǵ峤��ְ��������Ҫ������õĵ��ߡ�����Ϊ�˴�����׳�����ľ�帽���ռ����ĵ�����");
        } else {
            if (cm.isQuestActive(3759)) {
                if (cm.haveItem(4032531)) {
                    cm.sendNext("Dragon Moss Extract...? I already gave you that!");
                } else {
                    cm.sendNext("Dragon Moss Extract...Ah, I see. I will give it to you in this situation.");
                    cm.gainItem(4032531, 1);
                }
            } else {
                cm.sendNext("���Ǻ��������ҡ�");
            }
            cm.dispose();
        }
    } else if (status == 2) {
        if (section == 0) {
            cm.sendGetNumber("#b#t4031346##k ��Ҫ����ٸ�����", 1, 1, 99);
        } else {
            for (var i = 0; i < itemID.length; i++) {
                menu += "\r\n#L" + i + "##b#t" + itemID[i] + "##k#l";
            }
            cm.sendNext("������׳����ֵ����أ�" + menu);
            //cm.safeDispose();
        }
    } else if (status == 3) {
        if (section == 0) {
            if (selection == 0) {
                cm.sendOk("�Ҳ�������0����");
                cm.safeDispose();
            } else {
                temp = selection;
                cost = temp * 30000;
                cm.sendYesNo("��Ҫ�� #b" + temp + " #t4031346##k ���������� #b" + cost + " ���#k. ��ȷ��Ҫ���򣿣�?");
            }
        } else {
            temp = selection;
            if(cm.haveItem(itemID[temp])) {
				//cm.sendGetNumber("How many #b#t" + itemID[temp] + "#k's would you like to donate?\r\n#b< Owned : #c" + itemID[temp] + "# >#k", 0, 0, "#c" + itemID[temp] + "#");
				cm.sendGetNumber("��Ҫ����ٸ� #b#t" + itemID[temp] + "#k'�һ����ܺõĳ��͵ģ�", 1, 1, 999);
            } else {
                cm.sendNext("�Ҳ���Ϊ��������ߡ�");
                cm.safeDispose();
            }
        }
    } else if (status == 4) {
        if (section == 0) {
            if (cm.getMeso() < cost || !cm.canHold(4031346)) {
                cm.sendOk("��ȷ���Ƿ����㹻�ķ�Һ͵�����λ��");
            } else {
                cm.sendOk("�ٻ�~");
                cm.gainItem(4031346, temp);
                cm.gainMeso( - cost);
            }
            cm.safeDispose();
        } else {
            count = selection;
            cm.sendYesNo("��ȷ���������� #b" + count + " #t" + itemID[temp] + "##k?");
        }
    } else if (status == 5) {
        if (count == 0 || !cm.haveItem(itemID[temp], count)) {
            cm.sendNext("��ȷ��������Ŀ�Ƿ��㹻��");
        } else {
            cm.gainItem(itemID[temp], -count);
            cm.sendNext("��л��������");
        }
        cm.safeDispose();
    }
}