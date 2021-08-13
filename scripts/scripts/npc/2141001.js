/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

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

/* Pison
	Warp NPC to Lith Harbor (104000000)
	located in Florina Beach (110000000)
*/

importPackage(net.sf.odinms.server.maps);

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("ê,你确定要挑战PB吗？");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("你确定要挑战PB吗？我现在就送你进去!!!");
		} else if (status == 1) {
			cm.sendNextPrev("你的等级够120级了么，小心进去死了会很难堪.")
		} else if (status == 2) {
			if (cm.getMeso() < 0) {
				cm.sendOk("你考虑清楚要进PB了吗？.")
				cm.dispose();
			} else {
				cm.sendYesNo("你考虑清楚要进PB了吗？");
			}
		} else if (status == 3) {
			map = 270050100;
          //  cm.worldMessage("[全服最强PB系统]:" + cm.c.getPlayer().getName() + "   /:" + cm.c.getPlayer().getLevel() + "开始了PB艰难的远征!~~");
			cm.warp(map, 0);
			cm.dispose();
		}
	}
}