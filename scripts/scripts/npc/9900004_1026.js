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
			text += "#L1##b#v2041012#M��ά�����      #r3��ֵ��/1�� #l\r\n"
			text += "#L2##b#v2040024#M��άͷ����      #r3��ֵ��/1�� #l\r\n"
			text += "#L3##b#v2040412#M��ά���¾�      #r3��ֵ��/1�� #l\r\n"
			text += "#L4##b#v2040612#M��ά��ȹ��      #r3��ֵ��/1�� #l\r\n"
			text += "#L5##b#v2040500#M��άȫ�����׾�    #r3��ֵ��/1�� #l\r\n"
			text += "#L6##b#v2041300#M��ά������      #r3��ֵ��/1�� #l\r\n"
			text += "#L7##b#v2040700#M��άЬ�Ӿ�      #r3��ֵ��/1�� #l\r\n"
			
			if(cm.haveItem(3700148,1) && cm.haveItem(3700149,1) && cm.haveItem(3700150,1)){
				cm.sendOk("���Ѿ�������һ����ƻ�Ա,��������������������~!");
			} else {
				cm.sendSimple(text);
		 
			}
        } else if (selection == 1) {
			if(cm.getmoneyb() >= 3){
			 cm.setmoneyb(-3);
			 cm.gainItem(2041012,1);	
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ����M��ά�������һ��~!", 5121005);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
				}else if  (selection == 2) {
				if(cm.getmoneyb() >= 3){
					cm.setmoneyb(-3);
			 cm.gainItem(2040024,1)
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ����M��άͷ����һ��~!", 5121005);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
}else if  (selection == 3) {
				if(cm.getmoneyb() >= 3){
					cm.setmoneyb(-3);
			 cm.gainItem(2040412,1)		 
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ����M��ά���¾�һ��~!", 5121007);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
}else if  (selection == 4) {
				if(cm.getmoneyb() >= 3){
					cm.setmoneyb(-3);
			 cm.gainItem(2040612,1)		
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ����M��ά��ȹ��һ��~!", 5121007);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
}else if  (selection == 5) {
				if(cm.getmoneyb() >= 3){
					cm.setmoneyb(-3);
			 cm.gainItem(2040500,1)	
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ����M��άȫ�����׾�һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
			
}else if  (selection == 7) {
				if(cm.getmoneyb() >= 3){
					cm.setmoneyb(-3);
			 cm.gainItem(2040700,1)		
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ����M��άЬ�Ӿ�һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}			
}else if  (selection == 6) {
				if(cm.getmoneyb() >= 3){
					cm.setmoneyb(-3);
			 cm.gainItem(2041300,1)		 
cm.ȫ��Ư������("��ϲ���["+cm.getName()+"]�ɹ����M��ά������һ��~!", 5121006);
				cm.dispose();
			} else {
				cm.sendOk("���ĳ�ֵ�Ҳ���~!���ֵ��");
            cm.dispose();
			}
				}				
			}
		}	
