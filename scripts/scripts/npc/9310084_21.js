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
            text += "#e#d�һ�#v1113164#Lv30�����.ȫ����+2,HP/MP+200,����/ħ��+2,����/ħ��+10,����/�ر�+10,��Ծ/�ƶ�+5\r\n��Ҫ#v4170013#x30��.�Ѽ��õ��߾Ϳ������Ҷһ���.#l\r\n\r\n"//3
            text += "#L1##r�һ������ͽ����˽�ָ#l\r\n\r\n"//3
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
			}else */if(cm.haveItem(4170013,30)){
				cm.gainItem(4170013, -30);
				cm.gainItem(1113164,2,2,2,2,200,200,2,2,10,10,10,10,5,5);
				cm.gainMeso(100000);
            cm.sendOk("�һ��ɹ���");
		//	cm.worldMessage(6,"��ң�["+cm.getName()+"]��30��[�������]�һ���[�����ͽ����˽�ָ]���������֣�����ƷŶ~��");
            cm.dispose();
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
			}
		}
    }
}


