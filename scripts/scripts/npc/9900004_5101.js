var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE);//��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var Z = "#fUI/GuildMark.img/Mark/Letter/00005025/1#";
var Y = "#fUI/GuildMark.img/Mark/Letter/00005024/3#";
var X = "#fUI/GuildMark.img/Mark/Letter/00005023/1#";
var D = "#fUI/GuildMark.img/Mark/Letter/00005003/1#";
var M = "#fUI/GuildMark.img/Mark/Letter/00005012/1#";
var A = "#fUI/GuildMark.img/Mark/Letter/00005000/1#";
var P = "#fUI/GuildMark.img/Mark/Letter/00005015/1#";
var Z = "#fUI/GuildMark.img/Mark/Letter/00005025/9#";
var �� = "#fUI/GuildMark.img/Mark/Letter/00005035/15#";
var �� = "#fUI/GuildMark.img/Mark/Letter/00005033/15#";
var �� = "#fUI/GuildMark.img/Mark/Letter/00005026/15#";
var �����г� = "#fEffect/SkillName1.img/1001003/�����г�#";
var Զ�̴��� = "#fEffect/SkillName1.img/1001003/Զ�̴���#";
var ��Ծ�ɾ� = "#fEffect/SkillName1.img/1001003/��Ծ�ɾ�#";
var ������ = "#fEffect/SkillName1.img/1001003/������#";
var ����̵� = "#fEffect/SkillName1.img/1001003/����̵�#";
var ����תְ = "#fEffect/SkillName1.img/1001003/����תְ#";
var ���ֵ㲥 = "#fEffect/SkillName1.img/1001003/���ֵ㲥#";
var ����ֿ� = "#fEffect/SkillName1.img/1001003/����ֿ�#";
var ����ְҵ = "#fEffect/SkillName1.img/1001003/����ְҵ#";
var ǩ�� = "#fEffect/SkillName1.img/1001003/ǩ��#";



function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	    if (cm.getMapId() == 20000 || cm.getMapId() == 10000) {
            cm.sendOk(" �� �� ð �� �� �� �� �� �� ʹ �� �� �� �� ��");
            cm.dispose();
        }

	if (cm.getPlayer().getLevel() < 10) {
        cm.sendOk("��ĵȼ�δ�ﵽ10�������δ�ܽ���������");
        cm.dispose();
		 }
  
    else if (status == 0) {
        var     selStr = " #e#r����#k�ٻ�����#n \r\n";
	   selStr += " #L1##o100101# x 10#l  #L2##o130101# x 10#l   \r\n";


		
		  

		
	

		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
		case 1:
		 if (cm.haveItem(4032225,20)&& cm.haveItem(4000000,50)) {	
             cm.gainItem(4032225,-20);
			 cm.gainItem(4000000,-50);
             cm.spawnMonster(100101,10);
             cm.setBossRankCount("�ٻ�������","10");    
			 cm.sendOk("�ٻ��ɹ�,������ + 10");
             cm.dispose();
						
               }else{
            cm.sendOk("���ϲ������޷��ٻ�.\r\n��Ҫ��#i4032225# x 20,#i4000000# x 50");
			cm.dispose();	
			 break;}
             
		case 2:
		 if (cm.haveItem(4032225,20)&& cm.haveItem(4000016,50)) {	
             cm.gainItem(4032225,-20);
			 cm.gainItem(4000016,-50);
             cm.spawnMonster(130101,10);
             cm.setBossRankCount("�ٻ�������","10");    
			 cm.sendOk("�ٻ��ɹ�,������ + 10");
             cm.dispose();
						
               }else{
            cm.sendOk("���ϲ������޷��ٻ�.\r\n��Ҫ��#i4032225# x 20,#i4000016# x 50");
			cm.dispose();	
			 break;}
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
		}
    }
}