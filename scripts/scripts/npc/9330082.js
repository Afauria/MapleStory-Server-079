var points;
var NxPoints;
var status = -1;
var sel, select;
var bosspq = 682020000;
var items = [
    /*��������*/
    [
        [1302081, 130000, 1, -1],
        [1312037, 130000, 1, -1],
        [1322060, 130000, 1, -1],
        [1332073, 130000, 1, -1],
        [1332074, 130000, 1, -1],
        [1372044, 130000, 1, -1],
        [1382057, 130000, 1, -1],
        [1402046, 130000, 1, -1],
        [1412033, 130000, 1, -1],
        [1422037, 130000, 1, -1],
        [1432047, 130000, 1, -1],
        [1442063, 130000, 1, -1],
        [1452057, 130000, 1, -1],
        [1462050, 130000, 1, -1],
        [1472068, 130000, 1, -1],
        [1482023, 130000, 1, -1],
        [1492023, 130000, 1, -1],
        [1372040, 160000, 1, -1],
        [1372041, 160000, 1, -1],
        [1372042, 160000, 1, -1],
        [1372039, 160000, 1, -1]
    ],
    /*����*/
    [
        [2070006, 8000, 1, -1],
        [2070005, 4500, 1, -1],
        [2330005, 8000, 1, -1],
        [2331000, 15000, 1, -1],
        [2332000, 15000, 1, -1],		
        [2330007, 300000, 1, -1],		
        [2070019, 300000, 1, -1]
    ],
    /*����*/
    [
        [1122017, 30000, 1, 7],
        [3993002, 10000, 1, -1],
		[3993002, 100000, 10, -1]
    ]
]; //id, price

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var record = cm.getQuestRecord(150001);
    var intPoints = parseInt(points);
    if (mode == 0 || mode == -1 && status == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;

    if (status == 0) {
        points = record.getCustomData() == null ? "0" : record.getCustomData();
        cm.sendSimple("���ã�����#p9330082#\n\r Ŀǰ����:#b" + points + "#k����\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#L3#��������#l\r\n#L5#����#l"); //\r\n #L10#����#l\r\n\r\n#L8#����װ��#l\r\n#L9#��������(116)#l
    } else if (status == 1) {
        select = selection;
        switch (selection) {
            case 0:
                cm.warp(bosspq);
                cm.dispose();
                break;
            case 1:
            case 2:
                cm.sendGetNumber("��Ҫ�ö��� " + (selection == 1 ? "#i3993002#" : "#i3993002#") + " �һ�BOSS ����? \r\n���ڱ�ֵ 1 ��#t3993002# : #b1�����#k\r\n", cm.itemQuantity(selection == 1 ? 3993002 : 3993002), 1, 9999);
                break;
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                chooseItem(selection - 3);
                break;
        }
    } else if (status == 2) {
        sel = selection;
        var itemid = select == 1 ? 3993002 : 3993002;
        var pricemultipy = select == 1 ? 10000 : 10000;
        if (select == 1 || select == 2) {
            if (cm.haveItem(itemid, selection)) {
                intPoints += (pricemultipy * cm.itemQuantity(itemid));
                record.setCustomData("" + intPoints + "");
                cm.gainItem(itemid, -selection);
                cm.sendOk("���! ��鿴��ĵ�����");
            } else {
                cm.sendOk("��û�пɶһ��ĵ���");
            }
        } else if (select >= 3 && select <= 9) {
            gainReward(intPoints, record, select - 3);
        }
        cm.dispose();
    }
}

function chooseItem(index) {
    var choice = "ѡ������Ҫ������Ŀ:#b";
    for (var i = 0; i < items[index].length; i++)
        choice += "\r\n#L" + i + "##i" + items[index][i][0] + "# ���� " + items[index][i][1] + " ���� (#z" + items[index][i][0] + "#)"+ (items[index][i][2] > 0 ? (" X #r#e" + items[index][i][2] + "#n#b��") : "") +(items[index][i][3] > 0 ? (" ...���� #r#e" + items[index][i][3] + "#n#b��") : "") + "#l";
    choice += "\r\n "
    cm.sendSimple(choice);
}

function gainReward(intPoints, record, index) {
    if (intPoints >= items[index][sel][1]) {
		if (cm.canHold(items[index][sel][0])) {
        intPoints -= items[index][sel][1];
        record.setCustomData("" + intPoints + "");
        cm.gainItemPeriod(items[index][sel][0], items[index][sel][2], items[index][sel][3]); // 3000 for bullets, they're unrechargable
        cm.sendOk("���� :P");
    } else {
		cm.sendOk("��ȷ���Ƿ����㹻�Ŀռ䡣");
	}
	} else {
        cm.sendOk("��ȷ���Ƿ�����㹻 #bĿǰ�����ܹ� : " + points);
    }
}

function isProjectitle(itemid) {
    switch (itemid / 10000) {
        case 207:
        case 233:
            return true;
        default:
            return false;
    }
}

function isBullet(itemid) {
    return itemid / 10000 == 233;
}
