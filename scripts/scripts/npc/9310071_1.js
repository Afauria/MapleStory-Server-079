importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);

var status = 0;
var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";

	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function action(mode, type, selection) {
		if (mode == -1) {
		cm.dispose();
		} else {
		if (status >= 0 && mode == 0) {
		cm.dispose();
		return;
		}
		if (mode == 1)
		status++;
		else
		status--;


	if (status == 0) {

	    var textz = "\r\n��ã����Ǵ�����ѡ������Ҫ���װ�� \r\n����װ�������ֻ��һ��Ȩ\r\n";
		
		textz += "#r#L6##v1122017##z1122017#   �����׹ - �� �� #l\r\n\r\n";

		cm.sendSimple (textz);  

	}else if (status == 1) {

	if (selection == 0) {
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r1��#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(5220007,1)) {
 			cm.sendOk("#v5220007##z5220007#��û�и���Ʒ ��Ҫ���̳ǹ����������");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
        var ii = MapleItemInformationProvider.getInstance();		                
		var type = ii.getInventoryType(1302208); //���װ��������/////////////////////////////////////////////////////////////////////
		var toDrop = ii.randomizeStats(ii.getEquipById(1302208)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
		cm.getChar().saveToDB(false, false);
		cm.gainItem(5220007,-1);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
		}
	} else if (selection == 1) {
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(5220007,1)) {
 			cm.sendOk("#v5220007##z5220007#��û�и���Ʒ ��Ҫ���̳ǹ����������#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
			var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1332025); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1332025)).copy(); // ����һ��Equip��
            var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
			toDrop.setExpiration(temptime); 
			cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
			cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
			cm.getChar().saveToDB(false, false);
			cm.gainItem(5220007,-1);
			cm.sendOk("�һ��ɹ�!")
      			cm.dispose();
			}

	}else if (selection == 2){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(5220007,1)) {
 			cm.sendOk("#v5220007##z5220007#��û�и���Ʒ ��Ҫ���̳ǹ����������#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else{
			var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1382012); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1382012)).copy(); // ����һ��Equip��
            var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
toDrop.setExpiration(temptime); 
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
cm.getChar().saveToDB(false, false);
			cm.gainItem(5220007,-1);
			cm.sendOk("�һ��ɹ�!")
      			cm.dispose();
			}

	}else if (selection == 3){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(5220007,1)) {
 			cm.sendOk("#v5220007##z5220007#��û�и���Ʒ ��Ҫ���̳ǹ����������#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else{
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1452022); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1452022)).copy(); // ����һ��Equip��
            var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
			toDrop.setExpiration(temptime); 
			cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
			cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
			cm.getChar().saveToDB(false, false);
			cm.gainItem(5220007,-1);
			cm.sendOk("�һ��ɹ�!")
			cm.dispose();
			}

	}else if (selection == 4){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(5220007,1)) {
 			cm.sendOk("#v5220007##z5220007#��û�и���Ʒ ��Ҫ���̳ǹ����������#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else{
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1462019); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1462019)).copy(); // ����һ��Equip��
            var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
			toDrop.setExpiration(temptime); 
			cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
			cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
			cm.getChar().saveToDB(false, false);
			cm.gainItem(5220007,-1);
			cm.sendOk("�һ��ɹ�!")
      			cm.dispose();
			}

	}else if (selection == 5){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(5220007,1)) {
 			cm.sendOk("#v5220007##z5220007#��û�и���Ʒ ��Ҫ���̳ǹ����������#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else{
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1472032); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1472032)).copy(); // ����һ��Equip��
            var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
			toDrop.setExpiration(temptime); 
			cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
			cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
			cm.getChar().saveToDB(false, false);
			cm.gainItem(5220007,-1);
			cm.sendOk("�һ��ɹ�!")
      			cm.dispose();
			}

	}else if (selection == 6){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(5220007,1)) {
 			cm.sendOk("#v5220007##z5220007#��û�и���Ʒ ��Ҫ���̳ǹ����������#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else{
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1122017); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
            var temptime = (System.currentTimeMillis() + 3 * 24 * 60 * 60 * 1000); //ʱ��
			toDrop.setExpiration(temptime); 
			cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
			cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
			cm.getChar().saveToDB(false, false);
			cm.gainItem(5220007,-1);
			cm.sendOk("�һ��ɹ�!")
      			cm.dispose();
			}
	}else if (selection == 7){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(5220007,1)) {
 			cm.sendOk("#v5220007##z5220007#��û�и���Ʒ ��Ҫ���̳ǹ����������#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1492042); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1492042)).copy(); // ����һ��Equip��
            var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
			toDrop.setExpiration(temptime); 
			cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
			cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
			cm.getChar().saveToDB(false, false);
			cm.gainItem(5220007,-1);
			cm.sendOk("�һ��ɹ�!")
      			cm.dispose();
			}
   }else if (selection == 8){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(5220007,1)) {
 			cm.sendOk("#v5220007##z5220007#��û�и���Ʒ ��Ҫ���̳ǹ����������#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1432012); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1432012)).copy(); // ����һ��Equip��
            var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
			toDrop.setExpiration(temptime); 
			cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
			cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
			cm.getChar().saveToDB(false, false);
			cm.gainItem(5220007,-1);
			cm.sendOk("�һ��ɹ�!")
      			cm.dispose();
	       }
	 }else if (selection == 9){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(5220007,1)) {
 			cm.sendOk("#v5220007##z5220007#��û�и���Ʒ ��Ҫ���̳ǹ����������#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1442024); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1442024)).copy(); // ����һ��Equip��
            var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
			toDrop.setExpiration(temptime); 
			cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
			cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
			cm.getChar().saveToDB(false, false);
			cm.gainItem(5220007,-1);
			cm.sendOk("�һ��ɹ�!")
      			cm.dispose();
}       }
}
}
}
