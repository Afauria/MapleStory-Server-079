/*
	���ݣ��������а�
*/

var status = -1;

var tz5 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var sl0items=null;
var bankitems=null;
var sel_0=0;
var sel_1=0;
var sel_2=0;
var sel_3=0;
var savemax=10;//�ֿ�����
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.dispose();
		return;
	}var MC = cm.getServerName();
	status++;
	if (status == 0) {
		bankitems=cm.getBankItems();
		var  text = "#e#r"+MC+"#k ����ֿ� - \r\n"; 
		  text += "#d#n���洢��"+savemax+" #r\r\n"; 
		 text += "#d#n���ô洢��" +( bankitems==null?0:bankitems.size())+" \r\n";
		
		 text += "#e#b      ��                           �� #r\r\n";
		
		
		text += "\t\t       #L21#�������#l\r\n";
		text += "\t\t       #L22#ȡ������#l\r\n";
        text += "\t\t       #L99##b���ؽ���#l\r\n\r\n";
		text += "\r\n#e#b      ��                           ��\r\n";
		
		cm.sendSimple(text);
	} else if (status == 1) {
		sel_0=selection;
		if(selection==99){
             cm.dispose();
             cm.openNpc(9900004,0);	
			return;
			}
			
		
		if(selection==21){
			if(bankitems!=null){
				if(bankitems.size()>=savemax){
					cm.sendOkS("�ֿ��Ѵ����ޣ����ɴ洢��", 3);
					cm.dispose();
					return;
				}
			}
			var text = "\t\t\t\t#e#d�� ѡ�񱳰����� ��#k\r\n\r\n";
			text+="\t\t\t\t#b#L2#������#l#k\r\n";
			text+="\t\t\t\t#b#L3#������#l#k\r\n";
			text+="\t\t\t\t#b#L4#������#l#k\r\n";
			cm.sendSimple(text);
		}else if(selection==22){
			if(bankitems==null||bankitems.size()<1){
				cm.sendOkS("�ֿ���û�е���", 3);
				cm.dispose();
				return;
			}
			var text="#b��ѡ����Ҫȡ�ĵ���#k\r\n\r\n";
			for(var i=0;i<bankitems.size();i++){
				text+="#r#L"+i+"##v"+bankitems.get(i).getItemid()+"# ���� #r"+bankitems.get(i).getCount()+"#l#k\r\n";
			}
			cm.sendSimple(text);
		}
	}else if(status == 2){
		sel_1=selection;
		if(sel_0==21){
			sl0items=cm.getItemsByType(sel_1);
			if(sl0items==null||sl0items.size()<1){
				cm.sendOkS("ѡ��ı�����û�е���", 3);
				cm.dispose();
				return;
			}
			var text="#b��ѡ����Ҫ��ĵ���#k\r\n\r\n";
			for(var i=0;i<sl0items.size();i++){
				text+="#r#L"+i+"##v"+sl0items.get(i).getItemId()+"# ���� #r"+sl0items.get(i).getQuantity()+"#l#k\r\n";
			}
			cm.sendSimple(text);
		}else if(sel_0==22){
			var takeselitem=bankitems.get(sel_1);
			if(takeselitem==null||takeselitem.getCount()<1){
				cm.sendOkS("ѡ��ĵ��߲�����", 3);
				cm.dispose();
				return;
			}
			cm.sendGetNumber("������Ҫȡ������",takeselitem.getCount(),1,takeselitem.getCount());	
		}
	}else if(status == 3){
		sel_2=selection;
		if(sel_0==21){
			var selItem=sl0items.get(sel_2);
			if(selItem==null||selItem.getQuantity()<1){
				cm.sendOkS("ѡ��ĵ��߲�����", 3);
				cm.dispose();
				return;
			}
			cm.sendGetNumber("������Ҫ�������",selItem.getQuantity(),1,selItem.getQuantity());		
			
		}else if(sel_0==22){
			var takeselitem=bankitems.get(sel_1);
			if(takeselitem==null||takeselitem.getCount()<1){
				cm.sendOkS("ѡ��ĵ��߲�����", 3);
				cm.dispose();
				return;
			}
			if(sel_2<1||sel_2>takeselitem.getCount()){
				cm.sendOkS("Ҫȡ�ĵ�����������", 3);
				cm.dispose();
				return;
			}
			var takeret=cm.takeBankItem(takeselitem,sel_2);
			if(takeret==-1){
				cm.sendOkS("ȡ�Ķ���Ϊ��", 3);
			}else if(takeret==-2){
				cm.sendOkS("��������ȷ", 3);
			}else if(takeret==-3){
				cm.sendOkS("�����ռ䲻��", 3);
			}else {
				if(takeret>0){
					cm.gainMeso(-5000);
					cm.sendOkS("ȡ������ϡ�\r\n��ȡ��������5000��ҡ�", 3);
				}else{
					cm.sendOkS("ȡʧ�ܣ��������("+takeret+")", 3);
				}
			}
			cm.dispose();
		}
	}else if(status == 4){
		sel_3=selection;
		if(sel_0==21){
			var selItem=sl0items.get(sel_2);
			if(selItem==null||selItem.getQuantity()<1){
				cm.sendOkS("ѡ��ĵ��߲�����", 3);
				cm.dispose();
				return;
			}
			if(sel_3<1||sel_3>selItem.getQuantity()){
				cm.sendOkS("��ĵ�����������", 3);
				cm.dispose();
				return;
			}
			var saveret=cm.saveBankItem(selItem,sel_3);
			if(saveret==-4){
				cm.sendOkS("��ĵ��߲�����", 3);
			}else if(saveret==-5){
				cm.sendOkS("��װ����ʱ���߲��ܴ�", 3);
			}else if(saveret==-6){
				cm.sendOkS("����������ڴ�������", 3);
			}else if(saveret==-8){
				cm.sendOkS("�������߻�һ�����װ��", 3);
			}else {
				if(saveret>0){
					cm.gainMeso(-5000);
					cm.sendOkS("�洢��ϡ�\r\n��ȡ��������5000��ҡ�", 3);
				}else{
					cm.sendOkS("�洢ʧ�ܣ��������("+saveret+")", 3);
				}
			}
			cm.dispose();
		}else if(sel_0==22){
			cm.dispose();
		}
		
	}
}
