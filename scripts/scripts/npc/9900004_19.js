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
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "#L9##dLv10.Ӣ��ѧԺ����#l\r\n\r\n"//3
            text += "#L1##dLv10.������Ӹ���#l\r\n\r\n"//3
            text += "#L2##dLv21.������Ӹ���#l\r\n\r\n"//3
            text += "#L10##dLv30.������껪(��ӶԿ�����.���2V2)#l\r\n\r\n"//3
            text += "#L3##dLv35.�����Ӹ���#l\r\n\r\n"//3
            text += "#L4##dLv51.�����Ӹ���#l\r\n\r\n"//3
            text += "#L6##dLv55.������Ӹ���#l\r\n\r\n"//3
            text += "#L5##dLv70.������Ӹ���#l\r\n\r\n"//3
            text += "#L7##dLv100.����ŷ������Ҷ#l\r\n\r\n"//3
            text += "#L11##dLv120.ǧ���������ż���(��Ʒ���γ���.)#l\r\n\r\n"//3
            text += "#L12##dLv130.��żʦBOSS��ս(�ر��������ɫ�����.)#l\r\n\r\n"//3
            text += "#L8##d��ַ����Կ�ս(���帱��)#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) { //������Ӹ���
            cm.warp(100000200);
            cm.dispose();
            //cm.openNpc(1012112, 0);
        } else if (selection == 2) {  //������Ӹ���
            cm.warp(103000000);
            cm.dispose();
            //cm.openNpc(9020000, 0);
        } else if (selection == 3) { //�����Ӹ���
            cm.warp(221024500);
            cm.dispose();
            //cm.openNpc(2040034, 0);
        } else if (selection == 4) {//�����Ӹ���
            cm.warp(200080101);
            cm.dispose();
            //cm.openNpc(2013000, 0);
        } else if (selection == 5) {//������Ӹ���
            cm.warp(300030100);
            cm.dispose();
            //cm.openNpc(2133000, 0);
        } else if (selection == 6) {//������Ӹ���
            cm.warp(251010404);
            cm.dispose();
            //cm.openNpc(2094000, 0);
        } else if (selection == 7) {//����ŷ������Ҷ��Ӹ���
            cm.warp(261000011);
            cm.dispose();
        } else if (selection == 8) {//��ַ����Կ�ս
            cm.warp(101030104);
            cm.dispose();
        } else if (selection == 9) {//Ӣ��ѧԺ����
            cm.warp(702090400);
            cm.dispose();
            //cm.openNpc(9310057, 0);
        } else if (selection == 11) {//Ӣ��ѧԺ����
            cm.warp(541020700);
            cm.dispose();
            //cm.openNpc(9310057, 0);
        } else if (selection == 12) {//Ӣ��ѧԺ����
            cm.warp(910510001);
            cm.dispose();
            //cm.openNpc(9310057, 0);
        } else if (selection == 10) {//Ӣ��ѧԺ����
            cm.warp(980000000);
            cm.dispose();
            //cm.openNpc(9310057, 0);
        }
    }
}


