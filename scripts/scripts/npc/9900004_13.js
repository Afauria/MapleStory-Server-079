/*
 *
 *  �˽ű���ð�յ��������
 * i
 *
 */


importPackage(net.sf.odinms.client);

var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";

//------------------------------------------------------------------------

var chosenMap = -1;
var monsters = 0;
var towns = 0;
var bosses = 0;
var fuben = 0;

//------------------------------------------------------------------------

var bossmaps = Array(
		Array(100000005,0,"������԰III"),
		Array(105070002,0,"Ģ����֮Ĺ"), 
		Array(105090900,0,"���������Ժ"), 				
		Array(230040420,0,"Ƥ��ū˹��Ѩ"), 
		Array(211042300,0,"�������"), 
		Array(220080000,0,"ʱ�����ı�Դ"), 
		Array(240020402,0,"�������Ϣ��"), 
		Array(240020101,0,"����Ҷ�ɭ��"),					
		Array(551030100,0,"��ս������"),					
		Array(240040700,0,"����������Ѩ"), 				
		Array(270050000,0,"��Ļƻ�:Ʒ���ͳ���"),	
		Array(541020800,0,"ǧ������")									
		);

//------------------------------------------------------------------------

var monstermaps = Array(
);

//------------------------------------------------------------------------

var townmaps = Array(
		//Array(270050000,0,"PB") 
		//Array(240060200,0,"����"),
                //Array(280030000,0,"����")
		);

//------------------------------------------------------------------------

var fubenmaps = Array(
		Array(800020400,0,"����������ͼ"),
		Array(193000000,0,"���ɵ�ͼ")						
		);

//------------------------------------------------------------------------

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
	if (mode == 1) {
		status++;
		} else {
		status--;
		}

