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
	//if (cm.getQuestStatus(21728) == 0) {
          //  cm.sendOk("��δϰ�ô˵���츳��");
           // cm.dispose();
       // }
    if (cm.getMapId() == 180000001) {
            cm.sendOk("���ź�������ΪΥ���û����򱻽�ֹ��Ϸ���������������ϵ����Ա.");
            cm.dispose();
        }  
    else if (status == 0) {
		var rsb = cm.��ȡָ����ͼ�������(209000014);
		var rsa = cm.��ȡָ����ͼ�������(209000013);
        var  selStr = ""; 
        if(cm.getMapId() == 209000013 ){
		 selStr += "�����ڵĶ��飻#dA����#k\r\n"; 
		  selStr += "��ǰ�Կ����֣�#d"+cm.getBossRank("�Կ�����",2)+"#k\r\n"; 
		 selStr += "�жԶ���������#d"+rsb+"#k\r\n"; 
		 selStr += "#r#L1#�ٻ���1 ����+2#l\r\n";
		 selStr += "#r#L999#������Ϸ#l\r\n";
		 
         	
 } else  if(cm.getMapId() == 209000014 ){
		 selStr += "�����ڵĶ��飻#dB����#k\r\n"; 
		 selStr += "��ǰ�Կ�����#d��"+cm.getBossRank("�Կ�����",2)+"#k\r\n"; 
		 selStr += "�жԶ���������#d"+rsa+"#k\r\n"; 
		 selStr += "#r#L10#�ٻ���1 ����+2#l\r\n";
		 selStr += "#r#L999#������Ϸ#l\r\n";
         	 }		 
        selStr +=""
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
			case 999:
			    cm.dispose();
				cm.warp(910000000);
		    break;
            case 1:
			var rsb = cm.��ȡָ����ͼ�������(209000014);
		    var rsa = cm.��ȡָ����ͼ�������(209000013);
			 
			if ( rsb ==0 ){
				cm.sendOk("�ȴ������볡֮���ٿ�����Ϸ��");
				 cm.dispose();
	 }else {if (cm.getMap().getAllMonstersThreadsafe().size() == 0){
				cm.setBossRankCount("�Կ�����","2");
				cm.��ָ����ͼ������(209000014,""+ cm.getChar().getName() +"���㷢�������ţ����޷��ٻ�����׬ȡ���֡�",5121009);
				cm.��ָ����ͼ�ٻ�ָ������(209000013,9500335);
				cm.��ָ����ͼ�ٻ�ָ������(209000014,9501006);
				cm.��ָ����ͼ�ٻ�ָ������(209000014,9501007);
                cm.dispose();
	        }else {
		        cm.sendOk("�й�����ţ��޷��ٻ���");
                cm.dispose();
			}
		   }
			break; 
			
			
			
			
			
			
			
			case 10:
			var rsb = cm.��ȡָ����ͼ�������(209000014);
		    var rsa = cm.��ȡָ����ͼ�������(209000013);
			 
			if ( rsa ==0 ){
				cm.sendOk("�ȴ������볡֮���ٿ�����Ϸ��");
				 cm.dispose();
	 }else {if (cm.getMap().getAllMonstersThreadsafe().size() == 0){
				cm.setBossRankCount("�Կ�����","2");
				cm.��ָ����ͼ������(209000013,""+ cm.getChar().getName() +"���㷢�������ţ����޷��ٻ�����׬ȡ���֡�",5121009);
				cm.��ָ����ͼ�ٻ�ָ������(209000014,9500335);
				cm.��ָ����ͼ�ٻ�ָ������(209000013,9501006);
				cm.��ָ����ͼ�ٻ�ָ������(209000013,9501007);
                cm.dispose();
	        }else {
		        cm.sendOk("�й�����ţ��޷��ٻ���");
                cm.dispose();
			}
		   }


			
			

			

		}
    }
}
