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

	    var textz = "";

		textz += "                            #b#L0#�ͷź����ٻ���#l\r\n";

		textz +=     "     ǿ������صĺڰ�ħ����#fEffect/Summon.img/0/8#";

		cm.sendSimple (textz);  

			
	}else if (status == 1) {

	if (selection == 0){
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId ()) {
                    cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                    cm.dispose();
					
		}else if(party.getMembers().size() < 0) {
	            cm.sendOk("��Ҫ 6 �����ϵ���Ӳſ����ͷ�ǿ���ħ����!");
                    cm.dispose();
					
		}else if (cm.haveItem(4000463,10)&&cm.getLevel()>=1 ) {	
                        cm.gainItem(4000463,-10);
                        cm.spawnMonster(8810026,1122,1875);
                       // cm.spawnMonster(8150000,2806,1935,10);
                        cm.dispose();
						cm.worldMessage(6,"���Ѱ������Ѱ���̫�����ˣ�"+cm.getName()+"����ʿ�����ٻ����˰���������");
						cm.worldMessage(6,"���Ѱ������Ѱ���̫�����ˣ�"+cm.getName()+"����ʿ�����ٻ����˰���������");
						cm.worldMessage(6,"���Ѱ������Ѱ���̫�����ˣ�"+cm.getName()+"����ʿ�����ٻ����˰���������");
                        }else{
                        cm.sendOk("�ٻ�������Ҫ�ض��Ĳ���");
			cm.dispose();	
}

	}else if (selection == 1){
		cm.warp(209000000);			
		cm.dispose();

}										
}
}
}
