/*
	This file is part of the cherry Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@cherry.de>
                       Jan Christian Meyer <vimes@cherry.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1 || mode == 0) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		if (status == 0) {
			cm.sendSimple ("�ҿ����Ѻܱ��˵ļ۸�������Щ��������Ҫ��ʲô��\r\n#b#L0#С��� [5,000,000 ���]#l\r\n#L1#��ɫҰ�� [20,000,000 ���]#l\r\n#L2#������ [50,000,000 ���]#l\r\n#L3#5���о������� [1,000,000 ���]#l\r\n#L4#5�������� [1,000,000 ���]#l");
		} else if (status == 1) {
			if(!cm.canHold(1902000)){
				cm.sendOk("��ı���û���㹻�Ŀռ䣬��ȷ�����㹻�Ŀռ��ٹ���"); 
				cm.dispose();
				return;
			}
			if (selection == 0) {
				if (cm.getPlayer().getMeso() < 5000000) {
					cm.sendOk("��û���㹻�Ľ�ҡ��޷�����");
					cm.dispose();
					return;
				}
				else if (cm.getPlayer().getLevel() < 70) {
					cm.sendOk("��������Ҫ#b70#k���ſɹ���#bС���#k.���Ͱɣ���ӭ�ٴι��٣�");
					cm.dispose();
					return;
				}
				cm.gainItem(1902000, 1);
				cm.gainMeso(-5000000); 
			}
			else if (selection == 1) {
				if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("��û���㹻�Ľ�ҡ��޷�����");
					cm.dispose();
					return;
				}
				else if (cm.getPlayer().getLevel() < 120) {
					cm.sendOk("��������Ҫ#b120#k���ſɹ���#b��ɫҰ��#k.���Ͱɣ���ӭ�ٴι��٣�");
					cm.dispose();
					return;
				}
				cm.gainItem(1902001, 1);
				cm.gainMeso(-20000000); 
			} 
			else if (selection == 2) {
				if (cm.getPlayer().getMeso() < 50000000) {
					cm.sendOk("��û���㹻�Ľ�ҡ��޷�����");
					cm.dispose();
					return;
				}
				else if (cm.getPlayer().getLevel() < 200) {
					cm.sendOk("����Ҫ����#b200#k���ſɹ���#b������#k.���Ͱɣ���ӭ�ٴι��٣�");
					cm.dispose();
					return;
				}
				cm.gainItem(1902002, 1);
				cm.gainMeso(-50000000); 
			}
			else if (selection == 3) {
				if (cm.getPlayer().getMeso() < 1000000) {
					cm.sendOk("��û���㹻�Ľ�ҡ��޷�����");
					cm.dispose();
					return;
				}
				cm.gainItem(4031508, 5);
				cm.gainMeso(-1000000); 
			}
			else if (selection == 4) {
				if (cm.getPlayer().getMeso() < 1000000) {
					cm.sendOk("��û���㹻�Ľ�ҡ��޷�����");
					cm.dispose();
					return;
				}
				cm.gainItem(4031507, 5);
				cm.gainMeso(-1000000); 		
			 
	         }
			cm.sendOk("����ɹ�������������·���Ϳ�Ķ��ˣ�\r\n�����û�л��#bƤ����#k��#b���޼���#k�Ļ�Ҳ�������������á���÷������ҵ�����Ϳ����ˡ�����������ٹ�����������Ҫ����Ʒ�Ϳ����ˣ�");
			cm.dispose();
			return;
		}
	}
}
