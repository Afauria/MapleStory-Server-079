/* Mr. Thunder
	Victoria Road: Perion (102000000)
	
	Refining NPC: 
	* Minerals
	* Jewels
	* Shields
	* Helmets
*/

var status = -1;
var selectedType = -1;
var selectedItem = -1;
var item;
var mats;
var matQty;
var cost;
var qty;
var equip;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
    }
    if (status == 0 && mode == 1) {
	var selStr = "������˭˵�һ�������ʯ��? �ǵ�...���һ���ȡһЩ����Ŷ.#b"
	var options = new Array("����ĸ��","������ʯ");
	for (var i = 0; i < options.length; i++){
	    selStr += "\r\n#L" + i + "# " + options[i] + "#l";
	}
			
	cm.sendSimple(selStr);
    }
    else if (status == 1 && mode == 1) {
	selectedType = selection;
	if (selectedType == 0){ //mineral refine
	    var selStr = "����,��ϲ����һ�ֿ�ʯ��? �ҿ��԰�������.#b";
	    var minerals = new Array ("��ͭ","����","﮿�ʯ","���ʯ","��","�Ͽ�ʯ","�ƽ�");
	    for (var i = 0; i < minerals.length; i++){
		selStr += "\r\n#L" + i + "# " + minerals[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	    equip = false;
	}
	else if (selectedType == 1){ //jewel refine
	    var selStr = "����,��ϲ����һ�ֱ�ʯ��? �ҿ��԰�������#b";
	    var jewels = new Array ("ʯ��ʯ","��ˮ��","������ʯ","��ĸ��","����ʯ","����ʯ","�ƾ�","��ʯ","��ˮ��");
	    for (var i = 0; i < jewels.length; i++){
		selStr += "\r\n#L" + i + "# " + jewels[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	    equip = false;
	}
	else if (selectedType == 2){ //helmet refine
	    var selStr = "Ŷ? ����Ҫ����ͷ��? �õ��Ǹ�����Ҫ��������һ����!!#b";
	    var helmets = new Array ("��ɫ����ͷ��#k - ��Ҫ�ȼ� Lv. 15#b","��ɫ����ͷ��#k - ��Ҫ�ȼ� Lv. 15#b","����ͷ��#k - ��Ҫ�ȼ� Lv. 10#b","﮿�ͷ��#k - ��Ҫ�ȼ� Lv. 10#b","����ñ#k - ��Ҫ�ȼ� Lv. 12#b","﮿�ñ#k - ��Ҫ�ȼ� Lv. 12#b","����ͷ��#k - ��Ҫ�ȼ� Lv. 15#b",
		"﮿�ֿ�#k - ��Ҫ�ȼ� Lv. 15#b","���ƺ���ñ#k - ��Ҫ�ȼ� Lv. 20#b","﮿󺣵�ͷ��#k - ��Ҫ�ȼ� Lv. 20#b","������ñ#k - ��Ҫ�ȼ� Lv. 20#b","﮿������ñ#k - ��Ҫ�ȼ� Lv. 20#b","﮿��ͷ��#k - ��Ҫ�ȼ� Lv. 22#b",
"�ƽ��ͷ��#k - ��Ҫ�ȼ� Lv. 22#b",
		"�ƽ���ʿͷ��#k - ��Ҫ�ȼ� Lv. 25#b","�Ͽ���ʿͷ��#k - ��Ҫ�ȼ� Lv. 25#b","��ɫս��ͷ��#k - ��Ҫ�ȼ� Lv. 35#b","��ɫս��ͷ��#k - ��Ҫ�ȼ� Lv. 35#b","﮿�ŵ��ͷ��#k - ��Ҫ�ȼ� Lv. 40#b","�ƽ�ŵ��ͷ��#k - ��Ҫ�ȼ� Lv. 40#b","﮿�ʮ�־�ñ#k - ��Ҫ�ȼ� Lv. 50#b",
		"����ʮ�־�ñ��#k - ��Ҫ�ȼ� Lv. 50#b","��ŵ��ͷ��#k - ��Ҫ�ȼ� Lv. 55#b","��﮿�ŵ��ͷ��#k - ��Ҫ�ȼ� Lv. 55#b");
	    for (var i = 0; i < helmets.length; i++){
		selStr += "\r\n#L" + i + "# " + helmets[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	    equip = true;
	}
	else if (selectedType == 3){ //shield refine
	    var selStr = "Ŷ? ����Ҫ��������? �õ��Ǹ�����Ҫ��������һ����!?#b";
	    var shields = new Array ("��󷽶�#k - ��Ҫ�ȼ� Lv. 40#b","﮿󷽶�#k - ��Ҫ�ȼ� Lv. 40#b","��������#k - ��Ҫ�ȼ� Lv. 60#b","��������#k - ��Ҫ�ȼ� Lv. 60#b");
	    for (var i = 0; i < shields.length; i++){
		selStr += "\r\n#L" + i + "# " + shields[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	    equip = true;
	}
	if (equip)
	    status++;
    }
    else if (status == 2 && mode == 1) {
	selectedItem = selection;
	if (selectedType == 0){ //mineral refine
	    var itemSet = new Array(4011000,4011001,4011002,4011003,4011004,4011005,4011006);
	    var matSet = new Array(4010000,4010001,4010002,4010003,4010004,4010005,4010006);
	    var matQtySet = new Array(10,10,10,10,10,10,10);
	    var costSet = new Array(300,300,300,500,500,500,800);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 1){ //jewel refine
	    var itemSet = new Array(4021000,4021001,4021002,4021003,4021004,4021005,4021006,4021007,4021008);
	    var matSet = new Array(4020000,4020001,4020002,4020003,4020004,4020005,4020006,4020007,4020008);
	    var matQtySet = new Array(10,10,10,10,10,10,10,10,10);
	    var costSet = new Array (500,500,500,500,500,500,500,1000,3000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
		
	var prompt = "��������Ҫ�Ұ�����һЩ#t" + item + "#? ������Ҫ�������ٸ���?";
		
	cm.sendGetNumber(prompt,1,1,100)
    }
    else if (status == 3 && mode == 1) {
	if (equip)
	{
	    selectedItem = selection;
	    qty = 1;
	}
	else
	    qty = selection;

	if (selectedType == 2){ //helmet refine
	    var itemSet = new Array(1002042,1002041,1002002,1002044,1002003,1002040,1002007,1002052,1002011,1002058,1002009,1002056,1002087,1002088,1002049,1002050,1002047,1002048,1002099,1002098,1002085,1002028,1002022,1002101);
	    var matSet = new Array(new Array(1002001,4011002),new Array(1002001,4021006),new Array(1002043,4011001),new Array(1002043,4011002),new Array(1002039,4011001),new Array(1002039,4011002),new Array(1002051,4011001),new Array(1002051,4011002),new Array(1002059,4011001),new Array(1002059,4011002),
		new Array(1002055,4011001),new Array(1002055,4011002),new Array(1002027,4011002),new Array(1002027,4011006),new Array(1002005,4011006),new Array(1002005,4011005),new Array(1002004,4021000),new Array(1002004,4021005),new Array(1002021,4011002),new Array(1002021,4011006),new Array(1002086,4011002),
		new Array(1002086,4011004),new Array(1002100,4011007,4011001),new Array(1002100,4011007,4011002));
	    var matQtySet = new Array(new Array(1,1),new Array(1,1),new Array(1,1),new Array(1,1),new Array(1,1),new Array(1,1),new Array(1,2),new Array(1,2),new Array(1,3),new Array(1,3),new Array(1,3),new Array(1,3),new Array(1,4),new Array(1,4),new Array(1,5),new Array(1,5),new Array(1,3),new Array(1,3),
		new Array(1,5),new Array(1,6),new Array(1,5),new Array(1,4),new Array(1,1,7),new Array(1,1,7));
	    var costSet = new Array(500,300,500,800,500,800,1000,1500,1500,2000,1500,2000,2000,4000,4000,5000,8000,10000,12000,15000,20000,25000,30000,30000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 3){ //shield refine
	    var itemSet = new Array (1092014,1092013,1092010,1092011);
	    var matSet = new Array(new Array (1092012,4011003),new Array (1092012,4011002),new Array (1092009,4011007,4011004),new Array (1092009,4011007,4011003));
	    var matQtySet = new Array (new Array (1,10),new Array (1,10),new Array (1,1,15),new Array (1,1,15));
	    var costSet = new Array (100000,100000,120000,120000);
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
			
	prompt += " �õ��һ������ɵ�,������ȷ����ı����Ƿ����㹻�Ŀռ�Ŷ#b";
		
	if (mats instanceof Array){
	    for(var i = 0; i < mats.length; i++){
		prompt += "\r\n#i"+mats[i]+"# " + matQty[i] * qty + " #t" + mats[i] + "#";
	    }
	}
	else {
	    prompt += "\r\n#i"+mats+"# " + matQty * qty + " #t" + mats + "#";
	}
		
	if (cost > 0)
	    prompt += "\r\n#i4031138# " + cost * qty + " meso";
		
	cm.sendYesNo(prompt);
    } else if (status == 4 && mode == 1) {
	var complete = true;
		
	if (cm.getMeso() < cost * qty) {
	    cm.sendOk("�����㸶�����ҵĹ���,��Ǹ��.");
	    cm.safeDispose();
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

	    if (!complete)
		cm.sendOk("����ҵĲ��Ͽ��ܲ���Ŷ,�ٰ��Ҽ��һ�±�����~");
	    else {
		if (mats instanceof Array) {
		    for (var i = 0; i < mats.length; i++){
			cm.gainItem(mats[i], -matQty[i] * qty);
		    }
		}
		else
		    cm.gainItem(mats, -matQty * qty);

		cm.gainMeso(-cost * qty);
		cm.gainItem(item,qty);
		cm.sendOk("�����~�����ҵ�����,�����? ����Ҫ����������Ŷ~");
	    }
	    cm.safeDispose();
	}
    }
}