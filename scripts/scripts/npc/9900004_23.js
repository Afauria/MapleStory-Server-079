/*
 * 
 * @wnms
 * @����̨���͸���npc
 */
function start() {
    status = -1;
    action(1, 0, 0);
}
var ð�ձ� = 5000;
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {
            cm.sendOk("����������");
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
            cm.sendSimple("#r�ҿ��Կ�ݵ�Ϊ�������ķ��͡����͡���ɫ����\r\n#b��ѡ����Ҫ�Ĳ�����\r\n\r\n#L1#�ʼ����������#l\r\n\r\n#L6#��������#l\r\n\r\n#d#L2##r���ֿ���#l\r\n\r\n#L3#�����������ʼ�+������#l\r\n\r\n#L4#���ִ�߼�����#l\r\n\r\n#L5#������ɫ#l\r\n\r\n");
        } else if (status == 1) {
            if (selection == 1) {//��������
             cm.openNpc(1012117,0);
            } else if (selection == 2) {
             cm.openNpc(1012103,0);
            } else if (selection == 3) {
             cm.openNpc(9105006,0);            
            } else if (selection == 4) {
             cm.openNpc(1052004,0);
            } else if (selection == 5) {
             cm.openNpc(1012105,0);
			} else if (selection == 6) {
             cm.openNpc(1012103,1);
                                            
        }	
        }
    }
}


