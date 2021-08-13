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
// Jane the Alchemist
var status = -1;
var amount = -1;
var items = [[2000002,310],[2022003,1060],[2022000,1600],[2001000,3120]];
var item;

function start() {
    if (cm.getQuestStatus(2013))
        cm.sendNext("������...лл�㣬���ܵõ��ܶ���ɡ��������Ѿ�����һ����Ʒ���������Ҫʲô������֪��.");
    else {
        if (cm.getQuestStatus(2010))
            cm.sendNext("���ƺ�û��ǿ�������ܹ������ҵ�ҩˮ......");
        else
            cm.sendOk("��Ҫ�������ſ��Ը�����ҩˮ�!");
        cm.dispose();
    }
}

function action(mode, type, selection) {
    status++;
    if (mode != 1){
        if(mode == 0 && type == 1)
            cm.sendNext("����Ȼ�в�������ǰ���ҵĲ��ϡ���Щ��Ŀ���������������ʱ��ѡ��...");
        cm.dispose();
        return;
    }
	/*
    if (status == 0){
        var selStr = "���빺����Щҩˮ??#b";
        for (var i = 0; i < items.length; i++)
            selStr += "\r\n#L" + i + "##i" + items[i][0] + "# (�۸� : " + items[i][1] + " ���)#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        item = items[selection];
        var recHpMp = ["300 HP.","1000 HP.","800 MP","1000 HP and MP."];
        cm.sendGetNumber("������ #b#t" + item[0] + "##k? #t" + item[0] + "# �������ָ� " + recHpMp[selection] + " ��������ٸ�??", 1, 1, 100);
    } else if (status == 2) {
        cm.sendYesNo("�㹺����Щ #r" + selection + "#k #b#t" + item[0] + "#(s)#k? #t" + item[0] + "# ����Ϊ " + item[1] + " ��� Ϊһ�壬�����ܳ����� #r" + (item[1] * selection) + "#k ���.");
        amount = selection;
    } else if (status == 3) {
        if (cm.getMeso() < item[1] * amount)
            cm.sendNext("ȷ����ķ���Ƿ��㹻,�ͼ������������Ƿ��㹻,����������� #r" + (item[1] * selectedItem) + "#k ���.");
        else {
            if (cm.canHold(item[0])) {
                cm.gainMeso(-item[1] * amount);
                cm.gainItem(item[0], amount);
                cm.sendNext("лл��ĵ��������������������ʱ���У������������Ҫ�Ķ�������ӭ����.");
            } else
                cm.sendNext("ȷ����ķ���Ƿ��㹻,�ͼ������������Ƿ��㹻..");
        }
        cm.dispose();
    } 
	*/
	cm.dispose();
}