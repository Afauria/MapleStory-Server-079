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
        }

        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            var a1 = "#L1##g��ת#k��Ԫ��ħ��ʦ�� - ��ģʽ\r\n";
		    var a2 = "#L2##g��ת#k��Ԫ��ħ��ʦ�� - ����ģʽ\r\n";
			var a3 = "#L3##b��ת#k��Ԫ��ħ��ʦ�� - ��ģʽ\r\n\r\n";
			var a4 = "#L4##b��ת#k��Ԫ��ħ��ʦ�� - ����ģʽ\r\n";
			var a5 = "#L5##r��ת#k��Ԫ��ħ��ʦ�� - ��ģʽ\r\n\r\n";
			var a6 = "#L6##r��ת#k��Ԫ��ħ��ʦ�� - ����ģʽ\r\n";



            cm.sendSimple("#d-Ԫ��ħ��ʦ-#k\r\n\r\n#rְҵ��飻�ƿ��˱������ף�������Ԫ�ص�ǿ��ħ��ʦ��#k\r\n\r\n\r\n"+a6+""+a5+""+a4+""+a3+""+a2+""+a1+"");

            } else if (status == 1) {
         	if (selection == 1) { 
			if(cm.haveItem(1142231)&& cm.getPlayer().getLevel() > 29){

				
				cm.dispose();
			    cm.openNpc(2000,501);
			} else {
				cm.sendOk("��ѷ�ʦ��ѫ�·��뱳�������л����ܡ�");
				cm.dispose();
				return;
			}
			}
			if (selection == 2) { 
			if(cm.haveItem(1142231) && cm.getPlayer().getLevel() > 29){

				
				cm.dispose();
			    cm.openNpc(2000,502);
			} else {
				cm.sendOk("��ѷ�ʦ��ѫ�·��뱳�������л����ܡ�");
				cm.dispose();
				return;
			}
			}
			if (selection == 3) { 
			if(cm.haveItem(1142231) && cm.getPlayer().getLevel() > 69){

				
				cm.dispose();
			    cm.openNpc(2000,503);
			} else {
				cm.sendOk("��ѷ�ʦ��ѫ�·��뱳�������л����ܡ�");
				cm.dispose();
				return;
			}
			}
			if (selection == 4) { 
			if(cm.haveItem(1142231) && cm.getPlayer().getLevel() > 69){

				
				cm.dispose();
			    cm.openNpc(2000,504);
			} else {
				cm.sendOk("��ѷ�ʦ��ѫ�·��뱳�������л����ܡ�");
				cm.dispose();
				return;
			}
			
		    }
			if (selection == 5) { 
			if(cm.haveItem(1142231) && cm.getPlayer().getLevel() > 119){

				
				cm.dispose();
			    cm.openNpc(2000,505);
			} else {
				cm.sendOk("��ѷ�ʦ��ѫ�·��뱳�������л����ܡ�");
				cm.dispose();
				return;
			}
			}
			if (selection == 6) { 
			if(cm.haveItem(1142231) && cm.getPlayer().getLevel() > 119){

				
				cm.dispose();
			    cm.openNpc(2000,506);
			} else {
				cm.sendOk("��ѷ�ʦ��ѫ�·��뱳�������л����ܡ�");
				cm.dispose();
				return;
			}
			
			
			
			
			
			
			
			

	    	}
			if (selection == 1001) { //10
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
			if (selection == 30) { //10
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
			if (selection == 40) { //10
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
			if (selection == 50) { //10
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
			if (selection == 60) { //10
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
				cm.setBossLog("zymxd");
				cm.setBossLog("zymxd");
				cm.setBossLog("zymxd");
				cm.setBossLog("zymxd");
				cm.setBossLog("zymxd");
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
