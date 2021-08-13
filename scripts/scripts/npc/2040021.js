/* Tara
 Ludibrium : Tara and Sarah's House (220000303)
 
 Refining NPC: 
 * Shoes - All classes, 30-50, stimulator (4130001) available on upgrades
 * Price is 90% of locations on same items
 */

        var status = -1;
var selectedType = -1;
var selectedItem = -1;
var item;
var mats;
var matQty;
var cost;
var stimulator = false;
var stimID = 4130001;

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    } else if (status >= 1 && mode == 0) {
        cm.sendNext("��Ҫ��ʱ����������ҡ�");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "�ˣ�����#p2040021# �������Ϊ������ʲô����#b"
        var options = new Array("ʲô�Ǵ߻���?", "��һ˫��ʿЬ��", "��һ˫������Ь��", "��һ˫��ʦЬ��", "��һ˫����Ь��",
                "��һ˫��ʿЬ��ʹ�ô߻���", "��һ˫������Ь��ʹ�ô߻���", "��һ˫��ʦЬ��ʹ�ô߻���", "��һ˫����Ь��ʹ�ô߻���");
        for (var i = 0; i < options.length; i++) {
            selStr += "\r\n#L" + i + "# " + options[i] + "#l";
        }

        cm.sendSimple(selStr);
    } else if (status == 1) {
        selectedType = selection;
        var selStr;
        var shoes = Array();
        if (selectedType > 4)
        {
            stimulator = true;
            selectedType -= 4;
        } else
            stimulator = false;
        if (selectedType == 0) { // what is stim
            cm.sendNext("�߻�����һ�������ҩˮ���ҿ��Լ��뵽����ĳЩ��Ŀ�Ľ��̡�������ͳ���У��ͺ����һ�������½���Ȼ������������û�б仯������Ҳ�п���Ϊ�����ƽ��ˮƽ������û�еõ��κ���Ŀʹ�ô̼���ʱ�����������ǵ�ѡ����10���Ļ��ᡣ");
            cm.dispose();
            return;
        }
        if (selectedType == 1) { //warrior shoe
            selStr = "�ܺã���ô��������һ������#b";
            shoes = new Array("#t1072003##k - ��ʿ �ȼ�. 30#b", "#t1072039##k - ��ʿ �ȼ�. 30#b", "#t1072040##k - ��ʿ �ȼ�. 30#b", "#t1072041##k - ��ʿ �ȼ�. 30#b",
                    "#t1072002##k - ��ʿ �ȼ�. 35#b", "#t1072112##k - ��ʿ �ȼ�. 35#b", "#t1072113##k - ��ʿ �ȼ�. 35#b",
                    "#t1072000##k - ��ʿ �ȼ�. 40#b", "#t1072126##k - ��ʿ �ȼ�. 40#b", "#t1072127##k - ��ʿ �ȼ�. 40#b",
                    "#t1072132##k - ��ʿ �ȼ�. 50#b", "#t1072133##k - ��ʿ �ȼ�. 50#b", "#t1072134##k - ��ʿ �ȼ�. 50#b", "#t1072135##k - ��ʿ �ȼ�. 50#b");
            ;
        } else if (selectedType == 2) { //bowman shoe
            selStr = "�ܺã���ô��������һ������#b";
            shoes = new Array("#t1072079##k - ������ �ȼ�. 30#b", "#t1072080##k - ������ �ȼ�. 30#b", "#t1072081##k - ������ �ȼ�. 30#b", "#t1072082##k - ������ �ȼ�. 30#b", "#t1072083##k - ������ �ȼ�. 30#b",
                    "#t1072101##k - ������ �ȼ�. 35#b", "#t1072102##k - ������ �ȼ�. 35#b", "#t1072103##k - ������ �ȼ�. 35#b",
                    "#t1072118##k - ������ �ȼ�. 40#b", "#t1072119##k - ������ �ȼ�. 40#b", "#t1072120##k - ������ �ȼ�. 40#b", "#t1072121##k - ������ �ȼ�. 40#b",
                    "#t1072122##k - ������ �ȼ�. 50#b", "#t1072123##k - ������ �ȼ�. 50#b", "#t1072124##k - ������ �ȼ�. 50#b", "#t1072125##k - ������ �ȼ�. 50#b");
        } else if (selectedType == 3) { //magician shoe
            selStr = "�ܺã���ô��������һ������#b";
            shoes = new Array("#t1072075##k - ��ʦ �ȼ�. 30#b", "#t1072076##k - ��ʦ �ȼ�. 30#b", "#t1072077##k - ��ʦ �ȼ�. 30#b", "#t1072078##k - ��ʦ �ȼ�. 30#b",
                    "#t1072089##k - ��ʦ �ȼ�. 35#b", "#t1072090##k - ��ʦ �ȼ�. 35#b", "#t1072091##k - ��ʦ �ȼ�. 35#b",
                    "#t1072114##k - ��ʦ �ȼ�. 40#b", "#t1072115##k - ��ʦ �ȼ�. 40#b", "#t1072116##k - ��ʦ �ȼ�. 40#b", "#t1072117##k - ��ʦ �ȼ�. 40#b",
                    "#t1072140##k - ��ʦ �ȼ�. 50#b", "#t1072141##k - ��ʦ �ȼ�. 50#b", "#t1072142##k - ��ʦ �ȼ�. 50#b", "#t1072143##k - ��ʦ �ȼ�. 50#b");
        } else if (selectedType == 4) { //thief shoe
            selStr = "�ܺã���ô��������һ������#b";
            shoes = new Array("#t1072032##k - ���� �ȼ�. 30#b", "#t1072033##k - ���� �ȼ�. 30#b", "#t1072035##k - ���� �ȼ�. 30#b", "#t1072036##k - ���� �ȼ�. 30#b",
                    "#t1072104##k - ���� �ȼ�. 35#b", "#t1072105##k - ���� �ȼ�. 35#b", "#t1072106##k - ���� �ȼ�. 35#b",
                    "#t1072107##k - ���� �ȼ�. 40#b", "#t1072108##k - ���� �ȼ�. 40#b", "#t1072109##k - ���� �ȼ�. 40#b", "#t1072110##k - ���� �ȼ�. 40#b",
                    "#t1072128##k - ���� �ȼ�. 50#b", "#t1072130##k - ���� �ȼ�. 50#b", "#t1072129##k - ���� �ȼ�. 50#b", "#t1072131##k - ���� �ȼ�. 50#b");
        }

        if (selectedType != 0)
        {
            for (var i = 0; i < shoes.length; i++) {
                selStr += "\r\n#L" + i + "# " + shoes[i] + "#l";
            }
            cm.sendSimple(selStr);
        }
    } else if (status == 2) {
        selectedItem = selection;
        if (selectedType == 1) { //warrior shoe
            var itemSet = new Array(1072003, 1072039, 1072040, 1072041, 1072002, 1072112, 1072113, 1072000, 1072126, 1072127, 1072132, 1072133, 1072134, 1072135);
            var matSet = new Array(new Array(4021003, 4011001, 4000021, 4003000), new Array(4011002, 4011001, 4000021, 4003000),
                    new Array(4011004, 4011001, 4000021, 4003000), new Array(4021000, 4011001, 4000021, 4003000), new Array(4011001, 4021004, 4000021, 4000030, 4003000), new Array(4011002, 4021004, 4000021, 4000030, 4003000), new Array(4021008, 4021004, 4000021, 4000030, 4003000),
                    new Array(4011003, 4000021, 4000030, 4003000, 4000103), new Array(4011005, 4021007, 4000030, 4003000, 4000104), new Array(4011002, 4021007, 4000030, 4003000, 4000105), new Array(4021008, 4011001, 4021003, 4000030, 4003000),
                    new Array(4021008, 4011001, 4011002, 4000030, 4003000), new Array(4021008, 4011001, 4011005, 4000030, 4003000), new Array(4021008, 4011001, 4011006, 4000030, 4003000));
            var matQtySet = new Array(new Array(4, 2, 45, 15), new Array(4, 2, 45, 15), new Array(4, 2, 45, 15), new Array(4, 2, 45, 15), new Array(3, 1, 30, 20, 25), new Array(3, 1, 30, 20, 25), new Array(2, 1, 30, 20, 25),
                    new Array(4, 100, 40, 30, 100), new Array(4, 1, 40, 30, 100), new Array(4, 1, 40, 30, 100), new Array(1, 3, 6, 65, 45), new Array(1, 3, 6, 65, 45), new Array(1, 3, 6, 65, 45), new Array(1, 3, 6, 65, 45));
            var costSet = new Array(20000, 20000, 20000, 20000, 22000, 22000, 25000, 38000, 38000, 38000, 50000, 50000, 50000, 50000);
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        } else if (selectedType == 2) { //bowman shoe
            var itemSet = new Array(1072079, 1072080, 1072081, 1072082, 1072083, 1072101, 1072102, 1072103, 1072118, 1072119, 1072120, 1072121, 1072122, 1072123, 1072124, 1072125);
            var matSet = new Array(new Array(4000021, 4021000, 4003000), new Array(4000021, 4021005, 4003000), new Array(4000021, 4021003, 4003000),
                    new Array(4000021, 4021004, 4003000), new Array(4000021, 4021006, 4003000), new Array(4021002, 4021006, 4000030, 4000021, 4003000), new Array(4021003, 4021006, 4000030, 4000021, 4003000), new Array(4021000, 4021006, 4000030, 4000021, 4003000),
                    new Array(4021000, 4003000, 4000030, 4000106), new Array(4021006, 4003000, 4000030, 4000107), new Array(4011003, 4003000, 4000030, 4000108), new Array(4021002, 4003000, 4000030, 4000099), new Array(4011001, 4021006, 4021008, 4000030, 4003000, 4000033),
                    new Array(4011001, 4021006, 4021008, 4000030, 4003000, 4000032), new Array(4011001, 4021006, 4021008, 4000030, 4003000, 4000041), new Array(4011001, 4021006, 4021008, 4000030, 4003000, 4000042));
            var matQtySet = new Array(new Array(50, 2, 15), new Array(50, 2, 15), new Array(50, 2, 15), new Array(50, 2, 15), new Array(50, 2, 15),
                    new Array(3, 1, 15, 30, 20), new Array(3, 1, 15, 30, 20), new Array(3, 1, 15, 30, 20), new Array(4, 30, 45, 100), new Array(4, 30, 45, 100), new Array(5, 30, 45, 100), new Array(5, 30, 45, 100),
                    new Array(3, 3, 1, 60, 35, 80), new Array(3, 3, 1, 60, 35, 150), new Array(3, 3, 1, 60, 35, 100), new Array(3, 3, 1, 60, 35, 250));
            var costSet = new Array(19000, 19000, 19000, 19000, 19000, 19000, 20000, 20000, 20000, 32000, 32000, 40000, 40000, 50000, 50000, 50000, 50000);
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        } else if (selectedType == 3) { //magician shoe
            var itemSet = new Array(1072075, 1072076, 1072077, 1072078, 1072089, 1072090, 1072091, 1072114, 1072115, 1072116, 1072117, 1072140, 1072141, 1072142, 1072143, 1072136, 1072137, 1072138, 1072139);
            var matSet = new Array(new Array(4021000, 4000021, 4003000), new Array(4021002, 4000021, 4003000), new Array(4011004, 4000021, 4003000), new Array(4021008, 4000021, 4003000), new Array(4021001, 4021006, 4000021, 4000030, 4003000), new Array(4021000, 4021006, 4000021, 4000030, 4003000),
                    new Array(4021008, 4021006, 4000021, 4000030, 4003000), new Array(4021000, 4000030, 4000110, 4003000), new Array(4021005, 4000030, 4000111, 4003000), new Array(4011006, 4021007, 4000030, 4000100, 4003000), new Array(4021008, 4021007, 4000030, 4000112, 4003000),
                    new Array(4021009, 4011006, 4021000, 4000030, 4003000), new Array(4021009, 4011006, 4021005, 4000030, 4003000), new Array(4021009, 4011006, 4021001, 4000030, 4003000), new Array(4021009, 4011006, 4021003, 4000030, 4003000));
            var matQtySet = new Array(new Array(2, 50, 15), new Array(2, 50, 15), new Array(2, 50, 15), new Array(1, 50, 15), new Array(3, 1, 30, 15, 20), new Array(3, 1, 30, 15, 20), new Array(2, 1, 40, 25, 20), new Array(4, 40, 100, 25), new Array(4, 40, 100, 25), new Array(2, 1, 40, 100, 25), new Array(2, 1, 40, 100, 30),
                    new Array(1, 3, 3, 60, 40), new Array(1, 3, 3, 60, 40), new Array(1, 3, 3, 60, 40), new Array(1, 3, 3, 60, 40));
            var costSet = new Array(18000, 18000, 18000, 18000, 20000, 20000, 22000, 30000, 30000, 35000, 40000, 50000, 50000, 50000, 50000);
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        } else if (selectedType == 4) { //thief shoe
            var itemSet = new Array(1072032, 1072033, 1072035, 1072036, 1072104, 1072105, 1072106, 1072107, 1072108, 1072109, 1072110, 1072128, 1072130, 1072129, 1072131);
            var matSet = new Array(new Array(4011000, 4000021, 4003000), new Array(4011001, 4000021, 4003000), new Array(4011004, 4000021, 4003000), new Array(4011006, 4000021, 4003000), new Array(4021000, 4021004, 4000021, 4000030, 4003000), new Array(4021003, 4021004, 4000021, 4000030, 4003000),
                    new Array(4021002, 4021004, 4000021, 4000030, 4003000), new Array(4021000, 4000030, 4000113, 4003000), new Array(4021003, 4000030, 4000095, 4003000), new Array(4021006, 4000030, 4000096, 4003000), new Array(4021005, 4000030, 4000097, 4003000), new Array(4011007, 4021005, 4000030, 4000114, 4003000),
                    new Array(4011007, 4021000, 4000030, 4000115, 4003000), new Array(4011007, 4021003, 4000030, 4000109, 4003000), new Array(4011007, 4021001, 4000030, 4000036, 4003000));
            var matQtySet = new Array(new Array(3, 50, 15), new Array(3, 50, 15), new Array(2, 50, 15), new Array(2, 50, 15), new Array(3, 1, 30, 15, 20), new Array(3, 1, 30, 15, 20), new Array(3, 1, 30, 15, 20),
                    new Array(5, 45, 100, 30), new Array(4, 45, 100, 30), new Array(4, 45, 100, 30), new Array(4, 45, 100, 30), new Array(2, 3, 50, 100, 35), new Array(2, 3, 50, 100, 35), new Array(2, 3, 50, 100, 35), new Array(2, 3, 50, 80, 35));
            var costSet = new Array(19000, 19000, 19000, 21000, 20000, 20000, 20000, 40000, 32000, 35000, 35000, 50000, 50000, 50000, 50000);
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        }

        //Ludi fee is -10%, array not changed unlike 2040016 and 2040020
        cost = cost * .9;

        var prompt = "����Ҫ��һ˫ #t" + item + "#? ����������£�Ϊ��Ҫ������Ʒ�ʵ�װ������ȷ�����пռ�������װ������#b";

        if (stimulator)
            prompt += "\r\n#i" + stimID + "# 1 #t" + stimID + "#";

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
    } else if (status == 3) {
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

        if (stimulator) { //check for stimulator
            if (!cm.haveItem(stimID)) {
                complete = false;
            }
        }

        if (!complete)
            cm.sendOk("������û���㹻�Ĳ��ϣ������Ҳ���æ���ˡ�");
        else {
            if (mats instanceof Array) {
                for (var i = 0; i < mats.length; i++) {
                    cm.gainItem(mats[i], -matQty[i]);
                }
            } else {
                cm.gainItem(mats, -matQty);
            }
            cm.gainMeso(-cost);
            if (stimulator) { //check for stimulator
                cm.gainItem(stimID, -1);
                var deleted = Math.floor(Math.random() * 10);
                if (deleted != 0) {
                    cm.gainItem(item, 1, true);
                    cm.sendOk("��ɡ��ƴ����Ь�ӣ������ʹЬ�ӻ���.");
                } else {
                    cm.sendOk("���ҵ��ǣ��߻���...�ִ����Ь�ӡ��Һܱ�Ǹ���ҵ���ʧ.....");
                }
            } else { //just give basic item
                cm.gainItem(item, 1);
                cm.sendOk("��ɡ��ƴ����Ь�ӣ������ʹЬ�ӻ���.");
            }
        }
        cm.safeDispose();
    }
}