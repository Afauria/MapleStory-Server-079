/* 
 * �ű�����: cm
 * �ű���;: ����н�
 * �ű�����: ����ؼ
 * ����ʱ��: 2014/12/18
 */
 
 
importPackage(net.sf.cherry.client);
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
				 
               if (cm.haveItem(4200007, 1)){
				cm.sendOk("���Ǹ����ɵ��ˣ�������򿪶һ���");
				cm.dispose();    
			   }
				 
            var gsjb = "";
            gsjb = "��������ʲô����Ժ����������أ�\r\n\r\n";
          //  gsjb += "#L16##r#v4031636##v4031640#���ٶһ�(50W������)#v4031644##v4031648##k#l\r\n";
            gsjb += "#L104##v4031629##v4031632##v4031636#(#r�����100W��Ϸ��#k)#l\r\n\r\n";
           // gsjb += "#L100##b#v4031636##z4031636#  �һ���� #b����-(#r1 = 50W#b)��ӵ��:#r#c4031636##k#l\r\n";
            //gsjb += "#L101##b#v4031640##z4031640# �һ����� #b����-(#r1 = 100#b)��ӵ��:#r#c4031640##k#l\r\n";
          //  gsjb += "#L102##b#v4031644##z4031644# �һ�#v4000463# #b����-(#r3 = 1#b)��ӵ��:#r#c4031644##k#l\r\n";
         //   gsjb += "#L103##b#v4031648##z4031648# �һ�#v4031890# #b����-(#r5 = 1#b)��ӵ��:#r#c4031648##k#l\r\n\r\n";
          //  gsjb += "#L0##b#v4031627##z4031627# �һ� #v4031636##z4031636# #b����(#r10 = 1#b)#l\r\n";
          //  gsjb += "#L1##b#v4031633##z4031633# �һ� #v4031636##z4031636# #b����(#r6 = 1#b)#l\r\n";
          //  gsjb += "#L2##b#v4031634##z4031634# �һ� #v4031636##z4031636# #b����(#r4 = 1#b)#l\r\n";
         //   gsjb += "#L3##b#v4031635##z4031635# �һ� #v4031636##z4031636# #b����(#r2 = 1#b)#l\r\n\r\n";
          //  gsjb += "#L4##b#v4031630##z4031630# �һ� #v4031640##z4031640# #b����(#r10 = 1#b)#l\r\n";
         //   gsjb += "#L5##b#v4031637##z4031637# �һ� #v4031640##z4031640# #b����(#r6 = 1#b)#l\r\n";
        //   gsjb += "#L6##b#v4031638##z4031638# �һ� #v4031640##z4031640# #b����(#r4 = 1#b)#l\r\n";
         //   gsjb += "#L7##b#v4031639##z4031639# �һ� #v4031640##z4031640# #b����(#r2 = 1#b)#l\r\n\r\n";
         //   gsjb += "#L8##b#v4031628##z4031628# �һ� #v4031644##z4031644# #b����(#r10 = 1#b)#l\r\n";
         //   gsjb += "#L9##b#v4031641##z4031641# �һ� #v4031644##z4031644# #b����(#r6 = 1#b)#l\r\n";
          //  gsjb += "#L10##b#v4031642##z4031642# �һ� #v4031644##z4031644# #b����(#r4 = 1#b)#l\r\n";
         //   gsjb += "#L11##b#v4031643##z4031643# �һ� #v4031644##z4031644# #b����(#r2 = 1#b)#l\r\n\r\n";
        //    gsjb += "#L12##b#v4031631##z4031631#�һ� #v4031648##z4031648# #b����(#r10 = 1#b)#l\r\n";
         //   gsjb += "#L13##b#v4031645##z4031645#�һ� #v4031648##z4031648# #b����(#r6 = 1#b)#l\r\n";
         //   gsjb += "#L14##b#v4031646##z4031646#�һ� #v4031648##z4031648# #b����(#r4 = 1#b)#l\r\n";
         //   gsjb += "#L15##b#v4031647##z4031647#�һ� #v4031648##z4031648# #b����(#r2 = 1#b)#l\r\n\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 1 && cm.getPlayer() <= 5) {
                cm.sendOk("GM���ܲ���һ���");
                cm.dispose();
            }
            if (selection == 0) {
                if (cm.haveItem(4031627) == 0) {
                    cm.sendNext("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 0
           cm.sendGetNumber("����������:\r\n#b���� - (#r10 = 1#b)\r\n  ��ǰӵ������: #c4031627# ��#r \r\n", 1, 1, 100000 ); }

            } else if (selection == 16) {
                    beauty = 16
					cm.sendYesNo("������������������#r��ǰӵ�е���#k ����������������������\r\n     #v4031627#  #r#c4031627##k�� #v4031633#  #r#c4031633##k�� #v4031634#  #r#c4031634##k�� #v4031635#  #r#c4031635##k��\r\n     #v4031630#  #r#c4031630##k�� #v4031637#  #r#c4031637##k�� #v4031638#  #r#c4031638##k�� #v4031639#  #r#c4031639##k��\r\n     #v4031628#  #r#c4031628##k�� #v4031641#  #r#c4031641##k�� #v4031642#  #r#c4031642##k�� #v4031643#  #r#c4031643##k��\r\n     #v4031631# #r#c4031631##k�� #v4031645# #r#c4031645##k�� #v4031646# #r#c4031646##k�� #v4031647# #r#c4031647##k��\r\n\r\n������������������#r��ǰӵ�е���#k ����������������������\r\n�Ƿ��ȫ���һ�Ϊ�����㣿(����Ա������#r50W#k������Ŷ!)");
            } else if (selection == 1) {
                if (cm.haveItem(4031633) == 0) {
                    cm.sendNext("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 1
           cm.sendGetNumber("����������:\r\n#b���� - (#r6 = 1#b)\r\n  ��ǰӵ������: #c4031633# ��#r \r\n", 1, 1, 100000 ); }

            } else if (selection == 2) {
                if (cm.haveItem(4031634) == 0) {
                    cm.sendNext("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 2
           cm.sendGetNumber("����������:\r\n#b���� - (#r4 = 1#b)\r\n  ��ǰӵ������: #c4031634# ��#r \r\n", 1, 1, 100000 ); }

            } else if (selection == 3) {
                if (cm.haveItem(4031635) == 0) {
                    cm.sendNext("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 3
           cm.sendGetNumber("����������:\r\n#b���� - (#r2 = 1#b)\r\n  ��ǰӵ������: #c4031635# ��#r \r\n", 1, 1, 100000 ); }

            } else if (selection == 4) {
                if (cm.haveItem(4031630) == 0) {
                    cm.sendNext("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 4
           cm.sendGetNumber("����������:\r\n#b���� - (#r10 = 1#b)\r\n  ��ǰӵ������: #c4031630# ��#r \r\n", 1, 1, 100000 ); }


            } else if (selection == 5) {
                if (cm.haveItem(4031637) == 0) {
                    cm.sendNext("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 5
           cm.sendGetNumber("����������:\r\n#b���� - (#r6 = 1#b)\r\n  ��ǰӵ������: #c4031637# ��#r \r\n", 1, 1, 100000 ); }

            } else if (selection == 6) {
                if (cm.haveItem(4031638) == 0) {
                    cm.sendNext("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 6
           cm.sendGetNumber("����������:\r\n#b���� - (#r4 = 1#b)\r\n  ��ǰӵ������: #c4031638# ��#r \r\n", 1, 1, 100000 ); }

            } else if (selection == 7) {
                if (cm.haveItem(4031639) == 0) {
                    cm.sendNext("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 7
           cm.sendGetNumber("����������:\r\n#b���� - (#r2 = 1#b)\r\n  ��ǰӵ������: #c4031639# ��#r \r\n", 1, 1, 100000 ); }

            }else if (selection == 8) {
                if (cm.haveItem(4031628) == 0) {
                    cm.sendNext("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 8
           cm.sendGetNumber("����������:\r\n#b���� - (#r10 = 1#b)\r\n  ��ǰӵ������: #c4031628# ��#r \r\n", 1, 1, 100000 ); }

            }else if (selection == 9) {
                if (cm.haveItem(4031641) == 0) {
                    cm.sendNext("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 9
           cm.sendGetNumber("����������:\r\n#b���� - (#r6 = 1#b)\r\n  ��ǰӵ������: #c4031641# ��#r \r\n", 1, 1, 100000 ); }

            }else if (selection == 10) {
                if (cm.haveItem(4031642) == 0) {
                    cm.sendNext("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 10
           cm.sendGetNumber("����������:\r\n#b���� - (#r4 = 1#b)\r\n  ��ǰӵ������: #c4031642# ��#r \r\n", 1, 1, 100000 ); }

            }else if (selection == 11) {
                if (cm.haveItem(4031643) == 0) {
                    cm.sendNext("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 11
           cm.sendGetNumber("����������:\r\n#b���� - (#r2 = 1#b)\r\n  ��ǰӵ������: #c4031643# ��#r \r\n", 1, 1, 100000 ); }

            }else if (selection == 12) {
                if (cm.haveItem(4031631) == 0) {
                    cm.sendNext("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 12
           cm.sendGetNumber("����������:\r\n#b���� - (#r10 = 1#b)\r\n  ��ǰӵ������: #c4031631# ��#r \r\n", 1, 1, 100000 ); }

            }else if (selection == 13) {
                if (cm.haveItem(4031645) == 0) {
                    cm.sendNext("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 13
           cm.sendGetNumber("����������:\r\n#b���� - (#r6 = 1#b)\r\n  ��ǰӵ������: #c4031645# ��#r \r\n", 1, 1, 100000 ); }

            }else if (selection == 14) {
                if (cm.haveItem(4031646) == 0) {
                    cm.sendNext("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 14
           cm.sendGetNumber("����������:\r\n#b���� - (#r4 = 1#b)\r\n  ��ǰӵ������: #c4031646# ��#r \r\n", 1, 1, 100000 ); }

            }else if (selection == 15) {
                if (cm.haveItem(4031647) == 0) {
                    cm.sendNext("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 15
           cm.sendGetNumber("����������:\r\n#b���� - (#r2 = 1#b)\r\n  ��ǰӵ������: #c4031647# ��#r \r\n", 1, 1, 100000 ); }

            }else if (selection == 100) {
                if (cm.haveItem(4031636) == 0) {
                    cm.sendNext("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 100
           cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 50W#b)\r\n  ��ǰӵ������: #c4031636# ��#r \r\n", 1, 1, 100000 ); }

            }else if (selection == 101) {
                if (cm.haveItem(4031640) == 0) {
                    cm.sendNext("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 101
           cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 100#b)\r\n  ��ǰӵ������: #c4031640# ��#r \r\n", 1, 1, 100000 ); }

            }else if (selection == 102) {
                if (cm.haveItem(4031644) == 0) {
                    cm.sendNext("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 102
           cm.sendGetNumber("����������:\r\n#b���� - (#r3 = 1#b)\r\n  ��ǰӵ������: #c4031644# ��#r \r\n", 1, 1, 100000 ); }

            }else if (selection == 103) {
                if (cm.haveItem(4031648) == 0) {
                    cm.sendNext("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 103
           cm.sendGetNumber("����������:\r\n#b���� - (#r5 = 1#b)\r\n  ��ǰӵ������: #c4031648# ��#r \r\n", 1, 1, 100000 ); }

            }else if (selection == 104) {
                if (cm.haveItem(4031629) == 0 && cm.haveItem(4031632) == 0 && cm.haveItem(4031636) == 0) {
                    cm.sendNext("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 104
					cm.sendGetNumber("#v4031629##v4031632##v4031636#\r\n���������նһ�������:\r\n#b���� - (#r1�� = 100W#b)\r\n", 1, 1, 100000 ); }
            }

        } else if (status == 2) {
            
                 if (cm.getPlayer().getMeso() < 1000000){
						 cm.sendOk("��Ҳ��㡣");
						 cm.dispose();
				 }else{
						if (beauty == 16) {
								for (i = 0; i < 100; i++) {
							if (cm.haveItem(4031627, 10)){
							 cm.gainItem(4031627, -10);
							 cm.gainItem(4031636, 1);
							}
							if (cm.haveItem(4031633, 6)){
							 cm.gainItem(4031633, -6);
							 cm.gainItem(4031636, 1);
							}
							if (cm.haveItem(4031634, 4)){
							 cm.gainItem(4031634, -4);
							 cm.gainItem(4031636, 1);
							}
							if (cm.haveItem(4031635, 2)){
							 cm.gainItem(4031635, -2);
							 cm.gainItem(4031636, 1);
							}
							
							if (cm.haveItem(4031630, 10)){
							 cm.gainItem(4031630, -10);
							 cm.gainItem(4031640, 1);
							}
							if (cm.haveItem(4031637, 6)){
							 cm.gainItem(4031637, -6);
							 cm.gainItem(4031640, 1);
							}
							if (cm.haveItem(4031638, 4)){
							 cm.gainItem(4031638, -4);
							 cm.gainItem(4031640, 1);
							}
							if (cm.haveItem(4031639, 2)){
							 cm.gainItem(4031639, -2);
							 cm.gainItem(4031640, 1);
							}
							
							
							if (cm.haveItem(4031628, 10)){
							 cm.gainItem(4031628, -10);
							 cm.gainItem(4031644, 1);
							}
							if (cm.haveItem(4031641, 6)){
							 cm.gainItem(4031641, -6);
							 cm.gainItem(4031644, 1);
							}
							if (cm.haveItem(4031642, 4)){
							 cm.gainItem(4031642, -4);
							 cm.gainItem(4031644, 1);
							}
							if (cm.haveItem(4031643, 2)){
							 cm.gainItem(4031643, -2);
							 cm.gainItem(4031644, 1);
							}
							
							
							if (cm.haveItem(4031631, 10)){
							 cm.gainItem(4031631, -10);
							 cm.gainItem(4031648, 1);
							}
							if (cm.haveItem(4031645, 6)){
							 cm.gainItem(4031645, -6);
							 cm.gainItem(4031648, 1);
							}
							if (cm.haveItem(4031646, 4)){
							 cm.gainItem(4031646, -4);
							 cm.gainItem(4031648, 1);
							}
							if (cm.haveItem(4031647, 2)){
							 cm.gainItem(4031647, -2);
							 cm.gainItem(4031648, 1);
							}
								}	
						 cm.gainMeso(-500000); //�Ӽ����
						 cm.sendOk("�һ��ɹ���");
						 cm.dispose();	
				 }
            }
          /*  if (beauty == 16) {
				
					 xy1 = cm.getPlayer().getItemQuantity(4031627, false);
					 var xyb = xy1/10;
                if (xyb>0){
					if (cm.haveItem(4031627, 10)){
					 cm.gainItem(4031627, -xyb*10);
					 cm.gainItem(4031636, xyb);
					}
                     //cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*100000)+"#k] ���");
                }
					 xy2 = cm.getPlayer().getItemQuantity(4031633, false);
					 var xyb = xy2/6;
                if (xyb>0){
					if (cm.haveItem(4031633, 6)){
					 cm.gainItem(4031633, -xyb*6);
					 cm.gainItem(4031636, xyb);
					}
                     //cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*100000)+"#k] ���");
                }
					 xy3 = cm.getPlayer().getItemQuantity(4031634, false);
					 var xyb = xy3/4;
                if (xyb>0){
					if (cm.haveItem(4031634, 4)){
					 cm.gainItem(4031634, -xyb*4);
					 cm.gainItem(4031636, xyb);
					}
                     //cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*100000)+"#k] ���");
                }
					 xy4 = cm.getPlayer().getItemQuantity(4031635, false);
					 var xyb = xy4/2;
                if (xyb>0){
					if (cm.haveItem(4031635, 2)){
					 cm.gainItem(4031635, -xyb*2);
					 cm.gainItem(4031636, xyb);
					}
                     //cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*100000)+"#k] ���");
                }
                     cm.sendOk("�һ��ɹ���");
					 cm.dispose();
            }*/
            if (beauty == 0) {
                if (cm.haveItem(4031627, selection*10)){
					 cm.gainItem(4031627, -selection*10);
					 cm.gainItem(4031636, selection);
                     //cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*100000)+"#k] ���");
                     cm.sendOk("�һ��ɹ���");
					 cm.dispose();
                } else {
                    cm.sendNext("�������㣬�޷��һ���");
                    cm.dispose()
                }
            } if (beauty == 1) {
                if (cm.haveItem(4031633, selection*6)){
					 cm.gainItem(4031633, -selection*6);
					 cm.gainItem(4031636, selection);
                     //cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*100000)+"#k] ���");
                     cm.sendOk("�һ��ɹ���");
					 cm.dispose();
                } else {
                    cm.sendNext("�������㣬�޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 2) {
                if (cm.haveItem(4031634, selection*4)){
					 cm.gainItem(4031634, -selection*4);
					 cm.gainItem(4031636, selection);
                     //cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*100000)+"#k] ���");
                     cm.sendOk("�һ��ɹ���");
					 cm.dispose();
                } else {
                    cm.sendNext("�������㣬�޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 3) {
                if (cm.haveItem(4031635, selection*2)){
					 cm.gainItem(4031635, -selection*2);
					 cm.gainItem(4031636, selection);
                     //cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*100000)+"#k] ���");
                     cm.sendOk("�һ��ɹ���");
					 cm.dispose();
                } else {
                    cm.sendNext("�������㣬�޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 4) {
                if (cm.haveItem(4031630, selection*10)){
					 cm.gainItem(4031630, -selection*10);
					 cm.gainItem(4031640, selection);
                     //cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*100000)+"#k] ���");
                     cm.sendOk("�һ��ɹ���");
					 cm.dispose();
                } else {
                    cm.sendNext("�������㣬�޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 5) {
                if (cm.haveItem(4031637, selection*6)){
					 cm.gainItem(4031637, -selection*6);
					 cm.gainItem(4031640, selection);
                     //cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*100000)+"#k] ���");
                     cm.sendOk("�һ��ɹ���");
					 cm.dispose();
                } else {
                    cm.sendNext("�������㣬�޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 6) {
                if (cm.haveItem(4031638, selection*4)){
					 cm.gainItem(4031638, -selection*4);
					 cm.gainItem(4031640, selection);
                     //cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*100000)+"#k] ���");
                     cm.sendOk("�һ��ɹ���");
					 cm.dispose();
                } else {
                    cm.sendNext("�������㣬�޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 7) {
                if (cm.haveItem(4031639, selection*2)){
					 cm.gainItem(4031639, -selection*2);
					 cm.gainItem(4031640, selection);
                     //cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*100000)+"#k] ���");
                     cm.sendOk("�һ��ɹ���");
					 cm.dispose();
                } else {
                    cm.sendNext("�������㣬�޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 8) {
                if (cm.haveItem(4031628, selection*10)){
					 cm.gainItem(4031628, -selection*10);
					 cm.gainItem(4031644, selection);
                     //cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*100000)+"#k] ���");
                     cm.sendOk("�һ��ɹ���");
					 cm.dispose();
                } else {
                    cm.sendNext("�������㣬�޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 9) {
                if (cm.haveItem(4031641, selection*6)){
					 cm.gainItem(4031641, -selection*6);
					 cm.gainItem(4031644, selection);
                     //cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*100000)+"#k] ���");
                     cm.sendOk("�һ��ɹ���");
					 cm.dispose();
                } else {
                    cm.sendNext("�������㣬�޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 10) {
                if (cm.haveItem(4031642, selection*4)){
					 cm.gainItem(4031642, -selection*4);
					 cm.gainItem(4031644, selection);
                     //cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*100000)+"#k] ���");
                     cm.sendOk("�һ��ɹ���");
					 cm.dispose();
                } else {
                    cm.sendNext("�������㣬�޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 11) {
                if (cm.haveItem(4031643, selection*2)){
					 cm.gainItem(4031643, -selection*2);
					 cm.gainItem(4031644, selection);
                     //cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*100000)+"#k] ���");
                     cm.sendOk("�һ��ɹ���");
					 cm.dispose();
                } else {
                    cm.sendNext("�������㣬�޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 12) {
                if (cm.haveItem(4031631, selection*10)){
					 cm.gainItem(4031631, -selection*10);
					 cm.gainItem(4031648, selection);
                     //cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*100000)+"#k] ���");
                     cm.sendOk("�һ��ɹ���");
					 cm.dispose();
                } else {
                    cm.sendNext("�������㣬�޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 13) {
                if (cm.haveItem(4031645, selection*6)){
					 cm.gainItem(4031645, -selection*6);
					 cm.gainItem(4031648, selection);
                     //cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*100000)+"#k] ���");
                     cm.sendOk("�һ��ɹ���");
					 cm.dispose();
                } else {
                    cm.sendNext("�������㣬�޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 14) {
                if (cm.haveItem(4031646, selection*4)){
					 cm.gainItem(4031646, -selection*4);
					 cm.gainItem(4031648, selection);
                     //cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*100000)+"#k] ���");
                     cm.sendOk("�һ��ɹ���");
					 cm.dispose();
                } else {
                    cm.sendNext("�������㣬�޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 15) {
                if (cm.haveItem(4031647, selection*2)){
					 cm.gainItem(4031647, -selection*2);
					 cm.gainItem(4031648, selection);
                     //cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*100000)+"#k] ���");
                     cm.sendOk("�һ��ɹ���");
					 cm.dispose();
                } else {
                    cm.sendNext("�������㣬�޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 100) {
                if (cm.haveItem(4031636, selection)){
					 cm.gainItem(4031636, -selection);
					cm.gainMeso(500000* selection); //�Ӽ����
					 cm.gainExp(30000* selection);
					// cm.gainNX(selection*500);	//�Ӽ���ȯ
                     //cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*100000)+"#k] ���");
                     cm.sendOk("�һ��ɹ���");
					//cm.worldMessage(6,"��ң�["+cm.getName()+"]�����˴��㣡�һ���"+selection*500+"��ȯ��");
				    cm.����(1,"��ң�["+cm.getName()+"]�����˴��㣡�һ��� "+selection*500000+" ��ң�");
					 cm.dispose();
                } else {
                    cm.sendNext("�������㣬�޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 101) {
                if (cm.haveItem(4031640, selection)){
					 cm.gainItem(4031640, -selection);
					 cm.gainDY(selection*100);	//�Ӽ�����
					 cm.gainExp(50000* selection);
                     //cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*100000)+"#k] ���");
                     cm.sendOk("�һ��ɹ���");
					//cm.worldMessage(6,"��ң�["+cm.getName()+"]�����˴��㣡�һ���"+selection*500+"��ȯ��");
				    cm.����(1,"��ң�["+cm.getName()+"]�����˴��㣡�һ��� "+selection*100+" ���ã�");
					 cm.dispose();
                } else {
                    cm.sendNext("�������㣬�޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 102) {
                if (cm.haveItem(4031644, selection*3)){
					 cm.gainItem(4031644, -selection*3);
					 cm.gainItem(4000463, selection);
					 cm.gainExp(40000* selection);
					 //cm.gainNX(selection*500);	//�Ӽ���ȯ
                     //cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*100000)+"#k] ���");
                     cm.sendOk("�һ��ɹ���");
					//cm.worldMessage(6,"��ң�["+cm.getName()+"]�����˴��㣡�һ���"+selection*500+"��ȯ��");
				    cm.����(1,"��ң�["+cm.getName()+"]�����˴��㣡�һ��� "+selection+" ������ң�");
					 cm.dispose();
                } else {
                    cm.sendNext("�������㣬�޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 103) {
                if (cm.haveItem(4031648, selection*5)){
					 cm.gainItem(4031648, -selection*5);
					 cm.gainItem(4031890, selection);
					 cm.gainExp(50000* selection);
                     //cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*100000)+"#k] ���");
                     cm.sendOk("�һ��ɹ���");
					//cm.worldMessage(6,"��ң�["+cm.getName()+"]�����˴��㣡�һ���"+selection*500+"��ȯ��");
				    cm.����(1,"��ң�["+cm.getName()+"]�����˴��㣡�һ��� "+selection+" ��ɨ������");
					 cm.dispose();
                } else {
                    cm.sendNext("�������㣬�޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 104) { 
                if (cm.haveItem(4031629, selection) && cm.haveItem(4031632, selection) && cm.haveItem(4031636, selection)){
					 cm.gainItem(4031629, -selection);
					 cm.gainItem(4031632, -selection);
					 cm.gainItem(4031636, -selection);					 
					 cm.gainMeso(1000000* selection); //�Ӽ����
					// cm.gainExp(500000* selection);
                     //cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*100000)+"#k] ���");
                     cm.sendOk("�һ��ɹ���");
					//cm.worldMessage(6,"��ң�["+cm.getName()+"]�����˴��㣡�һ���"+selection*500+"��ȯ��");
				    cm.����(1,"��ң�["+cm.getName()+"]�������գ������ "+selection*1000000+" ��ң�");
					 cm.dispose();
                } else {
                    cm.sendNext("�������㣬�޷��һ���");
                    cm.dispose()
                }
            }
            status = -1;
        } else {
            cm.dispose();
        }
    }
}
