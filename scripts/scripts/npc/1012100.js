/**
 * @���ߣ�MinaMS
 * @�ع����ư汾
 * @��; ������תְ 1~3ת ����NPC 1012100.js ��ͼ 100000201 - ������ - ��������ѵ����
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
                cm.sendNext("�����Ϊһ�� #r������#k ��\r\n����ӵ�и����ݼ�����,��ս���и���Զ���빥��,���繭��ְҵ����������õ��ƵĻ�,���Կ��Ƿǳ�����������");
            } else {
                cm.sendOk("��ĵȼ�����10�����޷�תְ��Ϊ�����֡�");
                cm.dispose();
            }
        } else {
            //��������
            //�����ɫ�ȼ����ڵ���30 ����ְҵ�ǹ����֡����ж���׼����ת
            if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 300) {
                //����������������ж����Ƿ���4031012 - Ӣ��֤�� - �ڶ���תְʱ�̹������Ӣ��֤��.
                if (cm.haveItem(4031012, 1)) {//�����Ӣ��֤�� ,������ɽ̹��������
                    if (cm.haveItem(4031012, 1)) {
                        status = 30; //��ʼִ�ж�ת����ת��21
                        cm.sendNext("��ϲ������˲��ԡ��õ���Ӣ��֤�顣��Ҫ����תְ��������һҳ!");
                    } else {//���û��Ӣ��֤��
                        //��ֹ������߶�ʧ,�޷�����תְ
                        if (!cm.haveItem(4031010)) {//�������û��4031010 - �����ȵ��ż� - �����ִ�ĺ������յ����ż�.Ӧ��ת���������ֽ̹�.
                            cm.gainItem(4031010, 1);//�����ż���
                        }

                        //106010000 - ������ - �Թ�ͨ��
                        cm.sendNext("��ȥ�� #r�����ֶ�ת�̹�#k.������ #r- ������ - �Թ�ͨ��#k.");
                        cm.dispose();
                    }
                } else {
                    status = 10;//��ת��11
                    cm.sendNext("���Ѿ�����תְ��,Ҫתְ�����һҳ.");
                }
            } else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() == 310 || cm.getJob() == 320) {
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
                cm.sendOk("��á����ǹ�����תְ�̹١���Ҫ��ת����ת���������Ұɣ�");
                cm.dispose();
            }
        }
        //�˴���ʼִ�й�����һת
    } else if (status == 1) {
        cm.sendNextPrev("һ��תְ�˾Ͳ��ܷ���,�������תְ�����һҳ.");
    } else if (status == 2) {
        cm.sendYesNo("��������Ϊһ�� #r������#k ��?");
    } else if (status == 3) {
        if (cm.getJob() == 0) {
            cm.changeJob(300); // �ı�ְҵΪ������
            cm.resetStats(4, 25, 4, 4);
        }
        cm.gainItem(1452051, 1); //1452051 - �������ֵĹ� - (�o����)
        cm.gainItem(2060000, 1000);//��ʸ
        cm.gainItem(2060000, 1000);//��ʸ
        cm.sendOk("תְ�ɹ� ! ��������һ����������.");
        if (cm.getPlayer().getGender() == 0) {
            cm.worldMessage("[תְ�챨]����ϲ˧��." + cm.getChar().getName() + "  �ɹ�תְ��Ϊһ�������֣����������ҵ�ף�����ɣ�����");
        } else {
            cm.worldMessage("[תְ�챨]����ϲ��Ů." + cm.getChar().getName() + "  �ɹ�תְ��Ϊһ�������֣����������ҵ�ף�����ɣ�����");
        }
        cm.dispose();
        //������һת����


        //�����ֶ�ת����ʼ���ж�û��Ӣ��֤��ʱ��ִ��
    } else if (status == 11) {
        cm.sendNextPrev("�����ֶ�תʱ�������ѡ������ְҵ��\r\n #r����#k �� #r����#k.");
    } else if (status == 12) {
        cm.askAcceptDecline("�����ұ����Ȳ����㣬��û���ʸ���ж�ת,��׼�������� ?");
    } else if (status == 13) {//4031010
        cm.gainItem(4031010, 1);//��������ȵ��ż� -
        //cm.warp(102020300);//���͵���ת�̹ٵĵ�ͼ
        status = 20;//��ת��21
        cm.sendNext("��ȥ�� #b������תְ�̹�#k . ���������ô����.");
        //cm.dispose();


        //�˴����ж��Ѿ����˽������ţ��ٴε��NPC ���͹�ȥ�Ĵ���
    } else if (status == 21) {
        cm.sendNextPrev("ʲô���㲻֪�� #r- ������ - �Թ�ͨ��#k �����");
    } else if (status == 22) {
        cm.askAcceptDecline("�ðɣ��ҿ��������ȥ������Ҫ�շ�Ŷ�����ͷ�����Ҫʮ����");
    } else if (status == 23) {
        if (cm.getPlayer().getMeso() >= 100000) {//�ж���ҽ���Ƿ����ʮ��
            cm.gainMeso(-100000);//�۳�ʮ����
            cm.warp(106010000);//���͵���ת�̹ٵĵ�ͼ
            cm.sendOk("���Ѿ����㴫�͵���ת�̹����ڵ�ͼ�ˡ��������⣬ȥ�����ɣ�");
            cm.dispose();
        } else {
            cm.sendOk("��Ľ�Ҳ���10�����޷������ȥ��\r\n�����㻹���Լ�ȥ�ٶ����Ǹ���ͼ��ôȥ�ɣ����\r\n��Ŀǰӵ�� " + cm.getPlayer().getMeso() + " ���.");
        }

        //�˴���ʼִ�ж�ת
    } else if (status == 31) {
        cm.sendSimple("����תְ��Ϊʲôְҵ ? #b\r\n#L0#����#l\r\n#L1#����#l#k");
    } else if (status == 32) {
        var jobName;
        if (selection == 0) {
            jobName = "����";
            job = 310; // ����
        } else {
            jobName = "����";
            job = 320; // ����
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
        cm.sendNextPrev("��Ҫ��ת���ұ����Ȳ��������������ȥ - ������ - ���III \r\n��ȥ֮��������һ����ħ��ʦð����ҵķ�����������������õ�������� #r�ڷ�#k�����������ҡ�");
    } else if (status == 42) {
        cm.sendNextPrev("ʲô���㲻֪�� - ������ - ���III ��ôȥ��");
    } else if (status == 43) {
        cm.askAcceptDecline("�ðɣ��ҿ��������ȥ������Ҫ�շ�Ŷ�����ͷ�����Ҫ��ʮ����!");
    } else if (status == 44) {
        if (cm.getPlayer().getMeso() >= 200000) {//�ж���ҽ���Ƿ����20��
            cm.gainMeso(-200000);//�۳�20����
            cm.warp(108010301);//���͵���ת�̹ٵĵ�ͼ
            cm.spawnMobOnMap(9001002, 1, 299, 20, 108010301);//�ٻ�������//9001002 - �����ȵķ���
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
            cm.sendOk("���Ѿ������͵����Ϲ����ˡ���� #b����#k �Ի���");
            cm.dispose();
        } else {
            cm.sendOk("��Ľ�Ҳ���20�����޷������ȥ��\r\n�����㻹������ʵʵ����ȥ�ɣ����\r\n��Ŀǰӵ�� " + cm.getPlayer().getMeso() + " ���.");
        }
        cm.dispose();
    }
}
