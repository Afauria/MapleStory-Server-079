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
            text += "#e#r��ã�������ð�յ��߼��ܻ�:.\r\n�ͻ������кö�ö໷��Ҳ���㲻һ���ܹ����꣬���������Ƕ���Ŷ��ÿһ�����з����.\r\n"//3
			text += "#L2#�����˽�#b���̹���#k.\r\n\r\n"//3
			text += "#L1##e#d#v4031149# ��һ��.\r\n\r\n"//3
	        text += "#L3##e#d#v4031149# �ڶ���.\r\n\r\n"//3
			text += "#L4##e#d#v4031149# ������.\r\n\r\n"//3
			text += "#L5##e#d#v4031149# ������.\r\n\r\n"//3
			text += "#L6##e#d#v4031149# ������.\r\n\r\n"//3
			text += "#L7##e#d#v4031149# ������.\r\n\r\n"//3
			text += "#L8##e#d#v4031149# ������.\r\n\r\n"//3
			text += "#L9##e#d#v4031149# �ڰ���.\r\n\r\n"//3
			text += "#L10##e#d#v4031149# �ھ���.\r\n\r\n"//3
			text += "#L11##e#d#v4031149# ��ʮ��.\r\n\r\n"//3
            //text += "#L2##e#d#v4031017# �������һ��̶�����.#l\r\n\r\n"//3
            //text += "#L3##e#d#v04032226# ÿ�ջ�����һ���1Сʱ/1��.ʤ�����ɣ�#l\r\n"//3
            //text += "#L4##e#d#v1382057#�������������#l\r\n"//3
            //text += "#L5##e#d#v1402046#������ڤ������#l\r\n"//3
            //text += "#L6##e#d#v1432047#������ʥǹ����#l\r\n"//3
            //text += "#L7##e#d#v1442063#������������#l\r\n"//3
            //text += "#L8##e#d#v1452057#���㾪�繭����#l\r\n"//3
            //text += "#L9##e#d#v1462050#����ڤ��������#l\r\n"//3
            //text += "#L10##e#d#v1472068#����󱯸�����#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9050004, 1);
        } else if (selection == 2) {
		cm.openNpc(9050004, 2);
        } else if (selection == 3) {
		cm.openNpc(9050004, 5);
        } else if (selection == 4) {
		cm.openNpc(9050004, 6);
        } else if (selection == 5) {
		cm.openNpc(9050004, 7);
        } else if (selection == 6) {
		cm.openNpc(9050004, 8);
        } else if (selection == 7) {
		cm.openNpc(9050004, 9);
        } else if (selection == 8) {
		cm.openNpc(9050004, 10);
        } else if (selection == 9) {
		cm.openNpc(9050004, 11);
        } else if (selection == 10) {
		cm.openNpc(9050004, 12);
		} else if (selection == 11) {
		cm.openNpc(9050004, 13);
	}
    }
}


