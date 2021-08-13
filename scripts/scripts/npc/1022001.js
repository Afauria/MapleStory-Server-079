/* Author: Xterminator
	NPC Name: 		Regular Cab
	Map(s): 		Victoria Road : Perion (102000000)
	Description: 		Perion Cab
*/

var status = 0;
var maps = Array(104000000, 100000000, 101000000, 103000000, 120000000, 105040300);
var cost = Array(1000, 1000, 1000, 1000, 1000, 1000);
var costBeginner = Array(100, 100, 100, 100, 100, 100);
var show;
var sCost;
var selectedMap = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
	cm.dispose();
	return;
    } else if (status >= 2 && mode == 0) {
	cm.sendNext("�������Ҳ�кܶ�ֵ��һ���ĵط���������Ҫȥ��һ�����е�ʱ���ٻ������Ұɣ�");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("��ã�������ͨ���⳵��������밲ȫ���ٵĴ�һ��������һ�������Ǿͳ������ǵĳ��⳵�ɡ����Ǻ��������������Ŀ�ĵ�ȥ��ֻҪ��Ը��֧����Ӧ�ļ۸�");
    } else if (status == 1) {
	var job = cm.getJob();
	if (job == 0 || job == 1000 || job == 2000) {
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
	var job = cm.getJob();
	if (job == 0 || job == 1000 || job == 2000) {
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
	} else {
	    cm.gainMeso(-sCost);
	    cm.warp(maps[selectedMap]);
	}
	cm.dispose();
    }
}