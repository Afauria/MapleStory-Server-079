importPackage(Packages.client);
importPackage(Packages.client.inventory);


var status = -1;
var beauty = 0;
var tosend = 0;
var sl;
var mats;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            if (status == 0) {
                cm.sendNext("�����Ҫ����н�����������Ұɡ�");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
            var gsjb = "";
            gsjb ="  #e#r���ֻ�÷�ʽ: �ڳԻ�ϵͳ��#v4001126##v4000313#�һ�\r\n  \r\n";
            gsjb +="  ��ǰ���:#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n\r\n#d";
           // gsjb +="#L3##b#z4001126#�һ���� #fUI/Basic/BtHide3/mouseOver/0# #b���� - (#r1 = 1#b)#l\r\n\r\n";
			//gsjb +="#L1##b#z4000313#�һ���� #fUI/Basic/BtHide3/mouseOver/0# #b���� - (#r1 = 10#b)#l\r\n\r\n";
			gsjb +="#L2##b#v2022035#�һ���� #fUI/Basic/BtHide3/mouseOver/0# #b���� - (#r1 = 3000#b)#l\r\n\r\n";
			gsjb +="#L6##b#v2022035#�һ���� #fUI/Basic/BtHide3/mouseOver/0# #b���� - (#r10 = 30000#b)#l\r\n\r\n";
			gsjb +="#L4##b#v2020031#�һ���� #fUI/Basic/BtHide3/mouseOver/0# #b���� - (#r1 = 3000#b)#l\r\n\r\n";
			gsjb +="#L8##b#v2020031#�һ���� #fUI/Basic/BtHide3/mouseOver/0# #b���� - (#r10 = 30000#b)#l\r\n\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 1 && cm.getPlayer() <= 5) {
                cm.sendOk("GM���ܲ���һ���");
                cm.dispose();
            }
            if (selection == 0) {
                if (cm.getPlayer().getCSPoints(1) / 30 == 0) {
                    cm.sendNext("�����ʻ�������޷��һ��������ҡ�");
                    status = -1;
                } else {
                    beauty = 1;
                    cm.sendGetNumber("������#r���#k�һ�#b#z4000463##k������:\r\n#b���� - (#r1000 = 1#b)\r\n����˻���Ϣ -  �������: #r" +
                            cm.getPlayer().getCSPoints(1) + " \r\n", 1, 1, cm.getPlayer().getCSPoints(1) / 1000);

                }

            
            } else if (selection == 1) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4000313).iterator();
                if (cm.haveItem(4000313) == 0) {
                    cm.sendNext("�����ʻ�#z4000313#��������һ����");
                    status = -1;
                } else {
                    beauty = 2;
                    cm.sendGetNumber("������#b#z4000313##k�һ�#r���#k������:\r\n#b���� - (#r1 = 10#b)\r\n����˻���Ϣ - \r\n    �������: #r" +
                            cm.getPlayer().getCSPoints(1) + "    \r\n", 1, 1, iter.next().getQuantity());

                }
            } else if (selection == 3) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4001126).iterator();
                if (cm.haveItem(4001126) == 0) {
                    cm.sendNext("�����ʻ�#v4001126#��������һ����");
                    status = -1;
                } else {
                    beauty = 3;
                    cm.sendGetNumber("������#b#z4001126##k�һ�#r���#k������:\r\n#b���� - (#r1 = 1#b)\r\n����˻���Ϣ - \r\n    �������: #r" +
                            cm.getPlayer().getCSPoints(1) + "   \r\n", 1, 1, iter.next().getQuantity());

                }
            } else if (selection == 2) {
                if (cm.haveItem(2022035,1)){
                cm.sendOk("�һ��ɹ�!");
                cm.gainItem(2022035, -1);
                		
				cm.gainNX(3000);
				//cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳɿ���X1!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ����ȯ~.");
                cm.dispose();
            }
        } else if (selection == 4) {
                if (cm.haveItem(2020031,1)){
                cm.sendOk("�һ��ɹ�!");
                cm.gainItem(2020031, -1);
                		
				cm.gainNX(3000);
				//cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳɿ���X1!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ����ȯ~.");
                cm.dispose();
            }
			
			
			} else if (selection == 6) {
                if (cm.haveItem(2022035,10)){
                cm.sendOk("�һ��ɹ�!");
                cm.gainItem(2022035, -10);
                		
				cm.gainNX(30000);
				//cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳɿ���X1!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ����ȯ~.");
                cm.dispose();
            }
        } else if (selection == 8) {
                if (cm.haveItem(2020031,10)){
                cm.sendOk("�һ��ɹ�!");
                cm.gainItem(2020031, -10);
                		
				cm.gainNX(30000);
				//cm.worldMessage(6,"���ϳ�ϵͳ��["+cm.getName()+"]�ϳɿ���X1!");
                cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�Ĳ��ϣ��Ҳ��ܸ����ȯ~.");
                cm.dispose();
            }


        } else if (status == 2) {
            if (beauty == 1) {
                if (selection <= 0) {
                    cm.sendOk("����Ķһ����ִ���");
                    cm.dispose();
                } else if (cm.getPlayer().getCSPoints(1) >= selection * 1000) {
                    cm.gainNX(-selection * 1000);
                    cm.gainItem(4000463, selection);
                    cm.sendOk("���ɹ��� #r " + (selection * 1000) + " #k��� �һ��� ��������#v4000463# x #r" + selection + " #k")
                } else {
                    cm.sendNext("�һ�" + selection + "��#z4000463##v4000463# ��Ҫ#r " + (selection * 1000) + "#k�����û���㹻�ĵ��");
                    cm.dispose();
                }
            } else if (beauty == 2) {
                if (cm.haveItem(4000313, selection)) {
                    cm.gainItem(4000313, -selection);
                    cm.gainNX(+10 * selection);
                    cm.sendOk("���ɹ���#z4000313##v4000313# x #r" + selection + " #k��Ϊ#r " + (10 * selection) + " #k���");
                } else {
                    cm.sendNext("������������������޷��һ����");
                    cm.dispose();
                }

            } else if (beauty == 3) {
                if (cm.haveItem(4001126, selection)) {
                    cm.gainItem(4001126, -selection);
                    cm.gainNX(+Math.floor(1 * selection));
                    cm.sendOk("���ɹ���#z4001126##v4001126# x #r" + selection + " #k��Ϊ#r " + Math.floor(1 * selection) + " #k���");
                } else {
                    cm.sendNext("������������������޷��һ����");
                    cm.dispose();
                }
	        } else if (beauty == 4) {
                if (cm.haveItem(4251401, selection)) {
                    cm.gainItem(4251401, -selection);
                    cm.gainNX(+Math.floor(5000 * selection));
                    cm.sendOk("���ɹ���#z4251401##v4251401# x #r" + selection + " #k��Ϊ#r " + Math.floor(5000 * selection) + " #k���");
                } else {
                    cm.sendNext("������������������޷��һ����");
                    cm.dispose();
                }
            }
            status = -1;
        } else {
            cm.dispose();
        }
    }
}
}