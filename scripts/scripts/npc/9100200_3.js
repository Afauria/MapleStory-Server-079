var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var ��ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";//"+��ͷ+"
var �� = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var ���ʺ� = "#fUI/Initials.img/Button/Button0/mouseOver/0#";  //disabled/0��ɫ
var ���ʺ�2 = "#fUI/Initials.img/Button/Button0/disabled/0#";  //disabled/0��ɫ

var ��б�� = "#fUI/Initials.img/Button/Button1/mouseOver/0#";  
var ��б��2 = "#fUI/Initials.img/Button/Button1/disabled/0#"; 

var ��С�ں� = "#fUI/Initials.img/Button/Button2/mouseOver/0#";
var ��С�ں�2 = "#fUI/Initials.img/Button/Button2/disabled/0#";

var �۴��ں� = "#fUI/Initials.img/Button/Button3/mouseOver/0#";
var �۴��ں�2 = "#fUI/Initials.img/Button/Button3/disabled/0#";

var �۸�̾�� = "#fUI/Initials.img/Button/Button4/mouseOver/0#";
var �۸�̾��2 = "#fUI/Initials.img/Button/Button4/disabled/0#";

var �۰��غ� = "#fUI/Initials.img/Button/Button5/mouseOver/0#";
var �۰��غ�2 = "#fUI/Initials.img/Button/Button5/disabled/0#";

var ��Ц�ۺ� = "#fUI/Initials.img/Button/Button6/mouseOver/0#";
var ��Ц�ۺ�2 = "#fUI/Initials.img/Button/Button6/disabled/0#";

var �۵�� = "#fUI/Initials.img/Button/Button7/mouseOver/0#";
var �۵��2 = "#fUI/Initials.img/Button/Button7/disabled/0#";

var �۰��ĺ� = "#fUI/Initials.img/Button/Button8/mouseOver/0#";
var �۰��ĺ�2 = "#fUI/Initials.img/Button/Button8/disabled/0#";

var ������Ǻ� = "#fUI/Initials.img/Button/Button9/mouseOver/0#";
var ������Ǻ�2 = "#fUI/Initials.img/Button/Button9/disabled/0#";



var �հ� = "#fUI/UIWindow.img/Skill/CoolTime/15#";  
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
    } var MC = cm.getServerName();
	  var ���ʺ����� = 1;
	  var ��б������ = 1;
	  var ��С�ں����� = 1;
	  var �۴��ں����� = 1;
	  var �۸�̾������ = 1;
	  var �۰��غ����� = 1;
	  var �۵������ =1;
	  var ��Ц�ۺ����� =1;
	  var �۰��ĺ����� = 1;
	  var ������Ǻ����� = 1;
	
	  var ��ɫ�ʺ���ע = cm.getBossRank("��ɫ�ʺ���ע",2);
	  var ��б����ע = cm.getBossRank("��б����ע",2);
	  var ��С�ں���ע = cm.getBossRank("��С�ں���ע",2);
	  var �۴��ں���ע = cm.getBossRank("�۴��ں���ע",2);
	  var �۸�̾����ע = cm.getBossRank("�۸�̾����ע",2);
	  var �۰��غ���ע = cm.getBossRank("�۰��غ���ע",2);
	  var �۵����ע = cm.getBossRank("�۵����ע",2);
	  var ��Ц�ۺ���ע = cm.getBossRank("��Ц�ۺ���ע",2);
	  var �۰��ĺ���ע = cm.getBossRank("�۰��ĺ���ע",2);
	  var ������Ǻ���ע = cm.getBossRank("������Ǻ���ע",2);
    if (cm.getMapId() == 180000001) {
            cm.sendOk("���ź�������ΪΥ���û����򱻽�ֹ��Ϸ���������������ϵ����Ա.");
            cm.dispose();
        }  
    else if (status == 0) {
        var selStr = "  "+��+"  "+��+" "+��+" #e#r��"+MC+"���ֶĲ���#n#k  "+��+"  "+��+"  "+��+"\r\n\r\n";

		if(��ɫ�ʺ���ע>0){
		selStr += " "+���ʺ�+"��ע���:#b"+��ɫ�ʺ���ע+"#k\r\n";}
		if(��б����ע>0){
		selStr += " "+��б��+"��ע���:#b"+��б����ע+"#k\r\n";}  
		if(��С�ں���ע>0){
		selStr += " "+��С�ں�+"��ע���:#b"+��С�ں���ע+"#k\r\n";}  
		if(�۴��ں���ע>0){
		  selStr += " "+�۴��ں�+"��ע���:#b"+�۴��ں���ע+"#k\r\n";}	  
		if(�۸�̾����ע>0){
		  selStr += " "+�۸�̾��+"��ע���:#b"+�۸�̾����ע+"#k\r\n";}
		if(�۰��غ���ע>0){
		  selStr += " "+�۰��غ�+"��ע���:#b"+�۰��غ���ע+"#k\r\n";}	  
		if(�۵����ע>0){
		  selStr += " "+�۵��+"��ע���:#b"+�۵����ע+"#k\r\n";}
		if(��Ц�ۺ���ע>0){
		  selStr += " "+��Ц�ۺ�+"��ע���:#b"+��Ц�ۺ���ע+"#k\r\n";}	  
		if(�۰��ĺ���ע>0){
		  selStr += " "+�۰��ĺ�+"��ע���:#b"+�۰��ĺ���ע+"#k\r\n";}	  
		if(������Ǻ���ע>0){
		  selStr += " "+������Ǻ�+"��ע���:#b"+������Ǻ���ע+"#k\r\n";}	  

		
		
		
		
		
		
		/*selStr += "\t\t\t "+���ʺ�2+" "+��б��2+" "+��С�ں�2+" "+�۴��ں�2+"\r\n";
		
		selStr += "\t\t\t "+�۸�̾��2+" "+�հ�+" "+�հ�+" "+�۰��غ�2+"\r\n";
		
		selStr += "\t\t\t "+�۰��غ�2+" "+��Ц�ۺ�2+" "+�۰��ĺ�2+" "+������Ǻ�2+"\r\n";*/
		
		
		
		
			selStr += "\t\t\t\t\t#L1##b����#l\r\n";
		
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
		case 1:
            cm.dispose();
            cm.openNpc(9100200,0);	
            break;

		}
    }
}