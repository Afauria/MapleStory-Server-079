importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
var status = 0;
var ��ˮ�� = 4021008;
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var ��1 = "#fEffect/SkillName1.img/1001003/��8#";
var ��2 = "#fEffect/SkillName1.img/1001003/��9#";
var ��3 = "#fEffect/SkillName1.img/1001003/��10#";
var ��4 = "#fEffect/SkillName1.img/1001003/��11#";
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
	    var a1 = "#L1##b" + ��1 + "";
		var a2 = "#L2##b" + ��2 + "";
		var a3 = "#L3##b" + ��3 + "";
		var a4 = "#L4##b" + ��4 + "";


            cm.sendSimple("����ð�յ�����С��Ϸ#r���߹�#k��\r\n\r\n"+a1+""+a2+""+a3+""+a4+"");
            
	    } else if (selection == 1) {
			
		if (cm.getMeso()>=0  ) {
			var rand=Math.floor(Math.random()*100);
			if(rand<30){
            cm.gainMeso(250000);
			cm.setBossRankCount("����");
			cm.dispose();
			cm.openNpc(1012008,8);
			return;
			}
			else {
			cm.gainMeso(-250000);
			cm.sendOk("���������뾡����������");
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
			if(rand<30){
            cm.gainMeso(250000);
			cm.setBossRankCount("����");
			cm.dispose();
			cm.openNpc(1012008,8);
			return;
			}
			else {
			cm.gainMeso(-250000);	
			cm.sendOk("���������뾡����������");
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
			if(rand<30){
            cm.gainMeso(250000);
			cm.setBossRankCount("����");
			cm.dispose();
			cm.openNpc(1012008,8);
			return;
			}
			else {
		    cm.gainMeso(-250000);
			cm.sendOk("���������뾡����������");
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
			if(rand<30){
            cm.gainMeso(250000);
			cm.setBossRankCount("����");
			cm.dispose();
			cm.openNpc(1012008,8);
			return;
			}
			else {
		    cm.gainMeso(-250000);
			cm.sendOk("���������뾡����������");
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