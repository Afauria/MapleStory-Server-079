
var status = 0;
var beauty = 0;
var price = 3000000;
var facenew = Array();

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("���,���ǲ��ҽ��!������Ҫ�����۾���ɫ��,�ҿ��԰������Ŷ��ô��Ҫ��ʲô��\r\n\#L2##b�ı��۾���ɫ#l");
        } else if (status == 1) {
            if (selection == 1) {
                cm.dispose();
            } else if (selection == 2) {
                facenew = Array();
                if (cm.getChar().getGender() == 0) {
                    var current = cm.getChar().getFace() % 100 + 20000;
                } else {
                    var current = cm.getChar().getFace() % 100 + 21000;
                }
                colors = Array();
                colors = Array(current, current + 100, current + 200, current + 300, current + 400, current + 500, current + 600, current + 700);
                cm.sendStyle("��ѡ����ϲ������ɫ.", 0, colors);
            }
        } else if (status == 2) {
            cm.setFace(colors[selection]);
            cm.sendOk("����,���������һ���ϲ�����������!");
            cm.dispose();

        }
    }
}
