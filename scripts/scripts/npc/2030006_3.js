
var minPartySize = 3;//3
var maxPartySize = 6;
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
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
       // if (status === 0) {
            //cm.sendOk("���ǹ������̨����Ҫ�������������ӽ�ȥŶ���������յ�ʤ��ֻ��һ����������Ҫ�����������ٶ��õ����߲�����ȡ����~\r\n\r\n��ȡ�����ķ���#r @gwlt @������̨~");
      //  }
         if (status === 0) {
             if (cm.getMap(221024500).getCharactersSize() > 0) { //�жϵ�ͼ�Ƿ�����
                    cm.sendOk("����̨�Ѿ�������Ŷ~");
                    cm.dispose();
                }

            if (cm.getParty()==null) {//�ж����
                cm.sendOk("�����~����֤���ж���������~");
                 cm.dispose();
            }else{
            //     var party = cm.getParty().getMembers();
            //    if (party.size() < minPartySize || party.size() > maxPartySize || inMap < minPartySize) {
            //                   cm.sendOk("��ȷ��������Ա��\r\n\r\n#b1�����Ա����Ҫ" + minPartySize + "�����ϣ�" + maxPartySize + "������");
            //                   cm.dispose();
            //                 }else{
            var players = cm.getMap().getCharactersThreadsafe();
             for (var i = 0; i < players.size(); i++) {
             var cPlayer = players.get(i);
             if (!cPlayer.haveItem(2000005,0)){//�жϵ��߲�����
                 
                 cm.sendOk("���ϳ���ҩˮ~");
                //  cm.dispose();
              }else{
                var map = cm.getMap(221024500);
              //   cPlayer.removeItem(4001008, 1);
                cPlayer.changeMap(map, map.getPortal(1));
                // cm.dispose();
                 }
          
                    }
                      cm.dispose();
            
         }
                        }
            
        
        }
    }
// }
                        
                  
