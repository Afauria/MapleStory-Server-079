var status = 0;
//��������������һ�������ֵ
var types = new Array("װ����", "������", "������", "������", "������");

function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 3 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else {
            cm.dispose();
            return;
        }
        if (status == 0) {
            var a = "������Ҫ��գ�\r\n#b"
            for (var i = 0; i < types.length; i++) {//��ʾ���б�
                a += "\r\n#L" + i + "#" + types[ i ] + "";
            }
            cm.sendSimple(a);
        } else if (status == 1) {
            cm.deleteItem(selection + 1);//ִ������
            cm.sendOk("����ɹ�!");
            cm.dispose();
        }
    }
} 