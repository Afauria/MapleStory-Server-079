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
        var selStr = "               #n#r ��    #d��    #g��    #b��#k#n\r\n#rע��#k������ǰ��ͼ��Ч��Ŀǰ��¼������#r39#k\r\nʹ�ô˹��������ظ���������������������Ϸ������\r\n";

 
		 selStr += "��������������������������������������������������\r\n"; 
		 selStr += "#r#L1#�����ⳡ��#l\r\n";
		 selStr += "#L2#�ټ�ֻ��İ����#l\r\n";
		 selStr += "#L3#����#l\r\n";
		 selStr += "#L4#�黢#l\r\n";
		 selStr += "#L5#��ǽ#l\r\n";
		 selStr += "#L6#��ָһ�Ӽ�#l\r\n";
		 selStr += "#L7#�ȵ��̻�����#l\r\n";
		 selStr += "#L8#�Ի���ʦ#l\r\n";
		 selStr += "#L9#����#l\r\n";
		 selStr += "#L10#��ɽ���#l\r\n";
		 selStr += "#L11#���ܲ���#l\r\n";
		 selStr += "#L12#����#l\r\n";
		 selStr += "#L13#����#l\r\n";
		 selStr += "#L14#���˲���#l\r\n";
		 selStr += "#L15#����#l\r\n";
		 selStr += "#L16#���Ʋ���#l\r\n";
		 selStr += "#L17#ƽ������#l\r\n";
		 selStr += "#L18#��Ϧ#l\r\n";
		 selStr += "#L19#��̸#l\r\n";
		 selStr += "#L20#ǧ�ٶ�#l\r\n";
		 selStr += "#L21#����ʽ����#l\r\n";
		 selStr += "#L22#ȫ�����#l\r\n";
		 selStr += "#L23#ɽˮ֮��#l\r\n";
		 selStr += "#L24#��Ӱ����#l\r\n";
		 selStr += "#L25#˫����#l\r\n";
		 selStr += "#L26#΢����#l\r\n";
		 selStr += "#L27#��ͩ��#l\r\n";
		 selStr += "#L28#����֮��#l\r\n";
		 selStr += "#L29#������Ĺ�ȥ#l\r\n";
		 selStr += "#L30#���׹���#l\r\n";
		 selStr += "#L31#��鳲#l\r\n";
		 selStr += "#L32#ҽ��#l\r\n";
		 selStr += "#L33#����ԼԼ#l\r\n";
		 selStr += "#L34#���һ�#l\r\n";
		 selStr += "#L35#����֮��#l\r\n";
		 selStr += "#L36#��˯�����#l\r\n";
		 selStr += "#L37#װ��Ϳ#l\r\n";
		 selStr += "#L38#��Ѹ���#l\r\n";
		 selStr += "#L39#����һ��#l\r\n";

         selStr +="#k\r\n��������������������������������������������������\r\n"		
 
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 1:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/�����ⳡ��");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - �����ⳡ�ꡣ");
			cm.dispose();
            break; 
			case 2:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/�ټ�ֻ��İ����");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - �ټ�ֻ��İ���ˡ�");
			cm.dispose();
            break; 
			case 3:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/����");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ����");
			cm.dispose();
            break;
case 4:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/�黢");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - �黢");
			cm.dispose();
            break;
case 5:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/��ǽ");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ��ǽ");
			cm.dispose();
            break;
case 6:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/��ָһ�Ӽ�");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ��ָһ�Ӽ�");
			cm.dispose();
            break;
case 7:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/�ȵ��̻�����");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - �ȵ��̻�����");
			cm.dispose();
            break;
case 8:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/�Ի���ʦ");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - �Ի���ʦ");
			cm.dispose();
            break;
case 9:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/����");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ����");
			cm.dispose();
            break;
case 10:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/��ɽ���");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ��ɽ���");
			cm.dispose();
            break;
case 11:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/���ܲ���");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ���ܲ���");
			cm.dispose();
            break;
case 12:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/����");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ����");
			cm.dispose();
            break;
case 13:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/����");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ����");
			cm.dispose();
            break;
			case 14:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/���˲���");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ���˲���");
			cm.dispose();
            break;
			case 15:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/����");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ����");
			cm.dispose();
            break;
			case 16:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/���Ʋ���");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ���Ʋ���");
			cm.dispose();
            break;
			case 17:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/ƽ������");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ƽ������");
			cm.dispose();
            break;
			case 18:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/��Ϧ");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ��Ϧ");
			cm.dispose();
            break;
			case 19:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/��̸");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ��̸");
			cm.dispose();
            break;
			case 20:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/ǧ�ٶ�");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ǧ�ٶ�");
			cm.dispose();
            break;
			case 21:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/����ʽ�İ���");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ����ʽ�İ���");
			cm.dispose();
            break;
			case 22:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/ȫ�����");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ȫ�����");
			cm.dispose();
            break;
			case 23:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/ɽˮ֮��");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ɽˮ֮��");
			cm.dispose();
            break;
			case 24:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/��Ӱ����");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ��Ӱ����");
			cm.dispose();
            break;
			case 25:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/˫����");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ˫����");
			cm.dispose();
            break;
			case 26:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/΢����");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ΢����");
			cm.dispose();
            break;
			case 27:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/��ͩ��");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ��ͩ��");
			cm.dispose();
            break;
			case 28:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/����֮��");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ����֮��");
			cm.dispose();
            break;
			case 29:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/������Ĺ�ȥ");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ������Ĺ�ȥ");
			cm.dispose();
            break;
			case 30:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/ ���׹���");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� -  ���׹���");
			cm.dispose();
            break;
			case 31:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/��鳲");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ��鳲");
			cm.dispose();
            break;
			case 32:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/ҽ��");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ҽ��");
			cm.dispose();
            break;
			case 33:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/����һ��");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ����һ��");
			cm.dispose();
            break;
			case 34:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/���һ�");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ���һ�");
			cm.dispose();
            break;
			case 35:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/����֮��");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ����֮��");
			cm.dispose();
            break;
			case 36:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/��˯�����");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ��˯�����");
			cm.dispose();
            break;
			case 37:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/װ��Ϳ");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - װ��Ϳ");
			cm.dispose();
            break;
			case 38:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/��Ѹ���");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ��Ѹ���");
			cm.dispose();
            break;
			case 39:
			cm.setBossLog("dj");
            cm.changeMusic("Bgm00/����һ��");;
			cm.worldMessage(5,""+ cm.getChar().getName() +"  �㲥���� - ����һ��");
			cm.dispose();
            break;
		
			

		}
    }
}