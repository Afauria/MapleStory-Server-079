
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
        }var MC = cm.getServerName();
		var jb = cm.getBossRank("���н��",2)/90/10;
		var dq = cm.getBossRank("���е�ȯ",2)/95/5;
        if(cm.getBossLog("������Ϣ") == 0){
			cm.setBossRankCount("���н��",jb);
			cm.setBossRankCount("���е�ȯ",dq);
		    cm.setBossLog("������Ϣ");
			
			
		}
		
		//if (cm.getBossLog("gengxin")==0  ) {
        //    cm.showInstruction("\r\n#e#r"+MC+"#n#k\r\n\r\n\r\n��ǰ�汾;#bV 4.9\r\n\r\n\r\nǩ�����\r\n\r\n\r\n", 220, 15); 
        //    cm.dispose();
        //  return;
	 
	  //  }

        if (mode == 1)
            status++;
        else
            status--;
cm.dispose();
			}
	    	}

