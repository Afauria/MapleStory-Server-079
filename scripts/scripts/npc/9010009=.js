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
            text += "#e#b��ã��������ܻ�ϵͳ����:.\r\n#e#r�ܹ�10����10���ܹ�����Ϊ��6000���ң�1���ߵȺڰ�ˮ�� ���Ҷ�����Ŷ.\r\n"//3
			text += "#L2#�����˽�#b���̹���#k.\r\n\r\n"//3
		    text += "#L1#��һ�� #e#d��Ҫ#v4000016#100�� \r\n\r\n"//3
	       // text += "#L3#�ڶ��� #e#d��Ҫ#v4000009#100�� \r\n\r\n"//3
			//text += "#L4#������ #e#d��Ҫ#v4000020#100�� \r\n\r\n"//3
			//text += "#L5#���Ļ� #e#d��Ҫ#v4000015#100�� \r\n\r\n"//3
			//text += "#L6#���廷 #e#d��Ҫ#v4000004#100�� \r\n\r\n"//3
			//text += "#L7#������ #e#d��Ҫ#v4000188#100�� \r\n\r\n"//3
			//text += "#L8#���߻� #e#d��Ҫ#v4000008#100�� \r\n\r\n"//3
			//text += "#L9#�ڰ˻� #e#d��Ҫ#v4003004#100�� \r\n\r\n"//3
			//text += "#L10#�ھŻ� #e#d��Ҫ#v4000007#100�� \r\n\r\n"//3
			//text += "#L11#��ʮ�� #e#d��Ҫ#v4000007#200�� \r\n\r\n"//3
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
		cm.openNpc(9010009, 1);
        } else if (selection == 2) {
		cm.openNpc(9010009, 2);
        } else if (selection == 3) {
		cm.openNpc(9010009, 5);
        } else if (selection == 4) {
		cm.openNpc(9010009, 6);
        } else if (selection == 5) {
		cm.openNpc(9010009, 7);
        } else if (selection == 6) {
		cm.openNpc(9010009, 8);
        } else if (selection == 7) {
		cm.openNpc(9010009, 9);
        } else if (selection == 8) {
		cm.openNpc(9010009, 10);
        } else if (selection == 9) {
		cm.openNpc(9010009, 11);
        } else if (selection == 10) {
		cm.openNpc(9010009, 12);
		} else if (selection == 11) {
		cm.openNpc(9010009, 13);
	}
    }
}


