var status = 0;
var skin = Array(0, 1, 2, 3, 4);
var price;

function start() {
    cm.sendSimple("��ӭ����101�����������!������#p9330054# ����~�һ� �Ƿ�����ҪȾ��Ƥ����?? �����ҵĽ���Ƥ��??  ������� #b#t5153008##k, �Ϳ�������Ⱦ���뵽��Ƥ��~~~\r\n\#L2#���Ѿ���һ��#t5153008#!#l");
}

function action(mode, type, selection) {
    if (mode < 1)
        cm.dispose();
    else {
        status++;
        if (status == 1)
            cm.sendStyle("ѡһ����Ҫ�ķ��.", skin);
        else {
            if (cm.haveItem(5153008)){
                cm.gainItem(5153008, -1);
                cm.setSkin(selection);
                cm.sendOk("����!");
            } else
                cm.sendOk("��ò��û��#b#t5153008##k..");
            cm.dispose();
        }
    }
}
