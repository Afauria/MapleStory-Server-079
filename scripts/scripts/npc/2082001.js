importPackage(net.sf.odinms.client);

var cb;
var ride;

function start() {
	status = -1;
	cb = cm.getEventManager("Cabin");
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if(mode == -1) {
		cm.dispose();
		return;
	} else {
		status++;
		if(mode == 0) {
			cm.sendNext("�㻹��ʲô����������û�������");
			cm.dispose();
			return;
		}
		if (status == 0) {
			if(cb.getProperty("entry").equals("true")) {
				cm.sendYesNo("�ǳ��ã����ϻ����㹻��λ�ã���׼���ÿ�ʼ�Ǵ������ǽ��������������У����ǲ�����Ǵ���");
			} else if(cb.getProperty("entry").equals("false") && cb.getProperty("docked").equals("true")) {
				cm.sendOk("���κ����Ѿ������������ĵȴ���һ�κ��ࡣ");
				cm.dispose();
			} else {
				cm.sendOk("����ǰ1���Ӿ�ֹͣ�ÿ��˵Ǵ��ˣ���ע��վ̨ʱ�䡣����Ҳ��Ҫ����̫���ˣ�");
				cm.dispose();
			}
		} else if(status == 1) {
			cb.getInstance("Cabin").registerPlayer(cm.getChar());
			cm.dispose();
		}
	}
}