
function start() {
    status = -1;
    action(1, 0, 0);

}
 
function action(mode, type, selection) {   
  if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
			    if (cm.getMapId() > 780000007 || cm.getMapId() < 779999999) {//cm.getMapId() > 209000001 || cm.getMapId() <= 209000000
            cm.sendOk(" ������ֻ�ڹ�����̨���� ��");
            cm.dispose();
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status === 0) {
            cm.sendOk("���ǹ������̨���콱�������Ѿ�����ָ����ͨ��֤�������ǵ���ֻ��һ���˿�����ȡ����Ŷ\r\n\r\n����Ҫ#i4001008# x 100");
        }
         if (status === 1) {
           //  if (cm.getMap(780000000).getCharactersSize() > 0) { //�жϵ�ͼ�Ƿ�����
                  //  cm.sendOk("��ͼ�Ѿ����˿�~");
                   // cm.dispose();
              //  }
            if (cm.getParty()==null) {//�ж����
                cm.sendOk("�����~");
                 cm.dispose();
            } else{
            var players = cm.getMap().getCharactersThreadsafe();
             for (var i = 0; i < players.size(); i++) {
             var cPlayer = players.get(i);
             if (!cPlayer.haveItem(4001008,100)){//�жϵ��߲�����
                 cm.sendOk("��û��Ҫ���ҵĵ���");
                 cm.dispose();
              }else{
                 cm.dispose();
                var map = cm.getMap(910000000);
                cm.gainItem(4001008, -10000);
				cm.worldMessage(6,"��������̨������� "+cm.getName()+" ���ȴ���ָ����ͨ��֤���ɹ���ȡ������");
                cPlayer.changeMap(map, map.getPortal(1));
                
                 }
                    }
            
         }
        }
    }
}
                        
                  
