var dh;
var entry = true;

function start() {
    dh = cm.getEventManager("DollHouse");
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.sendNext("�����ס����Ƿǳ��������ģ����ǵ��㽫�����ڲ�һ���ǳ�Σ�յĹ������ʵ��������������ĸı䣬��ô�������˵������ȷ�ſ��Դӱ�������ʹ�õİ�����");
            cm.dispose();
            return;
        } else if (mode == 0 && status == 2) {
            cm.sendNext("�����ס����Ƿǳ��������ģ����ǵ��㽫�����ڲ�һ���ǳ�Σ�յĹ������ʵ��������������ĸı䣬��ô�������˵������ȷ�ſ��Դӱ�������ʹ�õİ�����");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (cm.getQuestStatus(3230) == 1) {
            if (status == 0) {
                cm.sendYesNo("��...���� #b#p2040001##k. ����˵���ܶ�����������... ���ܰ����һ� #b#t4031093##k �������!");
            } else if (status == 1) {
                cm.sendNext("�ǳ���л����ʵ, #b#p2040001##k ������  #b#t4031093##k Ϊ�����Լ����������������Ƿ��ܴ���������⣬���Բ�Ҫ��������һ���������ķ�ʽ���Ҿ��������������ܴ�����澳.");
            } else if (status == 2) {
                cm.sendYesNo("ǰ��ʱ�䣬һ�����������������һ����������ڳߴ���ѷ죬��͵�����Ӱڡ��������Լ��ķ������Ǳ�αװ��һ������ݡ���һ�п�������һ�����ң�����û�а취�ҵ����������������ҵ�����");
                if (dh != null && dh.getProperty("noEntry") != null && dh.getProperty("noEntry").equals("true")) {
                    entry = false;
                }
            } else if (status == 3) {
                cm.sendNext("�õģ��һ���㵽��һ�����䣬�Ǳ��������ͬ������ݣ���������ϸ���ᷢ��������ͬ����������Ǵ��������������Ȼ���#t4031094#���������ҡ�.");
            } else if (status == 4) {
                cm.sendNextPrev("����Ҫ��ʱ�����ҵ�#t4031094# Ȼ�����һر���");
            } else if (status == 5) {
                if (dh == null || entry == false) {
                    cm.sendPrev("������ں��������ˡ���ֻ����һ���������棬��������ȴ��ɡ�");
                } else {
                    cm.removeAll(4031093);
                    dh.startInstance(cm.getChar());
                }
                cm.dispose();
            }
        } else if (cm.getQuestStatus(3230) == 2) {
            cm.sendNext("лл�� #h #, ���ǵõ��� #b#t4031094##k �ز����ٴ���һ��а��Ĺ��ֵ�����ҵ��ǣ����ǻ�û���ҵ�һ�������ģ���Ϊ���Ҳ�֪����ô��л�����������ô�ࡣϣ������#m220000000#�������!");
            cm.dispose();
        } else {
            cm.sendOk("�������������������������ʿ������ֹ�κ��˽�������ط���");
            cm.dispose();
        }
    }
}