function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 1; i++) {
                text += "";
            }
			//��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
            text += "#e#d����#v1492073#��Ҫ#v1302064#1.#v1332056#1.#v1372034#1.#v1382039#1.#v1432040#1.#v1442051#1.#v1452045#1.#v1462040#1.#v1402039#1.#v1472055#1.#v1312032#1.#v1322054#1.#v1482022#1.#v1492022#1.#v4002000#50.ð�ձ�500���Ѽ��õ����ҾͿ���Ϊ��������.#l\r\n\r\n"//3
            text += "#L1##r������Ҷ����#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			if (cm.getMeso() < 5000000) { 
				cm.sendOk("#bװ��ǿ����Ҫ 500W��ң����Ľ�Ҳ���#k");
				cm.dispose();
			} else if (cm.itemQuantity(1302064) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v1302064#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(1332056) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4000048#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(1372034) < 1  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4000051#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(1382039) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4000052#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(1432040) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4000049#1�ţ�������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(1442051) < 1  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4000050#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(1452045) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4000056#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(1462040) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4000057#1�ţ�������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(1402039) < 1  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4000053#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(1472055) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4000054#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(1312032) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4000069#1�ţ�������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(1322054) < 1  ) { 
 				cm.sendOk("#bװ��ǿ����Ҫ#v4000082#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(1482022) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4000472#1����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(1492022) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4000470#1�ţ�������Ʒ����#k");
				cm.dispose();
			
			 } else if (cm.itemQuantity(4002000) < 50 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4000470#1�ţ�������Ʒ����#k");
				cm.dispose();
			
			
			}else{
				cm.gainItem(1302064, -1);
				cm.gainItem(1332056, -1);
				cm.gainItem(1372034, -1);
				cm.gainItem(1382039, -1);
				cm.gainItem(1432040, -1);
				cm.gainItem(1442051, -1);
				cm.gainItem(1452045, -1);
				cm.gainItem(1462040, -1);
				cm.gainItem(1402039, -1);
				cm.gainItem(1472055, -1);
				cm.gainItem(1312032, -1);
				cm.gainItem(1322054, -1);
				cm.gainItem(1482022, -1);
				cm.gainItem(1492022, -1);
				cm.gainItem(4002000, -50);
				cm.gainItem(1492073, 20,20,20,20,0,0,120,120,1,1,1,1,0,0);
				cm.gainMeso(-5000000);
            cm.sendOk("�����ɹ���");
            cm.dispose();
			}
		}
    }
}


