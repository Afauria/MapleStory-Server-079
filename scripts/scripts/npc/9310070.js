var �����Ʒ = "#v1302000#";
var x1 = "1302000,+1";// ��ƷID,����
var x2;
var x3;
var x4;
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
			if(cm.getJob() >= 0 && cm.getJob()<= 522 && cm.hasSkill(1017) == false){
			cm.teachSkill(1017,1,1);
			}else if(cm.getJob() >=1000 || cm.getJob() <= 2112 && cm.hasSkill(20001019) == false){
			cm.teachSkill(20001019,1,1);
			}
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
			
            text += "\t#b#L0#������#v3015343##l#b#L3#���ܳ齱#v3015343##b#L100#�ʼ�����#v3015343#\r\n\r\n"
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
			//text+="#L100##v4000463#2�������-�ʼ���������齱#l\r\n";
			text+="#L101##v2002033#1���ɿ�������-����װ������齱#l\r\n";
			text+="#L102##v4001126#30����Ҷ��3��-10%����#l\r\n";
			//text+="#L33##v2280006#500����Ҷ-����������齱#l\r\n";
			//text+="#L22##v1302021#5000��ȯ-���װ������齱#l\r\n";
		    cm.sendSimple(text);
        } else if (selection == 0) {//���
             cm.dispose();
             cm.openNpc(9900004, 666);
       } else if (selection == 1) {//δ��֮��
             cm.dispose();
             cm.openNpc(9900004, 777);
        
        } else if (selection == 2) {//130
            cm.openNpc(9310100, 0);
        
        } else if (selection == 3) {//140
            cm.openNpc(2041024, 0);
			
		}	else if(selection==101){
				cm.openNpc(9310024,101);
				
				}	else if(selection==100){
				cm.openNpc(9310085,0);
				
				}	else if(selection==102){
				cm.openNpc(9310024,102);
			
		}	else if(selection==199){
				cm.openNpc(9310024,199);
			

			
						}else if (selection == 22){
				cm.openNpc(9310024, 123);
			}else if (selection == 33){
				cm.openNpc(9310024, 4);
       
        } else if (selection == 4) {//Ѫ��
            cm.openNpc(9310071, 53);
        
        } else if (selection == 5) {//Ѫ��
            cm.openNpc(9310071, 54);
        
        } else if (selection == 6) {//Ѫ��
            cm.openNpc(9310071, 55);
        
        } else if (selection == 7) {//Ѫ��
            cm.openNpc(9310071, 56);

        } else if (selection == 8) {//Ѫ��
            cm.openNpc(9310071, 57);

        } else if (selection == 10) {//Ѫ��
            cm.openNpc(9330078, 98);

        } else if (selection == 11) {//Ѫ��
            cm.openNpc(9330078, 99);
        } else if (selection == 20) {//Ѫ��
            cm.openNpc(9310071, 66);
        
        } 

    }
}