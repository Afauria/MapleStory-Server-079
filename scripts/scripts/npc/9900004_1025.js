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
			text += "#L1##b#v2043800##z2043800#      #r5��ֵ��/1�� #l\r\n"
			text += "#L2##b#v2043700##z2043700#      #r5��ֵ��/1�� #l\r\n"
			
			if(cm.haveItem(3700148,1) && cm.haveItem(3700149,1) && cm.haveItem(3700150,1)){
				cm.sendOk("���Ѿ�������һ����ƻ�Ա,��������������������~!");
			} else {
				cm.sendSimple(text);
		 
			}
        } else if (selection == 1) {
			if(cm.getmoneyb() >= 5){
			 cm.setmoneyb(-5);
			 cm.gainItem(2043800,1);	
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ�����M����ħ��������һ��~!", 5121005);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
				}else if  (selection == 2) {
				if(cm.getmoneyb() >= 5){
					cm.setmoneyb(-5);
			 cm.gainItem(2043700,1);

cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ�����M����ħ��������һ��~!", 5121005);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
}else if  (selection == 3) {
				if(cm.getmoneyb() >= 5){
					cm.setmoneyb(-5);
			 cm.gainItem(2044400,1);			 
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ�����Mì������һ��~!", 5121007);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
}else if  (selection == 4) {
				if(cm.getmoneyb() >= 5){
					cm.setmoneyb(-5);
			 cm.gainItem(2044300,1);			
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ�����Mǹ������һ��~!", 5121007);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
}else if  (selection == 5) {
				if(cm.getmoneyb() >= 5){
					cm.setmoneyb(-5);
			 cm.gainItem(2044200,1);			
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ�����M˫�ֶ���������һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
			
}else if  (selection == 6) {
				if(cm.getmoneyb() >= 5){
					cm.setmoneyb(-5);
			 cm.gainItem(2044100,1);			
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ�����M˫�ָ�������һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}		

}else if  (selection == 8) {
				if(cm.getmoneyb() >= 5){
					cm.setmoneyb(-5);
			 cm.gainItem(2043200,1);			 
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ�����M���ֶ���������һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}		
			
}else if  (selection == 9) {
				if(cm.getmoneyb() >= 5){
					cm.setmoneyb(-5);
			 cm.gainItem(2043100,1);			 
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ�����M���ָ�������һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}		

}else if  (selection == 10) {
				if(cm.getmoneyb() >= 5){
					cm.setmoneyb(-5);
			 cm.gainItem(2043000,1);			 
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ�����M���ֽ�������һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
			
}else if  (selection == 11) {
				if(cm.getmoneyb() >= 5){
					cm.setmoneyb(-5);
			 cm.gainItem(2044500,1);			 
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ�����M��������һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}		
			
}else if  (selection == 12) {
				if(cm.getmoneyb() >= 5){
					cm.setmoneyb(-5);
			 cm.gainItem(2044600,1);			 
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ�����M�󹥻���һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}

}else if  (selection == 13) {
				if(cm.getmoneyb() >= 5){
					cm.setmoneyb(-5);
			 cm.gainItem(2044800,1);			 
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ�����Mȭ�׹�����һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}	

}else if  (selection == 14) {
				if(cm.getmoneyb() >= 5){
					cm.setmoneyb(-5);
			 cm.gainItem(2044900,1);			 
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ�����M��ǹ������һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
			
			
}else if  (selection == 7) {
				if(cm.getmoneyb() >= 5){
					cm.setmoneyb(-5);
			 cm.gainItem(2044000,1);			 
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ�����M˫�ֽ�������һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
				}				
			}
		}	
