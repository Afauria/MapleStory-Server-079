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
    }
	    if (cm.getMapId() == 20000 || cm.getMapId() == 10000) {
            cm.sendOk(" �� �� ð �� �� �� �� �� �� ʹ �� �� �� �� ��");
            cm.dispose();
        }


  
    else if (status == 0) {
        var 
         selStr = "#L1314##r���ش���#k#l\r\n";
		if (cm.getBossRank("��������",2)  == 0){
		selStr += "#L1#��������#g���ѿ�����#l#k"; }
		else if (cm.getBossRank("��������",2)  == 1){
		selStr += "#L1#��������#r���ѹرա�#l#k"; }
		else{selStr += "#d#L1001#��ͨ��������#l#k";}
			
		
		if (cm.getBossRank("��ʿ����",2)  == 0){
		selStr += "#L2#��ʿ����#g���ѿ�����#l#k\r\n"; }
		else if (cm.getBossRank("��ʿ����",2)  == 1){
		selStr += "#L2#��ʿ����#r���ѹرա�#l#k\r\n"; }
		else{selStr += "#d#L1002#��ͨ��ʿ����#l#k\r\n";}
		
		
		if (cm.getBossRank("ħ������",2)  == 0){
		selStr += "#L3#ħ������#g���ѿ�����#l#k"; }
		else if (cm.getBossRank("ħ������",2)  == 1){
		selStr += "#L3#ħ������#r���ѹرա�#l#k"; }
		else{selStr += "#d#L1003#��ͨħ������#l#k";}
		
		
		if (cm.getBossRank("����֮��",2)  == 0){
		selStr += "#L4#����֮��#g���ѿ�����#l#k\r\n"; }
		else if (cm.getBossRank("����֮��",2)  == 1){
		selStr += "#L4#����֮��#r���ѹرա�#l#k\r\n"; }
		else{selStr += "#d#L1004#��ͨ����֮��#l#k\r\n";}
		
		
		if (cm.getBossRank("���ִ�",2)  == 0){
		selStr += "#L5#����֮��#g���ѿ�����#l#k"; }
		else if (cm.getBossRank("���ִ�",2)  == 1){
		selStr += "#L5#����֮��#r���ѹرա�#l#k"; }
		else{selStr += "#d#L1005#��ͨ����֮��#l#k";}
		
		
		if (cm.getBossRank("�����",2)  == 0){
		selStr += "#L6#����֮��#g���ѿ�����#l#k\r\n"; }
		else if (cm.getBossRank("�����",2)  == 1){
		selStr += "#L6#����֮��#r���ѹرա�#l#k\r\n"; }
		else{selStr += "#d#L1006#��ͨ����֮��#l#k\r\n";}
		
		
		if (cm.getBossRank("��߳�",2)  == 0){
		selStr += "#L7#���֮��#g���ѿ�����#l#k"; }
		else if (cm.getBossRank("��߳�",2)  == 1){
		selStr += "#L7#���֮��#r���ѹرա�#l#k"; }
		else{selStr += "#d#L1007#��ͨ���֮��#l#k";}
		
		
		if (cm.getBossRank("��������",2)  == 0){
		selStr += "#L8#��������#g���ѿ�����#l#k\r\n"; }
		else if (cm.getBossRank("��������",2)  == 1){
		selStr += "#L8#��������#r���ѹرա�#l#k\r\n"; }
		else{selStr += "#d#L1008#��ͨ��������#l#k\r\n";}
		
		if (cm.getBossRank("��ľ֮��",2)  == 0){
		selStr += "#L9#��ľ֮��#g���ѿ�����#l#k"; }
		else if (cm.getBossRank("��ľ֮��",2)  == 1){
		selStr += "#L9#��ľ֮��#r���ѹرա�#l#k"; }
		else{selStr += "#d#L1009#��ͨ��ľ֮��#l#k";}
		
		if (cm.getBossRank("��³֮��",2)  == 0){
		selStr += "#L10#��³֮��#g���ѿ�����#l#k\r\n"; }
		else if (cm.getBossRank("��³֮��",2)  == 1){
		selStr += "#L10#��³֮��#r���ѹرա�#l#k\r\n"; }
		else{selStr += "#d#L1010#��ͨ��³֮��#l#k\r\n";}
		
		
		if (cm.getBossRank("����֮��",2)  == 0){
		selStr += "#L11#����֮��#g���ѿ�����#l#k"; }
		else if (cm.getBossRank("����֮��",2)  == 1){
		selStr += "#L11#����֮��#r���ѹرա�#l#k"; }
		else{selStr += "#d#L1011#��ͨ����֮��#l#k";}
		
		if (cm.getBossRank("��Ҷ֮��",2)  == 0){
		selStr += "#L12#��Ҷ֮��#g���ѿ�����#l#k\r\n"; }
		else if (cm.getBossRank("��Ҷ֮��",2)  == 1){
		selStr += "#L12#��Ҷ֮��#r���ѹرա�#l#k\r\n"; }
		else{selStr += "#d#L1012#��ͨ��Ҷ֮��#l#k\r\n";}
		
		
		if (cm.getBossRank("�ٲ�֮��",2)  == 0){
		selStr += "#L13#�ٲ�֮��#g���ѿ�����#l#k"; }
		else if (cm.getBossRank("�ٲ�֮��",2)  == 1){
		selStr += "#L13#�ٲ�֮��#r���ѹرա�#l#k"; }
		else{selStr += "#d#L1013#��ͨ�ٲ�֮��#l#k";}
		
		
		if (cm.getBossRank("���򱾲�",2)  == 0){
		selStr += "#L14#���򱾲�#g���ѿ�����#l#k\r\n"; }
		else if (cm.getBossRank("���򱾲�",2)  == 1){
		selStr += "#L14#���򱾲�#r���ѹرա�#l#k\r\n"; }
		else{selStr += "#d#L1014#��ͨ���򱾲�#l#k\r\n";}
		
		
		if (cm.getBossRank("��¡����",2)  == 0){
		selStr += "#L15#��¡����#g���ѿ�����#l#k"; }
		else if (cm.getBossRank("��¡����",2)  == 1){
		selStr += "#L15#��¡����#r���ѹرա�#l#k"; }
		else{selStr += "#d#L1015#��ͨ��¡����#l#k";}
		
		if (cm.getBossRank("���֮��",2)  == 0){
		selStr += "#L16#���֮��#g���ѿ�����#l#k\r\n"; }
		else if (cm.getBossRank("���֮��",2)  == 1){
		selStr += "#L16#���֮��#r���ѹرա�#l#k\r\n"; }
		else{selStr += "#d#L1016#��ͨ���֮��#l#k\r\n";}
		
		if (cm.getBossRank("����ѩ��",2)  == 0){
		selStr += "#L17#����ѩ��#g���ѿ�����#l#k"; }
		else if (cm.getBossRank("����ѩ��",2)  == 1){
		selStr += "#L17#����ѩ��#r���ѹرա�#l#k"; }
		else{selStr += "#d#L1017#��ͨ����ѩ��#l#k";}
		
		if (cm.getBossRank("����ɭ��",2)  == 0){
		selStr += "#L18#����ɭ��#g���ѿ�����#l#k\r\n"; }
		else if (cm.getBossRank("����ɭ��",2)  == 1){
		selStr += "#L18#����ɭ��#r���ѹرա�#l#k\r\n"; }
		else{selStr += "#d#L1018#��ͨ����ɭ��#l#k\r\n";}

		 
		if (cm.getBossRank("���ﰲ��",2)  == 0){
		selStr += "#L19#���ﰲ��#g���ѿ�����#l#k"; }
		else if (cm.getBossRank("���ﰲ��",2)  == 1){
		selStr += "#L19#���ﰲ��#r���ѹرա�#l#k"; }
		else{selStr += "#d#L1019#��ͨ���ﰲ��#l#k";}
		 
		 
	    if (cm.getBossRank("�������",2)  == 0){
		selStr += "#L20#�������#g���ѿ�����#l#k\r\n"; }
		else if (cm.getBossRank("�������",2)  == 1){
		selStr += "#L20#�������#r���ѹرա�#l#k\r\n"; }
		else{selStr += "#d#L1020#��ͨ�������#l#k\r\n";}

 
		if (cm.getBossRank("������԰",2)  == 0){
		selStr += "#L21#������԰#g���ѿ�����#l#k"; }
		else if (cm.getBossRank("������԰",2)  == 1){
		selStr += "#L21#������԰#r���ѹرա�#l#k"; }
		else{selStr += "#d#L1021#��ͨ������԰#l#k";}
		
	
	    if (cm.getBossRank("�ʰ�֮��",2)  == 0){
		selStr += "#L22#�ʰ�֮��#g���ѿ�����#l#k\r\n"; }
		else if (cm.getBossRank("�ʰ�֮��",2)  == 1){
		selStr += "#L22#�ʰ�֮��#r���ѹرա�#l#k\r\n"; }
		else{selStr += "#d#L1022#��ͨ�ʰ�֮��#l#k\r\n";}
	
	
	    if (cm.getBossRank("�Ѻ�֮��",2)  == 0){
		selStr += "#L23#�Ѻ�֮��#g���ѿ�����#l#k"; }
		else if (cm.getBossRank("�Ѻ�֮��",2)  == 1){
		selStr += "#L23#�Ѻ�֮��#r���ѹرա�#l#k"; }
		else{selStr += "#d#L1023#��ͨ�Ѻ�֮��#l#k";}
	
	     
		if (cm.getBossRank("���¼���",2)  == 0){
		selStr += "#L24#���¼���#g���ѿ�����#l#k\r\n"; }
		else if (cm.getBossRank("���¼���",2)  == 1){
		selStr += "#L24#���¼���#r���ѹرա�#l#k\r\n"; }
		else{selStr += "#d#L1024#��ͨ���¼���#l#k\r\n";}
		
		
	    if (cm.getBossRank("��������",2)  == 0){
		selStr += "#L0#��������#g���ѿ�����#l#k"; }
		else if (cm.getBossRank("��������",2)  == 1){
		selStr += "#L0#��������#r���ѹرա�#l#k"; }
		else{selStr += "#d#L1000#��ͨ��������#l#k";}
	

	

		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {	
		
		case 0:
		   if (cm.getBossRank("��������",2)  == 0){
		cm.setBossRankCount("��������","1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		else if (cm.getBossRank("��������",2)  == 1){
		cm.setBossRankCount("��������","-1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		break;
		case 1000:
		cm.setBossRankCount("��������","1");
		cm.dispose();
		cm.openNpc(9900004,5000);
		break;
		
		
		case 1:
		   if (cm.getBossRank("��������",2)  == 0){
		cm.setBossRankCount("��������","1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		else if (cm.getBossRank("��������",2)  == 1){
		cm.setBossRankCount("��������","-1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		break;
		case 1001:
		cm.setBossRankCount("��������","1");
		cm.dispose();
		cm.openNpc(9900004,5000);
		break;
		
		
		case 2:
		   if (cm.getBossRank("��ʿ����",2)  == 0){
		cm.setBossRankCount("��ʿ����","1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		else if (cm.getBossRank("��ʿ����",2)  == 1){
		cm.setBossRankCount("��ʿ����","-1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		break;
		case 1002:
		cm.setBossRankCount("��ʿ����","1");
		cm.dispose();
		cm.openNpc(9900004,5000);
		break;
		
		
		
		case 3:
		   if (cm.getBossRank("ħ������",2)  == 0){
		cm.setBossRankCount("ħ������","1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		else if (cm.getBossRank("ħ������",2)  == 1){
		cm.setBossRankCount("ħ������","-1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		break;
		case 1003:
		cm.setBossRankCount("ħ������","1");
		cm.dispose();
		cm.openNpc(9900004,5000);
		break;
		
		
		case 4:
		   if (cm.getBossRank("����֮��",2)  == 0){
		cm.setBossRankCount("����֮��","1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		else if (cm.getBossRank("����֮��",2)  == 1){
		cm.setBossRankCount("����֮��","-1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		break;
		case 1004:
		cm.setBossRankCount("����֮��","1");
		cm.dispose();
		cm.openNpc(9900004,5000);
		break;
		
		
		case 5:
		   if (cm.getBossRank("���ִ�",2)  == 0){
		cm.setBossRankCount("���ִ�","1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		else if (cm.getBossRank("���ִ�",2)  == 1){
		cm.setBossRankCount("���ִ�","-1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		break;
		case 1005:
		cm.setBossRankCount("���ִ�","1");
		cm.dispose();
		cm.openNpc(9900004,5000);
		break;
		
		
		case 6:
		   if (cm.getBossRank("�����",2)  == 0){
		cm.setBossRankCount("�����","1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		else if (cm.getBossRank("�����",2)  == 1){
		cm.setBossRankCount("�����","-1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		break;
		case 1006:
		cm.setBossRankCount("�����","1");
		cm.dispose();
		cm.openNpc(9900004,5000);
		break;
		
		
		case 7:
		   if (cm.getBossRank("��߳�",2)  == 0){
		cm.setBossRankCount("��߳�","1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		else if (cm.getBossRank("��߳�",2)  == 1){
		cm.setBossRankCount("��߳�","-1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		break;
		case 1007:
		cm.setBossRankCount("��߳�","1");
		cm.dispose();
		cm.openNpc(9900004,5000);
		break;
		
		
		case 8:
		   if (cm.getBossRank("��������",2)  == 0){
		cm.setBossRankCount("��������","1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		else if (cm.getBossRank("��������",2)  == 1){
		cm.setBossRankCount("��������","-1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		break;
		case 1008:
		cm.setBossRankCount("��������","1");
		cm.dispose();
		cm.openNpc(9900004,5000);
		break;
		
		case 9:
		   if (cm.getBossRank("��ľ֮��",2)  == 0){
		cm.setBossRankCount("��ľ֮��","1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		else if (cm.getBossRank("��ľ֮��",2)  == 1){
		cm.setBossRankCount("��ľ֮��","-1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		break;
		case 1009:
		cm.setBossRankCount("��ľ֮��","1");
		cm.dispose();
		cm.openNpc(9900004,5000);
		break;
		
		
		case 10:
		   if (cm.getBossRank("��³֮��",2)  == 0){
		cm.setBossRankCount("��³֮��","1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		else if (cm.getBossRank("��³֮��",2)  == 1){
		cm.setBossRankCount("��³֮��","-1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		break;
		case 1010:
		cm.setBossRankCount("��³֮��","1");
		cm.dispose();
		cm.openNpc(9900004,5000);
		break;
		
		case 11:
		   if (cm.getBossRank("����֮��",2)  == 0){
		cm.setBossRankCount("����֮��","1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		else if (cm.getBossRank("����֮��",2)  == 1){
		cm.setBossRankCount("����֮��","-1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		break;
		case 1011:
		cm.setBossRankCount("����֮��","1");
		cm.dispose();
		cm.openNpc(9900004,5000);
		break;
		
		case 12:
		   if (cm.getBossRank("��Ҷ֮��",2)  == 0){
		cm.setBossRankCount("��Ҷ֮��","1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		else if (cm.getBossRank("��Ҷ֮��",2)  == 1){
		cm.setBossRankCount("��Ҷ֮��","-1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		break;
		case 1012:
		cm.setBossRankCount("��Ҷ֮��","1");
		cm.dispose();
		cm.openNpc(9900004,5000);
		break;
		
		
		case 13:
		   if (cm.getBossRank("�ٲ�֮��",2)  == 0){
		cm.setBossRankCount("�ٲ�֮��","1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		else if (cm.getBossRank("�ٲ�֮��",2)  == 1){
		cm.setBossRankCount("�ٲ�֮��","-1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		break;
		case 1013:
		cm.setBossRankCount("�ٲ�֮��","1");
		cm.dispose();
		cm.openNpc(9900004,5000);
		break;
		
		case 14:
		   if (cm.getBossRank("���򱾲�",2)  == 0){
		cm.setBossRankCount("���򱾲�","1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		else if (cm.getBossRank("���򱾲�",2)  == 1){
		cm.setBossRankCount("���򱾲�","-1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		break;
		case 1014:
		cm.setBossRankCount("���򱾲�","1");
		cm.dispose();
		cm.openNpc(9900004,5000);
		break;
		
		case 15:
		   if (cm.getBossRank("��¡����",2)  == 0){
		cm.setBossRankCount("��¡����","1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		else if (cm.getBossRank("��¡����",2)  == 1){
		cm.setBossRankCount("��¡����","-1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		break;
		case 1015:
		cm.setBossRankCount("��¡����","1");
		cm.dispose();
		cm.openNpc(9900004,5000);
		break;
		
		case 16:
		   if (cm.getBossRank("���֮��",2)  == 0){
		cm.setBossRankCount("���֮��","1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		else if (cm.getBossRank("���֮��",2)  == 1){
		cm.setBossRankCount("���֮��","-1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		break;
		case 1016:
		cm.setBossRankCount("���֮��","1");
		cm.dispose();
		cm.openNpc(9900004,5000);
		break;
		
		case 17:
		   if (cm.getBossRank("����ѩ��",2)  == 0){
		cm.setBossRankCount("����ѩ��","1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		else if (cm.getBossRank("����ѩ��",2)  == 1){
		cm.setBossRankCount("����ѩ��","-1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		break;
		case 1017:
		cm.setBossRankCount("����ѩ��","1");
		cm.dispose();
		cm.openNpc(9900004,5000);
		break;
		
		case 18:
		   if (cm.getBossRank("����ɭ��",2)  == 0){
		cm.setBossRankCount("����ɭ��","1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		else if (cm.getBossRank("����ɭ��",2)  == 1){
		cm.setBossRankCount("����ɭ��","-1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		break;
		case 1018:
		cm.setBossRankCount("����ɭ��","1");
		cm.dispose();
		cm.openNpc(9900004,5000);
		break;
		
		case 19:
		   if (cm.getBossRank("���ﰲ��",2)  == 0){
		cm.setBossRankCount("���ﰲ��","1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		else if (cm.getBossRank("���ﰲ��",2)  == 1){
		cm.setBossRankCount("���ﰲ��","-1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		break;
		case 1019:
		cm.setBossRankCount("���ﰲ��","1");
		cm.dispose();
		cm.openNpc(9900004,5000);
		break;
		
		case 20:
		   if (cm.getBossRank("�������",2)  == 0){
		cm.setBossRankCount("�������","1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		else if (cm.getBossRank("�������",2)  == 1){
		cm.setBossRankCount("�������","-1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		break;
		case 1020:
		cm.setBossRankCount("�������","1");
		cm.dispose();
		cm.openNpc(9900004,5000);
		break;
		
		case 21:
		   if (cm.getBossRank("������԰",2)  == 0){
		cm.setBossRankCount("������԰","1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		else if (cm.getBossRank("������԰",2)  == 1){
		cm.setBossRankCount("������԰","-1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		break;
		case 1021:
		cm.setBossRankCount("������԰","1");
		cm.dispose();
		cm.openNpc(9900004,5000);
		break;
			
			
		case 22:
		   if (cm.getBossRank("�ʰ�֮��",2)  == 0){
		cm.setBossRankCount("�ʰ�֮��","1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		else if (cm.getBossRank("�ʰ�֮��",2)  == 1){
		cm.setBossRankCount("�ʰ�֮��","-1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		break;
		case 1022:
		cm.setBossRankCount("�ʰ�֮��","1");
		cm.dispose();
		cm.openNpc(9900004,5000);
		break;	
			
	
		case 23:
		   if (cm.getBossRank("�Ѻ�֮��",2)  == 0){
		cm.setBossRankCount("�Ѻ�֮��","1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		else if (cm.getBossRank("�Ѻ�֮��",2)  == 1){
		cm.setBossRankCount("�Ѻ�֮��","-1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		break;
		case 1023:
		cm.setBossRankCount("�Ѻ�֮��","1");
		cm.dispose();
		cm.openNpc(9900004,5000);
		break;	


        case 24:
		   if (cm.getBossRank("���¼���",2)  == 0){
		cm.setBossRankCount("���¼���","1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		else if (cm.getBossRank("���¼���",2)  == 1){
		cm.setBossRankCount("���¼���","-1");
	    cm.dispose();
		cm.openNpc(9900004,5000);}
		break;
		case 1024:
		cm.setBossRankCount("���¼���","1");
		cm.dispose();
		cm.openNpc(9900004,5000);
		break;			
			
		case 1314:
         cm.dispose();
            cm.openNpc(9900004,9900005);	
             break;	 
			 

			 
			 
			 
			 
			 
		}
    }
}