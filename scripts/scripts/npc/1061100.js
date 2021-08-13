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

var status = 0;
var regcost = 499;
var vipcost = 999;
var tempvar;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
	status++; if (mode == 0 && status == 1) {
	cm.dispose();
	return;
    } if (mode == 0 && status == 2) {
	cm.sendNext("����Ҳ�ṩ�������񣬾�����֮ǰ����ϸ���롣");
	cm.dispose();
	return;
    }
    if (status == 0) {
	cm.sendNext("��ӭ������ô��ùݡ���������Ϊ���ṩ��õķ�����������ˣ���������Ϣһ����Σ�");
    }
    if (status == 1) {
	cm.sendSimple("�����ṩ���ַ��䣬��ѡ������Ҫ��\r\n#b#L0#һ��ɣ���� (ÿ�� " + regcost + " ���)#l\r\n#L1#�߼�ɣ���� (ÿ��" + vipcost + " ���)#l");
    }
    if (status == 2) {
	tempvar = selection;
	if (tempvar == 0) {
	    cm.sendYesNo("��ѡ����һ��ɣ���ң����HP��MP��ظ��úܿ죬��Ҳ���������湺����Ʒ����ȷ��Ҫ������");
	}
	if (tempvar == 1) {
		cm.sendYesNo("��ѡ���˸߼�ɣ���ң����HP��MP���һ��ɣ���һظ��ø��죬Ҳ�����������ҵ��������Ʒ����ȷ��Ҫ������");
	}
    }
    if (status == 3) {
	if (tempvar == 0) {
	    if (cm.getMeso() >= regcost) {
		cm.warp(105040401);
		cm.gainMeso(-regcost);
	    } else {
        cm.sendNext("�ܱ�Ǹ�����������ƺ�û���㹻�ķ�ҡ�������Ҫ�� " + regcost + " ��Ҳ��ܴ������ǵ�һ��ɣ���ҡ�");
	    }
	} if (tempvar == 1) {
	    if (cm.getMeso() >= vipcost) {
		cm.warp(105040402);
		cm.gainMeso(-vipcost);
	    } else {
        cm.sendNext("�ܱ�Ǹ�����������ƺ�û���㹻�ķ�ҡ�������Ҫ�� " + vipcost + " ��Ҳ��ܴ������ǵĸ߼�ɣ���ҡ�");
	    }
	}
	cm.dispose();
    }
}
