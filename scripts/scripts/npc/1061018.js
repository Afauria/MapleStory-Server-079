var status = 0;

var ttt = "#fUI/UIWindow.img/Quest/icon9/0#";
var xxx = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;


        if (status == 0) {

            var textz = "\r\n ����ħ��������,����Ҫ��ս���ػ���������?\r\n";

            // textz += "#b#L0#1�������.��ս����ħ#l\r\n";

            textz += "#b#L1#����#l\r\n";

            cm.sendSimple(textz);


        } else if (status == 1) {

            if (selection == 0) {
                var party = cm.getPlayer().getParty();
                if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                    cm.dispose();
                } else if (party.getMembers().size() < 0) {
                    cm.sendOk("��Ҫ 2 �����ϵ���Ӳ����ٻ���!");
                    cm.dispose();
                } else if (cm.haveItem(4000463) < 0) {
                    cm.sendOk("��ս�޴�����ħ����Ҫ  #v4000463# \r\n#k");
                    cm.dispose();
                } else {
                    cm.gainItem(4000463, -1);
                    //����ID--Ѫ --��--����--��������--X--Y
                    cm.spawnMonster(8830007, 416, 258);
                    cm.spawnMonster(8830008, 416, 258);
                    cm.spawnMonster(8830009, 416, 258);
                    cm.dispose();
                }

            }
            //  else if (selection == 1) {
            //     cm.warpParty(105100100);
            //     cm.gainItem(1472244, 1);
            //     cm.dispose();

            // }
        }
    }
}