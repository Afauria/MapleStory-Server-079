importPackage(net.sf.odinms.client);
var status = 0;

var ttt = "#fUI/UIWindow.img/Quest/icon9/0#";
var xxx = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;


        if (status == 0) {

            var textz = "\r\n#e��ӭ����#bð�յ��ܻ�#k.ÿ��ÿ����һ�λ�ȡ���Ӧ�Ľ�������������ÿ�ն�����#l\r\n\r\n";

            textz += "#L100##e#d��һ��#v4000019#100��#b(���300��+#v2022468#X10).\r\n\r\n"//3
            textz += "#L101##e#d�ڶ���#v4000005#100��#b(���600��+#v2022468#X10).\r\n\r\n"//3
            textz += "#L102##e#d������#v4000007#100��#b(���900��+#v2022468#X10).\r\n\r\n"//3
            textz += "#L103##e#d������#v4000142#100��#b(���1500��+#v2022468#X10).\r\n\r\n"//3
            textz += "#L104##e#d������#v4000160#100��#b(���2000��+#v2022468#X10).\r\n\r\n"//3
            textz += "#L105##e#d������#v4000180#100��#b(���3000��+#v2022468#X10+#v2340000#X5).\r\n\r\n"//3
            textz += "#L106##e#d������#v4000274#100��#b(���4000��+#v2022468#X10+#v4000464#X5).\r\n\r\n"//3
            textz += "#L107##e#d�ڰ���#v4000407#30��#b(���5000��+#v2022468#X30+#v2614015#X5).\r\n\r\n"//3
            textz += "#L108##e#d�ھ���#v4000402#30��#b(���1E��+#v2022468#X40+#v2614015#X5).\r\n\r\n"//3
            textz += "#L109##e#d��ʮ��#v4000406#30��#b(���2E#v2022468#X50#v2614015#X10#v4000464#X5.\r\n\r\n"//3

            //textz += "#d#L5#�ռ�#v4000161##b#z4000161##r 100 #d���ɶһ�#r#v4032226#10ֻ\r\n";

            //textz += "#d#L6#�ռ�#v4000052##b#z4000052##r 100 #d���ɶһ�#r#v4032226#10ֻ\r\n";

            //textz += "#d#L7#�ռ�#v4000190##b#z4000190##r 100 #d���ɶһ�#r#v4032226#10ֻ\r\n";

            //textz += "#d#L8#�ռ�#v4001085##b#z4001085##r 1 #d��\r\n  �ɶһ�#r1000��#d��#l\r\n";

            //textz += "#d#L9#�ռ�#v4001084##b#z4001084##r 1 #d��\r\n  �ɶһ�#r1000��#d��#l\r\n";

            //textz += "#d#L10#�ռ�#v4001083##b#z4001083##r 1 #d��\r\n  �ɶһ�#r2000��#d��#l\r\n";
            cm.sendSimple(textz);


        } else if (status == 1) {

            if (selection == 100) {
                if (cm.getBossLog('�ܻ�1') == 0 && cm.haveItem(4000019, 100)) {

                    cm.setBossLog('�ܻ�1');//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ�����һ���ˡ�ֻ���賿12��ˢ�²��У�

                    cm.gainItem(4000019, -100);
					cm.gainItem(2022468, 10);
                    cm.gainMeso(+3000000);//
                    cm.gainExp(+50000);//������
                    cm.worldMessage(6, "������ÿ������[" + cm.getName() + "]�ɹ�����˵�һ������ȡ�˴�������!");
                    cm.sendOk("���̵�һ�����!\r\n\r\nȻ����ȥ������һ��.");
                    cm.dispose();
                } else {
                    cm.sendOk("�ռ�100��#v4000019#������!\r\nPS�����Ѿ���ɹ��û��ڣ����߲��ϲ��㣡");
                    cm.dispose();
                }
            } else if (selection == 101) {
                if (cm.getBossLog('�ܻ�1') > 0 && cm.getBossLog('�ܻ�2') == 0 && cm.haveItem(4000005, 100)) {

                    cm.setBossLog('�ܻ�2');//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ�����һ���ˡ�ֻ���賿12��ˢ�²��У�

                    cm.gainItem(4000005, -100);
					cm.gainItem(2022468, 10);
                    cm.gainMeso(+6000000);//��ȡ����
                    cm.gainExp(+100000);
                    cm.worldMessage(6, "������ÿ������[" + cm.getName() + "]�ɹ�����˵ڶ�������ȡ�˴�������!");
                    cm.sendOk("���̵ڶ������!\r\n\r\n���Ѿ���ɹ���Ȼ���˵ڶ��֣�����������һ����.");
                    cm.dispose();
                } else {
                    cm.sendOk("�ռ�100��#v4000005#������!\r\nPS�����Ѿ���ɹ��û��ڣ�����û�����һ�������߲��ϲ��㣡");
                    cm.dispose();
                }
            } else if (selection == 102) {
                if (cm.getBossLog('�ܻ�2') > 0 && cm.getBossLog('�ܻ�3') == 0 && cm.haveItem(4000007, 100)) {

                    cm.setBossLog('�ܻ�3');//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ�����һ���ˡ�ֻ���賿12��ˢ�²��У�

                    cm.gainItem(4000007, -100);
					cm.gainItem(2022468, 10);
                    cm.gainMeso(+9000000);//��ȡ����
                    cm.gainExp(+200000);
                    cm.worldMessage(6, "������ÿ������[" + cm.getName() + "]�ɹ�����˵���������ȡ�˴�������!");
                    cm.sendOk("���̵��������!\r\n\r\n���Ѿ���ɹ���Ȼ���˵����֣�����������һ����.");
                    cm.dispose();
                } else {
                    cm.sendOk("�ռ�100��#v4000007#������!\r\nPS�����Ѿ���ɹ��û��ڣ�����û�����һ�������߲��ϲ��㣡");
                    cm.dispose();


                }
            } else if (selection == 103) {
                if (cm.getBossLog('�ܻ�3') > 0 && cm.getBossLog('�ܻ�4') == 0 && cm.haveItem(4000083, 100)) {

                    cm.setBossLog('�ܻ�4');//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ�����һ���ˡ�ֻ���賿12��ˢ�²��У�

                    cm.gainItem(4000083, -100);
					cm.gainItem(2022468, 10);
                    cm.gainMeso(+15000000);//��ȡ����
                    cm.gainExp(+300000);
                    cm.worldMessage(6, "������ÿ������[" + cm.getName() + "]�ɹ�����˵��Ļ�����ȡ�˴�������!");
                    cm.sendOk("���̵��������!\r\n\r\n���Ѿ���ɹ���Ȼ���˵����֣�����������һ����.");
                    cm.dispose();
                } else {
                    cm.sendOk("�ռ�100��#v4000083#������!\r\nPS�����Ѿ���ɹ��û��ڣ�����û�����һ�������߲��ϲ��㣡");
                    cm.dispose();

                }
            } else if (selection == 104) {
                if (cm.getBossLog('�ܻ�4') > 0 && cm.getBossLog('�ܻ�5') == 0 && cm.haveItem(4000160, 100)) {

                    cm.setBossLog('�ܻ�5');//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ�����һ���ˡ�ֻ���賿12��ˢ�²��У�

                    cm.gainItem(4000160, -100);
					cm.gainItem(2022468, 10);
                    cm.gainMeso(+20000000);//��ȡ����
                    cm.gainExp(+400000);
                    cm.worldMessage(6, "������ÿ������[" + cm.getName() + "]�ɹ�����˵��廷����ȡ�˴�������!");
                    cm.sendOk("���̵��������!\r\n\r\n���Ѿ���ɹ���Ȼ���˵����֣�����������һ����.");
                    cm.dispose();
                } else {
                    cm.sendOk("�ռ�100��#v4000160#������!\r\nPS�����Ѿ���ɹ��û��ڣ�����û�����һ�������߲��ϲ��㣡");
                    cm.dispose();

                }
            } else if (selection == 105) {
                if (cm.getBossLog('�ܻ�5') > 0 && cm.getBossLog('�ܻ�6') == 0 && cm.haveItem(4000180, 100)) {

                    cm.setBossLog('�ܻ�6');//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ�����һ���ˡ�ֻ���賿12��ˢ�²��У�

                    cm.gainItem(4000180, -100);
					cm.gainItem(2022468, 10);
					cm.gainItem(2340000, 5);
                    cm.gainMeso(+30000000);//��ȡ����
                    cm.gainExp(+500000);
                    cm.worldMessage(6, "������ÿ������[" + cm.getName() + "]�ɹ�����˵���������ȡ�˴�������!");
                    cm.sendOk("���̵��������!\r\n\r\n���Ѿ���ɹ���Ȼ���˵����֣�����������һ����.");
                    cm.dispose();
                } else {
                    cm.sendOk("�ռ�100��#v4000180#������!\r\nPS�����Ѿ���ɹ��û��ڣ�����û�����һ�������߲��ϲ��㣡");
                    cm.dispose();

                }
            } else if (selection == 106) {
                if (cm.getBossLog('�ܻ�6') > 0 && cm.getBossLog('�ܻ�7') == 0 && cm.haveItem(4000274, 100)) {

                    cm.setBossLog('�ܻ�7');//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ�����һ���ˡ�ֻ���賿12��ˢ�²��У�

                    cm.gainItem(4000274, -100);
					cm.gainItem(2022468, 10);
					cm.gainItem(4000464, 5);
                    cm.gainMeso(+40000000);//��ȡ����
                    cm.gainExp(+600000);
                    cm.worldMessage(6, "������ÿ������[" + cm.getName() + "]�ɹ�����˵��߻�����ȡ�˴�������!");
                    cm.sendOk("���̵��������!\r\n\r\n���Ѿ���ɹ���Ȼ���˵����֣�����������һ����.");
                    cm.dispose();
                } else {
                    cm.sendOk("�ռ�100��#v4000274#������!\r\nPS�����Ѿ���ɹ��û��ڣ�����û�����һ�������߲��ϲ��㣡");
                    cm.dispose();

                }
            } else if (selection == 107) {
                if (cm.getBossLog('�ܻ�7') > 0 && cm.getBossLog('�ܻ�8') == 0 && cm.haveItem(4000407, 30)) {

                    cm.setBossLog('�ܻ�8');//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ�����һ���ˡ�ֻ���賿12��ˢ�²��У�

                    cm.gainItem(4000407, -30);
                  cm.gainItem(2022468, 30);
				  cm.gainItem(2614015, 5);
                    cm.gainMeso(+50000000);//��ȡ����
                    cm.gainExp(+700000);
                    cm.worldMessage(6, "������ÿ������[" + cm.getName() + "]�ɹ�����˵ڰ˻�����ȡ�˴�������!");
                    cm.sendOk("���̵ڰ������!\r\n\r\n���Ѿ���ɹ���Ȼ���˵ڰ��֣�����������һ����.");
                    cm.dispose();
                } else {
                    cm.sendOk("�ռ�30��#v4000407#������!\r\nPS�����Ѿ���ɹ��û��ڣ�����û�����һ�������߲��ϲ��㣡");
                    cm.dispose();

                }
            } else if (selection == 108) {
                if (cm.getBossLog('�ܻ�8') > 0 && cm.getBossLog('�ܻ�9') == 0 && cm.haveItem(4000402, 30)) {

                    cm.setBossLog('�ܻ�9');//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ�����һ���ˡ�ֻ���賿12��ˢ�²��У�

                    cm.gainItem(4000402, -30);
                  cm.gainItem(2022468, 40);
				  cm.gainItem(2614015, 5);
                    cm.gainMeso(+100000000);//��ȡ����
                    cm.gainExp(+8000000);
                    cm.worldMessage(6, "������ÿ������[" + cm.getName() + "]�ɹ�����˵ھŻ�����ȡ�˴�������!");
                    cm.gainvip(+1);
                    cm.sendOk("���̵ھ������!\r\n\r\n���Ѿ���ɹ���Ȼ���˵ھ��֣�����������һ����.");
                    cm.dispose();
                } else {
                    cm.sendOk("�ռ�30��#v4000402#������!\r\nPS�����Ѿ���ɹ��û��ڣ�����û�����һ�������߲��ϲ��㣡");
                    cm.dispose();

                }
            } else if (selection == 109) {
                if (cm.getBossLog('�ܻ�9') > 0 && cm.getBossLog('�ܻ�10') == 0 && cm.haveItem(4000406, 30)) {

                    cm.setBossLog('�ܻ�10');//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ�����һ���ˡ�ֻ���賿12��ˢ�²��У�

                    cm.gainItem(4000406, -30);
					cm.gainItem(2022468, 50);
					cm.gainItem(2614015, 10);
					cm.gainItem(4000464, 5);
                    cm.gainMeso(+200000000);//��ȡ����
                    cm.gainExp(+1000000);
					cm.spawnMonster(9300340,1);
                    cm.worldMessage(6, "������ÿ������[" + cm.getName() + "]�ɹ�����˵�ʮ������ȡ�˴�������!�����������ˣ�");
                    cm.sendOk("���̵�ʮ�����!\r\n\r\n���Ѿ���ɹ���Ȼ���˵�ʮ��.�����������ˣ�");
                    cm.dispose();
                } else {
                    cm.sendOk("�ռ�30��#v4000406#������!\r\nPS�����Ѿ���ɹ��û��ڣ�����û�����һ�������߲��ϲ��㣡");
                    cm.dispose();

                }
            } else if (selection == 10) {
                if (cm.haveItem(4001083, 1) && cm.getBossLog('PlayQuest90') < 1) {
                    cm.gainItem(4001083, -1);
                    cm.setBossLog('PlayQuest90');
                    cm.gainNX(2000);
                    cm.sendOk("�������,������½���:\r\n2000���");
                    cm.dispose();
                } else {
                    cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
                    cm.dispose();
                }

            } else if (selection == 11) {
                if (cm.haveItem(4001126, 1000) && cm.getBossLog('PlayQuest14') < 1) {
                    cm.gainItem(4001126, -1000);
                    cm.setBossLog('PlayQuest14');
                    cm.gainNX(1000);
                    cm.sendOk("�������,������½���:\r\n1000���");
                    cm.dispose();
                } else {
                    cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
                    cm.dispose();
                }
            }
        }
    }
}
