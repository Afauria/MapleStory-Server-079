function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            //��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
            text += "#e#d���ã�������ɱ�������һ���Ʒ��\r\n\r\n�һ���۳���Ӧɱ�ִ�����.#l\r\n\r\n"//3
            text += "#e#d����ǰ��ɱ������Ϊ��" + cm.getPlayer().getSG() + ".#l\r\n\r\n"//3
			text += "#L10##r��Ҫ��1ǧ��ɱ�������һ�#k10W#v5200002##l\r\n\r\n"//3
			text += "#L9##r��Ҫ��2ǧ��ɱ�������һ�#k100ƿ#v2000004##l\r\n\r\n"//3
			text += "#L7##r��Ҫ��1���ɱ�������һ�#k100ƿ#v2000005##l\r\n\r\n"//3
            text += "#L3##r��Ҫ��100��ɱ�ִ����һ�#kɱ����ѫ��#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.getPlayer().getSG() >= 100000) {
                cm.getPlayer().gainSG(-100000);
               // cm.gainItem();//��Ʒ�Լ���
                cm.gainMeso(5000000);
                cm.sendOk("�һ��ɹ���");
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��10���[ɱ������]�һ���10Wð�ձң��ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("����ɱ����������5ǧ");
                cm.dispose();
            }
        } else if (selection == 2) {
            if (cm.getPlayer().getSG() >= 10000) {
                cm.getPlayer().gainSG(-10000);
               cm.gainItem(4032169,1);//��Ʒ�Լ���
                cm.sendOk("�һ��ɹ���");
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��1���[ɱ������]�һ�������֮һ(���)���ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("����ɱ����������1��");
                cm.dispose();
            }
        } else if (selection == 3) {
            if (cm.getPlayer().getSG() >= 1000000) {
                cm.getPlayer().gainSG(-1000000);
                //cm.getPlayer().modifyCSPoints(1, 1000, true);
                cm.gainItem(1142726, 20, 20, 20, 20, 1000, 1000, 10, 10, 0, 0, 0, 0, 0, 0);
                //cm.gainMeso(100000);
                cm.sendOk("�һ��ɹ���");
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��100��[ɱ������]�һ���ɱ����ѫ�£��ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("����ɱ����������100��");
                cm.dispose();
            }
        } else if (selection == 4) {
            if (cm.getPlayer().getSG() >= 100000) {
                cm.getPlayer().gainSG(-100000);
               // cm.gainItem();//��Ʒ�Լ���
                cm.gainItem(4000313,100);
                cm.sendOk("�һ��ɹ���");
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��10���[ɱ������]�һ���100�Ž�Ҷ���ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("���Ĳ��ϲ��㣡");
                cm.dispose();
           } 
		           } else if (selection == 5) {
            if (cm.getPlayer().getSG() >= 100000) {
                cm.getPlayer().gainSG(-100000);
               // cm.gainItem();//��Ʒ�Լ���
                cm.gainItem(4032226,100);
                cm.sendOk("�һ��ɹ���");
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��10���[ɱ������]�һ���100ֻ�����ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("���Ĳ��ϲ��㣡");
                cm.dispose();
           } 
		   } else if (selection == 6) {
            if (cm.getPlayer().getSG() >= 5000) {
                cm.getPlayer().gainSG(-5000);
               // cm.gainItem();//��Ʒ�Լ���
                cm.gainItem(4001126,50);
                cm.sendOk("�һ��ɹ���");
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��5000��[ɱ������]�һ���50�ŷ�Ҷ���ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("���Ĳ��ϲ��㣡");
                cm.dispose();
           }
		   } else if (selection == 7) {
            if (cm.getPlayer().getSG() >= 10000) {
                cm.getPlayer().gainSG(-10000);
               // cm.gainItem();//��Ʒ�Լ���
                cm.gainItem(2000005,100);
                cm.sendOk("�һ��ɹ���");
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��10000��[ɱ������]�һ���100ƿ����ҩˮ���ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("���Ĳ��ϲ��㣡");
                cm.dispose();
           }
		   } else if (selection == 8) {
            if (cm.getPlayer().getSG() >= 2000) {
                cm.getPlayer().gainSG(-2000);
               // cm.gainItem();//��Ʒ�Լ���
                cm.gainItem(4001126,100);
                cm.sendOk("�һ��ɹ���");
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��2000��[ɱ������]�һ���100�ŷ�Ҷ���ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("���Ĳ��ϲ��㣡");
                cm.dispose();
           }
		   } else if (selection == 9) {
            if (cm.getPlayer().getSG() >= 2000) {
                cm.getPlayer().gainSG(-2000);
               // cm.gainItem();//��Ʒ�Լ���
                cm.gainItem(2000004,100);
                cm.sendOk("�һ��ɹ���");
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��2000��[ɱ������]�һ���100ƿ����ҩˮ���ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("���Ĳ��ϲ��㣡");
                cm.dispose();
           }
		   } else if (selection == 10) {
            if (cm.getPlayer().getSG() >= 1000) {
                cm.getPlayer().gainSG(-1000);
               // cm.gainItem();//��Ʒ�Լ���
                cm.gainMeso(100000);
                cm.sendOk("�һ��ɹ���");
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��1000��[ɱ������]�һ���10W��ң��ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("���Ĳ��ϲ��㣡");
                cm.dispose();
           }
		   } else if (selection == 11) {
            if (cm.getPlayer().getSG() >= 1000) {
                cm.getPlayer().gainSG(-1000);
               // cm.gainItem();//��Ʒ�Լ���
                cm.gainNX(30000);
                cm.sendOk("�һ��ɹ���");
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��1000��[ɱ������]�һ���3W��ȯ���ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("���Ĳ��ϲ��㣡");
                cm.dispose();
           }
		   } else if (selection == 12) {
            if (cm.getPlayer().getSG() >= 300) {
                cm.getPlayer().gainSG(-300);
               // cm.gainItem();//��Ʒ�Լ���
                cm.gainItem(2022118,1);
                cm.sendOk("�һ��ɹ���");
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��300��[ɱ������]�һ���1������Ա��ף�����ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("���Ĳ��ϲ��㣡");
                cm.dispose();
           }
		   } else if (selection == 13) {
            if (cm.getPlayer().getSG() >= 100) {
                cm.getPlayer().gainSG(-100);
               // cm.gainItem();//��Ʒ�Լ���
                cm.gainItem(2022117,1);
                cm.sendOk("�һ��ɹ���");
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��100��[ɱ������]�һ���1ƿ��Ҷ�ǽ����ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("���Ĳ��ϲ��㣡");
                cm.dispose();
           }
        }
    }
}


