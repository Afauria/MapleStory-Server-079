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
			text += "\t\t\t  #e��ӭ����#rð�յ����� #k!#n\r\n"
            text += "#b�ر�ע�⣺�����뿴Ⱥ�ļ�������ָ��˵�����������Ҫ\r\n\r\n"//3
			text += "#r1.���������࣬���ڸ��»���ʺ�������ˣ#l\r\n\r\n"//3
            text += "#r2.������ֹʹ����ң������ʺţ�������ͻᱻ���÷���������±�������ע�⣡#l\r\n\r\n"//3
            text += "#r3.��������Ѿ����ŵ����ı�������ע����գ�#l\r\n\r\n"//3
            text += "#r4.������ɫ�淨��ȥ�����г����#l\r\n\r\n"//3
            text += "#r5.�޸�����+����+���ֹ��ܣ����Ӵ�����ɫ���ܣ�PKϵͳ��ȫ��Ľ���#l\r\n\r\n"//3
            text += "#r6.�����˺�ֻ��������Ϸ���溰����Ⱥ�﷢������Ϣ��һ��TȺ���ҷ���˺ţ���˵��������#l\r\n\r\n"//3
           // text += "#r7.��ӭ����Maplestory����Ⱥһ�����ۣ�#l\r\n\r\n"//3
            cm.sendOk(text);
			cm.����(3,"��ӭ����[" + cm.getPlayer().getName() + "]�������ף�ذɣ�����~����һ�����˼���Ի�ð�յ�~��");
            //cm.����(3,"��ӭ[" + cm.getPlayer().getName() + "]������зð�յ�~���������һ��ף�ذɣ�����");
		    cm.dispose();
		}
    }
}


