/* 	Xan
	Lian Hua Hua Skin Care
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
	cm.sendNext("�ˣ���ӭ�����¼��£�����#p9270025# �������#b#t5153010##k �ҾͿ�����Ѱ�������һ�Ρ�");
    } else if (status == 1){
	if (cm.setRandomAvatar(5153010, skin) == 1) {
	    cm.sendOk("�������µ����Ͱɣ�");
	} else {
	    cm.sendOk("����û��#b#t5153010##k �����Ҳ��ܰ�æ��");
	}
	cm.safeDispose();
    }
}