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
            txt = "����ÿ���������һ�ֵ�10��NPCŶ���ҽп�˹��\r\n\r\n";

            if (cm.getPS() == 9){// cm.getPS()  ����˼�� ��ȡ����ֵ�������1 �͵ó��������Ѿ�����˵�һ�� �����������еڶ�������!

                txt += "#L1##b�ռ�#v4001083##v4001084##v4001085#��1�������ң���#l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ���ɹ���Ȼ����ȥ��.��ľ��-�ֿ����Ա-��˹��!\r\n��ڶ���������";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4001083,1) && cm.haveItem(4001084,1) && cm.haveItem(4001085,1)){
                cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ����ڶ����ˡ�ֻ���賿12��ˢ�²��У�
		
               cm.gainItem(4001083, -1);
				cm.gainItem(4001084, -1);
				cm.gainItem(4001085, -1);
//cm.gainExp(+500000);
//cm.gainMeso(+500000);
               // cm.gainNX(+500);
				cm.gainItem(2002031,3);
				cm.gainItem(2340000,5);
				cm.gainItem(2022279,5);
				//cm.gainItem(4310049,1);//�����˽��
				//cm.gainItem(5072000,3,1);//����
                cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�������һ���������񣬻������ͭ��X5 ף����X5 �سɱ�X3����������ʮ�㰡��");
                cm.sendOk("�������һ����10�����!��ϲ������͵���X5 ף����X5 ��ݮ����X3��\r\n\r\n���Ѿ���������е����������������������ɣ�");
                cm.dispose();
            }else{
                cm.sendOk("�ռ�#v4001083##v4001084##v4001085#��1�������ң���");
                cm.dispose();
            }
        }
    }
}
