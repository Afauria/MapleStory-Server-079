var status = 0;
var eventname = "XfcPQ";
//������� �����%60���� ��������Ӵ��롣 
//����������var itemList = Array(2000004,2000003);
//ע�������Ӷ�������Ʒ��ʱ������,����
var itemList = new Array(2043001,2043201,2043101,2043301,2043701,2043801,2040801,2040804,2040817,2044001,2044101,2044201,2044301,2044401,2044501,2044601,2044701,2044801,2044901,2370000,2370001,2370002,2370003,2370004,2370005,2370006,2370007,2370008,2370009,2370010,2370011,2370012); //�������2��
var randNum = Math.floor(Math.random() * (itemList.length + 1));

//���������Ʒ ָ����Ʒ���� ��ʱ����()
var randItem = itemList[randNum];
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (!cm.isLeader()) {
        cm.sendOk("�����ǵĶӳ�����˵����");
        cm.dispose();
        return;
    }
    if (mode == -1) {
        cm.dispose();
    } else if (mode == 0) {
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {
            var em = cm.getEventManager(eventname);
            var eim = cm.getPlayer().getEventInstance();
            party = eim.getPlayers();
            var mapid = cm.getPlayer().getMapId();
            if (mapid == 889100000) {
                cm.sendOk("��ӭ���� �Ҹ��� - (#r�������#k) ��#b1#k�׶�\r\n\r\n�������Ķ������ŵ�������,�Ѽ���50��ѩ�� Ȼ���߳������š�");
            } else if (mapid == 926100001) {
                cm.sendOk("1");
                cm.dispose()
            } else if (mapid == 889100100) {
                if (cm.haveItem(4031311, 50)) {
                    cm.gainItem(4031311, -50);
			cm.summonMob(9500317, 2000, 6000, 1);
                } else {
                    cm.sendOk("��ӭ���� �Ҹ��� - (#r�������#k) ��#b2#k�׶�\r\n\r\n׼����50��#z4031311# �ٻ�����BOSS ");
                }
                cm.dispose();
                
           
    
    
            }
        }
    }
	}