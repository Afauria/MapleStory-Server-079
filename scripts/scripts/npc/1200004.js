importPackage(net.sf.odinms.client);
var menu = new Array("���","�����","�����","���");
var cost = new Array(80,80,80,80);
var EnToJ;
var display = "";
var btwmsg;
var method;

function start() {
	status = -1;
	EnToJ = cm.getEventManager("EnToJ");
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if(mode == -1) {
		cm.dispose();
		return;
	} else {
		if(mode == 0 && status == 0) {
			cm.dispose();
			return;
		} else if(mode == 0) {
			cm.sendNext("����ȥ�����ˣ�");
			cm.dispose();
			return;
		}
		status++;
		if (status == 0) {
			for(var i=0; i < menu.length; i++) {
				if(cm.getChar().getMapId() == 140020300 && i < 1) {
					display += "\r\n#L"+i+"#�ƶ�ʱ���Լ��#b1����#k��������#b("+cost[i]+")#k��ҡ�";
				}
			}
			if(cm.getChar().getMapId() == 104000000) {
				cm.sendYesNo("���װ������ѣ���Ҫȥ#b���#k�����ҿ���ֱ�����㵽��ѩ����#b���#k�����������ҲҪ��#b800���#k��Ʊ��Ҫȥ�����");
			} else {
				cm.sendSimple("��Ҫ�뿪��������⴬���Ե���������#b�����#k��������#b���80#kҪ��Ǯ��Ʊ�ˡ�Ҫȥ������𣿴��1�������Ҿ͵��ˡ�\r\n" + display);
			}
		} else if(status == 1) {
			if(selection == 2) {
				cm.sendYesNo("��ȷ��Ҫȥ #b"+menu[2]+"#k �� ��ô��Ҫ������ #b"+cost[2]+" ���#k��");
			} else {
				if(cm.getMeso() < cost[selection]) {
					cm.sendNext("��ȷ�������㹻�Ľ�ң�");
					cm.dispose();
				} else {
					if(cm.getChar().getMapId() == 104000000) {
						cm.gainMeso(-800);
						cm.warpBack(200090060, 140020300, 80);
						cm.dispose();
					} else {
						if(EnToJ.getProperty("isRiding").equals("false")) {
							cm.gainMeso(-cost[selection]);
							EnToJ.newInstance("EnToJ");
							EnToJ.setProperty("myRide",selection);
							EnToJ.getInstance("EnToJ").registerPlayer(cm.getChar());
							cm.dispose();
						} else {
							cm.sendOk("ϵͳ������������Ƶ�������ϴ���");
							cm.dispose();
						}
					}
				}
			}
		} else if(status == 2) {
			if(cm.getMeso() < cost[2]) {
				cm.sendNext("��ȷ�������㹻�Ľ�ң�");
				cm.dispose();
			} else {
				cm.sendOk("ϵͳ������������Ƶ�������ϴ���");
				cm.dispose();
			}
		}
	}
}
