/**
 * @���ߣ�MinaMS
 * @�ع����ư汾
 * @��; սʿתְ 1~3ת ����NPC 1022000.js ��ͼ 102000003 - ������ - սʿʥ��
 */

var status = 0;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 2) {
        cm.sendOk("�¶������������ҡ�");
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
//��ʼд����
        if (cm.getJob() == 0) {//���������
            if (cm.getPlayer().getLevel() >= 10) {//�����ɫ�ȼ����ڵ���10
                cm.sendNext("�����Ϊһ�� #rսʿ#k ��\r\nսʿӵ�к�ǿ�Ĺ�����������,�����ս���д��ڷǳ���Ҫ�ĵ�λ.��Ϊ����������ǿ,����ѧϰ�߼����ܵĻ����Է��ӳ�ǿ��������");
            } else {
                cm.sendOk("��ĵȼ�����10�����޷�תְ��Ϊսʿ��");
                cm.dispose();
            }
        } else {
            //��������
            //�����ɫ�ȼ����ڵ���30 ����ְҵ��սʿ�����ж���׼����ת
            if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 100) {
                //����������������ж����Ƿ���4031012 - Ӣ��֤�� - �ڶ���תְʱ�̹������Ӣ��֤��.
                if (cm.haveItem(4031012, 1)) {//�����Ӣ��֤�� ,������ɽ̹��������
                    if (cm.haveItem(4031012, 1)) {
                        status = 30; //��ʼִ�ж�ת����ת��21
                        cm.sendNext("��ϲ������˲��ԡ��õ���Ӣ��֤�顣��Ҫ����תְ��������һҳ!");
                    } else {//���û��Ӣ��֤��
                        //��ֹ������߶�ʧ,�޷�����תְ
                        if (!cm.haveItem(4031008)) {//�������û��4031008 - �����������ż� - ����ʿ��������������յ����ż�.Ӧ��ת����սʿ�̹�.
                            cm.gainItem(4031008, 1);//�����ż���
                        }

                        //102020300 - ������ - ������ɽ��
                        cm.sendNext("��ȥ�� #rսʿ��ת�̹�#k.������ #r������ - ������ɽ��#k.");
                        cm.dispose();
                    }
                } else {
                    status = 10;//��ת��11
                    cm.sendNext("���Ѿ�����תְ��,Ҫתְ�����һҳ.");
                }
            } else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() == 110 || cm.getJob() == 120 || cm.getJob() == 130 || cm.getJob() == 2110) {
                //����������������ж����Ƿ���4031059  - �ڷ� - �������˷�����ȡ�ĵ�����
                if (cm.haveItem(4031059, 1)) {// - �ڷ� - �������˷�����ȡ�ĵ�����
                    //�����4031059
                    status = 50;
                    cm.gainItem(4031057, 1);//���� 4031057 - �������� - �������˷�������߸�������
                    cm.gainItem(4031059, -1);//ɾ���ڷ�
                    cm.sendNext("��ϲ���ܷ����õ��ڷ�������˲��ԣ������������ #r#t4031057##k ȥ���Ϲ����� #b̩��˹#k.");
                } else {
                    //���û��
                    status = 40;
                    cm.sendNext("��ϲ��ﵽ70�����������Ѿ�������ת�ˡ������Ҫ��ת�뵥����һҳ.");
                }
            } else {
                cm.sendOk("��á�����սʿתְ�̹١���Ҫ��ת����ת���������Ұɣ�");
                cm.dispose();
            }
        }
        //�˴���ʼִ��սʿһת
    } else if (status == 1) {
        cm.sendNextPrev("һ��תְ�˾Ͳ��ܷ���,�������תְ�����һҳ.");
    } else if (status == 2) {
        cm.sendYesNo("��������Ϊһ�� #rսʿ#k ��?");
    } else if (status == 3) {
        if (cm.getJob() == 0) {
            cm.changeJob(100); // �ı�ְҵΪսʿ
            cm.resetStats(35, 4, 4, 4);
        }
        cm.gainItem(1302077, 1); //1302077 - ����սʿ֮�� - (�o����)
        cm.sendOk("תְ�ɹ� ! ��������һ��սʿ��.");
        if (cm.getPlayer().getGender() == 0) {
            cm.worldMessage("[תְ�챨]����ϲ˧��." + cm.getChar().getName() + "  �ɹ�תְ��Ϊһ��սʿ�����������ҵ�ף�����ɣ�����");
        } else {
            cm.worldMessage("[תְ�챨]����ϲ��Ů." + cm.getChar().getName() + "  �ɹ�תְ��Ϊһ��սʿ�����������ҵ�ף�����ɣ�����");
        }
        cm.dispose();
        //սʿһת����


        //սʿ��ת����ʼ���ж�û��Ӣ��֤��ʱ��ִ��
    } else if (status == 11) {
        cm.sendNextPrev("սʿ��תʱ�������ѡ������ְҵ��\r\n #r����#k, #r׼��ʿ#k �� #rǹսʿ#k.");
    } else if (status == 12) {
        cm.askAcceptDecline("�����ұ����Ȳ����㣬��û���ʸ���ж�ת,��׼�������� ?");
    } else if (status == 13) {
        cm.gainItem(4031008, 1);//����������������
        //cm.warp(102020300);//���͵���ת�̹ٵĵ�ͼ
        status = 20;//��ת��21
        cm.sendNext("��ȥ�� #bսʿתְ�̹�#k . ���������ô����.");
        //cm.dispose();


        //�˴����ж��Ѿ����˽������ţ��ٴε��NPC ���͹�ȥ�Ĵ���
    } else if (status == 21) {
        cm.sendNextPrev("ʲô���㲻֪�� #r������ - ������ɽ��#k �����");
    } else if (status == 22) {
        cm.askAcceptDecline("�ðɣ��ҿ��������ȥ������Ҫ�շ�Ŷ�����ͷ�����Ҫʮ����");
    } else if (status == 23) {
        if (cm.getPlayer().getMeso() >= 100000) {//�ж���ҽ���Ƿ����ʮ��
            cm.gainMeso(-100000);//�۳�ʮ����
            cm.warp(102020300);//���͵���ת�̹ٵĵ�ͼ
            cm.sendOk("���Ѿ����㴫�͵���ת�̹����ڵ�ͼ�ˡ��������⣬ȥ�����ɣ�");
            cm.dispose();
        } else {
            cm.sendOk("��Ľ�Ҳ���10�����޷������ȥ��\r\n�����㻹���Լ�ȥ�ٶ����Ǹ���ͼ��ôȥ�ɣ����\r\n��Ŀǰӵ�� " + cm.getPlayer().getMeso() + " ���.");
        }

        //�˴���ʼִ�ж�ת
    } else if (status == 31) {
        cm.sendSimple("����תְ��Ϊʲôְҵ ? #b\r\n#L0#����#l\r\n#L1#׼��ʿ#l\r\n#L2#ǹսʿ#l#k");
    } else if (status == 32) {
        var jobName;
        if (selection == 0) {
            jobName = "����";
            job = 110; // ����
        } else if (selection == 1) {
            jobName = "׼��ʿ";
            job = 120; // ׼��ʿ
        } else {
            jobName = "ǹսʿ";
            job = 130; // ǹսʿ
        }
        cm.sendYesNo("�����Ҫ��Ϊһ�� #r" + jobName + "#k?");
    } else if (status == 33) {
        cm.changeJob(job);//�ı�ְҵ
        //4031012 - Ӣ��֤�� - �ڶ���תְʱ�̹������Ӣ��֤��.
        cm.gainItem(4031012, -1);//ɾ��Ӣ��֤��
        cm.sendOk("תְ�ɹ���");
        if (cm.getPlayer().getGender() == 0) {
            cm.worldMessage("[תְ�챨]����ϲ˧��." + cm.getChar().getName() + "  �ɹ����ж�ת�����������ҵ�ף�����ɣ�����");
        } else {
            cm.worldMessage("[תְ�챨]����ϲ��Ů." + cm.getChar().getName() + "  �ɹ����ж�ת�����������ҵ�ף�����ɣ�����");
        }
        cm.dispose();
    } else if (status == 41) {
        cm.sendNextPrev("��Ҫ��ת���ұ����Ȳ��������������ȥ - ������ - ���II \r\n��ȥ֮��������һ����ħ��ʦð����ҵķ�����������������õ�������� #r�ڷ�#k�����������ҡ�");
    } else if (status == 42) {
        cm.sendNextPrev("ʲô���㲻֪�� - ������ - ���II ��ôȥ��");
    } else if (status == 43) {
        cm.askAcceptDecline("�ðɣ��ҿ��������ȥ������Ҫ�շ�Ŷ�����ͷ�����Ҫ��ʮ����!");
    } else if (status == 44) {
        if (cm.getPlayer().getMeso() >= 200000) {//�ж���ҽ���Ƿ����20��
            cm.gainMeso(-200000);//�۳�20����
            cm.warp(108010201);//���͵���ת�̹ٵĵ�ͼ
            cm.spawnMobOnMap(9001000, 1, 299, 20, 108010201);//�ٻ�������//9001000 - ���������ķ���
            cm.sendOk("���Ѿ������͵������ˡ����ܺ�ħ��ʦð��ķ����õ� #r�ڷ�#k ����������.");
            cm.dispose();
        } else {
            cm.sendOk("��Ľ�Ҳ���20�����޷������ȥ��\r\n�����㻹���Լ�ȥ�ٶ����Ǹ���ͼ��ôȥ�ɣ����\r\n��Ŀǰӵ�� " + cm.getPlayer().getMeso() + " ���.");

        }
        cm.dispose();
    } else if (status == 50) {
        cm.sendNextPrev("��ȥѩ���Ϲ��ݣ�������ȥħ�����ָۿڣ����ɴ�ǰ�����֮�ǣ�Ȼ������֮��ǰ��ѩ��");
    } else if (status == 51) {
        cm.askAcceptDecline("ʲô���㲻�����������԰����ҿ��������ȥ�������շ�Ŷ����Ҫ100�����أ�");
    } else if (status == 52) {
        if (cm.getPlayer().getMeso() >= 1000000) {//�ж���ҽ���Ƿ����100��
            cm.gainMeso(-1000000);//�۳�100����
            cm.warp(211000001);//���͵����Ϲ���
            cm.sendOk("���Ѿ������͵����Ϲ����ˡ���� #b̩��˹#k �Ի���");
            cm.dispose();
        } else {
            cm.sendOk("��Ľ�Ҳ���20�����޷������ȥ��\r\n�����㻹������ʵʵ����ȥ�ɣ����\r\n��Ŀǰӵ�� " + cm.getPlayer().getMeso() + " ���.");
        }
        cm.dispose();
    }
}
