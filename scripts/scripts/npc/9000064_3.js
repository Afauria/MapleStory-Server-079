importPackage(net.sf.odinms.client);

var status = 0;
var fee;
var chance = Math.floor(Math.random()*1+1);
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("�㲻֪��ָ�");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
  
			if (status == 0)
				{
					
            cm.sendGetText("\r\n-#r "+year+" �� "+month+" �� "+day+" �� #b�Ŀ���������Ⱥ�ڡ�#k\r\n\r\n �������;\r\n");
        } else if (status == 1) {
            fee = cm.getText();
            cm.sendYesNo("- ������Ŀ����ǣ� #r" + fee + "#k ��");
        } else if (status == 2) {
            if (cm.getBossLog("mrkl") == 0 && cm.getText() == "ߣ��ߣ����ߣ�����˹������ߣ��ߣ" ){//////////////����
        cm.setBossLog("mrkl");
		cm.setBossLog("zymxd");
		cm.sendOk("��ȡ�ɹ� ");
		cm.dispose();
		
		cm.serverNotice("[ÿ�տ���]��"+ cm.getChar().getName() +"��������ȷ�Ŀ���ɹ���ȡ"+year+"��"+month+"��"+day+"�յĽ�����"); 

            } else {
                 if (chance <= 1) { 
				         
                         cm.sendOk("��������ȷ�Ŀ���������Ѿ���ȡ�ˡ�")
	                    cm.dispose(); 

	                } 

            }
        }
    }
}
