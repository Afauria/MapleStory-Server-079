//odinms_MS
importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.client);

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			
			cm.sendSimple("\t\t\t\t\t#e#r��ӭ������ȯ����ϵͳ����#n\r\n#d====================================================\r\n#dĿǰ�˻�ʣ���ȯ:"+ cm.getPlayer().getNX() + "\r\n====================================================#b#n\r\n#L2##b#e�һ����200��  ��Ҫ��ȯ2ǧ#v4031039##b#n\r\n#L3##b#e�һ����500��  ��Ҫ��ȯ5ǧ#v4031039##b#n\r\n");
			} else if (status == 1) {
                  if (selection == 1) {
		  cm.sendOk("\t\t\t#e#b��ȯ�Ļ�ȡ���������˱ؿ���#n#d\r\n====================================================#k\r\n����һ��װ�������Կ�Ŭ����ã����ͣ�#k#d\r\n====================================================#k\r\n��Ҫ��ø�����Ϣ��ѯ����������ǵĽ���Ⱥһ������#r#d\r\n");
	          cm.dispose();
                  }else if(selection == 2){ 	           
			    if(cm.getPlayer().getNX() > 2000){
                cm.sendOk("#b#e��ϲ�����#r#e�����200��");
                cm.gainMeso(2000000)
                cm.gainNX(-2000);
                cm.����(3,"��ϲ���[" + cm.getChar().getName() + "]�һ����200��ɹ�����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�ĵ�ȯ���й���,��Ŭ����.");
                cm.dispose();
                  }
                  }else if(selection == 3){ 	           
			    if(cm.getPlayer().getNX() > 5000){
                cm.sendOk("#b#e��ϲ�����#r#e�����500��.");
                cm.gainMeso(5000000)
                cm.gainNX(-5000);
                cm.����(3,"��ϲ���[" + cm.getChar().getName() + "]�һ����500��ɹ�����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�ĵ�ȯ���й���,��Ŭ���ռ���.");
                cm.dispose();
                  }
                  }else if(selection == 4){ 	           
			    if(cm.getPlayer().getNX() > 60000){
                cm.sendOk("#b#e��ϲ�����#r#e����ά˫��+60 VIP��ʯ��ָһö��.");
                cm.gainItem(1112138,60,60,60,60,666,666,60,60,0,0,0,0,0,0);
                cm.gainNX(-60000);
                cm.����(3,"��ϲ���[" + cm.getChar().getName() + "]��ά˫��+60   VIP�ƽ��ָһö����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�ĵ�ȯ���й���,��Ŭ���ռ���.");
                cm.dispose();
                  }
                  }else if(selection == 5){ 	           
			    if(cm.getPlayer().getNX() > 30000){
                cm.sendOk("#r#e��ϲ�������ά20+˫��20�����Ե�װ-͸������.");
                cm.gainItem(1032024,20,20,20,20,0,0,20,20,0,0,0,0,0,0);
                cm.gainNX(-30000);
                cm.����(3,"��ϲ���[" + cm.getChar().getName() + "]�������ά20+˫��20�����Ե�װ-͸����������");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�ĵ�ȯ���й���,��Ŭ���ռ���.");
                cm.dispose();
                  }
                  }else if(selection == 6){ 	           
			    if(cm.getPlayer().getNX() > 30000){
                cm.sendOk("#r#e��ϲ�������ά20+˫��20�����Ե�װ-͸��ñ��.");
                cm.gainItem(1002186,20,20,20,20,0,0,20,20,0,0,0,0,0,0);
                cm.gainNX(-30000);
                cm.����(3,"��ϲ���[" + cm.getChar().getName() + "]�������ά20+˫��20�����Ե�װ-͸��ñ�ӣ���");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�ĵ�ȯ���й���,��Ŭ���ռ���.");
                cm.dispose();
                  }
                }else if(selection == 7){ 	           
					if(cm.getPlayer().getNX() > 30000){
						cm.sendOk("#r#e��ϲ�������ά20+˫��20�����Ե�װ-͸������.");
						cm.gainItem(1082102,20,20,20,20,0,0,20,20,0,0,0,0,0,0);
						cm.gainNX(-30000);
						cm.����(3,"��ϲ���[" + cm.getChar().getName() + "]�������ά20+˫��20�����Ե�װ-͸�����ף���");
						cm.dispose();		
					}else{ 
						cm.sendOk("#b��û���㹻�ĵ�ȯ���й���,��Ŭ���ռ���.");
						cm.dispose();
					}
				}else if(selection == 8){ 	           
					if(cm.getPlayer().getNX() > 30000){
						cm.sendOk("#r#e��ϲ�������ά20+˫��20�����Ե�װ-͸��Ь.");
						cm.gainItem(1072153,20,20,20,20,0,0,20,20,0,0,0,0,0,0);
						cm.gainNX(-30000);
						cm.����(3,"��ϲ���[" + cm.getChar().getName() + "]�������ά20+˫��20�����Ե�װ-͸��Ь����");
						cm.dispose();		
					}else{ 
						cm.sendOk("#b��û���㹻�ĵ�ȯ���й���,��Ŭ���ռ���.");
						cm.dispose();
						
					}
				}else if(selection == 11){ 	           
					if(cm.getPlayer().getNX() > 30000){
						cm.sendOk("#r#e��ϲ�������ά20+˫��20�����Ե�װ-͸������.");
						cm.gainItem(1102039,20,20,20,20,0,0,20,20,0,0,0,0,0,0);
						cm.gainNX(-30000);
						cm.����(3,"��ϲ���[" + cm.getChar().getName() + "]�������ά20+˫��20�����Ե�װ-͸�����磡��");
						cm.dispose();		
					}else{ 
						cm.sendOk("#b��û���㹻�ĵ�ȯ���й���,��Ŭ���ռ���.");
						cm.dispose();	
					}
				} else if(selection == 9){ 	           
					if(cm.getPlayer().getNX() > 30000){
						cm.sendOk("#r#e��ϲ�������ά20+˫��20�����Ե�װ-͸������.");
						cm.gainItem(1022048,20,20,20,20,0,0,20,20,0,0,0,0,0,0);
						cm.gainNX(-30000);
						cm.����(3,"��ϲ���[" + cm.getChar().getName() + "]�������ά20+˫��20�����Ե�װ-͸�����Σ���");
						cm.dispose();		
					}else{ 
						cm.sendOk("#b��û���㹻�ĵ�ȯ���й���,��Ŭ���ռ���.");
						cm.dispose();
					}
				} else if(selection == 10){ 	           
					if(cm.getPlayer().getNX() > 30000){
						cm.sendOk("#r#e��ϲ�������ά20+˫��20�����Ե�װ-͸�����.");
						cm.gainItem(1012057,20,20,20,20,0,0,20,20,0,0,0,0,0,0);
						cm.gainNX(-30000);
						cm.����(3,"��ϲ���[" + cm.getChar().getName() + "]�������ά20+˫��10�����Ե�װ-͸����ߣ���");
						cm.dispose();		
					}else{ 
						cm.sendOk("#b��û���㹻�ĵ�ȯ���й���,��Ŭ���ռ���.");
						cm.dispose();
					}
				}
	}
    }
}
