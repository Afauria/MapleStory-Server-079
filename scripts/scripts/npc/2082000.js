var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("�������֮�ǵķ�ͧÿ#b10����#kһ�ࡣ�������Ҫȥ#b���֮��#k�Ļ��������ҿ��԰����㣡��ô����Ҫ��Ҫȥ���֮�ǣ�");
		} else if (status == 1) {
			cm.sendOk("�ܺã���Ϊð�յĸĸ���ڳ�����ͧ�Ѿ�������Ҫ��Ʊ�ˡ������ֱ��ȥ��#b����Ա ����#kǰ�����֮�ǡ�");
		} else if (status == 2) {
			cm.dispose();
		}
	}
}