importPackage(Packages.client);
var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (status == 0) {
            var txt = "";
            txt = "����ÿ����������NPC����ʮ��.\r\n\r\n";

            if (cm.getPS() == 9){// cm.getPS()  ����˼�� ��ȡ����ֵ�������0 �͵ó���û�п�ʼ���� �����������е�һ������!
                txt += "#L1##b�ռ�200���������֮β#v4000007#�����ң�#l";
                cm.sendSimple(txt);
            }else{
                txt += "�㻹û�����֮ǰ�Ĺؿ��������Ѿ���ɹ��˵�ʮ�֣�����������һ����.!\r\n��ڶ���������ɱ����ڣ�";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000007,200) && cm.getLevel() <= 200 && cm.getLevel() >= 30){
                cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ�����һ���ˡ�ֻ���賿12��ˢ�²��У�
		
                cm.gainItem(4000007, -200);
                cm.gainItem(4001126, 50);
				cm.gainItem(4000487, 20);
				cm.gainItem(4031456, 15);
				cm.gainItem(4251202, 10);
				cm.gainMeso(200000)
				cm.gainNX(1000);
                cm.gainExp(+100000);
                cm.sendOk("���̵�ʮ�����!��þ���10�� ���20�� ��Ҷ50�� ��ȯ1000 �ߵ����ˮ��10��\r\n\r\n���Ѿ���ɹ���Ȼ���˵�ʮ�֣�����������һ����.");
                cm.dispose();
            }else{
                cm.sendOk("�ռ�200���������֮β#v4000007#�����ң�");
                cm.dispose();
            }
        }
    }
}
