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
            text += "#e#r��л��Ϊ����ð�յ������Ĺ���#n#b\r\n\r\n"
            text += "#L1##r#v1112768#���Ƿ�ȷ������#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.canHold(1112793,1)){
			cm.sendOk("��������ı��������ٿճ�2��λ�ã�");
            cm.dispose();
        } else if(cm.getPlayer().getNX() >= 6666){
				cm.gainNX(-6666);
				cm.gainItem(1112768, 1);//

            cm.sendOk("����ɹ�����ϲ�㣡");
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶��̵깺��֪ͨ��" + " : " + "��ϲ[" + cm.getPlayer().getName() + "]�ɹ�����A��������ʯ��ָ����"));
            cm.dispose();
			}else{
            cm.sendOk("��ĵ���Ƿ��㹻������������ֵ������Ϸ�л�ã�");
            cm.dispose();
			}
		}
    }
}


