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

/* Magician Job Instructor
 */

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (mode == 1)
            status++;
        else
            status--;

        if (cm.haveItem(4031010)) {
            if (status == 0)
                cm.sendNext("��, ���� #b������#k ����������")
            else if (status == 1)
                cm.sendNextPrev("������Ҫ֤�����ʵ���� ? �ܺ�...");
            else if (status == 2)
                cm.sendNextPrev("�ҿ��Ը���һ�λ���,�������.");
            else if (status == 3)
                cm.sendYesNo("����� #b30 #t4031013##k. ף�����.");
            else if (status == 4) {
                cm.warp(108000100, 0);
                cm.dispose();
            }
        } else {
            cm.sendOk("�ܱ�Ǹ,����Ҫ #b�����ȵ��ż�#k ��ȥ�Һ�������ȡлл");
            cm.dispose();
        }
    }
}	