var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE);//��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var ����ͼ = "#fEffect/SkillName1.img/1001003/����ͼ#";
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
	//if (cm.getQuestStatus(21728) == 0) {
          //  cm.sendOk("��δϰ�ô˵���츳��");
           // cm.dispose();
       // }
    if (cm.getMapId() == 180000001) {
            cm.sendOk("���ź�������ΪΥ���û����򱻽�ֹ��Ϸ���������������ϵ����Ա.");
            cm.dispose();
        }  
    else if (status == 0) {
        var 
		 
		 selStr = " "+����ͼ+"\r\n\r\n\r\n"; 
		
		
		selStr += "#L1#�������#l  "; 
		selStr += "#L2#ʱ�䱾Դ#l  "; 
		selStr += "#L3#�� �� ��#l  "; 
		selStr += "#L4#�Ҷ�ɭ��#l  "; 
		selStr += "#L5#�� �� ��#l  "; 
		selStr += "#L6#��������#l  "; 
		selStr += "#L7#��Ļƻ�#l  "; 
		

	
 
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
			
			case 1:
			cm.warp(211042300,0);
			cm.dispose();
            break;
			
			case 2:
			cm.warp(220080000,0);
			cm.dispose();
            break;
			
			case 3:
			cm.warp(240020402,0);
			cm.dispose();
            break;
			
			case 4:
			cm.warp(240020101,0);
			cm.dispose();
            break;
			
			case 5:
			cm.warp(551030100,0);
			cm.dispose();
            break;
			
			case 6:
			cm.warp(240050400,0);
			cm.dispose();
            break;
			
			case 7:
			cm.warp(270050000,0);
			cm.dispose();
            break;

		
			
		}
    }
}