//------------------------------------------------------------------------

	if (status == 0) {

   	    var add = "\r\n���ã�����BOSS���ߴ���Ա��������Ҫ�ص���\r\n\r\n#e#r";

//		add += "ð�յ������ͼ�Ҷ�����Ϊ���͵�,";

//		add += "Ϊ�������,����������������ͼ,BOSS��ͼֱ�Ӵ���,";

		//add += "�������ʲô���õĵ�ͼ,������ϵ����Ա���,��л��Ա�����֧��.#b\r\n\r\n";

	   add += "#L0#����--����--PB#l ";    

		//add += "#L1#��������#l ";

//		add += "#L2#BOSS����#l ";
 
		cm.sendSimple (add);    

//------------------------------------------------------------------------
				
	} else if (status == 1) {

	if (selection == 0){
		var selStr = "ѡ�����Ŀ�ĵذ�.#b";
		for (var i = 0; i < townmaps.length; i++) {
		selStr += "\r\n#L" + i + "#" + townmaps[i][2] + "";
		}
		cm.sendSimple(selStr);
		towns = 1;
		}

	if (selection == 1) {
		var selStr = "ѡ�����Ŀ�ĵذ�.#b";
		for (var i = 0; i < monstermaps.length; i++) {
		selStr += "\r\n#L" + i + "#" + monstermaps[i][2] + "";
		}
		cm.sendSimple(selStr);
		monsters = 1;
		}

	if (selection == 2) {
		var selStr = "ѡ�����Ŀ�ĵذ�.#b";
		for (var i = 0; i < bossmaps.length; i++) {
		selStr += "\r\n#L" + i + "#" + bossmaps[i][2] + "";
		}
		cm.sendSimple(selStr);
		bosses = 1;
		}

	if (selection == 3) {
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(1).getMapFactory().getMap(280030000);
		var zha1 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(2).getMapFactory().getMap(280030000);
		var zha2 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(3).getMapFactory().getMap(280030000);
		var zha3 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(4).getMapFactory().getMap(280030000);
		var zha4 = map.getCharacters().toArray().length;

		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(1).getMapFactory().getMap(240060200);
		var hei1 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(2).getMapFactory().getMap(240060200);
		var hei2 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(3).getMapFactory().getMap(240060200);
		var hei3 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(4).getMapFactory().getMap(240060200);
		var hei4 = map.getCharacters().toArray().length

		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(1).getMapFactory().getMap(270050100);
		var pb1 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(2).getMapFactory().getMap(270050100);
		var pb2 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(3).getMapFactory().getMap(270050100);
		var pb3 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(4).getMapFactory().getMap(270050100);
		var pb4 = map.getCharacters().toArray().length

		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(1).getMapFactory().getMap(220080000);
		var nao1 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(2).getMapFactory().getMap(220080000);
		var nao2 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(3).getMapFactory().getMap(220080000);
		var nao3 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(4).getMapFactory().getMap(220080000);
		var nao4 = map.getCharacters().toArray().length

   	    var add = "������ʾΪ���ߵ�BOSSս��#b\r\n";

		add += ""+aaa+"[#rƵ��һ#b]\r\n";

		add += ""+zzz+"[#d����#b]��#r"+zha1+"#b��  [#d����#b]��#r"+hei1+"#b��  [#dPB#b]��#r"+pb1+"#b��  [#d����#b]��#r"+nao1+"#b��\r\n\r\n";

		add += ""+aaa+"[#rƵ����#b]\r\n";

		add += ""+zzz+"[#d����#b]��#r"+zha2+"#b��  [#d����#b]��#r"+hei2+"#b��  [#dPB#b]��#r"+pb2+"#b��  [#d����#b]��#r"+nao2+"#b��\r\n\r\n";

		add += ""+aaa+"[#rƵ����#b]\r\n";

		add += ""+zzz+"[#d����#b]��#r"+zha3+"#b��  [#d����#b]��#r"+hei3+"#b��  [#dPB#b]��#r"+pb3+"#b��  [#d����#b]��#r"+nao3+"#b��\r\n\r\n";

		add += ""+aaa+"[#rƵ����#b]\r\n";

		add += ""+zzz+"[#d����#b]��#r"+zha4+"#b��  [#d����#b]��#r"+hei4+"#b��  [#dPB#b]��#r"+pb4+"#b��  [#d����#b]��#r"+nao4+"#b��\r\n\r\n";
 
		cm.sendOk (add); 

		cm.dispose();

                   }

//------------------------------------------------------------------------

	} else if (status == 2) {

	if (towns == 1) {
		cm.sendYesNo("��ȷ��Ҫȥ " + townmaps[selection][2] + "?");
		chosenMap = selection;
		towns = 2;

	} else if (monsters == 1) {
		cm.sendYesNo("��ȷ��Ҫȥ " + monstermaps[selection][2] + "?");
		chosenMap = selection;
		monsters = 2;

	} else if (bosses == 1) {
		cm.sendYesNo("��ȷ��Ҫȥ " + bossmaps[selection][2] + "?");
		chosenMap = selection;
		bosses = 2;

	} else if (fuben == 1) {
		cm.sendYesNo("��ȷ��Ҫȥ " + fubenmaps[selection][2] + "?");
		chosenMap = selection;
		fuben = 2;

		}

//----------------------------------------------------------------------

	} else if (status == 3) {

	if (towns == 2) {
		if(cm.getMeso()>=townmaps[chosenMap][1]){
		cm.warp(townmaps[chosenMap][0], 0);
		cm.gainMeso(-townmaps[chosenMap][1]);
		}else{
		cm.sendOk("��û���㹻�Ľ��Ŷ!");
		}
		cm.dispose();

	} else if (monsters == 2) {
		if(cm.getMeso()>=monstermaps[chosenMap][1]){
		cm.warp(monstermaps[chosenMap][0], 0);
		cm.gainMeso(-monstermaps[chosenMap][1]);
		}else{
		cm.sendOk("��û���㹻�Ľ��Ŷ!");
		}
		cm.dispose();

	} else if (bosses == 2) {
		if(cm.getMeso()>=bossmaps[chosenMap][1]){
		cm.warp(bossmaps[chosenMap][0], 0);
		cm.gainMeso(-bossmaps[chosenMap][1]);
		}else{
		cm.sendOk("��û���㹻�Ľ��Ŷ!");
		}
		cm.dispose();

	} else if (fuben == 2) {
		if(cm.getMeso()>=fubenmaps[chosenMap][1]){
		cm.warp(fubenmaps[chosenMap][0], 0);
		cm.gainMeso(-fubenmaps[chosenMap][1]);
		}else{
		cm.sendOk("��û���㹻�Ľ��Ŷ!");
		}
		cm.dispose();

                }

//------------------------------------------------------------------------

		}
		}
		}