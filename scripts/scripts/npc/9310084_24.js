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
			//��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
            text += "#e#r����������ŷ����Ҷ�������߶һ�����\r\n�������#v4001159#,#v4001160#��#v4170017#�Ϳ��Խ��жһ�������ӵ�������ֿ��������ɽ��кϳɡ�\r\n\r\n"//3
            text += "#L2##e#d#v4001159#x20 + #v4170017#x20 �һ� #i1122116:# ����ŷ�ĵ�׹.#l\r\n"//3
            text += "#L3##e#d#v4001160#x20 + #v4170017#x20 �һ� #i1122117:# ����Ҷ�ĵ�׹.#l\r\n"//3
            text += "#L4##e#d#v1122116#x 1 + #v1122117#x 1 �ϳ� #i1122118:#���㰮��֤��.#l\r\n"//3
			text += "#L5##e#d#v4170017#x 10 �ϳ� #i4030006:#����˹����.#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9000017, 70);
        } else if (selection == 6) {
		cm.openNpc(9310059, 5);
        } else if (selection == 2) {
		cm.openNpc(9310084, 241);
        } else if (selection == 3) {
		cm.openNpc(9310084, 242);
        } else if (selection == 4) {
		cm.openNpc(9310084, 243);
	    } else if (selection == 5) {
                 if (!cm.haveItem(4170017,10)) {
    cm.sendOk("�����#v4170017##z4170017#*10");
         cm.dispose();
                  } else if (cm.haveItem(4170017,10)) {
cm.gainItem(4030006,1);
cm.gainItem(4170017,-10);

         cm.dispose();
		  
	}
    }
}}


