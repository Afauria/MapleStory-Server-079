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
	    if (cm.getMapId() == 20000 || cm.getMapId() == 10000) {
            cm.sendOk(" �� �� ð �� �� �� �� �� �� ʹ �� �� �� �� ��");
            cm.dispose();
        }
		if (cm.getMapId() == 209000001 ) {
            cm.sendOk("- ˽�˷����޷�ʹ��\r\n\r\n- ������ʹ��#r@����002����#k�򿪷��书�ܽ��档");
            cm.dispose();
        }
		if (cm.getMapId() == 209000002 ) {
            cm.sendOk("- ˽�˷����޷�ʹ��\r\n\r\n- ������ʹ��#r@����003����#k�򿪷��书�ܽ��档");
            cm.dispose();
        }
		if (cm.getMapId() == 209000003 ) {
            cm.sendOk("- ˽�˷����޷�ʹ��\r\n\r\n- ������ʹ��#r@����004����#k�򿪷��书�ܽ��档");
            cm.dispose();
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
          var selStr = "#e"+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+"\r\n#r"+����+"  �� �� ð �� �� �� �� ʵ �� �� ֤ ϵ ͳ -#k "+����+"\r\n#b"+����+"  �� �� ð �� �� �� �� ʵ �� �� ֤ ϵ ͳ -#k "+����+"\r\n#d"+����+"  �� �� ð �� �� �� �� ʵ �� �� ֤ ϵ ͳ -#k "+����+"\r\n"+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+"\r\n\r\n";
 
          selStr += "     #L1#"+ȷ��+"#l        #L2#"+ȡ��+"#l\r\n\r\n";
		  

		cm.sendSimple(selStr);
        } else if (status == 1) {
         	if (selection == 1) { 
			if (cm.getName() == "�Ҳ����߱�" || cm.getName() == "�����ĸ�" 
 			   || cm.getName() == "��ؼ����"|| cm.getName() == "����������"
               || cm.getName() == "��÷"	 || cm.getName() == "Financeؼ��"			
               || cm.getName() == "����" || cm.getName() == "L�����"			   ){
				 			   
				
				
				
				
				
				
				
			    cm.openNpc(9900004,0);
				
			} else {
				cm.sendOk("��Ǹ����֤ϵͳ��δ��ѯ�����ID��\r\n\r\n����#r�߱�#k���еǼǣ��ſ���ʹ�á�");
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
