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
            txt = "����ÿ����������NPC��������.\r\n\r\n";

            if (cm.getPS() == 4){// cm.getPS()  ����˼�� ��ȡ����ֵ�������0 �͵ó���û�п�ʼ���� �����������е�һ������!
                txt += "#L1##b�ռ�100����Һ��#v4000004#�����ң�#l";
                cm.sendSimple(txt);
            }else{
                txt += "�㻹û�����֮ǰ�Ĺؿ��������Ѿ���ɹ��˵����֣�����������һ����.!\r\n��ڶ���������ɱ����ڣ�";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000004,100) && cm.getLevel() <= 100 && cm.getLevel() >= 30){
                cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ�����һ���ˡ�ֻ���賿12��ˢ�²��У�
		
               cm.gainItem(4001126, 50);
			   cm.gainMeso(200000)
			   cm.gainItem(4000004, -100);
                cm.gainExp(+10000);
                cm.sendOk("���̵��������!��þ���10�� ���20�� ��Ҷ50��\r\n\r\n���Ѿ���ɹ���Ȼ���˵����֣�����������һ����.");
                cm.dispose();
            }else{
                cm.sendOk("�ռ�100����Һ��#v4000004#������!");
                cm.dispose();
            }
        }
    }
}
