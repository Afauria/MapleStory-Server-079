//////////////////////////////
//�߱�*����ð�յ�*��ߴ���////
//1346464664/992916233//////
///////////////////////////
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE);//��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var Z = "#fUI/GuildMark.img/Mark/Letter/00005025/1#";
var Y = "#fUI/GuildMark.img/Mark/Letter/00005024/3#";
var X = "#fUI/GuildMark.img/Mark/Letter/00005023/1#";
var D = "#fUI/GuildMark.img/Mark/Letter/00005003/1#";
var M = "#fUI/GuildMark.img/Mark/Letter/00005012/1#";
var A = "#fUI/GuildMark.img/Mark/Letter/00005000/1#";
var P = "#fUI/GuildMark.img/Mark/Letter/00005015/1#";
var Z = "#fUI/GuildMark.img/Mark/Letter/00005025/9#";
var ��ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";//"+��ͷ+"


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }var MC = cm.getServerName();
	    if ( cm.getMapId() == 10000) {
            cm.sendOk(" �� �� ð �� �� �� �� �� �� ʹ �� �� �� �� ��");
            cm.dispose();
        }


  
    else if (status == 0) {
		
		
   var  selStr = "#e#r"+MC+" - ����츳ҳ;\r\n";
        selStr += "#L0##b"+��ͷ+"���ؽ���#l\r\n\r\n\r\n";
		if(cm.getQuestStatus(999991)== 2){
		selStr += "#L1##s4111002#��¡��[����]#l\r\n";
		} else {}
		
		


		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 1:
		if(cm.getBossRank("��¡",2) <= 0){
            cm.��¡();
			cm.setBossRankCount("��¡");
			cm.playerMessage(5,"���¡����һ���Լ�");
            cm.dispose();
       } else {
			cm.ȡ����¡();
			cm.setBossRankCount("��¡","-"+cm.getBossRank("��¡",2)+"");
			cm.playerMessage(5,"��¡����ʧ");
            cm.dispose();
		return;
			}
            break;
		case 0:
	     	cm.dispose();
            cm.openNpc(9900004,0);	
            break;
			
	 
			 
			 
			 
		}
    }
}
