var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
var ���� = "#fEffect/CharacterEff/1051295/0/0#";
var �ٷ� = "#fEffect/CharacterEff/1003252/0/0#";
var Сѩ�� = "#fEffect/CharacterEff/1003393/0/0#";
var ���� = "#fEffect/CharacterEff/1032063/0/0#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
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
			text += "            "+����+" #eÿ�������б�#n "+����+"\r\n"
			
			if(cm.getBossLog('ÿ������') < 1){
					text += "  #r#L1#"+����+"#eÿ������(����Ҿ���ÿ�ձ���)(#b�ɿ�ʼ#k)#n"+����+"#l\r\n"//3
					//text += "  #r#L2#"+����+"#eÿ���ͽ�(����Ҿ���ÿ�ձ���)(#b�ɿ�ʼ#k)#n"+����+"#l\r\n"//3
					//text += "#L7##r#e" + ��ɫ��ͷ + "ÿ��һ��������(��Ҫ#v4170002#X2 #v4170004#X1 #v4170007#X1)#l\r\n\r\n"
				//	text += ""+����+" #e˵����ÿ����ɷ���2�Ρ����1�Ρ����1�ο��콱#n \r\n"
				//	text += ""+����+" #e#b�������ߵ����1��+���͵���2��+1500W���+1000���þ�+����2��+�ɿ�������2��+��ݮ����1��+����1��#n \r\n"
					//text += "#eһ����˵����ÿ����ɷ���2�Ρ����1�Ρ����һ��\r\nһ����������1���ߵ����ˮ�� +���͵���2��+1500W��Ϸ��+1000���þ�+����2��+�ɿ�������2��+��ݮ����1��+����һ��#n"+����+"#l\r\n"//3
				//} else if(cm.getBossLog('ÿ������') == 12){
					//text += "  #L1#"+����+"#eÿ������  (��Ҳ��ϻ���ף����)(#r"+���+"#k)#n"+����+"#l\r\n"//3
				} else {
					//text += "  #L1#"+����+"#eÿ������ (��Ҳ��ϻ���ף��)(#r���ڽ���#k)#n"+����+"#l\r\n"//3
			}
			
			if(cm.getBossLog('ÿ��Ģ����') == 0){
					if (cm.haveItem(4000040,1)){
						//text += "  #L2#"+����+"#eÿ��Ź��Ģ����       (���50W)(#r�����#k)#n"+��̾��+"#l\r\n"//3
					}else{
						//text += "  #L2#"+����+"#eÿ��Ź��Ģ����       (���50W)(#b�ɿ�ʼ#k)#n"+����+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('ÿ��Ģ����') == 1){
					//text += "  #L2#"+����+"#eÿ��Ź��Ģ����       (���50W)(#r"+���+"#k)#n"+����+"#l\r\n"//3
				} else {
					//text += "		  "+�ٷ�+"#e   (#rlv.15#k)��������2   "+�ٷ�+"#l\r\n\r\n"//3
			}
			if(cm.getBossLog('ÿ�ս�ʬĢ����') == 0){
					if (cm.haveItem(4000176,1)){
					//text += "  #L3#"+����+"#eÿ��Ź��ʬĢ����   (���50W)(#r�����#k)#n"+��̾��+"#l\r\n"//3
					}else{
					//text += "  #L3#"+����+"#eÿ��Ź��ʬĢ����   (���50W)(#b�ɿ�ʼ#k)#n"+����+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('ÿ�ս�ʬĢ����') == 1){
					//text += "  #L3#"+����+"#eÿ��Ź��ʬĢ����   (���50W)(#r"+���+"#k)#n"+����+"#l\r\n"//3
				} else {
					//text += "		  "+�ٷ�+"#e   (#rlv.15#k)��������2   "+�ٷ�+"#l\r\n\r\n"//3
			}
			if(cm.getBossLog('ÿ����Ģ����') == 0){
					if (cm.haveItem(4001010,1)){
					//text += "  #L4#"+����+"#eÿ��Ź����Ģ����     (���50W)(#r�����#k)#n"+��̾��+"#l\r\n"//3
					}else{
					//text += "  #L4#"+����+"#eÿ��Ź����Ģ����     (���50W)(#b�ɿ�ʼ#k)#n"+����+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('ÿ����Ģ����') == 1){
					text += "  #L4#"+����+"#eÿ��Ź����Ģ����     (���50W)(#r"+���+"#k)#n"+����+"#l\r\n"//3
				} else {
					text += "		  "+�ٷ�+"#e   (#rlv.15#k)��������2   "+�ٷ�+"#l\r\n\r\n"//3
			}
			if(cm.getBossLog('ÿ�������') < 100){
					if (cm.haveItem(4001126,1)){
						text += "  #L5#"+����+"#eÿ��Ź�������       (���50W)(#r�����#k)#n"+��̾��+"#l\r\n"//3
					}else{
						text += "  #L5#"+����+"#eÿ��Ź�������       (���50W)(#b�ɿ�ʼ#k)#n"+����+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('ÿ�������') == 1){
					//text += "  #L5#"+����+"#eÿ��Ź�������       (���50W)(#r"+���+"#k)#n"+����+"#l\r\n"//3
				} else {
					text += "		  "+�ٷ�+"#e   (#rlv.15#k)��������2   "+�ٷ�+"#l\r\n\r\n"//3
			}
			if(cm.getBossLog('ÿ�ն��') == 0){
					if (cm.haveItem(4000460,1) && cm.haveItem(4000461,1) && cm.haveItem(4000462,1)){
					//text += "  #L6#"+����+"#eÿ��Ź�������Boss  (���400W)(#r�����#k)#n"+��̾��+"#l\r\n"//3
					}else{
					//text += "  #L6#"+����+"#eÿ��Ź�������Boss  (���400W)(#b�ɿ�ʼ#k)#n"+����+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('ÿ�ն��') == 1){
					//text += "  #L6#"+����+"#eÿ��Ź�������Boss  (���300W)(#r"+���+"#k)#n"+����+"#l\r\n"//3
				} else {
					//text += "		  "+�ٷ�+"#e   (#rlv.15#k)��������2   "+�ٷ�+"#l\r\n\r\n"//3
			}
			if(cm.getBossLog('ÿ�������') == 0){
					if (cm.haveItem(4000235,1)){
					//text += "  #L7#"+����+"#eÿ��Ź�������   (���&��ȯ)(#r�����#k)#n"+��̾��+"#l\r\n"//3
					}else{
					//text += "  #L7#"+����+"#eÿ��Ź�������   (���&��ȯ)(#b�ɿ�ʼ#k)#n"+����+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('ÿ�������') == 1){
					//text += "  #L7#"+����+"#eÿ��Ź�������   (���&��ȯ)(#r"+���+"#k)#n"+����+"#l\r\n"//3
				} else {
					//text += "		  "+�ٷ�+"#e   (#rlv.15#k)��������2   "+�ٷ�+"#l\r\n\r\n"//3
			}
			if(cm.getBossLog('ÿ����ӥ') == 0){
					if (cm.haveItem(4000243,1)){
					//text += "  #L8#"+����+"#eÿ��Ź����ӥ     (���&��ȯ)(#r�����#k)#n"+��̾��+"#l\r\n"//3
					}else{
					//text += "  #L8#"+����+"#eÿ��Ź����ӥ     (���&��ȯ)(#b�ɿ�ʼ#k)#n"+����+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('ÿ����ӥ') == 1){
					//text += "  #L8#"+����+"#eÿ��Ź����ӥ     (���&��ȯ)(#r"+���+"#k)#n"+����+"#l\r\n"//3
				} else {
					//text += "		  "+�ٷ�+"#e   (#rlv.15#k)��������2   "+�ٷ�+"#l\r\n\r\n"//3
			}
			if(cm.getBossLog('ÿ������') == 0){
					if (cm.haveItem(4000175,1)){
					//text += "  #L9#"+����+"#eÿ��Ź������        (���300W)(#r�����#k)#n"+��̾��+"#l\r\n"//3
					}else{
					//text += "  #L9#"+����+"#eÿ��Ź������        (���300W)(#b�ɿ�ʼ#k)#n"+����+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('ÿ������') == 1){
					//text += "  #L9#"+����+"#eÿ��Ź������        (���300W)(#r"+���+"#k)#n"+����+"#l\r\n"//3
				} else {
					//text += "		  "+�ٷ�+"#e   (#rlv.15#k)��������2   "+�ٷ�+"#l\r\n\r\n"//3
			}
			if(cm.getBossLog('ÿ���ϰ�') == 0){
					if (cm.haveItem(4000094,3)){
					//text += "  #L10#"+����+"#eÿ��Ź���ϰ�     (���㳡һ����)(#r�����#k)#n"+��̾��+"#l\r\n"//3
					}else{
					//text += "  #L10#"+����+"#eÿ��Ź���ϰ�     (���㳡һ����)(#b�ɿ�ʼ#k)#n"+����+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('ÿ���ϰ�') == 1){
					//text += "  #L10#"+����+"#eÿ��Ź���ϰ�     (���㳡һ����)(#r"+���+"#k)#n"+����+"#l\r\n"//3
				} else {
					//text += "		  "+�ٷ�+"#e   (#rlv.15#k)��������2   "+�ٷ�+"#l\r\n\r\n"//3
			}
			if(cm.getBossLog('ÿ������ħ') == 0){
					if (cm.haveItem(4001111,1)){
					//text += "  #L11#"+����+"#eÿ��Ź������ħ      (������� x2)(#r�����#k)#n"+��̾��+"#l\r\n"//3
					}else{
					//text += "  #L11#"+����+"#eÿ��Ź������ħ      (������� x2)(#b�ɿ�ʼ#k)#n"+����+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('ÿ���칷') == 1){
					//text += "  #L11#"+����+"#eÿ��Ź������ħ      (������� x2)(#r"+���+"#k)#n"+����+"#l\r\n"//3
				} else {
					//text += "		  "+�ٷ�+"#e   (#rlv.15#k)��������2   "+�ٷ�+"#l\r\n\r\n"//3
			}
			if(cm.getBossLog('ÿ������') == 0){
					if (cm.haveItem(4001083,1)){
					//text += "  #L12#"+����+"#eÿ��Ź������    (����� x4)(#r�����#k)#n"+��̾��+"#l\r\n"//3
					}else{
					//text += "  #L12#"+����+"#eÿ��Ź������    (����� x4)(#b�ɿ�ʼ#k)#n"+����+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('ÿ�մ���') == 1){
					//text += "  #L12#"+����+"#eÿ��Ź������    (����� x4)(#r"+���+"#k)#n"+����+"#l\r\n"//3
				} else {
					//text += "		  "+�ٷ�+"#e   (#rlv.15#k)��������2   "+�ٷ�+"#l\r\n\r\n"//3
			}
			
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9010009, 1);
		 } else if (selection == 2) {
		cm.openNpc(9010009, 20);
        } else if (selection == 3) {
		 if (cm.getBossLog('ÿ��Ģ����') >= 1) {
            cm.sendOk("ÿ��ֻ�ܶһ�1��Ŷ���������������Ұɣ�");
	    cm.dispose();
        }else{
			if (cm.haveItem(4000040,1)){
				if (cm.getLevel() > 59){
                cm.gainItem(4000040, -1);
				cm.gainMeso(+500000); //�Ӽ����	
				//cm.gainMeso(+2049100); //�Ӽ����	
				cm.����(1,"��ң�"+cm.getName()+" ���ÿ��Ź��Ģ�������������50W��");
                cm.sendOk("�һ��ɹ���");
            cm.setBossLog('ÿ��Ģ����');
                cm.dispose();
		}else{
                cm.sendOk("60���Ժ�ſ�������������");
                cm.dispose();
		 }
            }else{
                cm.sendOk("�ռ�#v4000040# 1�������ң�");
                cm.dispose();
            }
		 }
        } else if (selection == 3) {
		 if (cm.getBossLog('ÿ�ս�ʬĢ����') >= 1) {
            cm.sendOk("ÿ��ֻ�ܶһ�1��Ŷ���������������Ұɣ�");
	    cm.dispose();
        }else{
			if (cm.haveItem(4000176,1)){
				if (cm.getLevel() > 59){
                cm.gainItem(4000176, -1);
				cm.gainMeso(+500000); //�Ӽ����
				//cm.gainMeso(+2049100); //�Ӽ����	
				cm.����(1,"��ң�"+cm.getName()+" ���ÿ��Ź��ʬĢ�������������50W��");
                cm.sendOk("�һ��ɹ���");
            cm.setBossLog('ÿ�ս�ʬĢ����');
                cm.dispose();
		}else{
                cm.sendOk("60���Ժ�ſ�������������");
                cm.dispose();
		 }
            }else{
                cm.sendOk("�ռ�#v4000176# 1�������ң�");
                cm.dispose();
            }
		 }
        } else if (selection == 4) {
			if (cm.getBossLog('ÿ����Ģ����') >= 1) {
            cm.sendOk("ÿ��ֻ�ܶһ�1��Ŷ���������������Ұɣ�");
	    cm.dispose();
        }else{
			if (cm.haveItem(4001039,1)){
				if (cm.getLevel() > 59){
                cm.gainItem(4001039, -1);
				cm.gainMeso(+500000); //�Ӽ����
				//cm.gainMeso(+2049100); //�Ӽ����	
				cm.����(1,"��ң�"+cm.getName()+" ���ÿ��Ź����Ģ�������������50W��");
                cm.sendOk("�һ��ɹ���");
            cm.setBossLog('ÿ����Ģ����');
                cm.dispose();
		}else{
                cm.sendOk("60���Ժ�ſ�������������");
                cm.dispose();
		 }
            }else{
                cm.sendOk("�ռ�#v4001010# 1�������ң�");
                cm.dispose();
            }
		 }
        } else if (selection == 5) {
					if (cm.getBossLog('ÿ�������') > 200) {
						cm.sendOk("ÿ��ֻ����ս200��Ŷ���������������Ұɣ�");
						cm.dispose();
					}else{
						cm.warp(701010320);
						cm.dispose();
							//if (cm.haveItem(4031227,1)){
							//		if (cm.getLevel() > 59){
							//				cm.gainItem(4031227, -1);
							//				cm.gainMeso(+1000000); //�Ӽ����
										//cm.gainMeso(+2049100); //�Ӽ����	
							//				cm.����(1,"��ң�"+cm.getName()+" ���ÿ�ջ�����������������100W��");
							//				cm.sendOk("�һ��ɹ���");
								//			cm.setBossLog('ÿ�������');
							//				cm.dispose();
							//		}else{
							//				cm.sendOk("60���Ժ�ſ�������������");
							//				cm.dispose();
							//		}
							//}else{
							//	cm.sendOk("�ռ�#v4031227# 1�������ң�");
							//	cm.dispose();
							//}
					}
        } else if (selection == 6) {
					if (cm.getBossLog('ÿ�ն��') >= 1) {
						cm.sendOk("ÿ��ֻ�ܶһ�1��Ŷ���������������Ұɣ�");
						cm.dispose();
					}else{
							if (cm.haveItem(4000460,1) && cm.haveItem(4000461,1) && cm.haveItem(4000462,1)){
									if (cm.getLevel() > 119){
											cm.gainItem(4000460, -1);
											cm.gainItem(4000461, -1);
											cm.gainItem(4000462, -1);
											cm.gainMeso(+4000000); //�Ӽ����
										//cm.gainMeso(+2049100); //�Ӽ����	
											cm.����(1,"��ң�"+cm.getName()+" ���ÿ�ջ��������Boss���������400W��");
											cm.sendOk("�һ��ɹ���");
											cm.setBossLog('ÿ�ն��');
											cm.dispose();
									}else{
											cm.sendOk("120���Ժ�ſ�������������");
											cm.dispose();
									}
							}else{
								cm.sendOk("�ռ�#v4000460##v4000461##v4000462# ��1�������ң�");
								cm.dispose();
							}
					}
					
					} else if (selection == 7) {//����ŷ������Ҷ��Ӹ���
	   if (cm.getBossLog("fuben01") == 0 && cm.haveItem(4170002, 2) && cm.haveItem(4170004, 1) && cm.haveItem(4170007, 1)) {//��ȡ���ǩ��״̬
                cm.setBossLog('fuben01');//����ǩ������
                cm.sendOk("һ����������ȡ�ɹ���");
				//cm.gainDY(3000)
				cm.gainItem(4170002,-2);
				cm.gainItem(4170004,-1);
				cm.gainItem(4170007,-1);
				cm.gainItem(4251202,1);//�ߵ�ˮ��
				cm.gainMeso(+15000000);//���
				cm.gainDY(1000);
				cm.gainItem(2010006,2);//����
				cm.gainItem(2022279,2);//����
				cm.gainItem(2002031,1);//����
				cm.gainItem(2002033,2);//�ɿ���
				cm.gainItem(2022057,1);//����

                cm.����(1, "[����һ����]��" + cm.getPlayer().getName() + "������ͨ��Ŭ�������һ����������1���ߵ����ˮ�� +���͵���2��+1500W��Ϸ��+1000���þ�+����2��+�ɿ�������2��+��ݮ����1��+����һ��");
                cm.dispose();
            } else {
                cm.sendOk("����������ȡ�������ˣ��������Ĳ��ϲ��㣡");
                cm.dispose();
            }
        } else if (selection == 99) {
					if (cm.getBossLog('ÿ�������') >= 1) {
						cm.sendOk("ÿ��ֻ�ܶһ�1��Ŷ���������������Ұɣ�");
						cm.dispose();
					}else{
							if (cm.haveItem(4000235,1)){
									if (cm.getLevel() >= 70){
											cm.gainItem(4000235, -1);
											var rand = 0 + Math.floor(Math.random() * 2);  //�����
											if (rand==0){
											cm.gainMeso(+2000000); //�Ӽ����
											rand="���200W��";
												}else{
											cm.gainNX(300);	//�Ӽ���ȯ
											rand="��ȯ300�㣡"
												var bf="";
											}
										//cm.gainMeso(+2049100); //�Ӽ����	
											cm.����(1,"��ң�"+cm.getName()+" ���ÿ�ջ��������������"+rand);
											cm.sendOk("�һ��ɹ���");
											cm.setBossLog('ÿ�������');
											cm.dispose();
									}else{
											cm.sendOk("70���Ժ�ſ�������������");
											cm.dispose();
									}
							}else{
								cm.sendOk("�ռ�#v4000235# 1�������ң�");
								cm.dispose();
							}
					}
        } else if (selection == 8) {
					if (cm.getBossLog('ÿ����ӥ') >= 1) {
						cm.sendOk("ÿ��ֻ�ܶһ�1��Ŷ���������������Ұɣ�");
						cm.dispose();
					}else{
							if (cm.haveItem(4000243,1)){
									if (cm.getLevel() > 69){
											cm.gainItem(4000243, -1);
											var rand = 0 + Math.floor(Math.random() * 2);  //�����
											if (rand==0){
											cm.gainMeso(+2000000); //�Ӽ����
											rand="���200W��";
												}else{
											cm.gainNX(300);	//�Ӽ���ȯ
											rand="��ȯ300�㣡"
												var bf="";
											}
										//cm.gainMeso(+2049100); //�Ӽ����	
											cm.����(1,"��ң�"+cm.getName()+" ���ÿ�ջ�������ӥ������"+rand);
											cm.sendOk("�һ��ɹ���");
											cm.setBossLog('ÿ����ӥ');
											cm.dispose();
									}else{
											cm.sendOk("70���Ժ�ſ�������������");
											cm.dispose();
									}
							}else{
								cm.sendOk("�ռ�#v4000243# 1�������ң�");
								cm.dispose();
							}
					}
		} else if (selection == 9) {
					if (cm.getBossLog('ÿ������') >= 1) {
						cm.sendOk("ÿ��ֻ�ܶһ�1��Ŷ���������������Ұɣ�");
						cm.dispose();
					}else{
							if (cm.haveItem(4000175,1)){
									if (cm.getLevel() > 99){
											cm.gainItem(4000175, -1);
											cm.gainMeso(+3000000); //�Ӽ����
										//cm.gainMeso(+2049100); //�Ӽ����	
											cm.����(1,"��ң�"+cm.getName()+" ���ÿ�ջ����������������300W��");
											cm.sendOk("�һ��ɹ���");
											cm.setBossLog('ÿ������');
											cm.dispose();
									}else{
											cm.sendOk("100���Ժ�ſ�������������");
											cm.dispose();
									}
							}else{
								cm.sendOk("�ռ�#v4000175# 1�������ң�");
								cm.dispose();
							}
					}
		} else if (selection == 10) {
					if (cm.getBossLog('ÿ���ϰ�') >= 1) {
						cm.sendOk("ÿ��ֻ�ܶһ�1��Ŷ���������������Ұɣ�");
						cm.dispose();
					}else{
							if (cm.haveItem(4000094,3)){
									if (cm.getLevel() > 149){
											cm.gainItem(4000094, -3);
										cm.gainItem(3011000, 1, 1);//����
										cm.gainItem(5340001, 1,1);//���
										cm.gainItem(2300000, 100,1);//���
										//cm.gainMeso(+2049100); //�Ӽ����	
											cm.����(1,"��ң�"+cm.getName()+" ���ÿ�ջ����ϰ壡�������㳡һ��������");
											cm.sendOk("�һ��ɹ���");
											cm.setBossLog('ÿ���ϰ�');
											cm.dispose();
									}else{
											cm.sendOk("150���Ժ�ſ�������������");
											cm.dispose();
									}
							}else{
								cm.sendOk("�ռ�#v4000094# 3�������ң�");
								cm.dispose();
							}
					}
		} else if (selection == 11) {
					if (cm.getBossLog('ÿ������ħ') >= 1) {
						cm.sendOk("ÿ��ֻ�ܶһ�1��Ŷ���������������Ұɣ�");
						cm.dispose();
					}else{
							if (cm.haveItem(4001111,1)){
									if (cm.getLevel() > 69){
											cm.gainItem(4001111, -1);
											cm.gainItem(4002000, 5);
											cm.����(1,"��ң�"+cm.getName()+" ���ÿ�ջ�������ħ��������Ʊx5��");
											cm.sendOk("�һ��ɹ���");
											cm.setBossLog('ÿ������ħ');
											cm.dispose();
									}else{
											cm.sendOk("70���Ժ�ſ�������������");
											cm.dispose();
									}
							}else{
								cm.sendOk("�ռ�#v4001111# 1�������ң�");
								cm.dispose();
							}
					}
		} else if (selection == 12) {
					if (cm.getBossLog('ÿ������') >= 1) {
						cm.sendOk("ÿ��ֻ�ܶһ�1��Ŷ���������������Ұɣ�");
						cm.dispose();
					}else{
							if (cm.haveItem(4001083,1)){
									if (cm.getLevel() > 99){
											cm.gainItem(4001083, -1);
											cm.gainItem(4000463, 4);
											cm.����(1,"��ң�"+cm.getName()+" ���ÿ�ջ���������������������x4��");
											cm.sendOk("�һ��ɹ���");
											cm.setBossLog('ÿ������');
											cm.dispose();
									}else{
											cm.sendOk("100���Ժ�ſ�������������");
											cm.dispose();
									}
							}else{
								cm.sendOk("�ռ�#v4001083# 1�������ң�");
								cm.dispose();
							}
					}
		} 
    }
}






