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
	    if ( cm.getMapId() == 10000) {
            cm.sendOk(" �� �� ð �� �� �� �� �� �� ʹ �� �� �� �� ��");
            cm.dispose();
        }


  
    else if (status == 0) {
		
		
   var  
	    selStr = "װ��չʾ��#v1022079#\r\n";
		//selStr += "���������ȣ�400 \r\n";
		selStr += "#b#L0#"+��ͷ+"���ؽ���#l\r\n";
		selStr += "#L2#"+��ͷ+"������ϸ \r\n";
		selStr += "#L3#"+��ͷ+"װ������ \r\n";
		
		if(cm.haveItem(4000007,999)&&cm.haveItem(4000004,999)&&!cm.getInventory(1).isFull()) {
		selStr += "#r#e#L1#"+��ͷ+"��ʼ����#l\r\n";
   }else {}
				
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
					
        case 0:
            cm.dispose();
            cm.openNpc(9900004,0);	
            break;
		case 1:
           if(cm.haveItem(4000007,999)&&cm.haveItem(4000004,999)&&!cm.getInventory(1).isFull()){
					cm.gainItem(4000007,-999);
					cm.gainItem(4000004,-999);
	


                   var ii = MapleItemInformationProvider.getInstance();
                   var type = ii.getInventoryType(1022079);	
                   var toDrop = ii.randomizeStats(ii.getEquipById(1022079)).copy();
				  // var mz =  cm.getChar().getName();
                       //toDrop.setExp(1);
                        toDrop.setFlag(1);//����//1��ӡ//2���Խ�+��//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
						toDrop.setStr(10);//����
						toDrop.setDex(10);//����
						toDrop.setInt(10);//����
						toDrop.setLuk(10);//����
                        toDrop.setWatk(0);//������
						toDrop.setMatk(0);//ħ������
						toDrop.setWdef(0);//�������
						toDrop.setMdef(0);//ħ������
						toDrop.setSpeed(0);//�ƶ��ٶ�
						toDrop.setJump(0)//��Ծ
						toDrop.setHp(1000);
						toDrop.setMp(1000);
						toDrop.setOwner("����");
                        cm.getPlayer().getInventory(type).addItem(toDrop);
                        cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
					cm.sendOk("�������");
				//	cm.setBossRankCount("����������",100);
				//	cm.setBossRankCount("�߼��۾�");	
				cm.completeQuest(1200000000);
					//cm.worldMessage(6,"��� "+cm.getName()+" ������иŬ�������ڶ����������ά�۾���");
					cm.dispose();
				}else{
				cm.sendOk("��ȷ����Ĳ����㹻����Ǯ��������!");
				cm.dispose();
				}
            break;
		case 2:
          var sld = cm.getBossRank("����������",2);
		    cm.sendOk("����Ҫ�Ĳ��ϣ�\r\n\r\n#v4000007#   ��999 / #r#c4000007##k)\r\n#v4000004#   ��999 / #r#c4000004##k)\r\n");
			cm.dispose();
		case 3:
		    cm.sendOk("\t���ԣ�\r\n\r\n\t#r���������ݣ�����������+10 HP,MP+1000\r\n\r\n");
            cm.dispose();
          
            break;	
	 
			 
			 
			 
		}
    }
}
