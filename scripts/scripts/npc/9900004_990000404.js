importPackage(net.sf.odinms.client);
var ��Ҷ����10 = "#fEffect/SkillName1.img/1001003/��Ҷ����10#";

var status = 0;
var fee;
var chance = Math.floor(Math.random()*1+1);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk(" ���������");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
       // if (status == 0) {
        //    cm.sendAcceptDecline("#v5073000##v5073000##v5073000##v5073000##v5073000##v5073000##v5073000##v5073000##v5073000#\r\n\r\n\r\n ");
       // } else

			if (status == 0)
				{
            cm.sendGetText("��������Ч����;\r\n#r��ȫ����ҷ�����������Ч����\r\n#b2000��ȯ/��#k\r\n#k��ֹ����ɫ�飬��������дʻ㣬���Ȳ��ɸ��ǣ������ǰ�����Ȳ��ţ����Ժ�������");
        } else if (status == 1) {
            fee = cm.getText();
            cm.sendYesNo("- ȷ�������� #r" + fee + "#k ��");
        } else if (status == 2) {
            if(cm.getPlayer().getCSPoints(1) < 2000){
    		cm.sendOk("��ĵ�ȯ����ʹ�á�");
    		cm.dispose();


          //  } else if (cm.getNX() < 500000) {
               // cm.sendOk("����ȷ������Ľ�Ҳ��ܵ���#r50000000!");
               // cm.dispose();
           // } else if (cm.getPlayer().getNX() < 10000) {
               // cm.sendOk("�Բ���,��Ľ�Ҳ���100000,���Բ��ܲ��ڴ˴���ע!");
               // cm.dispose();
           // } else if (cm.getText() > 10000) {
           //     cm.sendOk("Ŷ������˼Ŷ!��������ע���ܳ���1��!");
           //     cm.dispose();
           // } else if (cm.getText() < 10000000) {
             //   cm.sendOk("#i3994125# ����#r10000000#k��ң����㻹��ȥ��ĶĲ�����ɡ�");
            //    cm.dispose();
            } else {
                 if (chance <= 1) { 
				        
						 cm.gainNX(-2000);
						 cm.broadcastServerMsg(5121002, ""+ cm.getChar().getName() +"˵��"+ fee +"",true);
                         cm.sendOk("�Ѿ��ɹ����ͣ�"+fee+"");
	
	                    cm.dispose(); 
	                } 
	                else if (chance == 2) { 
	                     //cm.gainMeso(fee); 
	                     cm.sendNext("#i3994125# - #r��Ѳ��㣬�������������ֲ�Ҫ������#k"); 
                         cm.serverNotice("[�Ĳ�����]����� "+ cm.getChar().getName() +" ���ڶĳ��ʺŻ��ֶ���һ�£��ľ����ϡ�"); 
						 
	                     cm.dispose(); 
	                } 
					else if (chance == 3) { 
	                    cm.gainMeso(-fee); 
	                    cm.sendNext("#i3994125# - #r������#k"); 
                         cm.serverNotice("[�Ĳ�����]����� "+ cm.getChar().getName() +" ���ڶĳ��ʺŻ����ˣ��������첢����Ů�񲢾��!"); 
	                    cm.dispose(); 
	                } 
					else if (chance == 4) { 
	                    cm.gainMeso(-fee); 
	                    cm.sendNext("#i3994125# - #r������#k"); 
                         cm.serverNotice("[�Ĳ�����]����� "+ cm.getChar().getName() +" ���ڶĳ��ʺŻ����ˣ��������첢����Ů�񲢾��!"); 
	                    cm.dispose(); 
	                } 
					else if (chance == 5) { 
	                     //cm.gainMeso(fee); 
	                     cm.sendNext("#i3994125# - #r��Ѳ��㣬�������������ֲ�Ҫ������#k"); 
                         cm.serverNotice("[�Ĳ�����]����� "+ cm.getChar().getName() +" ���ڶĳ��ʺŻ��ֶ���һ�£��ľ����ϡ�"); 
	                     cm.dispose(); 
	                } 
					else if (chance == 6) { 
	                   cm.gainMeso(-fee); 
	                    cm.sendNext("#i3994125# - #r������#k"); 
                         cm.serverNotice("[�Ĳ�����]����� "+ cm.getChar().getName() +" ���ڶĳ��ʺŻ����ˣ��������첢����Ů�񲢾��!"); 
	                    cm.dispose(); 
	                } 
					else if (chance == 7) { 
	                     //cm.gainMeso(fee); 
	                     cm.sendNext("#i3994125# - #r��Ѳ��㣬�������������ֲ�Ҫ������#k"); 
                         cm.serverNotice("[�Ĳ�����]����� "+ cm.getChar().getName() +" ���ڶĳ��ʺŻ��ֶ���һ�£��ľ����ϡ�"); 
	                     cm.dispose(); 
	                } 
					else if (chance == 8) { 
	                    cm.gainMeso(-fee); 
	                    cm.sendNext("#i3994125# - #r������#k"); 
                         cm.serverNotice("[�Ĳ�����]����� "+ cm.getChar().getName() +" ���ڶĳ��ʺŻ����ˣ��������첢����Ů�񲢾��!"); 
	                    cm.dispose(); 
	                } 
					else if (chance == 9) { 
	                   cm.gainMeso(-fee); 
	                    cm.sendNext("#i3994125# - #r������#k"); 
                         cm.serverNotice("[�Ĳ�����]����� "+ cm.getChar().getName() +" ���ڶĳ��ʺŻ����ˣ��������첢����Ů�񲢾��!"); 
	                    cm.dispose(); 
	                } 
					else if (chance == 10) { 
	                   cm.gainMeso(-fee); 
	                    cm.sendNext("#i3994125# - #r������#k"); 
                         cm.serverNotice("[�Ĳ�����]����� "+ cm.getChar().getName() +" ���ڶĳ��ʺŻ����ˣ��������첢����Ů�񲢾��!"); 
	                    cm.dispose(); 
	                } 
	                else if (chance == 11) { 
	                     cm.gainMeso(-fee); 
	                     cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����!"); 
                         cm.serverNotice("[�Ĳ�����]����� "+ cm.getChar().getName() +" ���ڶĳ��ʺŻ����ˣ��������첢����Ů�񲢾��!"); 
	                     cm.dispose(); 
	                } 
                    else if (chance >= 12) {
                    cm.gainMeso(fee * 2);
                    //cm.gainItem(2022282,1);                   
                    cm.sendNext("#i3994125# -#r����Ŷ����ϲ��Ӯ�ˣ���Ը�ķ���!");
                    cm.serverNotice("[�Ĳ�����]����� "+ cm.getChar().getName() +" ���ڶĳ��ʺŻ�Ӯ�ˣ������뷭�ˡ�������!");
                    cm.dispose();
                }
            }
        }
    }
}
