status = -1;
var itemList = Array(
//-------����-------
Array(2290000,800,1,1),
			Array(2290001,800,1,1),
			Array(2290002,800,1,1),
			Array(2290003,800,1,1),
			Array(2290004,800,1,1),
			Array(2290005,800,1,1),
			Array(2290006,800,1,1),
			Array(2290007,800,1,1),
			Array(2290008,800,1,1),
			Array(2290009,800,1,1),
			Array(2290010,800,1,1),
			Array(2290011,800,1,1),
			Array(2290012,800,1,1),
			Array(2290013,800,1,1),
			Array(2290014,800,1,1),
			Array(2290015,800,1,1),
			Array(2290016,800,1,1),
			Array(2290017,800,1,1),
			Array(2290018,800,1,1),
			Array(2290019,800,1,1),
			Array(2290020,800,1,1),
			Array(2290021,800,1,1),
			Array(2290022,800,1,1),
			Array(2290023,800,1,1),
			Array(2290024,800,1,1),
			Array(2290025,800,1,1),
			Array(2290026,800,1,1),
			Array(2290027,800,1,1),
			Array(2290028,800,1,1),
			Array(2290029,800,1,1),
			Array(2290030,800,1,1),
			Array(2290031,800,1,1),
			Array(2290032,800,1,1),
			Array(2290033,800,1,1),
			Array(2290034,800,1,1),
			Array(2290035,800,1,1),
			Array(2290036,800,1,1),
			Array(2290037,800,1,1),
			Array(2290038,800,1,1),
			Array(2290039,800,1,1),
			Array(2290040,800,1,1),
			Array(2290041,800,1,1),
			Array(2290042,800,1,1),
			Array(2290043,800,1,1),
			Array(2290044,800,1,1),
			Array(2290045,800,1,1),
			Array(2290046,800,1,1),
			Array(2290047,800,1,1),
			Array(2290048,800,1,1),
			Array(2290049,800,1,1),
			Array(2290050,800,1,1),
			Array(2290051,800,1,1),
			Array(2290052,800,1,1),
			Array(2290053,800,1,1),
			Array(2290054,800,1,1),
			Array(2290055,800,1,1),
			Array(2290056,800,1,1),
			Array(2290057,800,1,1),
			Array(2290058,800,1,1),
			Array(2290059,800,1,1),
			Array(2290060,800,1,1),
			Array(2290061,800,1,1),
			Array(2290062,800,1,1),
			Array(2290063,800,1,1),
			Array(2290064,800,1,1),
			Array(2290065,800,1,1),
			Array(2290066,800,1,1),
			Array(2290067,800,1,1),
			Array(2290068,800,1,1),
			Array(2290069,800,1,1),
			Array(2290070,800,1,1),
			Array(2290071,800,1,1),
			Array(2290072,800,1,1),
			Array(2290073,800,1,1),
			Array(2290074,800,1,1),
			Array(2290075,800,1,1),
			Array(2290076,800,1,1),
			Array(2290077,800,1,1),
			Array(2290078,800,1,1),
			Array(2290079,800,1,1),
			Array(2290080,800,1,1),
			Array(2290081,800,1,1),
			Array(2290082,800,1,1),
			Array(2290083,800,1,1),
			Array(2290084,800,1,1),
			Array(2290085,800,1,1),
			Array(2290086,800,1,1),
			Array(2290087,800,1,1),
			Array(2290088,800,1,1),
			Array(2290089,800,1,1),
			Array(2290090,800,1,1),
			Array(2290091,800,1,1),
			Array(2290092,800,1,1),
			Array(2290093,800,1,1),
			Array(2290094,800,1,1),
			Array(2290095,800,1,1),
			Array(2290096,800,1,1),
			Array(2290097,800,1,1),
			Array(2290098,800,1,1),
			Array(2290099,800,1,1),
			Array(2290100,800,1,1),
			Array(2290101,800,1,1),
			Array(2290102,800,1,1),
			Array(2290103,800,1,1),
			Array(2290104,800,1,1),
			Array(2290105,800,1,1),
			Array(2290106,800,1,1),
			Array(2290107,800,1,1),
			Array(2290108,800,1,1),
			Array(2290109,800,1,1),
			Array(2290110,800,1,1),
			Array(2290111,800,1,1),
			Array(2290112,800,1,1),
			Array(2290113,800,1,1),
			Array(2290114,800,1,1),
			Array(2290115,800,1,1),
			Array(2290116,800,1,1),
			Array(2290117,800,1,1),
			Array(2290118,800,1,1),
			Array(2290119,800,1,1),
			Array(2290120,800,1,1),
			Array(2290121,800,1,1),
			Array(2290122,800,1,1),
			Array(2290123,800,1,1),
			Array(2290124,800,1,1),
			Array(2290125,800,1,1),
			Array(2290126,800,1,1),
			Array(2290127,800,1,1),
			Array(2290128,800,1,1),
			Array(2290129,800,1,1),
			Array(2290130,800,1,1),
			Array(2290131,800,1,1),
			Array(2290132,800,1,1),
			Array(2290133,800,1,1),
			Array(2290134,800,1,1),
			Array(2290135,800,1,1),
			Array(2290136,800,1,1),
			Array(2290137,800,1,1),
			Array(2290138,800,1,1),
			Array(2290139,800,1,1)
);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("���м����鶼�����");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.haveItem(4000313,10)) {
            cm.sendYesNo("��ã�����������ý�Ҷ��ȡ�����飬��Ҫ��ȡ��");
        } else {
            cm.sendOk("�㱳������#b#t4000313##k��?");
            cm.safeDispose();
        }
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * 900);
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
            item = cm.gainGachaponItem(itemId, quantity, "����������", notice);
            if (item != -1) {
                cm.gainItem(4000313, -10);
                cm.sendOk("������ #b#t" + item + "##k " + quantity + "����");
            } else {
                cm.sendOk("��ȷʵ��#b#t4000313##k������ǣ�����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("�������������ʲô��û���õ���");
            cm.gainItem(4000313, -10);
            //cm.gainItem(4001322, 10);
            cm.safeDispose();
        }
    }
}