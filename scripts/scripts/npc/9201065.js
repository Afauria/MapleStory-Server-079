/* Miranda
	NLC Skin Change.
*/
var status = -1;
var skin = [0, 1, 2, 3, 4];

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }

    if (status == 0) {
	cm.sendNext("�ˣ�����#p9201065# �������5153009 ���ҿ��԰�����~");
    } else if (status == 1) {
	cm.askAvatar("ѡ��һ��ϲ����", skin);
    } else if (status == 2){
	if (cm.setAvatar(5153009, skin[selection]) == 1) {
	    cm.sendOk("���ܣ�");
	} else {
	    cm.sendOk("�z...ò��û��#b#t5153009##k");
	}

	cm.dispose();
    }
}