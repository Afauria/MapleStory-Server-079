importPackage(net.sf.odinms.client);

var status = 0;
var fee;
var chance = Math.floor(Math.random()*9+1);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("ҡһҡ���д󽱡�");
            cm.dispose();
            return;
        }
		if(cm.getBossLog("1") == 0 ){
    		cm.sendOk("���һ�����뻹ûҡ�ء�");
    		cm.dispose();
    		return;
			 }
		
    	if(cm.getBossLog("2") > 0 ){
    		cm.sendOk("�ڶ��������Ѿ�ҡ���ˡ�");
    		cm.dispose();
    		return;
			 }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendAcceptDecline("�����ǵڶ�������ҡ�š�");
        } else if (status == 1) {
            cm.sendAcceptDecline("��ȷ��Ҫҡ��");

        } else if (status == 2) {
            if (cm.getMeso() < fee) {
                cm.sendOk("Ŷ�ǣ�������˼��û��ô��Ǯ�ˣ�ȥ׬��Ǯ�����ɣ���ɲ�����ѵ�,��ȥ����һЩ����������!");
                cm.dispose();
            //} else if (cm.getMeso() < 100) {
               // cm.sendOk("����ȷ������Ľ�Ҳ��ܵ���#r50000000!");
              //  cm.dispose();
           // } else if (cm.getText() < 100) {
               // cm.sendOk("#i3994125# ����#r10000000#k��ң����㻹��ȥ��ĶĲ�����ɡ�");
               // cm.dispose();
            } else {
                 if (chance <= 1) { 
	                     
						cm.setBossLog("2");
	                    cm.sendNext("���ȡ���˺���#r 1 #k"); 
                        cm.dispose(); 
	                } 
	                else if (chance == 2) { 
	                     
	                     cm.setBossLog("2");
						 cm.setBossLog("2");
	                     cm.sendNext("���ȡ���˺���#r 2 #k"); 
	                     cm.dispose(); 
	                } 
					else if (chance == 3) { 
	                     
	                    cm.setBossLog("2");
						cm.setBossLog("2");
						cm.setBossLog("2");
	                    cm.sendNext("���ȡ���˺���#r 3 #k"); 
	                    cm.dispose(); 
	                } 
					else if (chance == 4) { 
	                     
	                    cm.setBossLog("2");
						cm.setBossLog("2");
						cm.setBossLog("2");
						cm.setBossLog("2");
	                    cm.sendNext("���ȡ���˺���#r 4 #k"); 
	                    cm.dispose(); 
				   }else if (chance == 5) { 
	                     
	                    cm.setBossLog("2");
						cm.setBossLog("2");
						cm.setBossLog("2");
						cm.setBossLog("2");
						cm.setBossLog("2");
	                    cm.sendNext("���ȡ���˺���#r 5 #k"); 
	                    cm.dispose(); 
					}else if (chance == 6) { 
	                    
	                    cm.setBossLog("2");
						cm.setBossLog("2");
						cm.setBossLog("2");
						cm.setBossLog("2");
						cm.setBossLog("2");
						cm.setBossLog("2");
	                    cm.sendNext("���ȡ���˺���#r 6 #k"); 
	                    cm.dispose(); 
					}else if (chance == 7) { 
	                   
	                    cm.setBossLog("2");
						cm.setBossLog("2");
						cm.setBossLog("2");
						cm.setBossLog("2");
						cm.setBossLog("2");
						cm.setBossLog("2");
						cm.setBossLog("2");
	                    cm.sendNext("���ȡ���˺���#r 7 #k"); 
	                    cm.dispose(); 
					}else if (chance == 8) { 
	                    
	                    cm.setBossLog("2");
						cm.setBossLog("2");
						cm.setBossLog("2");
						cm.setBossLog("2");
						cm.setBossLog("2");
						cm.setBossLog("2");
						cm.setBossLog("2");
						cm.setBossLog("2");
	                    cm.sendNext("���ȡ���˺���#r 8 #k"); 
	                    cm.dispose(); 
					}else if (chance == 9) { 
	                    
	                    cm.setBossLog("2");
						cm.setBossLog("2");
						cm.setBossLog("2");
						cm.setBossLog("2");
						cm.setBossLog("2");
						cm.setBossLog("2");
						cm.setBossLog("2");
						cm.setBossLog("2");
						cm.setBossLog("2");
						
	                    cm.sendNext("���ȡ���˺���#r 9 #k"); 
	                    cm.dispose(); 



                }
            }
        }
    }
			
}
