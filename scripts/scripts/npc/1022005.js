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
            txt = "����ÿ�����̵�4��NPCŶ��\r\n\r\n";

            if (cm.getPS() == 3){// cm.getPS()  ����˼�� ��ȡ����ֵ�������1 �͵ó��������Ѿ�����˵�һ�� �����������еڶ�������!

                txt += "#L1##b�ռ�25��#v4000043#+#v4000044#�����ң���#l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ���ɹ���Ȼ����ȥ��.��������-���ɹ���Ա-����!\r\n��ڶ���������";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000043,25) && cm.haveItem(4000044,25)){
                cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ����ڶ����ˡ�ֻ���賿12��ˢ�²��У�
		
               cm.gainItem(4000043, -25);
				cm.gainItem(4000044, -25);
cm.gainExp(+300000);
cm.gainMeso(+300000);
                cm.sendOk("���̵�4�����!��ϲ��ý��=300000������=300000\r\n\r\nȻ����ȥ��..��������-���ɹ���Ա-����.������һ����");
                cm.dispose();
            }else{
                cm.sendOk("�ռ�25��#v4000043#+#v4000044#������!");
                cm.dispose();
            }
        }
    }
}
