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
/* Author: Xterminator
	NPC Name: 		Mr. Goldstein
	Map(s): 		Victoria Road : Lith Harbour (104000000)
	Description:		Extends Buddy List
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.sendNext("������Ӧ���Ǹ��¶����˲Ų���Ҫ���Ѷ԰�??\r\n����Ц�ģ��������������Ҫ��չ��ĺ����б���������ҵ��!");
	    cm.dispose();
	    return;
	} else if (status >= 1) {
	    cm.sendNext("�Ҳ���Ϊ��û�����ѣ���ֻ�ǲ��뻨25�����������Լ��ĺ�����!");
	    cm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	cm.sendYesNo("�һ��ǵ����������ǽе�...�ţ���ã�����Ҫ��չ��ĺ����б�ô������һЩǮ���ҿ��԰���������һ�㡣����Ҫ��ס����ֻ�ǰ��������ɫ��չ�˺���λŶ��");
    } else if (status == 1) {
	cm.sendYesNo("�ðɣ�һ�κ��������죡��ʵ�Ⲣ����ģ�#b250000#kð�ձң��һ����5����λ����ĺ����б��С�һ���㹺�������⽫��������ĺ����б��ϡ���㸶Ǯ�ɣ�");
    } else if (status == 2) {
	var capacity = cm.getBuddyCapacity();
	if (capacity >= 100 || cm.getMeso() < 250000) {
	    cm.sendNext("�� ��ȷ������ #b250,000 ð�ձ�ô#k? ����㹻ȷ���ǲ�����ĺ������Ѿ� #b100#k ����..");
	} else {
	    var newcapacity = capacity + 5;
	    cm.gainMeso(-250000);
	    cm.updateBuddyCapacity(newcapacity);
	    cm.sendOk("�����Ѿ�������5����������..����㻹��Ҫ������������..��Ȼ������ѵ�!");
	}
	cm.dispose();
    }
}