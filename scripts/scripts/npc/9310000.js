var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
	if (status >= 0 && mode == 0) {
		cm.sendNext("�������Ϻ���̲���ѵ��㲻��ȥ���������ź���");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		cm.sendYesNo("�ˣ����Ǻ��ռ�ʻԱ���Ҹ����ʻ�����Ϻ��ķɻ�����������ķ��У��ҵļ�ʻ�����Ѿ����˲��á�������� #b2000 ���#k. �ҾͿ��Դ���ȥ������ #b�Ϻ���̲#k ��ô����Ҫȥ��");
	} else if (status == 1) {
		if (cm.getMeso() < 2000) {
			cm.sendNext("��ȷ������ #b2000 ���#k�� ���û�У��ҿɲ����������ȥ��");
			cm.dispose();
		} else {
			cm.gainMeso(-2000);
			cm.warp(701000000);
			cm.dispose();
			}		
		}
	}
}