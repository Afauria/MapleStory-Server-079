 importPackage(net.sf.cherry.client);
var status = 0;

var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";


	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function action(mode, type, selection) {
		if (mode == -1) {
		cm.dispose();
		} else {
		if (status >= 0 && mode == 0) {
		cm.dispose();
		return;
		}
		 if (cm.getPlayer().getClient().getChannel() != 1) {
			cm.sendOk("ֻ�� #r1#k �߿����������ߵ���");
			cm.dispose();
			 }
		if (mode == 1)
		status++;
		else
		status--;


	if (status == 0) {

	    var textz = "\r\n";

		textz += "#b#L0#ȷ���ٻ�#l\r\n";


		cm.sendSimple (textz);  

			
	}else if (status == 1) {

	if (selection == 0){
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId ()) {
                    cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                    cm.dispose();
		}else  if (cm.getMapId() == 209000002 || cm.getMapId() == 209000004 || cm.getMapId() == 209000005 ||  cm.getMapId() == 209000006 || cm.getMapId() == 209000007 || cm.getMapId() == 209000008 || cm.getMapId() == 209000009 ) {
            cm.sendOk(" ���䲻�ԣ����ڶ�Ӧ�ķ���ʹ�á� ");
            cm.dispose();
        			
		}else if(party.getMembers().size() < 0) {
	            cm.sendOk("��Ҫ 6 �����ϵ���Ӳſ����ͷ�ǿ���ħ����!");
                    cm.dispose();
					
		}else if (cm.haveItem(4000463,10)&&cm.getLevel()>= 10 ) {	
                        cm.gainItem(4000463,-10);
                        cm.spawnMonster(9400014,-286,154);
						
						
                      
                        cm.dispose();
						//cm.worldMessage(6,"���Ѱ������Ѱ���̫�����ˣ�"+cm.getName()+"����ʿ�����ٻ����˰���������");
						
						
                        }else{
                        cm.sendOk("������");
			cm.dispose();	
}

	}else if (selection == 1){
		cm.warp(209000000);			
		cm.dispose();

}										
}
}
}
