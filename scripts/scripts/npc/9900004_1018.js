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
			
			cm.sendSimple("\t\t\t#e#r��ӭ����BOSS���ϻ���ϵͳ����#n\r\n#d====================================================\r\n#dĿǰ�˻�ʣ����:"+ cm.getPlayer().getMeso() + "\r\n====================================================#b#n\r\n#L2##b#e�һ�1��ʱ����ƬD ��Ҫ���500w#v4031179##b#n\r\n#L3##b#e�һ�1���λ������� ��Ҫ���500w#v4032246##b#n\r\n#L4##b#e�һ�1������֮�� ��Ҫ���500w#v4001017#\r\n#L5##b#e�һ�1����߽��� ��Ҫ���500w#v4031172#\r\n");
			} else if (status == 1) {
                  if (selection == 1) {
		  cm.sendOk("\t\t\t#e#b��ȯ�Ļ�ȡ���������˱ؿ���#n#d\r\n====================================================#k\r\n����һ��װ�������Կ�Ŭ����ã����ͣ�#k#d\r\n====================================================#k\r\n��Ҫ��ø�����Ϣ��ѯ����������ǵĽ���Ⱥһ������#r#d\r\n");
	          cm.dispose();
                  }else if(selection == 2){ 	           
			    if(cm.getMeso() >= 5000000){
                cm.sendOk("#b#e��ϲ�����#r#e��ʱ����ƬD 1����");
                cm.gainItem(4031179,1);
			    cm.gainMeso(-5000000);
                cm.����(3,"��ϲ���[" + cm.getChar().getName() + "]�һ�ʱ����ƬD 1���ɹ�����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ľ�ҽ��й���,��Ŭ����.");
                cm.dispose();
                  }
                  }else if(selection == 3){ 	           
			   if(cm.getMeso() >= 5000000){
                cm.sendOk("#b#e��ϲ�����#r#e���λ�����С�� 1����.");
                cm.gainItem(4032246,1);
				
                cm.gainMeso(-5000000);
                cm.����(3,"��ϲ���[" + cm.getChar().getName() + "]�һ��λ�����С�� 1���ɹ�����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ľ�ҽ��й���,��Ŭ���ռ���.");
                cm.dispose();
                  }
                  }else if(selection == 4){ 	           
			    if(cm.getMeso() >= 5000000){
                cm.sendOk("#b#e��ϲ�����#r#e������֮�� 1����.");
                cm.gainItem(4001017,1);
				
                cm.gainMeso(-5000000);
                cm.����(3,"��ϲ���[" + cm.getChar().getName() + "]�һ�����֮�� 1���ɹ�����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ľ�ҽ��й���,��Ŭ���ռ���.");
                cm.dispose();
                  }
                  }else if(selection == 5){ 	           
			  if(cm.getMeso() >= 5000000){
                cm.sendOk("#b#e��ϲ�����#r#e����߽��� 1����.");
                cm.gainItem(4031172,1);
				
                cm.gainMeso(-5000000);
                cm.����(3,"��ϲ���[" + cm.getChar().getName() + "]�һ���߽��� 1���ɹ�����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ľ�ҽ��й���,��Ŭ���ռ���.");
                cm.dispose();
                  }
                  }else if(selection == 6){ 	           
			    if(cm.getPlayer().getNX() > 50000){
                cm.sendOk("#b#e��ϲ�����#r#e������С����һ�ס�.");
                cm.gainItem(1132173,1);
				cm.gainItem(1102480,1);
				cm.gainItem(1072741,1);
                cm.gainNX(-50000);
                cm.����(3,"��ϲ���[" + cm.getChar().getName() + "]�һ�����С����һ�׳ɹ�����");
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
