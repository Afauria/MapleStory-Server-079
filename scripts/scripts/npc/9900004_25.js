//////////////////////////////
//ZEV*����ð�յ�*��ߴ���////

///////////////////////////
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE);//��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var ��ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status   <= 0 && mode   <= 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	
    if ( cm.getMapId() == 1) {
            cm.sendOk(" ��ʲô�ҿ��԰ﵽ����أ�");
            cm.dispose();
        }


  
    else if (status   <= 0) {

    var  
	    selStr = "\r\n";
		selStr += "\t\t\t#r���ĵ�ǰ����ʱ�䣺"+cm.��ѯ��������ʱ��()+" ����#k#n\r\n";
		
		 selStr += "#L1#"+��ͷ+"#b#e60�������߽��� ��2000����ȯ��#l#k#n\r\n";
		 selStr += "#L2#"+��ͷ+"#b#e120�������߽�����2000����ȯ��#l#k#n\r\n";
		 selStr += "#L3#"+��ͷ+"#b#e180�������߽�����2000����ȯ��#l#k#n\r\n";
		 selStr += "#L4#"+��ͷ+"#b#e240�������߽�����2000����ȯ��#l#k#n\r\n";
		 selStr += "#L5#"+��ͷ+"#b#e300�������߽�����2000����ȯ��#l#k#n\r\n";
		 selStr += "#L6#"+��ͷ+"#b#e360�������߽�����2000����ȯ��#l#k#n\r\n";
		 selStr += "#L7#"+��ͷ+"#b#e420�������߽�����2000����ȯ��#l#k#n\r\n";
		 selStr += "#L8#"+��ͷ+"#b#e480�������߽�����2000����ȯ��#l#k#n\r\n";



		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {

			case 1:	
		  if(cm.��ѯ��������ʱ��()>=60 && cm.getBossLog("���߽���60����")== 0){ 
			cm.setBossLog("���߽���60����");
			  cm.sendOk("��ȡ���߽����ɹ�");
			  cm.gainDY(2000);
			  cm.dispose();
			} else{
			  cm.sendOk("������������û��ʱ��������Ѿ���ȡ���˰ɣ�");
              cm.dispose();
			}
			break;
			case 2:	
		  if(cm.��ѯ��������ʱ��()>=120 && cm.getBossLog("���߽���120����")== 0){ 
			cm.setBossLog("���߽���120����");
			  cm.sendOk("��ȡ���߽����ɹ�");
			  cm.gainDY(2000);
			  cm.dispose();
			} else{
			  cm.sendOk("������������û��ʱ��������Ѿ���ȡ���˰ɣ�");
              cm.dispose();
			}
			break;
			case 3:	
		  if(cm.��ѯ��������ʱ��()>=180 && cm.getBossLog("���߽���180����")== 0){ 
			cm.setBossLog("���߽���180����");
			  cm.sendOk("��ȡ���߽����ɹ�");
			  cm.gainDY(2000);
			  cm.dispose();
			} else{
			  cm.sendOk("������������û��ʱ��������Ѿ���ȡ���˰ɣ�");
              cm.dispose();
			}
			break;
			case 4:	
		  if(cm.��ѯ��������ʱ��()>=240 && cm.getBossLog("���߽���240����")== 0){ 
			cm.setBossLog("���߽���240����");
			  cm.sendOk("��ȡ���߽����ɹ�");
			  cm.gainDY(2000);
			  cm.dispose();
			} else{
			  cm.sendOk("������������û��ʱ��������Ѿ���ȡ���˰ɣ�");
              cm.dispose();
			}
			break;
			case 5:	
		  if(cm.��ѯ��������ʱ��()>=300 && cm.getBossLog("���߽���300����")== 0){ 
			cm.setBossLog("���߽���300����");
			  cm.sendOk("��ȡ���߽����ɹ�");
			  cm.gainDY(2000);
			  cm.dispose();
			} else{
			  cm.sendOk("������������û��ʱ��������Ѿ���ȡ���˰ɣ�");
              cm.dispose();
			}
			break;
			case 6:	
		  if(cm.��ѯ��������ʱ��()>=360 && cm.getBossLog("���߽���360����")== 0){ 
			cm.setBossLog("���߽���360����");
			  cm.sendOk("��ȡ���߽����ɹ�");
			  cm.gainDY(2000);
			  cm.dispose();
			} else{
			  cm.sendOk("������������û��ʱ��������Ѿ���ȡ���˰ɣ�");
              cm.dispose();
			}
			break;
			case 7:	
		  if(cm.��ѯ��������ʱ��()>=420 && cm.getBossLog("���߽���420����")== 0){ 
			cm.setBossLog("���߽���420����");
			  cm.sendOk("��ȡ���߽����ɹ�");
			  cm.gainDY(2000);
			  cm.dispose();
			} else{
			  cm.sendOk("������������û��ʱ��������Ѿ���ȡ���˰ɣ�");
              cm.dispose();
			}
			break;
			case 8:	
		  if(cm.��ѯ��������ʱ��()>=480 && cm.getBossLog("���߽���480����")== 0){ 
			cm.setBossLog("���߽���480����");
			  cm.sendOk("��ȡ���߽����ɹ�");
			  cm.gainDY(2000);
			  cm.dispose();
			} else{
			  cm.sendOk("������������û��ʱ��������Ѿ���ȡ���˰ɣ�");
              cm.dispose();
			}
			break;
			
			
			
			
			
			
			
			
			
			
			
			
		}
    }
 }