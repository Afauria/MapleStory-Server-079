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
            text += "#e#d����#v1372206#��Ҫ#v1372044#x1.#v4000460#x15.#v4000461#x15.#v4000462#x15.#v4021009#x15.#v4011007#x15.#v4031891#2000��.�Ѽ��õ����ҾͿ���Ϊ��������.#l\r\nȫ����+15.����100.ħ������150.��������Ϊ����.�ϳɺ󲻼���Ӿ�����.\r\n"//3
            text += "#L1##r����٤Ү������#l\r\n\r\n"//3
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
			}else */if(cm.haveItem(1372044,1) && cm.haveItem(4000460,15) && cm.haveItem(4000461,15) && cm.haveItem(4000462,15) && cm.haveItem(4021009,15) && cm.haveItem(4011007,15) && cm.getMeso() > 20000000){
				cm.gainItem(1372044, -1);
				cm.gainItem(4000460, -15);
				cm.gainItem(4000461, -15);
				cm.gainItem(4000462, -15);
				cm.gainItem(4021009, -15);
				cm.gainItem(4011007, -15);
				cm.gainItem(1372206,15,15,15,15,0,0,100,150,0,0,50,50,0,0);
				cm.gainMeso(-20000000);
            cm.sendOk("�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]������[٤Ү������]���������٣���ϲ�ɺأ�");
            cm.dispose();
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
			}
		}
    }
}


