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
			//text += "#dNo.1 ��ͨ���                    #v3700150##t3700150#\r\n�۸�:50��ֵ��/�� 100��ֵ��/��\r\n��Ȩ:   ÿ����ȡ\r\n1.���150W.\r\n2.ɨ����3��:\r\n3.ף��1��\r\n4.���2000\r\n#L1#�����¿�(100��ֵ��)#l     #L2#�����ܿ�(50��ֵ��)#l\r\n\r\n\r\n"
			text += ""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""+��ɫ�ǵ�+""
			text += "#L1##b#v1002186#��ά˫��+10      #r30��ֵ��/1�� #l\r\n"
			text += "#L2##b#v1012057#��ά˫��+10     #r30��ֵ��/1�� #l\r\n"
			text += "#L3##b#v1022048#��ά˫��+10    #r30��ֵ��/1�� #l\r\n"
			text += "#L4##b#v1082102#��ά˫��+10     #r30��ֵ��/1�� #l\r\n"
			text += "#L5##b#v1072153#��ά˫��+10     #r30��ֵ��/1�� #l\r\n"
			text += "#L6##b#v1032024#��ά˫��+10     #r30��ֵ��/1�� #l\r\n"
			text += "#L7##b#v1102039#��ά˫��+10     #r30��ֵ��/1�� #l\r\n"
			text += "#L8##b#v1102039#��10000Ѫ��     #r100��ֵ��/1�� #l\r\n"
			text += "#L9##b#v1102039#��20000Ѫ��     #r200��ֵ��/1�� #l\r\n"
			//text += "#L10##b#v1102039#��30000Ѫ��    #r300��ֵ��/1�� #l\r\n"
			if(cm.haveItem(3700155,1) && cm.haveItem(3700156,1) && cm.haveItem(3700157,1)){
				cm.sendOk("���Ѿ�������һ����ƻ�Ա,��������������������~!");
			} else {
				cm.sendSimple(text);
		 
			}
        } else if (selection == 1) {
			if(cm.getmoneyb() >= 30){
			 cm.setmoneyb(-30);
			 cm.gainjf(+30);
			 cm.gainItem(1002186,10,10,10,10,0,0,10,15,0,0,0,0,0,0);	
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ������ά˫��+10 ͸��ñһ��~!", 5121005);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
				}else if  (selection == 2) {
				if(cm.getmoneyb() >= 30){
					cm.setmoneyb(-30);
					cm.gainjf(+30);
			 cm.gainItem(1012057,10,10,10,10,0,0,10,15,0,0,0,0,0,0)
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ������ά˫��+10 ͸�����һ��~!", 5121005);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
}else if  (selection == 3) {
				if(cm.getmoneyb() >= 30){
					cm.setmoneyb(-30);
					cm.gainjf(+30);
			 cm.gainItem(1022048,10,10,10,10,0,0,10,15,0,0,0,0,0,0)		 
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ������ά˫��+10 ͸������һ��~!", 5121007);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
}else if  (selection == 4) {
				if(cm.getmoneyb() >= 30){
					cm.setmoneyb(-30);
					cm.gainjf(+30);
			 cm.gainItem(1082102,10,10,10,10,0,0,10,15,0,0,0,0,0,0)		
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ������ά˫��+10 ͸������һ��~!", 5121007);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
}else if  (selection == 5) {
				if(cm.getmoneyb() >= 30){
					cm.setmoneyb(-30);
					cm.gainjf(+30);
			 cm.gainItem(1072153,10,10,10,10,0,0,10,15,0,0,0,0,0,0)	
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ������ά˫��+10 ͸��Ьһ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
			
}else if  (selection == 7) {
				if(cm.getmoneyb() >= 30){
					cm.setmoneyb(-30);
					cm.gainjf(+30);
			 cm.gainItem(1102039,10,10,10,10,0,0,10,15,0,0,0,0,0,0)		
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ������ά˫��+10 ͸������һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}			
			
			}else if  (selection == 8) {
				if(cm.getmoneyb() >= 100){
					cm.setmoneyb(-100);
					cm.gainjf(+100);
			 cm.gainItem(1102039,20,20,20,35,10000,10,35,50,0,0,0,0,0,0)		
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ����Ѫ��+10000 ͸������һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}		
			
			
			}else if  (selection == 9) {
				if(cm.getmoneyb() >= 200){
					cm.setmoneyb(-200);
					cm.gainjf(+200);
			 cm.gainItem(1102039,20,20,20,35,20000,20,35,50,0,0,0,0,0,0)		
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ����Ѫ��+20000 ͸������һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}		
			
			}else if  (selection == 10) {
				if(cm.getmoneyb() >= 300){
					cm.setmoneyb(-300);
					cm.gainjf(+300);
			 cm.gainItem(1102039,20,20,20,35,30000,20,35,50,0,0,0,0,0,0)		
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ����Ѫ��+30000 ͸������һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}		
			
}else if  (selection == 6) {
				if(cm.getmoneyb() >= 50){
					cm.setmoneyb(-50);
					cm.gainjf(50);
			 cm.gainItem(1032024,20,20,20,35,0,0,20,35,0,0,0,0,0,0)		 
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ������ά˫��+10 ͸������һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
				}				
			}
		}	
