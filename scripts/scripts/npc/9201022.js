/*
	NPC Name: 		Hera
	Map(s): 		Towns
	Description: 		Wedding Village Entrance
*/

var status = -1;

function start() {
    cm.sendSimple("��~�������Ǹ������ӣ�������̫������~���㲻��������������˰�����������İ��ⶼ���ʵ���������~�� \n\r #b#L0# �����ȥ���С��.#l \r\n #L1#���Ѿ����������Ҫ������֮��~");
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        switch (selection) {
            case 0:
		cm.sendNext("Ŷ����ô���õ�һ�죡��������Ƕ�ô�����á�����������ƺ��ǳ������ģ��������ҿ��Դ�������ܵ����ľ�����˻���!");
                break;
            case 1:
	        var marr = cm.getQuestRecord(160001);
	        var data = marr.getCustomData();
	        if (data == null) {
		    marr.setCustomData("0");
	            data = "0";
	        }
		if (cm.getPlayer().getMarriageId() <= 0 || !data.equals("3")) {
                    cm.sendOk("�Һܱ�Ǹ�������Ҫ�õ�������ӵĻ����Ƚ��~~");
		} else if (cm.canHold(3012004,1) && !cm.haveItem(3012004,1) && !cm.isQuestFinished(52013)) {
		    cm.gainItem(3012004,1);
			cm.forceCompleteQuest(52013);
			cm.sendOk("�����һ��ϲ������ɣ�������ֻ��һ��!");
		} else {
		    cm.sendOk("��ȷ���Ƿ�װ�������˻������Ѿ�����ͬ��������... �����������....");
		}
                cm.dispose();
                break;
        }
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
