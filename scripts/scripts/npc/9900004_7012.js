var weapon = [1004492, 1052929, 1082647, 1132287, 1102828, 1073057,1122306];
var req = [
    [4001126, 1000],
    [4000000, 500],
    [4000016, 500],
    [4000010, 500],
    [4000037, 500],
	
    
];
var sels;
var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        var msg = "";
        msg += "\r\n#d��Ҫ:#b ";
        msg += "\r\n\r\n";
        for (var ii = 0; ii < req.length; ii++) {
            msg += "#i" + req[ii][0] + "##z" + req[ii][0] + "#x" + req[ii][1];
            if (ii % 3 == 0) {
                msg += "\r\n";
            }
        }
        msg += "\r\n";
        msg += "#g----------------------------------------------\r\n";
        for (var i = 0; i < weapon.length; i++) {
            msg += "#r#L" + i + "#";
            msg += "#i" + weapon[i] + "##z" + weapon[i] + "##l\r\n";
        }
        cm.sendSimple("#b#e���ã�����#rѰ����װ#b��Ҫ���²��ϣ�û�в��Ͽɲ���Ŷ\r\n\r\n" + msg + "");
    } else if (status == 1) {
        sels = selection;
        if (!cm.canHold(weapon[sels])) {
            cm.sendNext("#r�����ռ䲻��");
            cm.dispose();
            return;
        }
        for (var i = 0; i < req.length; i++) {
            if (!cm.haveItem(req[i][0], req[i][1])) {
                cm.sendNext("#b������û��#r�㹻�Ĳ���#k�������ռ�����ȥ�ɣ�");
                cm.dispose();
                return;
            }
        }
        cm.sendYesNo("#b�Ƿ�Ҫ�һ�#r�Ͻ��Ҷϵ��#r #i" + weapon[sels] + "#? \r\n");
    } else if (status == 2) {
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -req[i][1]);
        }
        cm.gainItem(weapon[sels], 1);
        cm.sendNext("#b�Ѿ��һ����ˣ���ǰ�������鿴 #i" + weapon[sels] + "#");
        cm.dispose();
    } else {
        cm.sendNext("#r��������: mode : " + mode + " status : " + status);
        cm.dispose();
    }
}