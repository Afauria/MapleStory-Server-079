importPackage(Packages.server.maps);

var status = -1;
var readNotice = 0;

function start() {
    cm.sendSimple("#e< ���� >#n\r\n������������ս��������ߣ���ӭ��ǰ�����������-�乫-\r\n\r\n#b#L0#��ս���������#l\r\n#L1#��ϸ�Ķ�����#l");
}

function action(mode, type, selection) {
    if (mode >= 0) {
        if (selection == 1 || readNotice == 1) {
            if (status == -1) {
                readNotice = 1;
                cm.sendNext("#e< ���棺��ս�ɣ�>#n\r\n����������������������乫���ܾ���ǰ����������ɽ��ʼ���������������ҵ��ڹ��Ѵﵽ�쳬Խ���޵Ľ׶Ρ���ǰ�������������ų�����������ĳ̶ȡ����Խ��쿪ʼ���ҽӹ����������ֻ��ǿ�߿���ӵ������������ʸ�\r\n��Ҫ�õ�����ָ����˾�������ս��������Ҫ��ս�ҵ���Ҳ�޷����һ�����֪�������֪����");
                status = 1;
            } else if (status == 1) {
                cm.sendPrev("��ע����ӭ������ս�������û�������Ļ������������һ��Ҳ�޷���");
                cm.dispose();
            }
        } else {
            if (status == -1 && mode == 1) {
                cm.sendYesNo("#b(��������������ʱ�����忪ʼ�����ص���Ϣ��Χ��)#k \r\n\r\n Ҫ�ƶ������������?");
                status = 1;
            } else if (status == 1) {
                if (mode == 0) {
                    cm.sendNext("#b(�ӹ�������Ų����ʱ�����ص���Ϣ��ʧ����)");
                } else {
                    cm.saveLocation("DOJO");
                    cm.warp(925020000, 4);
                }
                cm.dispose();
            } else
                cm.dispose();
        }
    } else
        cm.dispose();
}