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
            cm.sendSimple("#r����С��Ϸϵͳ������\r\n<���¼���������Ϸ>\r\n\r\n#d#L0#21��#l\r\n\r\n#L1#����#n#l\r\n\r\n#L2#������+�������ϳ�#n#l\r\n\r\n");
        } else if (status == 1) {
            if (selection == 0) {//��������
             cm.openNpc(9310100,100);
            } else if (selection == 1) {//�����һ�����
              cm.openNpc(9310100,110);
            }else if(selection == 2){
                cm.openNpc(9310100,120);
        }
        }
    }
}


