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
                txt += "#L1##b�ռ�300�����Ϳ�����#v4000184#�����ң�#l";
                cm.sendSimple(txt);
            }else{
                txt += "�㻹û�����֮ǰ�Ĺؿ��������Ѿ���ɹ��˵�ʮ�֣�����������һ����.!\r\n��ڶ���������ɱ����ڣ�";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000184,300) && cm.getLevel() >= 81 && cm.getLevel() <= 150){
                cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ�����һ���ˡ�ֻ���賿12��ˢ�²��У�
		
               cm.gainItem(4000184, -300);
                cm.gainItem(2340000, 1);
                cm.gainExp(+500000);
                cm.sendOk("���̵�ʮ�����!���ף������1�š�����=500000\r\n\r\n���Ѿ���ɹ���Ȼ���˵�ʮ�֣�����������һ����.");
                cm.dispose();
            }else{
                cm.sendOk("�ռ�300�����Ϳ�����#v4000184#�����ң�");
                cm.dispose();
            }
        }
    }
}
