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
            txt = "����ÿ�����̵�5��NPCŶ��\r\n\r\n";

            if (cm.getPS() == 4){// cm.getPS()  ����˼�� ��ȡ����ֵ�������1 �͵ó��������Ѿ�����˵�һ�� �����������еڶ�������!

                txt += "#L1##b�ռ�50���������֮β#v4000013#�����ң���#l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ���ɹ���Ȼ����ȥ��.����֮��-�ֿ����Ա-������!\r\n��ڶ���������";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000013,50)){
                cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ����ڶ����ˡ�ֻ���賿12��ˢ�²��У�
		
                cm.gainItem(4000013, -50);
cm.gainExp(+400000);
cm.gainMeso(+400000);
cm.gainDY(+500);
//cm.gainItem(4002000,5);
//cm.gainItem(4170007,1);
//cm.gainItem(4170001,1);
                cm.sendOk("���̵�5�����!��ϲ��ý��=400000������=400000������=500\r\n\r\nȻ����ȥ��..����֮��-�ֿ����Ա-������.������һ����");
                cm.dispose();
            }else{
                cm.sendOk("�ռ�50���������֮β#v4000013#������!");
                cm.dispose();
            }
        }
    }
}
