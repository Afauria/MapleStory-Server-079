function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
                //�����ҵ��˺ű� money�ֶε�ֵ = 0 ��ʾ��npc�Ի�
                cm.sendSimple("#d                  �����޳�ֵ\r\n#k");
       
            
        } else if (selection == 1) {
            cm.openWeb("http://new.shoukabao.com/Payment/Service/695c3a9e30551e1dbbcc4297cc40f798");
            cm.dispose();
        } else if (selection == 2) {
            cm.openNpc(9900004, 2);
			       } else if (selection == 10) {
          
            //�ű���ʼ
            //�����ж�getzb,��ȡ�����˺ű�accounts ������ֶΣ�money ����ֵ���Ƿ����0
            if (cm.getzb() > 0) {
                //����һ����������Ϊ����ֵ��������һ��ֵ�� ֵ��cm.getzb() ͬ��
                var ��ֵ��� = cm.getzb();
                //����һ����������Ϊ������ʣ�������һ��ֵ��ֵ��cm.getzb * 100 ������money��ֵ������ *100 ����money��ֵ�� 5 *100����500 =�����
                var ����� = ��ֵ��� * 100;
                //����һ����������Ϊ�����ֱ��ʣ�������һ��ֵ��ֵ��cm.getzb * 1 ������money��ֵ������ * 1 ����money��ֵ�� 5 * 1����5 =���ֱ���
                var ���ֱ��� = ��ֵ��� * 1;
                //������ҵ�� ���� = �����
                cm.gainNX(�����);//�����ȯ
                //������һ��� ���� = ���ֱ���
                cm.gainjf(���ֱ���);//�������
                //����money�ֶε�ֵΪָ����������ֵΪ����ȥ��moneyֵ����
                cm.setzb(-��ֵ���);//����money��ֵ
				cm.setmoneyb(+��ֵ���);
                //npc��ʾ�Ի�
                cm.sendOk("���ѳɹ���ȡ�� " + ����� + "���!\r\n�������ӵ������ʻ�! \r\n���ܰ�!\r\nͬʱ�������:" + ���ֱ��� + "����! #r�Ͽ�ȥ�̳ǹ�����ϲ������Ʒ��!#k"); //
                //��ɫ�浵
                cm.getChar().saveToDB(false, false);
                //ˢ������
                cm.worldMessage(12, cm.getC().getChannel(), "����ֵϵͳ��" + " : " + " [" + cm.getPlayer().getName() + "]��ֵ��" + ����� + "���" + ���ֱ��� + "���֣��Ͽ�ȥ�̳���ѡϲ������Ʒ�ɣ�", true);
                //�����Ի�
                cm.dispose();
			}else{
				cm.sendOk("��û�п�����ȡ�ĵ��Ŷ��");
				cm.dispose();
			}
        }
    }
}