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
            txt = "����ÿ�����̵�3��NPCŶ��\r\n\r\n";

            if (cm.getPS() == 2){// cm.getPS()  ����˼�� ��ȡ����ֵ�������1 �͵ó��������Ѿ�����˵�һ�� �����������еڶ�������!

                txt += "#L1##b�ռ�25��#v4000190#+#v4000191#�����ң���#l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ���ɹ���Ȼ����ȥ��.��ʿ����-�ֿ��ϰ�-������!\r\n��ڶ���������";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000190,25) && cm.haveItem(4000191,25)){
                cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ����ڶ����ˡ�ֻ���賿12��ˢ�²��У�
		
                cm.gainItem(4000190, -25);
				cm.gainItem(4000191, -25);
cm.gainExp(+250000);
cm.gainMeso(+250000);
                cm.sendOk("���̵�3�����!��ϲ��ý��=250000������=250000\r\n\r\nȻ����ȥ��.��ʿ����-�ֿ��ϰ�-������.������һ����");
                cm.dispose();
            }else{
                cm.sendOk("�ռ�25��#v4000190#+#v4000191#������!");
                cm.dispose();
            }
        }
    }
}
