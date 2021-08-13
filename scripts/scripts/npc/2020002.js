/* Gordon
 El Nath: El Nath Market (211000100)
 
 Refining NPC: 
 * Shoes, level 60-80 all classes
 */

        var status = 0;
var selectedType = -1;
var selectedItem = -1;
var item;
var mats;
var matQty;
var cost;

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
        var selStr = "�ˣ����Ǹߵ� ��ʲô�ҿ��԰�����ģ���#b"
        var options = new Array("��һ˫��ʿЬ��", "��һ˫������Ь��", "��һ˫��ʦЬ��", "��һ˫����Ь��");
        for (var i = 0; i < options.length; i++) {
            selStr += "\r\n#L" + i + "# " + options[i] + "#l";
        }

        cm.sendSimple(selStr);
    } else if (status == 1 && mode == 1) {
        selectedType = selection;
        var selStr;
        var shoes;
        if (selectedType == 0) { //warrior shoes
            selStr = "��Ҫʲô�𣿣�#b";
            var shoes = new Array("#t1072147##k - ��ʿ �ȼ�. 60#b", "#t1072148##k - ��ʿ �ȼ�. 60#b", "#t1072149##k - ��ʿ �ȼ�. 60#b",
                    "#t1072154##k - ��ʿ �ȼ�. 70#b", "#t1072155##k - ��ʿ �ȼ�. 70#b", "#t1072156##k - ��ʿ �ȼ�. 70#b",
                    "#t1072210##k - ��ʿ �ȼ�. 80#b", "#t1072211##k - ��ʿ �ȼ�. 80#b", "#t1072212##k - ��ʿ �ȼ�. 80#b");
        } else if (selectedType == 1) { //bowman shoes
            selStr = "��Ҫʲô�𣿣�#b";
            var shoes = new Array("#t1072144##k - ������ �ȼ�. 60#b", "#t1072145##k - ������ �ȼ�. 60#b", "#t1072146##k - ������ �ȼ�. 60#b",
                    "#t1072164##k - ������ �ȼ�. 70#b", "#t1072165##k - ������ �ȼ�. 70#b", "#t1072166##k - ������ �ȼ�. 70#b", "#t1072167##k - ������ �ȼ�. 70#b",
                    "#t1072182##k - ������ �ȼ�. 80#b", "#t1072183##k - ������ �ȼ�. 80#b", "#t1072184##k - ������ �ȼ�. 80#b", "#t1072185##k - ������ �ȼ�. 80#b");
        } else if (selectedType == 2) { //mage shoes
            selStr = "��Ҫʲô�𣿣�#b";
            var shoes = new Array("#t1072136##k - ��ʦ �ȼ�. 60#b", "#t1072137##k - ��ʦ �ȼ�. 60#b", "#t1072138##k - ��ʦ �ȼ�. 60#b", "#t1072139##k - ��ʦ �ȼ�. 60#b",
                    "#t1072157##k - ��ʦ �ȼ�. 70#b", "#t1072158##k - ��ʦ �ȼ�. 70#b", "#t1072159##k - ��ʦ �ȼ�. 70#b", "#t1072160##k - ��ʦ �ȼ�. 70#b",
                    "#t1072177##k - ��ʦ �ȼ�. 80#b", "#t1072178##k - ��ʦ �ȼ�. 80#b", "#t1072179##k - ��ʦ �ȼ�. 80#b");
        } else if (selectedType == 3) { //thief shoes
            selStr = "��Ҫʲô�𣿣�#b";
            var shoes = new Array("#t1072150##k - ���� �ȼ�. 60#b", "#t1072151##k - ���� �ȼ�. 60#b", "#t1072152##k - ���� �ȼ�. 60#b",
                    "#t1072161##k - ���� �ȼ�. 70#b", "#t1072162##k - ���� �ȼ�. 70#b", "#t1072163##k - ���� �ȼ�. 70#b",
                    "#t1072172##k - ���� �ȼ�. 80#b", "#t1072173##k - ���� �ȼ�. 80#b", "#t1072174##k - ���� �ȼ�. 80#b");
        }
        for (var i = 0; i < shoes.length; i++) {
            selStr += "\r\n#L" + i + "# " + shoes[i] + "#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 2 && mode == 1) {
        selectedItem = selection;

        if (selectedType == 0) { //warrior shoes
            var itemSet = new Array(1072147, 1072148, 1072149, 1072154, 1072155, 1072156, 1072210, 1072211, 1072212);
            var matSet = new Array(new Array(4021008, 4011007, 4021005, 4000030, 4003000), new Array(4021008, 4011007, 4011005, 4000030, 4003000), new Array(4021008, 4011007, 4021000, 4000030, 4003000),
                    new Array(4005000, 4005002, 4011002, 4000048, 4003000), new Array(4005000, 4005002, 4011005, 4000048, 4003000), new Array(4005000, 4005002, 4021008, 4000048, 4003000),
                    new Array(4005000, 4005002, 4021000, 4000030, 4003000), new Array(4005000, 4005002, 4021002, 4000030, 4003000), new Array(4005000, 4005002, 4021008, 4000030, 4003000));
            var matQtySet = new Array(new Array(1, 1, 8, 80, 55), new Array(1, 1, 8, 80, 55), new Array(1, 1, 8, 80, 55), new Array(1, 3, 5, 100, 55), new Array(2, 2, 5, 100, 55), new Array(3, 1, 1, 100, 55),
                    new Array(2, 3, 7, 90, 65), new Array(3, 2, 7, 90, 65), new Array(4, 1, 2, 90, 65));
            var costSet = new Array(60000, 60000, 60000, 70000, 70000, 70000, 80000, 80000, 80000);
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        } else if (selectedType == 1) { //bowman shoes
            var itemSet = new Array(1072144, 1072145, 1072146, 1072164, 1072165, 1072166, 1072167, 1072182, 1072183, 1072184, 1072185);
            var matSet = new Array(new Array(4011006, 4021000, 4021007, 4000030, 4003000), new Array(4011006, 4021005, 4021007, 4000030, 4003000), new Array(4011006, 4021003, 4021007, 4000030, 4003000),
                    new Array(4005002, 4005000, 4021005, 4000055, 4003000), new Array(4005002, 4005000, 4021004, 4000055, 4003000), new Array(4005002, 4005000, 4021003, 4000055, 4003000), new Array(4005002, 4005000, 4021008, 4000055, 4003000),
                    new Array(4005002, 4005000, 4021002, 4000030, 4003000), new Array(4005002, 4005000, 4021000, 4000030, 4003000), new Array(4005002, 4005000, 4021003, 4000030, 4003000), new Array(4005002, 4021008, 4000030, 4003000));
            var matQtySet = new Array(new Array(5, 8, 1, 75, 50), new Array(5, 8, 1, 75, 50), new Array(5, 8, 1, 75, 50), new Array(1, 3, 5, 100, 55), new Array(2, 2, 5, 100, 55), new Array(2, 2, 5, 100, 55), new Array(3, 1, 1, 100, 55),
                    new Array(2, 3, 7, 90, 60), new Array(3, 2, 7, 90, 60), new Array(4, 1, 7, 90, 60), new Array(5, 2, 90, 60));
            var costSet = new Array(60000, 60000, 60000, 70000, 70000, 70000, 70000, 80000, 80000, 80000, 80000);
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        } else if (selectedType == 2) { //mage shoes
            var itemSet = new Array(1072136, 1072137, 1072138, 1072139, 1072157, 1072158, 1072159, 1072160, 1072177, 1072178, 1072179);
            var matSet = new Array(new Array(4021009, 4011006, 4011005, 4000030, 4003000), new Array(4021009, 4011006, 4021003, 4000030, 4003000), new Array(4021009, 4011006, 4011003, 4000030, 4003000), new Array(4021009, 4011006, 4021002, 4000030, 4003000),
                    new Array(4005001, 4005003, 4021002, 4000051, 4003000), new Array(4005001, 4005003, 4021000, 4000051, 4003000), new Array(4005001, 4005003, 4011003, 4000051, 4003000), new Array(4005001, 4005003, 4011006, 4000051, 4003000),
                    new Array(4005001, 4005003, 4021003, 4000030, 4003000), new Array(4005001, 4005003, 4021001, 4000030, 4003000), new Array(4005001, 4005003, 4021008, 4000030, 4003000));
            var matQtySet = new Array(new Array(1, 4, 5, 70, 50), new Array(1, 4, 5, 70, 50), new Array(1, 4, 5, 70, 50), new Array(1, 4, 5, 70, 50),
                    new Array(1, 3, 5, 100, 55), new Array(2, 2, 5, 100, 55), new Array(2, 2, 5, 100, 55), new Array(3, 1, 3, 100, 55),
                    new Array(2, 3, 7, 85, 60), new Array(3, 2, 7, 85, 60), new Array(4, 1, 2, 85, 60));
            var costSet = new Array(60000, 60000, 60000, 60000, 70000, 70000, 70000, 70000, 80000, 80000, 80000);
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        } else if (selectedType == 3) { //thief shoes
            var itemSet = new Array(1072150, 1072151, 1072152, 1072161, 1072162, 1072163, 1072172, 1072173, 1072174);
            var matSet = new Array(new Array(4021007, 4011007, 4021000, 4000030, 4003000), new Array(4021007, 4011007, 4011006, 4000030, 4003000), new Array(4021007, 4011007, 4021008, 4000030, 4003000),
                    new Array(4005003, 4005000, 4021001, 4000051, 4003000), new Array(4005003, 4005002, 4021005, 4000051, 4003000), new Array(4005002, 4005003, 4021000, 4000051, 4003000),
                    new Array(4005000, 4005003, 4021003, 4000030, 4003000), new Array(4005002, 4005003, 4021000, 4000030, 4003000), new Array(4005003, 4005002, 4021008, 4000030, 4003000));
            var matQtySet = new Array(new Array(1, 1, 8, 75, 50), new Array(1, 1, 5, 75, 50), new Array(1, 1, 1, 75, 50),
                    new Array(1, 3, 5, 100, 55), new Array(1, 3, 5, 100, 55), new Array(1, 3, 5, 100, 55),
                    new Array(3, 2, 7, 90, 60), new Array(3, 2, 7, 90, 60), new Array(3, 2, 7, 90, 60));
            var costSet = new Array(60000, 60000, 60000, 70000, 70000, 70000, 80000, 80000, 80000);
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        }

        var prompt = "����Ҫ��һ˫ #t" + item + "#? �����������, ��Ϊ��Ҫ���������Ʒ�ʣ��ҽ�����ȷ��װ�����ռ��㹻��#b";

        if (mats instanceof Array) {
            for (var i = 0; i < mats.length; i++) {
                prompt += "\r\n#i" + mats[i] + "# " + matQty[i] + " #t" + mats[i] + "#";
            }
        } else {
            prompt += "\r\n#i" + mats + "# " + matQty + " #t" + mats + "#";
        }

        if (cost > 0)
            prompt += "\r\n#i4031138# " + cost + " ���";

        cm.sendYesNo(prompt);
    } else if (status == 3 && mode == 1) {
        var complete = true;

        if (cm.getMeso() < (cost)) {
            cm.sendOk("��ֻ���ܷ�ҡ�");
            cm.dispose();
            return;
        } else {
            if (mats instanceof Array) {

                for (var i = 0; complete && i < mats.length; i++)
                {
                    if (!cm.haveItem(mats[i], matQty[i]))
                    {
                        complete = false;
                    }
                }
            } else {
                if (!cm.haveItem(mats, matQty))
                {
                    complete = false;
                }
            }
        }

        if (!complete)
            cm.sendOk("�ܱ�Ǹ������Ĳ��ϲ��㣬�����Ҳ���������ˡ�");
        else {
            if (mats instanceof Array) {
                for (var i = 0; i < mats.length; i++) {
                    cm.gainItem(mats[i], -matQty [i]);
                }
            } else
                cm.gainItem(mats, -matQty);

            cm.gainMeso(-cost);

            cm.gainItem(item, 1);
            cm.sendOk("������ϡ�");
        }
        cm.dispose();
    }
}