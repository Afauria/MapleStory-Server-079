var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE);//��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
//var tz = "#fEffect/CharacterEff/1082565/4/0#";  //���ӷ�

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
	if (cm.getPlayer().getLevel() < 10) {
        cm.sendOk("��ĵȼ�δ�ﵽ10�������δ�ܽ���������");
        cm.dispose();
		 }
    if (cm.getMapId() == 180000001) {
            cm.sendOk("���ź�������ΪΥ���û����򱻽�ֹ��Ϸ���������������ϵ����Ա.");
            cm.dispose();
        }  
    else if (status == 0) {
        var selStr = "#e#r��#k����������������������������������������#r��#k\r\n             -���������-\r\n#b    ��     #r ��   #g   ð  #d    ��      #k��   #k\r\n  #n                                \r\n#r��#k��������������������������������������������#r��#k#n\r\r\n";
  selStr += "   ����ʱ�䣺#r"+year+"��"+month+"��"+day+"��"+hour+"ʱ"+minute+"��"+second+"��#k\r\n   ��ȯ��#r"+cm.getPlayer().getCSPoints(1)+"\r\n";
          selStr += "  #L0##b��˲�䴫��#l#k #L1##b��ÿ�ս���#l#k #L2#�����#l#k \r\n\r\n";
		  
		  selStr += "  #L3##b��������#l#k #L4##b����ɽ��ˮ#l#k #L5##b���Ծ�ȶ�#l#k  \r\n\r\n";
		   
		  selStr += "  #L6##b��ȫ������#l#k #L7##b�����תְ#l#k  \r\n\r\n";
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
			cm.openNpc(9900004,1);
            break;
		case 1:
            cm.dispose();
            cm.openNpc(9900004,4);	
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
		}
    }
}