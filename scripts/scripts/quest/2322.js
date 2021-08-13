/* ===========================================================
 Resonance
 NPC Name: 		Minister of Home Affairs
 Map(s): 		Mushroom Castle: Corner of Mushroom Forest(106020000)
 Description: 	Quest -  Over the Castle Wall (2)
 =============================================================
 Version 1.0 - Script Done.(18/7/2010)
 =============================================================
 */

importPackage(Packages.client);

var status = -1;

function start(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (type == 1 && mode == 0)
            status -= 2;
        else {
            qm.sendNext("��ģ����б�İ취���Դ����Ǳ�������㲻֪���취���Ǿ������Ұɡ�.");
            qm.dispose();
            return;
        }
    }
    if (status == 0)
        qm.sendYesNo("�����Ҹ�����ģ������ϰ����ܳ�Ϊ��ף�����ɡ� ������Ϊ���ǵ�Ģ�������Ǳ���ȫ�ܾ��κ��˽������ǵ����������������������һ�㡣��...��취��ȥ�����ܡ����ȵ���һ�³Ǳ�����ǽ��");
    if (status == 1)
        qm.sendNext("�߹�Ģ���֣����㵽��#rѡ����ѵĵ�·#k.���Ǳ���ȥ��ף�����.");
    if (status == 2) {
        //qm.forceStartQuest();
        //qm.forceStartQuest(2322, "1");
        qm.gainExp(11000);
        qm.sendOk("������������кܺ�.");
        qm.forceCompleteQuest();
        qm.dispose();
    }
}

function end(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (type == 1 && mode == 0)
            status -= 2;
        else {
            qm.dispose();
            return;
        }
    }
    if (status == 0)
        qm.sendOk("�ţ��ҿ���������������ȫ�ر�����ں�һ�С�.");
    if (status == 1) {
        qm.gainExp(11000);
        qm.sendOk("������������кܺ�.");
        qm.forceCompleteQuest();
        qm.dispose();
    }
}
	