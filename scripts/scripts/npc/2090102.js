/* Romi
	Orbis Skin Change.
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
	cm.sendNext("�ˣ�����#p2090102# ������� #b#t5153006##k �ҿ��԰�����");
    } else if (status == 1) {
	cm.askAvatar("ѡ��һ����Ҫ�ġ�", skin);
    } else if (status == 2){
	if (cm.setAvatar(5153006, skin[selection]) == 1) {
	    cm.sendOk("����!");
	} else {
	    cm.sendOk("�����û��#b#t5153006##k");
	}
	cm.dispose();
    }
}