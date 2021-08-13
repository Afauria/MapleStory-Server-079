/*
	This file is part of the cherry Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
					   Matthias Butz <matze@cherry.de>
					   Jan Christian Meyer <vimes@cherry.de>

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
-- Odin JavaScript --------------------------------------------------------------------------------
	 Kerning Ticket Gate - Subway Ticketing Booth(103000100)
-- By ---------------------------------------------------------------------------------------------
	Information
-- Version Info -----------------------------------------------------------------------------------
	1.1 - Added function to NLC [Information]
	1.0 - First Version by Information
---------------------------------------------------------------------------------------------------
**/

var itemid = new Array(4031036,4031037,4031038,4031711);
var mapid = new Array(103000900,103000903,103000906,600010004);
var mapname = new Array("����B1", "����B2", "����B3","����Ҷ��������");
var menu;
var sw;

function start() {
	status = -1;
	sw = cm.getEventManager("Subway");
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1 || (mode == 0 && status ==1)) {
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.sendNext("�������һЩ��ҵ���չ��������");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		if (status == 0) {
			if (cm.haveItem(itemid[0]) || cm.haveItem(itemid[1]) || cm.haveItem(itemid[2]) || cm.haveItem(itemid[3])) {
				status = 1;
			} else {
				cm.sendOk("�����Ʊ����������������Ʊ��");
				cm.dispose();
			}
		} if (status == 1) {
			menu = "�����Ʊ�����㽫�����ϡ���ƱҪ�ã�\r\n";
			for(i=0; i < itemid.length; i++) {
				if(cm.haveItem(itemid[i])) {
					menu += "#L"+i+"##b"+mapname[i]+"#k#l\r\n";
				}
			}
			cm.sendSimple(menu);
		} if (status == 2) {
			section = selection;
			if(section < 3) {
				cm.gainItem(itemid[selection],-1);
				cm.warp(mapid[selection]);
				cm.dispose();
			}
			else {
				if(sw == null) {
					cm.sendNext("�¼��Ĵ���������������ķ������������");
					cm.dispose();
				} else if(sw.getProperty("entry").equals("true")) {
					cm.sendYesNo("������������ķ��䡣����ѳ�Ʊ׼���������ҿ��Ը����㣬���н��������ģ������õ����Ŀ�ĵؾͺ��ˡ�������ô��ģ�����������?");
				} else if(sw.getProperty("entry").equals("false") && sw.getProperty("docked").equals("true")) {
					cm.sendNext("������׼����ɡ��Һܱ�Ǹ������ó�����һ�ˡ��Ĳ���������ɪ������Ʊͤ.");
					cm.dispose();
				} else {
					cm.sendNext("���ǽ������1���Ӻ�ʼ�ǻ��������ĵȴ������ӡ�Ҫ֪��������������ȷ��ʱ�䣬����ֹͣ����Ʊ֮ǰ1���ӣ����������׼ʱ�����");
					cm.dispose();
				}
			}
		} if (status == 3) {
			cm.gainItem(itemid[section],-1);
			cm.warp(mapid[section]);
			cm.dispose();
		}
	}
}
