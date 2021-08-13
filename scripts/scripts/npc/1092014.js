/* Author: Xterminator
	NPC Name: 		Nautilus' Mid-Sized Taxi
	Map(s): 		Victoria Road : Nautilus Harbor (120000000)
	Description: 		Nautilus Harbor Taxi
*/

var status = -1;
var maps = Array(104000000, 102000000, 100000000, 103000000, 101000000, 105040300);
var cost = Array(1000, 1000, 1000, 1000, 1000, 1000);
var costBeginner = Array(100, 100, 100, 100, 100, 100);
var show;
var sCost;
var selectedMap = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status >= 2) {
	    cm.sendNext("�������Ҳ�кܶ�ֵ��һ���ĵط���������Ҫȥ��һ�����е�ʱ���ٻ������Ұɣ�");
	    cm.safeDispose();
	    return;
	}
	status--;
    }

    if (status == 0) {
	cm.sendNext("��ã�������ͨ���⳵��������밲ȫ���ٵĴ�һ��������һ�������Ǿͳ������ǵĳ��⳵�ɡ����Ǻ��������������Ŀ�ĵ�ȥ��ֻҪ��Ը��֧����Ӧ�ļ۸�");
    } else if (status == 1) {
	if (cm.getJob() == 0) {
	    var selStr = "We have a special 90% discount for beginners. ��ѡ������Ŀ�ĵء�֧������֮���ҽ��ᴫ����ȥ����ĳ���#b";
	    for (var i = 0; i < maps.length; i++) {
		selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + costBeginner[i] + " ���)#l";
	    }
	} else {
	    var selStr = "��ѡ������Ŀ�ĵء�֧������֮���ҽ��ᴫ����ȥ����ĳ���#b";
	    for (var i = 0; i < maps.length; i++) {
		selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + cost[i] + " ���)#l";
	    }
	}
	cm.sendSimple(selStr);
    } else if (status == 2) {
	if (cm.getJob() == 0) {
	    sCost = costBeginner[selection];
	    show = costBeginner[selection];
	} else {
	    sCost = cost[selection];
	    show = cost[selection];
	}
	cm.sendYesNo("��������ûʲô�ɸɵģ������������ȥ #b#m" + maps[selection] + "##k? �⽫������ #b" + show + " ���#k.");
	selectedMap = selection;
    } else if (status == 3) {
	if (cm.getMeso() < sCost) {
	    cm.sendNext("You don't have enough mesos. Sorry to say this, but without them, you won't be able to ride the cab.");
	    cm.safeDispose();
	} else {
	    cm.gainMeso(-sCost);
	    cm.warp(maps[selectedMap], 0);
	    cm.dispose();
	}
    }
}