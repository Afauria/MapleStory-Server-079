/*
	���� - ������ �쳤
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendSimple("������ĺ�𽹬�ſڡ�������ʲô��\r\n(PS:���������Ӵ��#r����30%����ӳ�#kŶ��)\r\n#b#L0#�����ȥ��𽹬��#l\r\n#L1#������ҹ��ڽ�����Ϣ��#l\r\n#L2#���Ǻؿ͡�����ȥ����á�#l\r\n#L5#����ؼҡ�#l");
    } else if (status == 1) {
        if (selection == 0) { //�����ȥ��𽹬
            if (cm.getParty() == null || !cm.isLeader()) {
                cm.sendOk("ֻ����ӳ�������˵�ſ������������ǽ�ȥ���������жӳ�������˵�ɡ�");
                cm.dispose();
            } else {
                cm.sendYesNo("Ŷ���������ȥ�����𣿽�����������£�Ҫ��ȥ����Ҫ���㼸�������������������Ҫ�������������Ը����˵����")
            }
        } else if (selection == 1) { //������ҹ��ڽ�����Ϣ��
            status = 3;
            cm.sendNext("����Ƕ����˵��£����������Ҫ��һ������ɣ���һ������ô�ܽ�飿");
        } else if (selection == 2) { //���Ǻؿ͡�����ȥ����á�
            status = 9;
            cm.sendNext("��Ҫȥ�������Ҫȥ����ñ���������ſ��Խ�ȥ��");
        //} else if (selection == 3) { //������ҹ�������˵����
            status = 11;
            cm.sendNext("�����������������ɡ�");
        //} else if (selection == 4) { //�����ȥ���ǵ
            status = 14;
            cm.sendNext("����ȥ���ǵ���Ҫ��ȥ��һ��Ҫ�н���ָ����������ѡ�");
        } else if (selection == 5) { //�����ȥ���ǵ
            status = 15;
            cm.sendNext("�����ȥ���������ȥ�ٴ�������ʱ��Ҫ���ѡ�");
        }
    } else if (status == 2) {
        cm.sendNext("�ã��ҿ������Ƿ�������������󣬾����㵽�����")
    } else if (status == 3) {
        if (!cm.getParty().getMembers().size() == 2) { //�ж���ӳ�Ա�Ƿ�ﵽ2�ˡ�
            cm.sendNext("�����Ա���ܳ��������ˡ��������������˽����")
            cm.dispose();
        } else if (!cm.isLeader()) { // ���Ƕӳ�
            cm.sendOk("���������Ǿ��������ӳ����ҽ����ɡ�");
            cm.dispose();
        } else if (cm.getPlayer().getMarriageId() > 0) { //�鿴����Ƿ��Ѿ���顣
            cm.sendNext("���Ѿ�����˰ɡ� ���Ļ��ǲ����ٽ��ġ�")
            cm.dispose();
        } else if (cm.MarrageChecking()==3) { //���������Ƿ��Ѿ����
            cm.sendNext("�������У��Ѿ����˽�����ˡ�\r\n��������ԡ�");
            cm.dispose();
        } else if (cm.allMembersHere() == false) { //����Ƿ���ͬ1��ͼ
            cm.sendNext("��ȷ�����İ��º�����ͬһ��ͼ��")
            cm.dispose();
        } else if (cm.MarrageChecking()==4) { 
            cm.sendNext("�Ҳ�֧��ͬ�Խ�顣���Բ������ǽ�ȥ")
            cm.dispose();
        } else if (cm.MarrageChecking()==5) { 
            cm.sendNext("��ʿ:#b#b#t1050121##k��#b#b#t1050122##k��#b#b#t1050113##k��Ůʿ:#b#t1051129##k��#b#t1051130##k��#b#t1051114##k������#b#t1050121##k��#b#t1051129##k��#b#t1050113##k��#b#t1051114##k,��Щ������ð���̳ǿ��Թ���#b#t1050122##k��#b#t1051130##k�����Ǳ���λ����Ů��������\r\n\r\n#b�봩��������ٺ��ҶԻ���")
            cm.dispose();
        } else if (cm.MarrageChecking()==6) { 
            cm.sendNext("��ӳ�Ա������û�н���ָ��")
            cm.dispose();
        } else  { 
            var maps = Array(700000100, 700000200);
            for (var i = 0; i < maps.length; i++) {
                if (cm.getMap(maps[i]).getCharactersSize() > 0) {
                    cm.sendNext("����ͼ�����б��������ھ��л������Ժ����ԡ�");
                    cm.dispose();
                    return;
                }
            }
            cm.warpParty(700000100);
            cm.dispose();
            //cm.worldMessage(5, "<Ƶ�� " + cm.getClient().getChannel() + "> " + cm.getPlayer().getName() + " �� " + chr.getName() + " �Ļ��񼴽���ʼ��");
        }
        cm.dispose();
    } else if (status == 4) {
        cm.sendNextPrev("��λ�������������һ��Ҫ������֤����λ���������˵ı�־���������˽�ָ��ͬʱ��λ����������˽�ָ�����ܽ�ȥ��顣");
    } else if (status == 5) {
        cm.sendNextPrev("Ҫ��黹��Ҫ����������������һ������λӦ����ӣ���Ӻ���ӳ�������˵������һ���ȥ��");
    } else if (status == 6) {
        cm.sendNextPrev("�ڶ�������������Ӧ�ô��ý���������Ҫ������ʥ�ĺ��һ��Ҫ���á�����׼����");
    } else if (status == 7) {
        cm.sendNextPrev("Ҫ�����·�����������ʿ:#b#b#t1050121##k��#b#b#t1050122##k��#b#b#t1050113##k��Ůʿ:#b#t1051129##k��#b#t1051130##k��#b#t1051114##k������#b#t1050121##k��#b#t1051129##k��#b#t1050113##k��#b#t1051114##k,��Щ������ð���̳ǿ��Թ���#b#t1050122##k��#b#t1051130##k�����Ǳ���λ����Ů��������");
    } else if (status == 8) {
        cm.sendNextPrev("������Ҫ���һ��Ҫ�����ǼǷѣ�Ҫ520w��ҡ����Ǳ����Ŷ���Ǻǡ�");
    } else if (status == 9) {
        cm.sendNextPrev("����ֻ��һ��һ�����˽�飬�����������Ҫ�ȴ����������ǽ�ȥ���ʱ���������5����֮�ڰ�������������");
        cm.dispose();
    } else if (status == 10) {
        if (cm.getMap(700000100).getCharactersSize() <= 0&&cm.getMap(700000200).getCharactersSize() <= 0) {
                cm.sendNext("����ͼ����û����ҽ��н�飬���Ժ����ԡ�");
                cm.dispose();
            }
        if (cm.haveItem(4150000)) {
	    cm.gainItem(4150000,-1)
	    cm.warp(700000200);
            cm.sendNext("�����������������Ѿ������͵�����á�")
	    cm.dispose();
        } else {
            cm.sendNext("�����û�����ɡ�û�����ͽ���ȥ")
            cm.dispose();
        }
    } else if (status == 11) {
        cm.sendNextPrev("���������飬��ȥ���ǵ���Խ�����顣�ڹ��ǵ��з���ʦ������˵�����������˵ĵܵܡ�");
    } else if (status == 12) {
        cm.sendNextPrev("����Ҫ������ڱ����Ž���ָ������Ҫ�������Ǯ����Ϊ��鲻����ô���׵����顣����Ҫ100���ҡ�");
    } else if (status == 13) {
        cm.sendNextPrev("������100���Һ��ȥ���ǵ����ʦ������㴦��������ˡ�����һ�����󣬽���ָ��ͬʱ��ʧ��");
        cm.dispose();
    } else if (status == 14) {
        //to do
    } else if (status == 15) {
            cm.warp(700000101)
            cm.dispose();
        //if (cm.haveItem(1112804)) { //����ָ
            //cm.warp(700000101)
            //cm.dispose();
        //} else {
            //cm.sendOk("�����û�н���ָ�ɡ�û�н�ָ�ͽ���ȥ.")
            //cm.dispose();
        //}
    } else if (status == 16) {
        var returnMap = cm.getSavedLocation("MULUNG_TC");
        cm.clearSavedLocation("MULUNG_TC");
        if (returnMap < 0) {
            returnMap = 211000000;
        }
        var target = cm.getMap(returnMap);
        var portal = target.getPortal("unityPortal2");
        if (portal == null) {
            portal = target.getPortal(0);
        }
        if (cm.getMapId() != target) {
            cm.getPlayer().changeMap(target, portal);
        }
        cm.dispose()
    }
}