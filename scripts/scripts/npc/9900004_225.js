
importPackage(net.sf.cherry.client);
var status = 0;
var ȷ�� = "#fUI/Login.img/BtOk/normal/0#";
var ȡ�� = "#fUI/Login.img/BtCancel/normal/0#";
var ���� = "#fUI/GuildMark.img/BackGround/00001007/16#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
		if (cm.getMapId() == 209000015) {
            cm.sendOk("��̨�У��޷�ʹ�á�");
            cm.dispose();
          return;
	 
	    }
		if (cm.getPlayer().getFame() < 0 ) {
            cm.sendOk("#r- ���Ѿ���������Ͷ�ߣ��޷�ʹ�ô˹��ܡ� \r\n\r\n  #k��������ð�յ�����������Ѿ�����������Ͷ�ߣ����������ȣ��Ѿ��������ж���������κ����飬�������Աȡ����ϵ��");
            cm.dispose();

        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
			
          var 
		  selStr  = "����ð�յ�\r\n\r\n";
		  selStr += "\t����ʹ�õ�����������޸���Ϸ���ݵȡ�\r\n";
		  selStr += "\t���κν��飬��ϷBUG���õ��뷨������ȣ����ύ��Ⱥ�����һ��һʱ������Ӧ��\r\n";
		  //selStr += "\t#rʵ��һ��һ��ɫ�ƣ��ѽ�ɫ���ύ��Ⱥ�����Ϳ���ͨ����֤������Ϸ��\r\n";
		 // selStr += "\t#r��Ҫ��ȯ���ҿͻ�����������Ϸ��˽���½��ף���ɵ���ʧ�Ų�����\r\n";
		  
		  
          selStr  += "\r\n\t\t\t#b#L1#����ð�յ�������#l\r\n\r\n";
		  
		  
		cm.sendSimple(selStr);
        } else if (status == 1) {
         	if (selection == 1) { 
			if ( cm.getMapId()  >  0 ) {  
			   cm.warp(104000000,0);
			   
			   cm.serverNotice("[����]����� "+ cm.getChar().getName() +" ��������ð�յ����ͥ�������µ��ọ́���ӭ��!!"); 
			   cm.dispose();
			   
			} else {
				cm.sendOk("#r#e����ʱ��Ϊ18:00����ʱ�޷����룬���ڹ��⿪������ͨ����");
				cm.dispose();	
			}
			}
	    	}
        }
    }

