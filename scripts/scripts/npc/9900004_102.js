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
    }var MC = cm.getServerName();
	    if ( cm.getMapId() == 10000) {
            cm.sendOk(" �� �� ð �� �� �� �� �� �� ʹ �� �� �� �� ��");
            cm.dispose();
        }


  
    else if (status == 0) {
		
		
        var  
		selStr = "#e����#r"+MC+"#k\r\n";
		
		selStr += "#e���#n��#r"+ cm.getChar().getName() +"#k   \r\n";
	     if(cm.getQuestStatus(88882)== 2 ){
		selStr += "#eְҵ#n��#r�����ߣ�2��#k\r\n";} 
	else if(cm.getQuestStatus(88880)== 2 ){
		selStr += "#eְҵ#n��#r�����ߣ�1��#k\r\n";}
	else if(cm.getPlayer().getJob() == 0 ){
		selStr += "#eְҵ#n������\r\n";}
    else if (cm.getPlayer().getJob() == 100 ){
		selStr += "#eְҵ#n��սʿ\r\n";}
	else if (cm.getPlayer().getJob() == 110 ){
		selStr += "#eְҵ#n������\r\n";}
	else if (cm.getPlayer().getJob() == 111 ){
		selStr += "#eְҵ#n����ʿ\r\n";}
	else if (cm.getPlayer().getJob() == 112 ){
		selStr += "#eְҵ#n��Ӣ��\r\n";}	
	else if (cm.getPlayer().getJob() == 120 ){
		selStr += "#eְҵ#n��׼��ʿ\r\n";}
	else if (cm.getPlayer().getJob() == 121 ){
		selStr += "#eְҵ#n����ʿ\r\n";}
	else if (cm.getPlayer().getJob() == 122 ){
		selStr += "#eְҵ#n��ʥ��ʿ\r\n";}
	else if (cm.getPlayer().getJob() == 130 ){
		selStr += "#eְҵ#n��ǹսʿ\r\n";}
	else if (cm.getPlayer().getJob() == 131 ){
		selStr += "#eְҵ#n������ʿ\r\n";}
	else if (cm.getPlayer().getJob() == 132 ){
		selStr += "#eְҵ#n����ʿ\r\n";}	
	else if (cm.getPlayer().getJob() == 200 ){
		selStr += "#eְҵ#n��ħ��ʦ\r\n";}	
	else if (cm.getPlayer().getJob() == 210 ){
		selStr += "#eְҵ#n���𶾷�ʦ\r\n";}
	else if (cm.getPlayer().getJob() == 211 ){
		selStr += "#eְҵ#n������ʦ\r\n";}		
 	else if (cm.getPlayer().getJob() == 212 ){
		selStr += "#eְҵ#n����ħ��ʦ\r\n";}       
	else if (cm.getPlayer().getJob() == 220 ){
		selStr += "#eְҵ#n�����׷�ʦ\r\n";}
	else if (cm.getPlayer().getJob() == 221 ){
		selStr += "#eְҵ#n��������ʦ\r\n";}		
 	else if (cm.getPlayer().getJob() == 222 ){
		selStr += "#eְҵ#n������ħ��ʦ\r\n";}
	else if (cm.getPlayer().getJob() == 230 ){
		selStr += "#eְҵ#n����ʦ\r\n";}
	else if (cm.getPlayer().getJob() == 231 ){
		selStr += "#eְҵ#n����ʦ\r\n";}		
 	else if (cm.getPlayer().getJob() == 232 ){
		selStr += "#eְҵ#n������\r\n";}
 	else if (cm.getPlayer().getJob() == 300 ){
		selStr += "#eְҵ#n��������\r\n";}		
 	else if (cm.getPlayer().getJob() == 310 ){
		selStr += "#eְҵ#n������\r\n";}		
 	else if (cm.getPlayer().getJob() == 311 ){
		selStr += "#eְҵ#n������\r\n";}		
 	else if (cm.getPlayer().getJob() == 312 ){
		selStr += "#eְҵ#n��������\r\n";}		
 	else if (cm.getPlayer().getJob() == 320 ){
		selStr += "#eְҵ#n������\r\n";}		
 	else if (cm.getPlayer().getJob() == 321 ){
		selStr += "#eְҵ#n������\r\n";}			
 	else if (cm.getPlayer().getJob() == 322 ){
		selStr += "#eְҵ#n������\r\n";}			
 	else if (cm.getPlayer().getJob() == 400 ){
		selStr += "#eְҵ#n������\r\n";}			
 	else if (cm.getPlayer().getJob() == 410 ){
		selStr += "#eְҵ#n���̿�\r\n";}		
 	else if (cm.getPlayer().getJob() == 411 ){
		selStr += "#eְҵ#n����Ӱ��\r\n";}		
 	else if (cm.getPlayer().getJob() == 412){
		selStr += "#eְҵ#n����ʿ\r\n";}		
 	else if (cm.getPlayer().getJob() == 420 ){
		selStr += "#eְҵ#n������\r\n";}		
 	else if (cm.getPlayer().getJob() == 421 ){
		selStr += "#eְҵ#n�����п�\r\n";}		
 	else if (cm.getPlayer().getJob() == 422 ){
		selStr += "#eְҵ#n������\r\n";}
 	else if (cm.getPlayer().getJob() == 1100 ){
		selStr += "#eְҵ#n������ʿ1ת\r\n";}		
 	else if (cm.getPlayer().getJob() == 1110 ){
		selStr += "#eְҵ#n������ʿ2ת\r\n";}
 	else if (cm.getPlayer().getJob() == 1111 ){
		selStr += "#eְҵ#n������ʿ3ת\r\n";}
	else if (cm.getPlayer().getJob() == 1200 ){
		selStr += "#eְҵ#n������ʦ1ת\r\n";}
	else if (cm.getPlayer().getJob() == 1210 ){
		selStr += "#eְҵ#n������ʦ2ת\r\n";}
	else if (cm.getPlayer().getJob() == 1211 ){
		selStr += "#eְҵ#n������ʦ3ת\r\n";}
	else if (cm.getPlayer().getJob() == 1300 ){
		selStr += "#eְҵ#n������ʹ��1ת\r\n";}
	else if (cm.getPlayer().getJob() == 1310 ){
		selStr += "#eְҵ#n������ʹ��2ת\r\n";}
	else if (cm.getPlayer().getJob() == 1311 ){
		selStr += "#eְҵ#n������ʹ��3ת\r\n";}
	else if (cm.getPlayer().getJob() == 1400 ){
		selStr += "#eְҵ#n��ҹ����1ת\r\n";}
	else if (cm.getPlayer().getJob() == 1410 ){
		selStr += "#eְҵ#n��ҹ����2ת\r\n";}		
	else if (cm.getPlayer().getJob() == 1411 ){
		selStr += "#eְҵ#n��ҹ����3ת\r\n";}		
	else if (cm.getPlayer().getJob() == 1500 ){
		selStr += "#eְҵ#n����Ϯ��1ת\r\n";}		
	else if (cm.getPlayer().getJob() == 1510 ){
		selStr += "#eְҵ#n����Ϯ��2ת\r\n";}
	else if (cm.getPlayer().getJob() == 1511 ){
		selStr += "#eְҵ#n����Ϯ��3ת\r\n";}
	else if (cm.getPlayer().getJob() == 2100 ){
		selStr += "#eְҵ#n��ս��1ת\r\n";}
	else if (cm.getPlayer().getJob() == 2110 ){
		selStr += "#eְҵ#n��ս��2ת\r\n";}
	else if (cm.getPlayer().getJob() == 2111 ){
		selStr += "#eְҵ#n��ս��3ת\r\n";}
	else if (cm.getPlayer().getJob() == 2112 ){
		selStr += "#eְҵ#n��ս��4ת\r\n";}
	else{
		selStr += "#eְҵ#n����ʾ����\r\n";
		cm.dispose();}
	//	selStr +="#eǿ�������ȣ�#r"+ cm.getBossRank("ǿ��",2)+"#l\r\n#k";
		selStr +="#e���������ȣ�#r"+ cm.getBossRank("����������",2)+"#l\r\n#k";
	//	selStr +="#e����վ���֣�#r"+ cm.getBossRank("��������",2)+"#l\r\n#k";
		selStr +="#e���������֣�#r"+cm.getDojoPoints()+"#l\r\n#k";
		selStr += "#k#e���е�ȯ��#r"+cm.getPlayer().getCSPoints(1)+"\r\n#k";
		selStr += "#k#e���е��ã�#r"+cm.getPlayer().getCSPoints(2)+"\r\n#k";
		selStr += "#k#e���н�ң�#r"+cm.getPlayer().getMeso()+"\r\n#k";
        selStr += "#b\r\n#L0#"+��ͷ+"���ؽ���#l";
		
		
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
		case 10000://
		 
		cm.getPlayer().dropMessage();
		
            cm.dispose();
            
            break;
		
		
		
		
		
		
		
		
		
        case 0://��Ҷļ��
            cm.dispose();
            cm.openNpc(9900004,0);	
            break;
	    case 1:
            var text = "\t\t\t\t#e#r�� ���������� ��#k#n\r\n\r\n";
			text += "\t#e����#n\t#e ����ǳ�#n\t\t\t#e ������#n\t\t #e#n\r\n#k";
			var rankinfo_list=cm.getBossRankCountTop("����������");
			if(rankinfo_list!=null){
				for(var i=0;i<rankinfo_list.size();i++){
					if(i==10){
						break;
					}
					var info=rankinfo_list.get(i);

					text+=i==0?"#r":i==1?"#r":i==2?"#g":i==3?"#b":"";
					text += "\t " + (i+1) + "\t\t ";
					// ������ֿո�
					text += info.getCname();
					for (var j = 16 - info.getCname().getBytes().length; j > 0 ; j--) {
						text += " ";
					}
					text += "\t\t" + info.getCount();
					
					text += "\t\t\t #k";

					text += "\r\n";
				}
			}
			cm.sendOkS(text, 3);
			cm.dispose();
			
            break;
             case 2:
            var text = "\t\t\t\t#e#r�� ����վ���� ��#k#n\r\n\r\n";
			text += "\t#e����#n\t#e ����ǳ�#n\t\t\t#e ����#n\t\t #e#n\r\n#k";
			var rankinfo_list=cm.getBossRankCountTop("��������");
			if(rankinfo_list!=null){
				for(var i=0;i<rankinfo_list.size();i++){
					if(i==10){
						break;
					}
					var info=rankinfo_list.get(i);

					text+=i==0?"#r":i==1?"#r":i==2?"#g":i==3?"#b":"";
					text += "\t " + (i+1) + "\t\t ";
					// ������ֿո�
					text += info.getCname();
					for (var j = 16 - info.getCname().getBytes().length; j > 0 ; j--) {
						text += " ";
					}
					text += "\t\t" + info.getCount();
					
					text += "\t\t\t #k";

					text += "\r\n";
				}
			}
			cm.sendOkS(text, 3);
			cm.dispose();
			
            break;
			 case 3:
		    cm.sendOk("\t�װ��ģ�#r#h ##k\r\n\t������Ļ��ֵ����� #b"+cm.getDojoPoints()+"#k ��");
			cm.dispose(); 
			 
			 
		}
    }
}
