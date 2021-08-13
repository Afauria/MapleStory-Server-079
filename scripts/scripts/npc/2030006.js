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
var qChars = new Array ("����1: ������ð�յ����������NPC��˭��#΢΢��#���˹#ϣ��# �峤������#3",//5
    "����1:�����������ִ忴������NPC��˭?#���Ĺ�#�ذ�#����#�ǻ�#2",//2
    "����1: �����й��＼�ܺͼ���˵����ǡ������ʲô?#����-�ƶ��ٶȼ���#����-�ƶ��ٶ�����#����-���м���#����-�������#1",//4
    "����1: �����в��ǰ�������Ա����˭�� #������ʿ#�������鳤#����˹�ܳ�#������ʿ#4",//3
    "����1: ��������ħ�����ּ�������NPC��˭?#������#¶��#����#������#2",//1
	"����1: �����й���͹���������ս��Ʒ������ȷ������һ��?#����ţ-Ģ����#����-������#��ѩ��-�������#��-����֮��#2");//6
var qItems = new Array( "����2: ����������������ʿ����û�е�NPC��˭?#����#�׵�#���к�#������#2",//6
    "����2: �����������֮�ǿ�������NPC��˭?#���˽ں���Ů#��#��Ե#������#4",//4
    "����2: ����Ϊ�����ȼ�1��2��ʱ������Ҫ�ľ���ֵ�Ƕ���?#10#12#15#20#3",//5
    "����2: �����в���Ϊ�����󼪵ľ�ս����Ҫ�ĵ�����ʲô?#������ë#����֮��#����#����Ь#2",//3
	"����2: �������ڲʺ�忴�����Ĺ�����ʲô?#ƯƯ��#����ţ#����ţ#��Ģ��#1",//2
	"����2: ħ�����ֺ�˹���������ʲô��ɫ��?#��ɫ#��ɫ#��ɫ#��ɫ#2",//���
	"����2: �����̹ٿ����ں�������Ļ�϶��ŵ�NPC��˭?#����#΢΢��#��ʿ#������#3",//���
	"����2: ���ִ幭���ֽ̹ٺ����ȵ��۾���ʲô��ɫ��?#��ɫ#��ɫ#��ɫ#��ɫ#4",//���
	"����2: ɫҩˮ�Ӷ���MP?#Լ50#Լ100#Լ150#Լ200#2",//���
	"����2: �����������ص��������Ĺ�����ʲô?#��Ģ��#ʯͷ��#�ڶ���#����#3");//1
var qMobs = new Array( "����3: ���������ִ������Ϊֻ�����Լ��Ĳ�Ҫ���ҩ��ʲô?#�����ҩ#�ⶾҩ#ֹ��ҩˮ#��ֵ�ҩ#4",//2
    "����3: �����з������п�������NPC��˭?#������˹#³��#ŷ��#����#2",//3
    "����3: �����������ص��ı���ѩ���￴������NPC��˭?#��ķ ����#������#���к�#�ܵ�#1",//5
    "����3: ���ص�û�еĴ������ĸ�?#���֮��#����ѩ��#��ʿ����#ͨ����#3",//���
	"����3: 2ת��ְҵ�У�û�������ĸ�����?#����#��ʦ#ǹսʿ#ħ��ʦ#4",//���
	"����3: ���Ǵ�����������Ĵ�������һ��?#���ִ�#ħ������#��ʿ����#���֮��#4",//���
	"����3: �������ڷ������л������ҳ��ߵİ���˹�ĸ�����˭?#����˹̹#΢΢��#���˹#�峤������#1",//6
    "����3: �����еȼ���ߵĹ�����ʲô?#����ţ#����ţ#��ľ��#Ģ����#3",//1
    "����3: ������Ҫ��ȼ���ߵ�������ʲô?#������˹�غͺڰ�ˮ��#������#��æд��ҵ#ľ���ÿ���#1");//4
var qQuests = new Array("����4: ������ҩˮ��ҩˮЧ�����Ӳ���ȷ����ʲô?#�ⶾҩ������ж�#������ˮ���ָ�MP300#�ƻ�֮¶���ָ�MP5000#�峿֮¶���ָ�3000#4",//1
    "����4: �����и��ϳɻ�ұ������û�й�ϵ����˭?#����#˹��˹#Ħ˹#����#1",//4
    "����4: �����в���λ�ڽ������Ĵ������ĸ�?#���֮��#��߳�#�ʺ��#��ľ��#3",//2
    "����4: �����ĸ�ְҵ���Ƕ�ת�г��ֵ�ְҵ?#����#��ʦ#ǹսʿ#��ʿ#4",//5
	"����4: �ڽ�����������۲��ܿ�����NPC��˭?#�ذ�#����#����#��#2",//���
	"����4: �ܹ����кϳɺ;�����NPC��˭?#Լ��#�ǻ�үү#ޱޱ��#����#4",//���
    "����4: �����й���͹���ս��Ʒ���Ӳ���ȷ����ʲô?#С��ѩ��-С��ѩ��Ƥ#Ұ��-Ұ��֮β#Ұ��-Ұ��֮β#ʳ�˻�-ʳ�˻���Ҷ��#4",//3
	"����4: ������Ϊ2ת�ռ�30��������תְ�̹��յ�����ʲô?#ͨ��֤#Ӣ��֤��#����ʤ֤��#֤��#2");
