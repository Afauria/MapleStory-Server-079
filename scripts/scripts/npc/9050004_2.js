var ���� = "#fUI/StatusBar/BtChat/normal/0#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "#e#r�����ҽ�Ϊ����������ͻ��Ĺ���#k!#n\r\n\r\n"
            text += "#r1�����̻ÿ����У�ÿ���һ�ַ��ɽ�����һ�ֵ����̡�\r\n"//3
			text += "#r2�����̻ÿһ�ֵĽ�������ͬ������Ĳ���Ҳ��ͬ����ֵ��ײ��ܻ�÷ḻ����Ŷ��\r\n"//3��
			text += "#r3�����̻����ÿ�����㣬���λ֪����\r\n"//3
			text += "#r4�����̻�Ľ�ƷҲ�ڲ��ϵ����У���ҿ�ȥˢ�ְɣ�\r\n"//3

            cm.sendOk(text);
		    cm.dispose();
		}
    }
}


