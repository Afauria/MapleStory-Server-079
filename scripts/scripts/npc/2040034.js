/* ==================
 �ű�����:  NPC	    
 �ű����ߣ�����     
 ��ϵ��ʽ��782772124  
 =====================
 */

var status = 0;
//��������
var fbmc = "���֮�� - (�������)";
//���������ļ�
var eventname = "LudiPQ";
//�жϸ��������Ƿ���
var qblog = "LPQOpen";
//������������
var maxenter = 10;
//����������¼
var Log = '��߳�����';
//ͨ�ظ���������¼
var Log1 = '��߳��������';
//�ȼ�����
var minlvl = 35;
var maxlvl = 255;
//��������
var minplayers = 1;
var maxplayers = 6;
//������ս�����Ʒ����
var zzjl = 4310030
//��������
var open = true;//false true
//��������
var ca = java.util.Calendar.getInstance();
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE);//��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����



function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else if (mode == 0) {
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        var em = cm.getEventManager(eventname);
        if (status == 0) {
            var yhms = "";
            yhms += "                #k" + fbmc + "\r\n";
            yhms += "��������Ҫ�����£�\r\n";
            yhms += "1���ȼ����ƣ�" + minlvl + " - " + maxlvl + "  �������ƣ�" + minplayers + " - " + maxplayers + " ����ָ����#r��#k\r\n";
           // yhms += "2�����ƴ���:ÿ��ɽ���" + maxenter + "��\r\n";
			//yhms += "2�������ѽ���: #b" + cm.getBossLog(Log) + " #k��       \r\n"
            yhms += "#L0##b��ʼ " + fbmc + "#l\r\n";
            yhms += "#L2##b��ѯ - ����״̬��Ϣ#l\r\n";
            yhms += "#L3##b#r���ø���(���ڿ�����ʹ��)#l\r\n\r\n";
            //yhms += "#L4##b#r#v4170005#�����̶������һ�#l\r\n\r\n";
            yhms += "#fMob/0130101.img/move/0#   #e#d��ӭ����ʷ����ð�յ�-���Ĵ������!\r\n";
            cm.sendSimple(yhms);
        } else if (status == 1) {
            if (selection == 0) {
				 if (hasParty() == false) { //�ж��Ƿ������
                    cm.sendOk("�㻹û�д���һֻ����,�밴��ݡ�P�������д�����");
                    cm.dispose();
					return;
                }
				var party = cm.getParty().getMembers();
				var inMap = cm.partyMembersInMap();
				var levelValid = 0;
				for (var i = 0; i < party.size(); i++) {
					if (party.get(i).getLevel() >= minlvl && party.get(i).getLevel() <= maxlvl) {
						levelValid++;
					}
				}
                if (hasParty() == false) { //�ж��Ƿ������
                    cm.sendOk("�㻹û�д���һֻ����,�밴��ݡ�P�������д�����");
                    cm.dispose();
                } else if (isLeader() == false) {//�ж��Ƿ��Ƕӳ�
                    cm.sendOk("���ӳ�������������,����������˵����");
                    cm.dispose();
                } else if (zdLog() == false) {//�жϸ�����ս����
                    cm.sendOk("�������Ա��������ս�����Ѿ����ꡣ��˶Ժ���������!");
                    cm.dispose();
                } else if (inMap < minplayers || inMap > maxplayers) {
                cm.sendOk("��Ķ�����������"+minplayers+"��.�����Ķ�����Ա�ټ����ڽ��븱��.");
                //cm.sendOk("Your party is not a party of "+minPlayers+". Please make sure all your members are present and qualified to participate in this quest. I see #b" + inMap + "#k of your party members are in Kerning. If this seems wrong, #blog out and log back in,#k or reform the party.");
                cm.dispose();
            } else if (levelValid != inMap) {
                cm.sendOk("��ȷ����Ķ�����Ա��С�ȼ��� "+minlvl+" �� "+maxlvl+"֮��. I see #b" + levelValid + "#k members are in the right level range. If this seems wrong, #blog out and log back in,#k or reform the party.");
                cm.dispose();
                //} else if (checkPartyLevels() == false) {//�ж϶����Ա�ȼ�
                 //   cm.sendOk("����Ա - ��ʾ \r\n\r\n�����Ա�ȼ�������#b" + minlvl + " - " + maxlvl + "#k֮�䲢�ұ�����һ�ŵ�ͼ���ܽ��룬��˶Ժ��������ҡ�")
                 //   cm.dispose();
                } else if (checkPartySize() == false) {//�ж϶����Ա����
                    cm.sendOk("����Ա - ��ʾ \r\n\r\n�����Ա����������#b" + minplayers + "~" + maxplayers + "#k֮�䲢�ұ�����һ�ŵ�ͼ���ܽ��룬��˶Ժ��������ҡ�");
                    cm.dispose();
                
                } else if (em == null) {//�ж������ļ��Ƿ񼤻�
                    cm.sendOk("�����ļ�û�п���,����ϵ����Ա��");
                    cm.dispose();
                } else if (open == false) {//�ж�NPC�ű��Ƿ���
                    cm.sendOk("NPC�ű�û�п���,����ϵ����Ա����");
                    cm.dispose();
                } else if (Property() == false) {//�жϸ����Ƿ��Ѿ��п���
                    cm.sendOk("��ǰƵ����������ڽ��������У����Ժ����ԡ�\r\n\r\n����Ե������ѯ - ����״̬��Ϣ���鿴���ǵĽ��ȡ�");
                    cm.dispose();
                } else {
					
                    em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                    //cm.serverMessage(6,"[�������]: ��� [" + cm.getPlayer().getName() + "] �������Ķ��������" + fbmc + "��");
                    var eim = cm.getPlayer().getEventInstance();
                    var party = eim.getPlayers();
                    cm.dispose();
                    em.setProperty(qblog, "false");
                }
            

            } else if (selection == 2) {//������ѯ״̬
                var pqtry = maxenter - cm.getBossLog(Log);
                if (Property() == false) {//�ж������Ƿ����ڽ���
                    var vipstr = "#b�Ѿ�����#k";
                } else {
                    var vipstr = "#r��������#k";
                }
                var yhms = "";
                yhms = "#k��ǰλ��:\r\n             �������� - " + fbmc + "\r\n\r\n";
                yhms += "��Ϣ����:\r\n\r\n";
                //yhms += "�����ѽ���: #b" + cm.getBossLog(Log) + " #k��#k\r\n";
                yhms += "\r\n��������״̬��" + vipstr + "\r\n";
                yhms += "\r\n������ʱ��: #r" + hour + " ʱ " + minute + " �� " + second + " ��\r\n";
                cm.sendOk(yhms);
                cm.dispose();
			} else if (selection == 3){
				if (cm.getPlayerCount(922010100) <= 0 && cm.getPlayerCount(922010200) <= 0 && cm.getPlayerCount(922010201) <= 0 && cm.getPlayerCount(922010300) <= 0 && cm.getPlayerCount(922010400) <= 0 && cm.getPlayerCount(922010401) <= 0 && cm.getPlayerCount(922010402) <= 0 && cm.getPlayerCount(922010403) <= 0 && cm.getPlayerCount(922010404) <= 0 && cm.getPlayerCount(922010405) <= 0 && cm.getPlayerCount(922010500) <= 0 && cm.getPlayerCount(922010501) <= 0 && cm.getPlayerCount(922010502) <= 0 && cm.getPlayerCount(922010503) <= 0 && cm.getPlayerCount(922010504) <= 0 && cm.getPlayerCount(922010505) <= 0 && cm.getPlayerCount(922010506) <= 0 && cm.getPlayerCount(922010600) <= 0 && cm.getPlayerCount(922010700) <= 0 && cm.getPlayerCount(922010800) <= 0 && cm.getPlayerCount(922010900) <= 0 && cm.getPlayerCount(922011000) <= 0 && cm.getPlayerCount(922011100) <= 0) {
					cm.getEventManager("LudiPQ").setProperty("LPQOpen", "true");
					cm.sendOk("���óɹ���");
					cm.dispose();
				}else {
					cm.sendOk("�ø����ж������ڽ������޷����ã�");
					cm.dispose();
				}
			} else if (selection == 4){
            cm.openNpc(9310084, 23);
					//cm.sendOk("��");
                //cm.dispose();
				
            }
        }
    }
}



