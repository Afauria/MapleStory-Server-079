
//////////////////////////////
//??*����ð�յ�*��ߴ���////
//1346464664/992916233//////
///////////////////////////
importPackage(Packages.database);
var ca = java.util.Calendar.getInstance();
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
    }
	var MC = cm.getServerName();
	    if ( cm.getMapId() == 10000) {
            cm.sendOk(" �� �� ð �� �� �� �� �� �� ʹ �� �� �� �� ��");
            cm.dispose();
        }


  
    else if (status == 0) {
		
		
					var text = "\t\t\t\t\t#e  �������#n\r\n\r\n";
			text += "   #r���#k#n\t\t#n\t\t\t\t\t#n\t\t #e#n\r\n#k";
			var liuyaninfo_list=cm.getliuyanCount("liuyan");
			if(rankinfo_list!=null){
				for(var i=0;i<rankinfo_list.size();i++){
					if(i==10){
						break;
					}
					var info=liuyaninfo_list.get(i);

					text+=i==0?"#r":i==1?"#b":i==2?"#b":"";
					text += "\t" + (i+1) + "\t\t";
					// ������ֿո�
					text += info.getCname();
					for (var j = 16 - info.getCname().getBytes().length; j > 0 ; j--) {
						text += " ";
					}
					text += "\t\t������:" + info.getCount();
					
					text += "\t\t\t#k";

					text += "";
				}
			}
			cm.sendOkS(text, 3);
			cm.dispose();
		
		
		
        		
		


		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
		cm.GainPiot("�ȶ�",2,2)
        cm.displayGuildRanks();
	    cm.dispose();	
            break;
			case 9:
        cm.MapleMSpvpdeaths();
	    cm.dispose();	
            break;
			case 10:
        cm.MapleMSpvpkills();
	    cm.dispose();	
            break;
		case 1:
	cm.showlvl();
	cm.dispose()
            break;
		 case 2:
    	cm.showmeso();
	cm.dispose();	
            break;
 	case 3:
    			var conn = DatabaseConnection.getConnection();
				var sql = "select characterid,sidai from fengye order by sidai desc limit 100;";
				var pstmt = conn.prepareStatement(sql);
				var list = pstmt.executeQuery();
				var lts = cm.getBossRank("��̨��",2);
				var 
				text = "\t\t\t  #e#d#i4001126#���Ҷ���ݡ�#k#n#i4001126#\r\n\r\n";
				text += "��ʾ��#rÿ�����賿���㣬��һ����������ڱ���ѫ��.\r\n";
				text += "#k_____________________________________________________\r\n\r\n";
				for (var i = 1; i <= 100; i++) {
					if (!list.next()) {
						break;
					}
					text+=i==1?"#r":i==2?"#n#b":i==3?"#k":"";
					
					text += "���"      + i +     "����\t -  [ #e ";
					
					// ������ֿո�
					text += getname(list.getInt("characterid"));
					for (var j = 30 - list.getInt("characterid").length; j > 0; j--) {
						text += "\r\n";
					}

					// �����·�ĺ���
					var zc = "#n]  - \r\n�����; "+(list.getInt("sidai")).toFixed(0)+"\r\n#n#k______________________________________________________\r\n";
					text += "  " + zc;
					var totalsidai = list.getInt("sidai");
					var totalsidailength = 0;
					while (totalsidai > 0) {
						totalsidai = Math.floor(totalsidai/10);
						totalsidailength += 1;
					}
					for (var j = 8 - totalsidailength; j > 0; j--) {
						text += "";
					}

					
					text += "#k\r\n";
				}
				list.close();
				pstmt.close();
				cm.sendOk(text);
				cm.dispose();
				break;
				
			case 4:
					var text = "\t\t\t\t\t#e��̨���������ְ�#n\r\n\r\n";
			text += "   #r���#k#n\t\t#n\t\t\t\t\t#n\t\t #e#n\r\n#k";
			var rankinfo_list=cm.getBossRankCountTop("��̨��");
			if(rankinfo_list!=null){
				for(var i=0;i<rankinfo_list.size();i++){
					if(i==10){
						break;
					}
					var info=rankinfo_list.get(i);

					text+=i==0?"#r":i==1?"#b":i==2?"#b":"";
					text += "\t" + (i+1) + "\t\t";
					// ������ֿո�
					text += info.getCname();
					for (var j = 16 - info.getCname().getBytes().length; j > 0 ; j--) {
						text += " ";
					}
					text += "\t\t����:" + info.getCount();
					
					text += "\t\t\t#k";

					text += "";
				}
			}
			cm.sendOkS(text, 3);
			cm.dispose();
	 break;
	 case 4:
					var text = "\t\t\t\t\t#e��̨���������ְ�#n\r\n\r\n";
			text += "   #r���#k#n\t\t#n\t\t\t\t\t#n\t\t #e#n\r\n#k";
			var rankinfo_list=cm.getBossRankCountTop("��̨��");
			if(rankinfo_list!=null){
				for(var i=0;i<rankinfo_list.size();i++){
					if(i==10){
						break;
					}
					var info=rankinfo_list.get(i);

					text+=i==0?"#r":i==1?"#b":i==2?"#b":"";
					text += "\t" + (i+1) + "\t\t";
					// ������ֿո�
					text += info.getCname();
					for (var j = 16 - info.getCname().getBytes().length; j > 0 ; j--) {
						text += " ";
					}
					text += "\t\t����:" + info.getCount();
					
					text += "\t\t\t#k";

					text += "";
				}
			}
			cm.sendOkS(text, 3);
			cm.dispose();
	 break;
	 case 5:
					var text = "\t\t\t\t\t#e  �������#n\r\n\r\n";
			text += "   #r���#k#n\t\t#n\t\t\t\t\t#n\t\t #e#n\r\n#k";
			var rankinfo_list=cm.getBossRankCountTop("����������");
			if(rankinfo_list!=null){
				for(var i=0;i<rankinfo_list.size();i++){
					if(i==10){
						break;
					}
					var info=rankinfo_list.get(i);

					text+=i==0?"#r":i==1?"#b":i==2?"#b":"";
					text += "\t" + (i+1) + "\t\t";
					// ������ֿո�
					text += info.getCname();
					for (var j = 16 - info.getCname().getBytes().length; j > 0 ; j--) {
						text += " ";
					}
					text += "\t\t������:" + info.getCount();
					
					text += "\t\t\t#k";

					text += "";
				}
			}
			cm.sendOkS(text, 3);
			cm.dispose();
	 break;
	 case 6:
					var text = "\t\t\t\t\t#e  ��ǿ����#n\r\n\r\n";
			text += "   #r���#k#n\t\t#n\t\t\t\t\t#n\t\t #e#n\r\n#k";
			var rankinfo_list=cm.getBossRankCountTop("ǿ��");
			if(rankinfo_list!=null){
				for(var i=0;i<rankinfo_list.size();i++){
					if(i==10){
						break;
					}
					var info=rankinfo_list.get(i);

					text+=i==0?"#r":i==1?"#b":i==2?"#b":"";
					text += "\t" + (i+1) + "\t\t";
					// ������ֿո�
					text += info.getCname();
					for (var j = 16 - info.getCname().getBytes().length; j > 0 ; j--) {
						text += " ";
					}
					text += "\t\t����:" + info.getCount();
					
					text += "\t\t\t#k";

					text += "";
				}
			}
			cm.sendOkS(text, 3);
			cm.dispose();
	 break;
	 case 7:
					var text = "\t\t\t\t\t#e  ��ǩ����#n\r\n\r\n";
			text += "   #r���#k#n\t\t#n\t\t\t\t\t#n\t\t #e#n\r\n#k";
			var rankinfo_list=cm.getBossRankCountTop("ǩ������");
			if(rankinfo_list!=null){
				for(var i=0;i<rankinfo_list.size();i++){
					if(i==10){
						break;
					}
					var info=rankinfo_list.get(i);

					text+=i==0?"#r":i==1?"#b":i==2?"#b":"";
					text += "\t" + (i+1) + "\t\t";
					// ������ֿո�
					text += info.getCname();
					for (var j = 16 - info.getCname().getBytes().length; j > 0 ; j--) {
						text += " ";
					}
					text += "\t\t#k#nǩ��#r #e" + info.getCount();
					
					text += "#k#n ��\t\t\t#k";

					text += "";
				}
			}
			cm.sendOkS(text, 3);
			cm.dispose();
	 break;
			 case 8:
					var text = "\t\t\t\t #e#r��������¥���ְ�#k#n\r\n\r\n";
			text += "   #r���#k#n\t\t#n\t\t\t\t\t#n\t\t #e#n\r\n#k";
			var rankinfo_list=cm.getBossRankCountTop("��¥����");
			if(rankinfo_list!=null){
				for(var i=0;i<rankinfo_list.size();i++){
					if(i==10){
						break;
					}
					var info=rankinfo_list.get(i);

					text+=i==0?"#r":i==1?"#b":i==2?"#b":"";
					text += "\t" + (i+1) + "\t\t";
					// ������ֿո�
					text += info.getCname();
					for (var j = 16 - info.getCname().getBytes().length; j > 0 ; j--) {
						text += " ";
					}
					text += "\t\t����:" + info.getCount();
					
					text += "\t\t\t#k";

					text += "";
				}
			}
			cm.sendOkS(text, 3);
			cm.dispose();
	 break;
			 
			 
		}
    }
}function getname(id){
    var con1 = DatabaseConnection.getConnection();
    ps1 = con1.prepareStatement("SELECT name FROM characters WHERE id = ?");
    ps1.setInt(1, id);
    var rs1 = ps1.executeQuery();
    var name;
    if (rs1.next()) {
        name = rs1.getString("name");
    } else {
        name = "������ʿ";
    }
    rs1.close();
    ps1.close();
    return name;
}


