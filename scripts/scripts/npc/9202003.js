status = -1;
var maxTcmes = 900;
var itemList = Array(
Array(03010002 ,900,1),
Array(03010003 ,900,1),
Array(03010006 ,900,1),


);
var transId = 4032226;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        var chance = Math.floor(Math.random() * maxTcmes);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            if(!cm.haveItem(transId)){
                cm.sendOk("��û��#b#t"+ transId +"##k�����޷�Ϊ���齱");
                cm.dispose();
		return;
            }
            
            if (cm.getInventory(3).isFull()){
                cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷���ȡ.");
                cm.dispose();
            } 
            cm.gainItem(itemId,quantity);
            cm.gainItem(transId,-1);
            cm.sendOk("��ϲ����ȡ����#z"+itemId+"##v"+itemId+"# x #r" + quantity + " #k��");
            cm.dispose();
        } else {
            cm.sendOk("�������������ʲô��û���õ���");
            cm.dispose();
        }
    }
}
