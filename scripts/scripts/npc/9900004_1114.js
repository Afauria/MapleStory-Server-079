/* global cm */

var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
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
            text += "\t\t\t  #e#d   ��ӭ����#rð�յ�����#b"  + "#e#d\r\n\tע�����ϵͳ��¼����벻Ҫ���Ž���������\r\n\r\n"

            if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getdjjl() == 0) {
                text += "#L1##r" + ��ɺ� + "�ȼ��ﵽ10����" + ��� + "#v2000004##v5440000#+20W��� #l\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getdjjl() > 0) {
                text += "" + ��ɺ� + "#r�ȼ��ﵽ10����#l" + ��� + "#v2000004##v5440000# +20W���#l\r\n\r\n"
            } else {
                text += "" + ���ڽ������� + "#r�ȼ��ﵽ10����#l" + ���ڽ����� + "#v2000004##v5440000# +20W���#l\r\n\r\n"
            }

            if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getdjjl() == 1) {
                text += "#L2##r" + ��ɺ� + "�ȼ��ﵽ30����" + ��� + "#v2000005##v2022070##v5440000#+80W��� #l\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getdjjl() > 1) {
                text += "" + ��ɺ� + "#r�ȼ��ﵽ30����#l" + ��� + "#v2000005##v2022070##v5440000#+80W���#l\r\n\r\n"
            } else {
                text += "" + ���ڽ������� + "#r�ȼ��ﵽ30����#l" + ���ڽ����� + "#v2000005##v2022070##v5440000#+80W��� #l\r\n\r\n"
            }

            if (cm.getPlayer().getLevel() >= 70 && cm.getPlayer().getdjjl() == 2) {
                text += "#L3##r" + ��ɺ� + "�ȼ��ﵽ70����" + ��� + "#v2000005##v2022035#���100W #l\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 70 && cm.getPlayer().getdjjl() > 2) {
                text += "" + ��ɺ� + "#r�ȼ��ﵽ70����#l" + ��� + "#v2000005##v2022035#���100W#l\r\n\r\n"
            } else {
                text += "" + ���ڽ������� + "#r�ȼ��ﵽ70����#l" + ���ڽ����� + "#v2000005##v2022035#���100W #l\r\n\r\n"
            }

            if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getdjjl() == 3) {
                text += "#L4##r" + ��ɺ� + "�ȼ��ﵽ100����" + ��� + "#v4002001##v5150040##v5152001##v5440000 #\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getdjjl() > 3) {
                text += "" + ��ɺ� + "#r�ȼ��ﵽ100����#l" + ��� + "#v4002001##v5150040##v5152001##v5440000#\r\n\r\n"
            } else {
                text += "" + ���ڽ������� + "#r�ȼ��ﵽ100����#l" + ���ڽ����� + "#v4002001##v5150040##v5152001##v5440000 #\r\n\r\n"
            }

            if (cm.getPlayer().getLevel() >= 150 && cm.getPlayer().getdjjl() == 4) {
                text += "#L5##r" + ��ɺ� + "�ȼ��ﵽ150����" + ��� + "#v2010006##v2002031##v5440000#���200W #l\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 150 && cm.getPlayer().getdjjl() > 4) {
                text += "" + ��ɺ� + "#r�ȼ��ﵽ150����#l" + ��� + "#v2010006##v2002031##v5440000#���200W #l\r\n\r\n"
            } else {
                text += "" + ���ڽ������� + "#r�ȼ��ﵽ150����#l" + ���ڽ����� + "#v2010006##v2002031##v5440000#���200W #l\r\n\r\n"
            }

        //    if (cm.getPlayer().getLevel() >= 190 && cm.getPlayer().getdjjl() == 5) {
              //  text += "#L6##r" + ��ɺ� + "�ȼ��ﵽ190����" + ��� + "#v4000463##v4002003##v5440000#���200W #l\r\n\r\n\r\n"
           // } else if (cm.getPlayer().getLevel() >= 190 && cm.getPlayer().getdjjl() > 5) {
            //    text += "" + ��ɺ� + "#r�ȼ��ﵽ190����#l" + ��� + "#v4000463##v4002003##v5440000#���200W #l\r\n\r\n\r\n"
          //  } else {
            //    text += "" + ���ڽ������� + "#r�ȼ��ﵽ190����#l" + ���ڽ����� + "#v4000463##v4002003##v5440000#���200W #l\r\n\r\n\r\n"
          //  }

            //if (cm.getPlayer().getLevel() >= 150 && cm.getPlayer().getdjjl() == 6) {
            //    text += "#L7##r" + ��ɺ� + "�ȼ��ﵽ150����" + ��� + "���x3000 #l\r\n\r\n\r\n"
            //} else if (cm.getPlayer().getLevel() >= 150 && cm.getPlayer().getdjjl() > 6) {
            //    text += "" + ��ɺ� + "#r�ȼ��ﵽ150����#l" + ��� + "���x3000 #l\r\n\r\n\r\n"
            //} else {
            //    text += "" + ���ڽ������� + "#r�ȼ��ﵽ150����#l" + ���ڽ����� + "���x3000 #l\r\n\r\n\r\n"
            //}

            //if (cm.getPlayer().getLevel() >= 170 && cm.getPlayer().getdjjl() == 7) {
            //    text += "#L8##r" + ��ɺ� + "�ȼ��ﵽ170����" + ��� + "���x5000 #l\r\n\r\n"
            //} else if (cm.getPlayer().getLevel() >= 170 && cm.getPlayer().getdjjl() > 7) {
            //    text += "" + ��ɺ� + "#r�ȼ��ﵽ170����#l" + ��� + "���x5000 #l\r\n\r\n"
            //} else {
            //    text += "" + ���ڽ������� + "#r�ȼ��ﵽ170����#l" + ���ڽ����� + "���x5000 #l\r\n\r\n"
            //}

            //if (cm.getPlayer().getLevel() >= 180 && cm.getPlayer().getdjjl() == 8) {
            //    text += "#L9##r" + ��ɺ� + "�ȼ��ﵽ180����" + ��� + "#v4251200#x3 #l\r\n\r\n"
            //} else if (cm.getPlayer().getLevel() >= 180 && cm.getPlayer().getdjjl() > 8) {
            //    text += "" + ��ɺ� + "#r�ȼ��ﵽ180����#l" + ��� + "#v4251200#x3 #l\r\n\r\n"
            //} else {
            //    text += "" + ���ڽ������� + "#r�ȼ��ﵽ180����#l" + ���ڽ����� + "#v4251200#x3 #l\r\n\r\n"
            //}

            //if (cm.getPlayer().getLevel() >= 190 && cm.getPlayer().getdjjl() == 9) {
            //    text += "#L10##r" + ��ɺ� + "�ȼ��ﵽ190����" + ��� + "���*8000#l\r\n\r\n"
            //} else if (cm.getPlayer().getLevel() >= 190 && cm.getPlayer().getdjjl() > 9) {
            //    text += "" + ��ɺ� + "#r�ȼ��ﵽ190����#l" + ��� + "���*8000 #l\r\n\r\n"
            //} else {
            //    text += "" + ���ڽ������� + "#r�ȼ��ﵽ190����#l" + ���ڽ����� + "���*8000 #l\r\n\r\n"
            //}

            //if (cm.getPlayer().getLevel() >= 199 && cm.getPlayer().getdjjl() == 10) {
            // text += "#L11##r" + ��ɺ� + "�ȼ��ﵽ199����" + ��� + "#v1142111#x1 ��ʱ��1��#l\r\n\r\n\r\n"
            // } else if (cm.getPlayer().getLevel() >= 199 && cm.getPlayer().getdjjl() > 10) {
            //  text += "" + ��ɺ� + "#r�ȼ��ﵽ199����#l" + ��� + "\r\n\r\n"
            // } else {
            //  text += "" + ���ڽ������� + "#r�ȼ��ﵽ199����#l" + ���ڽ����� + "\r\n"
            //}

          //  if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getdjjl() == 11) {
           //  text += "#L12##r" + ��ɺ� + "�ȼ��ﵽ200����" + ��� + "���x30000�� #l\r\n\r\n\r\n"
          //  } else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getdjjl() > 11) {
          //    text += "" + ��ɺ� + "#r�ȼ��ﵽ200����#l" + ��� + "\r\n\r\n"
         //   } else {
        //     text += "" + ���ڽ������� + "#r�ȼ��ﵽ200����#l" + ���ڽ����� + "\r\n"
         //   }

            cm.sendSimple(text);
        } else if (selection == 1) {
            cm.gainItem(2000004,100);//100������ҩˮ
			cm.gainDY(300);//����300��
			cm.gainNX(200000);//
            cm.setdjjl(1);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ10������ȡ��100������ҩˮ������300�㣬���20W");
            cm.dispose();
        } else if (selection == 2) {
            cm.gainItem(2000005, 50);//100������ҩˮ
			cm.gainItem(2022070, 1);//�����ߵ�ף��1��
			cm.gainDY(500)//����500��
			cm.gainNX(800000);//
            cm.setdjjl(2);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ30������ȡ��100������ҩˮ��ף������1��������500�㣬���80W");
            cm.dispose();
        } else if (selection == 3) {
            cm.gainItem(2000005, 10);//50������ҩˮ
			cm.gainItem(2022035, 5);//500����Ҷ
            cm.gainMeso(+1000000);//���
            cm.setdjjl(3);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ70������ȡ��10������ҩˮ��5�����¿���");
            cm.dispose();
        } else if (selection == 4) {
            cm.gainItem(4002001, 1);//����ţ��Ʊ1��
			cm.gainItem(5150040, 1);//�ʼ���1��
			cm.gainItem(5152001, 1);//��������1��
			cm.gainDY(+1000);
            cm.setdjjl(4);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ100������ȡ������ţ��Ʊ1�ţ��ʼ���1�ţ����ִ�߼�����1��");
            cm.dispose();
        } else if (selection == 5) {
          
			cm.gainItem(2010006, 1);//ľ����Ʊ1��
			cm.gainItem(2002031, 1);//�ƽ��Ҷ100��
			cm.gainDY(+5000);
			cm.gainMeso(+2000000);//���#v2010006##v2002031#
            cm.setdjjl(5);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ150������ȡ�˷���X1����ݮ����X1��5000����ȯ��200W���");
            cm.dispose();
        } else if (selection == 6) {
            cm.gainItem(4000463, 10);//��������10��
			cm.gainItem(4000463, 10);
			cm.gainItem(4002003, 5);//��ˮ����Ʊ5��
		    //cm.gainDY(+2000);
			cm.gainMeso(+2000000);//���
            cm.setdjjl(6);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ190������ȡ�˹�������10������ˮ����Ʊ5��");
            cm.dispose();
        } else if (selection == 7) {
            cm.gainNX(3000);
            cm.setdjjl(7);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ150������ȡ�˵��x3000��Ŷ~��");
            cm.dispose();
        } else if (selection == 8) {
            cm.gainNX(5000);
            cm.setdjjl(8);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ170������ȡ�˵��x5000��Ŷ~��");
            cm.dispose();
        } else if (selection == 9) {
            cm.gainItem(4251200, 3);
            cm.setdjjl(9);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ180������ȡ�����ˮ��x3����");
            cm.dispose();
        } else if (selection == 10) {
            cm.gainNX(8000);
            cm.setdjjl(10);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ190������ȡ�˵��x8000�㣡");
            cm.dispose();
            //} else if (selection == 11) {
            // cm.gainItem(1142111,100,100,100,100,5000,5000,100,100,10,10,10,10,10,10,24);
            //cm.setdjjl(11);
            //cm.��ʱ�浵();
            //cm.sendOk("��ȡ�����ɹ���");
            //cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ199������ȡ��վ���۷����ѫ�£�");
            // cm.dispose();
            //} else if (selection == 12) {
            //cm.gainNX(30000);
            //cm.setdjjl(12);
            //cm.��ʱ�浵();
            // cm.sendOk("��ȡ�����ɹ���");
            // cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ200������ȡ�˵��3��㣡");
            //cm.dispose();

        }
    }
}


