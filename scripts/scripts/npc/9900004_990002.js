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
var �� = "#fUI/GuildMark.img/Mark/Letter/00005035/15#";
var �� = "#fUI/GuildMark.img/Mark/Letter/00005033/15#";
var �� = "#fUI/GuildMark.img/Mark/Letter/00005026/15#";


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


	if (cm.getMapId() > 209000001 || cm.getMapId() <= 209000000) {
        cm.sendOk("������ֻ��002�ŷ�����ʹ�á�");
        cm.dispose();
		 }
  
    else if (status == 0) {
        var selStr = "#e#r��#k���������������� "+��+""+��+""+��+"������������������#r��#k\r\n             -���������-\r\n#b        "+Z+"    "+Y+"    "+M+"    "+X+"    "+D+" #k\r\n  #n                                        \r\n#r��#k��������������������������������������������#r��#k#n\r\r\n";
  selStr += "   ����ʱ�䣺#r"+year+"��"+month+"��"+day+"��"+hour+"ʱ"+minute+"��"+second+"��#k\r\n   ��ȯ��#r"+cm.getPlayer().getCSPoints(1)+"\r\n";
          selStr += "  #L0##b�����г�#l#k #L1##bЯ��Կ��#l#k #L2#�����#l#k \r\n\r\n";
		  
	
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
		cm.warp(910000000,0);
            cm.dispose();
            break;
		case 1:
		
		cm.gainItem(4031332,1)
            cm.dispose();
             break;
		case 2:
            cm.dispose();
            cm.openNpc(9900004,99);	
             break;
		case 3:
            cm.dispose();
            cm.openNpc(9900004,98);	
             break;
		case 4:
            cm.dispose();
            cm.openNpc(9900004,900);	
             break;
			 		case 5:
            cm.dispose();
            cm.openNpc(9900004,102);	
             break;
			 break;
			 		case 6:
            cm.dispose();
            cm.openNpc(9900004,101);	
             break;
			 break;
			 		case 7:
            cm.dispose();
            cm.openNpc(9900004,200);	
             break;
			 		case 8:
            cm.dispose();
            cm.openNpc(9900004,666);	
             break;
		}
    }
}