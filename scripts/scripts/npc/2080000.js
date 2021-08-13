/* Mos
 Leafre : Leafre (240000000)
 
 Refining NPC: 
 * Level 110 weapons - Stimulator allowed
 */

        var status = 0;
var selectedType = -1;
var selectedItem = -1;
var stimulator = false;
var bustedDagger = false;
var item;
var mats;
var matQty;
var cost;
var stimID;

function start() {
    status = -2;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (status == -1) {
        cm.sendSimple("���~���������Ȥ���������������������϶������Եط��ˣ��������ΰ�����ľ��������������̡����ˣ�����ô����������ǳ��������Ĳ���˼���������������Ȥ��\r\n#L0# ��һ����������\r\n#L100# ����װ����#l");
    } else if (status == 0) {
        if (selection == 0) {
            if (cm.haveItem(4001079)) {
                bustedDagger = true;
                cm.sendNext("����ʲô�����ƻ�ذ�����ƺ����ˣ�����Ҫ #i" + 4011001 + "# �� #i" + 4011002 + "#.");
            } else {
                var selStr = "���������ǲ��ɵ͹��ġ������Ը�⣬�ҿ�������Լ���Ȩ���������֮һ�����ǣ����������㹻ǿ���Ա�����Ǳ�ڵ�...#b";
                var options = new Array("ʲô�Ǵ߻���?", "��һ����ʿ����", "��һ������������", "��һ����ʦ����", "��һ����������", "��һ����������",
                        "��һ����ʿ����ʹ�ô߻���", "��һ������������ʹ�ô߻���", "��һ����ʦ����ʹ�ô߻���", "��һ����������ʹ�ô߻���", "��һ����������ʹ�ô߻���");
                for (var i = 0; i < options.length; i++) {
                    selStr += "\r\n#L" + i + "# " + options[i] + "#l";
                }
                cm.sendSimple(selStr);
            }
        } else {
            cm.sendYesNo("̫���ˣ��һ�������ҵ������ġ���Ҷ�֪������ȡ�����;��Ե���Ʒ�ĵȼ�����������Ʒ�Ķ�ʧ�����Է���Ѹ�����ͬ�����������޸����װ����");
            status = 99;
        }

    } else if (status == 1) {
        if (bustedDagger) {
            if (cm.haveItem(4011001) && cm.haveItem(4011002) && cm.haveItem(4001079)) {
                cm.gainItem(4011001, -1);
                cm.gainItem(4011002, -1);
                cm.gainItem(4001079, -1);
                cm.gainItem(4001078, 1);
            } else {
                cm.sendOk("��û���㹻�Ĳ��ϡ�");
            }
            cm.dispose();
        } else {
            selectedType = selection;
            if (selectedType > 5) {
                stimulator = true;
                selectedType -= 5;
            } else
                stimulator = false;
            if (selectedType == 0) { //What's a stim?
                cm.sendNext("�߻�����һ�������ҩˮ���ҿ��Լ��뵽����ĳЩ��Ŀ�Ľ��̡�������ͳ���У��ͺ����һ�������½���Ȼ������������û�б仯������Ҳ�п���Ϊ�����ƽ��ˮƽ������û�еõ��κ���Ŀʹ�ô̼���ʱ�����������ǵ�ѡ����10���Ļ��ᡣ")
                cm.dispose();
            } else if (selectedType == 1) { //warrior weapon
                var selStr = "�ܺã���ô��������һ������#b";
                var weapon = new Array("��Ȫ��#k - �ȼ�. 110 ���ֽ�#b", "ս����#k - �ȼ�. 110 ���ָ�#b", "��ͷ��#k - �ȼ�. 110 ���ִ�#b", "������#k - �ȼ�. 110 ˫�ֽ�#b", "����֮��#k - �ȼ�. 110 ˫�ָ�#b", "��֮��#k - �ȼ�. 110 ˫�ִ�#b",
                        "������ǹ#k - �ȼ�. 110 ��ǹ#b", "������ì#k - �ȼ�. 110 ì#b");
                for (var i = 0; i < weapon.length; i++) {
                    selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
                }
                cm.sendSimple(selStr);
            } else if (selectedType == 2) { //bowman weapon
                var selStr = "�ܺã���ô��������һ������#b";
                var weapon = new Array("����֮��#k - �ȼ�. 110 ��#b", "������#k - �ȼ�. 110 ��#b");
                for (var i = 0; i < weapon.length; i++) {
                    selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
                }
                cm.sendSimple(selStr);
            } else if (selectedType == 3) { //magician weapon
                var selStr = "�ܺã���ô��������һ������#b";
                var weapon = new Array("ʥ������#k - �ȼ�. 108 ����#b", "���ǳ���#k - �ȼ�. 110 ����#b");
                for (var i = 0; i < weapon.length; i++) {
                    selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
                }
                cm.sendSimple(selStr);
            } else if (selectedType == 4) { //thief weapon
                var selStr = "�ܺã���ô��������һ������#b";
                var weapon = new Array("�������䵶#k - �ȼ�. 110 �����̵�#b", "�ҷ����#k - �ȼ�. 110 ���˶̵�#b", "��ɫ����ȭ��#k - �ȼ�. 110 ȭ��#b");
                for (var i = 0; i < weapon.length; i++) {
                    selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
                }
                cm.sendSimple(selStr);
            } else if (selectedType == 5) { //pirate weapon
                var selStr = "�ܺã���ô��������һ������#b";
                var weapon = new Array("����֮צ#k - �ȼ�. 110 ָ��#b", "ʥ����ǹ#k - �ȼ�. 110 ǹ#b");
                for (var i = 0; i < weapon.length; i++) {
                    selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
                }
                cm.sendSimple(selStr);
            }
        }
    } else if (status == 2) {
        selectedItem = selection;
        if (selectedType == 1) { //warrior weapon
            var itemSet = new Array(1302059, 1312031, 1322052, 1402036, 1412026, 1422028, 1432038, 1442045);
            var matSet = new Array(new Array(1302056, 4000244, 4000245, 4005000), new Array(1312030, 4000244, 4000245, 4005000), new Array(1322045, 4000244, 4000245, 4005000), new Array(1402035, 4000244, 4000245, 4005000),
                    new Array(1412021, 4000244, 4000245, 4005000), new Array(1422027, 4000244, 4000245, 4005000), new Array(1432030, 4000244, 4000245, 4005000), new Array(1442044, 4000244, 4000245, 4005000));
            var matQtySet = new Array(new Array(1, 20, 25, 8), new Array(1, 20, 25, 8), new Array(1, 20, 25, 8), new Array(1, 20, 25, 8), new Array(1, 20, 25, 8), new Array(1, 20, 25, 8), new Array(1, 20, 25, 8), new Array(1, 20, 25, 8));
            var costSet = new Array(120000, 120000, 120000, 120000, 120000, 120000, 120000, 120000);
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        } else if (selectedType == 2) { //bowman weapon
            var itemSet = new Array(1452044, 1462039);
            var matSet = new Array(new Array(1452019, 4000244, 4000245, 4005000, 4005002), new Array(1462015, 4000244, 4000245, 4005000, 4005002));
            var matQtySet = new Array(new Array(1, 20, 25, 3, 5), new Array(1, 20, 25, 5, 3));
            var costSet = new Array(120000, 120000);
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        } else if (selectedType == 3) { //magician weapon
            var itemSet = new Array(1372032, 1382036);
            var matSet = new Array(new Array(1372010, 4000244, 4000245, 4005001, 4005003), new Array(1382035, 4000244, 4000245, 4005001, 4005003));
            var matQtySet = new Array(new Array(1, 20, 25, 6, 2), new Array(1, 20, 25, 6, 2));
            var costSet = new Array(120000, 120000);
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        } else if (selectedType == 4) { //thief weapon
            var itemSet = new Array(1332049, 1332050, 1472051);
            var matSet = new Array(new Array(1332051, 4000244, 4000245, 4005000, 4005002), new Array(1332052, 4000244, 4000245, 4005002, 4005003), new Array(1472053, 4000244, 4000245, 4005002, 4005003));
            var matQtySet = new Array(new Array(1, 20, 25, 5, 3), new Array(1, 20, 25, 3, 5), new Array(1, 20, 25, 2, 6));
            var costSet = new Array(120000, 120000, 120000);
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        } else if (selectedType == 5) { //pirate weapon
            var itemSet = new Array(1482013, 1492013);
            var matSet = new Array(new Array(1482012, 4000244, 4000245, 4005000, 4005002), new Array(1492012, 4000244, 4000245, 4005000, 4005002));
            var matQtySet = new Array(new Array(1, 20, 25, 5, 3), new Array(1, 20, 25, 3, 5));
            var costSet = new Array(120000, 120000);
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        }

        var prompt = "����Ҫ��һ�� #t" + item + "#? ����������£�Ϊ��Ҫ������Ʒ�ʵ�װ������ȷ�����пռ�������װ������#b";

        if (stimulator) {
            stimID = getStimID(item);
            prompt += "\r\n#i" + stimID + "# 1 #t" + stimID + "#";
        }

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

        if (cm.getMeso() < cost) {
            cm.sendOk("���...���Ǯ���񲻹�Ŷ...")
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
            } else
                cm.gainItem(mats, -matQty);

            cm.gainMeso(-cost);
            if (stimulator) { //check for stimulator
                cm.gainItem(stimID, -1);
                var deleted = Math.floor(Math.random() * 10);
                if (deleted != 0) {
                    cm.gainItem(item, 1, true)
                    cm.sendOk("��ɡ��ƴ�����������������ʹ���ķ�ŭ.");
                } else {
                    cm.sendOk("���ҵ��ǣ����ľ���...�ִ�����������Һܱ�Ǹ���ҵ���ʧ.....");
                }
            } else { //just give basic item
                cm.gainItem(item, 1);
                cm.sendOk("��ɡ��ƴ�����������������ʹ���ķ�ŭ.");
            }
        }
        cm.dispose();
    } else if (status == 100) {
        cm.sendRepairWindow();
        cm.dispose();
    }
}

function getStimID(equipID) {
    var cat = Math.floor(equipID / 10000);
    var stimBase = 4130002; //stim for 1h sword

    switch (cat) {
        case 130: //1h sword, do nothing
            break;
        case 131: //1h axe
            stimBase++;
            break;
        case 132: //1h bw
            stimBase += 2;
            break;
        case 140: //2h sword
            stimBase += 3;
            break;
        case 141: //2h axe
            stimBase += 4;
            break;
        case 142: //2h bw
            stimBase += 5;
            break;
        case 143: //spear
            stimBase += 6;
            break;
        case 144: //polearm
            stimBase += 7;
            break;
        case 137: //wand
            stimBase += 8;
            break;
        case 138: //staff
            stimBase += 9;
            break;
        case 145: //bow
            stimBase += 10;
            break;
        case 146: //xbow
            stimBase += 11;
            break;
        case 133: //dagger
            stimBase += 12;
            break;
        case 147: //claw
            stimBase += 13;
            break;
        case 148: //knuckle
            stimBase += 14;
            break;
        case 149: //gun
            stimBase += 15;
            break;
    }

    return stimBase;
}