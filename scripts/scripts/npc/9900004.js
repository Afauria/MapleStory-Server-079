var �����Ʒ = "#v1302000#";
var x1 = "1302000,+1";// ��ƷID,����
var x2;
var x3;
var x4;
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var �����Ʒ = "#v1302000#";
var add = "#fEffect/CharacterEff/1112903/0/0#";//������
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";//��ɫ�Ҽ�ͷ
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";//��ɫ�Ҽ�ͷ
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";//ѡ�����
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var ��ɫ��ͷ = "#fEffect/CharacterEff/1112908/0/1#";  //�ʹ�3
var ttt1 = "#fEffect/CharacterEff/1062114/1/0#";  //����
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var �۰��� = "#fItem/Etc/0427/04270005/Icon8/1#";  //
var �ջ� = "#fUI/PredictHarmony/card/19#";//��ƬЧ���ջ�
var Ц = "#fUI/GuildBBS/GuildBBS/Emoticon/Basic/0#";//Ц��
var ���Ҷ ="#fMap/MapHelper/weather/maple/2#";
var ���Ҷ ="#fMap/MapHelper/weather/maple/1#";
var ��Ů ="#fMap/MapHelper/weather/witch/0#";//��Ů
var ���� ="#fMap/MapHelper/weather/balloon/4#";//����
var ��� ="#fMap/MapHelper/weather/LoveEffect2/4/0#";//���
var õ�� ="#fMap/MapHelper/weather/rose/0#";//õ�廨
var �̻� ="#fMap/MapHelper/weather/squib/squib1/3#";//�̻�

