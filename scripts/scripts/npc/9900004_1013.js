var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
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
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "\t\t\t\t#e#rVIP#e#bϵͳ���Ļ�ӭ��\r\n\r\n"
			text += "\t\t\t"+"��Ŀǰӵ��:"+cm.getmoneyb()+"��ֵ��\r\n\r\n"
			text += "\t\t\t#e#rһԪ���ñ�=1��ֵ��\r\n\r\n"
			//text += ""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+"\r\n"
			//text += "#dNo.1 ��ͨ���                    #v3700150##t3700150#\r\n�۸�:30��ֵ��/�� 100��ֵ��/��\r\n��Ȩ:   ÿ����ȡ\r\n1.���150W.\r\n2.ɨ����3��:\r\n3.ף��1��\r\n4.���2000\r\n#L1#�����¿�(100��ֵ��)#l     #L2#�����ܿ�(30��ֵ��)#l\r\n\r\n\r\n"
			text += ""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""
			text += "#L1##b#v1112140#��ά˫��+20 HP/MP+500  #r40��ֵ��/1��#l\r\n"
			text += "#L2##b#v1112139#��ά˫��+40 HP/MP+666  #r60��ֵ��/1��#l\r\n"
			text += "#L3##b#v1112138#��ά˫��+60 HP/MP+888  #r80��ֵ��/1��#l\r\n"
			
			
			if(cm.haveItem(3700148,1) && cm.haveItem(3700149,1) && cm.haveItem(3700150,1)){
				cm.sendOk("���Ѿ�������һ����ƻ�Ա,��������������������~!");
			} else {
				cm.sendSimple(text);
		 
			}
        } else if (selection == 1) {
			if(cm.getmoneyb() >= 40){
			 cm.setmoneyb(-40);
			 cm.gainItem(1112140,20,20,20,20,500,500,20,20,0,0,0,0,0,0);
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ���ð���VIP��ָһ��~!", 5121005);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
				}else if  (selection == 2) {
				if(cm.getmoneyb() >= 60){
					cm.setmoneyb(-60);
			 cm.gainItem(1112140,40,40,40,40,666,666,40,40,0,0,0,0,0,0);
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ���ûƽ�VIP��ָһ��~!", 5121005);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
}else if  (selection == 3) {
				if(cm.getmoneyb() >= 80){
					cm.setmoneyb(-80);
			 cm.gainItem(1112140,60,60,60,60,888,888,60,60,0,0,0,0,0,0);	 
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ������ʯVIP��ָһ��~!", 5121007);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
}else if  (selection == 4) {
				if(cm.getmoneyb() >= 5){
					cm.setmoneyb(-5);
			 cm.gainItem(5010019,1)		
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ���ð���Ч��һ��~!", 5121007);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
}else if  (selection == 5) {
				if(cm.getmoneyb() >= 5){
					cm.setmoneyb(-5);
			 cm.gainItem(5010027,1)	
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ�����ϻ���ĤЧ��һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
}else if  (selection == 8) {
				if(cm.getmoneyb() >= 5){
					cm.setmoneyb(-5);
			 cm.gainItem(5010016,1)		
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ���þ���Ч��һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
}else if  (selection == 9) {
				if(cm.getmoneyb() >= 5){
					cm.setmoneyb(-5);
			 cm.gainItem(5010055,1)		
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ����̫�մ�Ч��һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
}else if  (selection == 10) {
				if(cm.getmoneyb() >= 5){
					cm.setmoneyb(-5);
			 cm.gainItem(5010024,1)		
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ�������СѼЧ��һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
}else if  (selection == 11) {
				if(cm.getmoneyb() >= 5){
					cm.setmoneyb(-5);
			 cm.gainItem(5010045,1)		
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ��������Ч��һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
}else if  (selection == 12) {
				if(cm.getmoneyb() >= 5){
					cm.setmoneyb(-5);
			 cm.gainItem(5010070,1)		
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ����ɭ�ֳ��Ч��һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
}else if  (selection == 13) {
				if(cm.getmoneyb() >= 10){
					cm.setmoneyb(-10);
			 cm.gainItem(5010043,1)		
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ�����۹�Ч��һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
}else if  (selection == 14) {
				if(cm.getmoneyb() >= 15){
					cm.setmoneyb(-15);
			 cm.gainItem(5010044,1)		
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ���û�Ӱ����Ч��һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}						
			
}else if  (selection == 7) {
				if(cm.getmoneyb() >= 5){
					cm.setmoneyb(-5);
			 cm.gainItem(5010041,1)		
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ��������Ч��һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}			
}else if  (selection == 6) {
				if(cm.getmoneyb() >= 5){
					cm.setmoneyb(-5);
			 cm.gainItem(5010038,1)		 
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ�����ٲ�Ч��һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
				}				
			}
		}	
