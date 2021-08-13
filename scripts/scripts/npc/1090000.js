/**
 * @���ߣ�MinaMS
 * @�ع����ư汾
 * @��; ����תְ 1~3ת ����NPC 1090000.js ��ͼ 120000101 - ŵ����˹�� - ������
 */

var status = 0;
var jobId;
var jobName;
var mapId


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 2) {
        cm.sendOk("�¶�������������.");
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        //912010200 - ���ص�ͼ - ���صķ���
        //4031059 - �ڷ� - �������˷�����ȡ�ĵ�����
        if (cm.getMapId() == 912010200 || cm.haveItem(4031059, 1)) {
            if (cm.getQuestStatus(6370) == 1) {
                cm.removeAll(4031059);
                //5221006 - ��װ - ���Ϻ��������ܵ��˺�ʱ�;öȼ��٣��;ö�Ϊ0ʱ��һ��ʱ���ڽ����ܳ�����������\n��ʹ�ü��� : ��װ, Ͷ������, ����, ��������, ��������, ��Ÿ��Ϯ, ������̨, ð�յ���ʿ, ��ʿ����־ \n#c�;öȺľ�����ȴʱ�� : 90��#
                cm.teachSkill(5221006, 0, 10);
                cm.forceCompleteQuest(6370);
            } else if (cm.getQuestStatus(6330) == 1) {
                cm.removeAll(4031059);
                //5121003 - �������� - ��120���ڱ��ֳ��˱���״̬��\n����ʹ�ü��� : ˫���������ľαװ���޷�ʹ�á�\n��Ҫ���� : #c���� 20������#
                cm.teachSkill(5121003, 0, 10);
                cm.forceCompleteQuest(6330);
            }
            cm.warp(120000101, 0);//120000101 - ŵ����˹�� - �����ҡ�
            cm.sendOk("��ϲ������񣡣�");
            cm.dispose();
        }
        if (cm.getJob() == 0) {
            if (cm.getPlayer().getLevel() >= 10) {
                cm.sendNext("�����Ϊһ�� #r����#k ��\r\n����ƾ������ݼ�����������˷���ٷ����еĶ�ǹ���߿���ʹ��˲����Լ���˵ĸ���.ʹ�ö�ǹ�ĺ�������ѡ�������ӵ�����Ч�ع������˻������ڴ��Ϲ�������,ʹ�ø�ȭ�׵ĺ������Ա���󷢻Ӹ�ǿ��������");
            } else {
                cm.sendOk("��ĵȼ�����10�����޷�תְ��Ϊ������");
                cm.dispose();
            }
        } else {
                        //��������
            //�����ɫ�ȼ����ڵ���30 ����ְҵ�Ǻ��������ж���׼����ת
            if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 500) { // ����
                 //����������������ж����Ƿ���4031012 - Ӣ��֤�� - �ڶ���תְʱ�̹������Ӣ��֤��.
                if (cm.haveItem(4031012, 1)) {//�����Ӣ��֤�� ,������ɽ̹��������
                    if (cm.haveItem(4031012, 1)) {
                        status = 20;
                        cm.sendNext("��ϲ������˲��ԡ��õ���Ӣ��֤�顣��Ҫ����תְ��������һҳ!");
                    } else {//���û��Ӣ��֤��
                        //��ֹ������߶�ʧ,�޷�����תְ
                        cm.sendOk("��ȥ�� #r����תְ�̹�#k.")
                        cm.dispose();
                    }
                } else {
                    status = 10;
                    cm.sendNext("���Ѿ�����תְ��,Ҫתְ�����һҳ.");
                }
            } else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() == 510 || cm.getJob() == 520) {
                if (cm.haveItem(4031059, 1)) {
                    cm.gainItem(4031057, 1);
                    cm.gainItem(4031059, -1);
                    cm.warp(211000001);
                    cm.sendOk("�������һ�����飬����ȥ�� #b�ѵ�#k.");
                } else {
                    cm.warp(108010501, 0);//108010501 - ���ص�ͼ - ���Ԫ������
                    //  public void spawnMobOnMap(int mobId, int quantity, int x, int y, int map) {
                    //cm.warpMapWithClock(108010101, 800);//���õ�ͼʱ�䣬108010501�����Ԫ��ͼ 103000003�Ƿ϶��ư� ʱ�䵽���Զ��ص��ư�
                    cm.spawnMobOnMap(9001004, 1, 299, 20, 108010501);//�ٻ�������//9001004 - ���յķ���
                    cm.sendOk("��, #b#h0##k! ����Ҫһ�� #b�ڷ�#k. ��ȥ�����Ԫ�ռ��ø���");
                    cm.startQuest(100101);
                }
                cm.dispose();
            } else if (cm.isQuestActive(6370)) {
                var dd = cm.getEventManager("KyrinTrainingGroundC");
                if (dd != null) {
                    dd.startInstance(cm.getPlayer());
                } else {
                    cm.sendOk("δ֪�Ĵ������Ժ��ڳ��ԡ�");
                }
            } else if (cm.isQuestActive(6330)) {
                var dd = cm.getEventManager("KyrinTrainingGroundV");
                if (dd != null) {
                    dd.startInstance(cm.getPlayer());
                } else {
                    cm.sendOk("δ֪�Ĵ������Ժ��ڳ��ԡ�");
                }
            } else {
                cm.sendOk("���,���ǿ�����-����תְ��.");
                cm.dispose();
            }
        }
    } else if (status == 1) {
        cm.sendNextPrev("һ��תְ�˾Ͳ��ܷ���,�������תְ�����һҳ.");
    } else if (status == 2) {
        cm.sendYesNo("�����Ҫ��Ϊһλ #r����#k ?");
    } else if (status == 3) {
        if (cm.getJob() == 0) {
            cm.changeJob(500); // ����
            cm.resetStats(4, 25, 4, 4);
        }
        cm.gainItem(1482014, 1);
        cm.gainItem(1492014, 1);
        cm.gainItem(2330000, 600);
        cm.gainItem(2330000, 600);
        cm.gainItem(2330000, 600);
        cm.sendOk("תְ�ɹ� ! ��ȥ�������°�.");
        cm.dispose();
    } else if (status == 11) {
        cm.sendNextPrev("�����ѡ����Ҫתְ��Ϊһλ #rȭ��#k, #r��ǹ��#k.")
    } else if (status == 12) {
        cm.askAcceptDecline("�����ұ����Ȳ�����,��׼�������� ?");
    } else if (status == 13) {
        cm.sendSimple("����Ҫ��Ϊʲô ? #b\r\n#L0#ȭ��#l\r\n#L1#��ǹ��#l#k");
    } else if (status == 14) {
        var jobName;
        if (selection == 0) {
            jobName = "ȭ��";
            MapId = "108000502";
        } else if (selection == 1) {
            jobName = "��ǹ��";
            MapId = "108000500";
        }
        cm.sendYesNo("�����Ҫ��Ϊһλ #r" + jobName + "#k?");
    } else if (status == 15) {
        cm.warp(MapId);
        cm.sendOk("��ȥ�� #b����תְ�̹�#k . ����������.");
        cm.dispose();
    } else if (status == 21) {
        cm.sendSimple("����Ҫ��Ϊʲô ? #b\r\n#L0#ȭ��#l\r\n#L1#��ǹ��#l#k");
    } else if (status == 22) {
        var jobName;
        if (selection == 0) {
            jobName = "ȭ��";
            job = 510;
        } else if (selection == 1) {
            jobName = "��ǹ��";
            job = 520;
        }
        cm.sendYesNo("�����Ҫ��Ϊһλ #r" + jobName + "#k?");
    } else if (status == 23) {
        cm.changeJob(job);
        if (cm.haveItem(4031857) && cm.haveItem(4031012, 1)) {
            cm.gainItem(4031857, -15);
            cm.gainItem(4031012, -1);
            cm.sendOk("תְ�ɹ�.");
            cm.dispose();
        } else if (cm.haveItem(4031856) && cm.haveItem(4031012, 1)) {
            cm.gainItem(4031856, -15);
            cm.gainItem(4031012, -1);
            cm.sendOk("תְ�ɹ�.");
            cm.dispose();
        } else {
            cm.removeAll(4031857);
            cm.removeAll(4031856);
            cm.removeAll(4031012);
            cm.sendOk("תְ�ɹ�.");
            cm.dispose();
        }
    }
}