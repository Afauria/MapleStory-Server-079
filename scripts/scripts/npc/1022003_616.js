//////////////////////////////
//??*����ð�յ�*��ߴ���////
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
var ��ɫ = "#fUI/NameTag.img/126/w#";
var ��ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";


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
    }
	var MC = cm.getServerName();
	var jy = cm.getPlayer().getExp();
	 var jb = cm.getMeso();
	    if ( cm.getMapId() == 10000) {
            cm.sendOk(" �� �� ð �� �� �� �� �� �� ʹ �� �� �� �� ��");
            cm.dispose();
        }


  
    else if (status == 0) {
		
		
   var  
	    selStr = "#e#r"+MC+"#k������������Ĳ���֮���𣿶�������֮����Ҫ100����������ֵ����\r\n";
		
		selStr += "[�㵱ǰӵ�о���ֵ�� #d"+jy+"#k ]\r\n";
		selStr += "[�㵱ǰ���������ȣ� #d"+ cm.getBossRank("����֮��",2)+"#k ]\r\n";
	//	selStr += "[�㵱ǰӵ�н�  �ң� #d"+jb+"#k ]\r\n";
		
		
		selStr += "#e#L1#"+��ͷ+"ι��������100W����=100�������飩#k#l\r\n";
		
		if(cm.getBossRank("����֮��",2) >= 100 && !cm.getInventory(1).isFull() && cm.haveItem(1302143,1)) {
		selStr += "#r#e#L2#"+��ͷ+"������������֮��-���ֽ�#l\r\n";
		   }else {}
		
		if(cm.getBossRank("����֮��",2) >= 100 && !cm.getInventory(1).isFull() && cm.haveItem(1312058,1)) {
		selStr += "#r#e#L3#"+��ͷ+"������������֮��-���ָ�#l\r\n";
		   }else {}
		 
		if(cm.getBossRank("����֮��",2) >= 100 && !cm.getInventory(1).isFull() && cm.haveItem(1322086,1)) {
		selStr += "#r#e#L4#"+��ͷ+"������������֮��-���ֶ���#l\r\n";
		   }else {}
		 
		if(cm.getBossRank("����֮��",2) >= 100 && !cm.getInventory(1).isFull() && cm.haveItem(1332116,1)) {
		selStr += "#r#e#L5#"+��ͷ+"������������֮��-���̵ֶ�#l\r\n";
		   }else {}
		 
		if(cm.getBossRank("����֮��",2) >= 100 && !cm.getInventory(1).isFull() && cm.haveItem(1372074,1)) {
		selStr += "#r#e#L6#"+��ͷ+"������������֮��-����#l\r\n";
		   }else {}
		 
		if(cm.getBossRank("����֮��",2) >= 100 && !cm.getInventory(1).isFull() && cm.haveItem(1382095,1)) {
		selStr += "#r#e#L7#"+��ͷ+"������������֮��-����#l\r\n";
		   }else {}
		 
		if(cm.getBossRank("����֮��",2) >= 100 && !cm.getInventory(1).isFull() && cm.haveItem(1402086,1)) {
		selStr += "#r#e#L8#"+��ͷ+"������������֮��-˫�ֽ�#l\r\n";
		   }else {}
		 
		if(cm.getBossRank("����֮��",2) >= 100 && !cm.getInventory(1).isFull() && cm.haveItem(1412058,1)) {
		selStr += "#r#e#L9#"+��ͷ+"������������֮��-˫�ָ�#l\r\n";
		   }else {}
		 
		if(cm.getBossRank("����֮��",2) >= 100 && !cm.getInventory(1).isFull() && cm.haveItem(1422059,1)) {
		selStr += "#r#e#L10#"+��ͷ+"������������֮��-˫�ֶ���#l\r\n";
		   }else {}
		 
		if(cm.getBossRank("����֮��",2) >= 100 && !cm.getInventory(1).isFull() && cm.haveItem(1432077,1)) {
		selStr += "#r#e#L11#"+��ͷ+"������������֮��-ǹ#l\r\n";
		   }else {}
		 
		if(cm.getBossRank("����֮��",2) >= 100 && !cm.getInventory(1).isFull() && cm.haveItem(1442107,1)) {
		selStr += "#r#e#L12#"+��ͷ+"������������֮��-ì#l\r\n";
		   }else {}
		 
		if(cm.getBossRank("����֮��",2) >= 100 && !cm.getInventory(1).isFull() && cm.haveItem(1452102,1)) {
		selStr += "#r#e#L13#"+��ͷ+"������������֮��-��#l\r\n";
		   }else {}
		 
		if(cm.getBossRank("����֮��",2) >= 100 && !cm.getInventory(1).isFull() && cm.haveItem(1462087,1)) {
		selStr += "#r#e#L14#"+��ͷ+"������������֮��-��#l\r\n";
		   }else {}
		 
		if(cm.getBossRank("����֮��",2) >= 100 && !cm.getInventory(1).isFull() && cm.haveItem(1472113,1)) {
		selStr += "#r#e#L15#"+��ͷ+"������������֮��-ȭ��#l\r\n";
		   }else {}
		 
		if(cm.getBossRank("����֮��",2) >= 100 && !cm.getInventory(1).isFull() && cm.haveItem(1482075,1)) {
		selStr += "#r#e#L16#"+��ͷ+"������������֮��-ָ��#l\r\n";
		   }else {}
		 
		if(cm.getBossRank("����֮��",2) >= 100 && !cm.getInventory(1).isFull() && cm.haveItem(1492075,1)) {
		selStr += "#r#e#L17#"+��ͷ+"������������֮��-��ǹ#l\r\n";
		   }else {}
		cm.sendSimple(selStr);
		 
		
		
		
		

		
		

		 
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.openNpc(9900004,0);	
			cm.dispose();
            break;
		case 1:
		if ( cm.getPlayer().getExp()>=1000000){ 
			cm.dispose();
		    cm.setBossRankCount("����֮��",100);
		    cm.gainExp(-1000000);
			cm.sendOk("���ܵ���һ�����ص�������");
			
			} else {
		  cm.sendOk("��Ҫ100W����ֵ����������100����������Ŷ��");
		  cm.dispose();
		  }
            break;
		case 2:
		cm.gainItem(1302143, -1);
		cm.gainItem(1302144, 1);
		cm.completeQuest(88888);
        break;
		case 3:
		cm.gainItem(1312058, -1);
		cm.gainItem(1312059, 1);
		cm.completeQuest(88888);
        break;
		case 4:
		cm.gainItem(1322086, -1);
		cm.gainItem(1322087, 1);
		cm.completeQuest(88888);
        break;
		case 5:
		cm.gainItem(1332116, -1);
		cm.gainItem(1332117, 1);
		cm.completeQuest(88888);
        break;
		case 6:
		cm.gainItem(1372074, -1);
		cm.gainItem(1372075, 1);
		cm.completeQuest(88888);
        break;
		case 7:
		cm.gainItem(1382095, -1);
		cm.gainItem(1382096, 1);
		cm.completeQuest(88888);
        break;
		case 8:
		cm.gainItem(1402086, -1);
		cm.gainItem(1402087, 1);
		cm.completeQuest(88888);
        break;
		case 9:
		cm.gainItem(1412058, -1);
		cm.gainItem(1412059, 1);
		cm.completeQuest(88888);
        break;
		case 10:
		cm.gainItem(1422059, -1);
		cm.gainItem(1422060, 1);
		cm.completeQuest(88888);
        break;
		case 11:
		cm.gainItem(1432077, -1);
		cm.gainItem(1432078, 1);
		cm.completeQuest(88888);
        break;
		case 12:
		cm.gainItem(1442107, -1);
		cm.gainItem(1442108, 1);
		cm.completeQuest(88888);
        break;
		case 13:
		cm.gainItem(1452102, -1);
		cm.gainItem(1452103, 1);
		cm.completeQuest(88888);
        break;
		case 14:
		cm.gainItem(1462087, -1);
		cm.gainItem(1462088, 1);
		cm.completeQuest(88888);
        break;
		case 15:
		cm.gainItem(1472113, -1);
		cm.gainItem(1472114, 1);
		cm.completeQuest(88888);
        break;
		case 16:
		cm.gainItem(1482075, -1);
		cm.gainItem(1482076, 1);
		cm.completeQuest(88888);
        break;
		case 17:
		cm.gainItem(1492075, -1);
		cm.gainItem(1492076, 1);
		cm.completeQuest(88888);
        break;
		
			
		 	
	 
			 
			 
			 
		}
    }
}