/* Romi
	Orbis Skin Change.
*/
var status = -1;
var skin = [0, 1, 2, 3, 4];

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }

    if (status == 0) {
	cm.sendNext("��, ����#p9310018# �������һ�� #b#t5153003##k, �ҿ��԰�������Ƥ����");
    } else if (status == 1) {
	cm.askAvatar("ѡ��һ������Ҫ���ݵ�Ƥ��~", skin);
    } else if (status == 2){
	if (cm.setAvatar(5153003, skin[selection]) == 1) {
	    cm.sendOk("����!");
	} else {
	    cm.sendOk("��ò��û��#b#t5153003##k..");
	}
	cm.safeDispose();
    }
}