var quantities = Array(10, 8, 6, 5, 4, 3, 2, 1, 1, 1);
var prize1 = Array(1442047, 2000000, 2000001, 2000002, 2000003, 2000004, 2000005, 2430036, 2430037, 2430038, 2430039, 2430040); //1 day
var prize2 = Array(1442047, 4080100, 4080001, 4080002, 4080003, 4080004, 4080005, 4080006, 4080007, 4080008, 4080009, 4080010, 4080011);
var prize3 = Array(1442047, 1442048, 2022070);
var prize4 = Array(1442048, 2430082, 2430072); //7 day
var prize5 = Array(1442048, 2430091, 2430092, 2430093, 2430101, 2430102); //10 day
var prize6 = Array(1442048, 1442050, 2430073, 2430074, 2430075, 2430076, 2430077); //15 day
var prize7 = Array(1442050, 3010183, 3010182, 3010053, 2430080); //20 day
var prize8 = Array(1442050, 3010178, 3010177, 3010075, 1442049, 2430053, 2430054, 2430055, 2430056, 2430103, 2430136); //30 day
var prize9 = Array(1442049, 3010123, 3010175, 3010170, 3010172, 3010173, 2430201, 2430228, 2430229); //60 day
var prize10 = Array(1442049, 3010172, 3010171, 3010169, 3010168, 3010161, 2430117, 2430118, 2430119, 2430120, 2430137); //1 year
var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 0 && mode == 0) {
			cm.dispose();
			return;
		}	
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {	
			cm.sendNext("����Ҫ�����Ⱥ�����");
		} else if (status == 1) {	
			cm.sendSimple("#L2##e#n#b �������Ⱥ��ҡ�#k#l");
		} else if (status == 2) {
			if (selection == 0) {
				cm.sendNext("����£�ȫ��������ף���������ð�յ�! ��GM���������¼��оٰ�һ����ϲ�Ļ�¼�������GM���У�ȷ���μ�����һ����Ϊΰ��Ľ�Ʒ!");
				cm.dispose();
			} else if (selection == 1) {
				cm.sendSimple("����¼��кܶ���Ϸ����������Ϸ֮ǰ�����������֪���������Ϸ��ѡ��һ������֪�������! #b\r\n#L0# Ola Ola#l\r\n#L1# ð�յ������ܲ���#l\r\n#L2# ��ѩ�����#l\r\n#L3# ��Ҭ�ӱ���#l\r\n#L4# 0X��������#l\r\n#L5# Ѱ��#l#k");
			} else if (selection == 2) {
				if (!cm.canHold()) {
					cm.sendNext("�����ڳ���ı����ռ�.");
				} else if (cm.getChannelServer().getEvent() > -1) {
					cm.saveReturnLocation("EVENT");
					cm.getPlayer().setChalkboard(null);
					cm.warp(cm.getChannelServer().getEvent(), cm.getChannelServer().getEvent() == 109080000 || cm.getChannelServer().getEvent() == 109080010 ? 0 : "join00");
				} else {
					cm.sendNext("��ǰû�л���л����Ѿ����ڽ�����~~");
				}
				cm.dispose();
			} else if (selection == 3) {
				var selStr = "���뽻����һ��ֱ��Ӯ��֤��?";
				for (var i = 0; i < quantities.length; i++) {
					selStr += "\r\n#b#L" + i + "##t" + (4031332 + i) + "# Exchange(" + quantities[i] + ")#l";
				}
				cm.sendSimple(selStr);
				status = 9;
			}
		} else if (status == 3) {
			if (selection == 0) {
				cm.sendNext("#b[��¥ ��¥]#k ��һ����Ϸ�������������ӵ��ﶥ����ͨ��ѡ����ȷ�Ĺ��������ڶ�Ĺ�������ѡ����ȷ�Ĺ����ţ�������ķ���. \r\n\r\n��Ϸ�����������ɣ�ʱ�������� #b6 ����#k. ��[Ola Ola], �� #b��������˲�ƣ����٣�����������ٶ�ʹ��ҩ������Ʒ#k. ����һЩ������Ĺ����ţ��������㵽һ��İ���ĵط���������ע����Щ.");
				cm.dispose();
			} else if (selection == 1) {
				cm.sendNext("#b[ð�յ������ܲ���] ��һ����ͨ���ϰ����#k ����ɭ�ֵ����ġ������ͨ���˷������ϰ�������ʱ���ڵ�������Ŀ�ĵء� \r\n\r\n��Ϸ���ĸ������ɣ�ʱ�������� #b15����#k.[ð�յ����ܲ���]ʱ���㲻����ʹ�ô��ͻ��ٶȼӳ�.");
				cm.dispose();
			} else if (selection == 2) {
				cm.sendNext("#b[��ѩ��]#k �����ӡ���Ҷ�Ӻ͹��¶���ɣ����ӵ�ѫ��Ҳ������ #b�����޵�ʱ����ĸ��Ӱ�ѩ�����ԽԶ��Խ��#k. �����Ϸ������ʱ����ھ�������ô�Ͱ�ѩ�������Զ�ĵط� \r\n\r\n�����ѩ����δ������g #bCtrl#k. ����Զ�̹����ͼ���Ϊ�����Ĺ���������������ʹ��, #bֻ�йرյĹ���������#k. \r\n\r\n���һ����ɫ�Ӵ���ѩ����/���ᱻ�ͻ���㡣�ڳ�����ǰ���ѩ�˹������Է�ֹ�Է��ӹ�����ѩǰ��������һ���ƻ��õĲ��ԣ���Ϊ�Ŷӽ������Ƿ񹥻���ѩ���ѩ��.");
				cm.dispose();
			} else if (selection == 3) {
				cm.sendNext("#b[Ҭ�ӱ���]#k �����ӣ���Ҷ�Ӻ͹��µ��Ŷӣ�����֧����ѫ�¿�����#�ĸ��Ŷ��ռ������Ҭ��#k. ʱ������ #b5 ����#k. �����Ϸ������һ�������һ�������2���ӽ�������ȷ����ʤ�ߡ������Ϊ��ĳ��ԭ�򣬱ȷֱ���ƽ�֣���ô��Ϸ����ƽ�ֽ�����\r\n \ r����Զ�̹������ܵĹ��������������﹤����#�а����Ľ����빥����#����㲻��һ�������빥��������������Թ�������ͨ�����ͼ�ڵ�NPC���������Ը�ˮƽ���������ܣ������⳥�����ý�����ͬ�ġ�\r\n \ r \ nbeware�������ϰ��������ڵ�ͼ�������ɫ����Ϸ����������ҽ�����̭���֡���Ҭ���½������һ����Ա����Ա��ֻ��Ҭ���ҵ�������������ζ�Ų�Ҫ�����ϵ������ģ�����ż���ı�ըҬ�ӾͲ��㡣����һ�����ص����ڵ�ͼ�ײ���һ���ǣ�����ʹ�õ������ǵ�!");
				cm.dispose();
			} else if (selection == 4) {
				cm.sendNext("#b[0X��������]#k ��Ϸ��һ��ð�յ��ǻ�ͨ��X��O�ġ�һ���������Ϸ����С��ͼ�� #bM#kȥ������ġ������͡�0�����ܹ��� #r10 ����#k �����裬�����ǵĽ�ɫ��������ȷ��Ӯ�ñ���. \r\n\r\nһ��������⣬ʹ�����ӽ�����ȷ�𰸵����������ѡ��һ���𰸻��ǹ��������Ϲ�ȥ��ʱ�����ƣ��ַ�������̭���뱣�����λ��ֱ��[�Ե�] ���ƶ�֮ǰ���ر���Ļ��Ϊ�˷�ֹ�κ����͵���ƭ���������͵����콫���ر���0x����.");
				cm.dispose();
			} else if (selection == 5) {
				cm.sendNext("#b[Ѱ��]#k ��һ����Ϸ�����Ŀ�����ҵ� #b������#k���������ڵ�ͼ�� #r�� 10����#k. ����һ�����ر�������������һ���㽫���Ƿֿ��������Ŀ��������ز�����Ĺ����Ǵ���Щ��Ʒ����ѡ����Щ����. \r\n������Ա�ʹ�� #b���򹥻�#k,һ����ӵ���˲Ƹ��������ͨ��һ��ȫ���˴����Ľ�����Ŀ���������ܵľ��ᡣ����ȫ���˴�����ҵ����ڡ����������Ե�ͼ�����������ͨ��������ľ��� #bVikin#k of Lith Harbor.\r\n\r\n�����Ϸ�����ص��Ż���վ��������صĴ��͵㡣Ҫʹ�����ǣ��� #b�ϼ�ͷ#k ��һ����λ�ã���ᱻ���͵�һ����ͬ�ĵط���������һ������Ϊ�㻹�����ܵ���������¥�ݻ�������Ҳ��һ�����أ���������һ�����صĵط�����һ�����ص��ز���ֻ��ͨ�����ص��ţ����������Ĵ�Ѱ��.\r\n\r\n����Ϸ�еı��أ����й������ܽ� #r����#k, �������ó���Ĺ����������ز�.");
				cm.dispose();
			}
		} else if (status == 10) {
			if (selection < 0 || selection > quantities.length) {
				return;
			}
			var ite = 4031332 + selection;
			var quan = quantities[selection];
			var pri;
			switch(selection) {
				case 0:
					pri = prize1;
					break;
				case 1:
					pri = prize2;
					break;
				case 2:
					pri = prize3;
					break;
				case 3:
					pri = prize4;
					break;
				case 4:
					pri = prize5;
					break;
				case 5:
					pri = prize6;
					break;
				case 6:
					pri = prize7;
					break;
				case 7:
					pri = prize8;
					break;
				case 8:
					pri = prize9;
					break;
				case 9:
					pri = prize10;
					break;
				default:
					cm.dispose();
					return;
			}
			var rand = java.lang.Math.floor(java.lang.Math.random() * pri.length);
			if (!cm.haveItem(ite, quan)) {
				cm.sendOk("����Ҫ #b" + quan + " #t" + ite + "##k ����Ʒ����.");
			} else if (cm.getInventory(1).getNextFreeSlot() <= -1 || cm.getInventory(2).getNextFreeSlot() <= -1 || cm.getInventory(3).getNextFreeSlot() <= -1 || cm.getInventory(4).getNextFreeSlot() <= -1) {
				cm.sendOk("����Ҫ�ڳ�����.");
			} else {
				cm.gainItem(pri[rand], 1);
				cm.gainItem(ite, -quan);
				cm.gainMeso(100000 * selection); //temporary prize lolol
			}
			cm.dispose();
		}
	}
}