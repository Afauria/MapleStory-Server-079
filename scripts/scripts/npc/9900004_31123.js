/*
 * 
 * @��֮��
 * ��������ϵͳ - ħ��˫��
 */
importPackage(net.sf.odinms.client);
var status = 0;
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
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            var txt1 = "#d#L1#�һ�#v2340000##z2340000#\t     ��Ҫ��#v4002000#X20��\r\n"//3��ɫ֮��\r\n";



            cm.sendSimple("�������#v4002000#��������������һ�ף��Ŷ����\r\n" + txt1 + "");
        } else if (status == 1) {
            if (selection == 1) {
                if (cm.haveItem(4002000, 20)) {
                    cm.gainItem(4002000, -20);
                    cm.gainItem(2340000, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ�������Ʊ��ȡ[ף������%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4002002#");
                    cm.dispose();
                }
            } else if (selection == 2) { 
                if (cm.haveItem(4031456, 20)) {
                    cm.gainItem(4031456, -20);
                    cm.gainItem(2043102, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ø����黻ȡ[���ָ���������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4031456#");
                    cm.dispose();
                }
            } else if (selection == 3) {
                if (cm.haveItem(4031456, 20)) {
                    cm.gainItem(4031456, -20);
                    cm.gainItem(2043202, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ø����黻ȡ[���ֶ�����������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4031456#");
                    cm.dispose();
                }
            } else if (selection == 4) {
                if (cm.haveItem(4031456, 20)) {
                    cm.gainItem(4031456, -20);
                    cm.gainItem(2043302, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ø����黻ȡ[�̽���������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4031456#");
                    cm.dispose();
                }
            } else if (selection == 5) {
                if (cm.haveItem(4031456, 20)) {
                    cm.gainItem(4031456, -20);
                    cm.gainItem(2043702, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ø����黻ȡ[����ħ������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4031456#");
                    cm.dispose();
                }
            } else if (selection == 6) {
                if (cm.haveItem(4031456, 20)) {
                    cm.gainItem(4031456, -20);
                    cm.gainItem(2043802, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ø����黻ȡ[����ħ������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4031456#");
                    cm.dispose();
                }
            } else if (selection == 7) {
                if (cm.haveItem(4031456, 20)) {
                    cm.gainItem(4031456, -20);
                    cm.gainItem(2044002, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ø����黻ȡ[˫�ֽ���������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4031456#");
                    cm.dispose();
                }
            } else if (selection == 8) {
                if (cm.haveItem(4031456, 20)) {
                    cm.gainItem(4031456, -20);
                    cm.gainItem(2044102, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ø����黻ȡ[˫�ָ���������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4031456#");
                    cm.dispose();
                }
            } else if (selection == 9) {
                if (cm.haveItem(4031456, 20)) {
                    cm.gainItem(4031456, -20);
                    cm.gainItem(2044202, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ø����黻ȡ[˫�ֶ�����������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4031456#");
                    cm.dispose();
                }
            } else if (selection == 10) {
                if (cm.haveItem(4031456, 20)) {
                    cm.gainItem(4031456, -20);
                    cm.gainItem(2044302, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ø����黻ȡ[ǹ��������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4031456#");
                    cm.dispose();
                }
            } else if (selection == 11) {
                if (cm.haveItem(4031456, 20)) {
                    cm.gainItem(4031456, -20);
                    cm.gainItem(2044402, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ø����黻ȡ[ì��������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4031456#");
                    cm.dispose();
                }
            } else if (selection == 12) {
                if (cm.haveItem(4031456, 20)) {
                    cm.gainItem(4031456, -20);
                    cm.gainItem(2044502, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ø����黻ȡ[����������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4031456#");
                    cm.dispose();
                }
            } else if (selection == 13) {
                if (cm.haveItem(4031456, 20)) {
                    cm.gainItem(4031456, -20);
                    cm.gainItem(2044602, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ø����黻ȡ[�󹥻�����10% ]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4031456#");
                    cm.dispose();
                }
            } else if (selection == 14) {
                if (cm.haveItem(4031456, 20)) {
                    cm.gainItem(4031456, -20);
                    cm.gainItem(2044702, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ø����黻ȡ[ȭ�׹�������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4031456#");
                    cm.dispose();
                }
            } else if (selection == 15) {
                if (cm.haveItem(4031456, 20)) {
                    cm.gainItem(4031456, -20);
                    cm.gainItem(2044802, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ø����黻ȡ[ȭ�׹�������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4031456#");
                    cm.dispose();
                }
            }else if(selection == 16){
                if (cm.haveItem(4031456, 20)) {
                    cm.gainItem(4031456, -20);
                    cm.gainItem(2044902, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ø����黻ȡ[��ǹ��������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4031456#");
                    cm.dispose();
                }
            }else if(selection == 17){
                if (cm.haveItem(4031456, 25)) {
                    cm.gainItem(4031456, -25);
                    cm.gainItem(2040805, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ø����黻ȡ[���׹�������10%]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4031456#");
                    cm.dispose();
                }
            }else if(selection == 18){
                if (cm.haveItem(4031456, 30)) {
                    cm.gainItem(4031456, -30);
                    cm.gainItem(2044703, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ø����黻ȡ[ȭ�׹��������]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4031456#");
                    cm.dispose();
                }
            }else if(selection == 19){
                if (cm.haveItem(4031456, 30)) {
                    cm.gainItem(4031456, -30);
                    cm.gainItem(2044815, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ø����黻ȡ[ָ�ڹ��������]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4031456#");
                    cm.dispose();
                }
            }else if(selection == 20){
                if (cm.haveItem(4031456, 30)) {
                    cm.gainItem(4031456, -30);
                    cm.gainItem(2044908, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ø����黻ȡ[��ǹ���������]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4031456#");
                    cm.dispose();
                }
            }else if(selection == 21){
                if (cm.haveItem(4031456, 30)) {
                    cm.gainItem(4031456, -30);
                    cm.gainItem(2040807, 1);
           cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ����ø����黻ȡ[���׹��������]һ�ţ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ���ȡ������Ҫ��#v4031456#");
                    cm.dispose();
                }
            }
        }
    }
}
