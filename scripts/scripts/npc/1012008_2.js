importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
var status = 0;
var ��ˮ�� = 4021008;
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var ��4 = "#fEffect/SkillName1.img/1001003/��4#";
var ��5 = "#fEffect/SkillName1.img/1001003/��5#";
var ��6 = "#fEffect/SkillName1.img/1001003/��6#";
var ��7 = "#fEffect/SkillName1.img/1001003/��7#";
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
	    var a1 = "#L1##b" + ��4 + "";
		var a2 = "#L2##b" + ��5 + "";
		var a3 = "#L3##b" + ��6 + "";
		var a4 = "#L4##b" + ��7 + "";


            cm.sendSimple("����ð�յ�����С��Ϸ#r�ڶ���#k��\r\n\r\n"+a1+""+a2+""+a3+""+a4+"");
            
	    } else if (selection == 1) {
			
		if (cm.getMeso()>=0  ) {
			var rand=Math.floor(Math.random()*100);
			if(rand<50){
            cm.gainMeso(15000);
			cm.setBossRankCount("����");
			cm.dispose();
			cm.openNpc(1012008,3);
			return;
			}
			else {
			cm.gainMeso(-15000);
			cm.sendOk("˲�䱬ը��������������");
			cm.dispose();
			return;
				}
		} else {
			cm.sendOk("��������������");
			cm.dispose();
			return;
		}
		} else if (selection == 2) {
			
		if (cm.getMeso()>=0  ) {
			var rand=Math.floor(Math.random()*100);
			if(rand<50){
            cm.gainMeso(15000);
			cm.setBossRankCount("����");
			cm.dispose();
			cm.openNpc(1012008,3);
			return;
			}
			else {
			cm.gainMeso(-15000);	
			cm.sendOk("˲�䱬ը��������������");
			cm.dispose();
			return;
				}
		} else {
			cm.sendOk("��������������");
			cm.dispose();
			return;
		}
		} else if (selection == 3) {
			
		if (cm.getMeso()>=0  ) {
			var rand=Math.floor(Math.random()*100);
			if(rand<50){
            cm.gainMeso(15000);
			cm.setBossRankCount("����");
			cm.dispose();
			cm.openNpc(1012008,3);
			return;
			}
			else {
		    cm.gainMeso(-15000);
			cm.sendOk("˲�䱬ը��������������");
			cm.dispose();
			return;
				}
		} else {
			cm.sendOk("��������������");
			cm.dispose();
			return;
		}
		} else if (selection == 4) {
			
		if (cm.getMeso()>=0  ) {
			var rand=Math.floor(Math.random()*100);
			if(rand<50){
            cm.gainMeso(15000);
			cm.setBossRankCount("����");
			cm.dispose();
			cm.openNpc(1012008,3);
			return;
			}
			else {
		    cm.gainMeso(-15000);
			cm.sendOk("˲�䱬ը��������������");
			cm.dispose();
			return;
				}
		} else {
			cm.sendOk("��������������");
			cm.dispose();
			return;
		}
        

		}
		
    }
}