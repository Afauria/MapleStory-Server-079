
status = -1;
var itemList = Array(
			Array(2043002,1000, 1, 1), //���ֽ���������
			Array(2044002,1000, 1, 1), //˫�ֽ���������
			Array(2044302,1000, 1, 1), //ǹ������������
			Array(2044402,1000, 1, 1), //ì������������
			Array(2044502,1000, 1, 1), //��������������
			Array(2044602,1000, 1, 1), //�󹥻�
			Array(2043702,1000, 1, 1), //���ȹ���
			Array(2043802,1000, 1, 1), //���ȹ���
			Array(2043302,1000, 1, 1), //�̽�����
			Array(2044702,1000, 1, 1), //ȭ�׹���
			Array(2044902,1000, 1, 1), //��ǹ����
			Array(2044802,1000, 1, 1), //ָ�ڹ���
			Array(2040805,1000, 1, 1), //���׹���
			Array(2043003,800, 1, 1), //���ֽ���������(�س�)
			Array(2044003,800, 1, 1), //˫�ֽ���������(�س�)
			Array(2044303,800, 1, 1), //ǹ������������(�س�)
			Array(2044403,800, 1, 1), //ì������������(�س�)
			Array(2044503,800, 1, 1), //��������������(�س�)
			Array(2044603,800, 1, 1), //�󹥻��سɾ�
			Array(2043703,800, 1, 1), //���ȹ����سɾ�
			Array(2043803,800, 1, 1), //���ȹ�������(�س�)
			Array(2043303,800, 1, 1), //�̽������سɾ�
			Array(2044703,800, 1, 1), //ȭ�׹�������(�س�)
			Array(2044908,800, 1, 1), //��ǹ��������(�س�)
			Array(2044815,800, 1, 1), //ָ�ڹ����سɾ�
			Array(2040807,800, 1, 1), //���׹�������(�س�)
			//Array(2043701,1000, 1, 1), //����ħ��
			//Array(2043801,1000, 1, 1), //����ħ��
			Array(2040506,800, 1, 1), //ȫ���������ݾ���(�س�)
			//Array(2040303 ,500, 1, 1), //���������سɾ�(�س�)
			Array(2040710,800, 1, 1) //Ь����Ծ����(�س�)

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
			if(cm.haveItem(4001323,5)) {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendYesNo("����5��#v4001323#��ȡ������Ʒ!\r\n#k��ǰӵ��:#c4001323# ���� ������ȫ����Ʒ:" + str1);
			} else {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendOk("����5��#v4001323#��ȡ������Ʒ!\r\n#k��ǰӵ��:#c4001323# ���� ������ȫ����Ʒ:" + str1);
				cm.dispose();
			}
		} else if (status == 1){	
        var chance = Math.floor(Math.random() * 500);
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
            item = cm.gainGachaponItem(itemId, quantity, "���˺챦ʯ", notice);
            if (item != -1) {
				//cm.setmoneyb(-5);
cm.gainItem(4001323, -5);//�����Ʒ
                cm.sendOk("������ #b#t" + item + "##k " + quantity + "����");
            } else {
                cm.sendOk("����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("��ôû��ס�򰡣����˻��㱦ʯ�ɡ�");
           // cm.setmoneyb(-5);
//cm.gainItem(4001323, 5);//�����Ʒ
			//cm.gainNX(1000);	//�Ӽ���ȯ
            cm.safeDispose();
        }
    }
}















