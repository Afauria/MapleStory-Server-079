/* Mu Young
	Boss Balrog
*/


var status = -2;

function action(mode, type, selection) {
     cm.warpParty(105100300);
 	
 

    // switch (status) {
    //     case -1:
    //         status = 0;
    //         switch (cm.getChannelNumber()) {
    //             default:
    //                 cm.sendNext("ĿǰģʽΪ #i3994116# �������������ģʽ�밴��һ��  ������ �ȼ� 1 ~ �ȼ� 255 / Զ�������� 1 ��");
    //                 break;
    //         }
    //         break;
    //     case 0:
    //         var em = cm.getEventManager("BossBalrog");

    //         if (em == null) {
    //             cm.sendOk("Ŀǰ��������һ�����⣬����ϵGM��");
    //             cm.safeDispose();
    //             return;
    //         }

    //         var prop = em.getProperty("state");
    //         if (prop == null || prop.equals("0")) {
    //             var squadAvailability = cm.getSquadAvailability("BossBalrog");
    //             if (squadAvailability == -1) {
    //                 status = 1;
    //                 cm.sendYesNo("���ڿ�������Զ���ӣ������ΪԶ���Ӷӳ���");

    //             } else if (squadAvailability == 1) {
    //                 // -1 = Cancelled, 0 = not, 1 = true
    //                 var type = cm.isSquadLeader("BossBalrog");
    //                 if (type == -1) {
    //                     cm.sendOk("�Ѿ����������롣");
    //                     cm.safeDispose();
    //                 } else if (type == 0) {
    //                     var memberType = cm.isSquadMember("BossBalrog");
    //                     if (memberType == 2) {
    //                         cm.sendOk("��Զ���ӵ��Ʋ�������");
    //                         cm.safeDispose();
    //                     } else if (memberType == 1) {
    //                         status = 5;
    //                         cm.sendSimple("��Ҫ��ʲô? \r\n#b#L0#����Զ����#l \r\n#b#L1#�˳�Զ����#l \r\n#b#L2#�鿴Զ��������#l");
    //                     } else if (memberType == -1) {
    //                         cm.sendOk("Զ����Ա�Ѿ��ﵽ30�������Ժ����ԡ�");
    //                         cm.safeDispose();
    //                     } else {
    //                         status = 5;
    //                         cm.sendSimple("��Ҫ��ʲô? \r\n#b#L0#�鿴Զ��������#l \r\n#b#L1#����Զ����#l \r\n#b#L2#�˳�Զ����#l");
    //                     }
    //                 } else { // Is leader
    //                     status = 10;
    //                     cm.sendSimple("����������ʲô��\r\n#b#L0#�鿴Զ���ӳ�Ա��#l \r\n#b#L1#����Զ���ӳ�Ա��#l \r\n#b#L2#�༭�����б�#l \r\n#r#L3#�����ͼ��#l");
    //                     // TODO viewing!
    //                 }
    //             } else {
    //                 var eim = cm.getDisconnected("BossBalrog");
    //                 if (eim == null) {
    //                     cm.sendOk("Զ���ӵ���ս�Ѿ���ʼ.");
    //                     cm.safeDispose();
    //                 } else {
    //                     cm.sendYesNo("��Ҫ��������Զ��������");
    //                     status = 2;
    //                 }
    //             }
    //         } else {
    //             var eim = cm.getDisconnected("BossBalrog");
    //             if (eim == null) {
    //                 cm.sendOk("Զ���ӵ���ս�Ѿ���ʼ.");
    //                 cm.safeDispose();
    //             } else {
    //                 cm.sendYesNo("��Ҫ��������Զ��������");
    //                 status = 2;
    //             }
    //         }
    //         break;
    //     case 1:
    //         if (mode == 1) {
    //             var lvl = cm.getPlayerStat("LVL");
    //             if (lvl >= 1 && lvl <= 256) {

    //                 if (cm.registerSquad("BossBalrog", 5, " �Ѿ���Ϊ��Զ���Ӷӳ�������������Զ���ӣ������´򿪶Ի��������Զ���ӡ�")) {
    //                     cm.sendOk("���Ѿ���Ϊ��Զ���Ӷӳ�����������5���ӣ���ȴ���Ա�ǵ����롣");
    //                 } else {
    //                     cm.sendOk("δ֪����.");
    //                 }
    //             } else {
    //                 cm.sendNext("��һ��Զ���ӳ�Ա�ĵȼ�����50��120֮�䡣");
    //             }
    //         } else {
    //             cm.sendOk("��������ٴ�����Զ���ӵĻ�������ҡ�")
    //         }
    //         cm.safeDispose();
    //         break;
    //     case 2:
    //         if (!cm.reAdd("BossBalrog", "BossBalrog")) {
    //             cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
    //         }
    //         cm.safeDispose();
    //         break;
    //     case 5:
    //         if (selection == 0) {
    //             if (!cm.getSquadList("BossBalrog", 0)) {
    //                 cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
    //                 cm.safeDispose();
    //             } else {
    //                 cm.dispose();
    //             }
    //         } else if (selection == 1) { // join
    //             var ba = cm.addMember("BossBalrog", true);
    //             if (ba == 2) {
    //                 cm.sendOk("Զ����Ա�Ѿ��ﵽ30�������Ժ����ԡ�");
    //                 cm.safeDispose();
    //             } else if (ba == 1) {
    //                 cm.sendOk("�������Զ���ӳɹ�����Ⱥ�ӳ�ָʾ��");
    //                 cm.safeDispose();
    //             } else {
    //                 cm.sendOk("���Ѿ��μ���Զ���ӣ���Ⱥ�ӳ�ָʾ��");
    //                 cm.safeDispose();
    //             }
    //         } else { // withdraw
    //             var baa = cm.addMember("BossBalrog", false);
    //             if (baa == 1) {
    //                 cm.sendOk("�ɹ��˳�Զ���ӡ�");
    //                 cm.safeDispose();
    //             } else {
    //                 cm.sendOk("��û�вμ�Զ���ӡ�");
    //                 cm.safeDispose();
    //             }
    //         }
    //         break;
    //     case 10:
    //         if (selection == 0) {
    //             if (!cm.getSquadList("BossBalrog", 0)) {
    //                 cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
    //             }
    //             cm.safeDispose();
    //         } else if (selection == 1) {
    //             status = 11;
    //             if (!cm.getSquadList("BossBalrog", 1)) {
    //                 cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
    //             }
    //             cm.safeDispose();
    //         } else if (selection == 2) {
    //             status = 12;
    //             if (!cm.getSquadList("BossBalrog", 2)) {
    //                 cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
    //             }
    //             cm.safeDispose();
    //         } else if (selection == 3) { // get insode
    //             if (cm.getSquad("BossBalrog") != null) {
    //                 var dd = cm.getEventManager("BossBalrog");
    //                 dd.startInstance(cm.getSquad("BossBalrog"), cm.getMap());
    //                 cm.dispose();
    //             } else {
    //                 cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
    //                 cm.safeDispose();
    //             }
    //         }
    //         break;
    //     case 11:
    //         cm.banMember("BossBalrog", selection);
    //         cm.dispose();
    //         break;
    //     case 12:
    //         if (selection != -1) {
    //             cm.acceptMember("BossBalrog", selection);
    //         }
    //         cm.dispose();
    //         break;
    // }
}