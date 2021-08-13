/*
-- MrCoffee JavaScript --
        NPC�ű� 
-------------------------
   MrCoffee MapleStory
----- Version Info ------
     Version - 1.0.0 
-------------------------
*/

importPackage(net.sf.MrCoffee.client);

var mapid = new Array(200000110,200000120,200000130,200000140,200000150);
var platform = new Array("ħ������","��߳�","��ľ��","����","���ﰲ��");
var flight = new Array("ship","ship","ship","Hak","Geenie");
var menu;
var select;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if(mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if(mode == 0) {
			cm.sendOk("����ϸѡ�����Ҫȥ��վ̨���ٸ��ҽ���");
			cm.dispose();
			return;
		}
		if(mode == 1)
			status++;
		else
			status--;
		if(status == 0) {
			menu = "���֮�����������ݺύ����ѡ��һ�����Դ��㵽Ŀ�ĵص�վ̨������ģ���ʹ��ѡ����ˣ������Ի�������˵���ҽ����㵽��ȷ��վ̨�ȴ����ࡣ��������ѡ����Ҫȥ��վ̨��";
			for(var i=0; i < platform.length; i++) {
				menu += "\r\n#L"+i+"##b���� "+platform[i]+"#k#l";
			}
			cm.sendSimple(menu);
		} else if(status == 1) {
			select = selection;
			cm.sendYesNo("��ʹ��ѡ�����վ̨���㻹���Իص�����������˵�������㽫Ҫ�ƶ������� #b "+flight[select]+"  "+platform[select]+" #k��վ̨��");
		} else if(status == 2) {
			cm.warp(mapid[select]);
			cm.dispose();
		}
	}
}