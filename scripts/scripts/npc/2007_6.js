/**
 * @��������������������
 * @ÿ��ǩ������ȡ��Ʒ npc
 * @npcName��ð�յ���ӪԱ
 * @npcID��   9900004
 **/
importPackage(net.sf.cherry.client);
var status = 0;
var ��ˮ�� = 4021008;
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var Բ�� = "#fUI/UIWindow/Quest/icon3/6#";
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
      //  }
		//	if (cm.getHour() < 22 || cm.getHour() > 23 ){//hour=ʱ//month=��//
	//cm.sendOk("��ɽ��ˮ�ʱ��Ϊ��#r22 ��00 - 23 ��00");
    // cm.dispose();
	 }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            var a1 = "#L1#" + ������ͷ + " 250 ���Ѫ����\r\n";
		    var a2 = "#L2#" + ������ͷ + "�� �� �� �Ρ����ִ�ѵ������\r\n";
			var a3 = "#L3#" + ������ͷ + "�� �� �� �Ρ�����ۺͽ��׽�����\r\n";
			var a4 = "#L4#" + ������ͷ + "�� �� �� �Ρ�ȥ�Ĳ���������Ȼ��ȥ���ǵļҡ�\r\n";
		    var a5 = "#L5#" + ������ͷ + "�� �� �� �Ρ����к�����ʾ��\r\n";
			var a6 = "#L6#" + ������ͷ + "�� �� �� �Ρ���˵��ʿ�����̵��ƻ������\r\n";
			var a7 = "#L7#" + ������ͷ + "�� �� �� �Ρ�ǰ��սʿ�ĵ��á�\r\n";
		    var a8 = "#L8#" + ������ͷ + "�� �� �� �Ρ�����ҩ������ʲ���\r\n";
			var a9 = "#L9#" + ������ͷ + "�� �� �� �Ρ�ħ�����ֳ���ר�ҡ�\r\n";
			var a10 = "#L10#" + ������ͷ + "�� ʮ �� �Ρ�XXX��\r\n";
		    var a11 = "#L11#" + ������ͷ + "�� ʮһ �� �Ρ�XXX��\r\n";
			var a12= "#L12#" + ������ͷ + "�� ʮ�� �� �Ρ�XXX��\r\n";


            cm.sendSimple("#d�����Ѫ����������ֵ���Ϳ���ͻ�Ƽ��ޡ�\r\n\r\n\r\n"+a1+"");

        } else if (status == 1) {
         	if (selection == 1) { 
			if (cm.getPlayerStat("HP") == 250 && cm.getBossLog("mrkx") < 5){
				cm.setBossLog("mrkx");
				cm.setBossLog("zymxd");
				cm.gainExp(2);
				var xueliang=cm.getPlayer().getMaxHp();
				cm.getPlayer().setMaxHp(xueliang+15);
				cm.sendOk("Ѫ�������Ѿ����գ���С����Ϸ����ˢ�� + 1 5 HP��");
				cm.worldMessage(6,"[ÿ�տ�Ѫ]����ϲ����� "+cm.getName()+" ���������ɹ������Լ���Ѫ������ǿ������ HP + 15 ��");
				cm.dispose();
			} else {
				cm.sendOk("�㻹�޷��������Ѫ��ÿ���������5�Ρ�");
				cm.dispose();
				return;
			}
	    	}
			if (selection == 2) { //10
			if (cm.getBossLog('sss2') ==1 && cm.getMapId() == 104040000 && cm.haveItem(4000000,50)){
				cm.setBossLog("sss2");
				cm.setBossLog("sss3");
				cm.gainItem(4000000, -50);
				cm.gainNX(100);
				cm.sendOk("��ϲ����ɵڶ��׶ν�������������������׶�");
				cm.worldMessage(6,"[��ɽ��ˮ]����ϲ����� "+cm.getName()+" ��ɵڶ��׶Σ������밴��ʼ�����׶� ��");
				cm.dispose();
			} else {
				cm.sendOk("��Ҫ��ɵ�һ�׶�\r\n��Ҫ50��#i4000000#");
				cm.dispose();
				return;
			}
			}
			if (selection == 3) { //10
			if (cm.getBossLog('sss3') ==1 && cm.getMapId() == 104000000 && cm.getBossLog('ssss1')  > 3){
				cm.setBossLog("sss3");
				cm.setBossLog("sss4");
				cm.gainNX(103);
				cm.sendOk("��ϲ����ɵ����׶ν�����������������Ľ׶�");
				cm.worldMessage(6,"[��ɽ��ˮ]����ϲ����� "+cm.getName()+" ��ɵ����׶Σ������밴��ʼ���Ľ׶� ��");
				cm.dispose();
			} else {
				cm.sendOk("�����ˣ�ȥ�ͽ��׽����ɣ��������Ѿ�����ˡ�");
				cm.dispose();
				return;
			}
			}
			if (selection == 4) { //10
			if (cm.getBossLog('sss4') ==1 && cm.getMapId() == 100000001 && cm.getBossLog('ssss2')  > 1){
				cm.setBossLog("sss4");
				cm.setBossLog("sss5");
				cm.gainNX(104);
				cm.sendOk("��ϲ����ɵ��Ľ׶ν������������������׶�");
				cm.worldMessage(6,"[��ɽ��ˮ]����ϲ����� "+cm.getName()+" ��ɵ��Ľ׶Σ������밴��ʼ����׶� ��");
				cm.dispose();
			} else {
				cm.sendOk("ȥ���ĳ�����?֮����ȥ���ǵļң�������׶�������ˣ�");
				cm.dispose();
				return;
			}
			}
			if (selection == 5) { //10
			if (cm.getBossLog('sss5') ==1 && cm.getMapId() == 100010100 || cm.getMapId() == 100020000 && cm.getBossLog('ssss3')  > 0){
				cm.setBossLog("sss5");
				cm.setBossLog("sss6");
				cm.gainNX(105);
				cm.sendOk("��ϲ����ɵ���׶ν�������������������׶�");
				cm.worldMessage(6,"[��ɽ��ˮ]����ϲ����� "+cm.getName()+" ��ɵ���׶Σ������밴��ʼ�����׶� ��");
				cm.dispose();
			} else {
				cm.sendOk("���к��ǲ��Ǻܿ᣿�����������ʾ������");
				cm.dispose();
				return;
			}
			}
			if (selection == 6) { //10
			if (cm.getBossLog('sss6') ==1 && cm.getMapId() == 102000002  && cm.haveItem(2010000,1)){
				cm.setBossLog("sss6");
				cm.setBossLog("sss7");
				cm.gainItem(2010000, -200);
				cm.gainNX(106);
				cm.sendOk("��ϲ����ɵ����׶ν�����������������߽׶�");
				cm.worldMessage(6,"[��ɽ��ˮ]����ϲ����� "+cm.getName()+" ��ɵ����׶Σ������밴��ʼ���߽׶� ��");
				cm.dispose();
			} else {
				cm.sendOk("�������ƻ���ܺá����˾ͳԣ�����ԥ����������");
				cm.dispose();
				return;
			}
			}
			if (selection == 7) { //10
			if (cm.getBossLog('sss7') ==1 && cm.getMapId() == 102000004 ){
				cm.setBossLog("sss7");
				cm.setBossLog("sss8");
				cm.gainNX(106);
				cm.sendOk("��ϲ����ɵ��߽׶ν���������������ڰ˽׶�");
				cm.worldMessage(6,"[��ɽ��ˮ]����ϲ����� "+cm.getName()+" ��ɵ��߽׶Σ������밴��ʼ�ڰ˽׶� ��");
				cm.dispose();
			} else {
				cm.sendOk("սʿ�ĵ��ã���ʥ�ĵ��á�");
				cm.dispose();
				return;
			}
			}
			if (selection == 8) { //10
			if (cm.getBossLog('sss8') ==1 && cm.getMapId() == 103000002 ){
				cm.setBossLog("sss8");
				cm.setBossLog("sss9");
				cm.gainNX(108);
				cm.sendOk("��ϲ����ɵڰ˽׶ν���������������ھŽ׶�");
				cm.worldMessage(6,"[��ɽ��ˮ]����ϲ����� "+cm.getName()+" ��ɵڰ˽׶Σ������밴��ʼ�ھŽ׶� ��");
				cm.dispose();
			} else {
				cm.sendOk("��ˬ~~��");
				cm.dispose();
				return;
			}
			}
			if (selection == 9) { //10
			if (cm.getBossLog('sss9') ==1 && cm.getMapId() == 101000200 ){
				cm.setBossLog("sss9");
				cm.setBossLog("sss10");
				cm.gainNX(10000);
				cm.warp(910000000, 0);
				cm.sendOk("��ϲ����ɵھŽ׶ν�����\r\n�ㄻ x #r1000 #k~");
				cm.worldMessage(6,"[��ɽ��ˮ]����ϲ����� "+cm.getName()+" ��ɵھŽ׶Σ���������ʼ�������г���ȡ������ ��");
				cm.dispose();
			} else {
				cm.sendOk("���������漣��");
				cm.dispose();
				return;
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
