importPackage(net.sf.odinms.client);

var status = 0;
var fee;
var chance = Math.floor(Math.random()*1+1);
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE);//��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
		if (hour == 0 ||hour == 1 || hour == 2 ||hour == 3 ||hour == 4 ||hour == 5 ||hour == 6 ||hour == 7 ||hour == 8 ||hour == 9 ||hour == 10 ||hour == 11 ||hour == 13 ||hour == 14 ||hour == 15 ||hour == 16 ||hour == 17 ||hour == 18 ||hour == 19 ||hour == 20 ||hour == 22 ||hour == 23 ||hour == 24  ){
			    cm.sendOk("����ʱ�䣻#r12;00 - 12;59 #k/#r 21; - 21;59#k");
			    cm.dispose();}
        if (mode == 0) {
            cm.sendOk("�����ˣ�");
            cm.dispose();
            return;
        }var MC = cm.getServerName();
		 var MZ = cm.getChar().getName();
		
        if (mode == 1)
            status++;
        else
            status--;
  
			if (status == 0)
				{
					
            cm.sendGetText("������������������������������������������������\r\n\t\t"+MC+" ��̨������ - ����֮��\r\n������������������������������������������������\r\n         \r\n- ����ʱ�䣺#b#e12;00 - 12;59/21; - 21;59#n\r\n#r- ������ʽ��������д�μ���̨���Ľ�ɫ��#k \r\n#r- ������ʽ���߱�����ɫ����#k\r\n\r\n- #d���������");
        } else if (status == 1) {
               fee = cm.getText();
            cm.sendYesNo("- �ٴ�ȷ�����Ƿ���д��ȷ��\r\n			#r" + fee + "#k ");
        } else if (status == 2) {
			
			
			
      if (cm.getText() == ""+MZ+"" ){//////////////�жϿ����Ƿ���ȷ
        cm.warp(701000201,0)
		cm.dispose();
		cm.serverNotice("[��̨����]��"+ cm.getChar().getName() +" �μ�"+MC+" - ��̨������ - ����֮������ - ��"); 

            } else {
                 if (chance <= 1) { 
                         cm.sendOk("����������~~~~~~~~��");
						// cm.serverNotice("[��̨����]��"+ cm.getChar().getName() +" �μ�"+MC+" - ��̨������ - ����֮������ - ��"); 
	                    cm.dispose(); 

	                } 

            }
        }
    }
}
