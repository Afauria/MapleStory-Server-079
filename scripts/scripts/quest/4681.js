/*
 ����: ͨ��δ��֮��
 ����: �밢Ϧ�ǵ�����
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
        return;
    } else if (mode == 0) {
        if (status == 41) {
            qm.sendNext("�˽����������������֮�����˵����⡣����Ϊ����#b�����ĵ�����#k���������񣬻�������������ֹ���ҵ�������");
            qm.dispose();
            return;
        }
        status--;
    } else {
        status++;
    }
    switch (status) {
        case 0:
            if (qm.getQuestCustomData() != null) { // if (qm.getQuestCustomData().equals("readHistory")) {
                qm.sendSimple("��֮������ľ��񣬽��ܿ���Ľ����Σ�#b \n\r #L0#�����ʱ��������ɳ©��#l \n\r #L1#�ҵ������֮�������̳ǵ��ߣ�#l");
                status = 99;
            } else {
                qm.sendNext("����#p9120025#������#m802000101#Ϊ���֮�Ǹе���ϧ���ˡ�");
            }
            break;
        case 1:
            qm.sendNextPrev("��#p9120025#�����۾���");
            break;
        case 2:
            qm.sendNextPrev("����ĳ����ˡ�\r\n<��������˵������ȷ�ġ�>");
            break;
        case 3:
            qm.sendNextPrev("��������֮�ȵ�ʱ�򣬵�ʱ�㻹С�������ѳɳ�Ϊһλ����������սʿ�ˡ���һֱ�����ػ�������Ҷ��ԡ�û�б���������˸��˵����ˡ�\r\n��#p9120025#���ۿ����죩");
            break;
        case 4:
            qm.sendNextPrev("��\r\n�㲻�ϵ�ĥ����ɱ�������Լ�ǿ��־��ͳ��������ӵľ�����������������ߣ�Ҳ�����ͷ�֮������ڰ����ӽ�ս������������һ�����ԡ�");
            break;
        case 5:
            qm.sendNextPrev("�� �Բ����Ҹղ�˵���Ŀ���̫û��ò�ˡ�");
            break;
        case 6:
            qm.sendNextPrev("�ҵ�ʹ���Ǽ������������ˣ����Ʋ������ӵ���������ˡ�");
            break;
        case 7:
            qm.sendNextPrev("������ˣ��������֮�ǵľ�������ʹ�����֮���ܹ����ڱ�����Σ���������ҵ�������");
            break;
        case 8:
            qm.sendNextPrev("����ط�����#m802000101#�������֮����Զ����߽�ĵط���");
            break;
        case 9:
            qm.sendNextPrev("��Ҫ���������֮�ǵ����ࡣ");
            break;
        case 10:
            qm.sendNextPrev("��");
            break;
        case 11:
            qm.sendNextPrev("һ��������֮�ǻ���ʧ��");
            break;
        case 12:
            qm.sendNextPrev("������ȫȫ�ش������������ʧ������Ԥ�������֮�ǽ���ͻȻ��ʱ���ѷ���ֵ�#bʱ��Ť��#k��û��");
            break;
        case 13:
            qm.sendNextPrev("�Ŵ������֮������ʮ��ʢ�и߶ȵ�ħ���������Ҿ��������Ǹ�ʱ������Сѧϰħ�����ܵ����֮��ħ��ʦ��");
            break;
        case 14:
            qm.sendNextPrev("��ʱ�����֮�ǣ���������ǵĽ������������Ȼ���ֽ���������ʱ��������ѧ����������̧ͷ����ħ���о��ڹ�ȥ����������");
            break;
        case 15:
            qm.sendNextPrev("��������ǿ�νħ���о���������\n���뵱�ص�ħ��ʦ���������о�����β��֮ʱ���ҵõ��ˡ�#b�������ϵ�����#k��");
            break;
        case 16:
            qm.sendNextPrev("���ǻ�û�������ɹ��������ѵ�ħ����Ϊ�����֮�ǣ���ʱ���Ҿ���ƴ�ˡ�\n����û��ã����������ͳ��˽��ɡ���ˣ��Ҳ����������ܡ���ȥ��ͬ�顢�Լ��Ĺ��Һ��������翪ʼ����Ϊ�У���ʱ�޴����ӵ��ң�����Ҫ�ҵ�������յ㣬��������֮�ǵ���½���������ˡ�");
            break;
        case 17:
            qm.sendNextPrev("��ĩ�յĵ������������л�Ҫ�졣");
            break;
        case 18:
            qm.sendNextPrev("�����֮�Ǳ��޴��#bʱ��Ť��#k��û��˲�䣬��ʹ��ʱ����Ծ��ħ����Ư������ʧ��������Ȼ������һ���¡�");
            break;
        case 19:
            qm.sendNextPrev("�ҷ��������֮�ǵ����ࡣ");
            break;
        case 20:
            qm.sendNextPrev("���֮�ǵ���ʷȫ����¼��һ�����");
            break;
        case 21:
            qm.sendNextPrev("�������������ص����ݾ��ֻ����������֮�ǵ���ʷ��");
            break;
        case 22:
            qm.sendNextPrev("ԭ�������֮�ǵ��������е��ж����ó���Ԫ������¼��#b������ - ����ʷ#kҲʵ�ʴ��ڡ���");
            break;
        case 23:
            qm.sendNextPrev("�ҵ��������Ǳ��Ȿ��Ū�����߰������\n�Ҳ�����ҵķ�ŭ�ˡ�");
            break;
        case 24:
            qm.sendNextPrev("�ڶ�����������ҽ�#b������ - ����ʷ#k����������š�");
            break;
        case 25:
            qm.sendNextPrev("��ע�⵽һ���¡�");
            break;
        case 26:
            qm.sendNextPrev("#b������ - ����ʷ#k��û�м��ع����ҵ����ݡ�");
            break;
        case 27:
            qm.sendNextPrev("���ǲ������ڹ�ȥ�ġ�");
            break;
        case 28:
            qm.sendNextPrev("��֪���ǲ�����Ϊ�����֮������������нӴ���������˱�ó������Ϻ󣬲Ŵ�#b������ - ����ʷ#k������#k���ѵġ�");
            break;
        case 29:
            qm.sendNextPrev("ͬʱ��Ҳ��֪#b������- ����ʷ#k��������������ʽ���ҿɼ��Ըıࡣ");
            break;
        case 30:
            qm.sendNextPrev("���������������Ҫ�ص���ȥ�����¸�д��ʷ����ԭ�����������ʷδ����#bʱ��Ť��#k����ӡ��ʱ�յı߽磬�����֮���������������ˡ�");
            break;
        case 31:
            qm.sendNextPrev("������˵��Ϊ�����֮�ǡ�����д��ʷʵ���ǿ�������Ϊ��\n����ʷ�ܸ�д����ô����δ���Ĵ���Ҳ���⵽���ᡣ");
            break;
        case 32:
            qm.sendNextPrev("�����ҵĽ����ǣ�ֻ��д����ǰ�����֮����ʷ��");
            break;
        case 33:
            qm.sendNextPrev("��д��ʷ����һ�ξͿ�����ɵĹ�������ʷ�������������������������ʹ�������޸ģ�Ҳ���ص���������ò��");
            break;
        case 34:
            qm.sendNextPrev("����#m802000101#Ϊ���ݵأ������Գ�����ؽӽ�����ǰ�����֮�ǡ�");
            break;
        case 35:
            qm.sendNextPrev("����֮��");
            break;
        case 36:
            qm.sendNextPrev("�������һ����ǰ��δ������ʷ�����˳���");
            break;
        case 37:
            qm.sendNextPrev("��֪�������������֮�ǵĴ��£�ԭ��Ӧ�������֮�������Լ�����ġ�");
            break;
        case 38:
            qm.sendNextPrev("�����֮��������Ϊ#b�����ĵ�����#k���޷��ı���ʷ��");
            break;
        case 39:
            qm.sendNextPrev("���˵��һ�ж���Ϊ�����֮�ǵ�δ������̫������Щ��");
            break;
        case 40:
            qm.sendNextPrev("��#p9120025#����������");
            break;
        case 41:
            qm.sendYesNo("��û���ܵ�#b�����ĵ�����#k��������ϣ���ܽ������������");
            break;
        case 42:
            //qm.forceStartQuest();
            qm.setQuestCustomData("readHistory");
            qm.sendNextPrev("лл�㣬����ð����������ߣ�#p9120025#��Ϣ�ˣ�");
            break;
        case 43:
            qm.sendNextPrev("����ӵ��ǿ���������㣬��ʹ��δ����ʱ��Ҳ�ܹ��˷�ս����");
            break;
        case 44:
            qm.sendNextPrev("ֻ�ǡ����Ҽ�ʶ�������������ɡ�");
            break;
        case 45:
            qm.sendNextPrev("�ҴӼ�ǧ��ǰ��ʼ��һֱ��Ѱ�����ߡ�\n��Ϊ�������֮�Ǿ�Ҫ���������������и߶ȷ�չ�Ŀ�ѧ�����������˶�ӵ�����������ǿ��������");
            break;
        case 46:
            qm.sendNextPrev("Ϊ��Ѱ��������ǿ�ߣ���һֱ�ڽ���һ��ƻ���");
            break;
        case 47:
            qm.sendNextPrev("���֮����ΪĿǰ��Σ����������ʱ��Ť�����ӳ��ռ俪�˸��ѷ죬��������緢���˹�����");
            break;
        case 48:
            qm.sendNextPrev("������صĳ���ڣ�ǡ�����ӵ����ձ�������������ʷ��������ϵ���������ձ��Ĺ�ȥ�����ڣ�Ҳ���ֹ������ֵ�����");
            break;
        case 49:
            qm.sendNextPrev("��������Ϊ��ˣ������ͨ���������ձ���ˮ�������������صĿ�ķ�ǡ�");
            break;
        case 50:
            qm.sendNextPrev("�ڿ�ķ�ǣ����Ի��ǰ�����֮�ǵĹ�ȥ��δ���Ĳ���˼���������");
            break;
        case 51:
            qm.sendNextPrev("���֮�ǵ���ʷ�У���Ҷ�ų���һ������ʱ�ڡ�");
            break;
        case 52:
            qm.sendNextPrev("�������ձ���ս������������Ϊ������ƽ������Ĺ��������ߡ���ʿ�����֣��ƺ���ʱ�ش�������2���ռ䡣");
            break;
        case 53:
            qm.sendNextPrev("��ξ�Զ�Ĺ��£�Ҳ������̫��ֵ���������ս�����ݡ�����Ŀǰ�㲻�ܻأ�����֮����Ҫ�����֮��δ������ʷ�������ȣ�");
            break;
        case 54:
            qm.sendNextPrev("�ޣ�Ҳ���㲻�Ǻ����ס���νδ������ʷ�������ڵ�����˵����δ�������ң��������Ѿ���Ϊ��ʷ����һ���������ʷ����");
            break;
        case 55:
            qm.sendNextPrev("��Ϊ����δ��������ʧ������ϣ�����ܰ��Ҹı���һ�У����޷��뿪������ϣ��������������֮�ǵ�δ����");
            break;
        case 56:
            qm.sendNextPrev("���������ǿ����������������֤��������������");
            break;
        case 57:
            qm.sendNextPrev("Ҫ����ʱ�գ���Ҫʱ���������������ʱ�����Ĺ��������֤��#b#t04000340# 300��#b��#b#t04000342# 1����#b#t04000343# 1��#b������");
            qm.dispose();
            break;
        case 100:
            if (selection == 0) {
                if (qm.haveItem(4000343, 1) && qm.haveItem(4000340, 300) && qm.haveItem(4000342, 1)) {
                    status = 119;
                    qm.sendNextPrev("�Ի͡���");
                } else {
                    qm.sendNext("��Щʱ�������ߵ�ɳ©��������������֤������������޷���Խʱ�ա������Ҫ�ܻ�ø����֤����");
                    qm.dispose();
                }
            } else {
                if (qm.haveItem(5252002, 1)) {
                    status = 129;
                    qm.sendNextPrev("�Ի͡���");
                } else {
                    status = 109;
                    qm.sendNext("Ҫ��û�п��Դ���ʱ�յ�������֤�������޷�ǰ��δ���ġ���Ϊʱ����ת��Ҫ���������������δ��������ǿ�ĵ��ˣ�û��ʵ��ʵ�ں�Σ�ա�");
                }
            }
            break;
        case 110:
            qm.sendNextPrev("��ʱ�����Ĺ��������֤��������");
            break;
        case 111:
            qm.sendPrev("��˵���̳ǿ�����õ������֤��������������ɵ�ѡ��ͻ��ᡣ�ܸ���ʷ�Ĳ������ݱ䵽�Ǹ��ز��ˡ�������ԥ���������˼��");
            qm.dispose();
            break;
        case 120:
            qm.sendNextPrev("������Ҫ������ĵ����ˡ�");
            break;
        case 124:
            qm.gainItem(4000343, -1);
            qm.gainItem(4000340, -300);
            qm.gainItem(4000342, -1);
            qm.forceStartQuest();
            qm.dispose();
            break;
        case 130:
            qm.sendNextPrev("������Ҫ������ĵ����ˡ�.");
            break;
        case 131:
            qm.gainItem(5252002, -1);
            qm.forceStartQuest();
            qm.dispose();
            break;
        default:
            qm.dispose();
            break;
    }
}

function end(mode, type, selection) {
}