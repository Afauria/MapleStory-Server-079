/*
	This file is part of the OdinMS Maple Story Server
	Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
					   Matthias Butz <matze@odinms.de>
					   Jan Christian Meyer <vimes@odinms.de>

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU Affero General Public License as
	published by the Free Software Foundation version 3 as published by
	the Free Software Foundation. You may not use, modify or distribute
	this program under any other version of the GNU Affero General Public
	License.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU Affero General Public License for more details.

	You should have received a copy of the GNU Affero General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/**
 * Guild Alliance NPC
 */

var status;
var choice;
var guildName;
var partymembers;

function start() {
	//cm.sendOk("The Guild Alliance is currently under development.");
	//cm.dispose();
	partymembers = cm.getPartyMembers();
	status = -1;
	action(1,0,0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
	}var MC = cm.getServerName();
	if (status == 0) {
		cm.sendSimple("#r#e"+MC+"#n#k �������� - \r\n\r\n#b#L0#����Ҫ֪������������ʲô��#l\r\n#L1#��Ҫ��ô�������������أ�#l\r\n#L2#����Ҫ������������#l\r\n#L4#����Ҫ��ɢ��������#l");
	} else if (status == 1) {
		choice = selection;
	    if (selection == 0) {
		    cm.sendOk("�������˾����������Ĺ����Ա����������һЩ��Ȥ�����顣");
			cm.dispose();
		} else if (selection == 1) {
			cm.sendOk("Ϊ�˳����������ˣ���������Ļ᳤��Ҫ��ӣ�Ȼ����������Ķӳ��ͻ�ѡΪ�������˵Ļ᳤��");
			cm.dispose();
		} else if(selection == 2) {
			if (cm.getPlayer().getParty() == null || partymembers == null || partymembers.size() != 2 || !cm.isLeader()) {
				cm.sendOk("�㲻�ܴ���һ���������ˣ�ֱ�����ҵ���һ�����ᡣ"); //Not real text
				cm.dispose();
			} else if (partymembers.get(0).getGuildId() <= 0 || partymembers.get(0).getGuildRank() > 1) {
				cm.sendOk("�㲻�ܴ���һ���������ˣ�ֱ�������Լ��Ĺ��ᡣ");
				cm.dispose();
			} else if (partymembers.get(1).getGuildId() <= 0 || partymembers.get(1).getGuildRank() > 1) {
				cm.sendOk("��ĳ�Ա�ƺ�û���Լ��Ĺ��ᡣ");
				cm.dispose();
			} else {
				var gs = cm.getGuild(cm.getPlayer().getGuildId());
				var gs2 = cm.getGuild(partymembers.get(1).getGuildId());
				if (gs.getAllianceId() > 5) {
					cm.sendOk("�㲻���ٴ�����Ϊ���Ѿ���������Ϊͬ���ˡ�");
					cm.dispose();
				} else if (gs2.getAllianceId() > 1) {
					cm.sendOk("��ĳ�Ա�Ѿ������������Ϊͬ���ˡ�");
					cm.dispose();
				} else if (cm.partyMembersInMap() < 1) {
					cm.sendOk("��ȷ��������Ա��ͬ�ŵ�ͼ�ϡ�");
					cm.dispose();
				} else
                cm.sendYesNo("Ŷ��������Ȥ����һ���������ˣ�");
			}
		} else if (selection == 3) {
			if (cm.getPlayer().getGuildRank() == 1 && cm.getPlayer().getAllianceRank() == 1) {
				cm.sendYesNo("Ϊ�����ӿ�� ��Ҫ֧�� 10,000,000 ���. ��ȷ��Ҫ������"); //ExpandGuild Text
			} else {
			    cm.sendOk("ֻ�й������˳������������ˡ�");
				cm.dispose();
			}
		} else if(selection == 4) {
			if (cm.getPlayer().getGuildRank() == 1 && cm.getPlayer().getAllianceRank() == 1) {
				cm.sendYesNo("�������Ҫ��ɢ�������ˣ���");
			} else {
				cm.sendOk("ֻ�й������˳��ſ��Խ�ɢ��");
				cm.dispose();
			}
		}
	} else if(status == 2) {
	    if (choice == 2) {
		    cm.sendGetText("��������������Ҫ�Ĺ����������� (�����Ԫ����. 12 ����)");
		} else if (choice == 3) {
			if (cm.getPlayer().getGuildId() <= 0) {
				cm.sendOk("�㲻�����Ӳ��湫�����ˡ�");
				cm.dispose();
			} else {
				if (cm.addCapacityToAlliance()) {
					cm.sendOk("��ɹ������˹�������������");
				} else {
					cm.sendOk("�ܱ�Ǹ��������Ĺ������������Ѿ����ˣ����Բ��������䡣");
				}
				cm.dispose();
			}
		} else if (choice == 4) {
			if (cm.getPlayer().getGuildId() <= 0) {
				cm.sendOk("�㲻�ܽ�ɢ�����ڵĹ������ˡ�");
				cm.dispose();
			} else {
				if (cm.disbandAlliance()) {
					cm.sendOk("�ɹ���ɢ�������ˡ�");
				} else {
					cm.sendOk("��ɢ��������ʱ��������");
				}
				cm.dispose();
			}
		}
	} else if (status == 3) {
		guildName = cm.getText();
	    cm.sendYesNo("��� #b"+ guildName + "#k ������Ҫ�Ĺ������������𣿣�");
	} else if (status == 4) {
			if (!cm.createAlliance(guildName)) {
				cm.sendNext("������ֲ���ʹ�ã��볢�������ġ�"); //Not real text
				status = 1;
				choice = 2;
			} else
				cm.sendOk("�ɹ��Ĵ����˹������ˣ���");
				cm.dispose();
	}
}