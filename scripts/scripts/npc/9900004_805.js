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
            text += "#e#r�ۻ���ֵ�ﵽ800������ɻ�ã�#n#b\r\n  1�� ף������15��\r\n  2�� �������30��\r\n  3�� ����ð�յ�����4ö\r\n  4�� �����׹48Сʱ\r\n  5�� ��ˮ����Ʊ25��\r\n  6�� ��ţ��Ʊ25��\r\n  7�� ����ţ��Ʊ25��\r\n  8�� ľ����Ʊ25��\r\n  9�� �����齱��һö\r\n 10�� ���ӱ���25��\r\n 11�� �Ϲ����ű�3ö�������������Ϲ����Ž�ָ��\r\n\r\n#r��ȡ�������Ҫ���㹻�Ŀռ�Ŷ������ϵͳ���˶���������Ա������Ŷ\r\n"//3
            text += "#L1##r#v4310119#��ȡ�ۼƳ�ֵ800���#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.canHold(1112793,1)){
			cm.sendOk("��������ı��������ٿճ�2��λ�ã�");
            cm.dispose();
        } else if(cm.haveItem(4310119,1)){
				cm.gainItem(4310119, -1);
				cm.gainItem(4310100, 4);//�һ���
				cm.gainItem(2049100, 30);//����
				cm.gainItem(2340000, 15);//ף��
				cm.gainItem(1122017, 1 ,48);//3�������48Сʱ
				cm.gainItem(4002003, 25);//��ˮ����Ʊ
				cm.gainItem(4002000, 25);//��ţ��Ʊ
				cm.gainItem(4002001, 25);//����ţ��Ʊ
				cm.gainItem(4002002, 25);//ľ����Ʊ
				cm.gainItem(4310058, 3);//�Ϲ����ű�
				cm.gainItem(2370000, 20);//���ӱ���
				cm.gainItem(4310027,1);//�����齱��
            cm.sendOk("��ȡ�ɹ���");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���ȡ�ۻ���ֵ800�������");
            cm.dispose();
			}else{
            cm.sendOk("��ĳ�ֵ�ﲻ���޶ȣ��������Ѿ���ȡ���ˣ������ظ���ȡ��");
            cm.dispose();
			}
		}
    }
}


