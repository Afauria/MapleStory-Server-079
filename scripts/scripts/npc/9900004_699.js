importPackage(Packages.database);
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE);//��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var ��Ҷ����10 = "#fEffect/SkillName1.img/1001003/��Ҷ����10#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var item = 4001126;

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
    if (cm.getMapId() == 180000001) {
            cm.sendOk("���ź�������ΪΥ���û����򱻽�ֹ��Ϸ���������������ϵ����Ա.");
            cm.dispose();
    } 
    else if (status == 0) {
    	var conn = DatabaseConnection.getConnection();
				var sql = "select characterid,sidai from sidai_slots order by sidai desc limit 1;";
				var pstmt = conn.prepareStatement(sql);
				var list = pstmt.executeQuery();
				var 
				
				text = "";
				for (var i = 1; i <= 100; i++) {
					if (!list.next()) {
						break;
					}
					text+=i==1?"#r":i==2?"#b":i==3?"#b":"";
					
					text += "      "      + i +     "\t\t "  ;
					
					// ������ֿո�
					text += getname(list.getInt("characterid"));
					for (var j = 30 - list.getInt("characterid").length; j > 0; j--) {
						text += " ";
					}

					// �����·�ĺ���
					var zc = " \t\t\t "+(list.getInt("sidai")).toFixed(0)+"";
					text += "  " + zc;
					var totalsidai = list.getInt("sidai");
					var totalsidailength = 0;
					while (totalsidai > 0) {
						totalsidai = Math.floor(totalsidai/10);
						totalsidailength += 1;
					}
					for (var j = 8 - totalsidailength; j > 0; j--) {
						text += " ";
					}

					
					text += "#k\r\n";
				}
				text += "��-#i4001126##i4001126##i4001126##i4001126##i4001126##i4001126##i4001126##i4001126##i4001126##i4001126#-��\r\n";
				text += "\t\t\t #r#L0#- �ύ��Ҷ \r\n";
				list.close();
				pstmt.close();
				cm.sendOk(text);
				cm.dispose();
				
    	
    }else if(status == 1){
    	switch(selection){
    		case 0:
    			cm.dispose();
    			cm.openNpc(2007,20011);
    			break;
    		case 1:
    			var conn = DatabaseConnection.getConnection();
				var sql = "select characterid,sidai from sidai_slots order by sidai desc limit 100;";
				var pstmt = conn.prepareStatement(sql);
				var list = pstmt.executeQuery();
				var 
				text = "��------------------#e#d�� #i4001126# ��#k#n------------------��\r\n\r\n";
				text += "\t#e����#n\t\t#e�ǳ�#n\t\t\t\t#e����#n\\r\n";
				for (var i = 1; i <= 100; i++) {
					if (!list.next()) {
						break;
					}
					text+=i==1?"#r":i==2?"#b":i==3?"#b":"";
					
					text += "      "      + i +     "\t\t "  ;
					
					// ������ֿո�
					text += getname(list.getInt("characterid"));
					for (var j = 30 - list.getInt("characterid").length; j > 0; j--) {
						text += " ";
					}

					// �����·�ĺ���
					var zc = " \t\t\t "+(list.getInt("sidai")).toFixed(0)+"";
					text += "  " + zc;
					var totalsidai = list.getInt("sidai");
					var totalsidailength = 0;
					while (totalsidai > 0) {
						totalsidai = Math.floor(totalsidai/10);
						totalsidailength += 1;
					}
					for (var j = 8 - totalsidailength; j > 0; j--) {
						text += " ";
					}

					
					text += "#k\r\n";
				}
				list.close();
				pstmt.close();
				cm.sendOk(text);
				cm.dispose();
				break;
    			
    		case 2:
    			cm.dispose();
    			cm.openNpc(2007,20013);
    			break;
    		case 3:
    			var text = "#i1142099# #r#t1142099##k"+��Ҷ����10+"\r\n";
    			text += "#i1142098# #r#t1142098##k\r\n";
				text += "#i1142097# #r#t1142097##k\r\n";
				text += "#i1142096# #r#t1142096##k\r\n";
				text += "#i1142095# #r#t1142095##k\r\n";
				text += "#i1142094# #r#t1142094##k\r\n";
				text += "#i1142093# #r#t1142093##k\r\n";
				text += "#i1142092# #r#t1142092##k\r\n";
				text += "#i1142091# #r#t1142091##k\r\n";
				text += "#i1142089# #r#t1142089##k\r\n";
				
    			cm.sendOk(text);
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