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
            txt = "����ÿ�����̵�6��NPCŶ���ҽ�������\r\n\r\n";

            if (cm.getPS() == 5){// cm.getPS()  ����˼�� ��ȡ����ֵ�������1 �͵ó��������Ѿ�����˵�һ�� �����������еڶ�������!

                txt += "#L1##b�ռ�25��#v4000164##v4000165#�����ң���#l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ���ɹ���Ȼ����ȥ��.���֮��-�ֿ����Ա-С��!\r\n��ڶ���������";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000164,25) && cm.haveItem(4000165,25)){
                cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ����ڶ����ˡ�ֻ���賿12��ˢ�²��У�
		cm.gainItem(4000164, -25);
				cm.gainItem(4000165, -25);
cm.gainExp(+500000);
cm.gainMeso(+500000);
                cm.gainNX(+500);
                cm.sendOk("���̵�6�����!��ϲ��ý��=500000������=500000�����500��\r\n\r\nȻ����ȥ��..���֮��-�ֿ����Ա-С��.������һ����");
                cm.dispose();
            }else{
                cm.sendOk("�ռ�25��#v4000164##v4000165#������!");
                cm.dispose();
            }
        }
    }
}
