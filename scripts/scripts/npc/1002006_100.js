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
	text += "#d�ϳ�-- #r��3000HPѪ�¡���Ҫ������Ʒ��\r\n#v4000016##d#z4000016# 100��\r\n#v4000001##d#z4000001# 100��\r\n#v4000015##d#z4000015# 100�� ���2000W\r\n\r\n~\r\n"
	text += "\r\n#L1##d���ռ���������Ʒ��ȷ������3000HPѪ��";//����
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.canHold(1012058,1)){
			cm.sendOk("��������ı��������ٿճ�2��λ�ã�");
            cm.dispose();
        } else if(cm.haveItem(4000016,100) && cm.haveItem(4000001,100) && cm.haveItem(4000015,100) && cm.getMeso() >= 20000000){
			cm.gainItem(4000016, -100);
			cm.gainItem(4000001, -100);
			cm.gainItem(4000015, -100);
			cm.gainMeso(-20000000);
cm.gainItem(1113035,10,10,10,10,3000,3000,0,0,0,0,0,0,0,0);
            cm.sendOk("�����ɹ���");
            cm.dispose();
cm.����(3, "��ң�[" + cm.getPlayer().getName() + "]�ɹ�����3000HPѪ�£���ϲ����");
			}else{
             cm.sendOk("�޷���������������ϲ���");
            cm.dispose();
			}
		}
    }
}




