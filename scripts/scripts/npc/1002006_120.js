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
	text += "#d�ϳ�-- #r��8000HPѪ�¡���Ҫ������Ʒ��\r\n#v1113036##d5000HPѪ�� 1��\r\n#v4000151##d#z4000151# 50��\r\n#v4000152##d#z4000152# 50��\r\n#v4000406##d#z4000406# 100��\r\n#v4000402##d#z4000402# 100��\r\n#v4000407##d#z4000407# 100�� ���5000W\r\n\r\n~\r\n"
	text += "\r\n#L1##d���ռ���������Ʒ��ȷ������8000HPѪ��";//����
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.canHold(1012060,1)){
			cm.sendOk("��������ı��������ٿճ�2��λ�ã�");
            cm.dispose();
        } else if(cm.haveItem(4000151,50) && cm.haveItem(4000152,50) && cm.haveItem(1113036,1) && cm.haveItem(4000406,100) && cm.haveItem(4000402,100) && cm.haveItem(4000407,100) && cm.getMeso() >= 50000000){
			cm.gainItem(4000151, -50);
			cm.gainItem(4000152, -50);
			cm.gainItem(4000406, -100);
			cm.gainItem(4000402, -100);
			cm.gainItem(4000407, -100);
			cm.gainItem(1113036, -1);
			cm.gainMeso(-50000000);
cm.gainItem(1113034,30,30,30,30,8000,8000,5,5,0,0,0,0,0,0);
            cm.sendOk("�����ɹ���");
            cm.dispose();
cm.����(3, "��ң�[" + cm.getPlayer().getName() + "]�ɹ�����8000HPѪ�£���ϲ����");
			}else{
            cm.sendOk("�޷���������������ϲ���\r\n");
            cm.dispose();
			}
		}
    }
}




