function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 1; i++) {
                text += "";
            }
			//��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
            text += "#e#d��ӭ��������װ����������.#l\r\n\r\n"//3
			text += "#L0##r����#v1122000#(ȫ����+40)��Ҫ��#v1122000#X1 #v4310149#X1 #v4001094#X10.#l\r\n"//3
            text += "#L1##r����#v1003267#(ȫ����+60)��Ҫ��#v4310028#X60.#l\r\n"//3
            text += "#L3##r����#v1132246##z1132246# ��Ҫ��#v1132243#X1 #v1132244#X1 #v1132245#X1 #l\r\n"//3
			text += "#L4##r����#v1113075##z1113075# ��Ҫ��#v1113072#X1 #v1113073#X1 #v1113074#X1 #l\r\n"//3
			text += "#L5##r����#v1032223##z1032223# ��Ҫ��#v1032220#X1 #v1032221#X1 #v1032222#X1 #l\r\n"//3
			text += "#L6##r����#v1112593#(ȫ����+35) ��Ҫ��#v1112444#X1 #v1112915#X1 #l\r\n"//3
			text += "#L7##r����#v1113048#(ȫ����+70) ��Ҫ��#v1112593#X4 #v1113020#X1 5����Ϸ��#l\r\n"//3
			text += "#L8##r����#v1113012#(ȫ����+55) ��Ҫ��#v1112951#X1 #v1112952#X1 #l\r\n"//3
			text += "#L9##r����#v1113089#(ȫ����+88) ��Ҫ��#v1112763#X1 #v1112775#X1 #v1112771#X1 #v1112767#X1#l\r\n"//3
			text += "#L10##r����#v1032219##z1032219# ��Ҫ��#v1032206#X1 #v1032207#X1 #v1032208#X1 #v1032209#X1#l\r\n"//3
			text += "#L11##r����#v1032205#(ȫ����+100) ��Ҫ��#v1032219#X1 #v4000464#X1 5����Ϸ�� 5W��ȯ#l\r\n"//3
			text += "#L12##r����#v1012174##z1012174# ��Ҫ��#v1012170#X1 #v1012171#X1 #v1012172#X1 #v1012172#X1(90��+100��+130��+150��=�ռ�)#l\r\n"//3
			text += "#L13##r����#v1132215##z1132215# ��Ҫ��#v1132211#X1 #v1132212#X1 #v1132213#X1 #v1132214#X1#l\r\n"//3
            cm.sendSimple(text);
			} else if (selection == 0) {
			if (cm.itemQuantity(1122000) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1122000#��������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4310149) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v4310149#��������Ʒ����#k");
				cm.dispose();
				} else if (cm.itemQuantity(400109) < 10 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v400109#X10��������Ʒ����#k");
				cm.dispose();

			
			}else{
				
				cm.gainItem(1122000, -1);
				cm.gainItem(4310149, -1);
				cm.gainItem(4001094, -10);
	

				
				cm.gainItem(1122000, 40,40,40,40,0,0,40,40,200,200,0,0,0,0);
            cm.sendOk("�����ɹ���");
			cm.����(3,"���ϳ����ġ�["+cm.getName()+"]�ϳɺ����������ɹ���");
            cm.dispose();
			}
			
			
			
        } else if (selection == 1) {
	
		     if (cm.itemQuantity(4310028) < 60 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v4310028#X60��������Ʒ����#k");
				cm.dispose();
					
			}else{
				
				cm.gainItem(4310028, -60);				
				cm.gainItem(1003267, 60,60,60,60,0,0,60,60,0,0,0,0,0,0);
            cm.sendOk("�����ɹ���");
			cm.����(3,"���ϳ����ġ�["+cm.getName()+"]�ϳ�˧������ñ�ɹ���");
            cm.dispose();
			}
			
			 } else if (selection == 2) {
			if (cm.itemQuantity(1022224) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1022224#��������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(1022225) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1022225#��������Ʒ����#k");
				cm.dispose();
				} else if (cm.itemQuantity(1022226) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1022226#��������Ʒ����#k");
				cm.dispose();
				} else if (cm.itemQuantity(1022197) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1022197#��������Ʒ����#k");
				cm.dispose();
				} else if (cm.itemQuantity(4000463) < 200 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v4000463#200����������Ʒ����#k");
				cm.dispose();
			
			}else{
				
				cm.gainItem(1022224, -1);
				cm.gainItem(1022225, -1);
				cm.gainItem(1022226, -1);
				cm.gainItem(1022197, -1);
				cm.gainItem(4000463, -200);
				
				cm.gainItem(1022197, 50,50,50,50,0,0,50,50,0,0,0,0,0,0);
            cm.sendOk("�����ɹ���");
			cm.����(3,"���ϳ����ġ�["+cm.getName()+"]�ϳɽ���̫�����ɹ���");
            cm.dispose();
			}
			
			 } else if (selection == 3) {
			if (cm.itemQuantity(1132243) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1132243#��������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(1132244) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1132244#��������Ʒ����#k");
				cm.dispose();
				} else if (cm.itemQuantity(1132245) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1132245#��������Ʒ����#k");
				cm.dispose();

			
			}else{
				
				cm.gainItem(1132243, -1);
				cm.gainItem(1132244, -1);
				cm.gainItem(1132245, -1);				
				cm.gainItem(1132246, 1);
            cm.sendOk("�����ɹ���");
			cm.����(3,"���ϳ����ġ�["+cm.getName()+"]�ϳ���߼����յ������ɹ���");
            cm.dispose();
			}
			
			} else if (selection == 4) {
			if (cm.itemQuantity(1113072) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1113072#��������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(1113073) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1113073#��������Ʒ����#k");
				cm.dispose();
				} else if (cm.itemQuantity(1113074) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1113074#��������Ʒ����#k");
				cm.dispose();

			
			}else{
				
				cm.gainItem(1113072, -1);
				cm.gainItem(1113073, -1);
				cm.gainItem(1113074, -1);

				
				cm.gainItem(1113075, 1);
            cm.sendOk("�����ɹ���");
			cm.����(3,"���ϳ����ġ�["+cm.getName()+"]�ϳ���߼����յ½�ָ�ɹ���");
            cm.dispose();
			}
			
			} else if (selection == 5) {
			if (cm.itemQuantity(1122264) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1122264#��������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(1122265) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1122265#��������Ʒ����#k");
				cm.dispose();
				} else if (cm.itemQuantity(1122266) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1122266#��������Ʒ����#k");
				cm.dispose();

			
			}else{
				
				cm.gainItem(1122264, -1);
				cm.gainItem(1122265, -1);
				cm.gainItem(1122266, -1);

				
				cm.gainItem(1122267, 1);
            cm.sendOk("�����ɹ���");
			cm.����(3,"���ϳ����ġ�["+cm.getName()+"]�ϳ���߼����յµ�׹�ɹ���");
            cm.dispose();
			}
			
			} else if (selection == 6) {
			if (cm.itemQuantity(1112444) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1112444#��������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(1112915) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1112915#��������Ʒ����#k");
				cm.dispose();

			
			}else{
				
				cm.gainItem(1112444, -1);
				cm.gainItem(1112915, -1);
	

				
				cm.gainItem(1112593, 35,35,35,35,0,0,35,35,0,0,0,0,0,0);
            cm.sendOk("�����ɹ���");
			cm.����(3,"���ϳ����ġ�["+cm.getName()+"]�ϳ�ȫ�ܽ�ָ�ɹ���");
            cm.dispose();
			}
			
			} else if (selection == 7) {
				if(cm.getMeso() < 500000000){
			    cm.sendOk("#bװ���ϳ���Ҫ5����Ϸ�ң����Ľ�Ҳ���#k");
				cm.dispose();				
			} else if (cm.itemQuantity(1112593) < 4 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1112593#X4��������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(1113020) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1113020#��������Ʒ����#k");
				cm.dispose();

			
			}else{
				
				cm.gainItem(1112593, -4);
				cm.gainItem(1113020, -1);
	            cm.gainMeso(-500000000);

				
				cm.gainItem(1113048, 70,70,70,70,0,0,70,70,0,0,0,0,0,0);
            cm.sendOk("�����ɹ���");
			cm.����(3,"���ϳ����ġ�["+cm.getName()+"]�ϳɶ�ʿ��ָ�ɹ���");
            cm.dispose();
			}
			
			} else if (selection == 8) {
			if (cm.itemQuantity(1112951) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1112951#��������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(1112952) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1112952#��������Ʒ����#k");
				cm.dispose();

			
			}else{
				
				cm.gainItem(1112951, -1);
				cm.gainItem(1112952, -1);
	

				
				cm.gainItem(1113012, 55,55,55,55,100,100,55,55,0,0,0,0,0,0);
            cm.sendOk("�����ɹ���");
			cm.����(3,"���ϳ����ġ�["+cm.getName()+"]�ϳɶ�ħ�����߽�ָ�ɹ���");
            cm.dispose();
			}
			
			} else if (selection == 9) {
			if (cm.itemQuantity(1112763) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1112763#��������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(1112775) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1112775#��������Ʒ����#k");
				cm.dispose();
				} else if (cm.itemQuantity(1112771) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1112771#��������Ʒ����#k");
				cm.dispose();
				} else if (cm.itemQuantity(1112767) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1112767#��������Ʒ����#k");
				cm.dispose();

			
			}else{
				
				cm.gainItem(1112763, -1);
				cm.gainItem(1112775, -1);
				cm.gainItem(1112771, -1);
				cm.gainItem(1112767, -1);

				
				cm.gainItem(1113089, 88,88,88,88,150,150,88,88,0,0,0,0,0,0);
            cm.sendOk("�����ɹ���");
			cm.����(3,"���ϳ����ġ�["+cm.getName()+"]�ϳ������֮��ָ�ɹ���");
            cm.dispose();
			}
			
			} else if (selection == 10) {
			if (cm.itemQuantity(1032206) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1032206#��������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(1032207) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1032207#��������Ʒ����#k");
				cm.dispose();
				} else if (cm.itemQuantity(1032208) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1032208#��������Ʒ����#k");
				cm.dispose();
				} else if (cm.itemQuantity(1032209) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1032209#��������Ʒ����#k");
				cm.dispose();

			
			}else{
				
				cm.gainItem(1032206, -1);
				cm.gainItem(1032207, -1);
				cm.gainItem(1032208, -1);
				cm.gainItem(1032209, -1);

				
				cm.gainItem(1032219, 50,50,50,50,50,50,50,50,0,0,0,0,0,0);
            cm.sendOk("�����ɹ���");
			cm.����(3,"���ϳ����ġ�["+cm.getName()+"]�ϳ�����֮�񻰶�����ȫ����50 HPMP50���ɹ���");
            cm.dispose();
			}
			
			} else if (selection == 11) {
				if(cm.getMeso() < 500000000){
			    cm.sendOk("#bװ���ϳ���Ҫ5����Ϸ�ң����Ľ�Ҳ���#k");
				cm.dispose();
           } else  if (cm.getPlayer().getCSPoints(1) < 50000) {
                    cm.sendOk("��ĵ����!");
                    cm.dispose();
				
			} else if (cm.itemQuantity(1032219) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1032219#X1��������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4000464) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v4000464#��������Ʒ����#k");
				cm.dispose();

			
			}else{
				
				cm.gainItem(1032219, -1);
				cm.gainItem(4000464, -1);
	            cm.gainMeso(-500000000);
                cm.gainNX(-50000);
				
				cm.gainItem(1032205, 100,100,100,100,100,100,100,100,0,0,0,0,0,0);
            cm.sendOk("�����ɹ���");
			cm.����(3,"���ϳ����ġ�["+cm.getName()+"]�ϳ��񻰶�����ȫ����100 HPMP100���ɹ���");
            cm.dispose();
			}
			
			} else if (selection == 12) {
			if (cm.itemQuantity(1012170) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1012170#��������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(1012171) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1012171#��������Ʒ����#k");
				cm.dispose();
				} else if (cm.itemQuantity(1012172) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1012172#��������Ʒ����#k");
				cm.dispose();
				} else if (cm.itemQuantity(1012173) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1012173#��������Ʒ����#k");
				cm.dispose();

			
			}else{
				
				cm.gainItem(1012170, -1);
				cm.gainItem(1012171, -1);
				cm.gainItem(1012172, -1);
				cm.gainItem(1012173, -1);

				
				cm.gainItem(1012174, 1);
            cm.sendOk("�����ɹ���");
			cm.����(3,"���ϳ����ġ�["+cm.getName()+"]�ϳɿֲ����޵��˿ڳɹ���");
            cm.dispose();
			}
			
			} else if (selection == 13) {
			if (cm.itemQuantity(1132211) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1132211#��������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(1132212) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1132212#��������Ʒ����#k");
				cm.dispose();
				} else if (cm.itemQuantity(1132213) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1132213#��������Ʒ����#k");
				cm.dispose();
				} else if (cm.itemQuantity(1132214) < 1 ) { 
				cm.sendOk("#bװ���ϳ���Ҫ#v1132214#��������Ʒ����#k");
				cm.dispose();

			
			}else{
				
				cm.gainItem(1132211, -1);
				cm.gainItem(1132212, -1);
				cm.gainItem(1132213, -1);
				cm.gainItem(1132214, -1);

				
				cm.gainItem(1132215, 1);
            cm.sendOk("�����ɹ���");
			cm.����(3,"���ϳ����ġ�["+cm.getName()+"]�ϳ�ð�յ�ǿ����־��ɫ�����ɹ���");
            cm.dispose();
			}
			
		}
    }
}


