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
    }
	    if ( cm.getMapId() == 10000) {
            cm.sendOk(" �� �� ð �� �� �� �� �� �� ʹ �� �� �� �� ��");
            cm.dispose();
        }
		if (cm.getInventory(1).isFull(4) || cm.getInventory(2).isFull(1)) {
                cm.sendSimple("���ı����ռ䲻�㡣\r\n\r\n��#rװ��#k������ #r5#k ����λ��\r\n��#r����#k������ #r2#k ����λ��");
				cm.dispose();
        		return;
}

  
    else if (status == 0) {
		
		
   var  
	    selStr = "#r#e��ԣ�����\r\n#k����۸�#r60000\r\n#k��ȯ��#r"+cm.getPlayer().getCSPoints(1)+"#n#k\r\n";
		selStr += "#i4110000# #t4110000# x20\r\n#i2049100# #t2049100# x 20\r\n#i1102671# #t1102671# x 1 \r\n#i2000005# #t2000005# x 200\r\n#i2022503# #t2022503# x 20\r\n#i2022514# #t2022514# x 20";
		selStr += "\r\n#L1##b"+��ͷ+"�������#l  #L0##b"+��ͷ+"����#l\r\n";

		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9900004,1000);	
            break;
			
		case 1:
		    
            if(cm.getPlayer().getCSPoints(1) >= 60000){
			cm.gainNX(-60000);
			
			cm.gainItem(4110000, 20);
			cm.gainItem(2022514, 20);
	        cm.gainItem(2022503, 20);
			cm.gainItem(2000005, 200);
			cm.gainItem(1102671, 1);
			cm.gainItem(2049100, 20);
			cm.sendOk("����ɹ�~~ŶҲ~~");	
            cm.serverNotice("[����]��"+ cm.getChar().getName() +"/�����˸�ԣ�������С����Ƕ������ˡ�"); 
            cm.dispose();
			} else {
				cm.sendOk("��ȯ�����������Ѿ�����");
				cm.dispose();
				return;
			}
            break;
	 
			 
			 
			 
		}
    }
}
