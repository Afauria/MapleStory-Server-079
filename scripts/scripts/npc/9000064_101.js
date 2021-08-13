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
var ȷ�� = "#fUI/Login.img/BtOk/normal/0#";
var �Ҹ� = "#k��ܰ��ʾ���κηǷ��������ҷ�Ŵ���.��ɱ��������.";
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
		var MC = cm.getServerName();
        if (status == 0) {
        	var strlen = "�װ���#b#e#h ##n#k��������#r"+MC+"#kÿ��ǩ����\r\n";
        	strlen += "#b     0-9      ��\r\n";
			strlen += "	 10-29  ð�ձ�50w\r\n";
			strlen += "	 30-69  ð�ձ�50w�� �ٱ���x1\r\n";
			strlen += "	 70-119 ð�ձ�100w  �ٱ���x1\r\n";
			strlen += "	 120+   ð�ձ�300w  �ٱ���x3\r\n";
			//strlen += "ÿ�ɹ�ǩ��һ�ο�����ȡһ��ǩ�����ֺͳ�ϯӡ��һ�����ܹ�ǩ�����ֿ��Զһ���Ӧ����ƷŶ\r\n"
			strlen +="         #L1#"+������ͷ+"#eǩ��һ��#l\r\n";
			cm.sendSimple(strlen);
		}else if(status == 1){
			var id = cm.getPlayer().getId();
        	var time = getBossLog("mrqd",id);
        	if(time >= 1){
        		cm.sendOk("ÿ��ֻ������ȡһ��Ŷ��");
        		cm.dispose();
        		return;
        	}
			if (cm.getInventory(1).isFull() || cm.getInventory(2).isFull() || cm.getInventory(3).isFull() || cm.getInventory(4).isFull() || cm.getInventory(5).isFull()) {
                cm.sendSimple("���ı����ռ䲻�㣬������Ŀ��������һ����λ��");
				cm.dispose();
        		return;
        	}
        	var level = cm.getLevel();
        	if(level < 10){
        		cm.sendOk("û��ʮ��������ȡ����Ŷ��");
        		cm.dispose();
        		return;
        	}else if(level < 30){
        		cm.getPlayer().gainMeso(500000, true);
			    cm.setBossLog("mrqd");
			    cm.setBossRankCount("ǩ��");
        		cm.sendOk("��ϲ����10-29��������");
        	}else if(level < 70){
				cm.gainItem(4110000,1);
				cm.setBossRankCount("ǩ��");
        		cm.getPlayer().gainMeso(500000, true);
			    cm.setBossLog("mrqd");
        		cm.sendOk("��ϲ����30-69��������");
        	}else if(level < 120){
				cm.gainItem(4110000,1);
				cm.setBossRankCount("ǩ��");
        		cm.getPlayer().gainMeso(1000000, true);
			    cm.setBossLog("mrqd");
			    cm.setBossRankCount("ǩ��");
        	    cm.sendOk("��ϲ����70-119��������");
        	}else{
				cm.gainItem(4110000,2);
        		cm.getPlayer().gainMeso(3000000, true);
				cm.setBossLog("mrqd");
				cm.setBossRankCount("ǩ��");
        		cm.sendOk("��ϲ����120��������");
        	}
        	var day = getqiandao(id);
			var day2 = getqiandao2(id);
        	if(day == -1){
        		setqiandao(id);
        	}else{
        		changeqiandao(id,day+1);
        	}
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
function getqiandao2(id) {
        var con = DatabaseConnection.getConnection();
        var ps;
		ps = con.prepareStatement("SELECT day FROM qiandao2 WHERE id = ?");
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

function setqiandao2(id){
	var con = DatabaseConnection.getConnection();
    var ps;
	ps = con.prepareStatement("insert into qiandao2 (id, day) values (?,1)");
	ps.setInt(1,id);
	ps.executeUpdate();
    ps.close();
}


function changeqiandao2(id,day){
	var con = DatabaseConnection.getConnection();
    var ps;
	ps = con.prepareStatement("update qiandao2 set day = ? where id = ?");
	ps.setInt(1,day);
	ps.setInt(2,id);
	ps.executeUpdate();
    ps.close();
}