/*
	NPC Name: 		Hera
	Map(s): 		Towns
	Description: 		Wedding Village Entrance
*/

var status = -1;

function start() {
    cm.sendSimple("��~�������Ǹ������ӣ�������̫������~���㲻��������������˰�����������İ��ⶼ���ʵ���������~�� \n\r #b#L0# ����Ҫȥ���С��.#l");
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
		cm.sendOk("���ȻҪ������ô�õĻ��᣿������ĺ���~���㲻���ǻ�û�����İ����˰ɣ�û����������İ����ˣ���ô�����ô��������Ϣ���������أ���");
        cm.dispose();
        return;
    }
    if (status == 0) {
		cm.sendNext("Ŷ����ô���õ�һ�죡��������Ƕ�ô�����á�����������ƺ��ǳ������ģ��������ҿ��Դ�������ܵ����ľ�����˻���!");
    } else if (status == 1) {
        cm.sendYesNo("������ȥ���Ļ����ׯ������һ���˲���ĵط����������޼��޵ġ��������޿��Խ�黹�У������������ʲô���������������һ������ķ�ʽ.");
    } else if (status == 2) {
        cm.sendNext("������һ����ȷ�ľ���������Ը��ܵ����ľ����ڻ���巢�ӵ����쾡�¡���������������Ŀ�ĵؽ���������Բ�Ҫ����.");
    } else if (status == 3) {
	   cm.saveLocation("AMORIA");
	   cm.warp(680000000, 0);
       cm.dispose();
		}
    }