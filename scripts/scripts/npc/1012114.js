/* global cm */

var status = -1;
var random = java.lang.Math.floor(Math.random() * 9 + 1);
var random1 = java.lang.Math.floor(Math.random() * 10 + 1);
var random2 = java.lang.Math.floor(Math.random() * 10 + 1);


function action(mode, type, selection) {
   
    //var party = em.getPlayers();
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendSimple("��ã�����С�ϻ� #b�˶�#k...#b\r\n#L1#�鿴˵��#l\r\n#L2#�뿪��ͼ#l\r\n#L0#�Ҹ�����������!#l");
    } else if (status == 1) {
        if (selection == 0) {
	 var eim = cm.getEventInstance();
            if (!cm.isLeader()) {
                cm.sendOk("��ӳ�����̸��.");
            } else {
                if (cm.haveItem(4001101, 20)) {
                    cm.removeAll(4001101);
                    cm.������Ӿ���ӳ�˫��(20000, eim.getPlayers()); //����
                   // cm.�������Ʒ(4002001, +1);//����ţ��Ʊ
                   // cm.�������Ʒ(4031311, +1);//ѩ��
                  //  cm.�������Ʒ(4031456, +1);//������
					cm.�������Ʒ(4170016, 1);//
					cm.�������Ʒ(2022468, 2);//
                    cm.endPartyQuest(1200);
                    cm.warpParty(910010300);
                    cm.����(3, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ��������ͨ�ء�������� - ���������ý�����");
                    cm.dispose();
                } else {
                    cm.sendNext("��û�д��� #r20#k ����������... ");
                }
            }
        } else if (selection == 1) {
            cm.sendNext("�����ؿ�����������6������ȫ������ʱ���½����֡������»��ٻ�����С���ӣ�ÿ��һ��ʱ������С���ӻᵷ����⣬�ռ� #r20 #k�����󽻸��ӳ�Ȼ�󽻸�NPC������ͨ�ء�\r\n#rע�����������ӵ�����ʱ�򱣻������������ӱ����﹥��������������ʧ��.");
        } else if (selection == 2) {
            cm.removeAll(4001095);
            cm.removeAll(4001096);
            cm.removeAll(4001097);
            cm.removeAll(4001098);
            cm.removeAll(4001099);
            cm.removeAll(4001100);
            cm.warp(100000200);
        }
        cm.dispose();
    }
}