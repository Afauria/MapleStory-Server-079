function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			//��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
            text += "#e#d����#v2070006# +27����.��Ҫ��\r\n#v4021009#x3.#v4011007#x3.#v4011001#x10.#v4000040#x20.#v4021000#x10.#v4031891#1500��.�Ѽ��õ����ҾͿ���Ϊ������.\r\n\r\n��Ҫ��ʾ������ӵ��2�������ʱ������ϵGM��2����ֻ�1�����޷��ڣ�����\r\n\r\n"//3
            text += "#L1##r����������#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("���������಻��2���ո�");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("�ֽ������಻��1���ո�");
            cm.dispose();
			}else */if(cm.haveItem(4011007,3) && cm.haveItem(4021009,3) && cm.haveItem(4000040,20) && cm.haveItem(4011001,10) && cm.haveItem(4021000,10) && cm.getMeso() > 15000000){
				cm.gainItem(4021009, -3);
				cm.gainItem(4011007, -3);
				cm.gainItem(4011001, -10);
				cm.gainItem(4000040, -20);
				cm.gainItem(4021000, -10);
				cm.gainItem(2070006,1);
				cm.gainMeso(-15000000);
            cm.sendOk("�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]������[���޷���]����һ���������Լ���������");
            cm.dispose();
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
			}
		}
    }
}


