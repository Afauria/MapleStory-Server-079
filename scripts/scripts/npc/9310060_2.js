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
            text += "#e#d[�ڰ�����2]������[�ڰ�����3]��ȷ����.#l\r\n\r\n"//3
            text += "#L1##r����Ϊ��ҫ����̩����#l\r\n\r\n"//3
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
			}else */if(cm.haveItem(1132185,1) && cm.haveItem(4001325,80)){
				cm.gainItem(1132185, -1);
				cm.gainItem(4001325, -80);
				cm.gainItem(1132186,50,50,50,50,0,0,20,20,0,0,0,0,0,0);
				//cm.gainMeso(100000);
            cm.sendOk("�һ��ɹ���");
cm.worldMessage(6,"��ң�["+cm.getName()+"]��[�ڰ�����2]������[�ڰ�����3].��������.����Ŭ���ɣ�");
cm.����(3, "��ң�[" + cm.getPlayer().getName() + "]��[�ڰ�����2]������[�ڰ�����3].��������.����Ŭ���ɣ�");
            cm.dispose();
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡����Ҫ\r\n#v4001325#x80��\r\n#v1132185#x1��");
            cm.dispose();
			}
		}
    }
}