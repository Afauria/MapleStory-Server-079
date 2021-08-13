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
/* Edited by: kevintjuh93
    NPC Name:         Jean
    Map(s):         Victoria Road : Lith Harbour (104000000)
    Description:         Event Assistant
*/
var status = 0;

function start() {
    cm.sendNext("�� ���� #b����#k. ���ڵȴ��ҵĴ�� #b��#k. ��Ӧ������������...");
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 2 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 1) {
            cm.sendNextPrev("��......�Ҹ���ô�죿���λ����ʼ���ܿ�......�ܶ���ȥ��������������������ÿ����......");
        } else if (status == 2) {
            cm.sendSimple("��... ��Ϊʲô�������ߣ������ҵ��ֵܻ���������...\r\n#L0##e1.#n#b ʲô���Ļ����??#k#l\r\n#L1##e2.#n#b ���ܻ����������ʶ..#k#l\r\n#L2##e3.#n#b ���ˣ������߰ɣ�#k#l");
        } else if (status == 3) {
            if (selection == 0) {
                cm.sendNext("���б��³���ð�յ�������ף�������꣡ȫ����ƽ����о�ϲGM���������ڼ䣬����������Ľ�ֺ����ȷ������������һ��Ϊΰ��Ľ�Ʒ��");
                cm.dispose();
            } else if (selection == 1) {
                cm.sendSimple("����������⽫�������㿪ʼ�֮ǰ������...ѡ�������˽�Ļ.. #b\r\n#L0# ������#l\r\n#L1# �ռ�����#l\r\n#L2# ��ѩ��#l\r\n#L3# �����#l\r\n#L6# ��ƿ��#l\r\n#L4# �Ƿ������#l\r\n#L5# Ѱ��#l#k");
            } else if (selection == 2) {
				if (!cm.canHold()) {
					cm.sendNext("��ȷ���Ƿ������п�λ��");
				} else if (cm.getChannelServer().getEvent() > -1) {
					if (cm.haveItem(4031017)) {
						cm.removeAll(4031017);
					}
					cm.saveReturnLocation("EVENT");
					cm.getPlayer().setChalkboard(null);
					cm.warp(cm.getChannelServer().getEvent(), cm.getChannelServer().getEvent() == 109080000 || cm.getChannelServer().getEvent() == 109080010 ? 0 : "join00");
				} else {
					cm.sendNext("���δ���ţ���ȷ���Ƿ�������24Сʱ�ڲμӹ�һ��������Ժ����ԣ�");
				}
				cm.dispose();
			}
        } else if (status == 4) {
            if (selection == 0) {
                cm.sendNext("#b[������]#k �Լ�#e#rGoogle#k!");
                cm.dispose();
            } else if (selection == 1) {
                cm.sendNext("#b[�ռ�����] �Լ�#e#rGoogle#k!");
                cm.dispose();
            } else if (selection == 2) {
                cm.sendNext("#b[��ѩ��]#k �Լ�#e#rGoogle#k!");
                cm.dispose();
            } else if (selection == 3) {
                cm.sendNext("#b[�����]#k �Լ�#e#rGoogle#k!");
                cm.dispose();
			} else if (selection == 6) {
                cm.sendNext("#b[��ƿ��]#k �Լ�#e#rGoogle#k!");
                cm.dispose();
            } else if (selection == 4) {
                cm.sendNext("#b[�Ƿ������]#k �Լ�#e#rGoogle#k!");
                cm.dispose();
            } else if (selection == 5) {
                cm.sendNext("#b[Ѱ��]#k �Լ�#e#rGoogle#k!");
                cm.dispose();
            }
        }   
    }
}  