
var ca = java.util.Calendar.getInstance();
var �ٱ�ȯ1 = "5000";
var �ٱ�ȯ11 = "10000";
var �ٱ�ȯ115 = "100000";
var �ʼ�1="1000";
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
				if ( cm.getInventory(4).isFull(3)) {
                cm.sendSimple("���ı����ռ䲻�㡣\r\n\r\n��#r����#k������ #r4#k ����λ��");
				cm.dispose();
        		return;
}

    else if (status == 0) {		
   var  
	    selStr = "#r#e��ֵ���� - �ֽ���ߣ�\r\n#k��ȯ��#r"+cm.getPlayer().getCSPoints(1)+"#n#k\r\n";
		selStr += "#L0#"+��ͷ+"#b���ؽ���#l#k\r\n";
		selStr += "#L4##v5150040# #b#z5150040# x 1 / #r"+�ʼ�1+" ��ȯ#l\r\n";
		selStr += "#L1##v4110000# #b#z4110000# x 1 / #r"+�ٱ�ȯ1+" ��ȯ#l\r\n";
		//selStr += "#L2##v4110000# #b#z4110000# x 11 / #r"+�ٱ�ȯ11+" ��ȯ#l\r\n";
		//selStr += "#L3##v4110000# #b#z4110000# x 115 / #r"+�ٱ�ȯ115+" ��ȯ#l\r\n";
      
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9900004,0);	
            break;
			
		case 1:
            if(cm.getPlayer().getCSPoints(1) >= 1000  ){
            cm.gainNX(-1000);
			cm.gainItem(4110000, 1);
            cm.sendOk("����ɹ���");			
            cm.dispose();
			} else {
				cm.sendOk("��ȯ������");
				cm.dispose();
				return;
			}
            break;
		
		case 2:
            if(cm.getPlayer().getCSPoints(1) >= 10000  ){
            cm.gainNX(-10000);
			cm.gainItem(4110000, 11);
            cm.sendOk("����ɹ���");
           // cm.serverNotice("[����]��"+ cm.getChar().getName() +"/�����˰ٱ�ȯ�������"); 			
            cm.dispose();
			} else {
				cm.sendOk("��ȯ������");
				cm.dispose();
				return;
			}
            break;
			
		case 3:
            if(cm.getPlayer().getCSPoints(1) >= 100000  ){
            cm.gainNX(-100000);
			cm.gainItem(4110000, 115);
            cm.sendOk("����ɹ���");
         //   cm.serverNotice("[����]��"+ cm.getChar().getName() +"/�����˰ٱ�ȯ�������������ֱ�Ǻ������졣");  			
            cm.dispose();
			} else {
				cm.sendOk("��ȯ������");
				cm.dispose();
				return;
			}
            break;
	    case 4:
            if(cm.getPlayer().getCSPoints(1) >= 1000  ){
            cm.gainNX(-1000);
			cm.gainItem(5150040,1);
            cm.sendOk("����ɹ���");
           // cm.serverNotice("[����]��"+ cm.getChar().getName() +"/�����˻ʼ�����");  			
            cm.dispose();
			} else {
				cm.sendOk("��ȯ������");
				cm.dispose();
				return;
			}
            break;
			 
			 
			 
		}
    }
}