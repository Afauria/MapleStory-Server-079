
status = -1;
var itemList = Array(
Array(2340000, 50, 1, 1), //ף������
Array(2049100, 50, 1, 1),//�������60%
Array(2040801, 400, 1, 1), //�������ݾ���60%
Array(2040802, 600, 1, 1), //�������ݾ���10%
Array(2040804, 400, 1, 1), //���׹�������60%
Array(2040805, 200, 1, 1), //���׹�������10%
Array(2040808, 500, 1, 1), //���������������70%
Array(2040809, 500, 1, 1), //���������������30%
Array(2040810, 100, 1, 1), //���׹����������70%
Array(2040811, 100, 1, 1), //���׹����������30%
Array(2040814, 500, 1, 1), //����ħ���������70%
Array(2040815, 500, 1, 1), //����ħ���������30%
Array(2040816, 500, 1, 1), //����ħ������10%
Array(2040817, 500, 1, 1), //����ħ������60%
Array(2040819, 500, 1, 1), //�������ݾ���65%
Array(2040820, 500, 1, 1), //�������ݾ���15%
Array(2040821, 600, 1, 1), //���׹�������65%
Array(2040822, 600, 1, 1), //���׹�������15%
Array(2040906, 500, 1, 1), //������������70%
Array(2040907, 500, 1, 1), //������������30%
Array(2040914, 600, 1, 1), //���ƹ�������60%
Array(2040915, 600, 1, 1), //���ƹ�������10%
Array(2040916, 400, 1, 1), //���ƹ����������70%
Array(2040917, 200, 1, 1), //���ƹ����������30%
Array(2040919, 200, 1, 1), //����ħ������60%
Array(2040920, 600, 1, 1), //����ħ������10%
Array(2040921, 600, 1, 1), //����ħ���������70%
Array(2040922, 400, 1, 1), //����ħ���������30%
Array(2040924, 600, 1, 1), //������������60%
Array(2040925, 400, 1, 1), //������������10%
Array(2040930, 600, 1, 1), //������������70%
Array(2040931, 200, 1, 1), //������������60%
Array(2040932, 100, 1, 1), //������������30%
Array(2040933, 600, 1, 1), //������������10%
Array(2041201, 600, 1, 1), //������������10%
Array(2041202, 600, 1, 1), //������������60%
Array(2041204, 600, 1, 1), //���������������30%
Array(2041205, 600, 1, 1), //���������������70%
Array(2041206, 600, 1, 1), //������������10%
Array(2041207, 600, 1, 1), //������������60%
Array(2041209, 600, 1, 1), //���������������30%
Array(2041210, 600, 1, 1), //���������������70%
Array(2041301, 600, 1, 1), //������������60%
Array(2041304, 600, 1, 1), //������������60%
Array(2041307, 600, 1, 1), //�������ݾ���60%
Array(2041310, 600, 1, 1) //������������60%

);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("�ټ��ð��͡�");
            cm.dispose();
        }
        status--;
    }
		if (status == 0) {
			if(cm.haveItem(4170001,5)) {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendYesNo("����5��#v4170001#��ȡ������Ʒ!\r\n#k��ǰӵ��:#c4170001# ���� ������ȫ����Ʒ:" + str1);
			} else {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendOk("����5��#v4170001#��ȡ������Ʒ!\r\n#k��ǰӵ��:#c4170001# ���� ������ȫ����Ʒ:" + str1);
				cm.dispose();
			}
		} else if (status == 1){	
        var chance = Math.floor(Math.random() * 700);
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
            var notice = finalitem[finalchance][3];
            item = cm.gainGachaponItem(itemId, quantity, "����", notice);
            if (item != -1) {
				//cm.setmoneyb(-5);
cm.gainItem(4170001, -5);//�����Ʒ
                cm.sendOk("������ #b#t" + item + "##k " + quantity + "����");
            } else {
                cm.sendOk("����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("��ôû��ס�򰡣����˻��㱦ʯ�ɡ�");
           // cm.setmoneyb(-5);
//cm.gainItem(4170001, 5);//�����Ʒ
			//cm.gainNX(1000);	//�Ӽ���ȯ
            cm.safeDispose();
        }
    }
}















