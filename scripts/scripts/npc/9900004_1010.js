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
			//text += "\t\t\t#e#rһԪ���ñ�=1����\r\n\r\n"
			//text += ""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+"\r\n"
			//text += "#dNo.1 ��ͨ���                    #v3700150##t3700150#\r\n�۸�:30����/�� 100����/��\r\n��Ȩ:   ÿ����ȡ\r\n1.���150W.\r\n2.ɨ����3��:\r\n3.ף��1��\r\n4.���2000\r\n#L1#�����¿�(100����)#l     #L2#�����ܿ�(30����)#l\r\n\r\n\r\n"
			text += ""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""
			//text += "#L1##b#v2070012##z2070012#      #r10����/1�� #l\r\n"
			text += "#L2##b#v2070023##z2070023#      #r#v2002033#3�� #l\r\n"
			//text += "#L3##b#v2070011##z2070011#      #r20����/1�� #l\r\n"
			text += "#L4##b#v2070024##z2070024#      #r#v2002033#3�� #l\r\n"
			text += "#L5##b#v2070016##z2070016#      #r#v2002033#3�� #l\r\n"
			//text += "#L6##b#v2070026##z2070026#      #r50����/1�� #l\r\n"
			text += "#L7##b#v2070019##z2070019#      #r#v2002033#5�� #l\r\n"
			if(cm.haveItem(3700155,1) && cm.haveItem(3700156,1) && cm.haveItem(3700157,1)){
				cm.sendOk("���Ѿ�������һ����ƻ�Ա,��������������������~!");
			} else {
				cm.sendSimple(text);
		 
			}
        } else if (selection == 1) {
			if(cm.getmoneyb() >= 10){
			 cm.setmoneyb(-10);
			 cm.gainjf(+10);
			 cm.gainItem(2070012,1);	
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ�����ϡ�з��� ֽ�ɻ�һ��~!", 5121005);
				cm.dispose();
			} else {
				cm.sendOk("���ĵ��ⲻ��~!��һ���������");
            cm.dispose();
			}
				}else if  (selection == 2) {
				if(cm.haveItem(2002033,3)) {
				cm.gainItem(2002033, -3);
			 cm.gainItem(2070023,1);

cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ�����ϡ�з��� �������һ��~!", 5121005);
				cm.dispose();
			} else {
				cm.sendOk("���ĵ��ⲻ��~!��һ���������");
            cm.dispose();
			}
}else if  (selection == 3) {
				if(cm.getmoneyb() >= 20){
					cm.setmoneyb(-20);
					cm.gainjf(+20);
			 cm.gainItem(2070011,1);			 
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ�����ϡ�з��� ��Ҷ��һ��~!", 5121007);
				cm.dispose();
			} else {
				cm.sendOk("���ĵ��ⲻ��~!��һ���������");
            cm.dispose();
			}
}else if  (selection == 4) {
				if(cm.haveItem(2002033,3)) {
				cm.gainItem(2002033, -3);
			 cm.gainItem(2070024,1);			
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ�����ϡ�з��� ����һ��~!", 5121007);
				cm.dispose();
			} else {
				cm.sendOk("���ĵ��ⲻ��~!��һ���������");
            cm.dispose();
			}
}else if  (selection == 5) {
				if(cm.haveItem(2002033,3)) {
				cm.gainItem(2002033, -3);
					
			 cm.gainItem(2070016,1);			
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ�����ϡ�з��� ˮ������һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĵ��ⲻ��~!��һ���������");
            cm.dispose();
			}
			
}else if  (selection == 7) {
				if(cm.haveItem(2002033,5)) {
				cm.gainItem(2002033, -5);
			 cm.gainItem(2070019,1);			
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ�����ϡ�з��� ��ɫ�������һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĵ��ⲻ��~!��һ���������");
            cm.dispose();
			}			
}else if  (selection == 6) {
				if(cm.getmoneyb() >= 50){
					cm.setmoneyb(-50);
					cm.gainjf(+50);
			 cm.gainItem(2070026,1);			 
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ�����ϡ�з��� �׽����һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĵ��ⲻ��~!��һ���������");
            cm.dispose();
			}
				}				
			}
		}	
