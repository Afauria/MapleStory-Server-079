var status = 0;
var beauty = 0;
var mface = Array(20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012, 20014);
var fface = Array(21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21012, 21014);
var facenew = Array();

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("����#p9330049#. ������� #b#t5152032##k �κλ��ᣬ��ô��ô�����Ұ�����? \r\n\#L2#ʹ�� #b#t5152032##k");
        } else if (status == 1) {
            if (selection == 1) {
                if(cm.getMeso() >= price) {
                    cm.gainMeso(-price);
                    cm.gainItem(5152032, 1);
                    cm.sendOk("����!");
                } else
                    cm.sendOk("��!");
                cm.dispose();
            } else if (selection == 2) {
                facenew = Array();
                if (cm.getPlayer().getGender() == 0) {
                    for(var i = 0; i < mface.length; i++)
                        facenew.push(mface[i] + cm.getPlayer().getFace()% 1000 - (cm.getPlayer().getFace()% 100));
                }
                if (cm.getPlayer().getGender() == 1) {
                    for(var i = 0; i < fface.length; i++)
                        facenew.push(fface[i] + cm.getPlayer().getFace()% 1000 - (cm.getPlayer().getFace()% 100));
                }
                cm.sendStyle("���ҿ���ѡ��һ����Ҫ��..", facenew);
            }
        }
        else if (status == 2){
            cm.dispose();
            if (cm.haveItem(5152032) == true){
                cm.gainItem(5152032, -1);
                cm.setFace(facenew[selection]);
                cm.sendOk("����!!");
            } else
                cm.sendOk("��ò��û��#b#t5152032##k..");
        }
    }
}
