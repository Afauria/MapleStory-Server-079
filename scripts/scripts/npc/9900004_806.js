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
            text += "#e#r˽�ĵ�����֤Ů�����ɻ�ã�#n#b\r\n1������ð�յ�Ů��ѫ�£���ά15 HP/MP1500 ˫��15 ˫��200 ���лر�50 ������Ծ20 ��\r\n2����������������1��\r\n3��1W���\r\n4������������⽻��ȯ��5\r\n#r��ȡ�������Ҫ���㹻�Ŀռ�Ŷ������ϵͳ���˶���������Ա������Ŷ\r\n"//3
            text += "#L1##r#v4310022#��ȡŮ����֤���#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.canHold(1112793,1)){
			cm.sendOk("��������ı��������ٿճ�4��λ�ã�");
            cm.dispose();
        } else if(cm.haveItem(4310022,1)){
				cm.gainItem(4310022, -1);
				cm.gainItem(5150038, 1);//��������������
				cm.gainItem(4001215, 5);//����������⽻��ȯ
				cm.gainNX(10000);//���
				cm.gainItem(1142304,15,15,15,15,1500,1500,15,15,200,200,50,50,20,10);//Ů��ѫ��
            cm.sendOk("��ȡ�ɹ����ܸ���Ϊ�����");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]��Ϊ����ð�յ�һ����Ů����ȥ������Ϊ���°ɣ�");
            cm.dispose();
			}else{
            cm.sendOk("��ȷ������֤�ɹ���ô��");
            cm.dispose();
			}
		}
    }
}


