importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
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
	    var a1 = "#L1##b" + ������ͷ + "װ����������#i4000038# x 1     ��� x 100.000\r\n";
		//var a2 = "#L2##bǿ �� װ ��������ǿ������/1  ��30% ��\r\n";
		//var a3 = "#L3##rǿ �� װ ��������ǿ��������/1  ��40% ��\r\n";
		//var a4 = "#L4##r�� �� �� �ɣ�����ǿ��������/20 ��100%��\r\n";
		//var a5 = "#L5##r�� �� �� ������������������/5  �� 5% ��";
		//var a6 = "#L6##rǿ �� ˵ ��\r\n";
		//var a7 = "#L7##rǿ �� װ ��������ǿ������/20 ��40% ��\r\n";

            cm.sendSimple("#r#i3994115##i3994115##i3994115##i3994115##i3994115#\r\n#d- �ҿ��԰�������#rװ������������ħ����#k\r\n\r\n"+a1+"");
	    } else if (selection == 1) {
		if (cm.haveItem(4000038, 1) && cm.getMeso()>=100000 ) {
			cm.gainItem(4000038, -1);
			cm.gainMeso(-100000);
			var rand=Math.floor(Math.random()*100);
			if(rand<30){
			cm.gainEquiPproperty(0,0,0,0,0,3,0,0,20,0,0);//����/w����/m����/����/����/����/����/HP/MP/����/�ر�/
			cm.sendOk("#fEffect/BasicEff.img/Fishing/6#\r\n\r\n#r��������#k;#b   �� �� + 3  ħ �� + 20");
			cm.dispose();
			cm.worldMessage(6,"[����]����ϲ�����  "+cm.getName()+"  ׼�����������ɹ���");
			return;
			}
			else {
			cm.gainEquiPproperty(0,0,0,0,0,-3,0,0,-20,0,0);
			//cm.sendOk("���ź�������ʧ�ܣ�����ʧ��һЩ���ԡ�");
			cm.dispose();
			cm.sendOk("���ź�ʧ����:#r\r\n����-3 \r\nħ��-20");
			cm.worldMessage(6,"[����]���ź������  "+cm.getName()+"  װ����������ʧ�ܡ�");
			return;
				}
		} else {
			cm.sendOk("��û��#i4000038#������#i4031039#��� x 100000!!!");
			cm.dispose();
			return;
		}
		} else if (selection == 2) {
		if (cm.haveItem(4000038, 1) ) {
			cm.gainItem(4000038, -1);
			var rand=Math.floor(Math.random()*100);
			if(rand<30){
			cm.gainEquiPproperty(0,1,2,3,3,3,3,30,30,3,3);
			cm.sendOk("��ϲ�㰡��ǿ�����ˣ������ǲ��Ǳ�֮ǰ��Ư���ˡ�");
			cm.dispose();
			return;
			}
			else {
			cm.gainEquiPproperty(0,-2,-4,-5,-5,-5,-5,-50,-50,-5,-5);
			cm.sendOk("���ź���ǿ��ʧ�ܣ���ʧ��һЩ����~");
			cm.dispose();
			return;
			}
		} else {
			cm.sendOk("��û�н𱭣����Բ���ǿ��!!!");
			cm.dispose();
			return;
		}
		} else if (selection == 3) {
		if (cm.haveItem(4032226, 1) ) {
			cm.gainItem(4032226, -1);
			var rand=Math.floor(Math.random()*100);
			if(rand<40){
			cm.gainEquiPproperty(0,2,4,4,4,4,4,40,40,4,4);
			cm.sendOk("��ϲ�㰡��ǿ�����ˣ������ǲ��Ǳ�֮ǰ��Ư���ˡ�");
			cm.dispose();
			return;
			}
			else {
			cm.gainEquiPproperty(0,-2,-4,-2,-2,-2,-2,-20,-20,-2,-2);
			cm.sendOk("���ź���ǿ��ʧ�ܣ���ʧ��һЩ����~");
			cm.dispose();
			return;
			}
		} else {
			cm.sendOk("��û�н������Բ���ǿ��!!!");
			cm.dispose();
			return;
		}
		} else if (selection == 4) {
		if (cm.haveItem(4032226, 20) ) {
			cm.gainItem(4032226, -20);
			var rand=Math.floor(Math.random()*100);
			if(rand<50){
			cm.gainEquiPproperty(0,2,4,6,6,6,6,60,60,6,6);
			cm.sendOk("��ϲ��ǿ������һ������");
			cm.dispose();
			return;
			}
			else {
			cm.gainEquiPproperty(0,1,2,3,3,3,3,30,30,3,3);
			cm.sendOk("��ϲ��ǿ�����ڶ�������");
			cm.dispose();
			return;
			}
		} else {
			cm.sendOk("��û�н������Բ���ǿ��!!!");
			cm.dispose();
			return;
		}
		} else if (selection == 5) {
		if (cm.haveItem(4032226, 5) ) {
			cm.gainItem(4032226, -5);
			var rand=Math.floor(Math.random()*100);
			if(rand<5){
			cm.gainEquiPproperty(1,0,0,0,0,0,0,0,0,0,0);
			cm.sendOk("��ϲ�����������ɹ���");
			cm.dispose();
			return;
			}
			else {
			cm.gainEquiPproperty(0,0,0,-1,-1,-1,-1,-1,-1,-1,-1);
			cm.sendOk("����ʧ�ܣ�װ����ʧһЩ����");
			cm.dispose();
			return;
			}
		} else {
			cm.sendOk("��û�н������Բ�������!!!");
			cm.dispose();
			return;
		}
		} else if (selection == 7) {
		if (cm.haveItem(4000038, 20) ) {
			cm.gainItem(4000038, -20);
			var rand=Math.floor(Math.random()*100);
			if(rand<40){
			cm.gainEquiPproperty(0,1,2,3,3,3,3,30,30,3,3);
			cm.sendOk("��ϲ��ǿ���ɹ����ɹ�����װ�����ԡ�");
			cm.dispose();
			return;
			}
			else {
			cm.gainEquiPproperty(0,-2,-4,-5,-5,-5,-5,-50,-50,-5,-5);
			cm.sendOk("���ź���ǿ��ʧ�ܣ�����ʧ��һЩ���ԡ�");
			cm.dispose();
			return;
			}
		} else {
			cm.sendOk("��û�н𱭣����Բ���ǿ��!!!");
			cm.dispose();
			return;
		}
		}else if(selection == 6){
			var strlen = "#r��Ⱥ�ļ���ǿ����������ϸ˵����#k";
			cm.sendOk(strlen);
			cm.dispose();
		}
		
    }
}