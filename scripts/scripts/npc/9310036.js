/*
 *   �����̵꣬��ǿ��  NPC
 *   By: ZreHy_MS               �����Ҫ�Ķ����������޸ģ����˿����õ�~
 */

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    cm.sendNext("�ڴ�����");
    cm.dispose();


    // if (mode == -1) {
    //     cm.dispose();
    // } else {
    //     if (mode == 0) {
    //         cm.dispose();
    //         return;
    //     }
    //     if (mode == 1)
    //         status++;
    //     else
    //         status--;
    //     if (status == 0) {
    //         cm.sendSimple ("���ã��𾴵� #b#h ##k, ���ǳԻ�ð�յ���#r�û�ϵͳ#k������\r\n\r\n#L5##e��װ�û�����һ������ת�Ƶڶ���=====#r10000��ȯһ��#k#n#l#k");
    //     } else if (status == 1) {
    //         switch(selection) {
    //     case 2:
    //         if(cm.getPlayer().getMeso() >= 100000000){
    //             cm.sendOk("��ϲ�㣬��ɹ��һ���1ö��Ϸ��! ");
    // cm.gainItem(4310149,1);
    //             cm.gainMeso(-100000000);
    // cm.worldMessage(6,"���һ�ϵͳ���������["+cm.getName()+"]�ɹ��һ���һö��Ϸ��!");
    //             cm.dispose();
    //         }else{
    //             cm.sendOk("��û���㹻�Ľ�ң��Ҳ��ܸ���һ�~.");
    //             cm.dispose();
    //         }
    //         break;
    //     case 1: 
    //         if(cm.getMeso() >= 1000000){
    //             cm.sendOk("��ϲ�㣬������ 10000 ��ȯ! .");
    //             cm.gainMeso(-1000000);
    //             cm.gainNX(10000);
    //             cm.dispose();
    //         }else{
    //             cm.sendOk("��û�� 1000000 ��ң��Ҳ��ܸ��㻻��~.");
    //             cm.dispose();
    //         }
    //         break;
    //      case 0: 
    //         if(cm.haveItem(4001126,100)){
    //             //cm.gainDY(100);
    //             cm.gainvip(+1);
    // cm.gainItem(4001126,-100);
    // cm.sendOk("��ϲ�㣬��������1��VIP�ȼ�! .");
    //        cm.worldMessage(6,"���ƹ�ϵͳ��["+cm.getName()+"]������1��VIP�ȼ�!");
    // cm.dispose();
    //         }else{
    //             cm.sendOk("��û�� �㹻�� ��Ҷ���Ҳ��ܸ��㻻��~.");
    //             cm.dispose();
    //         }
    //         break;
    //        case 3: 
    //         if(cm.haveItem(4001126,1000)){
    //             //cm.gainDY(100);
    //             cm.gainMeso(5000000);
    // cm.gainItem(4001126,-1000);
    // cm.sendOk("��ϲ�㣬������ 5000000 ���! .");
    //    cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]1000�ŷ�Ҷ�һ�5000000��ҳɹ���");
    // cm.dispose();
    //         }else{
    //             cm.sendOk("��û�� �㹻�� ��Ҷ���Ҳ��ܸ��㻻��~.");
    //             cm.dispose();
    //         }
    //         break;
    //         case 4: 
    //         if(cm.haveItem(4000313,100)){
    //             //cm.gainDY(100);
    //             cm.gainMeso(15000000);
    // cm.gainItem(4000313,-100);
    // cm.sendOk("��ϲ�㣬������ 15000000 ���! .");
    //    cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]100�Żƽ��Ҷ�һ�15000000��ҳɹ���");
    // cm.dispose();
    //         }else{
    //             cm.sendOk("��û�� �㹻�� �ƽ��Ҷ���Ҳ��ܸ��㻻��~.");
    //             cm.dispose();
    //         }
    //         break;
    //         case 5: 
    //         if (cm.getPlayer().getNX() >= 10000) {
    // if( cm.transferCashEquipStat(1,2) ) {
    //  cm.gainNX(-10000);
    //  cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]��װ�û��ɹ���");
    //  cm.sendOk("��װ�û��ɹ���");
    // } else {
    //  cm.sendOk("��װ�û�ʧ�ܣ�װ������һ��͵ڶ������붼�ǵ�װ���У�");
    //             }
    //         }

    //         break;
    //        case 6: 
    //         if(cm.getMeso() >= 10000000){
    // cm.gainMeso(-10000000);
    //             cm.gainD(100000);
    // cm.sendOk("��ϲ�㣬������100000����ȯ! .");
    //    cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]1000w��Ҷһ�10w���óɹ���");
    // cm.dispose();
    //         }else{
    //             cm.sendOk("��û���㹻�Ľ�ң��Ҳ��ܸ��㻻��~.");
    //             cm.dispose();
    //         }
    //         break;
    //         case 7: 
    //         if(cm.getNX(2) >= 100000){
    //             cm.sendOk("��ϲ�㣬������10���Ͷ�����! .");
    //             cm.gainD(-100000);
    //             cm.gainItem(4001266,10);
    // cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]10w���öһ�10�Ͷ����³ɹ���");
    //             cm.dispose();
    //         }else{
    //             cm.sendOk("��û�� 100000 ���ã��Ҳ��ܸ��㻻��~.");
    //             cm.dispose();
    //         }
    //         break;
    //         case 8: 
    //         if(cm.getNX(2) >= 130000){
    //             cm.sendOk("��ϲ�㣬������10������ɫ��ʯ! .");
    //             cm.gainD(-130000);
    //             cm.gainItem(4001197,10);
    // cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]13w���öһ�10����ɫ��ʯ�ɹ���");
    //             cm.dispose();
    //         }else{
    //             cm.sendOk("��û�� 130000 ���ã��Ҳ��ܸ��㻻��~.");
    //             cm.dispose();
    //         }
    //         break;
    //         }
    //     }
    // }
}