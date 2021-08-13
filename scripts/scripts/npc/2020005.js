/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Alcaster - El Nath Market (211000100)
-- By ---------------------------------------------------------------------------------------------
	Unknown/Information/xQuasar
-- Version Info -----------------------------------------------------------------------------------
	1.3 - Fixed up completely [xQuasar]
	1.2 - Add a missing text part [Information]
	1.1 - Recoded to official [Information]
	1.0 - First Version by Unknown
---------------------------------------------------------------------------------------------------
**/

var selected;
var amount;
var totalcost;
var item = new Array(2050003,2050004,4006000,4006001);
var cost = new Array(300,400,5000,5000);
var msg = new Array("ʥˮ","��������","ħ��ʯ","�ٻ�ʯ");
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    cm.sendNext("����Ҫ�Ļ��������ҡ�.");
	    cm.safeDispose();
	    return;
	}
	status--;
    }

    if (status == 0) {
	if (cm.getQuestStatus(3035) == 2) {
	    var selStr;
	    for (var i = 0; i < item.length; i++){
		selStr += "\r\n#L" + i + "# #b#t" + item[i] + "# (�۸�: "+cost[i]+" ���)#k#l";
	    }
	    cm.sendSimple("лл�㹺�� #b#t4031056##k "+selStr);
	}
	else {
	    cm.sendNext("���������ң���Ϊ�����һ�����������Ʒ�����㡣");
	    cm.safeDispose();
	}
    } else if (status == 1) {
	selected = selection;
	cm.sendGetNumber("#b#t"+item[selected]+"##k ���������Ҫ�ĵ��ߣ�������� "+msg[selected]+". �����ܲ��ǻ�ȡ��򵥵���Ŀ�����һ����һ���ܺõ�Э��Ϳ����ˡ����Ứ���� #b"+cost[selected]+" ���#k ���빺����٣���", 0, 1, 100);
    } else if (status == 2) {
	amount = selection;
	totalcost = cost[selected] * amount;
	if (amount == 0) {
	    cm.sendOk("����㲻�������κζ����Ļ�����Ҳû��ʲô������");
	    cm.dispose();
	}
	cm.sendYesNo("�������Ҫ�� #r"+amount+" #t"+item[selected]+"##k? ������ "+cost[selected]+" ��� ÿ�� #t"+item[selected]+"#, �ܹ������� #r"+totalcost+" ���#k");
    } else if(status == 3) {
	if(cm.getMeso() < totalcost || !cm.canHold(item[selected])) {
	    cm.sendNext("��ȷ����ķ���㹻�����û������ҲҪ�� #r"+totalcost+"#k ���.");
	    cm.dispose();
	}
	cm.sendNext("лл������㷢���Լ���Ҫ����Ʒ�ĵ�·��ȷ���������½����ҿ����Ѿ��õ��˾����꣬������Ȼ�������ɵ�ħ����Ʒ��.");
	cm.gainMeso(-totalcost);
	cm.gainItem(item[selected], amount);
	cm.safeDispose();
    }
}