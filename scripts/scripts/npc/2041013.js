/* Gina
	Ludibrium Skin Change.
*/
var status = -1;
var skin = Array(0, 1, 2, 3, 4);

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }
    if (status == 0) {
	cm.sendNext("ร���! ��ӭ������߳ǻ�������! ����Ҫ���Ը���?? ��ô����, ѩ�׵�Ƥ��?? ������� #b#t5153002##k, ����Ը�����̸̸����Ҫ�����ô��~");
    } else if (status == 1) {
	cm.askAvatar("ѡ��һ����Ҫ�ġ�",5153002, skin);
    } else if (status == 2){
	if (cm.setAvatar(5153002, skin[selection]) == 1) {
	    cm.sendOk("����!");
	} else {
	    cm.sendOk("�zò��û��#t5153002#");
	}
	cm.safeDispose();
    }
}