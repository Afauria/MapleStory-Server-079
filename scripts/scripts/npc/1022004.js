/* Mr. Smith
 Victoria Road: Perion (102000000)
 
 Refining NPC: 
 * Warrior Gloves - 10-60 + upgrades
 * Processed Wood/Screws
 */

var status = 0;
var selectedType = -1;
var selectedItem = -1;
var item;
var mats;
var matQty;
var cost;
var qty;
var equip;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        cm.dispose();
    if (status == 0 && mode == 1) {
        var selStr = "����ʷ��˹,�ܸ���Ϊ�����yo~#b"
        var options = new Array("��������", "��������", "ľ������˿������");
        for (var i = 0; i < options.length; i++) {
            selStr += "\r\n#L" + i + "# " + options[i] + "#l";
        }

        cm.sendSimple(selStr);
    } else if (status == 1 && mode == 1) {
        selectedType = selection;
        if (selectedType == 0) { //glove refine
            var selStr = "��der,����Ҫ������һ��������?#b";
            var items = new Array("���#k - ��Ҫ�ȼ� Lv. 10#b", "���ƶ�����#k - ��Ҫ�ȼ� Lv. 15#b", "Ƥ����#k - ��Ҫ�ȼ� Lv. 20#b", "���ƶ�����#k - ��Ҫ�ȼ� Lv. 25#b",
                    "��ͭ��������#k - ��Ҫ�ȼ� Lv. 30#b", "�����������#k - ��Ҫ�ȼ� Lv. 35#b", "����������#k - ��Ҫ�ȼ� Lv. 40#b", "�����Ͻ�����#k - ��Ҫ�ȼ� Lv. 50#b", "��ͭս������#k - ��Ҫ�ȼ� Lv. 60#b");
            for (var i = 0; i < items.length; i++) {
                selStr += "\r\n#L" + i + "# " + items[i] + "#l";
            }
            cm.sendSimple(selStr);
            equip = true;
        } else if (selectedType == 1) { //glove upgrade
            var selStr = "��������? ����Ŷ~����Ҫ������һ��������?#b";
            var crystals = new Array("���ƻ�������#k - ��Ҫ�ȼ� Lv. 30#b", "�Ͽ��������#k - ��Ҫ�ȼ� Lv. 30#b", "���������#k - ��Ҫ�ȼ� Lv. 35#b", "���������#k - ��Ҫ�ȼ� Lv. 35#b",
                    "�������#k - ��Ҫ�ȼ� Lv. 40#b", "��ɫ������#k - ��Ҫ�ȼ� Lv. 40#b", "﮿�Ͻ�����#k - ��Ҫ�ȼ� Lv. 50#b", "�ƽ�Ͻ�����#k - ��Ҫ�ȼ� Lv. 50#b",
                    "��ս������#k - ��Ҫ�ȼ� Lv. 60#b", "��ս������#k - ��Ҫ�ȼ� Lv. 60#b");
            for (var i = 0; i < crystals.length; i++) {
                selStr += "\r\n#L" + i + "# " + crystals[i] + "#l";
            }
            cm.sendSimple(selStr);
            equip = true;
        } else if (selectedType == 2) { //material refine
            var selStr = "ľ�ĺ���˿��,����Ҫʲô��?#b";
            var materials = new Array("��10��#v4000003#����1��#v4003001#", "��5��#v4000018#����1��#v4003001#", "����#v4003000##z4003000# x15��");
            for (var i = 0; i < materials.length; i++) {
                selStr += "\r\n#L" + i + "# " + materials[i] + "#l";
            }
            cm.sendSimple(selStr);
            equip = false;
        }
        if (equip)
            status++;
    } else if (status == 2 && mode == 1) {
        selectedItem = selection;
        if (selectedType == 2) { //material refine
            var itemSet = new Array(4003001, 4003001, 4003000);
            var matSet = new Array(4000003, 4000018, new Array(4011000, 4011001));
            var matQtySet = new Array(10, 5, new Array(1, 1));
            var costSet = new Array(0, 0, 0)
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        }

        var prompt = "��������Ҫ�Ұ�����һЩ#t" + item + "#? ������Ҫ�������ٸ���?\r\n#r�����������˿����һ�οɲ���15��Ŷ��";

        cm.sendGetNumber(prompt, 1, 1, 100)
    } else if (status == 3 && mode == 1) {
        if (equip)
        {
            selectedItem = selection;
            qty = 1;
        } else
            qty = selection;

        if (selectedType == 0) { //glove refine
            var itemSet = new Array(1082003, 1082000, 1082004, 1082001, 1082007, 1082008, 1082023, 1082009, 1082059);
            var matSet = new Array(new Array(4000021, 4011001), 4011001, new Array(4000021, 4011000), 4011001, new Array(4011000, 4011001, 4003000), new Array(4000021, 4011001, 4003000), new Array(4000021, 4011001, 4003000),
                    new Array(4011001, 4021007, 4000030, 4003000), new Array(4011007, 4011000, 4011006, 4000030, 4003000));
            var matQtySet = new Array(new Array(15, 1), 2, new Array(40, 2), 2, new Array(3, 2, 15), new Array(30, 4, 15), new Array(50, 5, 40), new Array(3, 2, 30, 45), new Array(1, 8, 2, 50, 50));
            var costSet = new Array(1000, 2000, 5000, 10000, 20000, 30000, 40000, 50000, 70000);
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        } else if (selectedType == 1) { //glove upgrade
            var itemSet = new Array(1082005, 1082006, 1082035, 1082036, 1082024, 1082025, 1082010, 1082011, 1082060, 1082061);
            var matSet = new Array(new Array(1082007, 4011001), new Array(1082007, 4011005), new Array(1082008, 4021006), new Array(1082008, 4021008), new Array(1082023, 4011003), new Array(1082023, 4021008),
                    new Array(1082009, 4011002), new Array(1082009, 4011006), new Array(1082059, 4011002, 4021005), new Array(1082059, 4021007, 4021008));
            var matQtySet = new Array(new Array(1, 1), new Array(1, 2), new Array(1, 3), new Array(1, 1), new Array(1, 4), new Array(1, 2), new Array(1, 5), new Array(1, 4), new Array(1, 3, 5), new Array(1, 2, 2));
            var costSet = new Array(20000, 25000, 30000, 40000, 45000, 50000, 55000, 60000, 70000, 80000);
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        }

        var prompt = "����Ҫ�Ұ�����";
        if (qty == 1)
            prompt += "#t" + item + "#?";
        else
            prompt += qty + "��#t" + item + "#?";

        prompt += " �õ��һ������ɵ�,������ȷ����ı����Ƿ������µĲ������㹻�Ŀռ�Ŷ#b";

        if (mats instanceof Array) {
            for (var i = 0; i < mats.length; i++) {
                prompt += "\r\n#i" + mats[i] + "# " + matQty[i] * qty + " #t" + mats[i] + "#";
            }
        } else {
            prompt += "\r\n#i" + mats + "# " + matQty * qty + " #t" + mats + "#";
        }

        if (cost > 0) {
            prompt += "\r\n#i4031138# " + cost * qty + " meso";
        }
        cm.sendYesNo(prompt);
    } else if (status == 4 && mode == 1) {
        var complete = true;

        if (cm.getMeso() < cost * qty) {
            cm.sendOk("���...���Ǯ���񲻹�Ŷ...")
            cm.dispose();
            return;
        } else {
            if (mats instanceof Array) {

                for (var i = 0; complete && i < mats.length; i++)
                {
                    if (!cm.haveItem(mats[i], matQty[i] * qty))
                    {
                        complete = false;
                    }
                }
            } else {
                if (!cm.haveItem(mats, matQty * qty))
                {
                    complete = false;
                }
            }
        }

        if (!complete)
            cm.sendOk("���!? ��Ĳ��Ϻ��񲻹�Ŷ...�������ҾͲ��ܰ���������,������ȷ��һ��");
        else {
            if (mats instanceof Array) {
                for (var i = 0; i < mats.length; i++) {
                    cm.gainItem(mats[i], -matQty[i] * qty);
                }
            } else
                cm.gainItem(mats, -matQty * qty);

            if (cost > 0)
                cm.gainMeso(-cost * qty);

            if (item == 4003000)//screws
                cm.gainItem(4003000, 15 * qty);
            else
                cm.gainItem(item, qty);
            cm.sendOk("�ܰ���?�ҵ�����,���������Ҫ��ӭ������,���Ķ�����ȥ��.");
        }
        cm.dispose();
    }
}