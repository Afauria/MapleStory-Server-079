//////////////////////////////
//�߱�*����ð�յ�*��ߴ���////
//1346464664/992916233//////
///////////////////////////
importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE);//��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);






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
	    if ( cm.getMapId() == 20000) {
            cm.sendOk(" �� �� ð �� �� �� �� �� �� ʹ �� �� �� �� ��");
            cm.dispose();
        }


  
    else if (status == 0) {
		
		
   var  
	    selStr = "װ��չʾ��#v1402037#\r\n";
		selStr += "���������ȣ�2000 \r\n";
		selStr += "#b#L0#���ؽ���#l\r\n";
		selStr += "#L2#������ϸ \r\n";
		
		if(cm.haveItem(4001078,200)&&cm.haveItem(4000235,50)&&cm.haveItem(4000262,200)&&cm.haveItem(4000263,200)&&cm.haveItem(4000268,200)&&cm.haveItem(4000030,200)) {
		selStr += "#e#L1#��ʼ����#l\r\n";
}	else {}
				
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
					
        case 0:
            cm.dispose();
            cm.openNpc(9900004,0);	
            break;
		case 1:
           if(cm.haveItem(4001078,200)&&cm.haveItem(4000235,50)&&cm.haveItem(4000262,200)&&cm.haveItem(4000263,200)&&cm.haveItem(4000268,200)&&cm.haveItem(4000030,200)){
					cm.gainItem(4001078,-400);
					cm.gainItem(4000235,-400);
					cm.gainItem(4000262,-400);
					cm.gainItem(4001078,-400);
					cm.gainItem(4000235,-400);
					cm.gainItem(4000262,-400);

                   var ii = MapleItemInformationProvider.getInstance();
                   var type = ii.getInventoryType(402037);	
                   var toDrop = ii.randomizeStats(ii.getEquipById(402037)).copy();
                       //toDrop.setExp(1);
                        toDrop.setFlag(0);//����//1��ӡ//2���Խ�+��//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
						toDrop.setStr(0);//����
						toDrop.setDex(0);//����
						toDrop.setInt(0);//����
						toDrop.setLuk(0);//����
                        toDrop.setWatk(0);//������
						toDrop.setMatk(0);//ħ������
						toDrop.setWdef(0);//�������
						toDrop.setMdef(0);//ħ������
						toDrop.setSpeed(0);//�ƶ��ٶ�
						toDrop.setHp(500);
						toDrop.setMp(500);
						toDrop.setOwner("����");
                        cm.getPlayer().getInventory(type).addItem(toDrop);
                        cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
					cm.sendOk("�������!");
					cm.worldMessage(6,"��� "+cm.getName()+" ������иŬ�������ڶ���������С�");
					cm.dispose();
				}else{
				cm.sendOk("��ȷ����Ĳ����㹻����Ǯ��������!");
				cm.dispose();
				}
            break;
		case 2:
          var sld = cm.getBossRank("����������",2);
		    cm.sendOk("#e#bfalse = δ�ﵽ true = �Ѵﵽ#k\r\n\r\n#v4001078#  x 200 = #r"+cm.haveItem(4001078,200)+"#k\r\n#v4000235##  x 50 = #r"+cm.haveItem(4000235,50)+"#k\r\n#v4000262#  x 200 = #r"+cm.haveItem(4000262,200)+"#k\r\n#v4000263#  x 200 = #r"+cm.haveItem(4000263,200)+"#k\r\n#v4000030#  x 200 = #r"+cm.haveItem(4000030,200)+"#k\r\n#v4000268#  x 200 = #r"+cm.haveItem(4000268,200)+"#k\r\n#v4000269#  x 200 = #r"+cm.haveItem(4000269,200)+"#k\r\n���������;"+(1999-sld)+"");
            cm.dispose();
          
            break;	
	 
			 
			 
			 
		}
    }
}