function getPartySize() {
    if (cm.getPlayer().getParty() == null)
        return 0;
    return (cm.getPlayer().getParty().getMembers().size());

}

function isLeader() {
    if (cm.getParty() == null)
        return false;
    return cm.isLeader();
}

function checkPartySize() {
    var size = 0;
    if (cm.getPlayer().getParty() == null)
        size = 0;
    else
        size = (cm.getPlayer().getParty().getMembers().size());
    if (size < minplayers || size > maxplayers)
        return false;
    return true;
}

function checkPartyLevels() {
    var pass = true;
    var party = cm.getPlayer().getParty().getMembers();
    if (cm.getPlayer().getParty() == null)
        pass = false;
    else {
        for (var i = 0; i < party.size() && pass; i++) {
            if ((party.get(i).getLevel() < minlvl) || (party.get(i).getLevel() > maxlvl) || (party.get(i).getMapId() != cm.getMapId()))
                pass = false;

        }
    }
    return pass;
}

function hasParty() {
    if (cm.getPlayer().getParty() == null)
        return false;
    return true;
}

function Property() {
    var em = cm.getEventManager(eventname);
    if (em.getProperty(qblog) == "false") {
    return false;
    return true;
}
}
function zdLog() {
    var party = cm.getPlayer().getParty().getMembers();
    var it = party.iterator();
    var cPlayer = it.next();
    var zd = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
    if (zd.getBossLog(Log) >= maxenter)
        return false;
    return true;
}

