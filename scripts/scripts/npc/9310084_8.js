/**
 * @��������������������
 * @ÿ��ǩ������ȡ��Ʒ npc
 * @npcName��ð�յ���ӪԱ
 * @npcID��   9900004
 **/
importPackage(net.sf.cherry.client);
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
            var txt1 = "#L1#" + ��ɫ��ͷ + "#d#v4002000# 100������ţ��Ʊ�һ� #v1032058#" + ����new + "\r\n\r\n";
            var txt2 = "#L2#" + ��ɫ��ͷ + "#d#v4002000# 10������ţ��Ʊ�һ� #v1112446#" + ����new + "\r\n\r\n";
            var txt3 = "#L3#" + ��ɫ��ͷ + "#d#v4002000# 1������ţ��Ʊ�һ� #v4001322#x2" + ����new + "#l";
         //   var txt4 = "#L4#" + ��ɫ��ͷ + "#d��ˮ����Ʊ�һ�" + ����new + "\r\n\r\n";
           // var txt5 = "#L5##d" + ��ɫ��ͷ + "��𱭶һ���" + ��̾�� + "#l"
            //var txt6 = "#L4##d" + ��ɫ��ͷ + "����������֪" + ����new + "\r\n\r\n"
            //var txt7 = "#L7##d" + ��ɫ��ͷ + "���תְϵͳ"
            //var txt8 = "  #L8##d" + ��ɫ��ͷ + "�����׹�һ�\r\n\r\n"
            //var txt9 = "#L9##d" + ��ɫ��ͷ + "���ܵ����̵�  "
            //var txt10 = "#L3##d"+��ɫ��ͷ+"��פ������.����GM��ȡ����#l"
            cm.sendSimple("��ӭ����#b����ð�յ�#k��\r\n\r\n" + txt1 + "" + txt2 + "" + txt3 + "");

        } else if (status == 1) {
            if (selection == 1) { //���๦��
			if(cm.haveItem(4002000, 100)){
                        cm.gainItem(4002000,-100);
			var ii = net.sf.cherry.server.MapleItemInformationProvider.getInstance();
			var type = ii.getInventoryType(1032058);	
			var toDrop = ii.randomizeStats(ii.getEquipById(1032058)).copy();	
			toDrop.setLuk(5);
			toDrop.setInt(5);
			toDrop.setDex(5);
			toDrop.setStr(5);
			toDrop.setHp(150);
			toDrop.setMp(150);
			toDrop.setWdef(35);
			toDrop.setMdef(35);
			cm.getPlayer().getInventory(type).addItem(toDrop);
			cm.getC().getSession().write(net.sf.cherry.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
                     cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"[" + cm.getPlayer().getName() + "]" + " : " + " ��100��[����ţ��Ʊ]�һ���һ��[������ԱC�������Ż�]��",true).getBytes()); 		
                   cm.sendOk("�һ��ɹ���");
                   cm.dispose();
			}else{
			cm.sendOk("��û��100��#v4002000#�޷��һ���");
			cm.dispose();
			}
            } else if (selection == 2) { //���๦��
			if(cm.haveItem(4002000, 10)){
                        cm.gainItem(4002000,-10);
			cm.gainItem(1112446,1);
                   cm.sendOk("�һ��ɹ���");
                   cm.dispose();
			}else{
			cm.sendOk("��û��1��#v4002000#�޷��һ���");
			cm.dispose();
			}
            } else if (selection == 3) {//ÿ���ͽ�����
			if(cm.haveItem(4002000, 1)){ 
                        cm.gainItem(4002000,-1);
			cm.gainItem(4001322,2);
                   cm.sendOk("�һ��ɹ���");
                   cm.dispose();
			}else{
			cm.sendOk("��û��5��#v4002000#�޷��һ���");
			cm.dispose();
			}
            } else if (selection == 4) { //���๦��
                cm.openNpc(9310057, 0);
            } else if (selection == 5) { //���๦��
                cm.openNpc(9310057, 0);
            } else if (selection == 6) { //װ���ֽ�ϵͳ
                cm.openNpc(9900004, 5);
            } else if (selection == 7) { //����רְ
                cm.openNpc(9900002, 0);
            } else if (selection == 8) { //ѧϰ���켼��
              // cm.teachSkill(11110005,0,20);
              // cm.teachSkill(15111004,0,20);
		/*if(cm.haveItem(4001038,1)&&cm.getMeso() >= 100000){
                    cm.teachSkill(1007,1,1);
                    cm.teachSkill(10001007,1,1);
                    cm.teachSkill(20001007,1,1);
                    cm.gainMeso(-100000);
                    cm.gainItem(4001038,-1);
                     cm.sendOk("ѧϰ�ɹ�!");
                     cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"[" + cm.getPlayer().getName() + "]" + " : " + " ѧϰ�˶��켼�ܣ�",true).getBytes()); 
                    cm.dispose();
                }else{
                    cm.sendOk("ѧϰ���켼����Ҫ����һ��#v4001038#.��10��ð�ձҡ�");
                    cm.dispose();
                }*/
                //cm.sendOk("���ڿ��ţ������ڴ���");
                //cm.dispose();
		
                cm.openNpc(9900004, 1); //����
            } else if (selection == 9) { //����̵�
                if (cm.getMeso() >= 2000) {
                    cm.openShop(603);
                    cm.gainMeso(-2000);
                    cm.dispose();
                } else {
                    cm.sendOk("ð�ձ�2000�ſ��Դ�Զ���̵ꡣ");
                    cm.dispose();
                }
            } else if (selection == 10) { //Ԫ������npc
                cm.openNpc(9900004, 88); //����
            } else if (selection == 11) { //���ֻ����
                cm.openNpc(9900004, 1);//
            } else if (selection == 12) { //��Ծ��ϵͳ
                cm.openNpc(9100106, 0); //�ձ��߼����ְٱ���
            } else if (selection == 13) { //�����
                cm.openNpc(9000018, 0); //�����
            }
        }
    }
}
