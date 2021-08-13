/*
	Robert Holly - Ludibrium: Ludibrium (220000000)
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.sendNext("���𡭡������ҵ�Ԥ���Ǵ�ģ������ûʲô���Ѱ���������~��Ц����Ц~�����ı������⣬�����������ҡ������Ѷ�һ���ʱ�򡭡��Ǻǡ���");
        cm.dispose();
        return;
    } else if (status >= 1 && mode == 0) {
        cm.sendNext("���𡭡������ҵ�Ԥ���Ǵ�ģ������ûʲô���Ѱ�����������û��25���ң������ı������⣬�����������ҡ���������Ǯ��ʱ�򡭡��Ǻǡ���");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendYesNo("ϣ����������ܶ�һ�㡭��������һ�£��������Ӻ���Ŀ¼����һ���㣬�;������кܶ����ѡ���ô������ֻҪ��һ��Ǯ���ҾͿ���Ϊ�����Ӻ���Ŀ¼�����ǲ���Ӧ������ͬ�ʺŵ�������ɫ������һ��Ҫ���ء�����������");
    } else if (status == 1) {
        cm.sendYesNo("�õģ����ǵľ������۸񲻹���Ϊ#r�����ۿ�#k���ʼ�ˣ�#b����Ŀ¼���5��һ����25����#k����Ȼ���������ۡ�ֻҪ����һ�Σ�Ŀ¼�Ϳ����������ӡ��Ժ���Ŀ¼���������˵���������Ӧ�ò�������ô������Ը��֧��25������");
    } else if (status == 2) {
        var capacity = cm.getBuddyCapacity();
        if (capacity >= 50 || cm.getMeso() < 250000) {
            cm.sendNext("�㡭��ȷ���Լ���#b25����#k������еĻ�������ȷ��һ�º���Ŀ¼�Ƿ��Ѿ����ӵ�����ˡ���ʹǮ�ٶ࣬����Ŀ¼������Ҳ�޷����ӵ�#b50������#k��");
            cm.dispose();
        } else {
            var newcapacity = capacity + 5;
            cm.gainMeso( - 250000);
            cm.updateBuddyCapacity(newcapacity);
            cm.sendOk("�õģ���ĺ���Ŀ¼�Ѿ�������5���������ȷ��һ�¡��������Ŀ¼���ǲ����Ļ���������ʱ�����ҡ��ҿ�����ʱ�������ӣ����ܶ��ٴζ��С���Ȼ������ѵġ�����ô�ټ�~");
            cm.dispose();
        }
    }
}