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
    
	    if ( cm.getMapId() == 10000) {
            cm.sendOk(" �� �� ð �� �� �� �� �� �� ʹ �� �� �� �� ��");
            cm.dispose();
        }


  
    else if (status == 0) {

    var  
	    selStr = "#r"+MC+"#b ������Ч�������ã�#k\r\n\r\n#r#e��ʾ������ǰ��ͼ������Ч���ٴο�����Ϊȡ����\r\n���ѣ�2000��ȯ/��#n#k\r\n\r\n";
		

		
		
	
		selStr += "#L0##b"+��ͷ+"���ؽ���#k#l\r\n";
		
		selStr += "#L18##b"+��ͷ+"����#k#r[��ףר��]#k#l\r\n";
		
		selStr += "#L10##b"+��ͷ+"�̻�#k#r[��ףר��]#k#l\r\n";
		
		selStr += "#L1##b"+��ͷ+"ѩ��ƮƮ#k#l\r\n";
		
		selStr += "#L2##b"+��ͷ+"����ƮƮ#k#l\r\n";
		
		selStr += "#L3##b"+��ͷ+"����ƮƮ#k#l\r\n";
		
		selStr += "#L4##b"+��ͷ+"ѩ��ƮƮ#k#l\r\n";
		
		selStr += "#L5##b"+��ͷ+"����ƮƮ#k#l\r\n";
		
		selStr += "#L6##b"+��ͷ+"�ɿ���ƮƮ#k#l\r\n";
		
	    selStr += "#L7##b"+��ͷ+"��ҶƮƮ#k#l\r\n";
		
		selStr += "#L8##b"+��ͷ+"�ǹ�ƮƮ#k#l\r\n";
		
		selStr += "#L9##b"+��ͷ+"��ҶƮƮ#k#l\r\n";
		
		
		
		selStr += "#L11##b"+��ͷ+"����ƮƮ#k#l\r\n";
		
		selStr += "#L12##b"+��ͷ+"����ƮƮ#k#l\r\n";
		
		selStr += "#L13##b"+��ͷ+"���ִ�ƮƮ#k#l\r\n";
		
		selStr += "#L14##b"+��ͷ+"����ƮƮ#k#l\r\n";
		
		selStr += "#L15##b"+��ͷ+"�˲�ƮƮ#k#l\r\n";
		
		selStr += "#L16##b"+��ͷ+"ɢ��ɢ��#k#l\r\n";
		
		selStr += "#L17##b"+��ͷ+"�ɿ������ƮƮ#k#l\r\n";



         
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) { 
        case 0:
            cm.dispose();
            cm.openNpc(9900004,3);	
            break;
		 case 1:
		  if(cm.getPlayer().getCSPoints(1) >= 2000){
			cm.gainNX(-2000);
			cm.��������(5120000);
			cm.dispose();
			
			} else {
				cm.sendOk("��ȯ������");
				cm.dispose();
				return;
			}
            break;
		case 2:
		  if(cm.getPlayer().getCSPoints(1) >= 2000){
			cm.gainNX(-2000);
			cm.��������(5120001);
			cm.dispose();
			
			} else {
				cm.sendOk("��ȯ������");
				cm.dispose();
				return;
			}
            break;
		case 3:
		  if(cm.getPlayer().getCSPoints(1) >= 2000){
			cm.gainNX(-2000);
			cm.��������(5120002);
			cm.dispose();
			
			} else {
				cm.sendOk("��ȯ������");
				cm.dispose();
				return;
			}
            break;
		case 4:
		  if(cm.getPlayer().getCSPoints(1) >= 2000){
			cm.gainNX(-2000);
			cm.��������(5120003);
			cm.dispose();
			
			} else {
				cm.sendOk("��ȯ������");
				cm.dispose();
				return;
			}
            break;
		case 5:
		  if(cm.getPlayer().getCSPoints(1) >= 2000){
			cm.gainNX(-2000);
			cm.��������(5120004);
			cm.dispose();
			
			} else {
				cm.sendOk("��ȯ������");
				cm.dispose();
				return;
			}
            break;
		case 6:
		  if(cm.getPlayer().getCSPoints(1) >= 2000){
			cm.gainNX(-2000);
			cm.��������(5120005);
			cm.dispose();
			
			} else {
				cm.sendOk("��ȯ������");
				cm.dispose();
				return;
			}
            break;
		case 7:
		  if(cm.getPlayer().getCSPoints(1) >= 2000){
			cm.gainNX(-2000);
			cm.��������(5120006);
			cm.dispose();
			
			} else {
				cm.sendOk("��ȯ������");
				cm.dispose();
				return;
			}
            break;
		case 8:
		  if(cm.getPlayer().getCSPoints(1) >= 2000){
			cm.gainNX(-2000);
			cm.��������(5120007);
			cm.dispose();
			
			} else {
				cm.sendOk("��ȯ������");
				cm.dispose();
				return;
			}
            break;
		case 9:
		  if(cm.getPlayer().getCSPoints(1) >= 2000){
			cm.gainNX(-2000);
			cm.��������(5120008);
			cm.dispose();
			
			} else {
				cm.sendOk("��ȯ������");
				cm.dispose();
				return;
			}
            break;
		case 10:
		  if(cm.getPlayer().getCSPoints(1) >= 2000){
			cm.gainNX(-2000);
			cm.��������(5120009);
			cm.dispose();
			
			} else {
				cm.sendOk("��ȯ������");
				cm.dispose();
				return;
			}
            break;
		case 11:
		  if(cm.getPlayer().getCSPoints(1) >= 2000){
			cm.gainNX(-2000);
			cm.��������(5120010);
			cm.dispose();
			
			} else {
				cm.sendOk("��ȯ������");
				cm.dispose();
				return;
			}
            break;
		case 12:
		  if(cm.getPlayer().getCSPoints(1) >= 2000){
			cm.gainNX(-2000);
			cm.��������(5121000);
			cm.dispose();
		
			} else {
				cm.sendOk("��ȯ������");
				cm.dispose();
				return;
			}
            break;
		case 13:
		  if(cm.getPlayer().getCSPoints(1) >= 2000){
			cm.gainNX(-2000);
			cm.��������(5121001);
			cm.dispose();
		
			} else {
				cm.sendOk("��ȯ������");
				cm.dispose();
				return;
			}
            break;	
		case 14:
		  if(cm.getPlayer().getCSPoints(1) >= 2000){
			cm.gainNX(-2000);
			cm.��������(5121002);
			cm.dispose();
		
			} else {
				cm.sendOk("��ȯ������");
				cm.dispose();
				return;
			}
            break;	
		case 15:
		  if(cm.getPlayer().getCSPoints(1) >= 2000){
			cm.gainNX(-2000);
			cm.��������(5121003);
			cm.dispose();
		
			} else {
				cm.sendOk("��ȯ������");
				cm.dispose();
				return;
			}
            break;	
		case 16:
		  if(cm.getPlayer().getCSPoints(1) >= 2000){
			cm.gainNX(-2000);
			cm.��������(5121004);
			cm.dispose();
		
			} else {
				cm.sendOk("��ȯ������");
				cm.dispose();
				return;
			}
            break;
		case 17:
		  if(cm.getPlayer().getCSPoints(1) >= 2000){
			cm.gainNX(-2000);
			cm.��������(5121005);
			cm.dispose();
		
			} else {
				cm.sendOk("��ȯ������");
				cm.dispose();
				return;
			}
            break;
       	case 18:
		  if(cm.getPlayer().getCSPoints(1) >= 2000){
			cm.gainNX(-2000);
			cm.��������(5120015);
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
