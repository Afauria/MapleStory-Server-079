var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE);//��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var �� = "#fEffect/SkillName1.img/1001003/��#";
var �� = "#fEffect/SkillName1.img/1001003/��#";







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
    }var MC = cm.getServerName();
	    if (cm.getMapId() == 20000 || cm.getMapId() == 10000) {
            cm.sendOk(" �� �� ð �� �� �� �� �� �� ʹ �� �� �� �� ��");
            cm.dispose();
        }


  
    else if (status == 0) {
        var 
		selStr = "#e#r"+MC+"#k#n�������������\r\n";
        selStr += "#L1314##r���ؽ���#k#l\r\n";

		
		if (cm.getBossRank("����ֿ�",2)  == 0){
		selStr += "#L2#����ֿ�#g���ѿ�����#l#k\r\n"; }
		else if (cm.getBossRank("����ֿ�",2)  == 1){
		selStr += "#L2#����ֿ�#r���ѹرա�#l#k\r\n"; }
		else{selStr += "#d#L1002#��ͨ����ֿ�#l#k\r\n";}
		
		
		if (cm.getBossRank("���ֵ㲥",2)  == 0){
		selStr += "#L3#���ֵ㲥#g���ѿ�����#l#k"; }
		else if (cm.getBossRank("���ֵ㲥",2)  == 1){
		selStr += "#L3#���ֵ㲥#r���ѹرա�#l#k"; }
		else{selStr += "#d#L1003#��ͨ���ֵ㲥#l#k";}
		
		
		if (cm.getBossRank("����̵�",2)  == 0){
		selStr += "#L4#����̵�#g���ѿ�����#l#k\r\n"; }
		else if (cm.getBossRank("����̵�",2)  == 1){
		selStr += "#L4#����̵�#r���ѹرա�#l#k\r\n"; }
		else{selStr += "#d#L1004#��ͨ����̵�#l#k\r\n";}
		
		
		if (cm.getBossRank("����ר��",2)  == 0){
		selStr += "#L5#����ר��#g���ѿ�����#l#k"; }
		else if (cm.getBossRank("����ר��",2)  == 1){
		selStr += "#L5#����ר��#r���ѹرա�#l#k"; }
		else{selStr += "#d#L1005#��ͨ����ר��#l#k";}
		
		
		if (cm.getBossRank("������",2)  == 0){
		selStr += "#L6#������#g���ѿ�����#l#k\r\n"; }
		else if (cm.getBossRank("������",2)  == 1){
		selStr += "#L6#������#r���ѹرա�#l#k\r\n"; }
		else{selStr += "#d#L1006#��ͨ������#l#k\r\n";}
		
		
		if (cm.getBossRank("���켼��",2)  == 0){
		selStr += "#L7#���켼��#g���ѿ�����#l#k"; }
		else if (cm.getBossRank("���켼��",2)  == 1){
		selStr += "#L7#���켼��#r���ѹرա�#l#k"; }
		else{selStr += "#d#L1007#��ͨ���켼��#l#k";}
		
		
		if (cm.getBossRank("�����ֲ�",2)  == 0){
		selStr += "#L8#�����ֲ�#g���ѿ�����#l#k\r\n"; }
		else if (cm.getBossRank("�����ֲ�",2)  == 1){
		selStr += "#L8#�����ֲ�#r���ѹرա�#l#k\r\n"; }
		else{selStr += "#d#L1008#��ͨ�����ֲ�#l#k\r\n";}
		
		if (cm.getBossRank("����̵�",2)  == 0){
		selStr += "#L9#����̵�#g���ѿ�����#l#k"; }
		else if (cm.getBossRank("����̵�",2)  == 1){
		selStr += "#L9#����̵�#r���ѹرա�#l#k"; }
		else{selStr += "#d#L1009#��ͨ����̵�#l#k";}
		
		if (cm.getBossRank("�ֽ��̵�",2)  == 0){
		selStr += "#L10#�ֽ��̵�#g���ѿ�����#l#k\r\n"; }
		else if (cm.getBossRank("�ֽ��̵�",2)  == 1){
		selStr += "#L10#�ֽ��̵�#r���ѹرա�#l#k\r\n"; }
		else{selStr += "#d#L1010#��ͨ�ֽ��̵�#l#k\r\n";}
		
		
		if (cm.getBossRank("��������",2)  == 0){
		selStr += "#L11#��������#g���ѿ�����#l#k"; }
		else if (cm.getBossRank("��������",2)  == 1){
		selStr += "#L11#��������#r���ѹرա�#l#k"; }
		else{selStr += "#d#L1011#��ͨ��������#l#k";}
		
		if (cm.getBossRank("��ɫװ��",2)  == 0){
		selStr += "#L12#��ɫװ��#g���ѿ�����#l#k\r\n"; }
		else if (cm.getBossRank("��ɫװ��",2)  == 1){
		selStr += "#L12#��ɫװ��#r���ѹرա�#l#k\r\n"; }
		else{selStr += "#d#L1012#��ͨ��ɫװ��#l#k\r\n";}
		
		
		if (cm.getBossRank("����תְ",2)  == 0){
		selStr += "#L13#����תְ#g���ѿ�����#l#k"; }
		else if (cm.getBossRank("����תְ",2)  == 1){
		selStr += "#L13#����תְ#r���ѹرա�#l#k"; }
		else{selStr += "#d#L1013#��ͨ����תְ#l#k";}
		
		
		if (cm.getBossRank("�ר��",2)  == 0){
		selStr += "#L14#�ר��#g���ѿ�����#l#k\r\n"; }
		else if (cm.getBossRank("�ר��",2)  == 1){
		selStr += "#L14#�ר��#r���ѹرա�#l#k\r\n"; }
		else{selStr += "#d#L1014#��ͨ�ר��#l#k\r\n";}
		
		if (cm.getBossRank("������Ϣ",2)  == 0){
		selStr += "#L16#������Ϣ#g���ѿ�����#l#k"; }
		else if (cm.getBossRank("������Ϣ",2)  == 1){
		selStr += "#L16#������Ϣ#r���ѹرա�#l#k"; }
		else{selStr += "#d#L1016#��ͨ������Ϣ#l#k";}
		
		if (cm.getBossRank("�츳",2)  == 0){
		selStr += "#L15#�츳#g���ѿ�����#l#k"; }
		else if (cm.getBossRank("�츳",2)  == 1){
		selStr += "#L15#�츳#r���ѹرա�#l#k"; }
		else{selStr += "#d#L1015#��ͨ�츳#l#k";}
		

		

	

		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {	
		
		case 0:
		   if (cm.getBossRank("��������",2)  == 0){
		cm.setBossRankCount("��������","1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		else if (cm.getBossRank("��������",2)  == 1){
		cm.setBossRankCount("��������","-1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		break;
		case 1000:
		cm.setBossRankCount("��������","1");
		cm.dispose();
		cm.openNpc(9900004,5001);
		break;
		
		
		case 1:
		   if (cm.getBossRank("��Ҷ����",2)  == 0){
		cm.setBossRankCount("��Ҷ����","1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		else if (cm.getBossRank("��Ҷ����",2)  == 1){
		cm.setBossRankCount("��Ҷ����","-1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		break;
		case 1001:
		cm.setBossRankCount("��Ҷ����","1");
		cm.dispose();
		cm.openNpc(9900004,5001);
		break;
		
		
		case 2:
		   if (cm.getBossRank("����ֿ�",2)  == 0){
		cm.setBossRankCount("����ֿ�","1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		else if (cm.getBossRank("����ֿ�",2)  == 1){
		cm.setBossRankCount("����ֿ�","-1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		break;
		case 1002:
		cm.setBossRankCount("����ֿ�","1");
		cm.dispose();
		cm.openNpc(9900004,5001);
		break;
		
		
		
		case 3:
		   if (cm.getBossRank("���ֵ㲥",2)  == 0){
		cm.setBossRankCount("���ֵ㲥","1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		else if (cm.getBossRank("���ֵ㲥",2)  == 1){
		cm.setBossRankCount("���ֵ㲥","-1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		break;
		case 1003:
		cm.setBossRankCount("���ֵ㲥","1");
		cm.dispose();
		cm.openNpc(9900004,5001);
		break;
		
		
		case 4:
		   if (cm.getBossRank("����̵�",2)  == 0){
		cm.setBossRankCount("����̵�","1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		else if (cm.getBossRank("����̵�",2)  == 1){
		cm.setBossRankCount("����̵�","-1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		break;
		case 1004:
		cm.setBossRankCount("����̵�","1");
		cm.dispose();
		cm.openNpc(9900004,5001);
		break;
		
		
		case 5:
		   if (cm.getBossRank("����ר��",2)  == 0){
		cm.setBossRankCount("����ר��","1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		else if (cm.getBossRank("����ר��",2)  == 1){
		cm.setBossRankCount("����ר��","-1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		break;
		case 1005:
		cm.setBossRankCount("����ר��","1");
		cm.dispose();
		cm.openNpc(9900004,5001);
		break;
		
		
		case 6:
		   if (cm.getBossRank("������",2)  == 0){
		cm.setBossRankCount("������","1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		else if (cm.getBossRank("������",2)  == 1){
		cm.setBossRankCount("������","-1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		break;
		case 1006:
		cm.setBossRankCount("������","1");
		cm.dispose();
		cm.openNpc(9900004,5001);
		break;
		
		
		case 7:
		   if (cm.getBossRank("���켼��",2)  == 0){
		cm.setBossRankCount("���켼��","1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		else if (cm.getBossRank("���켼��",2)  == 1){
		cm.setBossRankCount("���켼��","-1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		break;
		case 1007:
		cm.setBossRankCount("���켼��","1");
		cm.dispose();
		cm.openNpc(9900004,5001);
		break;
		
		
		case 8:
		   if (cm.getBossRank("�����ֲ�",2)  == 0){
		cm.setBossRankCount("�����ֲ�","1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		else if (cm.getBossRank("�����ֲ�",2)  == 1){
		cm.setBossRankCount("�����ֲ�","-1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		break;
		case 1008:
		cm.setBossRankCount("�����ֲ�","1");
		cm.dispose();
		cm.openNpc(9900004,5001);
		break;
		
		case 9:
		   if (cm.getBossRank("����̵�",2)  == 0){
		cm.setBossRankCount("����̵�","1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		else if (cm.getBossRank("����̵�",2)  == 1){
		cm.setBossRankCount("����̵�","-1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		break;
		case 1009:
		cm.setBossRankCount("����̵�","1");
		cm.dispose();
		cm.openNpc(9900004,5001);
		break;
		
		
		case 10:
		   if (cm.getBossRank("�ֽ��̵�",2)  == 0){
		cm.setBossRankCount("�ֽ��̵�","1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		else if (cm.getBossRank("�ֽ��̵�",2)  == 1){
		cm.setBossRankCount("�ֽ��̵�","-1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		break;
		case 1010:
		cm.setBossRankCount("�ֽ��̵�","1");
		cm.dispose();
		cm.openNpc(9900004,5001);
		break;
		
		case 11:
		   if (cm.getBossRank("��������",2)  == 0){
		cm.setBossRankCount("��������","1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		else if (cm.getBossRank("��������",2)  == 1){
		cm.setBossRankCount("��������","-1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		break;
		case 1011:
		cm.setBossRankCount("��������","1");
		cm.dispose();
		cm.openNpc(9900004,5001);
		break;
		
		case 12:
		   if (cm.getBossRank("��ɫװ��",2)  == 0){
		cm.setBossRankCount("��ɫװ��","1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		else if (cm.getBossRank("��ɫװ��",2)  == 1){
		cm.setBossRankCount("��ɫװ��","-1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		break;
		case 1012:
		cm.setBossRankCount("��ɫװ��","1");
		cm.dispose();
		cm.openNpc(9900004,5001);
		break;
		
		
		case 13:
		   if (cm.getBossRank("����תְ",2)  == 0){
		cm.setBossRankCount("����תְ","1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		else if (cm.getBossRank("����תְ",2)  == 1){
		cm.setBossRankCount("����תְ","-1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		break;
		case 1013:
		cm.setBossRankCount("����תְ","1");
		cm.dispose();
		cm.openNpc(9900004,5001);
		break;
		
		case 14:
		   if (cm.getBossRank("�ר��",2)  == 0){
		cm.setBossRankCount("�ר��","1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		else if (cm.getBossRank("�ר��",2)  == 1){
		cm.setBossRankCount("�ר��","-1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		break;
		case 1014:
		cm.setBossRankCount("�ר��","1");
		cm.dispose();
		cm.openNpc(9900004,5001);
		break;
		
		case 15:
		   if (cm.getBossRank("�츳",2)  == 0){
		cm.setBossRankCount("�츳","1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		else if (cm.getBossRank("�츳",2)  == 1){
		cm.setBossRankCount("�츳","-1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		break;
		case 1015:
		cm.setBossRankCount("�츳","1");
		cm.dispose();
		cm.openNpc(9900004,5001);
		break;
		
		case 16:
		   if (cm.getBossRank("������Ϣ",2)  == 0){
		cm.setBossRankCount("������Ϣ","1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		else if (cm.getBossRank("������Ϣ",2)  == 1){
		cm.setBossRankCount("������Ϣ","-1");
	    cm.dispose();
		cm.openNpc(9900004,5001);}
		break;
		case 1016:
		cm.setBossRankCount("������Ϣ","1");
		cm.dispose();
		cm.openNpc(9900004,5001);
		break;
		
		
			
		case 1314:
         cm.dispose();
            cm.openNpc(9900004,0);	
             break;	 
			 

			 
			 
			 
			 
			 
		}
    }
}