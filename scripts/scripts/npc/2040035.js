function action(mode, type, selection) {
	if(cm.isLeader()){//�Ƕӳ� ���˸�����
	//�����ô��Ч���ѵ�Ҫ�ж�Ա��
		cm.�������Ʒ(4002003, 1);//ˮ����Ʊ1��
		cm.�������Ʒ(4002000, 1);//��ţ��Ʊ
		cm.�������Ʒ(4031456, 1);//��Ҷ��
		cm.�������Ʒ(4170007, 1);//��
		cm.�������Ʒ(4310149, 2);//ף����
		cm.����ӽ��(+1000000);//��ȡ����
		cm.getPlayer().endPartyQuest(1202); //might be a bad implentation.. incase they dc or something
		cm.removeAll(4001022);
		cm.removeAll(4001023);
		cm.warpParty(922010000);//�ӳ�����ȫ�ӽ�����ֱ�Ӵ��Ͷ����ȥ��
		cm.����(3, "[" + cm.getPlayer().getName() + "]�ɹ�ͨ�ء�������� - ��߳���ӡ�����÷�����ĵ�������");
		cm.dispose();
   } else{ //���Ƕӳ�
	    cm.sendOk("���öӳ���������ȡȫ�ӽ�����");
	    cm.dispose();
    }
}