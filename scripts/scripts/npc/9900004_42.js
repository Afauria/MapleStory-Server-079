importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.database);

var myDate = new Date();
var year = myDate.getFullYear();
var month = myDate.getMonth() + 1;
var days = myDate.getDate();
var status = 0;
var ��ˮ�� = 4021008;
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var Բ�� = "#fUI/UIWindow/Quest/icon3/6#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var �Ҹ� = "#k��ܰ��ʾ���κηǷ��������ҷ�Ŵ���.��ɱ��������.";
var item;
var day;
var id;
var pirzeList = Array(
);
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
        	var strlen = "";
        	id = cm.getPlayer().getId();
        	day = getqiandao(id);
        	if(day == -1){
        		day = 0;
        	}
        	strlen += "�ɾͻ���:#B " +day+ "#\r\n";
	strlen +=		   " ��ң�#r#n"+ cm.getChar().getName() +"#k\r\n�����ȶȣ�#r"+ cm.getChar().getBossLog("zymxd")+"#k\r\n\r\n";
	strlen +=	 "ʹ�õ������� #r#n "+ cm.getChar().getBossLog("qftc")+" / 3 #k ��\r\n";
	strlen +=	 "���ÿ������ #r#n "+ cm.getChar().getBossLog("mrtt")+" / 2 #k ��           #g    [ + 2 ]#k\r\n";
	strlen +=	 "���ÿ��ǩ�� #r#n "+ cm.getChar().getBossLog("mrqd")+" / 1 #k ��           #g    [ + 1 ]#k\r\n";
	strlen +=	 "���ÿ���ܻ� #r#n "+ cm.getChar().getBossLog("paoshang1")+" / 20 #k��           #g    [ + 20 ]#k\r\n";
	strlen +=	 "���ÿ�ձ��� #r#n "+ cm.getChar().getBossLog("mrbp")+" / X#k  ��           #g    [ + X ]#k\r\n";
	strlen +=	 "��ȡÿ�պ��� #r#n "+ cm.getChar().getBossLog("mrhl07")+" / 1 #k #b7 :00-7 :59#k   #g   [ + 1 ]#k\r\n";
	strlen +=     "��ȡÿ�պ��� #r#n "+ cm.getChar().getBossLog("mrhl12")+" / 1 #k #b12:00-12:59#k   #g   [ + 1 ]#k\r\n";
	strlen +=	  "��ȡÿ�պ��� #r#n "+ cm.getChar().getBossLog("mrhl21")+" / 1 #k #b21:00-21:59#k   #g   [ + 1 ]#k \r\n";
	strlen +=	  "����־巿�� #r#n "+ cm.getChar().getBossLog("kjfj")+" �� #k #b[�޻�Ծ�ȼӳ�]#k \r\n";
	strlen +=	  "ʹ�õ������� #r#n "+ cm.getChar().getBossLog("qftc")+" �� #k #b[�޻�Ծ�ȼӳ�]#k \r\n";
	strlen +=	  "��ݴ���ʹ�� #r#n "+ cm.getChar().getBossLog("cs")+" �� #k #b[�޻�Ծ�ȼӳ�]#k \r\n";
	strlen +=	 "��򼸱��ͨ�� #r#n "+ cm.getChar().getBossLog("wugong")+" �� #k #b[�޻�Ծ�ȼӳ�]#k \r\n";
	strlen +=	  "�����ɽ��ˮ #r#n "+ cm.getChar().getBossLog("sss10")+" / 1#k #b#k ��           #g    [ + 5 ]#k \r\n";
	strlen +=	  "���ÿ�տ�Ѫ #r#n "+ cm.getChar().getBossLog("mrkx")+" / 5#k  ��           #g    [ + 5 ]#k\r\n";
	strlen +="���ÿ��Ѱ�� #r#n "+ cm.getChar().getBossLog("mrxb")+" / 5#k  ��           #g    [ + 5 ]#k\r\n";
	strlen += "��ȡÿ�տ��� #r#n "+ cm.getChar().getBossLog("mrkl")+" / 1#k #b#k ��           #g    [ + 1 ]#k \r\n";
        	
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			for(var i = 0; i < pirzeList.length; i++){
        		strlen +="#r#L"+ i +"# #b#t"+ pirzeList[i][0] +"##k ��Ҫ"+pirzeList[i][1]+"����#l\r\n";
        	}
			cm.sendSimple(strlen);
		}else if(status == 1){
			item = selection;
			var strlen = "��ȷ��Ҫ��"+pirzeList[item][1]+"���ֶһ� #b#t"+ pirzeList[item][0] +"##k ô?";
			cm.sendYesNo(strlen);
		}else if(status == 2){
			if (cm.getInventory(1).isFull() || cm.getInventory(2).isFull() || cm.getInventory(3).isFull() || cm.getInventory(4).isFull() || cm.getInventory(5).isFull()) {
                status = -1;
                cm.sendSimple("���ı����ռ䲻�㣬������Ŀ��������һ����λ��");
				return;
        	}
			if(day < pirzeList[item][1]){
				cm.sendOk("���Ļ��ֲ��㣬�����Զһ�����ƷŶ��");
				cm.dispose();
				return;
			}
			day = day - pirzeList[item][1];
			changeqiandao(id,day);
			cm.gainItem(pirzeList[item][0],1);
			cm.sendOk("");
			cm.dispose();
		}
    }
}

function getBossLog(boss,id) {
        var con = DatabaseConnection.getConnection();
        var count = 0;
        var ps;
        //ps = con.prepareStatement("SELECT COUNT(*) FROM bosslog WHERE characterid = ? AND bossid = ? AND lastattempt >= subtime(CURRENT_TIMESTAMP, '23:0:0.0')");
		var day = ""+year+"-"+month+"-"+days+"";
		ps = con.prepareStatement("SELECT COUNT(*) FROM bosslog WHERE characterid = ? AND bossid = ? AND lastattempt >= ?");
        ps.setInt(1, id);
        ps.setString(2, boss);
		ps.setString(3,day);
        var rs = ps.executeQuery();
        if (rs.next()) {
            count = rs.getInt(1);
        } else {
            count = -1;
        }
        rs.close();
        ps.close();
        return count;
}

function getqiandao(id) {
        var con = DatabaseConnection.getConnection();
        var ps;
		ps = con.prepareStatement("SELECT day FROM qiandao WHERE id = ?");
        ps.setInt(1, id);
        var rs = ps.executeQuery();
        if (rs.next()) {
            count = rs.getInt(1);
        } else {
            count = -1;
        }
        rs.close();
        ps.close();
        return count;
}

function setqiandao(id){
	var con = DatabaseConnection.getConnection();
    var ps;
	ps = con.prepareStatement("insert into qiandao (id, day) values (?,1)");
	ps.setInt(1,id);
	ps.executeUpdate();
    ps.close();
}


function changeqiandao(id,day){
	var con = DatabaseConnection.getConnection();
    var ps;
	ps = con.prepareStatement("update qiandao set day = ? where id = ?");
	ps.setInt(1,day);
	ps.setInt(2,id);
	ps.executeUpdate();
    ps.close();
}