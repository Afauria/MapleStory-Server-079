importPackage(net.sf.cherry.tools);
importPackage(net.sf.cherry.client);

var status = 0;

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
	    var textz = "#d��������԰�������120������\r\n#b��Ҫ��ְҵ77����+#v4001083##z4001083#+#v4001084##z4001084#+#v4001085##z4001085#+#v4000463##z4000463#*50+#v4031456##z4031456#*300+���1500W    \r\n";
		

  textz += "#d#L1#1.#v1302081##z1302081# ��Ҫ:#v1302142##z1302142#\r\n";
   textz += "#L2#2.#v1332073##z1332073# ��Ҫ:#v1332114##z1332114# \r\n";
  textz += "#L3#3.#v1372044##z1372044 # ��Ҫ:#v1372071##z1372071#\r\n";
  textz += "#L4#4.#v1382057##z1382057# ��Ҫ:#v1382093##z1382093# \r\n";
   textz += "#L5#5.#v1402046##z1402046# ��Ҫ:#v1402085##z1402085# \r\n";
   textz += "#L6#6.#v1432047##z1432047# ��Ҫ:#v1432075##z1432075# \r\n";
   textz += "#L7#7.#v1442063##z1442063# ��Ҫ:#v1442104##z1442104# \r\n";
   textz += "#L8#8.#v1452057##z1452057# ��Ҫ:#v1452100##z1452100# \r\n";
   textz += "#L9#11.#v1462050##z1462050# ��Ҫ:#v1462085##z1462085# \r\n";
  textz += "#L10#2.#v1472068##z1472068# ��Ҫ:#v1472111##z1472111# \r\n";
  textz += "#L11#9.#v1312037##z1312037# ��Ҫ:#v1312056##z1312056# \r\n";
  textz += "#L12#3.#v1322060##z1322060# ��Ҫ:#v1322084##z1322084# \r\n";

  textz += "#L13#9.#v1482023##z1482023# ��Ҫ:#v1482073##z1482073#  \r\n";
  textz += "#L14#10.#v1492023##z1492023# ��Ҫ:#v1492073##z1492073#  \r\n";
  //textz += "#L15#6.#v1102612##z1102612# ��Ҫ:#v4251202#7��#v4001129#1��  \r\n";
  //textz += "#L16#7.#v1003946##z1003946# ��Ҫ:#v4251202#7��#v4001129#1��  \r\n";
  //textz += "#L17#8.#v1072853##z1072853# ��Ҫ:#v4251202#7��#v4001129#1�� \r\n";




		cm.sendSimple (textz);  

	}else if (status == 1) {

	       if (selection == 1){
           	if (cm.getMeso() < 15000000) { 
				cm.sendOk("#bװ��ǿ����Ҫ1500W��ң����Ľ�Ҳ���#k");
				cm.dispose();
			} else if (cm.itemQuantity(1302142) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v1302142#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001083) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4001083#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001084) < 1  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4001084#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001085) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4001085#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4000463) < 50 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4000463#*50��������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4031456) < 300  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4031456#*300��������Ʒ����#k");
				cm.dispose();
	
			
			
			}else{
				cm.gainItem(1302142, -1);
				cm.gainItem(4001083, -1);
				cm.gainItem(4001084, -1);
				cm.gainItem(4001085, -1);
				cm.gainItem(4000463, -50);
				cm.gainItem(4031456, -300);			
				cm.gainItem(1302081, 30,30,30,30,0,0,150,150,1,1,1,1,0,0);
				cm.gainMeso(-15000000);
            cm.sendOk("�����ɹ���");
            cm.dispose();
			}

       } else if (selection == 2){
            	if (cm.getMeso() < 15000000) { 
				cm.sendOk("#bװ��ǿ����Ҫ1500W��ң����Ľ�Ҳ���#k");
				cm.dispose();
			} else if (cm.itemQuantity(1332114) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v1332114#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001083) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4001083#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001084) < 1  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4001084#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001085) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4001085#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4000463) < 50 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4000463#*50��������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4031456) < 300  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4031456#*300��������Ʒ����#k");
				cm.dispose();
	
			
			
			}else{
				cm.gainItem(1332114, -1);
				cm.gainItem(4001083, -1);
				cm.gainItem(4001084, -1);
				cm.gainItem(4001085, -1);
				cm.gainItem(4000463, -50);
				cm.gainItem(4031456, -300);			
				cm.gainItem(1332073, 30,30,30,30,0,0,150,150,1,1,1,1,0,0);
				cm.gainMeso(-15000000);
            cm.sendOk("�����ɹ���");
            cm.dispose();
			}

       } else if (selection == 3){
                 	if (cm.getMeso() < 15000000) { 
				cm.sendOk("#bװ��ǿ����Ҫ1500W��ң����Ľ�Ҳ���#k");
				cm.dispose();
			} else if (cm.itemQuantity(1372071) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v1372071#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001083) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4001083#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001084) < 1  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4001084#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001085) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4001085#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4000463) < 50 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4000463#*50��������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4031456) < 300  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4031456#*300��������Ʒ����#k");
				cm.dispose();
	
			
			
			}else{
				cm.gainItem(1372071, -1);
				cm.gainItem(4001083, -1);
				cm.gainItem(4001084, -1);
				cm.gainItem(4001085, -1);
				cm.gainItem(4000463, -50);
				cm.gainItem(4031456, -300);			
				cm.gainItem(1372044, 30,30,30,30,0,0,150,150,1,1,1,1,0,0);
				cm.gainMeso(-15000000);
            cm.sendOk("�����ɹ���");
            cm.dispose();
			}

       } else if (selection == 4){
             	if (cm.getMeso() < 15000000) { 
				cm.sendOk("#bװ��ǿ����Ҫ1500W��ң����Ľ�Ҳ���#k");
				cm.dispose();
			} else if (cm.itemQuantity(1382093) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v1382093#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001083) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4001083#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001084) < 1  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4001084#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001085) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4001085#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4000463) < 50 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4000463#*50��������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4031456) < 300  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4031456#*300��������Ʒ����#k");
				cm.dispose();
	
			
			
			}else{
				cm.gainItem(1382093, -1);
				cm.gainItem(4001083, -1);
				cm.gainItem(4001084, -1);
				cm.gainItem(4001085, -1);
				cm.gainItem(4000463, -50);
				cm.gainItem(4031456, -300);			
				cm.gainItem(1382057, 30,30,30,30,0,0,150,150,1,1,1,1,0,0);
				cm.gainMeso(-15000000);
            cm.sendOk("�����ɹ���");
            cm.dispose();
			}

       } else if (selection == 5){
                        	if (cm.getMeso() < 15000000) { 
				cm.sendOk("#bװ��ǿ����Ҫ1500W��ң����Ľ�Ҳ���#k");
				cm.dispose();
			} else if (cm.itemQuantity(1402085) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v1402085#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001083) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4001083#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001084) < 1  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4001084#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001085) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4001085#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4000463) < 50 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4000463#*50��������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4031456) < 300  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4031456#*300��������Ʒ����#k");
				cm.dispose();
	
			
			
			}else{
				cm.gainItem(1402085, -1);
				cm.gainItem(4001083, -1);
				cm.gainItem(4001084, -1);
				cm.gainItem(4001085, -1);
				cm.gainItem(4000463, -50);
				cm.gainItem(4031456, -300);			
				cm.gainItem(1402046, 30,30,30,30,0,0,150,150,1,1,1,1,0,0);
				cm.gainMeso(-15000000);
            cm.sendOk("�����ɹ���");
            cm.dispose();
			}

       } else if (selection == 6){//�ϳ�����
                   	if (cm.getMeso() < 15000000) { 
				cm.sendOk("#bװ��ǿ����Ҫ1500W��ң����Ľ�Ҳ���#k");
				cm.dispose();
			} else if (cm.itemQuantity(1432075) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v1432075#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001083) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4001083#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001084) < 1  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4001084#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001085) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4001085#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4000463) < 50 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4000463#*50��������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4031456) < 300  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4031456#*300��������Ʒ����#k");
				cm.dispose();
	
			
			
			}else{
				cm.gainItem(1432075, -1);
				cm.gainItem(4001083, -1);
				cm.gainItem(4001084, -1);
				cm.gainItem(4001085, -1);
				cm.gainItem(4000463, -50);
				cm.gainItem(4031456, -300);			
				cm.gainItem(1432047, 30,30,30,30,0,0,150,150,1,1,1,1,0,0);
				cm.gainMeso(-15000000);
            cm.sendOk("�����ɹ���");
            cm.dispose();
			}

       } else if (selection == 7){
         	if (cm.getMeso() < 15000000) { 
				cm.sendOk("#bװ��ǿ����Ҫ1500W��ң����Ľ�Ҳ���#k");
				cm.dispose();
			} else if (cm.itemQuantity(1442104) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v1442104#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001083) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4001083#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001084) < 1  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4001084#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001085) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4001085#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4000463) < 50 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4000463#*50��������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4031456) < 300  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4031456#*300��������Ʒ����#k");
				cm.dispose();
	
			
			
			}else{
				cm.gainItem(1442104, -1);
				cm.gainItem(4001083, -1);
				cm.gainItem(4001084, -1);
				cm.gainItem(4001085, -1);
				cm.gainItem(4000463, -50);
				cm.gainItem(4031456, -300);			
				cm.gainItem(1442063, 30,30,30,30,0,0,150,150,1,1,1,1,0,0);
				cm.gainMeso(-15000000);
            cm.sendOk("�����ɹ���");
            cm.dispose();
			}
       } else if (selection == 8){
          	if (cm.getMeso() < 15000000) { 
				cm.sendOk("#bװ��ǿ����Ҫ1500W��ң����Ľ�Ҳ���#k");
				cm.dispose();
			} else if (cm.itemQuantity(1452100) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v1452100#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001083) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4001083#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001084) < 1  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4001084#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001085) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4001085#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4000463) < 50 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4000463#*50��������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4031456) < 300  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4031456#*300��������Ʒ����#k");
				cm.dispose();
	
			
			
			}else{
				cm.gainItem(1452100, -1);
				cm.gainItem(4001083, -1);
				cm.gainItem(4001084, -1);
				cm.gainItem(4001085, -1);
				cm.gainItem(4000463, -50);
				cm.gainItem(4031456, -300);			
				cm.gainItem(1452057, 30,30,30,30,0,0,150,150,1,1,1,1,0,0);
				cm.gainMeso(-15000000);
            cm.sendOk("�����ɹ���");
            cm.dispose();
			}

       } else if (selection == 9){
              	if (cm.getMeso() < 15000000) { 
				cm.sendOk("#bװ��ǿ����Ҫ1500W��ң����Ľ�Ҳ���#k");
				cm.dispose();
			} else if (cm.itemQuantity(1462085) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v1462085#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001083) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4001083#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001084) < 1  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4001084#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001085) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4001085#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4000463) < 50 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4000463#*50��������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4031456) < 300  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4031456#*300��������Ʒ����#k");
				cm.dispose();
	
			
			
			}else{
				cm.gainItem(1462085, -1);
				cm.gainItem(4001083, -1);
				cm.gainItem(4001084, -1);
				cm.gainItem(4001085, -1);
				cm.gainItem(4000463, -50);
				cm.gainItem(4031456, -300);			
				cm.gainItem(1462050, 30,30,30,30,0,0,150,150,1,1,1,1,0,0);
				cm.gainMeso(-15000000);
            cm.sendOk("�����ɹ���");
            cm.dispose();
			}

       } else if (selection == 10){
          	if (cm.getMeso() < 15000000) { 
				cm.sendOk("#bװ��ǿ����Ҫ1500W��ң����Ľ�Ҳ���#k");
				cm.dispose();
			} else if (cm.itemQuantity(1312056) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v1312056#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001083) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4001083#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001084) < 1  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4001084#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001085) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4001085#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4000463) < 50 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4000463#*50��������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4031456) < 300  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4031456#*300��������Ʒ����#k");
				cm.dispose();
	
			
			
			}else{
				cm.gainItem(1472111, -1);
				cm.gainItem(4001083, -1);
				cm.gainItem(4001084, -1);
				cm.gainItem(4001085, -1);
				cm.gainItem(4000463, -50);
				cm.gainItem(4031456, -300);			
				cm.gainItem(1472068, 30,30,30,30,0,0,150,150,1,1,1,1,0,0);
				cm.gainMeso(-15000000);
            cm.sendOk("�����ɹ���");
            cm.dispose();
			}
       } else if (selection == 11){
                	if (cm.getMeso() < 15000000) { 
				cm.sendOk("#bװ��ǿ����Ҫ1500W��ң����Ľ�Ҳ���#k");
				cm.dispose();
			} else if (cm.itemQuantity(1312056) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v1312056#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001083) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4001083#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001084) < 1  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4001084#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001085) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4001085#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4000463) < 50 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4000463#*50��������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4031456) < 300  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4031456#*300��������Ʒ����#k");
				cm.dispose();
	
			
			
			}else{
				cm.gainItem(1315056, -1);
				cm.gainItem(4001083, -1);
				cm.gainItem(4001084, -1);
				cm.gainItem(4001085, -1);
				cm.gainItem(4000463, -50);
				cm.gainItem(4031456, -300);			
				cm.gainItem(1312037, 30,30,30,30,0,0,150,150,1,1,1,1,0,0);
				cm.gainMeso(-15000000);
            cm.sendOk("�����ɹ���");
            cm.dispose();
			}
       } else if (selection == 12){
                  	if (cm.getMeso() < 15000000) { 
				cm.sendOk("#bװ��ǿ����Ҫ1500W��ң����Ľ�Ҳ���#k");
				cm.dispose();
			} else if (cm.itemQuantity(1322084) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v1322084#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001083) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4001083#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001084) < 1  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4001084#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001085) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4001085#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4000463) < 50 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4000463#*50��������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4031456) < 300  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4031456#*300��������Ʒ����#k");
				cm.dispose();
	
			
			
			}else{
				cm.gainItem(1322084, -1);
				cm.gainItem(4001083, -1);
				cm.gainItem(4001084, -1);
				cm.gainItem(4001085, -1);
				cm.gainItem(4000463, -50);
				cm.gainItem(4031456, -300);			
				cm.gainItem(1322060, 30,30,30,30,0,0,150,150,1,1,1,1,0,0);
				cm.gainMeso(-15000000);
            cm.sendOk("�����ɹ���");
            cm.dispose();
			}
       } else if (selection == 13){
                  	if (cm.getMeso() < 15000000) { 
				cm.sendOk("#bװ��ǿ����Ҫ1500W��ң����Ľ�Ҳ���#k");
				cm.dispose();
			} else if (cm.itemQuantity(1482073) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v1482073#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001083) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4001083#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001084) < 1  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4001084#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001085) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4001085#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4000463) < 50 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4000463#*50��������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4031456) < 300  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4031456#*300��������Ʒ����#k");
				cm.dispose();
	
			
			
			}else{
				cm.gainItem(1482073, -1);
				cm.gainItem(4001083, -1);
				cm.gainItem(4001084, -1);
				cm.gainItem(4001085, -1);
				cm.gainItem(4000463, -50);
				cm.gainItem(4031456, -300);			
				cm.gainItem(1482023, 30,30,30,30,0,0,150,150,1,1,1,1,0,0);
				cm.gainMeso(-15000000);
            cm.sendOk("�����ɹ���");
            cm.dispose();
			}
	} else if (selection == 14){ 
                 	if (cm.getMeso() < 15000000) { 
				cm.sendOk("#bװ��ǿ����Ҫ1500W��ң����Ľ�Ҳ���#k");
				cm.dispose();
			} else if (cm.itemQuantity(1492073) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v1492073#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001083) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4001083#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001084) < 1  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4001084#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4001085) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4001085#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4000463) < 50 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4000463#*50��������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4031456) < 300  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4031456#*300��������Ʒ����#k");
				cm.dispose();
	
			
			
			}else{
				cm.gainItem(1492073, -1);
				cm.gainItem(4001083, -1);
				cm.gainItem(4001084, -1);
				cm.gainItem(4001085, -1);
				cm.gainItem(4000463, -50);
				cm.gainItem(4031456, -300);			
				cm.gainItem(1492023, 30,30,30,30,0,0,150,150,1,1,1,1,0,0);
				cm.gainMeso(-15000000);
            cm.sendOk("�����ɹ���");
            cm.dispose();
			}

}
}
}
}
