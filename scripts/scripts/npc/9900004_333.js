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
		
			strlen += "#e��  ��#n��#r"+ cm.getChar().getName() +"#k    ��0��δ��ɡ�2�����  \r\n\r\n";
 
			
			//strlen += "#L1#"+������ͷ+"����վɱ��#l#k #L2#"+������ͷ+"������ɱ��#l#k #L3#"+������ͷ+"����������#l#k\r\n#L4#"+������ͷ+"ͨ����ɾ�#l#k\r\n\r";
			
	//strlen += "#�����ȶ�#n��#r"+ cm.getChar().getBossLog("zymxd")+"#k\r\n";
   strlen +=	  "[��̬��������] �� #r#n "+ cm.getChar().getQuestStatus(123)+"  \r\n";
	//strlen +=	  "���ÿ�տ�Ѫ #r#n "+ cm.getChar().getBossLog("mrkx")+" / 5#k  ��           #g    [ + 5 ]#k\r\n";
	//strlen +=  "���ÿ��Ѱ�� #r#n "+ cm.getChar().getBossLog("mrxb")+" / 5#k  ��           #g    [ + 5 ]#k\r\n";
	//strlen +=   "��ȡÿ�տ��� #r#n "+ cm.getChar().getBossLog("mrkl")+" / 1#k #b#k ��           #g    [ + 1 ]#k \r\n";
  

        	
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			for(var i = 0; i < pirzeList.length; i++){
        		strlen +="#r#L"+ i +"# #b#t"+ pirzeList[i][0] +"##k ��Ҫ"+pirzeList[i][1]+"����#l\r\n";
        	}
			cm.sendSimple(strlen);
			
		}else if(selection  == 1){
			var record = cm.getQuestRecord(7662);
			var data = record.getCustomData();
			if (data == null) {
				record.setCustomData("0");
				data = record.getCustomData();
			}
			var mons = parseInt(data);
			
				cm.sendOk("����վɱ���� : " + mons);
				cm.dispose();
				
		}else if(selection  == 2){
            var record = cm.getQuestRecord(7760);
            var data = record.getCustomData();
            if (data == null) {
                record.setCustomData("0");
                data = record.getCustomData();
            }
            var mons = parseInt(data);
            
				cm.sendOk("������ɱ���� : " + mons);	
				cm.dispose();
		}else if(selection  == 3){
            
          
				cm.sendOk("���������֣�#r"+cm.getDojoPoints()+"#k\r\n");	
				cm.dispose();		
				
		}else if(selection  == 4){
            
          
				cm.dispose();
            cm.openNpc(9000064,3);	
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
		}else if(status == 20){
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