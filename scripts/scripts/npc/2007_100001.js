/**
 * @��������������������
 * @ÿ��ǩ������ȡ��Ʒ npc
 * @npcName��ð�յ���ӪԱ
 * @npcID��   9900004
 **/
importPackage(net.sf.cherry.client);
var status = 0;
var ��ˮ�� = 4021008;
var ȷ�� = "#fUI/Login.img/BtOk/normal/0#";
var ȡ�� = "#fUI/Login.img/BtCancel/normal/0#";
var ���� = "#fUI/GuildMark.img/BackGround/00001007/16#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var �Ҹ� = "#k��ܰ��ʾ���κηǷ��������ҷ�Ŵ���.��ɱ��������.";
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
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
          var selStr = "\r\n�ڵڶ�����̨�ſ�����ȡ������\r\n\r\n\r\n";
 
          selStr += "     #L1#"+ȷ��+"#l       ";
		  

		cm.sendSimple(selStr);
        } else if (status == 1) {
         	if (selection == 1) { 
			if (cm.getMapId() == 780000001 && cm.getBossLog("gult2") == 0){
				 			   
				
				
				
				
				
				
				cm.setBossLog("gult2");
			    cm.gainMeso(500000);
				cm.dispose();
				
			} else {
				cm.sendOk("�㲻�ڵڶ�����̨Ŷ�������ظ���ȡ�ġ�");
				cm.dispose();
				
			}
			}
			if (selection == 2) { 
			if (cm.getName() == "��" 
 			   			   ){
				
				
				
				
				
				
				
				
			    cm.openNpc(9900004,0);
				
			} else {
				cm.sendOk("����#r�߱�#k���еǼǣ��ſ���ʹ�á�");

				cm.dispose();
				
			}
			
			
			
			
			
			
			
			
			
			
			
			
			

	    	}
			if (selection == 100) { //�һ����
			if(cm.getBossLog('hydlj55')<1 ){
				
			if ( cm.getBossLog('zymxd') >=20 && cm.getBossLog('hydlj5') == 2 ) {
				//cm.gainItem(3994416, -100);
				cm.setBossLog('hydlj55');
				cm.setBossLog('hydlj5');
				cm.gainNX(2000);
				cm.sendOk("��ϲ����ȡ20���Ծ�Ƚ���#r�ㄻ x 2000");
				cm.worldMessage(6,"[��Ծ�Ƚ���]����ϲ����� "+cm.getName()+" ��ȡ 20 ���Ծ�Ƚ��� ��");
				cm.dispose();
			} else {
				cm.sendOk("��Ļ�Ծ�Ȳ������������Ѿ���ȡ����");
				cm.dispose();
				return;
			}
			}
			else{
				cm.sendOk("�����Ѿ���ȡ�������еĻ�Ծ�Ƚ�����");
				cm.dispose();
			}
	    	}
        }
    }
}
