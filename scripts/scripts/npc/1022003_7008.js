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

	    selStr = "װ��չʾ��#v1012289#\r\n";
		//selStr += "���������ȣ�1700 \r\n";
		selStr += "#b#L0#"+��ͷ+"���ؽ���#l\r\n";
		selStr += "#L2#"+��ͷ+"������ϸ \r\n";
		selStr += "#L3#"+��ͷ+"װ������ \r\n";
		selStr += "#L4#"+��ͷ+"������� \r\n";
		
		if(cm.haveItem(4021000,70) && cm.haveItem(4021001,70) && cm.haveItem(4021002,70) && cm.haveItem(4021003,70) && cm.haveItem(4021004,70) && cm.haveItem(4021005,70) && cm.haveItem(4021006,70)&& cm.haveItem(4021007,70)&& cm.haveItem(4021008,70)&& cm.haveItem(4011007,15)&& cm.haveItem(4021009,15)&&!cm.getInventory(1).isFull()) {
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
           if(cm.haveItem(4021000,70) && cm.haveItem(4021001,70) && cm.haveItem(4021002,70) && cm.haveItem(4021003,70) && cm.haveItem(4021004,70) && cm.haveItem(4021005,70) && cm.haveItem(4021006,70)&& cm.haveItem(4021007,70)&& cm.haveItem(4021008,70)&& cm.haveItem(4011007,15)&& cm.haveItem(4021009,15)&&!cm.getInventory(1).isFull()){
				cm.gainItem(4021000, -70);
				cm.gainItem(4021001, -70);
				cm.gainItem(4021002, -70);
				cm.gainItem(4021003, -70);
				cm.gainItem(4021004, -70);
				cm.gainItem(4021005, -70);
				cm.gainItem(4021006, -70);
				cm.gainItem(4021007, -70);
				cm.gainItem(4021008, -70);
			//	cm.gainItem(4021009, -70);
				cm.gainItem(4011007, -15);
				cm.gainItem(4021009, -15);
                   var ii = MapleItemInformationProvider.getInstance();
                   var type = ii.getInventoryType(1012289);	
                   var toDrop = ii.randomizeStats(ii.getEquipById(1012289)).copy();
				  // var mz =  cm.getChar().getName();
                       //toDrop.setExp(1);
                        toDrop.setFlag(1);//����//1��ӡ//2���Խ�+��//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
						toDrop.setStr(70);//����
						toDrop.setDex(70);//����
						toDrop.setInt(70);//����
						toDrop.setLuk(70);//����
                        toDrop.setWatk(0);//������
						toDrop.setMatk(0);//ħ������
						toDrop.setWdef(0);//�������
						toDrop.setMdef(0);//ħ������
						toDrop.setSpeed(0);//�ƶ��ٶ�
						toDrop.setJump(0)//��Ծ
						toDrop.setHp(0);
						toDrop.setMp(0);
						toDrop.setOwner("�߼�");
                        cm.getPlayer().getInventory(type).addItem(toDrop);
                        cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
					//cm.sendOk("������ɡ������ȣ�+700");
					//cm.setBossRankCount("����������",700);
					//cm.setBossRankCount("�������۾�");	
					cm.completeQuest(1100000000);
					//cm.worldMessage(6,"��� "+cm.getName()+" ������иŬ�������ڶ�����۾���");
					cm.dispose();
				}else{
				cm.sendOk("��ȷ����Ĳ����㹻����Ǯ��������!���а���һ��Ҫ����������λ�Ҳſ��Ը���������");
				cm.dispose();
				}
            break;
		case 2:
          var sld = cm.getBossRank("����������",2);
		   cm.sendOk("����Ҫ�Ĳ��ϣ�\r\n\r\n#v4021006#   ��70 / #r#c4021006##k)\r\n#v4021007#   ��70 / #r#c4021007##k)\r\n#v4021008#   ��70 / #r#c4021008##k)\r\n#v4021000#   ��70 / #r#c4021000##k)\r\n#v4021001#   ��70 / #r#c4021001##k)\r\n#v4021002#   ��70 / #r#c4021002##k)\r\n#v4021003#   ��70 / #r#c4021003##k)\r\n#v4021004#   ��70 / #r#c4021004##k)\r\n#v4021005#   ��70 / #r#c4021005##k)\r\n#v4011007#   ��15 / #r#c4011007##k)\r\n#v4021009#   ��15 / #r#c4021009##k)\r\n");
            cm.dispose();
		case 3:
		    cm.sendOk("\t���ԣ�\r\n\r\n\t#r���������ݣ�����������+70\r\n\r\n");
            cm.dispose();
          
            break;	
		case 4:
		    cm.sendOk("������һֱ��֪���Լ���ʲô���ӵģ����ʹ���ʹ����ʹ˵��ֻҪ�㾭�������������ҵ������Լ���������ס���ʹ��Ϊ������ĺ��������ź���֮������ܹ�ϵ�������������š����š���������\r\n��ʹ���������ϸ�����������ּ�⡣��ʹ����������֮�����ģ����Ǵ����������еĸ������䡣\r\n��ʹרע��Ϊ���еľ���������ʶ��ʵ���������������������鵽��ʹ�������޲��İ���\r\n��ʹ������ԥ��ִ������������������񣬴��ż���Ŀ����ṩ�����ǰ����ǻۺ�ָ����ÿһ������߶�һֱ����ʹΧ�ƣ���ʹ���е�Ѱ���Ż�����㽻����\r\n��ʹ���������ϸ��ָ��������飬���쵽�˵����ģ����쵽�¼���ʵ�ڡ�\r\n�����������ʮ����һ�ٸ���һǧ�������ó������򵽣�ֻҪ�ܿ˷��־�Ϳ��Եõ����������˺��п����ҵ�������ֻҪսʤ��а��Ϳ��ѣ��Ϳ��Եõ��������������������ϣ�������֮��ĸ��飬��������֮��Ĺ�������������ı仯��\r\nȻ������������ʹ���㳤ʲô���ӣ�Ư����\r\n��ʱ��ʹ˵������ʵ�ҳ��ú���һ������\r\nԭ����������Ѱ�ҵĹ����У������������ʹһ�������ס�");
            cm.dispose();
          
            break;
	 
			 
			 
			 
		}
    }
}
