/**
 * @author: Eric
 * @npc: Cesar
 * @func: Ariant PQ
*/

var status = 0;
var sel;
var empty = [false, false, false];
var closed = false;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection){
    (mode == 1 ? status++ : status--);
    if (status == 0) {
		cm.sendSimple("#e<���ﰲ�أ�������>#n\r\n��ӭ��������������ԶԿ�������Һ�չʾ�������.#b\r\n#L0#������� [������������].\r\n#L1#���ڶ� [������������]\r\n#L2#[������������] ���۱�׼\r\n#L3#�������ʣ����ս����.\r\n#L4#�һ�����������.");
	} else if (status == 1) {
		if (selection == 0) {
			if (closed || (cm.getPlayer().getLevel() < 50 && !cm.getPlayer().isGM())) {
				cm.sendOk(closed ? "���ﰲ�ؾ������ǻ��һ���õ�����ɡ����Ժ��ٻ���." : "50��~200��. �Բ��������ܲ��μ�.");
				cm.dispose();
				return;
			}
			var text = "����Ҫʲô?#b";
			for(var i = 0; i < 3; i += 1)
				if (cm.getPlayerCount(980010100 + (i * 100)) > 0)
					if (cm.getPlayerCount(980010101 + (i * 100)) > 0)
						continue;
					else
						text += "\r\n#L" + i + "# Battle Arena " + (i + 1) + " (" + cm.getPlayerCount(980010100 + (i * 100)) + "/" + cm.getPlayer().getAriantSlotsRoom(i) + " Users. Leader: " + cm.getPlayer().getAriantRoomLeaderName(i) + ")#l";
				else {
					empty[i] = true;
					text += "\r\n#L" + i + "# Battle Arena " + (i + 1) + " (Empty)#l";
					if (cm.getPlayer().getAriantRoomLeaderName(i) != "")
						cm.getPlayer().removeAriantRoom(i);
				}
			cm.sendSimple(text);
		} else if (selection == 1) {
			cm.sendNext("���ﰲ�ؾ�������һ�����ҵ�ս����������սʿ����������ʹ���Ǹ���С����Ҳ��Ҫ������۾��������棡һ��̽�ռ���ʹ���д�ϲ���ı�ʯ��ᱻѡΪ��õı���ܼ򵥣��ǰɣ�\r\n - #e�ȼ�#n : 50������#r(�Ƽ��ȼ� : 50 - 80 )#k\r\n - #eʱ������#n : 8 ����\r\n - #e��Ա#n : 2-6\r\n - #e��Ʒ#n :\r\n#i1113048:# �ھ���ָ");
			cm.dispose();
		} else if (selection == 2) {
			status = 9;
			cm.sendNext("����֪����ô #r����Ĺھ�#k �õ� #b����#k? ��ô���Ĳ������ã��һ��������.");
		} else if (selection == 3) {
			var ariant = cm.getQuestRecord(150139);
			var data = ariant.getCustomData();
			if (data == null) {
				ariant.setCustomData("10");
				data = "10";
			}
			cm.sendNext("#r#h ##k, ����ԲμӾ����� #b" + parseInt(data) + "#k ʱ�䣨���죩.");
			cm.dispose();
		} else if (selection == 4) {
			status = 4;
			cm.sendNext("����ʲô�����ڴ󾺼����������ľ������������� 150, �㽫�õ� #i1113048:# #b�ھ���ָ#k.\r\n���������Ķ�ʿ������.");
		}
	} else if (status == 2) {
		var sel = selection;
		if(cm.getPlayer().getAriantRoomLeaderName(sel) != "" && empty[sel])
            empty[sel] = false;
        else if(cm.getPlayer().getAriantRoomLeaderName(sel) != "") {
			cm.warp(980010100 + (sel * 100));
            cm.dispose();
            return;
        }
        if (!empty[sel]) {
            cm.sendNext("��һ��սʿ�����˾�������һ���ҽ�����Ҫô����һ���µģ�Ҫô����ս���������Ѿ�����.");
            cm.dispose();
            return;
        }
		cm.getPlayer().setApprentice(sel);
        cm.sendGetNumber("�ж�������߿��Բμ��ⳡ����? (2~6 ppl)", 0, 2, 6);
	} else if (status == 3) {
		var sel = cm.getPlayer().getApprentice(); // how 2 final in javascript.. const doesn't work for shit
		if (cm.getPlayer().getAriantRoomLeaderName(sel) != "" && empty[sel])
			empty[sel] = false;
        if (!empty[sel]) {
            cm.sendNext("��һ��սʿ�����˾�������һ���ҽ�����Ҫô����һ���µģ�Ҫô����ս���������Ѿ�����.");
            cm.dispose();
            return;
        }
        cm.getPlayer().setAriantRoomLeader(sel, cm.getPlayer().getName());
        cm.getPlayer().setAriantSlotRoom(sel, selection);
        cm.warp(980010100 + (sel * 100));
		cm.getPlayer().setApprentice(0);
        cm.dispose();
	} else if (status == 5) {
		cm.sendNextPrev("�����ǣ���ľ���������ֻ�� #b0#k. �����÷ָ��� #b150#k �õ� #b�ھ���ָ#k. �㹻�ߵķ�����֤�������ʸ�����һ.");
	} else if (status == 6) { // todo: code champion rings :c
		cm.dispose();
	} else if (status == 10) {
		cm.sendNextPrev("���Ҹ�������򵥵Ĺ�����ΰ��Ĺھ� #b��걦ʯ#k����ѡΪ��ѵĹھ�����Ȼ�������Ӯ����һ�������Ļ������õ����ߵ����� #b�����ھ�#k.\r\n\r\n(#b����������ʱ������������ᱻ����ӵ�е���걦ʯ�����������⣬�������Ĳ����߼�����������ø���Ľ���.)#k");
	} else if (status == 11) {
		cm.sendNextPrev("��ʹ�㲻����ǿ��Ҳ��Ҫ���ġ���������� #b���� 15#k ���ı�ʯ��û���˸ҷ��ϵ���ʵ������һ��ΰ���սʿ.\r\n\r\n(������� #b���� 15 ��걦ʯ, �㽫���ƽ������.)#k");
	} else if (status == 12) {
		cm.sendNextPrev("�����׬�Ķ� 15?��Ȼ�����ǻ����������Ĺھ���������Ľ������Ⲣ����ζ�����õ� #r�������Ľ���#k, ��Ȼ��������� #b30#k ��ʯ�����õ��� #r��ѱ���#k.\r\n\r\n(ʹ #b30 ��걦ʯ��������������.)#k");
	} else if (status == 13) {
		cm.sendNextPrev("����㲻������15�ű�ʯ���Ǿ���ζ���㲻��õ��κν���? �����ǲ�����������������������Ů�����д�Ը����Ǹ���һ���Ľ��� #b�ھ�˭����ʧ�������� 15#k ��ʯ������������£����õ� #r���ٵĽ���#k. ��ʲô��Թ������㲻ϲ������ѵ����ļ��ܺ�ִ��һ�������������У�\r\n\r\n(������� #b����15 ��걦ʯ���㽫��õ������Ľ���.)#k");
	} else if (status == 14) {
		cm.sendNextPrev("��Ȼ��һ������������ʧ���߲�ֵ�ñ��Դ����Լ������ˡ���ʹ #b6 ��걦ʯ#k ��̫���� #r��Ҫ����#k, ��ô���������ζ����û�дﵽ��׼�������������㼸������ #r�κν���#k Ϊ�����еı��������ԣ����ŵõ�����6�������ı�ʯ.\r\n\r\n(������� #b5 ����ٵ���걦ʯ���㽫��ü����κν���.)#k");
	} else if (status == 15) {
		cm.sendNextPrev("���, #rų��#k �Ͳ�����������ʧ���� #bʱ������#k �����һЩ�����Ļ����� #r��ȥ��ʱ��#k.\r\n\r\n(#b������������������м�ͣ�����������������ݾ�����ʱ����.)#k");
		cm.dispose();
	}
}
