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
            text += "#e#d���ã�����ͨ�������������õ���һ��������Ŷ��\r\n\r\n#v1012474#Lv100�����.ȫ����+8,HP/MP+100,����/ħ��+50,����/�ر�+15,����/ħ��+6\r\n�������:#v4170009#x50��.�Ѽ���ϾͿ������ҽ��н�����.#l\r\n\r\n"//3
            text += "#L1##r��Ҫ�ϳ�#v1012474##l\r\n\r\n"//3
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
			}else */if(cm.haveItem(4170009,50)){
				cm.gainItem(4170009, -50);
				cm.gainItem(1012474,8,8,8,8,100,100,6,6,50,50,15,15,0,0);
				cm.gainMeso(100000);
            cm.sendOk("�һ��ɹ���");
//cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]��50��[����������]�ɹ��ϳ�10������ͷ�Ҷ���Σ���ϲ������");
            cm.dispose();
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
			}
		}
    }
}


