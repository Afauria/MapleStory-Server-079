/* Andre
 Kerning Random Hair/Hair Color Change.
 */
var status = -1;
var beauty = 0;
var hair_Colo_new;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }

    if (status == 0) {
        cm.sendSimple("���ǰ�������. ������� #b#t5151002##k \r\n���� #b#t5150002##k �κλ��ᣬ\r\n��ô��ô�����Ҹı���ķ�����ɫ?\r\n#L0#ʹ�� #b#t5150002##k\r\n#L1#ʹ�� #b#t5151002##k");
    } else if (status == 1) {
        if (selection == 0) {
            var hair = cm.getPlayerStat("HAIR");
            hair_Colo_new = [];
            beauty = 1;

            if (cm.getPlayerStat("GENDER") == 0) {
                hair_Colo_new = [30130, 30350, 30190, 30110, 30180, 30050, 30040, 30160, 30770, 30620, 30550, 30520];
            } else {
                hair_Colo_new = [31060, 31090, 31020, 31130, 31120, 31140, 31330, 31010, 31520, 31440, 31750, 31620];
            }
            for (var i = 0; i < hair_Colo_new.length; i++) {
                hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
            }
            cm.sendYesNo("ע��!��������������Ƿ�Ҫʹ�� #b#t5150002##k?");
        } else if (selection == 1) {
            var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
            hair_Colo_new = [];
            beauty = 2;

            for (var i = 0; i < 8; i++) {
                hair_Colo_new[i] = currenthaircolo + i;
            }
            cm.sendYesNo("ע��!��������������Ƿ�Ҫʹ�� #b#t5151002##k?");
        }
    } else if (status == 2) {
        if (beauty == 1) {
            if (cm.setRandomAvatar(5150002, hair_Colo_new) == 1) {
                cm.sendOk("����!");
            } else {
                cm.sendOk("��ò��û��#b#t5150002##k..");
            }
        } else {
            if (cm.setRandomAvatar(5151002, hair_Colo_new) == 1) {
                cm.sendOk("����!");
            } else {
                cm.sendOk("��ò��û��#b#t5151002##k..");
            }
        }
        cm.dispose();
    }
}
