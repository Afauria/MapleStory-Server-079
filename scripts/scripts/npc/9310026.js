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
                cm.sendOk("�����Ҫ����н�����������Ұɡ�");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
                 // cm.getChar().gainCashDD(+1000);
            var gsjb = "";
            gsjb = " #r����ֻ��һ����#k - �Ǿ���Ѱ����Ʒ���һ���Ұɣ�\r\n";
           // gsjb += "#L10##r[���]#k �һ� #v4021010#   -   (#r1000W = 1#b)#l\r\n";
            gsjb += "#L17##r���ٰ�ש - #k#v4000000##v4000016##v4000010##v4000004##v4000011##v4000001##v4000003##v4000012##l\r\n";
           // gsjb += "#L12##b#v4001126#�һ�[����ȯ]  #b���� - (#r1 = 2#b)#l\r\n";
           // gsjb += "#L1##b#v4000040#�һ�[���]  #b���� - (#r1 = 300000#b)#l\r\n";
           // gsjb += "#L2##b#v4000176#�һ�[���]  #b���� - (#r1 = 300000#b)#l\r\n";
           // gsjb += "#L11##b#v4001010#�һ�[���]  #b���� - (#r1 = 300000#b)#l\r\n";
           // gsjb += "#L14##b#v4000460#�һ�[���]  #b���� - (#r1 = 400000#b)#l\r\n";
            //gsjb += "#L15##b#v4000461#�һ�[���]  #b���� - (#r1 = 400000#b)#l\r\n";
            //gsjb += "#L16##b#v4000462#�һ�[���]  #b���� - (#r1 = 400000#b)#l\r\n";
			/*
            gsjb += "#L20##b#v4000000#�һ�[���]  #b���� - (#r1 = 1000#b)#l\r\n";
            gsjb += "#L21##b#v4000016#�һ�[���]  #b���� - (#r1 = 1000#b)#l\r\n";
            gsjb += "#L22##b#v4000010#�һ�[���]  #b���� - (#r1 = 1000#b)#l\r\n";
            gsjb += "#L23##b#v4000004#�һ�[���]  #b���� - (#r1 = 1000#b)#l\r\n";
            gsjb += "#L24##b#v4000011#�һ�[���]  #b���� - (#r1 = 1000#b)#l\r\n";
            gsjb += "#L25##b#v4000001#�һ�[���]  #b���� - (#r1 = 1000#b)#l\r\n";
            gsjb += "#L26##b#v4000003#�һ�[���]  #b���� - (#r1 = 1000#b)#l\r\n";
            gsjb += "#L27##b#v4000012#�һ�[���]  #b���� - (#r1 = 1000#b)#l\r\n";
			*/
           // gsjb += "#L3##b#v4000235#�һ�[���]  #b���� - (#r1 = 2000000#b)#l\r\n";
           // gsjb += "#L4##b#v4000243#�һ�[���]  #b���� - (#r1 = 2000000#b)#l\r\n";
           // gsjb += "#L5##b#v4000175#�һ�[���]  #b���� - (#r1 = 1400000#b)#l\r\n";
           // gsjb += "#L6##b#v4000094#�һ�[���]  #b���� - (#r1 = 400000#b)#l\r\n";
          //  gsjb += "#L7##b#v4000224#�һ�[���]  #b���� - (#r1 = 2000000#b)#l\r\n";
           // gsjb += "#L8##b#v4000140#�һ�[���]  #b���� - (#r1 = 2000000#b)#l\r\n";
           // gsjb += "#L9##b#v4000138#�һ�[���]  #b���� - (#r1 = 3000000#b)#l\r\n";
           // gsjb += "#L30##b#v4031196#�һ�[����ʯ]  #b���� - (#r1 = 1#b)#l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 1 && cm.getPlayer() <= 5) {
                cm.sendOk("GM���ܲ���һ���");
                cm.dispose();
            }
            if (selection == 0) {
                if (cm.getPlayer().getCSPoints(0) / 500 == 0) {
                    cm.sendOk("�����ʻ�������޷��һ��������ҡ�");
                    status = -1;
                } else {
                    beauty = 1;
                    cm.sendGetNumber("������#r���#k�һ�#b#z4000463##k������:\r\n#b���� - (#r500 = 1#b)\r\n����˻���Ϣ - \r\n    �������: #r" +
                            cm.getPlayer().getCSPoints(0) + " \r\n", 1, 1, cm.getPlayer().getCSPoints(0) / 500);

                }

            
            } else if (selection == 1) {
               // var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4000040).iterator();
                if (cm.haveItem(4000040) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 1
                   // cm.sendGetNumber("������һ�������#b��ǰ: #r #c4000040# ��  #k\r\n��ǰ��ң�#r"+ cm.getPlayer().getMeso(),1, 1, iter.next().getQuantity());
 cm.sendGetNumber("������һ�������#b��ǰ: #r #c4000040# ��  #k\r\n��ǰ��ң�#r"+ cm.getPlayer().getMeso(),1, 1, 400000);

                }

            }else if (selection == 2) {
               // var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4000176).iterator();
                if (cm.haveItem(4000176) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 2
                    cm.sendGetNumber("������һ�������#b��ǰ: #r #c4000176# ��  #k\r\n��ǰ��ң�#r"+ cm.getPlayer().getMeso(),1, 1, 400000);

                }

            }else if (selection == 3) {
                //var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4000235).iterator();
                if (cm.haveItem(4000235) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 3
                    cm.sendGetNumber("������һ�������#b��ǰ: #r #c4000235# ��  #k\r\n��ǰ��ң�#r"+ cm.getPlayer().getMeso(),1, 1, 400000);

                }

            }else if (selection == 4) {
                //var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4000243).iterator();
                if (cm.haveItem(4000243) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 4
                    cm.sendGetNumber("������һ�������#b��ǰ: #r #c4000243# ��  #k\r\n��ǰ��ң�#r"+ cm.getPlayer().getMeso(),1, 1, 400000);

                }

            }else if (selection == 5) {
               // var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4000175).iterator();
                if (cm.haveItem(4000175) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 5
                    cm.sendGetNumber("������һ�������#b��ǰ: #r #c4000175# ��  #k\r\n��ǰ��ң�#r"+ cm.getPlayer().getMeso(),1, 1, 400000);

                }

            }else if (selection == 6) {
                //var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4000094).iterator();
                if (cm.haveItem(4000094) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 6
                    cm.sendGetNumber("������һ�������#b��ǰ: #r #c4000094# ��  #k\r\n��ǰ��ң�#r"+ cm.getPlayer().getMeso(),1, 1, 400000);

                }

            }else if (selection == 7) {
               // var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4000224).iterator();
                if (cm.haveItem(4000224) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 7
                    cm.sendGetNumber("������һ�������#b��ǰ: #r #c4000224# ��  #k\r\n��ǰ��ң�#r"+ cm.getPlayer().getMeso(),1, 1, 400000);

                }

            }else if (selection == 8) {
               // var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4000140).iterator();
                if (cm.haveItem(4000140) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 8
                    cm.sendGetNumber("������һ�������#b��ǰ: #r #c4000140# ��  #k\r\n��ǰ��ң�#r"+ cm.getPlayer().getMeso(),1, 1, 400000);

                }

            }else if (selection == 9) {
              //  var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4000138).iterator();
                if (cm.haveItem(4000138) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 9
                    cm.sendGetNumber("������һ�������#b��ǰ: #r #c4000138# ��  #k\r\n��ǰ��ң�#r"+ cm.getPlayer().getMeso(),1, 1, 400000);

                }

            }else if (selection == 10) {
                //var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4021010).iterator();
                if (( cm.getMeso() < 2000000  )) {
                    cm.sendOk("��Ľ�Ҳ���һ�.");
                    status = -1;
                } else {
                    beauty = 10
                 cm.sendGetNumber("������һ�������#b��ǰ: #r #c4021010# ��  #k\r\n��ǰ��ң�#r"+ cm.getPlayer().getMeso(),1, 1, 400000);
			}

            }else if (selection == 11) {
               //var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4001010).iterator();
                if (cm.haveItem(4001010) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 11
                    cm.sendGetNumber("������һ�������#b��ǰ: #r #c4001010# ��  #k\r\n��ǰ��ң�#r"+ cm.getPlayer().getMeso(),1, 1, 400000);
				}

            }else if (selection == 14) {
               //var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4001010).iterator();
                if (cm.haveItem(4000460) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 14
                    cm.sendGetNumber("������һ�������#b��ǰ: #r #c4000460# ��  #k\r\n��ǰ��ң�#r"+ cm.getPlayer().getMeso(),1, 1, 400000);
				}

            }else if (selection == 15) {
               //var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4001010).iterator();
                if (cm.haveItem(4000461) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 15
                    cm.sendGetNumber("������һ�������#b��ǰ: #r #c4000461# ��  #k\r\n��ǰ��ң�#r"+ cm.getPlayer().getMeso(),1, 1, 400000);
				}

            }else if (selection == 16) {
               //var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4001010).iterator();
                if (cm.haveItem(4000462) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 16
                    cm.sendGetNumber("������һ�������#b��ǰ: #r #c4000462# ��  #k\r\n��ǰ��ң�#r"+ cm.getPlayer().getMeso(),1, 1, 400000);
				}

            }else if (selection == 12) {
                if (cm.haveItem(4001126) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 12
           cm.sendGetNumber("�������Ҷ������:\r\n#b���� - (#r1 = 2#b)\r\n  ��ǰ����: #c4001126# ��#r \r\n", 1, 1, 100000 ); }

            }else if (selection == 13) {
                if (cm.haveItem(4000313) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 13
           cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 3#b)\r\n  ��ǰ����: #c4000313# ��#r \r\n", 1, 1, 100000 ); }

            }else if (selection == 17) {
					z1 = cm.getPlayer().getItemQuantity(4000000, false);
					z2 = cm.getPlayer().getItemQuantity(4000016, false);
					z3 = cm.getPlayer().getItemQuantity(4000010, false);
					z4 = cm.getPlayer().getItemQuantity(4000004, false);
					z5 = cm.getPlayer().getItemQuantity(4000011, false);
					z6 = cm.getPlayer().getItemQuantity(4000001, false);
					z7 = cm.getPlayer().getItemQuantity(4000003, false);
					z8 = cm.getPlayer().getItemQuantity(4000012, false);
					var zliang = z1 + z2 + z3 + z4 + z5 + z6 + z7 + z8;
				
                if (zliang == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 17
					//cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 1000#b)\r\n#v4000000##v4000016##v4000010##v4000004##v4000011##v4000001##v4000003##v4000012#��ǰ������: "+zliang+"��#r \r\n", 1, 1, 100000 ); 
					cm.sendYesNo("#v4000000##v4000016##v4000010##v4000004##v4000011##v4000001##v4000003##v4000012#\r\n�һ�����: ÿ#r1#k�� = #r1000#k ���\r\n��ǰ����: #r"+zliang+"#k �����Ƿ������ȫ���һ��ɽ�ң�");
					}

            }else if (selection == 20) {
                if (cm.haveItem(4000000) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 20
           cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 1000#b)\r\n  ��ǰ����: #c4000000# ��#r \r\n", 1, 1, 100000 ); }

            }else if (selection == 21) {
                if (cm.haveItem(4000016) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 21
           cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 1000#b)\r\n  ��ǰ����: #c4000016# ��#r \r\n", 1, 1, 100000 ); }

            }else if (selection == 22) {
                if (cm.haveItem(4000010) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 22
           cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 1000#b)\r\n  ��ǰ����: #c4000010# ��#r \r\n", 1, 1, 100000 ); }

            }else if (selection == 23) {
                if (cm.haveItem(4000004) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 23
           cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 1000#b)\r\n  ��ǰ����: #c4000004# ��#r \r\n", 1, 1, 100000 ); }

            }else if (selection == 24) {
                if (cm.haveItem(4000011) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 24
           cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 1000#b)\r\n  ��ǰ����: #c4000011# ��#r \r\n", 1, 1, 100000 ); }

            }else if (selection == 25) {
                if (cm.haveItem(4000001) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 25
           cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 1000#b)\r\n  ��ǰ����: #c4000001# ��#r \r\n", 1, 1, 100000 ); }

            }else if (selection == 26) {
                if (cm.haveItem(4000003) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 26
           cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 1000#b)\r\n  ��ǰ����: #c4000003# ��#r \r\n", 1, 1, 100000 ); }

            }else if (selection == 27) {
                if (cm.haveItem(4000012) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 27
           cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 1000#b)\r\n  ��ǰ����: #c4000012# ��#r \r\n", 1, 1, 100000 ); }

            }else if (selection == 30) {
                if (cm.haveItem(4031196) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 30
           cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 1#b)\r\n  ��ǰ����: #c4031196# ��#r \r\n", 1, 1, 100000 ); }

            }


        } else if (status == 2) {
            if (beauty == 1) {
                if (cm.haveItem(4000040, selection)){
					 cm.gainItem(4000040, -selection);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*300000)+"#k] ��ҡ�");
                     cm.gainMeso(+300000* selection);
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ŭ����ש���ڿ�������һ��ˣ�"+(selection*300000)+" ��ҡ�");
					 cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            } if (beauty == 2) {
                if (cm.haveItem(4000176, selection)){
					 cm.gainItem(4000176, -selection);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*300000)+"#k] ��ҡ�");
                     cm.gainMeso(+300000* selection);
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ŭ����ש���ڿ�������һ��ˣ�"+(selection*300000)+" ��ҡ�");
					 cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 3) {
                if (cm.haveItem(4000235, selection)){
					 cm.gainItem(4000235, -selection);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*2000000)+"#k] ��ҡ�");
                     cm.gainMeso(+2000000* selection);
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ŭ����ש���ڿ�������һ��ˣ�"+(selection*2000000)+" ��ҡ�");
					 cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 4) {
                if (cm.haveItem(4000243, selection)){
					 cm.gainItem(4000243, -selection);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*2000000)+"#k] ��ҡ�");
                     cm.gainMeso(+2000000* selection);
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ŭ����ש���ڿ�������һ��ˣ�"+(selection*2000000)+" ��ҡ�");
					 cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 5) {
                if (cm.haveItem(4000175, selection)){
					 cm.gainItem(4000175, -selection);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*1400000)+"#k] ��ҡ�");
                     cm.gainMeso(+1400000* selection);
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ŭ����ש���ڿ�������һ��ˣ�"+(selection*1400000)+" ��ҡ�");
					 cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 6) {
                if (cm.haveItem(4000094, selection)){
					 cm.gainItem(4000094, -selection);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*400000)+"#k] ��ҡ�");
                     cm.gainMeso(+400000* selection);
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ŭ����ש���ڿ�������һ��ˣ�"+(selection*400000)+" ��ҡ�");
					 cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }if (beauty ==7) {
                if (cm.haveItem(4000224, selection)){
					 cm.gainItem(4000224, -selection);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*2000000)+"#k] ��ҡ�");
                     cm.gainMeso(+2000000* selection);
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ŭ����ש���ڿ�������һ��ˣ�"+(selection*2000000)+" ��ҡ�");
					 cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 8) {
                if (cm.haveItem(4000140, selection)){
					 cm.gainItem(4000140, -selection);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*2000000)+"#k] ��ҡ�");
                     cm.gainMeso(+2000000* selection);
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ŭ����ש���ڿ�������һ��ˣ�"+(selection*2000000)+" ��ҡ�");
					 cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 9) {
                if (cm.haveItem(4000138, selection)){
					 cm.gainItem(4000138, -selection);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*3000000)+"#k] ��ҡ�");
                     cm.gainMeso(+3000000* selection);
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ŭ����ש���ڿ�������һ��ˣ�"+(selection*3000000)+" ��ҡ�");
					 cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 11) {
                if (cm.haveItem(4001010, selection)){
					 cm.gainItem(4001010, -selection);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*300000)+"#k] ��ҡ�");
                     cm.gainMeso(+300000* selection);
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ŭ����ש���ڿ�������һ��ˣ�"+(selection*300000)+" ��ҡ�");
					 cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 16) {
                if (cm.haveItem(4000462, selection)){
					 cm.gainItem(4000462, -selection);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*400000)+"#k] ��ҡ�");
                     cm.gainMeso(+400000* selection);
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ŭ����ש���ڿ�������һ��ˣ�"+(selection*400000)+" ��ҡ�");
					 cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 14) {
                if (cm.haveItem(4000460, selection)){
					 cm.gainItem(4000460, -selection);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*400000)+"#k] ��ҡ�");
                     cm.gainMeso(+400000* selection);
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ŭ����ש���ڿ�������һ��ˣ�"+(selection*400000)+" ��ҡ�");
					 cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 15) {
                if (cm.haveItem(4000461, selection)){
					 cm.gainItem(4000461, -selection);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*400000)+"#k] ��ҡ�");
                     cm.gainMeso(+400000* selection);
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ŭ����ש���ڿ�������һ��ˣ�"+(selection*400000)+" ��ҡ�");
					 cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 12) {
                if (cm.haveItem(4001126, selection)){
					 cm.gainItem(4001126, -selection);
					 //cm.getChar().modifyCSPoints(1,selection*5);
					 
					cm.gainDY(selection*2); //����ȯ�Ӽ�
					cm.getChar().UpdateCash();   //
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k]��Ҷ �һ���:[#r"+(selection*2)+"#k] ����ȯ");
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ŭ����ש���ڿ�������һ��ˣ�"+(selection*2)+" ����ȯ");
					 cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 13) {
                if (cm.haveItem(4000313, selection)){
					 cm.gainItem(4000313, -selection);
					cm.gainNX(selection*5);	//�Ӽ���ȯ
					//cm.gainDY(selection*2); //����ȯ�Ӽ�
					cm.getChar().UpdateCash();   //
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k]�ƽ��Ҷ �һ���:[#r"+(selection*5)+"#k] ��ȯ");
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ŭ����ש���ڿ�������һ��ˣ�"+(selection*5)+" ��ȯ");
					 cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 17) {
					z1 = cm.getPlayer().getItemQuantity(4000000, false);
					z2 = cm.getPlayer().getItemQuantity(4000016, false);
					z3 = cm.getPlayer().getItemQuantity(4000010, false);
					z4 = cm.getPlayer().getItemQuantity(4000004, false);
					z5 = cm.getPlayer().getItemQuantity(4000011, false);
					z6 = cm.getPlayer().getItemQuantity(4000001, false);
					z7 = cm.getPlayer().getItemQuantity(4000003, false);
					z8 = cm.getPlayer().getItemQuantity(4000012, false);
					var zliang = z1 + z2 + z3 + z4 + z5 + z6 + z7 + z8;
                if (zliang > 0){
					cm.removeAll(4000000);  //�����Ʒ������Ŀ
					cm.removeAll(4000016);  //�����Ʒ������Ŀ
					cm.removeAll(4000010);  //�����Ʒ������Ŀ
					cm.removeAll(4000004);  //�����Ʒ������Ŀ
					cm.removeAll(4000011);  //�����Ʒ������Ŀ
					cm.removeAll(4000001);  //�����Ʒ������Ŀ
					cm.removeAll(4000003);  //�����Ʒ������Ŀ
					cm.removeAll(4000012);  //�����Ʒ������Ŀ
                    cm.gainMeso(+1000* zliang);
                    cm.sendOk("�һ��ɹ������һ���:[#r"+(zliang*1000)+"#k] ��ҡ�");
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ŭ����ש���ڿ�������һ��ˣ�"+(zliang*1000)+" ��ҡ�");
					cm.dispose();
                } else {
                    cm.sendOk("������Ʒ���㣬�޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 20) {
                if (cm.haveItem(4000000, selection)){
					 cm.gainItem(4000000, -selection);
                     cm.gainMeso(+1000* selection);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] ���һ���:[#r"+(selection*1000)+"#k] ��ҡ�");
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ŭ����ש���ڿ�������һ��ˣ�"+(selection*1000)+" ��ҡ�");
					 cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 21) {
                if (cm.haveItem(4000016, selection)){
					 cm.gainItem(4000016, -selection);
                     cm.gainMeso(+1000* selection);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] ���һ���:[#r"+(selection*1000)+"#k] ��ҡ�");
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ŭ����ש���ڿ�������һ��ˣ�"+(selection*1000)+" ��ҡ�");
					 cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 22) {
                if (cm.haveItem(4000010, selection)){
					 cm.gainItem(4000010, -selection);
                     cm.gainMeso(+1000* selection);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] ���һ���:[#r"+(selection*1000)+"#k] ��ҡ�");
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ŭ����ש���ڿ�������һ��ˣ�"+(selection*1000)+" ��ҡ�");
					 cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 23) {
                if (cm.haveItem(4000004, selection)){
					 cm.gainItem(4000004, -selection);
                     cm.gainMeso(+1000* selection);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] ���һ���:[#r"+(selection*1000)+"#k] ��ҡ�");
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ŭ����ש���ڿ�������һ��ˣ�"+(selection*1000)+" ��ҡ�");
					 cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 24) {
                if (cm.haveItem(4000011, selection)){
					 cm.gainItem(4000011, -selection);
                     cm.gainMeso(+1000* selection);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] ���һ���:[#r"+(selection*1000)+"#k] ��ҡ�");
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ŭ����ש���ڿ�������һ��ˣ�"+(selection*1000)+" ��ҡ�");
					 cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 25) {
                if (cm.haveItem(4000001, selection)){
					 cm.gainItem(4000001, -selection);
                     cm.gainMeso(+1000* selection);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] ���һ���:[#r"+(selection*1000)+"#k] ��ҡ�");
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ŭ����ש���ڿ�������һ��ˣ�"+(selection*1000)+" ��ҡ�");
					 cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 26) {
                if (cm.haveItem(4000003, selection)){
					 cm.gainItem(4000003, -selection);
                     cm.gainMeso(+1000* selection);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] ���һ���:[#r"+(selection*1000)+"#k] ��ҡ�");
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ŭ����ש���ڿ�������һ��ˣ�"+(selection*1000)+" ��ҡ�");
					 cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 27) {
                if (cm.haveItem(4000012, selection)){
					 cm.gainItem(4000012, -selection);
                     cm.gainMeso(+1000* selection);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] ���һ���:[#r"+(selection*1000)+"#k] ��ҡ�");
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ŭ����ש���ڿ�������һ��ˣ�"+(selection*1000)+" ��ҡ�");
					 cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 30) {
                if (cm.haveItem(4031196, selection)){
					 cm.gainItem(4031196, -selection);
					 cm.gainItem(4001322, selection);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] ���һ���:[#r"+(selection)+"#k]�� ����ʯ");
					 cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }
            status = -1;
        } else {
            cm.dispose();
        }
    }
}
