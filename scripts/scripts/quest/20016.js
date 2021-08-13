/*
 NPC Name: 		Nineheart
 Description: 		Quest - Do you know the black Magician?
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 8) {
            qm.sendNext("Oh, do you still have some questions? Talk to me again and I'll explain it to you from the very beginning.");
            qm.safeDispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNext("��, #h0#. ��ӭ���� #p1101000# ��ʿ��. �ҵ������� #p1101002# ����Ŀǰ��Ϊ���������ս���ҡ�������");
    } else if (status == 1) {
        qm.sendNextPrev("�Ҹҿ϶������кܶ�����⣬��Ϊһ�ж�������̫�졣�һ������һ�У�һ����һ������������������������ʲô��");
    } else if (status == 2) {
        qm.sendNextPrev("���������ΪҮ�׸���");
    } else if (status == 3) {
        qm.sendNextPrev("��λ�����Ů���Ƿ�֮�������ͳ���ߡ�ʲô����������˵�����ĵ�һ�Σ������ǵġ��ţ����Ƿ�֮�������ͳ���ߣ�������ϲ����������������Զ���ۿ�����ȷ��һ�ж��ܺá��ðɣ�����������һ������á�");
    } else if (status == 4) {
        qm.sendNextPrev("���ǣ��ⲻ������������ڡ�����һֱ��Ѱ�ҵı������ڷ�����磬Ԥʾ�ڷ�ʦ�ĸ��ˡ����ǲ����úڷ�ʦ�������ŷ�֮�ȣ���Ϊ���ڹ�ȥ!");
    } else if (status == 5) {
        qm.sendNextPrev("���ǣ����Ǻܾ���ǰ�Ľ��죬���ǲ�ҪΪʵ�ֺڷ�ʦ���ж����˵ġ����Ƕ����˱��軵��ƽ��֮���������ǽ��������к���������λ��ҺͿ��µķ�֮�����������ǡ�������ǲ���Щʲô���ڷ�ʦ���ٴ�ͳ�η�֮�����磡");
    } else if (status == 6) {
        qm.askAcceptDecline("�������ҵĽ��ͣ��������� \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#fUI/UIWindow.img/QuestIcon/8/0# 380 ����ֵ");
    } else if (status == 7) {
        if (qm.getQuestStatus(20016) == 0) {
            qm.gainExp(380);
            qm.forceCompleteQuest();
        }
        qm.sendNext("�Һܸ������������Ŀǰ�����������֪������Ŀǰ��������������û��ǿ��������Ժڷ�ʦ��צ��������˵��ħ��ʿ���ˡ����Լ���ū��'ū�ţ���Ϊһ����ʵ���⡣�㽫��α�����֮����������Ŀǰ�ĵȼ���");
    } else if (status == 10) {
        qm.sendNextPrev("Although you've been accepted into the knighthood, you cannot be recognized as a knight yet. You are not an Official Knight because you're not even a Knight-in-Training. If you remain at your current level, you'll be nothing more than the handyman of #p1101000# Knights.");
    } else if (status == 11) {
        qm.sendNextPrev("But no one starts as a strong Knight on day one. The Empress didn''t want someone strong. She wanted someone with courage whom she could develop into a strong Knight through rigorous training. So, you should first become a Knight-in-Training. We'll talk about your missions when you get to that point.");
    } else if (status == 12) {
        qm.sendPrev("Take the portal on the left to reach the Training Forest. There, you will find #p1102000#, the Training Instructor, who will teach you how to become stronger. I don''t want to find you wandering around aimlessly until you reach Lv. 10, you hear?");
        qm.safeDispose();
    }
}

function end(mode, type, selection) {
}