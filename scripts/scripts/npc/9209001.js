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

status = -1;
var sel, sel2;

function start() {
    cm.sendSimple("���ţ�ð���г� ���쿪Ļ~.#b\r\n#L0#����ȥð���г�\r\n#L1#���й�ð���г��Ľ���");
}

function action(mode, type, selection) {
    status++;
    if (status == 6 && mode == 1) {
        sel2 = undefined;
        status = 0;
    }
    if (mode != 1) {
        if (mode == 0 && type == 0)
            status -= 2;
        else {
            cm.dispose();
            return;
        }
    }
    if (status == 0) {
        if (sel == undefined)
            sel = selection;
        if (selection == 0) {
            cm.sendNext("���ˣ��ҽ����㵽ð���г���ͼ.");
        } else
            cm.sendSimple("���������˽�ð���г��Ĳ���??#b\r\n#L0#����ʲô�ط�??\r\n#L1#����ð���г���ʲô����??\r\n#L2#��û���κ�����");
    } else if(status == 1) {
        if (sel == 0) {
			cm.saveLocation("EVENT");
            cm.warp(680100000 + parseInt(Math.random() * 3));
            cm.dispose();
        } else if (selection == 0) {
            cm.sendNext("ð���г�ֻ���ڼ��տ��š��������������������Ҳ���������ҵ��ҽ���, �Ҽ�����������!!!");
            status -= 2;
        } else if (selection == 1)
            cm.sendSimple("�������ð���г��ҵ������ط������ҵ��ĺ�����Ʒ.#b\r\n#L0#����������Ʒ\r\n#L1#��������ũ��ҵ��");
        else {
            cm.sendNext("�Ҳ���û���κ����⣬��������������Ҳ�����뷨��ѯ���㷳��ʲô~");
            cm.dispose();
        }
    } else if (status == 2) {
        if (sel2 == undefined)
            sel2 = selection;
        if (sel2 == 0)
            cm.sendNext("������ҵ���������ð���г�,�۸�������б䶯,��������������ı�۸�ǰ������,��Ϊ���Ǳ䶯��ʱ��ܱ��˵�!!");
        else
            cm.sendNext("���������㻹�����ҵ�������������ð���г�����,����������������ĵ�,ֱ����������һֻ�óԵļ�!");
    } else if (status == 3) {
        if (sel2 == 0)
            cm.sendNextPrev("��������еĹ���������ظ��̼ҵ��н飬������������������κγ���һ�����ڵ�ʱ������������ȷ����������");
        else
            cm.sendNextPrev("����������ֻ�����κ��˵ļ����������ʱ�֤��֧�����Ĵ�����ȡ�����չ˺�.");
    } else if (status == 4) {
        if (sel2 == 0)
            cm.sendNextPrev("�������������ĵ�����һ���������⽫�����ǵģ�����ʱ��Ϳ���ʹ�������󡣼۸���������Сʱ�����Լǵ�Ҫ�������.");
        else
            cm.sendNextPrev("����������ɹ��ɳ�Ϊ���û����䣬����ᱨ���㡣������������ģ�����������.");
    } else if (status == 5) {
        if (sel2 == 0)
            cm.sendNextPrev("ͨ������������ð���г��۸���۸��̼ҵ��н�ʱ�����ֵ�����������ҵ��Ļ��ǣ�");
        else
            cm.sendNextPrev("�������ڼ�������鿴����������������������ڷܣ���Ϊ���úͼ���һ��ɳ���EXP������");
    }
}