var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.sendOk("��л֧��#rð�յ�#k�����ж��������ļ����Լ���ǰ�ߵı��ϡ�лл��λ֧�֣�\r\n#bС�����飬�������ǿ�Ļҷ�����~��");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
        cm.sendOk("���ź�������ΪΥ���û����򱻽�ֹ��Ϸ���������������ϵ����Ա.")
        cm.dispose();
    }
    else if (status == 0) {
cm.teachSkill(1004,1,1);
        var selStr = "\t\t\t  ���~��ӭ����#b����ð�յ�#k.\r\n\t��ܰ��ʾ: #rС�����飬�������ǿ�Ļҷ�����~����#n\r\n";
        selStr += "  #b#L0#�ϻ���100���[#rNEW#b]#l\r\n\r\n";
        selStr += "  #b#L1#�ϻ���1000���[#rNEW#b]#l\r\n\r\n"
        selStr += "  #b#L2#�ϻ���10000���[#rNEW#b]#l\r\n\r\n"
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
		if(cm.getNX(1) < 100){
        	cm.sendOk("��û��100�ㄻ")
		}else{
                cm.getlfj(100,0);
		}

                cm.dispose();
                break;
            case 1:
		if(cm.getNX(1) < 1000){
        	cm.sendOk("��û��1000�ㄻ")
		}else{
                cm.getlfj(1000,1);
		}
				cm.dispose();
                break;
            case 2:
		if(cm.getNX(1) < 10000){
        	cm.sendOk("��û��10000�ㄻ")
		}else{
                cm.getlfj(10000,2);
		}
				cm.dispose();
                break;
        }
    }
}
