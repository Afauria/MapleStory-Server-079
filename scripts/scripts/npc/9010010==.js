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
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "#e#r��ӭ�������Ӽ������ģ��㵽����ŷ���˻��Ƿ������أ�#k#n\r\n"
            
            text += "\t\t\t#e#b   ��Ļ���ʣ�ࣺ " + cm.getPlayer().getjf() + "�㣡\r\n"
            
			text += "#L3##r#v4310158#�һ���ͨ�齱��x1��\t  ��Ҫ���֣�10\r\n\r\n"//
			
            text += "#L4##r#v4310158#�һ���ͨ�齱��x10��\t  ��Ҫ���֣�100#k\r\n\r\n"//
			
			text += "-------------------�齱��---------------------\r\n\r\n"//
            
            text += "#L1##v4310158#��������ͨ�齱#l\t#L2##v4310027#÷���糬���齱#l\r\n\r\n"
            
            cm.sendSimple(text);
        } else if (selection == 1) {
            cm.openNpc(9900004, 121);

        } else if (selection == 2) {
            cm.openNpc(9900004, 122);

        } else if (selection == 3) {
			if(cm.getPlayer().getjf() >= 10){
				cm.getPlayer().gainjf(-10);
				cm.gainItem(4310158,1);
				cm.sendOk("�����ɹ������#v4310158#x1����");
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "�����ֶһ���ͨ�齱�ҡ�" + " : " + "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���10���ֶһ�����ͨ�齱��x1����,ף��һ����꣡"));
					cm.dispose();
					}else{
					cm.sendOk("���ֲ��㣬���ֵ��û��֣�");
					cm.dispose();
				}
        } else if (selection == 4) {
			if(cm.getPlayer().getjf() >= 100){
				cm.getPlayer().gainjf(-100);
				cm.gainItem(4310158,10);
				cm.sendOk("�����ɹ������#v4310158#x10����");
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "�����ֶһ���ͨ�齱�ҡ�" + " : " + "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���100���ֶһ�����ͨ�齱��x10����,ף��һ����꣡"));
					cm.dispose();
					}else{
					cm.sendOk("���ֲ��㣬���ֵ��û��֣�");
					cm.dispose();
				}
		}
    }
}