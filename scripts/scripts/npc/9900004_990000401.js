//////////////////////////////
//�߱�*����ð�յ�*��ߴ���////
//1346464664/992916233//////
///////////////////////////

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
var ���켼�� = "#fEffect/SkillName1.img/1001002/���켼��#";
var ��Ҷ���� = "#fEffect/SkillName1.img/1001002/��Ҷ����#";
var ������Ϣ = "#fEffect/SkillName1.img/1001002/������Ϣ#";
var ����ר�� = "#fEffect/SkillName1.img/1001002/����ר��#";
var �ר�� = "#fEffect/SkillName1.img/1001002/�ר��#";
var ��ɫװ�� = "#fEffect/SkillName1.img/1001002/��ɫװ��#";
var ����ǩ�� = "#fEffect/SkillName1.img/1001002/����ǩ��#";
var ����̵� = "#fEffect/SkillName1.img/1001002/����̵�#";
var ����תְ = "#fEffect/SkillName1.img/1001002/����תְ#";
var ����̵� = "#fEffect/SkillName1.img/1001002/����̵�#";
var ������ = "#fEffect/SkillName1.img/1001002/������#";
var �����ֲ� = "#fEffect/SkillName1.img/1001002/�����ֲ�#";
var ����ר�� = "#fEffect/SkillName1.img/1001002/����ר��#";
var ����ֿ� = "#fEffect/SkillName1.img/1001002/����ֿ�#";
var �츳 = "#fEffect/SkillName1.img/1001002/�츳#";
var �ֽ��̵� = "#fEffect/SkillName1.img/1001002/�ֽ��̵�#";
var ���ֵ㲥 = "#fEffect/SkillName1.img/1001002/���ֵ㲥#";
var �������� = "#fEffect/SkillName1.img/1001002/��������#";
var ���ɴ��� = "#fEffect/SkillName1.img/1001002/���ɴ���#";
var ���� = "#fEffect/SkillName1.img/1001002/����#";
var ��ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
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
	
	var MC = cm.getServerName();
    
	    if ( cm.getMapId() == 10000) {
            cm.sendOk(" �� �� ð �� �� �� �� �� �� ʹ �� �� �� �� ��");
            cm.dispose();
        }


  
    else if (status == 0) {

    var  
	    selStr = "#r"+MC+"#b ���������������ã�[#r#eȫ������#k#n]#k\r\n";
		
		selStr += "���ȵ㣻[#r "+ cm.getBossRank("���ȵ�",2)+" #k]\r\n";
	    if(cm.getBossRank("������ʾ��1",2) == 2 ){
		selStr += "������ʾ�#b�����һ�����죬"+ cm.getChar().getName() +"�����ǳ���#k\r\n";} 
		if(cm.getBossRank("������ʾ��2",2) == 2 ){
		selStr += "������ʾ�#b���ң�"+ cm.getChar().getName() +"����"+year+" ��"+month+"��"+day+"��"+ hour+"ʱ����"+MC+"��#k\r\n";} 
		else {
		selStr += "������ʾ�#r��δ����#k#n\r\n";}
		
		
		
		if(cm.getBossRank("��������",2) == 2 ){
		selStr += "��ʾ�����ͣ�#b[��������ɫ����/1000]#k\r\n";} 
		
   else if(cm.getBossRank("��������",2) == 2 ){
		selStr += "��ʾ�����ͣ�#b[���϶˻�ɫ����/5000]#k\r\n";} 
		
   else if(cm.getBossRank("��������",2) == 2 ){
		selStr += "��ʾ�����ͣ�#b[��Ļ�е�������/5500]#k\r\n";} 
		
		
		else {
		selStr += "��ʾ�����ͣ�#r��δ����#k\r\n";}
		
		
		
		
		
	
		selStr += "#L0##b"+��ͷ+"���ؽ���#k#l\r\n";
		
		selStr += "#L4##b"+��ͷ+"��ֵ���ȵ�#k#l\r\n";
		
	     
	     if(cm.getBossRank("��������",2) == 1 ){
		selStr += "#L2##b"+��ͷ+"#rδ���� - δ������������#k#l\r\n\r\n";
		selStr += "#e#r\r\n      ����δ������������#k#n";} 
	else if(cm.getBossRank("��������",2) == 2 ){
	    selStr += "#L3##b"+��ͷ+"#g�ѿ��� - �ѿ�����������#k#l\r\n\r\n\r\n";}
		else {
		selStr += "#L1##n"+��ͷ+"δ��ͨ#k#l\r\n\r\n";
		selStr += "#e#r����δ��ͨ��������#k#n";}
		
		
		if(cm.getBossRank("��������",2) == 1 ){
		selStr += "\r\n\r\n";} 
	else if(cm.getBossRank("��������",2) == 2 ){
	    selStr += "\r\n\r\n---------------#r��������ʾ����������#k---------------\r\n\r\n";}
		
	     if(cm.getBossRank("��������",2) == 1 && cm.getBossRank("��������",2) == 2){
		selStr += "#L5##b"+��ͷ+"#r�ر���#k[��������ɫ����/1000]#k#l\r\n";} 
	else if(cm.getBossRank("��������",2) == 2 && cm.getBossRank("��������",2) == 2){
	    selStr += "#L6##b"+��ͷ+"#g������#k[��������ɫ����/1000]#k#l\r\n";}

		
		 if(cm.getBossRank("��������",2) == 1 && cm.getBossRank("��������",2) == 2){
		selStr += "#L7##b"+��ͷ+"#r�ر���#k[���϶˻�ɫ����/5000]#k#l\r\n";} 
	else if(cm.getBossRank("��������",2) == 2 && cm.getBossRank("��������",2) == 2){
	    selStr += "#L8##b"+��ͷ+"#g������#k[���϶˻�ɫ����/5000]#k#l\r\n";}
		
		 if(cm.getBossRank("��������",2) == 1 && cm.getBossRank("��������",2) == 2){
		selStr += "#L9##b"+��ͷ+"#r�ر���#k[��Ļ�е�������/5500]#k#l\r\n";} 
	else if(cm.getBossRank("��������",2) == 2 && cm.getBossRank("��������",2) == 2){
	    selStr += "#L10##b"+��ͷ+"#g������#k[��Ļ�е�������/5500]#k#l\r\n";}

		
		
		
		
			
	    if(cm.getBossRank("��������",2) == 1 ){
		selStr += "\r\n\r\n";} 
	else if(cm.getBossRank("��������",2) == 2 ){
	    selStr += "\r\n\r\n---------------#r��������ʾ���������#k---------------\r\n\r\n";}

		
		
		
		
		
		 if(cm.getBossRank("������ʾ��1",2) == 1 ){
		selStr += "\r\n#L30##b"+��ͷ+"#r[δ����]#k#b�����һ�����죬"+ cm.getChar().getName() +"�����ǳ���#k#l\r\n";} 
	else if(cm.getBossRank("������ʾ��1",2) == 2 ){
	    selStr += "\r\n#L31##b"+��ͷ+"#g[����]#k#b�����һ�����죬"+ cm.getChar().getName() +"�����ǳ���#k#l\r\n";}
		
		 if(cm.getBossRank("������ʾ��2",2) == 1 ){
		selStr += "\r\n#L32##b"+��ͷ+"#r[δ����]#k#b���ң�"+ cm.getChar().getName() +"����"+year+" ��"+month+"��"+day+"��"+ hour+"ʱ����"+MC+"��#k#l\r\n";} 
	else if(cm.getBossRank("������ʾ��2",2) == 2 ){
	    selStr += "\r\n#L33##b"+��ͷ+"#g[����]#k#b���ң�"+ cm.getChar().getName() +"����"+year+" ��"+month+"��"+day+"��"+ hour+"ʱ����"+MC+"��#k#l\r\n";}
		
		





         
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9900004,3);	
            break;
		case 1://��ͨ���� ֵ+1 ��ʾ�ر�
            cm.setBossRankCount("��������");				
			cm.setBossRankCount("��������");				
			cm.setBossRankCount("��������");	
            cm.setBossRankCount("��������");	
            cm.setBossRankCount("������ʾ��1",2);	
            cm.setBossRankCount("������ʾ��2");				
			cm.dispose();
			cm.openNpc(9900004,990000401);	
            break;
		case 2://�����������ѣ���ʾ��������
            cm.setBossRankCount("��������","-"+cm.getBossRank("��������",2)+"");
			cm.setBossRankCount("��������","-"+cm.getBossRank("��������",2)+"");
			cm.setBossRankCount("��������","-"+cm.getBossRank("��������",2)+"");
			cm.setBossRankCount("��������","-"+cm.getBossRank("��������",2)+"");
			cm.setBossRankCount("������ʾ��1","-"+cm.getBossRank("������ʾ��1",2)+"");
			cm.setBossRankCount("������ʾ��2","-"+cm.getBossRank("������ʾ��2",2)+"");
			cm.setBossRankCount("��������");
			cm.setBossRankCount("��������");
			cm.setBossRankCount("��������");
			cm.setBossRankCount("������ʾ��1",2);	
			cm.setBossRankCount("������ʾ��2");
			cm.setBossRankCount("��������",2);
			cm.dispose();
			cm.openNpc(9900004,990000401);	
            break;
		case 3://�ر��������ѣ����ֵΪ1���ر���ʾ��������//ȡ�ظ�������ֵΪ0����ֹ�ٴο�����BUG
            cm.setBossRankCount("��������","-"+cm.getBossRank("��������",2)+"");
			cm.setBossRankCount("��������","-"+cm.getBossRank("��������",2)+"");
			cm.setBossRankCount("��������","-"+cm.getBossRank("��������",2)+"");
			cm.setBossRankCount("��������","-"+cm.getBossRank("��������",2)+"");
			cm.setBossRankCount("������ʾ��1","-"+cm.getBossRank("������ʾ��1",2)+"");
			cm.setBossRankCount("������ʾ��2","-"+cm.getBossRank("������ʾ��2",2)+"");
			cm.setBossRankCount("��������");
			cm.dispose();
			cm.openNpc(9900004,990000401);	
            break;	
		case 4://��ֵ
            cm.dispose();
            cm.openNpc(9900007,3);	
            break;		
		case 5://��ʾΪ�رգ��迪���������ȣ��ȼ�ȥ��������ֵ������+2���ر�+1
		    cm.setBossRankCount("��������","-"+cm.getBossRank("��������",2)+"");
			cm.setBossRankCount("��������","-"+cm.getBossRank("��������",2)+"");
			cm.setBossRankCount("��������","-"+cm.getBossRank("��������",2)+"");
            cm.setBossRankCount("��������",2);	
			cm.setBossRankCount("��������");	
			cm.setBossRankCount("��������");
			cm.dispose();
			cm.openNpc(9900004,990000401);	
            break;	
		case 6://��ʾΪ�������ٵ����ɹرգ���ȥ������ֵ�����ӵ���ֵ+1��ʾΪ��
		    cm.setBossRankCount("��������","-"+cm.getBossRank("��������",2)+"");
            cm.setBossRankCount("��������");	
			cm.dispose();
			cm.openNpc(9900004,990000401);	
            break;	
		case 7://��ʾΪ�رգ��迪���������ȣ��ȼ�ȥ��������ֵ������+2���ر�+1
		    cm.setBossRankCount("��������","-"+cm.getBossRank("��������",2)+"");
			cm.setBossRankCount("��������","-"+cm.getBossRank("��������",2)+"");
			cm.setBossRankCount("��������","-"+cm.getBossRank("��������",2)+"");
            cm.setBossRankCount("��������");
            cm.setBossRankCount("��������");			
			cm.setBossRankCount("��������",2);	
			cm.dispose();
			cm.openNpc(9900004,990000401);	
            break;	
        case 8://��ʾΪ�������ٵ����ɹرգ���ȥ������ֵ�����ӵ���ֵ+1��ʾΪ��
		    cm.setBossRankCount("��������","-"+cm.getBossRank("��������",2)+"");
            cm.setBossRankCount("��������");	
			cm.dispose();
			cm.openNpc(9900004,990000401);	
            break;				
		case 10://��ʾΪ�������ٵ����ɹرգ���ȥ������ֵ�����ӵ���ֵ+1��ʾΪ��
		    cm.setBossRankCount("��������","-"+cm.getBossRank("��������",2)+"");
            cm.setBossRankCount("��������");	
			cm.dispose();
			cm.openNpc(9900004,990000401);	
			break;
		case 9://��ʾΪ�رգ��迪���������ȣ��ȼ�ȥ��������ֵ������+2���ر�+1
		    cm.setBossRankCount("��������","-"+cm.getBossRank("��������",2)+"");
			cm.setBossRankCount("��������","-"+cm.getBossRank("��������",2)+"");
			cm.setBossRankCount("��������","-"+cm.getBossRank("��������",2)+"");
            cm.setBossRankCount("��������");
            cm.setBossRankCount("��������",2);			
			cm.setBossRankCount("��������");	
			cm.dispose();
			cm.openNpc(9900004,990000401);	
            break;		
			
			
			
			
			
		



        case 30://��ʾ1
		    cm.setBossRankCount("������ʾ��1","-"+cm.getBossRank("������ʾ��1",2)+"");
			cm.setBossRankCount("������ʾ��2","-"+cm.getBossRank("������ʾ��2",2)+"");
			cm.setBossRankCount("������ʾ��2");	
            cm.setBossRankCount("������ʾ��1",2);	
			cm.dispose();
			cm.openNpc(9900004,990000401);	
			break;		
		case 31://��ʾ1 �ر�
		    cm.setBossRankCount("������ʾ��1","-"+cm.getBossRank("������ʾ��1",2)+"");
            cm.setBossRankCount("������ʾ��1");	
			cm.dispose();
			cm.openNpc(9900004,990000401);	
			break;	

        case 32://��ʾ1
		    cm.setBossRankCount("������ʾ��1","-"+cm.getBossRank("������ʾ��1",2)+"");
			cm.setBossRankCount("������ʾ��2","-"+cm.getBossRank("������ʾ��2",2)+"");
			cm.setBossRankCount("������ʾ��2",2);	
            cm.setBossRankCount("������ʾ��1");	
			cm.dispose();
			cm.openNpc(9900004,990000401);	
			break;		
		case 33://��ʾ1 �ر�
		    cm.setBossRankCount("������ʾ��2","-"+cm.getBossRank("������ʾ��2",2)+"");
            cm.setBossRankCount("������ʾ��2");	
			cm.dispose();
			cm.openNpc(9900004,990000401);	
			break;				
			
			
			
			
		
		
	    
		
			 
			} 
		}
    }
