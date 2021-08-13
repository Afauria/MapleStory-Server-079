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
        	var strlen = "�װ���#b#e#h ##n#k�������ǵȼ�ÿ�ս�������\r\n";
        	strlen += ����new + "#b�ȼ��������ݣ�\r\n			0-9 ��\r\n";
			strlen += "			10-29 ð�ձ�10w\r\n";
			strlen += "			30-69 ð�ձ�20w\r\n";
			strlen += "			70-119 ��ȯ200 �齱����x2 ð�ձ�30w\r\n";
			strlen += "			120���� ��ȯ500 �齱����x4 ð�ձ�50w\r\n";
			strlen +=" "+��̾��+"#L1##rע��õȼ����䣬ȷ��Ҫ��ȡô��ÿ��ֻ����ȡһ��Ŷ#l\r\n";
			cm.sendSimple(strlen);
		}else if(status == 1){
			var id = cm.getPlayer().getId();
        	var time = getBossLog("meirijiangli",id);
        	if(time >= 1){
        		cm.sendOk("ÿ��ֻ������ȡһ��Ŷ");
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
        		cm.sendOk("û��ʮ��������ȡ����Ŷ");
        		cm.dispose();
        	}else if(level < 30){
        		cm.getPlayer().gainMeso(100000, true);
			cm.setBossLog("meirijiangli");
        		cm.sendOk("��ϲ����10-29������");
        		cm.dispose();
        	}else if(level < 70){
        		cm.getPlayer().gainMeso(200000, true);
			cm.setBossLog("meirijiangli");
        		cm.sendOk("��ϲ����30-69������");
        		cm.dispose();
        	}else if(level < 120){
        		cm.gainItem(2022336,2);
        		cm.gainNX(200);
        		cm.getPlayer().gainMeso(300000, true);
			cm.setBossLog("meirijiangli");
        		cm.sendOk("��ϲ����70-119������");
        		cm.dispose();
        	}else{
        		cm.gainItem(2022336,4);
        		cm.gainNX(500);
        		cm.getPlayer().gainMeso(500000, true);
			cm.setBossLog("meirijiangli");
        		cm.sendOk("��ϲ����120������");
        		cm.dispose();
        	}
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
