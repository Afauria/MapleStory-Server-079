var status = 0;
var itemList =   
Array(   
Array(1102481,100,1,1),//	�������Ǵ�˹����      սʿ
Array(1082543,100,1,1),//	�������Ǵ�˹����
Array(1072743,100,1,1),//	�������Ǵ�˹ѥ
Array(1132174,100,1,1),//	�������Ǵ�˹����

Array(1102482,110,1,1),//	�����ն�÷˹����      ��ʦ
Array(1082544,110,1,1),//	�����ն�÷˹����
Array(1072744,110,1,1),//	�����ն�÷˹ѥ	 
Array(1132175,110,1,1),//	�����ն�÷˹����

Array(1102483,100,1,1),//	������������          ������
Array(1082545,100,1,1),//	������������
Array(1072745,100,1,1),//	��������ѥ
Array(1132176,100,1,1),//	������������

Array(1102484,100,1,1),//	��������������        ����
Array(1082546,100,1,1),//	��������������
Array(1072746,100,1,1),//	����������ѥ
Array(1132177,100,1,1),//	��������������	 
	 
Array(1102485,100,1,1),//	��������̩����	      ����
Array(1082547,100,1,1),//	��������̩����
Array(1072747,100,1,1),//	��������̩ѥ	 
Array(1132178,100,1,1)//        ��������̩����
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
           selStr = "#e#r���������Ի��������Ʒ��100%���#g\r\n�Ͻ���������~#n#k\r\n";
		   for (i = 0; i < itemList.length; i++) {
                selStr += "#d#v" + itemList[i][0] + "#";
            }
			
			cm.sendOk(selStr);
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
		selStr = "\r\n";
		   for (i = 0; i < itemList.length; i++) {
                selStr += "#d#v" + itemList[i][0] + "#";
            }
        if (cm.haveItem(4000463, 18)) {
            cm.sendYesNo("��ӭ���������齱��ÿ�γ齱��Ҫ#r18��#v4000463#\r\n"+selStr);
        } else {
            cm.sendOk("��ӭ���������齱��ÿ�γ齱��Ҫ#r18��#v4000463#\r\n"+selStr);
            cm.safeDispose();
        }
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * 200);
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
            item = cm.gainGachaponItem(itemId, quantity, "�����齱", notice);
            if (item != -1) {
                cm.gainItem(4000463, -18);
                cm.sendOk("������ #b#t" + item + "##k " + quantity + "����");
            } else {
                cm.sendOk("��ȷʵ��#b#v4000463##k������ǣ�����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
            }
            cm.safeDispose();
        }
    }
}