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
            txt = "����ÿ�����̵�7��NPCŶ���ҽ�С��\r\n\r\n";

            if (cm.getPS() == 6){// cm.getPS()  ����˼�� ��ȡ����ֵ�������1 �͵ó��������Ѿ�����˵�һ�� �����������еڶ�������!

                txt += "#L1##b�ռ�100��#v4000016#�����ң���#l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ���ɹ���Ȼ����ȥ��.���ֳ��﹫԰-���޵�!\r\n��ڶ���������";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000016,100)){
                cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ����ڶ����ˡ�ֻ���賿12��ˢ�²��У�
		
                cm.gainItem(4000016, -100);
//cm.gainExp(+100000);
cm.gainMeso(+1000000);
//cm.gainD(+300);
                cm.sendOk("���̵�7�����!��ϲ��ý��=1000000\r\n\r\nȻ����ȥ��..���ֳ��﹫԰-���޵�.������һ����");
                cm.dispose();
            }else{
                cm.sendOk("�ռ�100��#v4000016#������!");
                cm.dispose();
            }
        }
    }
}
