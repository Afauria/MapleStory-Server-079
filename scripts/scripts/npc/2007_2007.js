var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE);//��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var ǩ�� = "#fEffect/SkillName1.img/1001003/ǩ��#";



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
	    

	if (cm.getPlayer().getLevel() < 10000) {
        cm.sendOk("����츳��ƽӹ��");
        cm.dispose();
		 }
  
    else if (status == 0) {
        var 
		  
	
		
		selStr = ""+cm.getPlayerCount(130000000)+"\r\n\r\n";
		
		selStr += "#L2#�ٻ��츳#l\r\n\r\n";
		  

		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 1:
            cm.dispose();
			cm.openNpc(9900004,4);
            break;
		case 2:
            cm.dispose();
            cm.openNpc(9900004,2001);	
             break;

		}
    }
}