var map;
var cost;
var location;
var mapname;
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.sendNext("��......����ɡ����ǳ��⳵��˾��ֵ�ķ�������Զ�����ڣ�");
	cm.dispose();
	return;
    }

    if (status == 0) {
	cm.sendYesNo("��ã��ҽ�����㴫�͵��Ϻ���̲����Ƿ������\r\n#r��Ҫ����1000���Ŷ");
    } else if (status == 1) {
	if (cm.getMeso() < 1000) {
	    cm.sendNext("�㿴����ûɶǮ����֧��,�ܱ�Ǹ���ǲ�����ؤ���,����!!!");
	    cm.dispose();
	} else {
	    cm.gainMeso(-1000);
	    cm.warp(701010320, 0);
	    cm.dispose();
	}
    }
}