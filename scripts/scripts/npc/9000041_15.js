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
            text += "#e#d����#v2060009#x1000֧ +5����.��Ҫ��\r\n#v2060008#x1000.#v4001126#x200.#v4011001#x5.#v4031891#50��.�Ѽ��õ����ҾͿ���Ϊ������.\r\n\r\n"//3
            text += "#L1##r������ר��ǿ����ʸ1000֧#l\r\n\r\n"//3
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
			}else */if(cm.haveItem(4001126,200) && cm.haveItem(4011001,5) && cm.haveItem(2060008,1000) && cm.getMeso() > 500000){
				cm.gainItem(4001126, -200);
				cm.gainItem(4011001, -5);
				cm.gainItem(2060008, -1000);
				cm.gainItem(2060009,1000);
				cm.gainMeso(-500000);
            cm.sendOk("�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]������[��ר��ǿ����ʸ]��һֱ���Ƽ���ǧ�������������");
            cm.dispose();
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
			}
		}
    }
}