var qTowns = new Array( "����5: ������ҩˮ��ҩˮЧ�����Ӳ�ǡ������ʲô?#����-HP50#����-HP100#��ɫҩˮ-MP100#����-HP400�ָ�#4",//4
    "����5: �����и�����û�й�ϵ��NPC��˭?#����#������ɳ#����˹#����#3",//1
    "����5: �����п��Է��������������ʲô?#���µĲ���Ь#�ܵµ�ƻ��#˹���µ�ͷ��#�����ҩˮ1#1",//5
    "����5: ��ʿ�����������������ñ���ϵ���ë�м���?#8��#10��#13��#16��#3",//6
    "����5: �������ڽ����������Թ��￴�����Ĺ�����ʲô?#ţħ��#������#����ţ#ʯ��#4",//2
	"����5: �������ܷ��еĹ�����ʲô?#����#Ģ����#���#@����#4");//3
var correctAnswer = 0;

function start() {
    if (cm.haveItem(4031058)) {
        if (cm.haveItem(4031058)) cm.sendOk("#h #����#t4031058#�Ѿ����벻Ҫ�˷��ҵ�ʱ��.");
        cm.dispose();
    } else {
        cm.sendNext("��ӭ #r#h ##k, ���Ǹ���#r��ת�ʴ�#k��#p2030006#.\r\n���Ѿ����˺�Զ��������׶Ρ�");
    }
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (mode == 0) {
            cm.sendOk("�´��ټ���");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 1)
            cm.sendNextPrev("#h #,��������һ��#v4005004#�һ��������Իش�5�����⣬�����Ƕ���ȷ���㽫���#v4031058# #b�ǻ�����#k.");
        else if (status == 2) {
            if (!cm.haveItem(4005004)) {
                cm.sendOk("#h #, ��û��#v4005004#");
                cm.dispose();
            } else {
                cm.gainItem(4005004, -1);
                cm.sendSimple("�������������֪ʶ #r����#k.\r\n\r\n" + getQuestion(qChars[Math.floor(Math.random() * qChars.length)]));
                status = 2;
            }
        } else if (status == 3) {
            if (selection == correctAnswer)
                cm.sendOk("#h # ������ȷ��.\n׼���ý�����һ���������� ?");
            else {
                cm.sendOk("��õ�һ��������Ǵ����!\r\n�����������Լ���֪ʶ��");
                cm.dispose();
            }
        } else if (status == 4)
            cm.sendSimple("������������������һ������.\r\n\r\n" + getQuestion(qItems[Math.floor(Math.random() * qItems.length)]));
        else if (status == 5) {
            if (selection == correctAnswer)
                cm.sendOk("#h # ������ȷ��.\n׼���ý�����һ���������� ?");
            else {
                cm.sendOk("��һ��������!\r\n(��Щ���Ǻ����׵�)\r\n������˼����");
                cm.dispose();
            }
        } else if (status == 6) {
            cm.sendSimple("����������� #b���ڹ���#k.\r\n\r\n" + getQuestion(qMobs[Math.floor(Math.random() * qMobs.length)]));
            status = 6;
        } else if (status == 7) {
            if (selection == correctAnswer)
                cm.sendOk("#h # ������ȷ�ġ������ǽ�����һ���ؿ� ?");
            else {
                cm.sendOk("������û�лش���ȷ��");
                cm.dispose();
            }
        } else if (status == 8)
            cm.sendSimple("���������ǽ�����һ��ѡ��.\r\n\r\n" + getQuestion(qQuests[Math.floor(Math.random() * qQuests.length)]));
        else if (status == 9) {
            if (selection == correctAnswer) {
                cm.sendOk("#h # ������ȷ�ġ������ǽ�����һ���ؿ� ?");
                status = 9;
            } else {
                cm.sendOk("ʧ����");
                cm.dispose();
            }
        } else if (status == 10) {
            cm.sendSimple("���һ������.\r\n���ҿ������ǲ�����Ĺǻ�.\r\n\r\n" + getQuestion(qTowns[Math.floor(Math.random() * qTowns.length)]));
            status = 10;
        } else if (status == 11) {
            if (selection == correctAnswer) {
                cm.gainItem(4031058, 1);
                cm.sendOk("ף�� #h #, �������ת�Ĵ������.\r\n����� #v4031058# ������Ҫ�ĳ��ϰ�.");
                cm.dispose();
            } else {
                cm.sendOk("���ź�");
                cm.dispose();
            }
        }
    }
}
function getQuestion(qSet){
    var q = qSet.split("#");
    var qLine = q[0] + "\r\n\r\n#L0#" + q[1] + "#l\r\n#L1#" + q[2] + "#l\r\n#L2#" + q[3] + "#l\r\n#L3#" + q[4] + "#l";
    correctAnswer = parseInt(q[5],10);
    correctAnswer--;
    return qLine;
}