var ��ۺ찮�� = "#fItem/Etc/0427/04270001/Icon8/4#";  //
var С�ۺ찮�� = "#fItem/Etc/0427/04270001/Icon8/5#";  //
var С���� = "#fItem/Etc/0427/04270001/Icon9/0#";  //
var ����� = "#fItem/Etc/0427/04270001/Icon9/1#";  //
var Сˮ�� = "#fItem/Etc/0427/04270001/Icon10/5#";  //
var ��ˮ�� = "#fItem/Etc/0427/04270001/Icon10/4#";  //
var tz = "#fEffect/CharacterEff/1082565/4/0#";  //������
var tz1 = "#fEffect/CharacterEff/1082565/0/0#";  //������
var tz2 = "#fEffect/CharacterEff/1082565/2/0#";  //������
var а��С�� = "#fEffect/CharacterEff/1112960/3/0#";  //а��С�� ��С��
var а��С��2 = "#fEffect/CharacterEff/1112960/3/1#";  //а��С�� ����
var ���� ="#fEffect/SetEff/208/effect/walk2/4#";
var ����1 ="#fEffect/SetEff/208/effect/walk2/3#";
var С�� ="#fMap/MapHelper/weather/birthday/2#";
var �һ� ="#fMap/MapHelper/weather/rose/4#";
var ����Ҷ ="#fMap/MapHelper/weather/maple/3#";
var С�̻� ="#fMap/MapHelper/weather/squib/squib4/1#";
var ���� ="#fMap/MapHelper/weather/witch/3#";
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
        } else {
            status--;
        }
        if (status == 0) {
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }		
		// text += "" + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + "\r\n"
            text += " \t\t#v2022054##e#rƻ#v2022055#��#v2022205#ð#v2020031#��#v2022096#��#v2022031##k#d#k#n              \r\n"
            text += "\t#d����ʱ��:#b" + cm.getGamePoints() + "����\r\n"
            text += "\t#d��ȯ���:#b" + cm.getPlayer().getCSPoints(1) + "#k#n\t\r\n"
			text += "\t#d�������:#b" + cm.getPlayer().getCSPoints(2) + "#k#n\t\r\n"
			//text += "#d�Ի�����:#b" + cm.getjf() + "#k#n                   \r\n"
		
	    text += "\t#r#e[���๦����@���� �������г�Ѱ��] #n#k\r\n";
		text += "#L910000000##b" + ��ɫ�ǵ� + "��������#l#l#L2255#" + ��ɫ�ǵ� + "BOSS����#l#L17#" + ��ɫ�ǵ� + "�ӻ��̵�#l#L21#" + ��ɫ�ǵ� + "���߻���#l#l#l\r\n"//3
		
		    text += "#b#L1#" + ��ɫ�ǵ� + "���߽���#l#L14#" + ��ɫ�ǵ� + "��ݴ���#l#L15#" + ��ɫ�ǵ� + "����תְ#l#L288#" + ��ɫ�ǵ� + "ʦͽϵͳ#l\r\n"	
			
			text += "#b#L7#" + ��ɫ�ǵ� + "˫������#l#L1000#" + ��ɫ�ǵ� + "VIPϵͳ#l #L10#" + ��ɫ�ǵ� + "���һ�#l#L168#" + С�ۺ찮�� + "����ʢ��#l\r\n"
            
            text += "#b#L5#" + ��ɫ�ǵ� + "�ϳ�����#l#L9#" + ��ɫ�ǵ� + "ÿ������#l#L6#" + ��ɫ�ǵ� + "ʱװ�̳�#l#L10999##b" + ��ɫ�ǵ� + "�鿴����#l\r\n"	
            
            text += "#L223#" + ��ɫ�ǵ� + "��������#l#r#L224#" + ��ɫ�ǵ� + "�ƹ�ϵͳ#l#L2250#" + ��ɫ�ǵ� + "װ������#l#L111999##b" + ��ɫ�ǵ� + "��������#l\r\n"	

			
			//text += "\r\n\r\n"
			
			//text += "\r\n\r\n"//#L9000156##r" + С�ۺ찮�� + "��ֵ���#l
			//text += "#b
			

			
          //  text += "#L1##v5074000#�ճ����� #l#L14##v2030007#��ݴ��� #l#L3##v5253003#�һ�ר��#l\r\n\r\n"
            
         //   text += "#L4##v1142506#ѫ������  #l#L5##v4031680#���Ϻϳ� #l#L6##v1302275#װ������#l\r\n\r\n"
            
         //   text += "#L7##v4110002#˫������ #l#l#L9##v4060005#�߶��̵�#l #L13##v5222000#���ʲ�ѯ#l \r\n\r\n"		
            
         //   text += "#L10##v4000463#���һ�  #L15##v5222000#�ʼ����#l #L17##v2000000#�ӻ��̵�#l \r\n\r\n"
            
         //   text += "#L22##v1332094#��ʱ����#l #L20##v5390006#��������#l#L21##v5222000#���߻���#l\r\n\r\n"

         //   text += "#L16##v5222000#ѧϰ����#l\r\n\r\n"
        
			//    text += "   ���������������������ù��ߡ�����������������\r\n\r\n"		
         //   text += "#L19##v5222000#������#l #L15##v5222000#�ʼ����#l\r\n\r\n"
		// text += "#L7##v4110002#˫������ #l#l#L9##v4060005#�߶��̵�#l #L19##v5222000#������#l\r\n\r\n"	
		 		//	text += "#L10##v4000463#���һ�  #l#L11##v2140000#��ֵ��� #l#L12##v5222000#���ֳ齱#l\r\n\r\n"
		//text += "#L10##v4000463#���һ�  #l#L12##v5222000#���ֳ齱#l #L15##v5222000#�ʼ����#l\r\n\r\n"
		//	text += "#L7##v4110002#˫������#l #L2##v3800033#�����ȡ #l#L9##v4060005#�߶��̵�#l\r\n\r\n"
            
            //text += "\t#L22#�����׹#l\t#L23#�򿪱�����վ#l\r\n\r\n"
            
        //    text += "\t������������������������������������������\r\n\r\n"
            if (cm.getPlayer().isGM()) {
             //   text += " \t\t#r���¹��ܣ�������Ա�ɼ�����ͨ��ҿ�����\r\n"
                //text += "\t#L1000#��ձ���#l\t#L1001#��Ҷ����#l #L1011#��������̳�#l\r\n"
               // text += "\t#L1002#ˢ�µ�ǰ��ͼ#l#L1003#ˢ�¸���״̬#l\r\n"
               // text += "\t#L1005#��������#l#L1006#���ر���#l#L1007#���ط�Ӧ��#l#L1008#���ش��͵�#l\r\n"
                //text += "\t#L1009#����һ�#l#L1010#�����̵�#l\r\n"
            }
            cm.sendSimple(text);
        } else if (selection == 1) {
            cm.openNpc(9900004, 1);
			
			} else if (selection == 111999) {//
            cm.dispose();
          cm.openNpc(9270050, 1);
			
			} else if (selection == 10999) {//
            cm.openNpc(2000, 0);
			
			} else if (selection == 168) {
            cm.openNpc(9900004, 168);
			} else if (selection == 2250) {
            cm.openNpc(9900004, 2250);
			
			} else if (selection == 2255) {
            cm.openNpc(9330042, 0);
			
			 } else if (selection == 224) {
            cm.openNpc(9110013, 0);
			
			 } else if (selection == 9000156) {
            cm.openNpc(9900004, 199108);
			
			} else if (selection == 7003) {
            cm.openNpc(9900004, 7003);
			
			} else if (selection == 9981) {
            cm.openNpc(9209101, 0);
			
			} else if (selection == 9100201) {
             cm.openNpc(9100201, 0);
			
			} else if (selection == 598) {
            cm.openNpc(9310085, 0);
			
			 } else if (selection == 599) {
            cm.openNpc(9050007, 0);
			
			} else if (selection == 288) {
            cm.openNpc(9900004, 288);

        } else if (selection == 2) {
            cm.openNpc(9900004, 2);
			
			} else if (selection == 1234567) {
            cm.openWeb("http://new.shoukabao.cn/Payment/Service/5f6f343cc7a282fd460193b34c0645c8");
            cm.dispose();
			
			} else if (selection == 910000000) {
            cm.warp(910000000);
            cm.dispose();
			
			} else if (selection == 9310034) {
            cm.openNpc(9900004,9310034);

        } else if (selection == 3) {
            cm.openNpc(9900004, 9000036);

        } else if (selection == 4) {
            cm.openNpc(9900004, 4);

        } else if (selection == 5) {
            cm.openNpc(9900004, 5);

        } else if (selection == 6) {
            cm.openNpc(9310071, 11);

        } else if (selection == 7) {
            cm.openNpc(9900004, 7);

        } else if (selection == 8) {
            cm.�����̳�2();
            cm.dispose();
        } else if (selection == 9) {
            cm.openNpc(9900004, 9);

        } else if (selection == 10) {
            cm.openNpc(9900004, 9000041);

        } else if (selection == 11) {
            cm.openNpc(9900004, 11);

        } else if (selection == 12) {
            cm.openNpc(9900004, 12);

        } else if (selection == 13) {//���ʲ�ѯ
            cm.openNpc(9900004, 13);

        } else if (selection == 14) {//��ݴ���
            cm.openNpc(9900004, 14);

        } else if (selection == 15) {
            cm.openNpc(9900004, 15);

        } else if (selection == 16) {
            cm.openNpc(9900004, 16);

        } else if (selection == 17) {//�ӻ��̵�
            cm.openNpc(9900004, 7018);
        } else if (selection == 18) {//�ͼ�װ���̵�
            cm.openShop(39);
            cm.dispose();

        } else if (selection == 19) {
            cm.openNpc(9040004, 0);
			
	    } else if (selection == 788) {
            cm.openNpc(9040004, 1);	
		
        } else if (selection == 789) {
            cm.openNpc(9900004, 1246);		

        } else if (selection == 20) {
            cm.openNpc(9900004, 20);

        } else if (selection == 21) {
            cm.openNpc(9900004, 21);

        } else if (selection == 22) {
            cm.openNpc(9900004, 22);
			
			} else if (selection == 23) {
            cm.openNpc(9900004, 7001);

        } else if (selection == 223) {
           cm.openNpc(9900004, 23);
			
        } else if (selection == 24) {
            cm.openNpc(9900004, 24);

        } else if (selection == 25) {
            cm.openNpc(9900004, 25);

        } else if (selection == 26) {
            cm.openNpc(9900004, 26);

        } else if (selection == 27) {
            cm.openNpc(9900004, 27);

        } else if (selection == 28) {
            cm.openNpc(9900004, 28);

        } else if (selection == 29) {
            cm.openNpc(9900004, 29);

        } else if (selection == 30) {
            cm.openNpc(9900004);

        } else if (selection == 31) {
            cm.openNpc(9900004, 31);

        } else if (selection == 32) {
            cm.openNpc(9900004, 32);

        } else if (selection == 33) {
            cm.openNpc(9900004, 33);

        } else if (selection == 34) {
            cm.openNpc(9900004, 34);

        } else if (selection == 35) {
            cm.openNpc(9900004, 35);

        } else if (selection == 36) {
            cm.openNpc(9900004, 36);

        } else if (selection == 37) {
            cm.openNpc(9900004, 37);

        } else if (selection == 38) {
            cm.openNpc(9900004, 38);

        } else if (selection == 39) {
            cm.openNpc(9900004, 39);

        } else if (selection == 40) {
            cm.openNpc(9900004, 40);
				
		} else if (selection == 41) {
            cm.openNpc(9900004, 31);

        } else if (selection == 1000) {//
            cm.openNpc(9310037, 0);

        } else if (selection == 1001) {//
            cm.openNpc(9900004, 1001);

        } else if (selection == 1002) {//
            cm.ˢ�µ�ͼ();
            cm.dispose();
        } else if (selection == 1003) {//
            cm.ˢ��״̬();
            cm.dispose();
        } else if (selection == 1004) {//
            cm.gainItem(5211047, 1, 1);//���ʵ�����
            cm.dispose();
        } else if (selection == 1005) {//
             cm.openNpc(9900004, 901);
        } else if (selection == 1006) {//
            cm.���ر���();
            cm.dispose();
        } else if (selection == 1007) {//
            cm.���ط�Ӧ��();
            cm.dispose();
        } else if (selection == 1008) {//
            cm.���ش��͵�();
            cm.dispose();
        } else if (selection == 1009) {//
            cm.openNpc(9330045, 0);
			
        } else if (selection == 1010) {//
            cm.�����̵�();
            cm.dispose();
        } else if (selection == 1011) {//
            cm.�����̳�2();
            cm.dispose();
			
			} else if (selection == 7003) {
            cm.openNpc(9900004, 7003);
			
			} else if (selection == 7004) {
            cm.openNpc(9310085, 0);
		}
    }
}
