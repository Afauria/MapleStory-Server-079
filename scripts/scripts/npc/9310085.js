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
			if(cm.getJob() >= 0 && cm.getJob()<= 522 && cm.hasSkill(1017) == false){
			cm.teachSkill(1017,1,1);
			}else if(cm.getJob() >=2000 && cm.getJob() <= 2112 && cm.hasSkill(20001019) == false){
			cm.teachSkill(20001019,1,1);
			}
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			//��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
            text += "#e#d�ʼ����齱NPC��ӭ���Ĺ��٣�\r\nʹ�÷�������ȡ֮�������Լ������������ּ������а�ѩ��ͷ���ܣ�ʹ�ü��ܲ鿴��ȡ������ó���ٴζһ��任���У�������Լ�ϲ���ģ��Ͳ�������ˣ�����ʹ�ã�������Ҽ����BUFFͼ�꼴�ɡ�#l\r\n\r\n"//3
            text += "#L1##r��ȡ�ʼ����� ����#v2010006#x2#l\r\n"//3
           // text += "#L2##r����#v4001215#1��   2000���#l\r\n"//3
            //text += "#L3##r����#v4001215#10��  19000���#l\r\n"//3
          //  text += "#L4##r����#v4001215#100�� 180000���#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			if(cm.haveItem(2010006,2)){
            var ��� = Math.ceil(Math.random()* 316);
			if(��� == 0 || ��� == 222 || ��� == 258 || ��� == 216){
				��� = 1;
			}
			cm.setskillzq(���);
            cm.sendOk("��ȡ�ɹ���\r\n�������ļ����������ּ���ʹ�ã�");
            cm.gainItem(2010006, -2);
			//cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ[�ʼ����]����ʲô��������أ������������ѩ�˼��ܲ鿴�ѣ�");
            cm.dispose();
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
			}
        } else if (selection == 2) {
			 if (cm.canHold(4001215,1) && cm.getPlayer().getCSPoints(1) < 2000) { // Not Party Leader
                    cm.sendOk("��ĵ����2000�㣬���㹻������");
                    cm.dispose();
                } else {
			cm.gainNX(-2000);
            cm.gainItem(4001215, 1);
            cm.sendOk("����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]1�Ź����˻ʼ����齱��");
            cm.dispose();
			}
        } else if (selection == 3) {
			 if (cm.canHold(4001215,10) && cm.getPlayer().getCSPoints(1) < 19000) { // Not Party Leader
                    cm.sendOk("��ĵ����19000�㣬���㹻������");
                    cm.dispose();
                } else {
			cm.gainNX(-19000);
            cm.gainItem(4001215, 10);
            cm.sendOk("����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]10�Ź����˻ʼ����齱��");
            cm.dispose();
			}
        } else if (selection == 4) {
			 if (cm.canHold(4001215,100) && cm.getPlayer().getCSPoints(1) < 180000) { // Not Party Leader
                    cm.sendOk("��ĵ����180000�㣬���㹻������");
                    cm.dispose();
                } else {
			cm.gainNX(-180000);
            cm.gainItem(4001215, 100);
            cm.sendOk("����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]100�Ź����˻ʼ����齱��");
            cm.dispose();
			}
		}
    }
}

