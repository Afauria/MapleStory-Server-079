/* ===========================================================
 Resonance
 NPC Name: 		Minister of Home Affairs
 Map(s): 		Mushroom Castle: Corner of Mushroom Forest(106020000)
 Description: 	Quest -  Exploring Mushroom Forest(1)
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
            qm.sendNext("�벻Ҫ�����ǵ�Ģ������ʧȥ����.");
            qm.dispose();
            return;
        }
    }
    if (status == 0)
        qm.sendYesNo("Ϊ�˾ȹ������������ȥĢ����. ��������һ��ǿ������ϣ���ֹ�κ��˽���Ǳ���. ��Ϊ���ǵ������.");
    if (status == 1)
        qm.sendNext("����ܵ�Ģ��ɭ�ֵ����ϣ������������ڵĵط�����ȥ����С��. ����˵��������������Ƿ��ġ��־�Ĺ��.");
    if (status == 2) {
        //qm.forceStartQuest();
        //qm.forceStartQuest(2314,"1");
        qm.gainExp(8300);
        qm.sendOk("�������ˣ�������ȷʵ�����κ�һ�ֳ�������ϡ�ΰ��Ĺ���. ���û����İ��������ǾͲ���֪��������ô������.");
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
        qm.sendOk("�ҿ�,���Ѿ����׵�����Ģ���ֵ����ϡ�����ʲô���ӵģ�");
    if (status == 1) {
        qm.gainExp(8300);
        qm.sendOk("�������ˣ�������ȷʵ�����κ�һ�ֳ�������ϡ������ΰ���������û����İ��������ǾͲ���֪��������ô�����ˡ�");
        qm.forceCompleteQuest();
        qm.dispose();
    }
}
	