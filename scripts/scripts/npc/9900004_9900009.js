/*
����רְ�ű�v2.0/���Է���cm.getPlayer().gainSP(1, 1); ��һ��1����ת�����ڶ���1�������ļ��ܵ�
*/
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
	var MC = cm.getServerName();
	    if (cm.getMapId() == 20000 || cm.getMapId() == 10000) {
            cm.sendOk(" �� �� ð �� �� �� �� �� �� ʹ �� �� �� �� ��");
         cm.dispose();
        }

    else if (status == 0) {
        var 
        selStr = "#e#r"+MC+"  -  ����תְ#k#n \r\n\r\n";
		selStr += "#b#L0#���ؽ���#l#k  \r\n\r\n";
		

		if(cm.getPlayer().getLevel() > 7 && cm.getPlayer().getLevel() < 10 &&cm.getPlayer().getJob() == 0 ){
		selStr += "#L200#ħ��ʦ#l#k\r\n\r\n"; }	
		if(cm.getPlayer().getLevel() > 9 && cm.getPlayer().getJob() == 0 ){
		selStr += "#L2100#ս��#l#k  \r\n\r\n"; 
		selStr += "#L100#սʿ#l#k    #L200#ħ��ʦ#l#k  #L300#������#l#k    #L400#����#l#k   #L500#����#l#k \r\n\r\n"; 
		selStr += "#L1100#����ʿ#l#k  #L1200#����ʿ#l#k  #L1300#����ʹ��#l#k  #L1400#ҹ����#l#k #L1500#��Ϯ��#l#k "; }
		else if (cm.getPlayer().getLevel() > 29 && cm.getPlayer().getJob() == 2100 ){
		selStr += "#L2110#ս���ת#l"; }
		else if (cm.getPlayer().getLevel() > 69 && cm.getPlayer().getJob() == 2110 ){
		selStr += "#L2111#ս����ת#l"; }
		else if (cm.getPlayer().getLevel() > 119 && cm.getPlayer().getJob()== 2111 ){
		selStr += "#L2112#ս����ת#l"; }
		else if (cm.getPlayer().getLevel() > 29 && cm.getPlayer().getJob() == 100 ){
		selStr += "#L110#����#l   #L120#׼��ʿ#l   #L130#ǹսʿ#l"; }
		else if (cm.getPlayer().getLevel() > 69  && cm.getPlayer().getJob() == 110 ){
		selStr += "#L111#��ʿ#l   "; }
		else if (cm.getPlayer().getLevel() > 119 && cm.getPlayer().getJob() == 111 ){
		selStr += "#L112#Ӣ��#l   "; }
		else if (cm.getPlayer().getLevel() > 69  && cm.getPlayer().getJob() == 120 ){
		selStr += "#L121#��ʿ#l   "; }
		else if (cm.getPlayer().getLevel() > 119 && cm.getPlayer().getJob() == 121 ){
		selStr += "#L122#ʥ��ʿ#l   "; }
		else if (cm.getPlayer().getLevel() > 69  && cm.getPlayer().getJob() == 130 ){
		selStr += "#L131#����ʿ#l   "; }
		else if (cm.getPlayer().getLevel() > 119 && cm.getPlayer().getJob() == 131 ){
		selStr += "#L132#����ʿ#l   "; }
		else if (cm.getPlayer().getLevel() > 29  && cm.getPlayer().getJob() == 200 ){
		selStr += "#L210#�𶾷�ʦ#l   #L220#���׷�ʦ#l   #L230#��ʦ#l"; }
		else if (cm.getPlayer().getLevel() > 69  && cm.getPlayer().getJob() == 210 ){
		selStr += "#L211#����ʦ#l   "; }
		else if (cm.getPlayer().getLevel() > 119 && cm.getPlayer().getJob() == 211 ){
		selStr += "#L212#��ħ��ʦ#l   "; }
		else if (cm.getPlayer().getLevel() > 69  && cm.getPlayer().getJob() == 220 ){
		selStr += "#L221#������ʦ#l   "; }
		else if (cm.getPlayer().getLevel() > 119 && cm.getPlayer().getJob() == 221 ){
		selStr += "#L222#����ħ��ʦ#l   "; }
		else if (cm.getPlayer().getLevel() > 69  && cm.getPlayer().getJob() == 230 ){
		selStr += "#L231#��ʦ#l   "; }
		else if (cm.getPlayer().getLevel() > 119 && cm.getPlayer().getJob() == 231 ){
		selStr += "#L232#����#l   "; }
		else if (cm.getPlayer().getLevel() > 29  && cm.getPlayer().getJob() == 300 ){
		selStr += "#L310#����#l   #L320#����#l "; }
		else if (cm.getPlayer().getLevel() > 69  && cm.getPlayer().getJob() == 310 ){
		selStr += "#L311#����#l   "; }
		else if (cm.getPlayer().getLevel() > 119 && cm.getPlayer().getJob() == 311 ){
		selStr += "#L312#������#l   "; }
		else if (cm.getPlayer().getLevel() > 69  && cm.getPlayer().getJob() == 320 ){
		selStr += "#L321#����#l   "; }
		else if (cm.getPlayer().getLevel() > 119 && cm.getPlayer().getJob() == 321 ){
		selStr += "#L322#����#l   "; }
		else if (cm.getPlayer().getLevel() > 29  && cm.getPlayer().getJob() == 400 ){
		selStr += "#L410#�̿�#l   #L420#����#l "; }
		else if (cm.getPlayer().getLevel() > 69  && cm.getPlayer().getJob() == 410 ){
		selStr += "#L411#��Ӱ��#l   "; }
		else if (cm.getPlayer().getLevel() > 119 && cm.getPlayer().getJob() == 411 ){
		selStr += "#L412#��ʿ#l   "; }
		else if (cm.getPlayer().getLevel() > 69  && cm.getPlayer().getJob() == 420 ){
		selStr += "#L421#���п�#l   "; }
		else if (cm.getPlayer().getLevel() > 119 && cm.getPlayer().getJob() == 421 ){
		selStr += "#L422#����#l   "; }
		else if (cm.getPlayer().getLevel() > 29  && cm.getPlayer().getJob() == 500 ){
		selStr += "#L510#ȭ��#l   #L520#��ǹ��#l "; }
		else if (cm.getPlayer().getLevel() > 69  && cm.getPlayer().getJob() == 510 ){
		selStr += "#L511#��ʿ#l   "; }
		else if (cm.getPlayer().getLevel() > 69 && cm.getPlayer().getJob() == 520 ){
		selStr += "#L521#��#l   "; }
		else if (cm.getPlayer().getLevel() > 119  && cm.getPlayer().getJob() == 521 ){
		selStr += "#L522#����#l   "; }
		else if (cm.getPlayer().getLevel() > 119 && cm.getPlayer().getJob() == 511 ){
		selStr += "#L512#���ӳ�#l   "; }
		else if (cm.getPlayer().getLevel() > 29  && cm.getPlayer().getJob() == 1100 ){
		selStr += "#L1110#����ʿ��ת#l  "; }
		else if (cm.getPlayer().getLevel() > 69  && cm.getPlayer().getJob() == 1110 ){
		selStr += "#L1111#����ʿ��ת#l  "; }
		else if (cm.getPlayer().getLevel() > 29  && cm.getPlayer().getJob() == 1200 ){
		selStr += "#L1210#����ʿ��ת#l  "; }
		else if (cm.getPlayer().getLevel() > 69  && cm.getPlayer().getJob() == 1210 ){
		selStr += "#L1211#����ʿ��ת#l  "; }
		else if (cm.getPlayer().getLevel() > 29  && cm.getPlayer().getJob() == 1300 ){
		selStr += "#L1310#����ʹ�߶�ת#l  "; }
		else if (cm.getPlayer().getLevel() > 69  && cm.getPlayer().getJob() == 1310 ){
		selStr += "#L1311#����ʹ����ת#l  "; }
		else if (cm.getPlayer().getLevel() > 29  && cm.getPlayer().getJob() == 1400 ){
		selStr += "#L1410#ҹ���߶�ת#l  "; }
		else if (cm.getPlayer().getLevel() > 69  && cm.getPlayer().getJob() == 1410 ){
		selStr += "#L1411#ҹ������ת#l  "; }
		else if (cm.getPlayer().getLevel() > 29  && cm.getPlayer().getJob() == 1500 ){
		selStr += "#L1510#��Ϯ�߶�ת#l  "; }
		else if (cm.getPlayer().getLevel() > 69  && cm.getPlayer().getJob() == 1510 ){
		selStr += "#L1511#��Ϯ����ת#l  "; }
		
		else{
		}
		cm.sendSimple(selStr);
   } else if (status == 1) {
        switch (selection) {
        case 0://��Ҷļ��
            cm.dispose();
            cm.openNpc(9900004,0);	
            break;



		
		case 2100:
		cm.gainItem(1442077,1);
        cm.teachSkill(21000000,0,10);
		cm.teachSkill(21001003,0,20)
		cm.changeJob(2100);

	    cm.sendOk("�ɹ�רְΪս��");
        cm.dispose();
		break;
		case 2110:
        cm.teachSkill(21100000,0,20)
		cm.teachSkill(21100002,0,30)
		cm.teachSkill(21100004,0,20)
		cm.teachSkill(21100005,0,20)
		cm.changeJob(2110);;

		cm.sendOk("�ɹ�ս�����ת��");
        cm.dispose();
		break;
		case 2111:
        cm.teachSkill(21110000,0,20)
		cm.teachSkill(21110002,0,30)
		cm.teachSkill(21110004,0,20)
		cm.teachSkill(21110005,0,20)
		
		cm.changeJob(2111);

		cm.sendOk("�ɹ�ս������ת��");
        cm.dispose();
		break;
		case 2112:
        cm.teachSkill(21120002,0,10);
		cm.teachSkill(21120004,0,10);
		cm.teachSkill(21120005,0,10);
		cm.teachSkill(21120006,0,10);
		cm.teachSkill(21120007,0,10);
		cm.teachSkill(21121000,0,10);
		cm.teachSkill(21121008,0,5)
		cm.changeJob(2112);

		cm.sendOk("�ɹ�ս������ת��");
        cm.dispose();
		break;
		case 100:
		cm.changeJob(100);

		cm.sendOk("�ɹ�רְΪսʿ��");
        cm.dispose();
		break;
		case 110:
		cm.changeJob(110);;

		cm.sendOk("�ɹ�רְΪ���͡�");
        cm.dispose();
		break;
		case 120:
		cm.changeJob(120);

		cm.sendOk("�ɹ�רְΪ׼��ʿ��");
        cm.dispose();
		break;
		case 130:
		cm.changeJob(130);

		cm.sendOk("�ɹ�רְΪǹսʿ��");
        cm.dispose();
		break;
		case 111:
		cm.changeJob(111);

		cm.sendOk("�ɹ�רְΪ��ʿ��");
        cm.dispose();
		break;
		case 121:
		cm.changeJob(121);

		cm.sendOk("�ɹ�רְΪ��ʿ��");
        cm.dispose();
		break;
		case 131:
		cm.changeJob(131);

		cm.sendOk("�ɹ�רְΪ����ʿ��");
        cm.dispose();
		break;
		case 112:
		cm.teachSkill(1120003,0,10);
		cm.teachSkill(1120004,0,10);
		cm.teachSkill(1120005,0,10);
		cm.teachSkill(1121000,0,10);
		cm.teachSkill(1121001,0,10);
		cm.teachSkill(1121002,0,10);
		cm.teachSkill(1121006,0,10);
		cm.teachSkill(1121008,0,10);
	    cm.teachSkill(1121010,0,10);
		cm.teachSkill(1121011,0,10);
		cm.changeJob(112);

		cm.sendOk("�ɹ�רְΪӢ�ۡ�");
        cm.dispose();
		break;
		case 122:
		cm.teachSkill(1220005,0,10);
		cm.teachSkill(1220006,0,10);
		cm.teachSkill(1220010,0,10);
		cm.teachSkill(1221000,0,10);
		cm.teachSkill(1221001,0,10);
		cm.teachSkill(1221002,0,10);
		cm.teachSkill(1221003,0,10);
		cm.teachSkill(1221004,0,10);
	    cm.teachSkill(1221007,0,10);
		cm.teachSkill(1221009,0,10);
		cm.teachSkill(1221011,0,10);
		cm.teachSkill(1221012,0,10);
		cm.changeJob(122);

		cm.sendOk("�ɹ�רְΪʥ��ʿ��");
        cm.dispose();
		break;
		case 132:
		cm.teachSkill(1320005,0,10);
		cm.teachSkill(1320006,0,10);
		cm.teachSkill(1320008,0,10);
		cm.teachSkill(1320009,0,10);
		cm.teachSkill(1321000,0,10);
		cm.teachSkill(1321001,0,10);
		cm.teachSkill(1321002,0,10);
		cm.teachSkill(1321003,0,10);
	    cm.teachSkill(1321007,0,10);
		cm.teachSkill(1321010,0,10);
		cm.changeJob(132);

		cm.sendOk("�ɹ�רְΪ����ʿ��");
        cm.dispose();
		break;
		case 200:
		cm.changeJob(200);

		cm.sendOk("�ɹ�רְΪħ��ʦ��");
        cm.dispose();
		break;
		case 210:
		cm.changeJob(210);;

		cm.sendOk("�ɹ�רְΪ�𶾷�ʦ��");
        cm.dispose();
		break;
		case 220:
		cm.changeJob(220);

		cm.sendOk("�ɹ�רְΪ���׷�ʦ��");
        cm.dispose();
		break;
		case 230:
		cm.changeJob(230);

		cm.sendOk("�ɹ�רְΪ��ʦ��");
        cm.dispose();
		break;
		case 211:
		cm.changeJob(211);

		cm.sendOk("�ɹ�רְΪ����ʦ��");
        cm.dispose();
		break;
		case 221:
		cm.changeJob(221);

		cm.sendOk("�ɹ�רְΪ������ʦ��");
        cm.dispose();
		break;
		case 231:
		cm.changeJob(231);

		cm.sendOk("�ɹ�רְΪ��ʦ��");
        cm.dispose();
		break;	
		case 212:
		cm.teachSkill(2121000,0,10);
		cm.teachSkill(2121001,0,10);
		cm.teachSkill(2121002,0,10);
		cm.teachSkill(2121003,0,10);
		cm.teachSkill(2121004,0,10);
		cm.teachSkill(2121005,0,10);
		cm.teachSkill(2121006,0,10);
		cm.teachSkill(2121007,0,10);
	    cm.teachSkill(2121008,0,10);
		cm.changeJob(212);

		cm.sendOk("�ɹ�רְΪ��ħ��ʦ��");
        cm.dispose();
		break;	
		case 222:
		cm.teachSkill(2221000,0,10);
		cm.teachSkill(2221001,0,10);
		cm.teachSkill(2221002,0,10);
		cm.teachSkill(2221003,0,10);
		cm.teachSkill(2221004,0,10);
		cm.teachSkill(2221005,0,10);
		cm.teachSkill(2221006,0,10);
		cm.teachSkill(2221007,0,10);
	    cm.teachSkill(2221008,0,10);
		cm.changeJob(222);

		cm.sendOk("�ɹ�רְΪ����ħ��ʦ��");
        cm.dispose();
		break;	
		case 232:
		cm.teachSkill(2321000,0,10);
		cm.teachSkill(2321001,0,10);
		cm.teachSkill(2321002,0,10);
		cm.teachSkill(2321003,0,10);
		cm.teachSkill(2321004,0,10);
		cm.teachSkill(2321005,0,10);
		cm.teachSkill(2321006,0,10);
		cm.teachSkill(2321007,0,10);
	    cm.teachSkill(2321008,0,10);
		cm.teachSkill(2321009,0,10);
		cm.changeJob(232);

		cm.sendOk("�ɹ�רְΪ���̡�");
        cm.dispose();
		break;		 
        case 300:
		cm.changeJob(300);

		cm.sendOk("�ɹ�רְΪ�����֡�");
        cm.dispose();
		break;
		case 310:
		cm.changeJob(310);;

		cm.sendOk("�ɹ�רְΪ���ˡ�");
        cm.dispose();
		break;
		case 320:
		cm.changeJob(320);

		cm.sendOk("�ɹ�רְΪ���֡�");
        cm.dispose();
		break;
		case 311:
		cm.changeJob(311);

		cm.sendOk("�ɹ�רְΪ���֡�");
        cm.dispose();
		break;
		case 321:
		cm.changeJob(321);

		cm.sendOk("�ɹ�רְΪ������");
        cm.dispose();
		break;	 
		case 312:
		cm.teachSkill(3120005,0,10);
		cm.teachSkill(3121000,0,10);
		cm.teachSkill(3121002,0,10);
		cm.teachSkill(3121003,0,10);
		cm.teachSkill(3121004,0,10);
		cm.teachSkill(3121005,0,10);
		cm.teachSkill(3121006,0,10);
		cm.teachSkill(3121007,0,10);
	    cm.teachSkill(3121008,0,10);
		cm.teachSkill(3121009,0,10);
		cm.changeJob(312);

		cm.sendOk("�ɹ�רְΪ�����֡�");
        cm.dispose();
		break;		 
		case 322:
		cm.teachSkill(3220004,0,10);
		cm.teachSkill(3221001,0,10);
		cm.teachSkill(3221002,0,10);
		cm.teachSkill(3221003,0,10);
		cm.teachSkill(3221004,0,10);
		cm.teachSkill(3221005,0,10);
		cm.teachSkill(3221006,0,10);
		cm.teachSkill(3221007,0,10);
	    cm.teachSkill(3221008,0,10);
		cm.teachSkill(3221009,0,10);
		cm.changeJob(322);

		cm.sendOk("�ɹ�רְΪ����");
        cm.dispose();
		break;
		case 400:
		cm.changeJob(400);

		cm.sendOk("�ɹ�רְΪ������");
        cm.dispose();
        break;
        case 410:
		cm.changeJob(410);;

		cm.sendOk("�ɹ�רְΪ�̿͡�");
        cm.dispose();
		break;
        case 420:
		cm.changeJob(420);

		cm.sendOk("�ɹ�רְΪ���͡�");
        cm.dispose();		   
		break;
        case 411:
		cm.changeJob(411);

		cm.sendOk("�ɹ�רְΪ��Ӱ�ˡ�");
        cm.dispose();
        break;
        case 421:
		cm.changeJob(421);

		cm.sendOk("�ɹ�רְΪ���п͡�");
        cm.dispose();		   
		break;
		case 412:
		cm.teachSkill(4120002,0,10);
		cm.teachSkill(4120005,0,10);
		cm.teachSkill(4121000,0,10);
		cm.teachSkill(4121003,0,10);
		cm.teachSkill(4121004,0,10);
		cm.teachSkill(4121006,0,10);
		cm.teachSkill(4121007,0,10);
		cm.teachSkill(4121008,0,10);
	    cm.teachSkill(4121009,0,10);
		cm.changeJob(412);

		cm.sendOk("�ɹ�רְΪ��ʿ��");
        cm.dispose();
		break;
		case 422:
		cm.teachSkill(4220002,0,10);
		cm.teachSkill(4220005,0,10);
		cm.teachSkill(4221000,0,10);
		cm.teachSkill(4221001,0,10);
		cm.teachSkill(4221003,0,10);
		cm.teachSkill(4221004,0,10);
		cm.teachSkill(4221007,0,10);
		cm.teachSkill(4221008,0,10);
	    cm.teachSkill(4221006,0,10);
		cm.changeJob(422);

		cm.sendOk("�ɹ�רְΪ������");
        cm.dispose();
		break;
		case 500:
		cm.changeJob(500);

		cm.sendOk("�ɹ�רְΪ������");
        cm.dispose();
        break;
		case 510:
		cm.changeJob(510);;

		cm.sendOk("�ɹ�רְΪȭ�֡�");
        cm.dispose();
        break;
		case 520:
		cm.changeJob(520);

		cm.sendOk("�ɹ�רְΪ��ǹ�֡�");
        cm.dispose();
        break;
		case 511:
		cm.changeJob(511);

		cm.sendOk("�ɹ�רְΪ��ʿ��");
        cm.dispose();
        break;
		case 521:
		cm.changeJob(521);

		cm.sendOk("�ɹ�רְΪ�󸱡�");
        cm.dispose();
        break;
		case 512:
		cm.teachSkill(5121000,0,10);
		cm.teachSkill(5121001,0,10);
		cm.teachSkill(5121002,0,10);
		cm.teachSkill(5121003,0,10);
		cm.teachSkill(5121004,0,10);
		cm.teachSkill(5121005,0,10);
		cm.teachSkill(5121010,0,10);
		cm.teachSkill(5121007,0,10);
	    cm.teachSkill(5121008,0,10);
		cm.teachSkill(5121009,0,10);
		cm.changeJob(512);

		cm.sendOk("�ɹ�רְΪ���ӳ���");
        cm.dispose();
		break;
		case 522:
		cm.teachSkill(5220001,0,10);
		cm.teachSkill(5220001,0,10);
		cm.teachSkill(5220011,0,10);
		cm.teachSkill(5221000,0,10);
		cm.teachSkill(5221003,0,10);
		cm.teachSkill(5221004,0,10);
		cm.teachSkill(5221006,0,10);
		cm.teachSkill(5221007,0,10);
	    cm.teachSkill(5221008,0,10);
		cm.teachSkill(5221009,0,10);
		cm.teachSkill(5221010,0,10);
		cm.changeJob(522);

		cm.sendOk("�ɹ�רְΪ������");
        cm.dispose();
		break;
		case 1100:
		cm.changeJob(1100);

		cm.sendOk("�ɹ�רְΪ����ʿ��");
        cm.dispose();
        break;
		case 1110:
		cm.changeJob(1110);

		cm.sendOk("�ɹ�רְΪ����ʿ��ת��");
        cm.dispose();
        break;
		case 1111:
		cm.changeJob(1111);
		cm.teachSkill(11110000,0,20);
		cm.teachSkill(11110005,0,20);
		cm.teachSkill(11111001,0,20);
		cm.teachSkill(11111002,0,20);
		cm.teachSkill(11111003,0,20);
		cm.teachSkill(11111004,0,30);
		cm.teachSkill(11111006,0,30);
		cm.teachSkill(11111007,0,20);

		cm.sendOk("�ɹ�רְΪ����ʿ��ת��");
        cm.dispose();
        break;
		case 1200:
		cm.changeJob(1200);

		cm.sendOk("�ɹ�רְΪ����ʿ��");
        cm.dispose();
        break;
		case 1210:
		cm.changeJob(1210);

		cm.sendOk("�ɹ�רְΪ����ʿ��ת��");
        cm.dispose();
        break;
		case 1211:
		cm.changeJob(1211);
        cm.teachSkill(12110000,0,20);
		cm.teachSkill(12110001,0,20);
		cm.teachSkill(12111002,0,20);
		cm.teachSkill(12111003,0,20);
		cm.teachSkill(12111004,0,20);
		cm.teachSkill(12111005,0,20);
		cm.teachSkill(12111006,0,20);
		cm.sendOk("�ɹ�רְΪ����ʿ��ת��");
        cm.dispose();
        break;	
		case 1300:
		cm.changeJob(1300);

		cm.sendOk("�ɹ�רְΪ����ʹ�ߡ�");
        cm.dispose();
        break;
		case 1310:
		cm.changeJob(1310);

		cm.sendOk("�ɹ�רְΪ����ʹ�߶�ת��");
        cm.dispose();
        break;
		case 1311:
		cm.changeJob(1311);
        cm.teachSkill(13110003,0,20);
		cm.teachSkill(13111000,0,20);
		cm.teachSkill(13111001,0,30);
		cm.teachSkill(13111002,0,20);
		cm.teachSkill(13111004,0,20);
		cm.teachSkill(13111005,0,20);
		cm.teachSkill(13111006,0,20);
		cm.teachSkill(13111007,0,20);
		
		cm.sendOk("�ɹ�רְΪ����ʹ����ת��");
        cm.dispose();
        break;
    	case 1400:
		cm.changeJob(1400);

		cm.sendOk("�ɹ�רְΪҹ���ߡ�");
        cm.dispose();
        break;
		case 1410:
		cm.changeJob(1410);

		cm.sendOk("�ɹ�רְΪҹ���߶�ת��");
        cm.dispose();
        break;
		case 1411:
		cm.changeJob(1411);
        cm.teachSkill(14110003,0,20);
		cm.teachSkill(14110004,0,20);
		cm.teachSkill(14111000,0,30);
		cm.teachSkill(14111001,0,20);
		cm.teachSkill(14111002,0,20);
		cm.teachSkill(14111005,0,20);
		cm.teachSkill(14111006,0,30);
		cm.sendOk("�ɹ�רְΪҹ������ת��");
        cm.dispose();
        break;	
		case 1500:
		cm.changeJob(1500);

		cm.sendOk("�ɹ�רְΪ��Ϯ�ߡ�");
        cm.dispose();
        break;
		case 1510:
		cm.changeJob(1510);

		cm.sendOk("�ɹ�רְΪ��Ϯ�߶�ת��");
        cm.dispose();
        break;
		case 1511:
		cm.changeJob(1511);
        cm.teachSkill(15110000,0,30);
		cm.teachSkill(15111001,0,30);
		cm.teachSkill(15111002,0,30);
		cm.teachSkill(15111003,0,30);
		cm.teachSkill(15111004,0,30);
		cm.teachSkill(15111005,0,30);
		cm.teachSkill(15111006,0,30);
		cm.teachSkill(15111007,0,30);
		cm.sendOk("�ɹ�רְΪ��Ϯ����ת��");
        cm.dispose();
        break;
		case 999999999:
		    
            if(cm.getQuestStatus(1002)== 0 ){
			cm.completeQuest(1002);
			cm.gainItem(1472000, 1);
			cm.gainItem(1332000, 1);
	        cm.gainItem(1492000, 1);
			cm.gainItem(1482000, 1);
			cm.gainItem(1372005, 1);
			cm.gainItem(1452002, 1);
			
		    cm.gainItem(1442000, 1);
			cm.gainItem(1432000, 1);
	        cm.gainItem(1402001, 1);
			cm.gainItem(2330000, 1000);
			cm.gainItem(2070000, 1000);
			cm.gainItem(2060000, 1000);
            cm.dispose();
			} else {
				cm.sendOk("�����ٴ���ȡ��");
				cm.dispose();
				return;
			}
		}
    }
}