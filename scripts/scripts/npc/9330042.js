var ���� = "#fEffect/CharacterEff/1114000/2/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
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
           // text += """����ÿ��˫���վ���#rPK������""\r\n"
           //             text += "\t\t\t  #e����׬Ǯϵͳ#b�����鹺��˫�����ʿ��� #k!#n\r\n"
           // text += "       "+ ��ɫ�ǵ� +"#L21##rLv30.�������#l\r\n\r\n"//3
           // text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
           // text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
			//text += "\t\t\t  #e����ϵͳ#b�����鹺��˫�����ʿ��� #k!#n\r\n"
           // text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
           // text += "#L1##e#d" + ��ɫ�ǵ� + "����ţ��#l#L2##d " + ��ɫ�ǵ� + "ľ����#l\r\n\r\n"//3
		   text+="\t\t��������BOSS����#v2022468#��ȥɱBOSS�ɣ�#l\r\n";
		   text += "#L30#" + ��ɫ�ǵ� +"#r1V1 PK��(2W���/��)#L40#" + ��ɫ�ǵ� +"#r3V3 PK��(10��#v2002033#/��)\r\n\r\n"//3		   
          //  text += "#L3##d" + ��ɫ�ǵ� + "Ģ����  #L5##d" + ��ɫ�ǵ� + "��ʬ����#l\r\n\r\n"//3
         //   text += "#L5##d" + ��ɫ�ǵ� + "��ʬ����#l\r\n\r\n"//3
          // text += "#L7##d" + ��ɫ�ǵ� + "������ʦ#l#L8##d " + ��ɫ�ǵ� + "������#l\r\n\r\n"//3
          //  text += "#L9##d" + ��ɫ�ǵ� + "������  #l#L10##d " + ��ɫ�ǵ� + "Ъ����#l\r\n\r\n"//3
           // text += "#L12##d" + ��ɫ�ǵ� + "�����#l\r\n\r\n"//3
           // text += "#L13##d" + ��ɫ�ǵ� + "����ֶ�#l#L14##d" + ��ɫ�ǵ� + "�����#l#L12##d" + ��ɫ�ǵ� + "�����#l\r\n\r\n"//3
           // text += "#L15##d" + ��ɫ�ǵ� + "���#l    #L16##d " + ��ɫ�ǵ� + "����������#l\r\n\r\n"//3
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
                     // text += "\t\t\t#e��ӭ����������ɫ����ϵͳ#b#k#n\r\n"
			//text += "" + ��ɫ��ͷ +"#L0##b����BOSS��ϵ˵��#l\r\n\r\n"//3 
			text += "#L1#" + ��ɫ�ǵ� + "����ţ��#l#L2##d " + ��ɫ�ǵ� + "ľ����#l\r\n"//
			text += "#L7#" + ��ɫ�ǵ� + "������ʦ#l#L8##d " + ��ɫ�ǵ� + "������#l\r\n"//3
            text += "#L9#" + ��ɫ�ǵ� + "������  #l#L10##d " + ��ɫ�ǵ� + "Ъ����#l\r\n\r\n"//3
            text += "#d#L3#" + ��ɫ�ǵ� + "Ģ����    #d#L5#" + ��ɫ�ǵ� + "��ʬ����#l    #d#L13#" + ��ɫ�ǵ� + "����ֶ�#l\r\n"//3	
            text += "#d#L14#" + ��ɫ�ǵ� + "�����#l    #d#L12#" + ��ɫ�ǵ� + "����ħ#l      #L21#" + ��ɫ�ǵ� +"#r�������\r\n\r\n"//3			
		//	text += "              \r\n\r\n"//3
			//text += "" + ��ɫ�ǵ� +"#L12##r����ħ\r\n\r\n"//3
            text += "#L17#" + ��ɫ�ǵ� +"#r����Ƥ��ū˹��Ѩ      #L18#" + ��ɫ�ǵ� +"#rʱ�����ı�Դ����\r\n"//3			
            //text += "" + ��ɫ�ǵ� +"#L26##r�޴������\r\n\r\n"//3
            text += "#L50#" + ��ɫ�ǵ� + "#r�����    #L70#" + ��ɫ�ǵ� + "#r��ɮ   #L27#" + ��ɫ�ǵ� + "#r����   #L20#" + ��ɫ�ǵ� +"#rPB\r\n"//3	" + ��ɫ�ǵ� + "#L23##r糺�" + ��ɫ�ǵ� + "#L26##r�޴������
			//text += "" + ��ɫ�ǵ� +"#L23##r糺�\r\n\r\n"//3
			text += "#L22#" + ��ɫ�ǵ� +"#rʨ��      #L24#" + ��ɫ�ǵ� +"#r������ #L19#" + ��ɫ�ǵ� +"#r����   #L25#" + ��ɫ�ǵ� +"#r�ռ�BOSS     \r\n\r\n"//3
			//text += "" + ��ɫ�ǵ� +"#L30##r��ɮ\r\n\r\n"//3
			//text += "    \r\n\r\n"//3
			//text += "" + ��ɫ�ǵ� +"#L27##r����        " + ��ɫ�ǵ� +"#L19##r����\r\n\r\n"//3
		//	text += "        \r\n\r\n"//3
			//text += "" + ��ɫ�ǵ� +"#L20##rPB\r\n\r\n"//3
			
			//text += "" + ��ɫ�ǵ� +"#L40##r���PK��\r\n\r\n"//3
            // text += "" + ��ɫ�ǵ� + "#L19##rLv70.�����ļ�̳��ս#l\r\n\r\n"//3
            // text += "" + ��ɫ�ǵ� + "#L20##rLv70.���������ĳ�Ѩ��ս#l\r\n\r\n"//3
          //  text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
			//text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            cm.sendSimple(text);
			} else if (selection == 0) {//��ϵ˵��
			cm.sendOk("#e����BOSS��ϵ,������������boss��"+����+"=5*"+����+"��!\r\n\r\n1.������򼣨�Ѷ�ϵ��Ϊ�㣩\r\
n2.����ħ���Ѷ�ϵ��"+����+"��\r\
n3.�������Ѷ�ϵ��"+����+"��\r\
n4.�޴�����֣��Ѷ�ϵ��"+����+"��\r\
n5.���ӣ��Ѷ�ϵ��"+����+"��\r\
n6.糺�1�ף��Ѷ�ϵ��"+����+����+"��\r\
n7.ʨ��2�ף��Ѷ�ϵ��"+����+����+����+"��\r\
n8.����3�ף��Ѷ�ϵ��"+����+����+����+����+"��\r\
n9.����4�ף��Ѷ�ϵ��"+����+����+����+����+����+"��\r\
n10.����5�ף��Ѷ�ϵ��"+����+����+����+����+����+"��");
        } else if (selection == 1) {//����ţ��
            if (cm.getLevel() < 10 ) {  
            cm.sendOk("����ͼ���Ƶȼ�10������������û���ʸ���ս����ţ��");
                cm.dispose();
              }else{
			cm.warp(104000400);  
						cm.����(2, "[BOSS����]�����" + cm.getPlayer().getName() + "��ʼ��ս����ţ������Ҷ���ս��ʹ���~");
				cm.dispose();
                return;
	      } 
		  
		  } else if (selection == 20) {//PB
			var party = cm.getPlayer().getParty();	
			if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                cm.dispose();
			}else if(party.getMembers().size() < 1) {
	            cm.sendOk("��Ҫ 1 �����ϵ���Ӳ��ܽ��룡!");
                cm.dispose();
			//}else 
			}else if(cm.getLevel() < 120){
	            cm.sendOk("��Ҫ120�����ܴ����볡.");
                cm.dispose();
			}else if(cm.getPlayer().getMeso() < 5000000){
	            cm.sendOk("��Ҫ500W�����볡.");
                cm.dispose();
			}else if (cm.getPlayerCount(910000022) > 0){
	            cm.sendOk("�Ѿ���������սPB��.");
                cm.dispose();
			}else{
				cm.warpParty(270050100);
				cm.����(2, "[BOSS����]�����" + cm.getPlayer().getName() + "�����Ŷ��鿪ʼ��սPB����Ҷ���ս��ʹ���~");
                cm.dispose();
                return;
	      }
		  
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
		  
         } else if (selection == 2) {//ľ����
            if (cm.getLevel() < 20 ) {  
            cm.sendOk("����ͼ���Ƶȼ�20������������û���ʸ���սľ����");
                cm.dispose();
              }else{
			cm.warp(101030404);  
						cm.����(2, "[BOSS����]�����" + cm.getPlayer().getName() + "��ʼ��ս����������Ҷ���ս��ʹ���~");
				cm.dispose();
                return;
	      } 
		  
		} else if (selection == 30) {//��ɮ
            if (cm.getLevel() < 140 ) {  
            cm.sendOk("����ͼ���Ƶȼ�140������������û���ʸ���ս��ɮ");
                cm.dispose();
              }else{
			cm.warp(702070400);  
						cm.����(2, "[BOSS����]�����" + cm.getPlayer().getName() + "��ʼ��ս��ɮ����Ҷ���ս��ʹ���~");
				cm.dispose();
                return;
	      }   
		  
        } else if (selection == 3) {//Ģ����
            if (cm.getLevel() < 30 ) {  
            cm.sendOk("����ͼ���Ƶȼ�30������������û���ʸ���սĢ����");
                cm.dispose();
              }else{
			cm.warp(100000005);  
						cm.����(2, "[BOSS����]�����" + cm.getPlayer().getName() + "��ʼ��սĢ��������Ҷ���ս��ʹ���~");
				cm.dispose();
                return;
	      } 
        } else if (selection == 4) {//�ľ�з
            if (cm.getLevel() < 30 ) {  
            cm.sendOk("����ͼ���Ƶȼ�30������������û���ʸ���ս�ľ�з");
                cm.dispose();
              }else{
			cm.warp(110040000);  
						cm.����(2, "[BOSS����]�����" + cm.getPlayer().getName() + "��ʼ��ս�ľ�з����Ҷ���ս��ʹ���~");
				cm.dispose();
                return;
	      } 
       } else if (selection == 5) {//��ʬĢ����
            if (cm.getLevel() < 40 ) {  
            cm.sendOk("����ͼ���Ƶȼ�40������������û���ʸ���ս��ʬĢ����");
                cm.dispose();
              }else{
			cm.warp(105070002); 
			cm.����(2, "[BOSS����]�����" + cm.getPlayer().getName() + "��ʼ��ս��ʬĢ��������Ҷ���ս��ʹ���~");			
				cm.dispose();
                return;
	      } 
		  
		  } else if (selection == 50) {//����ħ
            if (cm.getLevel() < 10 ) {  
            cm.sendOk("����ͼ���Ƶȼ�50������������û���ʸ���ս����ħ");
                cm.dispose();
              }else{
			cm.warp(105090900); 
			cm.����(2, "[BOSS����]�����" + cm.getPlayer().getName() + "��ʼ��ս����֣���Ҷ���ս��ʹ���~");			
				cm.dispose();
                return;
	      }
        } else if (selection == 6) {//�ϵ���
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("����ͼ���Ƶȼ�50������������û���ʸ���ս�ϵ���");
                cm.dispose();
              }else{
			cm.warp(250010304); 
			cm.����(2, "[BOSS����]�����" + cm.getPlayer().getName() + "��ʼ��ս�ϵ��ܣ���Ҷ���ս��ʹ���~");			
				cm.dispose();
                return;
	      } 
        } else if (selection == 7) {//������ʦ
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("����ͼ���Ƶȼ�50������������û���ʸ���ս������ʦ");
                cm.dispose();
              }else{
			cm.warp(250010503); 
			cm.����(2, "[BOSS����]�����" + cm.getPlayer().getName() + "��ʼ��ս������ʦ����Ҷ���ս��ʹ���~");			
				cm.dispose();
                return;
	      } 
        } else if (selection == 8) {//������
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("����ͼ���Ƶȼ�50������������û���ʸ���ս������");
                cm.dispose();
              }else{
			cm.warp(107000300); 
			cm.����(2, "[BOSS����]�����" + cm.getPlayer().getName() + "��ʼ��ս����������Ҷ���ս��ʹ���~");			
				cm.dispose();
                return;
	      } 
        } else if (selection == 9) {//������
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("����ͼ���Ƶȼ�50������������û���ʸ���ս������");
                cm.dispose();
              }else{
			cm.warp(200010300);  
						cm.����(2, "[BOSS����]�����" + cm.getPlayer().getName() + "��ʼ��ս�����ܣ���Ҷ���ս��ʹ���~");
				cm.dispose();
                return;
	      } 
       } else if (selection == 10) {//Ъ����
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("����ͼ���Ƶȼ�50������������û���ʸ���սЪ����");
                cm.dispose();
              }else{
			cm.warp(230020100);  
						cm.����(2, "[BOSS����]�����" + cm.getPlayer().getName() + "��ʼ��սЪ���򣬴�Ҷ���ս��ʹ���~");
				cm.dispose();
                return;
	      } 
        } else if (selection == 11) {//��β��
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("����ͼ���Ƶȼ�50������������û���ʸ���ս��β��");
                cm.dispose();
              }else{
			cm.warp(222010310);  
						cm.����(2, "[BOSS����]�����" + cm.getPlayer().getName() + "��ʼ��ս��β������Ҷ���ս��ʹ���~");
				cm.dispose();
                return;
	      } 
       } else if (selection == 12) {//����ħ
            if (cm.getLevel() < 10 ) {  
            cm.sendOk("����ͼ���Ƶȼ�50������������û���ʸ���ս����ħ");
                cm.dispose();
              }else{
			cm.warp(101000300); 
			cm.����(2, "[BOSS����]�����" + cm.getPlayer().getName() + "��ʼ��ս����֣���Ҷ���ս��ʹ���~");			
				cm.dispose();
                return;
	      } 
         } else if (selection == 13) {//����ֶ�
            if (cm.getLevel() < 70 ) {  
            cm.sendOk("����ͼ���Ƶȼ�70������������û���ʸ���ս����ֶ�");
                cm.dispose();
              }else{
			cm.warp(240020101); 
			cm.����(2, "[BOSS����]�����" + cm.getPlayer().getName() + "��ʼ��ս����Ҷ࣬��Ҷ���ս��ʹ���~");			
				cm.dispose();
                return;
	      } 
        } else if (selection == 14) {//�����
            if (cm.getLevel() < 70 ) {  
            cm.sendOk("����ͼ���Ƶȼ�70������������û���ʸ���ս�����");
                cm.dispose();
              }else{
			cm.warp(240020402); 
			cm.����(2, "[BOSS����]�����" + cm.getPlayer().getName() + "��ʼ��ս���������Ҷ���ս��ʹ���~");			
				cm.dispose();
                return;
	      }
        } else if (selection == 15) {//���
            if (cm.getLevel() < 70 ) {  
            cm.sendOk("����ͼ���Ƶȼ�70������������û���ʸ���ս���");
                cm.dispose();
              }else{
			cm.warp(270010500);  
						cm.����(2, "[BOSS����]�����" + cm.getPlayer().getName() + "��ʼ��ս��࣬��Ҷ���ս��ʹ���~");
				cm.dispose();
                return;
	      }
        } else if (selection == 16) {//����������
            if (cm.getLevel() < 70 ) {  
            cm.sendOk("����ͼ���Ƶȼ�70������������û���ʸ���ս����������");
                cm.dispose();
              }else{
			cm.warp(270020500);  
						cm.����(2, "[BOSS����]�����" + cm.getPlayer().getName() + "��ʼ��ս���������ޣ���Ҷ���ս��ʹ���~");
				cm.dispose();
                return;
	      }  
        } else if (selection == 17) {//����
            if (cm.getLevel() < 70 ) {  
            cm.sendOk("����ͼ���Ƶȼ�70������������û���ʸ���ս����");
                cm.dispose();
              }else{
			cm.warp(230040420); 
			cm.����(2, "[BOSS����]�����" + cm.getPlayer().getName() + "��ʼ��ս��������Ҷ���ս��ʹ���~");			
				cm.dispose();
                return;
	      }
        } else if (selection == 18) {//����
            if (cm.getLevel() < 70 ) {  
            cm.sendOk("����ͼ���Ƶȼ�70������������û���ʸ�����");
                cm.dispose();
              }else{
			cm.warp(220080000);  
			cm.����(2, "[BOSS����]�����" + cm.getPlayer().getName() + "��ʼ��ս���ӣ���Ҷ���ս��ʹ���~");	
				cm.dispose();
                return;
	      }
      
            } else if (selection == 27) {//����
			var party = cm.getPlayer().getParty();	
			if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                cm.dispose();
			}else if(party.getMembers().size() < 1) {
	            cm.sendOk("��Ҫ 1 �����ϵ���Ӳ��ܽ��룡!");
                cm.dispose();
			//}else 
			}else if(cm.getLevel() < 70){
	            cm.sendOk("��Ҫ70�������볡.");
                cm.dispose();
				} else if (cm.getBossLog('dashu') >10) {
                    cm.sendOk("ÿ��ֻ�ܴ�10�δ�����");
                    cm.dispose();
			}else if(cm.getPlayer().getMeso() < 5000000){
	            cm.sendOk("��Ҫ500W�����볡.");
                cm.dispose();
			}else if (cm.getPlayerCount(541020800) > 0){
	            cm.sendOk("�Ѿ���������ս������.");
                cm.dispose();
			}else{
				cm.warpParty(541020800);
				cm.setBossLog("dashu");
				//cm.givePartyBossLog("����Boss");
				cm.gainMeso(-5000000);
				//cm.resetMap(541020800);
				cm.����(2, "[BOSS����]�����" + cm.getPlayer().getName() + "��ʼ��ս��������Ҷ���ս��ʹ���~");
                cm.dispose();
                return;
}
		  
        } else if (selection == 19) {//����
            var party = cm.getPlayer().getParty();	
			if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                cm.dispose();
			}else if(party.getMembers().size() < 1) {
	            cm.sendOk("��Ҫ 1 �����ϵ���Ӳ��ܽ��룡!");
                cm.dispose(); 
		}else	if(cm.getLevel() < 70){
	            cm.sendOk("��Ҫ70�������볡.");
                cm.dispose();
			}else if(cm.getPlayer().getMeso() < 15000000){
	            cm.sendOk("����Ҳ��㣬��Ҫ1500W�����볡.");
                cm.dispose();
			}else if (cm.getPlayerCount(910000018) > 0){
	            cm.sendOk("�Ѿ���������ս������.");
                cm.dispose();
			}else{
				cm.warpParty(910000018);
				cm.dispose();
                return;
	      }
        } else if (selection == 21) {//�������
            if (cm.getLevel() < 30 ) {  
            cm.sendOk("����ͼ���Ƶȼ�30������������û���ʸ�������");
                cm.dispose();
              }else{
			cm.warp(701010321);
			cm.����(2, "[BOSS����]�����" + cm.getPlayer().getName() + "��ʼ��ս������򼣬��Ҷ���ս��ʹ���~");				
				cm.dispose();
                return;
	      }
              } else if (selection == 22) {//ʨ�ӻ���
            if (cm.getLevel() < 70 ) {  
            cm.sendOk("����ͼ���Ƶȼ�70������������û���ʸ���սʨ�ӻ���");
                cm.dispose();
              }else{
			cm.warp(551030100);  
			cm.����(2, "[BOSS����]�����" + cm.getPlayer().getName() + "��ʼ��սʨ�ӻ��ܣ���Ҷ���ս��ʹ���~");	
				cm.dispose();
                return;
				 }
				} else if (selection == 23) {//糺�
            if (cm.getLevel() < 100 ) {  
            cm.sendOk("����ͼ���Ƶȼ�100������������û���ʸ���ս糺�");
                cm.dispose();
              }else{
			cm.warp(803001200);
			cm.����(2, "[BOSS����]�����" + cm.getPlayer().getName() + "��ʼ��ս糺죬��Ҷ���ս��ʹ���~");
                cm.dispose();
                return;
	      }  
            } else if (selection == 24) {//����
            var party = cm.getPlayer().getParty();	
			if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                cm.dispose();
			}else if(party.getMembers().size() < 1) {
	            cm.sendOk("��Ҫ 1 �����ϵ���Ӳ��ܽ��룡!");
                cm.dispose(); 
		}else	if(cm.getLevel() < 70){
	            cm.sendOk("��Ҫ70�������볡.");
                cm.dispose();
			}else if(cm.getPlayer().getMeso() < 20000000){
	            cm.sendOk("����Ҳ��㣬��Ҫ2000W�����볡.");
                cm.dispose();
			}else if (cm.getPlayerCount(910000019) > 0){
	            cm.sendOk("�Ѿ���������ս������.");
                cm.dispose();
			}else{
				cm.warpParty(910000019);
				cm.dispose();
                return;
	      }
		} else if (selection == 26) {//����
            if (cm.getLevel() < 70 ) {  
				cm.sendOk("����ͼ���Ƶȼ�70������������û���ʸ���ս�޴������");
                cm.dispose();
            }else{
				cm.warp(105100100,0);  //ÿ�δ��͵���ͼ�м�
				cm.����(2, "[BOSS����]�����" + cm.getPlayer().getName() + "��ʼ��ս��ħ�����~");
				cm.dispose();
                return;
	        } 	

} else if (selection == 70) {//��ɮ
            if (cm.getLevel() < 130 ) {  
				cm.sendOk("����ͼ���Ƶȼ�130������������û���ʸ���ս��ɮ");
                cm.dispose();
            }else{
				cm.warp(702070400,0);  //ÿ�δ��͵���ͼ�м�
				cm.����(2, "[BOSS����]�����" + cm.getPlayer().getName() + "��ʼ��ս��ɮ~");
				cm.dispose();
                return;
	        } 	
			
		} else if (selection == 25) {//�ռ�
            var party = cm.getPlayer().getParty();	
			if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                cm.dispose();
			}else if(party.getMembers().size() < 1) {
	            cm.sendOk("��Ҫ 1 �����ϵ���Ӳ��ܽ��룡!");
                cm.dispose(); 
		}else	if(cm.getLevel() < 200){
	            cm.sendOk("��Ҫ200�������볡.");
                cm.dispose();
			}else if(cm.getPlayer().getMeso() < 20000000){
	            cm.sendOk("����Ҳ��㣬��Ҫ2000W�����볡.");
                cm.dispose();
			}else if (cm.getPlayerCount(910000020) > 0){
	            cm.sendOk("�Ѿ���������ս�ռ�BOSS��.");
                cm.dispose();
			}else{
				cm.warpParty(910000020);
				cm.dispose();
                return;
	      }
        }
    }
}
