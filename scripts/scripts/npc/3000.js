var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE);//��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
//var tz = "#fEffect/CharacterEff/1082565/4/0#";  //���ӷ�

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	//if (cm.getHour() >  20){
	//cm.sendOk("ʱ���ж�");
    // cm.dispose();
	//}
	if (cm.getPlayer().getLevel() < 10) {
        cm.sendOk("��ĵȼ�δ�ﵽ10�������δ�ܽ���������");
        cm.dispose();
		 }
    if (cm.getMapId() == 180000001) {
            cm.sendOk("���ź�������ΪΥ���û����򱻽�ֹ��Ϸ���������������ϵ����Ա.");
            cm.dispose();
        }  
    else if (status == 0) {
        var selStr = "";
          selStr += "#L1##b�����ѯ#l#k#L2##b�󷵻��г�#l#k#L3##b��ÿ������#l#k\r\n\r\n";
		  
		  selStr += "#L4##b����˰���#l#k  \r\n\r\n";
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
		case 1:
            cm.dispose();
            cm.openNpc(2000,1);	
             break;
		case 2:
            cm.dispose();
            cm.openNpc(2000,2);	
             break;
		case 3:
            cm.dispose();
            cm.openNpc(2000,3);	
             break;
		case 4:
            cm.dispose();
            cm.openNpc(2000,4);	
             break;
		}
    }
}