var status = 0;
var itemList =   
Array(   




Array(4032366,500,1,1),//1002102//
Array(4032367,500,1,1),// 
Array(4032368,500,1,1),// 
Array(4032369,500,1,1),// 
Array(4032370,500,1,1),// 
Array(4032371,500,5,1)// 

			//-------��һ������ƷID���ڶ����ǳ齱���ʣ��������ǳ齱����,���ĸ����Ƿ���ʾ�齱�㲥(����1�ͻ�㲥)
);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("���ӳ齱��#v2049100#�������/#v2340000#ף������/#v2000005#����ҩˮx50.�����ȡ��һ.");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.haveItem(4032366, 1)) {
				var str1 = "";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendAcceptDecline("��#i4032366#���ɽ��н��ձ��ܻ��\r\n\r\n#r������Ʒչʾ:#k\r\n" + str1);
			} else {
            var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendOk("������û��#r���ʵĺۼ�#k#i4032366#,�޷����б��ܻ��");
				cm.dispose();
			}
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * +1000);
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
            item = cm.gainGachaponItem(itemId, quantity, "ÿ�ձ���", notice);
            if (item != -1) {
                cm.gainItem(4032366, -1);
                cm.sendOk("������ #b#t" + item + "##k " + quantity + "����");
            } else {
                cm.sendOk("��ȷʵ��#b#4110000##k������ǣ�����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
            }
            cm.safeDispose();
        } else {
           cm.sendOk("- �� �� �� �� -");
		   cm.gainItem(4032366, -1);
            cm.safeDispose();
        }
    }
}