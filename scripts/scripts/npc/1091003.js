/*
 Serryl (1091003)
 Location: The Nautilus
 */

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
        var selStr = "ʲô���������Լ������������ף����棿......�����û�о���Ļ��������Լ�������...���������20������ְɣ���Ϊ����Һ����׵ġ�";
        var options = new Array("��ָ��", "����ǹ", "����������");
        for (var i = 0; i < options.length; i++) {
            selStr += "\r\n#L" + i + "# " + options[i] + "#l";
        }

        cm.sendSimple(selStr);
    } else if (status == 1 && mode == 1) {
        selectedType = selection;
        if (selectedType == 0) { //Making a Knuckler
            var selStr = "��������������ʲô�أ���";
            var knucklers = new Array("#t1482001# (�ȼ�����: 15, ����)", "#t1482002# (�ȼ�����: 20, ����)", "#t1482003# (�ȼ�����: 25, ����)", "#t1482004# (�ȼ�����: 30, ����)", "#t1482005# (�ȼ�����: 35, ����)", "#t1482006# (�ȼ�����: 40, ����)", "#t1482007# (�ȼ�����: 50, ����)");
            for (var i = 0; i < knucklers.length; i++) {
                selStr += "\r\n#L" + i + "# " + knucklers[i] + "#l";
            }
            equip = true;
            cm.sendSimple(selStr);
        } else if (selectedType == 1) { //Making a Gun
            var selStr = "��������������ʲô�أ���";
            var guns = new Array("#t1492001# (�ȼ�����: 15, ����)", "#t1492002# (�ȼ�����: 20, ����)", "#t1492003# (�ȼ�����: 25, ����)", "#t1492004# (�ȼ�����: 30, ����)", "#t1492005# (�ȼ�����: 35, ����)", "#t1492006# (�ȼ�����: 40, ����)", "#t1492007# (�ȼ�����: 50, ����)");
            for (var i = 0; i < guns.length; i++) {
                selStr += "\r\n#L" + i + "# " + guns[i] + "#l";
            }
            equip = true;
            cm.sendSimple(selStr);
        } else if (selectedType == 2) { //Making a pair of ���� gloves
            var selStr = "��������������ʲô�أ���";
            var gloves = new Array("#t1082180#", "#t1082183#", "#t1082186#", "#t1082189#", "#t1082192#", "#t1082195#", "#t1082198#", "#t1082201#");
            for (var i = 0; i < gloves.length; i++) {
                selStr += "\r\n#L" + i + "# " + gloves[i] + "#l";
            }
            equip = true;
            cm.sendSimple(selStr);
        }
        if (equip)
            status++;
    } else if (status == 3 && mode == 1) {
        if (equip)
        {
            selectedItem = selection;
            qty = 1;
        } else
            qty = selection;

        if (selectedType == 0) { //Making a Knuckler
            var itemSet = new Array(1482001, 1482002, 1482003, 1482004, 1482005, 1482006, 1482007);
            var matSet = new Array(4000021, new Array(4011001, 4011000, 4000021, 4003000), new Array(4011000, 4011001, 4003000), new Array(4011000, 4011001, 4000021, 4003000), new Array(4011000, 4011001, 4000021, 4003000), new Array(4011000, 4011001, 4021000, 4000021, 4003000), new Array(4000039, 4011000, 4011001, 4000030, 4000021, 4003000));
            var matQtySet = new Array(20, new Array(1, 1, 10, 5), new Array(2, 1, 10), new Array(1, 1, 30, 10), new Array(2, 2, 30, 20), new Array(1, 1, 2, 50, 20), new Array(150, 1, 2, 20, 20, 20));
            var costSet = new Array(1000, 2000, 5000, 15000, 30000, 50000, 100000);
            var levelLimitSet = new Array(15, 20, 25, 30, 35, 40, 50);
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
            levelLimit = levelLimitSet[selectedItem];
        } else if (selectedType == 1) { //Making a Gun
            var itemSet = new Array(1492001, 1492002, 1492003, 1492004, 1492005, 1492006, 1492007);
            var matSet = new Array(new Array(4011000, 4003000, 4003001), new Array(4011000, 4003000, 4003001, 4000021), new Array(4011000, 4003000), new Array(4011001, 4000021, 4003000), new Array(4011006, 4011001, 4000021, 4003000), new Array(4011004, 4011001, 4000021, 4003000), new Array(4011006, 4011004, 4011001, 4000030, 4003000));
            var matQtySet = new Array(new Array(1, 5, 1), new Array(1, 10, 5, 10), new Array(2, 10), new Array(2, 10, 10), new Array(10, 2, 5, 10), new Array(1, 2, 10, 20), new Array(1, 2, 4, 30, 30));
            var costSet = new Array(1000, 2000, 5000, 15000, 30000, 50000, 100000);
            var levelLimitSet = new Array(15, 20, 25, 30, 35, 40, 50);
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
            levelLimit = levelLimitSet[selectedItem];
        } else if (selectedType == 2) { //Making a pair of ���� gloves
            var itemSet = new Array(1082180, 1082183, 1082186, 1082189, 1082192, 1082195, 1082198, 1082201);
            var matSet = new Array(new Array(4000021, 4021003), 4000021, new Array(4011000, 4000021), new Array(4021006, 4000021, 4003000), new Array(4011000, 4000021, 4003000), new Array(4000021, 4011000, 4011001, 4003000), new Array(4011000, 4000021, 4000030, 4003000), new Array(4011007, 4021008, 4021007, 4000030, 4003000));
            var matQtySet = new Array(new Array(15, 1), 35, new Array(2, 20), new Array(2, 50, 10), new Array(3, 60, 15), new Array(80, 3, 3, 25), new Array(3, 20, 40, 30), new Array(1, 1, 1, 50, 50));
            var costSet = new Array(1000, 8000, 15000, 25000, 30000, 40000, 50000, 70000);
            var levelLimitSet = new Array(15, 20, 25, 30, 35, 40, 50, 60);
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
            levelLimit = levelLimitSet[selectedItem];
        }

        prompt = "����Ҫ��һ˫ #t" + item + "#? �����������, ��Ϊ��Ҫ���������Ь�ӣ��ҽ�����ȷ��װ�����ռ��㹻��#b";

        if (mats instanceof Array) {
            for (var i = 0; i < mats.length; i++) {
                prompt += "\r\n#i" + mats[i] + "# " + matQty[i] * qty + " #t" + mats[i] + "#";
            }
        } else {
            prompt += "\r\n#i" + mats + "# " + matQty * qty + " #t" + mats + "#";
        }

        if (cost > 0)
            prompt += "\r\n#i4031138# " + cost * qty + " ���";

        cm.sendYesNo(prompt);
    } else if (status == 4 && mode == 1) {
        var pass = true;

        if (cm.getMeso() < cost * qty)
        {
            cm.sendOk("Ǯ����Ŷ��Ǹ...")
            cm.dispose();
            return;
        } else
        {
            if (mats instanceof Array) {
                for (var i = 0; i < mats.length; i++)
                {
                    if (!cm.haveItem(mats[i], matQty[i]))
                    {
                        pass = false;
                    }
                }
            } else {
                if (!cm.haveItem(mats, matQty))
                {
                    pass = false;
                }
            }
        }

        if (pass == false)
            cm.sendOk("�ܱ�Ǹ������Ĳ��ϲ��㣬�����Ҳ���������ˡ�");
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
            cm.sendOk("������ϡ�");
        }
        cm.dispose();
    }
}