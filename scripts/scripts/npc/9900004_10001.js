importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
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
            var a1 = "  #L1#" + ������ͷ + " ���й�������#v1082147##l";
			var a2 = "#L2#" + ������ͷ + " ���������ϸ\r\n\r\n";



            cm.sendSimple("#r�� �� �� �� �� �� �� �� �� �� �� �� �� �� �� ��#k\r\n\r\n\r\n" + a1 + "" + a2 + "");
        } else if (status == 1) {
		
	    if (cm.getInventory(1).isFull()){
                        cm.sendOk("#b�뱣֤װ����λ������2���ո�,�����޷��ϳ�.");
                        cm.dispose();
			return;
            }
            if (selection == 1) {//��
				if(cm.haveItem(4000001,400) && cm.haveItem(4000015,400) && cm.haveItem(4000012,400)){
					cm.gainItem(4000001,-400);
					cm.gainItem(4000015,-400);
					cm.gainItem(4000012,-400);

                        var ii = MapleItemInformationProvider.getInstance();
                        var type = ii.getInventoryType(1082147);	
                        var toDrop = ii.randomizeStats(ii.getEquipById(1082147)).copy();
                        //var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000);//��ǰ���1 ����1�졣�Լ���
                        //toDrop.setExpiration(temptime);
                        toDrop.setFlag(20);//1��ӡ//2���Խ���//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
						toDrop.setStr(10);
						toDrop.setDex(10);
						toDrop.setInt(10);
						toDrop.setLuk(10);
                        toDrop.setWatk(10);
						toDrop.setMatk(10);
						toDrop.setSpeed(10);
						toDrop.setHp(500);
						toDrop.setMp(500);
                        cm.getPlayer().getInventory(type).addItem(toDrop);
                        cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
					cm.worldMessage(6,"��� "+cm.getName()+" ������иŬ�������ڶ�������й������ס�");
					cm.worldMessage(1,"�������\r\n�ѷ��뱳��");

					cm.dispose();
				}else{
				cm.worldMessage(1,"���ϲ������������ڶ�����");
				cm.dispose();
				}
				   
        }else if (selection == 2) {//��
			    cm.sendOk("#b ��Ҫ���²��ϣ�\r\n\r\n\r\n#v4000001#+#v4000015#+#v4000012#��400��");
				cm.dispose();
            }
        }
    }
}
