var status;
var ��С�ȼ� = 20;
var ���С�ȼ� = 255;
var ��С���� = 1;
var ���С���� = 6;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        var text = "";
        for (i = 0; i < 10; i++) {
            text += "";
        }
        text += "#d�����Ƿ�����������������Ҫ��" + ��С���� + "�ˣ��ȼ���" + ��С�ȼ� + "�����ϼ��ɿ�ʼ�����������\r\n\r\n"
        text += "#L1##r��ʼ��Ӹ���#l\r\n"
        cm.sendSimple(text);
    } else if(status==1){
		if (selection == 2) {
			cm.openNpc(9020000,5);
		}else if (selection == 1) {
        if (cm.getParty() == null) { // û�����
            cm.sendOk("��û�ж����޷����룡");
            cm.dispose();
        } else if (!cm.isLeader()) { // ���Ƕӳ�
            cm.sendOk("������Ķӳ�����˵��~");
            cm.dispose();
        } else {
            var party = cm.getParty().getMembers();//�������� ���� = party ��ֵ party = ��ȡ����������
            var inMap = cm.partyMembersInMap(); //�������� ��ʼ��ͼ = inMap ��ֵ inMap = ��ȡ�������������ڵ�ͼ
            var levelValid = 0;
            for (var i = 0; i < party.size(); i++) {//ѭ����ȡ��������
                if (party.get(i).getLevel() >= ��С�ȼ� && party.get(i).getLevel() <= ���С�ȼ�)//�ж϶����Ա�ȼ��Ƿ񳬹��޶��ȼ�
                    levelValid++;
            }
            if (inMap < ��С���� || inMap > ���С����) {//�жϳ�ʼ��ͼ ������������Ƿ�ƥ���޶�����
                cm.sendOk("��Ķ�����������" + ��С���� + "��.�����Ķ�����Ա�ټ������������ڽ��븱��.");
                cm.dispose();
            } else if (levelValid != inMap) {
                cm.sendOk("��ȷ����Ķ�����Ա��С�ȼ��� " + ��С�ȼ� + " �� " + ���С�ȼ� + "֮��. ���� #b" + levelValid + "#k �����Ա�ĵȼ�������ȷ�ķ�Χ��.");
                cm.dispose();
            } else {
                var em = cm.getEventManager("KerningPQ");//�����¼�
                if (em == null) {//����¼��ű�������
                    cm.sendOk("�¼�������������ϵ����Ա.");
                    cm.dispose();
                } else {
                    //�жϸ�����ͼ�������Ƿ�Ϊ0
                    if (cm.getPlayerCount(103000800) <= 0 && cm.getPlayerCount(103000801) <= 0 && cm.getPlayerCount(103000802) <= 0 && cm.getPlayerCount(103000803) <= 0 && cm.getPlayerCount(103000804) <= 0) {
                       //���κ󣬿��Դ�������
					    cm.givePartyItems(4001008, -1, true);//ͨ��֤ ȫ��ɾ�� �����Դ����������ǽ�ȥ����ʧ
                        cm.givePartyItems(4001007, -1, true);//֤�� ȫ��ɾ�� �������Ҳ����ȷ//����Ϊ��true ����ֱ��ɾ���������е��������
                        em.startInstance(cm.getParty(), cm.getPlayer().getMap());//���Ͷ�����븱��
                    } else {
                        cm.sendOk("���Ե�...�������ڽ�����.");
                    }
                }
                cm.dispose();
			
            }
        }
    }
}
}