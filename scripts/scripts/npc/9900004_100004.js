var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE);//��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var Z = "#fUI/GuildMark.img/Mark/Letter/00005025/1#";
var Y = "#fUI/GuildMark.img/Mark/Letter/00005024/3#";
var X = "#fUI/GuildMark.img/Mark/Letter/00005023/1#";
var D = "#fUI/GuildMark.img/Mark/Letter/00005003/1#";
var M = "#fUI/GuildMark.img/Mark/Letter/00005012/1#";
var A = "#fUI/GuildMark.img/Mark/Letter/00005000/1#";
var P = "#fUI/GuildMark.img/Mark/Letter/00005015/1#";
var Z = "#fUI/GuildMark.img/Mark/Letter/00005025/9#";
var �� = "#fUI/GuildMark.img/Mark/Letter/00005035/15#";
var �� = "#fUI/GuildMark.img/Mark/Letter/00005033/15#";
var �� = "#fUI/GuildMark.img/Mark/Letter/00005026/15#";
var һ = "#fUI/GuildMark.img/Mark/Letter/00005027/15#";
var һ = "#fUI/GuildMark.img/Mark/Letter/00005027/15#";
var �� = "#fUI/GuildMark.img/Mark/Letter/00005028/15#";
var �� = "#fUI/GuildMark.img/Mark/Letter/00005029/15#";
var �� = "#fUI/GuildMark.img/Mark/Letter/00005030/15#";
var �� = "#fUI/GuildMark.img/Mark/Letter/00005031/15#";
var �� = "#fUI/GuildMark.img/Mark/Letter/00005032/15#";
var �� = "#fUI/GuildMark.img/Mark/Letter/00005033/15#";
var �� = "#fUI/GuildMark.img/Mark/Letter/00005026/15#";
var �� = "#fUI/GuildMark.img/Mark/Letter/00005035/15#";
var �� = "#fUI/GuildMark.img/Mark/Letter/00005033/15#";
var �� = "#fUI/GuildMark.img/Mark/Letter/00005026/15#";


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
	    if (cm.getMapId() == 20000 || cm.getMapId() == 10000) {
            cm.sendOk(" �� �� ð �� �� �� �� �� �� ʹ �� �� �� �� ��");
            cm.dispose();
        }
	if (cm.getPlayer().getLevel() < 10) {
        cm.sendOk("��ĵȼ�δ�ﵽ10�������δ�ܽ���������");
        cm.dispose();
		 }
  
    else if (status == 0) {
        var selStr = ""+��+""+��+""+��+"��С����Ϣ\r\n\r\n"
 
          selStr += "С�ݻ�����#r��δ����#k\r\n";
		  
		//  selStr += "  #L3##b��������#l#k #L4##b����ɽ��ˮ#l#k #L5##b���Ծ�ɾ�#l#k  \r\n\r\n";
		   
		 // selStr += "  #L6##b��ȫ������#l#k #L7##b�����תְ#l#k #L8##b��˽�˹�Ԣ#l#k  \r\n\r\n";
		cm.sendSimple(selStr);
    
    }
}