function action(mode, type, selection) {
    if (cm.haveItem(1002971,1) && cm.canHold(1052202,1) && !cm.haveItem(1052202,1)) {
	cm.gainItem(1052202,1);
    } else {
    	cm.sendOk ("�������ҵķۺ�ɫ��ñ�Ӻ�һ���ղۣ��㽫��õķۺ춹���壬����㲻�Ѿ�ӵ��������");
    }
    cm.safeDispose();
}