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
                
   cm.sendOk("��лʹ��.");
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
	for(i = 0; i < 10; i++){
		text += "";
	}				
	text += "#d�ϳ�-- #r��5000HPѪ�¡���Ҫ������Ʒ��\r\n#v1113035##d3000HPѪ�� 1��\r\n#v4000072##d#z4000072# 150�� \r\n#v4000071##d#z4000071# 150��\r\n#v4000070##d#z4000070# 150�� ���5000W\r\n\r\n~\r\n"
	text += "\r\n#L1##d���ռ���������Ʒ��ȷ������5000HPѪ��";//����
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.canHold(1012059,1)){
			cm.sendOk("��������ı��������ٿճ�2��λ�ã�");
            cm.dispose();
        } else if(cm.haveItem(4000070,150) && cm.haveItem(4000072,150) && cm.haveItem(4000071,150) && cm.haveItem(1113035,1) && cm.getMeso() >= 50000000){
			cm.gainItem(4000070, -150);
			cm.gainItem(4000071, -150);
			cm.gainItem(4000072, -150);
			cm.gainMeso(-20000000);
			cm.gainItem(1113035, -1);
cm.gainItem(1113036,20,20,20,20,5000,5000,0,0,0,0,0,0,0,0);
            cm.sendOk("�����ɹ���");
            cm.dispose();
cm.����(3, "��ң�[" + cm.getPlayer().getName() + "]�ɹ�����5000HPѪ�£���ϲ����");
			}else{
            cm.sendOk("�޷���������������ϲ���\r\n");
            cm.dispose();
			}
		}
    }
}




