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
            text += "#e#rÿ���״��ۼƳ�ֵ�ﵽ300������ɻ�ã�#n#b\r\n��Ʒ1���������15��\r\n��Ʒ2��ף������5��\r\n��Ʒ3: ����ð�յ�����2��\r\n��Ʒ4: �����׹6Сʱ\r\n��Ʒ5: �ʼ�����10��\r\n\r\nΪ��֤����ƽ��,���³�ֵ����800�����������Ʒ\r\n�����³����Լ�����ֵ#r\r\n��ȡ�������Ҫ���㹻�Ŀռ�Ŷ������ϵͳ���˶���������Ա������Ŷ\r\n"//3
            text += "#L1##r#v4310048#��ȡ�ۼƳ�ֵ300���#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.canHold(1112793,1)){
			cm.sendOk("��������ı��������ٿճ�2��λ�ã�");
            cm.dispose();
        } else if(cm.haveItem(4310048,1)){
				cm.gainItem(4310048, -1);
				cm.gainItem(2049100, 15);//����
				cm.gainItem(2340000, 5);//ף��
				cm.gainItem(4310100, 2);//�����һ���
				cm.gainItem(1122017, 1 ,6);//3�������6Сʱ
				cm.gainItem(5150040, 10);//�ʼ�

            cm.sendOk("��ȡ�ɹ�����ϲ�㣡");
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "��ÿ�³�ֵ300���֪ͨ��" + " : " + "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���ȡ��ÿ���״��ۼƳ�ֵ�ﵽ300�������"));
            cm.dispose();
			}else{
            cm.sendOk("��ĳ�ֵ�ﲻ���޶ȣ��������Ѿ���ȡ���ˣ������ظ���ȡ��");
            cm.dispose();
			}
		}
    }
}


