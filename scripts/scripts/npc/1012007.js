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
            txt = "����ÿ�����̵�8��NPCŶ���ҽ�������\r\n\r\n";

            if (cm.getPS() == 7){// cm.getPS()  ����˼�� ��ȡ����ֵ�������1 �͵ó��������Ѿ�����˵�һ�� �����������еڶ�������!

                txt += "#L1##b�ռ�50��#v2000007##v2050004#�����ң���#l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ���ɹ���Ȼ����ȥ��.��߳�-�ֿ����Ա-���!\r\n��ڶ���������";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(2000007,50) && cm.haveItem(2050004,50)){
                cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ����ڶ����ˡ�ֻ���賿12��ˢ�²��У�
		
                cm.gainItem(2000007, -50);
				cm.gainItem(2050004, -50);
cm.gainExp(+500000);
//cm.gainMeso(+500000);
                cm.gainNX(+1000);
                cm.sendOk("���̵�8�����!��ϲ��þ���=500000�����1000��\r\n\r\nȻ����ȥ��..��߳�-�ֿ����Ա-���.������һ����");
                cm.dispose();
            }else{
                cm.sendOk("�ռ�50��#v2000007##v2050004#������!");
                cm.dispose();
            }
        }
    }
}
