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
		cm.sendNext("���б����������û������");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		cm.sendYesNo("��á�������ͷ����ƱԱ�������뿪��������ǰ�����������𣿴����￪�����ص���#b���֮��վ#k�ķ�ͧ��#b����Ϊ��׼��ÿ15���ӳ���һ��#k�����ǲ���ȥ��Ҫȥ��");
	} else if (status == 1) {
		cm.sendNext("�����ȥ���֮�ǣ�����ұߵ� #b��ƱԱ#k ˵����");
		cm.dispose();
		}
	}
}