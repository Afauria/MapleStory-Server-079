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
        var selStr = "#e��������������������������������������������������\r\n��#b    ��  ��  ð  ��  ��  ��  ��  ת  ְ    #k  ��\r\n��������������������������������������������������#n\r\n\r\n";
 
          selStr += "#L0##bսʿ#l#k  #L1##bħ��ʦ#l#k #L2##b����#l#k #L3##b������#l#k #L4##b����#l#k \r\n\r\n";
		  
		 selStr += "#L5##b����ʿ#l#k#L6##b����ʿ#l#k #L7##b����ʹ��#l#k #L8##bҹ����#l#k #L9##b��Ϯ��#l#k \r\n\r\n";
		   
		    selStr += "#L10##bս��#l#k  \r\n\r\n";
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
			cm.openNpc(9900004,201);
            break;
		case 1:
            cm.dispose();
            cm.openNpc(9900004,202);	
             break;
		case 2:
            cm.dispose();
            cm.openNpc(9900004,203);	
             break;
		case 3:
            cm.dispose();
            cm.openNpc(9900004,204);	
             break;
		case 4:
            cm.dispose();
            cm.openNpc(9900004,205);	
             break;
			 		case 5:
            cm.dispose();
            cm.openNpc(9900004,206);	
             break;
			 break;
			 		case 6:
            cm.dispose();
            cm.openNpc(9900004,207);	
             break;
			 break;
			 		case 7:
            cm.dispose();
            cm.openNpc(9900004,208);	
             break;
			 	case 8:
            cm.dispose();
            cm.openNpc(9900004,209);	
             break;
			 case 9:
            cm.dispose();
            cm.openNpc(9900004,210);	
             break;
			  case 10:
            cm.dispose();
            cm.openNpc(9900004,211);	
             break;
		}
    }
}