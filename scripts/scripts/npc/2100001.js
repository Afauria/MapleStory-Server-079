var status = 0;
var selectedType = -1;
var selectedItem = -1;
var item;
var mats;
var matQty;
var cost;
var qty;
var equip;
var last_use; //last item is a use item

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        cm.dispose();
    if (status == 0) {
        var selStr = "��ϲ�����̬�ȣ�����ֻ���չ�������ڡ���ϲ��ʲô���Ŀ�ʯ����? #b";
        var options = new Array("������ʯ", "�����ı�ʯ��", "ϸ������ʯ");
        for (var i = 0; i < options.length; i++) {
            selStr += "\r\n#L" + i + "# " + options[i] + "#l";
        }

        cm.sendSimple(selStr);
    } else if (status == 1) {
        selectedType = selection;
        if (selectedType == 0) { //mineral refine
            var selStr = "ѡ��һ���������Ŀ�ʯ?#b";
            var minerals = new Array("��ͭ", "����", "﮿�ʯ", "���ʯ", "��", "�Ͽ�ʯ", "�ƽ�", "�");
            for (var i = 0; i < minerals.length; i++) {
                selStr += "\r\n#L" + i + "# " + minerals[i] + "#l";
            }
            equip = false;
            cm.sendSimple(selStr);
        } else if (selectedType == 1) { //jewel refine
            var selStr = "ѡ��һ���������ı�ʯ��?#b";
            var jewels = new Array("ʯ��ʯ", "��ˮ��", "������ʯ", "��ĸ��", "����ʯ", "����ʯ", "�ƾ�", "��ʯ", "��ˮ��");
            for (var i = 0; i < jewels.length; i++) {
                selStr += "\r\n#L" + i + "# " + jewels[i] + "#l";
            }
            equip = false;
            cm.sendSimple(selStr);
        } else if (selectedType == 2) { //Crystal refine
            var selStr = "ѡ��һ����ϸ������ʯ?#b";
            var crystals = new Array("����ˮ��", "�ǻ�ˮ��", "����ˮ��", "����ˮ��");
            for (var i = 0; i < crystals.length; i++) {
                selStr += "\r\n#L" + i + "# " + crystals[i] + "#l";
            }
            cm.sendSimple(selStr);
            equip = false;
        }
        if (equip)
            status++;
    } else if (status == 2 && mode == 1) {
        selectedItem = selection;
        if (selectedType == 0) { //mineral refine
            var itemSet = new Array(4011000, 4011001, 4011002, 4011003, 4011004, 4011005, 4011006, 4011008);
            var matSet = new Array(4010000, 4010001, 4010002, 4010003, 4010004, 4010005, 4010006, 4010007);
            var matQtySet = new Array(10, 10, 10, 10, 10, 10, 10, 10, 10);
            var costSet = new Array(270, 270, 270, 450, 450, 450, 720, 270);
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        } else if (selectedType == 1) { //jewel refine
            var itemSet = new Array(4021000, 4021001, 4021002, 4021003, 4021004, 4021005, 4021006, 4021007, 4021008);
            var matSet = new Array(4020000, 4020001, 4020002, 4020003, 4020004, 4020005, 4020006, 4020007, 4020008);
            var matQtySet = new Array(10, 10, 10, 10, 10, 10, 10, 10, 10);
            var costSet = new Array(450, 450, 450, 450, 450, 450, 450, 900, 2700);
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        } else if (selectedType == 2) { //special refine
            var itemSet = new Array(4005000, 4005001, 4005002, 4005003);
            var matSet = new Array(4004000, 4004001, 4004002, 4004003);
            var matQtySet = new Array(10, 10, 10, 10);
            var costSet = new Array(4500, 4500, 4500, 4500);
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        }

        var prompt = "����Ū�� #t" + item + "# ������Ҫ�����ٸ��أ�";

        cm.sendGetNumber(prompt, 1, 1, 100)
    } else if (status == 3) {
        if (equip)
        {
            selectedItem = selection;
            qty = 1;
        } else
            qty = selection;

        last_use = false;

        if (selectedType == 3) { //claw refine
            var itemSet = new Array(1472023, 1472024, 1472025);
            var matSet = new Array(new Array(1472022, 4011007, 4021000, 2012000), new Array(1472022, 4011007, 4021005, 2012002), new Array(1472022, 4011007, 4021008, 4000046));
            var matQtySet = new Array(new Array(1, 1, 8, 10), new Array(1, 1, 8, 10), new Array(1, 1, 3, 5));
            var costSet = new Array(80000, 80000, 100000)
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
            if (selectedItem != 2)
                last_use = true;
        }

        var prompt = "����Ҫ���� ";
        if (qty == 1)
            prompt += "һ�� #t" + item + "#?";
        else
            prompt += qty + " �� #t" + item + "#?";

        prompt += " ����������£��һ�Ϊ������Ҫ��ľ�����Ŀ����ȷ�������㹻�Ŀռ������Ŀ�棡#b";

        if (mats instanceof Array) {
            for (var i = 0; i < mats.length; i++) {
                prompt += "\r\n#i" + mats[i] + "# " + matQty[i] * qty + " #t" + mats[i] + "#";
            }
        } else {
            prompt += "\r\n#i" + mats + "# " + matQty * qty + " #t" + mats + "#";
        }

        if (cost > 0) {
            prompt += "\r\n#i4031138# " + cost * qty + " ���";
        }
        cm.sendYesNo(prompt);
    } else if (status == 4) {
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
            cm.sendOk("�Ҳ��ܽ��ܵ����Ʒ�������û��ʲô����Ҫ�Ķ����Ļ����ҾͲ���������.");
        else {
            if (mats instanceof Array) {
                for (var i = 0; i < mats.length; i++) {
                    cm.gainItem(mats[i], -matQty[i] * qty);
                }
            } else {
                cm.gainItem(mats, -matQty * qty);
            }
            cm.gainMeso(-cost * qty);
            cm.gainItem(item, qty);
            cm.sendNext("��...�Ҳ��û�뵽�Ṥ���ĵڶ���......�ðɣ�������ϣ����ϲ����.");
        }
        cm.dispose();
    }
}