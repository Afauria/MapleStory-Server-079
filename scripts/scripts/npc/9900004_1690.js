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
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += " \t\t#e#d��ӭ����#r�㻨Ǯϵͳ����#k#n\r\n"

            text += "\t\t\t#e#d��ǰ����ʱ�䣺" + cm.getGamePoints() + "����#k#n\r\n\r\n"
                 
							   
         //   text += " #b#L3#�һ�ǿ��#l #L1#�һ�ף��#l #L15#�һ���ɫ��Ҷ#l\r\n"            
			//text += "#r#L18#�һ�BOSS�ٻ�����#l\r\n"
			text += " #b#L30##v2022002#X5�һ�5000W���#l \r\n" 
			//text += " #b#L31#����Ҷһ���1����Ϸ��#v4310149#�һ�1E���#l \r\n"
		//	text += "#r#L22#�һ���Ʊ#l\r\n"
			
		//	text += " #L3#ÿ������#l\r\n\r\n"
			//text += " #L4#��������#l\r\n\r\n"
			//text += " #L6#ÿ�մ���#l\r\n\r\n"

        //    text += " #L5#��ȡǩ������#l \r\n\r\n"
            cm.sendSimple(text);
			} else if (selection == 30) {
			 if(cm.haveItem(2022002,5)){
                cm.gainItem(2022002,-5);				
				 cm.gainMeso(+50000000);				 
				cm.sendOk("��ϲ�㣬�һ��ɹ�! .");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻��ѩ�̣��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
			
			 } else if (selection == 31) {
			  if(cm.haveItem(4310149,1)){
                cm.gainMeso(+100000000);
				cm.gainItem(4310149,-1);
				cm.sendOk("��ϲ�㣬������ 1E���! .");
			      
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻����Ϸ�ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
			
        } else if (selection == 1) {
            cm.openNpc(9900004, 7002);
			
		} else if (selection == 10) {
            cm.openNpc(9900004, 1010);	
			
		} else if (selection == 11) {
            cm.openNpc(9900004, 1011);	

		} else if (selection == 12) {
            cm.openNpc(9900004, 1012);

		} else if (selection == 13) {
            cm.openNpc(9900004, 1013);	
			
		} else if (selection == 14) {
            cm.openNpc(9900004, 1014);	

		} else if (selection == 15) {
            cm.openNpc(9900004, 1015);	

		} else if (selection == 16) {
            cm.openNpc(9900004, 1016);

		} else if (selection == 17) {
            cm.openNpc(9900004, 1017);

		} else if (selection == 18) {
            cm.openNpc(9900004, 1018);

		} else if (selection == 19) {
            cm.openNpc(9900004, 1019);	

		} else if (selection == 20) {
            cm.openNpc(9900004, 1020);	

		} else if (selection == 22) {
            cm.openNpc(9900004, 1022);		

        } else if (selection == 2) {
            if (cm.getBossLog("vipqiandao") == 0 && cm.haveItem(3700148, 1)) {//��ȡ���ǩ��״̬
                cm.setBossLog('vipqiandao');//����ǩ������
                cm.getPlayer().gainqiandao(1);
                cm.sendOk("��ϲǩ���ɹ���");
				cm.gainDY(300)
                cm.����(1, "[ÿ��ǩ��]��" + cm.getPlayer().getName() + "�������ѳɹ�ǩ��������+300.��ǰ��ǩ������Ϊ��" + cm.getPlayer().getqiandao() + "��.");
                cm.dispose();
            } else {
                cm.sendOk("��������ǩ�����ˣ�");
                cm.dispose();
            }
            // cm.openNpc(9900004, 1112);

        } else if (selection == 3) {
            cm.openNpc(9900004, 7002);

        } else if (selection == 4) {
            cm.openNpc(9900004, 1114);

        } else if (selection == 5) {
            cm.openNpc(9900004, 1112);
			
        } else if (selection == 6) {
            cm.openNpc(9900004, 1113);
        }
    }
}
