importPackage(net.sf.cherry.client);

var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var status = 0;


	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function action(mode, type, selection) {
	if (mode == -1) {
		cm.sendOk("#b�õ�,�´��ټ�.");
		cm.dispose();
		} else {
	if (status >= 0 && mode == 0) {
		cm.sendOk("#b�õ�,�´��ټ�.");
		cm.dispose();
		return;
		}
	if (mode == 1)
		status++;
		else
		status--;





	if (status == 0) {
		
   	    var add = "��������ʿ.\r\n��Ҫǿ�󲢲���ֻ��װ����Ҫ��������ǿ���Լ�������һ��װ��ֻ����׸��������������ǿ��\r\n\r\n";

		//add += "�����ڵ�Ѫ������!\r\n";



		add += " #L0#"+������ͷ+"  #b200��#i4000016# ���� #rHP 20#l#b\r\n";
		
		add += " #L1#"+������ͷ+"  #b200��#i4000016# ���� #rHP 20#l#b\r\n";
 



		cm.sendSimple (add);    

	} else if (status == 1) {


	if (selection == 0) {
		 if(cm.haveItem(4000016,200)){
                     cm.gainItem(4000016,-200);
                     var xueliang=cm.getPlayer().getMaxHp();
                     cm.getPlayer().setMaxHp(xueliang+20);
                     cm.sendOk("���������ɹ�\r\n����ֵ����20��\r\n��С����Ϸ��Ч");
					 cm.worldMessage(6,"[����ǿ��]�����  "+cm.getName()+"  �������ǿ��������ֵ����20�㡣");
                     cm.dispose();
                     }
                 else {
                     cm.sendOk("��ȱ���������ʵĲ���");
                     cm.dispose();
                      }

	  	} else if (selection == 1) {
		 if(cm.haveItem(4000016,200)){
                     cm.gainItem(4000016,-200);
                     var xueliang=cm.getPlayer().getMaxHp();
                     cm.getPlayer().setMaxHp(xueliang+20);
                     cm.sendOk("���������ɹ�\r\n����ֵ����20��\r\n��С����Ϸ��Ч");
					 cm.worldMessage(6,"[����ǿ��]�����  "+cm.getName()+"  �������ǿ��������ֵ����20�㡣");
                     cm.dispose();
                     }
                 else {
                     cm.sendOk("��ȱ���������ʵĲ���");
                     cm.dispose();
                      }				  








		}					
		}
		}
	}
		

