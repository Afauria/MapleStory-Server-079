var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status <= 1) {
            cm.sendNext("��Ҫȥ�������Ұ�!");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        cm.sendSimple("����û��������̲����ν�� #b�ƽ�̲#k, ����ط���ά��������?? �ҿ������ڰ����㵽�Ǹ��ط�ֻ��Ҫ #b1500 ���#k, �����������һ�� #bVIP ���ƽ�̲��Ʊ#k ��ô�Ϳ������ȥ..\r\n\r\n#L0##b ��Ը�⸶ 1500 ���.#l\r\n#L1# ����һ�� VIP ���ƽ�̲��Ʊ.#l\r\n#L2# ʲô��VIP���ƽ�̲��Ʊ#k?#l");
    } else if (status == 1) {
        if (selection == 0) {
            cm.sendYesNo("�������븶 #b1500 ���#k Ȼ��ȥ�ƽ�̲??");
        } else if (selection == 1) {
            status = 2;
            cm.sendYesNo("��������һ�� #bVIP ���ƽ�̲��Ʊ#k?");
        } else if (selection == 2) {
            status = 4;
            cm.sendNext("��һ������ʲô�� #bVIP ���ƽ�̲��Ʊ#k. ���������Ƿǳ��������ġ������Ʊ���������ɺ�̲��һ����Ŀ�����ֻҪ�������ϣ���������Լ��ķ�ʽ���������ɺ�̲��ѡ��Ǿ��ǣ���ʹ���ǲ��ò�����Щ�������ҵ��������ҵı�������ʧȥ��һ���׼���ǰ����һ���ѵõĵ���.");
        }
    } else if (status == 2) {
        if (cm.getMeso() < 1500) {
            cm.sendNext("��û���㹻�Ľ��Ҳû��VIPƱ ����!");
            cm.dispose();
        } else {
            cm.gainMeso(-1500);
            cm.saveLocation("FLORINA");
            cm.warp(110000000, 0);
            cm.dispose();
        }
    } else if (status == 3) {
        if (cm.haveItem(4031134)) {
            cm.saveLocation("FLORINA");
            cm.warp(110000000, 0);
            cm.dispose();
        } else {
            cm.sendNext("��ȷ������#bVIP ���ƽ�̲��Ʊ#k. ��? ȷ��һ�º���....");
            cm.dispose();
        }
    } else if (status == 4) {
        cm.sendNext("��һ��������ô�� #bVIP ���ƽ�̲��Ʊ#k. ���������Ƿǳ��������ġ������Ʊ���������ɺ�̲��һ����Ŀ�����ֻҪ�������ϣ���������Լ��ķ�ʽ���������ɺ�̲��ѡ��Ǿ��ǣ���ʹ���ǲ��ò�����Щ�������ҵ��������ҵı�������ʧȥ��һ���׼���ǰ����һ���ѵõ���Ŀ.");
    } else if (status == 5) {
        cm.sendNextPrev("�һ���û�������Ҿ;��ÿ���û������ϣ�����˰�������������������ȫ�ĵط���������Σ������ҵĹ��£�˭֪��������԰������������������úá���������κ����⣬����ʱ�ʡ�");
    } else if (status == 6) {
        cm.dispose();
    }
}
