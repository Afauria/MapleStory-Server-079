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
//BY MOOGRA
/* Robeira
	Magician 3rd job advancement
	El Nath: Chief's Residence (211000001)
	Custom Quest 100100, 100102
*/

var status = 0;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 1) {
            cm.sendOk("�����¶������ٴ����Ұ�.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		if (cm.getJob() == 511 || cm.getJob() == 521 || cm.getJob() == 512 || cm.getJob() == 522) {	
	    cm.sendOk("�����ں�����,�������Ѿ��ɹ���ת��,�Ѿ���Խ�˽̹ٵ�ǿ����!");
	    cm.dispose();
	    return;
		}
            if (!(cm.getJob()==510 ||cm.getJob()==520)) {
		cm.sendOk("��������תְ�̹�,�������ں������Ĺ���!");
                cm.dispose();
                return;
			} else if (cm.getPlayer().getLevel() < 70) {
				cm.sendOk("��ĵȼ���δ��70��");
				cm.dispose();
				return;		
            }	
			if (cm.haveItem(4031057, 1)){
                cm.sendNext("��ϲ�㵽������,����ҽ�����һ������!");			
            } else if (!(cm.haveItem(4031057,1))) {
				cm.warp(120000101);
                cm.sendOk("ȥ�� #r������#k ����������!");
                cm.dispose();
            } else if (cm.getPlayer().getRemainingSp() <= (cm.getLevel() - 70) * 3) {
                cm.sendNext("��ļ��ܵ�����û����..");
		} else {
                cm.sendOk("�㻹����תְ...");
                cm.dispose();
            }
        } else if (status == 1) {
            if (cm.haveItem(4031058, 1)) {
                if (cm.getJob()==510) {
                    cm.changeJob(511);
                    //cm.getPlayer().gainAp(5);
					cm.gainItem(4031057, -1);
					cm.gainItem(4031058, -1);
					cm.sendOk("��ϲתְ��!");
					cm.worldMessage("��תְ�챨������ϲ���."+ cm.getChar().getName() +"  �ɹ���ת-�񶷼����������ҵ�ף����/���ɣ�");
                    cm.dispose();
                } else if (cm.getJob()==520) {
                    cm.changeJob(521);
                    //cm.getPlayer().gainAp(5);
					cm.gainItem(4031057, -1);
					cm.gainItem(4031058, -1);
                    cm.sendOk("��ϲתְ��!");
					cm.worldMessage("��תְ�챨������ϲ���."+ cm.getChar().getName() +"  �ɹ���ת-��ǹ�����������ҵ�ף����/���ɣ�");
                    cm.dispose();
                }
            } else if (cm.haveItem(4031057, 1))
                cm.sendAcceptDecline("��׼���е����ղ���??");
            else
                cm.sendAcceptDecline("���ǣ��ҿ����������ǿ����Ȼ�����֤�����������ʵ���������֪ʶ����׼������ս����");
        } else if (status == 2) {
            if (cm.haveItem(4031057, 1)) {
                cm.sendOk("ȥ����ʥ��ʯͷ�����!!.");
                cm.dispose();
            }
        }
    }
}
