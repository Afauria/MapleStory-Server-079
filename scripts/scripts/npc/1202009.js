var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
        cm.sendOk("�������𣿣�û�µĻ��Ͻ��뿪����ɣ�");
	cm.dispose();
    }
}