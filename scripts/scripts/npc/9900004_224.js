
importPackage(net.sf.cherry.client);
var status = 0;
var ȷ�� = "#fUI/Login.img/BtOk/normal/0#";
var ȡ�� = "#fUI/Login.img/BtCancel/normal/0#";
var ���� = "#fUI/GuildMark.img/BackGround/00001007/16#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ��ҶԿ� = "#fEffect/SkillName1.img/1001003/��ҶԿ�#";
var ���ܲ˵� = "#fEffect/SkillName1.img/1001003/���ܲ˵�#";
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var Message = new Array(
"ÿ�ջ�Ծ�ȵ���һ����Ծ����ȡ����Ŷ��",
"�����ϲ����Ϸ�˵���񣬿����ڸ����츳�������",
"�򿪻�Ծ�ɾͽ��棬�ɿ���������ϸ���ϡ�",
"��Ҷ������ר���ķ�Ҷ�����񣬺�ר����Ȩ�ޡ�",
"���ĳЩר�������񣬴�Ұ�ֻᱬ���ر�Ķ���Ŷ��",
"����ֿ������Ǵ�����Ʒ����ȡ����Ʒ��������ȡ���á�",
"������������Ҫ������������ȸ��˵Ļ���������ϵͳ���ơ�",
"��ҶԿ��п��Ի�÷ḻ�Ľ�����",
"�����ʦ��������Խ�ߣ���õĽ���Խ���",
"������ô��ͽ���̫��̫�鷳�������ڸ����츳ҳ��رղ����õĴ��͵�Ŷ��",
"��һ���Ϸ��ĵ��񣬲��Ҽ��ٱ��˵�����������һ��������ҵı�׼��",
"ǿ��ĸ����츳���������츳�Ƚ�ǿ���أ�",
"��Ҷ����ÿ�ܶ��������׼����ȥ��������",
"��Ҷļ����ȡ��Ҷʱ������һ���������ĩ������Ϊ��Ҷ�������ʱ�䡣",
"ð�յ�����С��Ϸ����һ�ֳ�������������С��Ϸ��",
"��������㣬�һ�ʱ��ʱ�򿪲˵����棬˵�����кö����������أ�",
"����������ʽ��������Ҳ�����������������������",
"��Щ������Ҫ����ƣ��ֵ����Щ��������Ҫ��",
"��Щ������Ҫƣ��ֵ����ƣ��ֵ�������ˣ����Դ�Ұ��ȥ��",
"�츳�ֽ�Ϊ���������м����߼�����ʦ�������塣",
"������һ�ֺ���������������������������������͵Ȼ����ˡ�",
"��Щ�����������Դ����������Щ�����������Դ���츳������",
"����������飬������ - �������ڿռ䣬���ڶ��Σ����������������",
"����������飬ǧ��׷�� - �κ��˶��޷����ѣ�ֻҪ��֪���㡣",
"����������飬̽��ȡ�� - ��Ķ������ҵģ��ҵĶ��������ҵġ�",
"����������飬Ӱ���� - �������ܾ���ʤ����",
"����������飬ȫ�ܷ�ʦ - �ƿ������з�ʦ��������",
"����С��Ϸ�������ͨ��һ����������һ�����ʴ���������",
"��ҩ�츳��������������ϡ�е�ҩƷ��",
"�ռ�����ķ�Ҷ���Ϳ��Զ��ÿ�ܵķ�Ҷ����",
"�ٻ��츳���Ը���ǿ��Ĺ��",
"ռ���Լ�����أ���������ؿ����и�����ջ�",
"��ħ�츳���Խ�װ����ħ������ǿ���ս������",
"����ֿ�����洢���������г��Ĳֿ����Ա���䡣",
"�������ֶĲ����ĶĲ���������ֻ��һ�֡�",
"�Ĳ���ȥ���ִ�ĶĲ����ֳ���С�����飬������ġ�"
	
	
	);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
			
        }
        var MC = cm.getServerName();		
		var wj1 =  cm.��ȡָ����ͼ�������(1);
		var wj2 =  cm.��ȡָ����ͼ�������(2);
		var wj3 =  cm.��ȡָ����ͼ�������(3);
		var wj4 =  cm.��ȡָ����ͼ�������(4);
		var wj5 =  cm.��ȡָ����ͼ�������(5);
		var wj0 =  cm.��ȡָ����ͼ�������(910000023);
		var lt1 =  cm.��ȡָ����ͼ�������(701000201);
		var jy = cm.getPlayer().getExp(); 
		var jb = cm.getMeso();
		var dq = cm.getPlayer().getCSPoints(1)
		var fy = cm.haveItem(4032217,20);
		//if (cm.getMapId() == 104040000 ) {
        // cm.dispose();
		// cm.openNpc(9900004,2);
         // return;
		// }
		if (cm.getMapId() == 910000007 && cm.getPlayer().getClient().getChannel() != 2) {
           cm.showInstruction("\r\n��¥����ɵ�ƣ�~~~2��2��\r\n", 200, 3); 
		   cm.dispose();
		   cm.openNpc(9900007,102);
          return;
		 }
		if (cm.getMapId() == 1 ) {
           cm.showInstruction("\r\n�������Ϣ���赲���ҵ�����\r\n\r\n�ҵó�ȥ�������������û�г�·��\r\n", 200, 3);  
            cm.dispose();
          return;
		 }
		if (cm.getMapId() == 2  ) {
           cm.showInstruction("\r\n������Ϣ��Ũ�ң�\r\n\r\n�һ᲻���������\r\n ", 200, 3);  
            cm.dispose();
          return;
	    }
		if (cm.getMapId() == 3  ) {
           cm.showInstruction("\r\r\n\r\�ܸо��������г�·\r\n\r\n������������\r\n ", 200, 3);  
            cm.dispose();
          return;
	 
	    }
		if (cm.getMapId() == 4  ) {
           cm.showInstruction("\r\nһ�����˵���Ϣ��\r\n ", 200, 3);  
            cm.dispose();
          return;
	 
	    }
		if (cm.getMapId() == 5  ) {
           cm.showInstruction("\r\n�ⲻ���Ҹ����ĵط�������\r\n ", 200, 3);  
            cm.dispose();
          return;
	 
	    }
		if (cm.getMapId() == 910000023  ) {
           cm.showInstruction("\r\n#e#r�������#k#n\r\n\r\n������������"+(wj1+wj2+wj3+wj4+wj5+wj0)+"\r\n\r\n", 200, 3);  
            cm.dispose();
          return;
	 
	    }
		
		if (cm.getMapId() == 701000201  ) {
			//cm.��ָ����ͼ����Ʒ(701000201,2000005,1)
           cm.showInstruction("\r\n#d��"+MC+"��#k\r\n#e#r��̨���� - ����֮��#k#n\r\n\r\n��ǰ����:"+ cm.getBossRank("��̨��",2)+"\r\n��̨������#r"+lt1+"#k\r\n", 300, 3);  
           cm.dispose();
		    cm.openNpc(9900007,2001);
          return;
	 
	    }
		if (cm.getPlayer().getFame() < 0 ) {
            cm.sendOk("#r- ���Ѿ���������Ͷ�ߣ��޷�ʹ�ô˹��ܡ� \r\n\r\n  #k��������ð�յ�����������Ѿ�����������Ͷ�ߣ����������ȣ��Ѿ��������ж���������κ����飬�������Աȡ����ϵ��");
            cm.dispose();

        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {

          var 
		   

           selStr  = "\t#L1#"+���ܲ˵�+"#l #L2#"+��ҶԿ�+"#l\r\n\r\n";
		   
		   
		   if (cm.getMapId() == 910000000  ) {
			   selStr += "\r\n\t\t\t\t   #e#L3##r����#l#k ";} else {}
		    if (cm.getMapId() == 910000000  ) {  } else {
		   selStr +=("\t\t\t\t\t#e#r[С��ʾ]#k\r\n\r\n#b\t#n"+ Message[Math.floor(Math.random() * Message.length)]);}
		  
		cm.sendSimple(selStr);
        } else if (status == 1) {
         	if (selection == 1) { 
			if ( cm.getMapId() > 0  ) {  
			   cm.openNpc(9900004,0);
			} else {
				cm.sendOk("#r#e��Ǹ������δ��Ⱥ���Ǽǽ�ɫ���ƣ��޷�ͨ����֤��");
				cm.dispose();	
			}
			}
			if (selection == 2) { 
			if (  cm.getMapId() > 0  ) { 	
		        cm.openNpc(9900004,700);				
			} else {
				cm.sendOk("#r#e��Ǹ������δ��Ⱥ���Ǽǽ�ɫ���ƣ��޷�ͨ����֤��");
				cm.dispose();			
			}		
			}
			if (selection == 3) { 
			if (  cm.getMapId() > 0  ) { 	
		        cm.openNpc(9900007,105);				
			} else {
				cm.sendOk("#r#e��Ǹ������δ��Ⱥ���Ǽǽ�ɫ���ƣ��޷�ͨ����֤��");
				cm.dispose();			
			}		
			}
	    	}
        }
    }
