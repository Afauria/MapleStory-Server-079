
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += " \t\t\t  #e#d��ӭ����#r����ð�յ�#k#n\r\n"

            text += "\t\t\t#e#d��ǰ����ʱ�䣺" + cm.getGamePoints() + "���ӣ�#k#n\r\n"

            text += "\t#e#d�˻���ʣ����" + cm.getNX(1) + "#k\tʣ����þ�" + cm.getNX(2) + "#k#n\r\n"

            text += " #L1#��ȡ��鸣��#l\r\n\r\n"

            cm.sendSimple(text);
        } else if (selection == 1) {//ÿ�������ȡ����
            if (cm.getPlayer().getOneTimeLog("LoveChair") > 0) {
                cm.sendOk("���Ѿ���ȡ����");
				cm.dispose();
            } else {
                cm.getPlayer().setOneTimeLog("LoveChair");
                cm.gainItem(3012003, 1);
                cm.gainItem(1112320, 5, 5, 5, 5, 200, 200, 5, 5, 10, 10, 10, 10, 10, 10);
                cm.����(3, "��ң�[" + cm.getPlayer().getName() + "]Ϊ��/�������´����˽���ָ����������볡��");
                cm.sendOk("#v" + 3012003 + "#��#v1112804#�Ѿ��ŵ�����ı��������µ�½�󣬾��н�龭���ˣ�");
                cm.dispose();
            }
        }
    }
}
