importPackage(net.sf.cherry.client);
cal = java.util.Calendar.getInstance();
weekday = cal.get(java.util.Calendar.DAY_OF_WEEK);


var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var status = -1;
var ysss = 20;
var jingyan = Math.ceil(Math.random() * 1000000);
var questions = Array(
Array("�����˭��\r\n\r\nA.����     B.����    C.³���ߺ�   D.��ɲ���", "B"),
Array("��̫�ǵ�������˭\r\n\r\nA.������     B.�װٺ�    C��̫��   D.ϲ����", "C"),
Array("���ߴ��¼�ÿ�ڽ���ʱ�������˵ʲô��\r\n\r\nA.��ɽ��˵     B.���������    C.����������   D.��λС����ǰݰ�", "B"),
Array("�������ֹ���ᱬ����ʯĸ��\r\n\r\nA.��β��     B.�Ϲ���    C.������   D.��ʬĢ��", "A"),
Array("��ʬĢ�������ˢ��һ��\r\n\r\nA.24Сʱ     B.4Сʱ    C.��Сʱ   D.10Сʱ", "C"),
Array("������������ָ����Բ鿴��ǰ��ͼ���ﱬ��\r\n\r\nA.@bw     B.@bl    C.@sb   D.@hh", "A"),
Array("��Ͷ��ټ�������ս��ɮ\r\n\r\nA.100��     B.80��    C.130��   D.120��", "C"),
Array("��������ɫ���Ӷ����Ǹ�ƽ̨�᳤����\r\n\r\nA.�������     B.��������    C.��������   D.��������", "D"),
Array("�Գơ�����Ů�����Ľ�����������־ʿ�ǣ�\r\n\r\nA.������     B.��ǧ��    C.���   D.����", "C"),
Array("�峯������������𣬳�ĸ���̫�����˭��\r\n\r\nA.�Ȱ�     B.����    C.������   D.����", "A"),
Array("������ֶӡ������������ݡ��ܶ����С���ͷ��һ�ǵ���˭��\r\n\r\nA.������     B.�ܽ���    C.�ܺ�Ѽ   D.����Ÿ", "D"),
Array("Դ�����ǳ۵ĵ�Ӱ������ͨ��˵�ġ����ơ���ָʲô���\r\n\r\nA.����     B.��    C.è   D.��", "B"),
Array("Դ�����ǳ۵ĵ�Ӱ������ͨ��˵�ġ�Сǿ����ָʲô���\r\n\r\nA.ʺ����     B.���    C.���   D.���", "B"),
Array("���������ǳ�˵������ʲô�����ᡱ��\r\n\r\nA.����     B.�ϻ�    C.�ƺ�   D.�ײ�", "D"),
Array("�׻������ǳ�˵������ʲô���ﲻ��ӥ����\r\n\r\nA.����     B.����    C.��ţ   D.ɽ��", "B"),
Array("��������һ���˺�����˵���������֡�����һ����ʲô��\r\n\r\nA.Ǯ���ſ�     B.ʺ���ſ�    C.�����ſ�   D.�����ſ�", "D"),
Array("��ʾ����Ҫ��Զ�������ǳ��õĳ���ų��ߡ�����һ���ǣ�\r\n\r\nA.������     B.��С��    C.������   D.���з", "A"),
Array("�������ũ�����¼��ţ�\r\n\r\nA.������     B.������    C.����ʮ��   D.���¶�ʮ", "A"),
Array("����˵������ɽ�ڵ���һ����ʲô��\r\n\r\nA.����ûǮ��     B.����û����    C.����û����   D.����û��", "C"),
Array("�������������ڱ�����ҪЮʱ��˵ҪǮû�е���һ���ǣ�\r\n\r\nA.Ҫ��һ��     B.Ҫ��һֻ    C.Ҫ   D.�ײ�", "A"),
Array("�����ﳪ����ʲô�����ϵ�̨��͵�ͳԣ��²�����\r\n\r\nA.��ӥ     B.����    C.�ϻ�   D.��ţ", "B"),
Array("�ɹ������ݳ���2001���й���A������������ʲô��\r\n\r\nA.������     B.������    C.������   D.������", "B"),
Array("�۾硶ŭ���ͷ������ʦ�����ǵİ���������λ��������Ա��\r\n\r\nA.֣��ӱ     B.֣�ɹ�    C.֣��   D.֣ˬ", "A"),
Array("Ӣ������������������˹��Ī��������һ����д������Դ�������������С˵�ǣ�\r\n\r\nA.�������     B.���а�    C.��ѻ   D.�ڹ�", "B"),
Array("�����Ը���£��Լ��Ƽ��Լ�����ĳ���������ͨ��˵��ʲô���Լ���\r\n\r\nA.ëë     B.ë��    C.�ܽ�   D.��Ƥ", "B"),
Array("���ǳ������Լ���ǳ�ļ����������˸��������ʱ˵��ʲô����\r\n\r\nA.ש     B.ʯ    C.��   D.��", "A"),
Array("����ţ�ᱬ������������Ʒ��\r\n\r\nA.��ñ��     B.����ţ��    C.��Ȼ��ѡ��ԭ������   D.�̲��", "B"),
Array("��ѡ����գ�����������ˮ����____һȥ������\r\n\r\nA.����     B.��ʿ    C.׳ʿ   D.ç��", "C"),
Array("һ�������ʲô�ֿ�����ɱ��Ѫ��10��ð�ռң�\r\n\r\nA.����ħ     B.����ţ    C.��Ģ��   D.����", "A"),
Array("�һ���������������ָ�������\r\n\r\nA.����     B.����    C.����   D.�۾�", "C"),
Array("�������ֹ���ᱬ�������ڣ�\r\n\r\nA.����ħ     B.��е֩��    C.�ϵ���   D.�ڷ���", "B"),
Array("������λӢ���ǵ���������Ӫ�ģ�\r\n\r\nA.������˹     B.��Ī    C.����   D.�ɶ�", "C"),
Array("������������Ʒ���ڱ����п�����ǰ�弶���װ����\r\n\r\nA.װ������֤     B.�����볡ȯ    C.װ�����޾�   D.��������", "A"),
Array("��������Ļ�����˭���ģ�\r\n\r\nA.�����ľ     B.��չ��    C.���ٺ�   D.�ܽ���", "D")
 

);
var qid = -1;
var time1;
var time2;
var count = 0;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }

        status--;
    }var MC = cm.getServerName();
    if (status == 0) {
			
        var text = "#e#r\r\n��ȷ #r"+ cm.getChar().getBossLog("mrdtzc")+" #k�� \r\n����#r "+ cm.getChar().getBossLog("mrdtcw")+"#k/ 5 ��\r\n\r\n";
       // text += "#L0#"+������ͷ+" �����#l\r\n\r\n";
        text += "#r#L1#"+������ͷ+" ��ʼ����#l\r\n";
		text += "#r#L0#"+������ͷ+" ���ؽ���#l\r\n";
        cm.sendSimple(text);
    } else if (status == 1) {
        if (selection == 0 && qid == -1) {
            cm.dispose();
            cm.openNpc(9900004,0);	
            status = -1;
        } else {
		if (cm.getBossLog("mrdtcw") > 4) {
             cm.sendOk("����̫������ˣ��ǲ���û�и�ϰ����");
			
             cm.dispose();
             return;	
		
			} cm.setBossLog("mrdtfq");
		
			
		 if ( cm.getBossLog("mrdtfq") >5 ) {
             cm.sendOk("���Ѿ������������Ŀ�ˡ�");
             cm.dispose();
             return;
			   }			
			
          if (cm.getBossLog("mrdt") == 1) {
             cm.sendOk("���Ѿ�����˽��յĴ�����~~");
             cm.dispose();
             return;

	
			  }
            time1 = cm.getCurrentTime();
            count++;
            qid = Math.floor(Math.random() * questions.length);
            cm.sendGetText("#r�� " + count + " ��#k\r\n#b#e" + questions[qid][0] + "#n#k\r\n����" + ysss + "��������");
        }
    } else if (status == 2) {
        // if (cm.getPlayer().getTodayOnlineTime() < 10) {
        //     cm.sendOk("����ʱ��С��10���ӣ��޷��μӸû��");
        //     cm.dispose();
        //     return;
        // }
        if (cm.getBossLog("mrdt") == 1) {
             cm.sendOk("���ÿ�˺�ֻ�޲μ�һ�Σ����Ѿ��μӹ��û�ˡ�");
             cm.dispose();
             return;
         }
		 if (cm.getBossLog("mrdtcw") > 4 ) {
             cm.sendOk("����̫������ˣ��ǲ���û�и�ϰ����");
             cm.dispose();
             return;
         }

        time2 = cm.getCurrentTime();
        var myasked = cm.getText();
        var answer = questions[qid][1];
        if ((time2 - time1) / 1000 > ysss) {
            cm.sendOk("���ź�����������ʱ���ˡ�����������");
            cm.dispose();
            return;
        }
        // if (cm.getPlayer().isGM()) {
        //     count = 10;
        //     myasked = answer;
        // }
        if (myasked == answer) {
            status = 0;
            if (count < 3) {
				cm.setBossLog("mrdtzc");
                cm.sendSimple("��ϲ��ش���ȷ��������һ��ɣ�");
            } else {
               // cm.gainItem(4031227, 1);
				cm.gainItem(2022468, 10);
				cm.gainItem(4251202, 5);
				cm.gainItem(2340000, 10);
				cm.gainItem(4310149, 1);
				cm.gainItem(4000464, 5);
				cm.spawnMonster(9300340,1);
				//cm.gainExp(jingyan);
              //  cm.gainMeso(5000000);
				cm.setBossLog("mrdt");
				cm.setBossRankCount("zlks");
				cm.setBossLog("zymxd");cm.setBossLog("zymxd");cm.setBossLog("zymxd");cm.setBossLog("zymxd");cm.setBossLog("zymxd");cm.setBossLog("zymxd");cm.setBossLog("zymxd");cm.setBossLog("zymxd");cm.setBossLog("zymxd");cm.setBossLog("zymxd");
				cm.setBossLog("mrdtzc");
                cm.dispose();
                cm.worldMessage(6,"��� "+cm.getName()+"  �����ÿ�մ��⣬��ȡ�˷��Ľ�����ÿ�յ����������ˣ�����");
            }
        } else {
            status = -1;
            count = 0;
			cm.setBossLog("mrdtcw");
			// cm.sendSimple("���ź���������~~~"); 
            cm.sendSimple("���ź� �������� ��\r\n\r\n��Ŀ��#b" + questions[qid][0] + "\r\n\r\n#k�𰸣�#r" + questions[qid][1] + "#k"); 
            qid = -1;
        }
    }
}
