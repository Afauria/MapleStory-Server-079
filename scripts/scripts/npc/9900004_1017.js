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
			
			cm.sendSimple("\t\t\t\t\t#e#r��ӭ������ȯ����ϵͳ����#n\r\n#d====================================================\r\n#dĿǰ�˻�ʣ���ȯ:"+ cm.getPlayer().getNX() + "\r\n====================================================#b#n\r\n#L2##b#e�һ�սʿС����һ�� ��Ҫ��ȯ10��#v1132169##v1102476##v1072737##b#n\r\n#L3##b#e�һ���ʦС����һ�� ��Ҫ��ȯ10��#v1132170##v1102477##v1072738##b#b#n\r\n#L4##b#e�һ�������С����һ�� ��Ҫ��ȯ10��#v1132171##v1102478##v1072739#\r\n#L5##b#e�һ�����С����һ�� ��Ҫ��ȯ10��#v1132172##v1102479##v1072740#\r\n#L6##b#e�һ�����С����һ�� ��Ҫ��ȯ10��#v1132173##v1102480##v1072741#");
			} else if (status == 1) {
                  if (selection == 1) {
		  cm.sendOk("\t\t\t#e#b��ȯ�Ļ�ȡ���������˱ؿ���#n#d\r\n====================================================#k\r\n����һ��װ�������Կ�Ŭ����ã����ͣ�#k#d\r\n====================================================#k\r\n��Ҫ��ø�����Ϣ��ѯ����������ǵĽ���Ⱥһ������#r#d\r\n");
	          cm.dispose();
                  }else if(selection == 2){ 	           
			    if(cm.getPlayer().getNX() > 100000){
                cm.sendOk("#b#e��ϲ�����#r#e��սʿС����һ�ס�");
                cm.gainItem(1132169,1);
				cm.gainItem(1102476,1);
				cm.gainItem(1072737,1);
                cm.gainNX(-100000);
                cm.����(3,"��ϲ���[" + cm.getChar().getName() + "]�һ�սʿС����һ�׳ɹ�����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�ĵ�ȯ���й���,��Ŭ����.");
                cm.dispose();
                  }
                  }else if(selection == 3){ 	           
			    if(cm.getPlayer().getNX() > 100000){
                cm.sendOk("#b#e��ϲ�����#r#e����ʦС����һ�ס�.");
                cm.gainItem(1132170,1);
				cm.gainItem(1102477,1);
				cm.gainItem(1072738,1);
                cm.gainNX(-100000);
                cm.����(3,"��ϲ���[" + cm.getChar().getName() + "]�һ���ʦС����һ�׳ɹ�����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�ĵ�ȯ���й���,��Ŭ���ռ���.");
                cm.dispose();
                  }
                  }else if(selection == 4){ 	           
			    if(cm.getPlayer().getNX() > 100000){
                cm.sendOk("#b#e��ϲ�����#r#e��������С����һ�ס�.");
                cm.gainItem(1132171,1);
				cm.gainItem(1102478,1);
				cm.gainItem(1072739,1);
                cm.gainNX(-100000);
                cm.����(3,"��ϲ���[" + cm.getChar().getName() + "]�һ�������С����һ�׳ɹ�����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�ĵ�ȯ���й���,��Ŭ���ռ���.");
                cm.dispose();
                  }
                  }else if(selection == 5){ 	           
			    if(cm.getPlayer().getNX() > 100000){
                cm.sendOk("#b#e��ϲ�����#r#e������С����һ�ס�.");
                cm.gainItem(1132172,1);
				cm.gainItem(1102479,1);
				cm.gainItem(1072740,1);
                cm.gainNX(-100000);
                cm.����(3,"��ϲ���[" + cm.getChar().getName() + "]�һ�����С����һ�׳ɹ�����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�ĵ�ȯ���й���,��Ŭ���ռ���.");
                cm.dispose();
                  }
                  }else if(selection == 6){ 	           
			    if(cm.getPlayer().getNX() > 100000){
                cm.sendOk("#b#e��ϲ�����#r#e������С����һ�ס�.");
                cm.gainItem(1132173,1);
				cm.gainItem(1102480,1);
				cm.gainItem(1072741,1);
                cm.gainNX(-100000);
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
