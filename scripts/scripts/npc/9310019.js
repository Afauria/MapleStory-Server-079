var ���� = "#fEffect/CharacterEff/1112903/0/0#";
var ���� = "#fEffect/CharacterEff/1032063/0/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
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
    }
    else {
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
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            

			
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
			
			text += "#L1##b#e" + ��ɫ��ͷ + "������Ӹ���(10-255) ���⽱����#v2022468#X2#l\r\n"//3

            text += "#L2##b#e" + ��ɫ��ͷ + "������Ӹ���(20��-255��) ���⽱����#v2460005#X2#l\r\n"
            text += "#L3##b#e" + ��ɫ��ͷ + "�����Ӹ���(35��-255��) ���⽱����#v4310149#X2#l\r\n"

						
            text += "#L4##b" + ��ɫ��ͷ + "�����Ӹ���(35-255) ���⽱����#v4000464#X2#l\r\n"
       //     text += "#L8##b" + ��ɫ��ͷ + "��Ů��Ӹ���(71-255) \r\n"

          text += "#L5##b#e" + ��ɫ��ͷ + "������Ӹ���(45��-255��) ���⽱����#v2614015#X2#l\r\n"
          text += "#L6##b#e" + ��ɫ��ͷ + "������Ӹ���(80��-255��) ���⽱����#v2340000#X2#l\r\n\r\n\r\n"
		  

          //  text += "#L1##b" + ��ɫ��ͷ + "������Ӹ���(10-200)#l #L9##b" + ��ɫ��ͷ + "Ӣ��ѧԺ����\r\n"//3
             
        
           
           // text += "#L10##b"+xxx+"������껪(��ӶԿ�����.���2V2)�ȼ�(30-100)#l\r\n"//3
			//   text += "#L8#"+ttt+""+xxx+ "��ַ����Կ�ս(���帱��)#l\r\n"//3
           // text += "#b#L27#"+��ɫ��ͷ+ "��ʮ�߹�#l      #L38##b" +��ɫ��ͷ+"�������\r\n"//3  
         //  text += "#L28##b" + ��ɫ��ͷ + "��������#l\r\n\r\n"//3
         
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"  
	  //  text += " #L11#"+ttt+""+xxx+"Զ������(100��)#l#b#L12#"+ttt+""+xxx+"Զ������(120��)#l#b\r\n";
            
        //    text += " #L23#"+ttt+""+xxx+"�������(70��)#l#b#L22#"+ttt+""+xxx+"�޴�����(90)#l#b\r\n";
	   // text += " #L15#"+ttt+""+xxx+"糺츱��(120��)#l#b#L16#"+ttt+""+xxx+"����(120��)#l#b\r\n";

            //text += " #L13#"+ttt+""+xxx+"ǧ������(130��)#l#b#L14#"+ttt+""+xxx+"Զ����ɮ(140��)#l#b\r\n\r\n";
			
			//text += " #L109#"+ttt+""+xxx+"ʨ�����Ӽ������(130��)#l#b\r\n\r\n";
			//text += "#L109##dLv150.��սƷ����#l\r\n\r\n"//3��//Array(211061001,0,"ʨ�����Ӽ�����ڣ�����1�ߣ�")

            //text += "#L11##dLv120.ǧ���������ż���#l\r\n\r\n"//3
            //text += "#L12##dLv130.��żʦBOSS��ս#l\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L13##rLv120������.糺츱����ս#l\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L14##rLv140������.���㸱����ս#l\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L60##rLv160������.��ս�߼�boss#l\r\n\r\n"//3
           // text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            cm.sendSimple(text);
			} else if (selection == 30) {//PK 1V1
			var party = cm.getPlayer().getParty();	
			if (cm.getPlayer().getNX() < 20000) {
	            cm.sendOk("��Ҫ2W�������볡.");
                cm.dispose();

			}else{
				cm.warpParty(910000021);
				cm.gainNX(-20000);
				cm.����(2, "[PK����]�����" + cm.getPlayer().getName() + "�����˵���PVP��ͼ~");
                cm.dispose();
                return;
	      }
		  
		  } else if (selection == 40) {//PK ���
	
			 if(!cm.haveItem(2002033,10)){
	            cm.sendOk("��Ҫ10���ɿ�����������볡.");
                cm.dispose();

			}else{
				cm.gainItem(2002033,-10);
				cm.warpParty(910000022);
				cm.����(2, "[PK����]�����" + cm.getPlayer().getName() + "���������PVP��ͼ~");
                cm.dispose();
                return;
	      }
			
			
			
        } else if (selection == 1) { //������Ӹ��� //100000020
            cm.warpParty(100000200);
		  // cm.openNpc(1012112, 0);
			//cm.gainDY(-500);
			//cm.sendOk("�۳����ͷ���500����ȯ");
            cm.dispose();
        } else if (selection == 2) {  //������Ӹ���
            cm.warpParty(103000000);
			//cm.gainDY(-500);
			//cm.sendOk("�۳����ͷ���500����ȯ");
            cm.dispose();
        } else if (selection == 3) { //�����Ӹ���
            cm.warpParty(221024500);
			//cm.gainDY(-500);
			//cm.sendOk("�۳����ͷ���500����ȯ");
            cm.dispose();
        } else if (selection == 4) {//�����Ӹ���
            cm.warpParty(200080101);
			//cm.gainDY(-500);
			//cm.sendOk("�۳����ͷ���500����ȯ");
            cm.dispose();
        } else if (selection == 5) {//������Ӹ���
	    cm.warpParty(300030100);
		//cm.gainDY(-500);
			//cm.sendOk("�۳����ͷ���500����ȯ");
            cm.dispose();
        } else if (selection == 6) {//������Ӹ���
            cm.warpParty(251010404);
			//cm.gainDY(-500);
			//cm.sendOk("�۳����ͷ���500����ȯ");
            cm.dispose();
        
        } else if (selection == 8) {//����ŷ������Ҷ��Ӹ���
	    cm.warpParty(261000011);
		//cm.gainDY(-500);
			//cm.sendOk("�۳����ͷ���500����ȯ");
            cm.dispose();
        } else if (selection == 9) {//Ӣ��ѧԺ����
            cm.openNpc(9900004, 17);
         } else if (selection == 21) {//���﹫԰
            cm.warpParty(951000000);
			cm.gainDY(-500);
			cm.sendOk("�۳����ͷ���500����ȯ");
            cm.dispose();
        } else if (selection == 28) {//��������
            cm.warpParty(130020000);
			cm.gainDY(-500);
			cm.sendOk("�۳����ͷ���500����ȯ");
            cm.dispose();
       } else if (selection == 29) {//����������
            cm.warpParty(926010000);
			cm.gainDY(-500);
			cm.sendOk("�۳����ͷ���500����ȯ");
            cm.dispose();
       } else if (selection == 23) {//�������
            cm.warpParty(701010320);
			cm.gainDY(-500);
			cm.sendOk("�۳����ͷ���500����ȯ");
            cm.dispose();
            
        } else if (selection == 22) {//�޴�����
            cm.warpParty(105100100);
			cm.gainDY(-500);
			cm.sendOk("�۳����ͷ���500����ȯ");
            cm.dispose();

        } else if (selection == 11) {//����
            cm.warpParty(220080000);
            cm.dispose();
            //cm.openNpc(9310057, 0);
        } else if (selection == 12) {//��
            cm.warpParty(211042400);
			cm.gainDY(-500);
			cm.sendOk("�۳����ͷ���500����ȯ");
            cm.dispose();
            //cm.openNpc(9310057, 0);
        } else if (selection == 13) {//����//Array(270050000,0,"��Ļƻ�:Ʒ���ͳ���"),
            if (cm.getLevel() < 130 && cm.party.size() < 2) {  
            cm.sendOk("����ͼ���Ƶȼ�130������������û���ʸ���ս����");
                cm.dispose();
              }else{
			cm.warpParty(541020800);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 109) {//����//Array(270050000,0,"��Ļƻ�:Ʒ���ͳ���"),
            if (cm.getLevel() < 150 && cm.party.size() < 2) {  
            cm.sendOk("û���ʸ���ս����");
                cm.dispose();
              }else{
			cm.warpParty(211061001);//"ʨ�����Ӽ������),//cm.warpParty(270050100);//"��սƷ����"),  211061001
				cm.dispose();
                return;
	      } 
        } else if (selection == 14) {//��ɮ
            if (cm.getLevel() < 140 ) {  
            cm.sendOk("����ͼ���Ƶȼ�140������������û���ʸ���ս����");
                cm.dispose();
              }else{
			cm.warpParty(702070400);  
                cm.dispose();
                return;
	      }
        } else if (selection == 15) {//糺�
            if (cm.getLevel() < 120 ) {  
            cm.sendOk("����ͼ���Ƶȼ�120������������û���ʸ���ս����");
                cm.dispose();
              }else{
			cm.warpParty(803001200);  
                cm.dispose();
                return;
	      } 
        } else if (selection == 16) {//����
            if (cm.getLevel() < 120 ) {  
            cm.sendOk("����ͼ���Ƶȼ�120������������û���ʸ���ս����");
                cm.dispose();
              }else{
			cm.warpParty(230040420);  
                cm.dispose();
                return;
	      }
        } else if (selection == 10) {//.������껪
            cm.warpParty(980000000);
            cm.dispose();
            //cm.openNpc(9310057, 0);
          } else if (selection == 60) {//.������껪
            cm.warpParty(970030001);
            cm.dispose();
            //cm.openNpc(9310057, 0);
        } else if (selection == 15) {//.���ﰲ��
            cm.openNpc(2101018, 0); 
        } else if (selection == 27) {//.��ʮ�߹�
            cm.warpParty(970030000);
            cm.showInstruction("#r[��ʮ�߹�����˵��]#k\r\n\r\n", 240, 60);
            cm.dispose();
       } else if (selection == 38) {//.�������
            cm.warpParty(925020000);
            cm.showInstruction("#r[�����������˵��]#k��ȡ����\r\n\r\n", 240, 60);
            cm.dispose();
           
        } else if (selection == 31) {//.����ɨ��
           if (cm.haveItem(4031890) > 0 && cm.getPlayer().getLevel() >= 21){
           cm.gainItem(4031456,2);
           cm.gainItem(4002000,2);
		   cm.gainItem(4002001,1);//����ţ��Ʊ
           cm.gainExp(50000);
		   cm.gainMeso(200000);
           cm.gainItem(4031890,-1);
		   cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ�����ɨ����ͨ������������");
            cm.dispose();
           }
         else{
              cm.sendOk("��û��ɨ��������ȼ�����21��������ɨ������");
              cm.dispose();
             }
        }
      else if (selection == 32) {//.���ɨ��
           if (cm.haveItem(4031890) > 0 && cm.getPlayer().getLevel() >= 35){
           cm.gainItem(4001126,50);
           cm.gainItem(4002000,3);
		   cm.gainItem(4002001,1);//����ţ��Ʊ
             cm.gainExp(200000);
			 cm.gainMeso(500000);
		   cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ�����ɨ����ͨ����߸�����");
           cm.gainItem(4031890,-2);
            cm.dispose();
           }
         else{
              cm.sendOk("��û��ɨ��������ȼ�����35������ɨ������");
              cm.dispose();
             }
        }
else if (selection == 33) {//.���ɨ��
           if (cm.haveItem(4031890) > 0){
           cm.gainItem(4001322,10);
           cm.gainItem(4002000,1);//����ţ��Ʊ
             cm.gainExp(50000);
           cm.gainItem(4031890,-1);
		   cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ�����ɨ����ͨ����߸�����");
            cm.dispose();
           }
         else{
              cm.sendOk("��û��ɨ����������ɨ������");
              cm.dispose();
             }
        }
else if (selection == 34) {//.��Ůɨ��
           if (cm.haveItem(4031890) > 0){
           cm.gainItem(4001322,10);
           cm.gainItem(4002000,1);//����ţ��Ʊ
             cm.gainExp(50000);
           cm.gainItem(4031890,-1);
            cm.dispose();
           }
         else{
              cm.sendOk("��û��ɨ����������ɨ������");
              cm.dispose();
             }
        }
else if (selection == 35) {//.����ɨ��
           if (cm.haveItem(4031890) > 0 && cm.getPlayer().getLevel() >= 60){
           cm.gainItem(4031456,5);
           cm.gainItem(4002000,3);
		   cm.gainItem(4002001,2);//����ţ��Ʊ
             cm.gainExp(700000);
			 cm.gainMeso(900000);
			 cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ�����ɨ����ͨ�����︱����");
           cm.gainItem(4031890,-3);
            cm.dispose();
           }
         else{
              cm.sendOk("��û��ɨ��������ȼ�����60.����ɨ������");
              cm.dispose();
             }
        }
else if (selection == 36) {//.����ɨ��
            if (cm.haveItem(4031890) > 0 && cm.getPlayer().getLevel() >= 90){
           cm.gainItem(4031456,3);
           cm.gainItem(4002000,3);
		   cm.gainItem(4002001,2);//����ţ��Ʊ
             cm.gainExp(3000000);
			 cm.gainMeso(1000000);
			 cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ�����ɨ����ͨ������������");
           cm.gainItem(4031890,-5);
            cm.dispose();
           }
         else{
              cm.sendOk("��û��ɨ����������ɨ������");
              cm.dispose();
             }
        }
    }
}


