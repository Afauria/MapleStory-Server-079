importPackage(net.sf.odinms.client);
var status = 0;
var fee;
var chance = Math.floor(Math.random()*1);
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("�ȿȡ���");
            cm.dispose();
            return;
        }	
        if (mode == 1)
            status++;
        else
            status--;
		var MC = cm.getServerName();
		var ��ȯ = cm.getPlayer().getCSPoints(1);
		var �ڿ������� = cm.getBossRank("�ڿ�������",2);
		var �ڿ����������� = 100;

          if (status == 0) {
            cm.sendGetText("��ǰ#b�ڿ�������#k���ۣ�#r"+�ڿ�����������+"#k\r\n�����������Թ���#r"+(��ȯ/�ڿ�����������).toFixed(0)+"#k\r\n\r\n��������Ҫ�����������");
        } else if (status == 1) {
            fee = cm.getText();
            cm.sendYesNo("����Ҫ�� #r "+fee*�ڿ�����������+" #k ��ȯ��\r\n������ #r"+fee+"#k   ����������");
		} else if (fee < 0) {
                cm.sendOk("��������!");
                cm.dispose();
        } else if (cm.getPlayer().getCSPoints(1) < fee*�ڿ����������� ) {
                cm.sendOk("��ĵ�ȯ����Ŷ��");
                cm.dispose();
				} else {

                 if (chance <= 1) { 
					   cm.setBossRankCount("�ڿ�������",fee);
					   cm.gainNX(-fee*�ڿ�����������);
					   cm.playerMessage(6,"�ɹ������� "+fee+" ��[�ڿ�������]");
	                   cm.dispose();
                       cm.openNpc(2000,3);	
	                } 
	                else  { 
                         cm.sendOk("δ֪��������ϵ����");
	                     cm.dispose(); 
	                } 

            }
        }
    }

