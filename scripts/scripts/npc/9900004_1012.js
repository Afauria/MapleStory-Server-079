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
			//text += "\t\t\t"+"��Ŀǰӵ��:"+cm.getmoneyb()+"����\r\n\r\n"
			text += "\t\t\t#e#r������Ч��һ��Ȩ\r\n\r\n"
			//text += ""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+"\r\n"
			//text += "#dNo.1 ��ͨ���                    #v3700150##t3700150#\r\n�۸�:30����/�� 100����/��\r\n��Ȩ:   ÿ����ȡ\r\n1.���150W.\r\n2.ɨ����3��:\r\n3.ף��1��\r\n4.���2000\r\n#L1#�����¿�(100����)#l     #L2#�����ܿ�(30����)#l\r\n\r\n\r\n"
			text += ""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""
			//text += "#L15##b#v5150038#  #r10����/1��#l\r\n"
			text += "#L1##b#v5010066#  #r#v2002033#1��#l   #L2##b#v5010023#  #r#v2002033#1��#l\r\n"
			text += "#L3##b#v5010013#  #r#v2002033#1��#l   #L4##b#v5010019#  #r5#v2002033#1��\r\n"
			text += "#L5##b#v5010027#  #r#v2002033#1��#l   #L6##b#v5010038#  #r5#v2002033#1��#l\r\n"
			text += "#L7##b#v5010041#  #r#v2002033#1��#l   #L8##b#v5010016#  #r5#v2002033#1��#l\r\n"
			text += "#L9##b#v5010055#  #r#v2002033#1��#l   #L10##b#v5010024#  #r#v2002033#1��#l\r\n"
			text += "#L11##b#v5010045#  #r#v2002033#1��#l   #L12##b#v5010070#  #r#v2002033#1��#l\r\n"
			text += "#L13##b#v5010043#  #r#v2002033#1��#l  #L14##b#v5010044#  #r#v2002033#1��#l\r\n"
			
			if(cm.haveItem(3700155,1) && cm.haveItem(3700156,1) && cm.haveItem(3700157,1)){
				cm.sendOk("���Ѿ�������һ����ƻ�Ա,��������������������~!");
			} else {
				cm.sendSimple(text);
		 
			}
        } else if (selection == 1) {
			if(cm.haveItem(2002033,1)) {
				cm.gainItem(2002033, -1);
			 cm.gainItem(5010066,1,168);	
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ����DISCOЧ��һ��~!", 5121005);
				cm.dispose();
			} else {
				cm.sendOk("���ĵ��ⲻ��~!��һ���������");
            cm.dispose();
			}
				}else if  (selection == 2) {
				if(cm.haveItem(2002033,1)) {
				cm.gainItem(2002033, -1);
			 cm.gainItem(5010023,1,168)
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ��������С����Ч��һ��~!", 5121005);
				cm.dispose();
			} else {
				cm.sendOk("���ĵ��ⲻ��~!��һ���������");
            cm.dispose();
			}
			
}else if  (selection == 15) {
				if(cm.haveItem(2002033,1)) {
				cm.gainItem(2002033, -1);
			 cm.gainItem(5150038,1,168)		 
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ���ó�������������һ��~!", 5121007);
				cm.dispose();
			} else {
				cm.sendOk("���ĵ��ⲻ��~!��һ���������");
            cm.dispose();
			}			
}else if  (selection == 3) {
				if(cm.haveItem(2002033,1)) {
				cm.gainItem(2002033, -1);
			 cm.gainItem(5010013,1,168)		 
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ�����̻�Ч��һ��~!", 5121007);
				cm.dispose();
			} else {
				cm.sendOk("���ĵ��ⲻ��~!��һ���������");
            cm.dispose();
			}
}else if  (selection == 4) {
				if(cm.haveItem(2002033,1)) {
				cm.gainItem(2002033, -1);
			 cm.gainItem(5010019,1,168)		
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ���ð���Ч��һ��~!", 5121007);
				cm.dispose();
			} else {
				cm.sendOk("���ĵ��ⲻ��~!��һ���������");
            cm.dispose();
			}
}else if  (selection == 5) {
				if(cm.haveItem(2002033,1)) {
				cm.gainItem(2002033, -1);
			 cm.gainItem(5010027,1,168)	
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ�����ϻ���ĤЧ��һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĵ��ⲻ��~!��һ���������");
            cm.dispose();
			}
}else if  (selection == 8) {
				if(cm.haveItem(2002033,1)) {
				cm.gainItem(2002033, -1);
			 cm.gainItem(5010016,1,168)		
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ���þ���Ч��һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĵ��ⲻ��~!��һ���������");
            cm.dispose();
			}
}else if  (selection == 9) {
				if(cm.haveItem(2002033,1)) {
				cm.gainItem(2002033, -1);
			 cm.gainItem(5010055,1,168)		
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ����̫�մ�Ч��һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĵ��ⲻ��~!��һ���������");
            cm.dispose();
			}
}else if  (selection == 10) {
				if(cm.haveItem(2002033,1)) {
				cm.gainItem(2002033, -1);
			 cm.gainItem(5010024,1,168)		
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ�������СѼЧ��һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĵ��ⲻ��~!��һ���������");
            cm.dispose();
			}
}else if  (selection == 11) {
				if(cm.haveItem(2002033,1)) {
				cm.gainItem(2002033, -1);
			 cm.gainItem(5010045,1,168)		
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ��������Ч��һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĵ��ⲻ��~!��һ���������");
            cm.dispose();
			}
}else if  (selection == 12) {
				if(cm.haveItem(2002033,1)) {
				cm.gainItem(2002033, -1);
			 cm.gainItem(5010070,1,168)		
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ����ɭ�ֳ��Ч��һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĵ��ⲻ��~!��һ���������");
            cm.dispose();
			}
}else if  (selection == 13) {
				if(cm.haveItem(2002033,1)) {
				cm.gainItem(2002033, -1);
			 cm.gainItem(5010043,1,168)		
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ�����۹�Ч��һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĵ��ⲻ��~!��һ���������");
            cm.dispose();
			}
}else if  (selection == 14) {
				if(cm.haveItem(2002033,1)) {
				cm.gainItem(2002033, -1);
			 cm.gainItem(5010044,1,168)		
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ���û�Ӱ����Ч��һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĵ��ⲻ��~!��һ���������");
            cm.dispose();
			}						
			
}else if  (selection == 7) {
				if(cm.haveItem(2002033,1)) {
				cm.gainItem(2002033, -1);
			 cm.gainItem(5010041,1,168)		
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ��������Ч��һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĵ��ⲻ��~!��һ���������");
            cm.dispose();
			}			
}else if  (selection == 6) {
				if(cm.haveItem(2002033,1)) {
				cm.gainItem(2002033, -1);
			 cm.gainItem(5010038,1,168)		 
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ�����ٲ�Ч��һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĵ��ⲻ��~!��һ���������");
            cm.dispose();
			}
				}				
			}
		}	
