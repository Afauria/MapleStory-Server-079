/* 
 * �ű�����: cm
 * �ű���;: ����н�
 * �ű�����: ����ؼ
 * ����ʱ��: 2014/12/18
 */
var status = -1;
var beauty = 0;
var tosend = 0;
var sl;
var mats;
var dds;
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
                 // cm.getChar().gainCashDD(+1000);
            var gsjb = "��ã������Ƿ���ð�յ�ˮ���ϳ�ϵͳ��\r\n";
           // gsjb += "#L1##b�ϳɺڰ�ˮ��#v4005004##l\r\n";
            gsjb += "#L2##b�ϳ�����ˮ��#v4005000##l\r\n";
            gsjb += "#L3##b�ϳ�����ˮ��#v4005002##l\r\n";
            gsjb += "#L4##b�ϳ��ǻ�ˮ��#v4005001##l\r\n";
            gsjb += "#L5##b�ϳ�����ˮ��#v4005003##l\r\n";
            gsjb += "#L6##b�ϳɸߵ�����ˮ��#v4250802##l\r\n";
            gsjb += "#L7##b�ϳɸߵ�����ˮ��#v4251102##l\r\n";
            gsjb += "#L8##b�ϳɸߵ��ǻ�ˮ��#v4250902##l\r\n";
            gsjb += "#L9##b�ϳɸߵ�����ˮ��#v4251002##l\r\n";
            gsjb += "#L10##b�ϳ����ˮ��#v4251200##l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 1 && cm.getPlayer() <= 5) {
                cm.sendOk("GM���ܲ���һ���");
                cm.dispose();
            }
            if (selection == 0) {
                 if (cm.haveItem(4004004) == 0) {
                    cm.sendNext("���Ļ��Ҳ���һ�.");
                    status = -1;
                } else {
                    beauty = 0
                    cm.sendGetNumber("�ϳ�һ��#v4005004#��Ҫ10��#v4004004#\r\n������[#r�ڰ�ˮ��ĸ��#k]������:\r\n��ǰ: #r #c4004004# �� \r\n", 1, 1, 100000 );

                }

            
            }else if (selection == 1) {
                    if (1<0) {
                    cm.sendNext("���Ļ��Ҳ���һ�.");
                    status = -1;
                } else {
                    beauty = 1
                    cm.sendGetNumber("�ϳ�һ����Ҫ�������£�\r\n#v4004004##z4004004# �� 10\r\n#v4031138#��ң�50000\r\n������Ҫ�ϳɵ�����:\r\n", 1, 1, 100000 );

                }

            }else if (selection == 2) {
                    if (1<0) {
                    cm.sendNext("���Ļ��Ҳ���һ�.");
                    status = -1;
                } else {
                    beauty = 2
                    cm.sendGetNumber("�ϳ�һ����Ҫ�������£�\r\n#v4004000##z4004000# �� 10\r\n#v4031138#��ң�50000\r\n������Ҫ�ϳɵ�����:\r\n", 1, 1, 100000 );

                }

            }else if (selection == 3) {
                    if (1<0) {
                    cm.sendNext("���Ļ��Ҳ���һ�.");
                    status = -1;
                } else {
                    beauty = 3
                    cm.sendGetNumber("�ϳ�һ����Ҫ�������£�\r\n#v4004002##z4004002# �� 10\r\n#v4031138#��ң�50000\r\n������Ҫ�ϳɵ�����:\r\n", 1, 1, 100000 );

                }

            }else if (selection == 4) {
                    if (1<0) {
                    cm.sendNext("���Ļ��Ҳ���һ�.");
                    status = -1;
                } else {
                    beauty = 4
                    cm.sendGetNumber("�ϳ�һ����Ҫ�������£�\r\n#v4004001##z4004001# �� 10\r\n#v4031138#��ң�50000\r\n������Ҫ�ϳɵ�����:\r\n", 1, 1, 100000 );

                }

            }else if (selection == 5) {
                    if (1<0) {
                    cm.sendNext("���Ļ��Ҳ���һ�.");
                    status = -1;
                } else {
                    beauty = 5
                    cm.sendGetNumber("�ϳ�һ����Ҫ�������£�\r\n#v4004003##z4004003# �� 10\r\n#v4031138#��ң�50000\r\n������Ҫ�ϳɵ�����:\r\n", 1, 1, 100000 );

                }

            }else if (selection == 6) {
                    if (1<0) {
                    cm.sendNext("���Ļ��Ҳ���һ�.");
                    status = -1;
                } else {
                    beauty = 6
                    cm.sendGetNumber("�ϳ�һ����Ҫ�������£�\r\n#v4005000##z4005000# �� 10\r\n#v4031138#��ң�1000000\r\n������Ҫ�ϳɵ�����:\r\n", 1, 1, 100000 );

                }

            }else if (selection == 7) {
                    if (1<0) {
                    cm.sendNext("���Ļ��Ҳ���һ�.");
                    status = -1;
                } else {
                    beauty = 7
                    cm.sendGetNumber("�ϳ�һ����Ҫ�������£�\r\n#v4005002##z4005002# �� 10\r\n#v4031138#��ң�1000000\r\n������Ҫ�ϳɵ�����:\r\n", 1, 1, 100000 );

                }

            }else if (selection == 8) {
                    if (1<0) {
                    cm.sendNext("���Ļ��Ҳ���һ�.");
                    status = -1;
                } else {
                    beauty = 8
                    cm.sendGetNumber("�ϳ�һ����Ҫ�������£�\r\n#v4005001##z4005001# �� 10\r\n#v4031138#��ң�1000000\r\n������Ҫ�ϳɵ�����:\r\n", 1, 1, 100000 );

                }

            }else if (selection == 9) {
                    if (1<0) {
                    cm.sendNext("���Ļ��Ҳ���һ�.");
                    status = -1;
                } else {
                    beauty = 9
                    cm.sendGetNumber("�ϳ�һ����Ҫ�������£�\r\n#v4005003##z4005003# �� 10\r\n#v4031138#��ң�1000000\r\n������Ҫ�ϳɵ�����:\r\n", 1, 1, 100000 );

                }

            }else if (selection == 10) {
                    if (1<0) {
                    cm.sendNext("���Ļ��Ҳ���һ�.");
                    status = -1;
                } else {
                    beauty = 10
                    cm.sendGetNumber("�ϳ�һ����Ҫ�������£�\r\n#v4250802##z4250802# �� 1\r\n#v4251102##z4251102# �� 1\r\n#v4250902##z4250902# �� 1\r\n#v4251002##z4251002# �� 1\r\n#v4031138#��ң�200000\r\n������Ҫ�ϳɵ�����:\r\n", 1, 1, 100000 );

                }

            }
               


			
			
			
			
			
        } else if (status == 2) {
            if (beauty == 0) {
               if (cm.haveItem(4004004, selection*10)&&cm.haveItem(4001126, selection*10)){
					 cm.gainItem(4004004, -selection*10);
                    cm.sendNext("�ϳ���Ʒ�ɹ���");
                   // cm.gainNX(+1000 * selection);
					cm.gainItem(4005004, selection);
					 cm.dispose();
                } else {
                    cm.sendNext("������������������޷��һ���");
                    cm.dispose()
                }
            }else if (beauty == 1) {
                 if (cm.haveItem(4004004, selection*10) && cm.getPlayer().getMeso() >selection*50000){
					 cm.gainItem(4004004, -selection*10);
					cm.gainMeso(-50000* selection); //�Ӽ����
					cm.gainItem(4005004, selection);
                    cm.sendNext("�ϳ���Ʒ�ɹ���");
					cm.dispose();
                } else {
                    cm.sendNext("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
            }else if (beauty == 2) {
                 if (cm.haveItem(4004000, selection*10) && cm.getPlayer().getMeso() >selection*50000){
					 cm.gainItem(4004000, -selection*10);
					cm.gainMeso(-50000* selection); //�Ӽ����
					cm.gainItem(4005000, selection);
                    cm.sendNext("�ϳ���Ʒ�ɹ���");
					cm.dispose();
                } else {
                    cm.sendNext("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
            }else if (beauty == 3) {
                 if (cm.haveItem(4004002, selection*10) && cm.getPlayer().getMeso() >selection*50000){
					 cm.gainItem(4004002, -selection*10);
					cm.gainMeso(-50000* selection); //�Ӽ����
					cm.gainItem(4005002, selection);
                    cm.sendNext("�ϳ���Ʒ�ɹ���");
					cm.dispose();
                } else {
                    cm.sendNext("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
            }else if (beauty == 4) {
                 if (cm.haveItem(4004001, selection*10) && cm.getPlayer().getMeso() >selection*50000){
					 cm.gainItem(4004001, -selection*10);
					cm.gainMeso(-50000* selection); //�Ӽ����
					cm.gainItem(4005001, selection);
                    cm.sendNext("�ϳ���Ʒ�ɹ���");
					cm.dispose();
                } else {
                    cm.sendNext("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
            }else if (beauty == 5) {
                 if (cm.haveItem(4004003, selection*10) && cm.getPlayer().getMeso() >selection*50000){
					 cm.gainItem(4004003, -selection*10);
					cm.gainMeso(-50000* selection); //�Ӽ����
					cm.gainItem(4005003, selection);
                    cm.sendNext("�ϳ���Ʒ�ɹ���");
					cm.dispose();
                } else {
                    cm.sendNext("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
            }else if (beauty == 6) {
                 if (cm.haveItem(4005000, selection*10) && cm.getPlayer().getMeso() >selection*100000){
					 cm.gainItem(4005000, -selection*10);
					cm.gainMeso(-1000000* selection); //�Ӽ����
					cm.gainItem(4250802, selection);
                    cm.sendNext("�ϳ���Ʒ�ɹ���");
					cm.dispose();
                } else {
                    cm.sendNext("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
            }else if (beauty == 7) {
                 if (cm.haveItem(4005002, selection*10) && cm.getPlayer().getMeso() >selection*100000){
					 cm.gainItem(4005002, -selection*10);
					cm.gainMeso(-100000* selection); //�Ӽ����
					cm.gainItem(4251102, selection);
                    cm.sendNext("�ϳ���Ʒ�ɹ���");
					cm.dispose();
                } else {
                    cm.sendNext("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
            }else if (beauty == 8) {
                 if (cm.haveItem(4005001, selection*10) && cm.getPlayer().getMeso() >selection*100000){
					 cm.gainItem(4005001, -selection*10);
					cm.gainMeso(-100000* selection); //�Ӽ����
					cm.gainItem(4250902, selection);
                    cm.sendNext("�ϳ���Ʒ�ɹ���");
					cm.dispose();
                } else {
                    cm.sendNext("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
            }else if (beauty == 9) {
                 if (cm.haveItem(4005003, selection*10) && cm.getPlayer().getMeso() >selection*100000){
					 cm.gainItem(4005003, -selection*10);
					cm.gainMeso(-100000* selection); //�Ӽ����
					cm.gainItem(4251002, selection);
                    cm.sendNext("�ϳ���Ʒ�ɹ���");
					cm.dispose();
                } else {
                    cm.sendNext("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
            }else if (beauty == 10) {
                 if (cm.haveItem(4250802, selection*1) &&cm.haveItem(4251102, selection*1) &&cm.haveItem(4250902, selection*1) &&cm.haveItem(4251002, selection*1) && cm.getPlayer().getMeso() >selection*200000){
					 cm.gainItem(4250802, -selection*1);
					 cm.gainItem(4251102, -selection*1);
					 cm.gainItem(4250902, -selection*1);
					 cm.gainItem(4251002, -selection*1);
					cm.gainMeso(-200000* selection); //�Ӽ����
					cm.gainItem(4251200, selection);
                    cm.sendNext("�ϳ���Ʒ�ɹ���");
					cm.dispose();
                } else {
                    cm.sendNext("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
            }
            status = -1;
        } else {
            cm.dispose();
        }
    }
}
