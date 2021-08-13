/* Author: Xterminator
	NPC Name: 		Regular Cab
	Map(s): 		Victoria Road : Henesys (100000000)
	Description: 		Henesys Cab
*/

var status = 0;
var maps = Array(100000000, 104000000, 102000000, 101000000, 103000000, 120000000, 105040300);
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
	if (job == 0 || job == 1000 || job == 2000 || job == 3000 || job == 2001 || job == 2002 || job == 3001) {
	    var selStr = "���Ƕ�������90%���ۿ�Ŷ. ��ѡ������Ŀ�ĵء�֧������֮���ҽ��ᴫ����ȥ����ĳ���#b";
	    for (var i = 0; i < maps.length; i++) {
		if (maps[i] != cm.getMapId()) {
		selStr += "\r\n#L" + i + "##m" + maps[i] + "# (100 ���)#l";
		}
	    }
	} else {
	    var selStr = "��ѡ������Ŀ�ĵء�֧������֮���ҽ��ᴫ����ȥ����ĳ���#b";
	    for (var i = 0; i < maps.length; i++) {
		if (maps[i] != cm.getMapId()) {
		selStr += "\r\n#L" + i + "##m" + maps[i] + "# (1000 ���)#l";
		}
	    }
	}
	cm.sendSimple(selStr);
    } else if (status == 2) {
	var job = cm.getJob();
	if (job == 0 || job == 1000 || job == 2000 || job == 3000 || job == 2001 || job == 2002 || job == 3001) {
	    sCost = 100;
	    show = 100;
	} else {
	    sCost = 1000;
	    show = 1000;
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