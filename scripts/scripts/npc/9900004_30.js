/* global cm */

var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "#b#e 8��01��-30�մ���ð�յ������ײ⣬���鱬��˫��������#k#n\r\n";
                //text += "  ����ð�յ��ﱸ�׶���ʱ���������£����ڽ������״β��ԣ����β��Ի��кܶ���Ϸ���ܺͼ��Ļ�û���ƣ����ܻ����һЩBUG����ӭ���ӻԾ�ٱ���һ����ЧBUG��һ�����ֵ���ҿ�������20-50��ֵ������\r\n\r\n"//3
                text += "#e#r  ���������Ѳ�����Ϸ������ð�յ������������˽���#k#n\r\n\r\n"//3
                text += "1��������ѣ���Ϸ�����ﵽ#r50��#k\r\n  #e�Ƽ���#n��3000�������ð�յ�����*1����ҽ����*20��10%�ɹ����ʣ�����ͨ�齱��*5\r\n  #e������#n��5000���á����ӱ���*20\r\n\r\n"//3
                text += "2��������ѣ���Ϸ�����ﵽ#r90��#k\r\n  #e�Ƽ���#n��5000�������ð�յ�����*2����ҽ����*30��10%�ɹ����ʣ�����ͨ�齱��*7���������*5\r\n  #e������#n��7000���á����ְٱ�ȯ*15��������轻��ȯ*5\r\n\r\n"//3
				text += "3��������ѣ���Ϸ�����ﵽ#r130��#k\r\n  #e�Ƽ���#n��7000�������ð�յ�����*3����ҽ����*40��10%�ɹ����ʣ���ף������*5����ͨ�齱��*10���������*15\r\n  #e������#n��10000���á����ְٱ�ȯ*20��������轻��ȯ*10\r\n\r\n"//3
				text += "4���ۼ�����3λ���ѣ���Ϸ�������ﵽ#r70��#k�����;�����Ȼ#r5��ά��3G6M#k�������ף��֣������˷���һ�Σ��Ժ�Ҳ�����б�������Ը��õĿɽ������ס���ӭ���ӻԾ�Ƽ����ѣ�\r\n\r\n"
				text += "��л���һ������������ð�յ�����Ϸ�ڿ��ܴ����ڶ�BUG��һ����ЧBUG��������20~50��ֵ#r����һ�����֡���BUG�����Խ��н�����#k\r\n\r\n#k"//3
				//text += "#r�ڲ��ڼ��ֵ����1.2����ֵ�Żݣ������������ǰ�\r\n#k"//3
                cm.sendSimple(text);
            }
        } else if (selection == 1) {
            if (!cm.beibao(1, 1)) {//ǰ���1��Ӧװ����һ����Ҳ����װ�� ������Ǹ���
                cm.sendOk("װ�������಻��1���ո�");//�жϲ����ڣ�����ʾ�Ի�
                cm.dispose();
            } else if (cm.getPlayer().getCSPoints(1) >= 300) {
                cm.gainNX(-300);
                cm.gainItem(1122017, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3);
                cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ�������׹��3Сʱʹ��Ȩ��");
                cm.dispose();
            } else {
                cm.sendOk("������޷�������");
                cm.dispose();
            }
        } else if (selection == 2) {
            if (!cm.beibao(1, 1)) {//ǰ���1��Ӧװ����һ����Ҳ����װ�� ������Ǹ���
                cm.sendOk("װ�������಻��1���ո�");//�жϲ����ڣ�����ʾ�Ի�
                cm.dispose();
            } else if (cm.getPlayer().getCSPoints(1) >= 600) {
                cm.gainNX(-600);
                cm.gainItem(1122017, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
                cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ�������׹��10Сʱʹ��Ȩ��");
                cm.dispose();
            } else {
                cm.sendOk("���߲����޷�������");
                cm.dispose();
            }
        } else if (selection == 3) {
            if (!cm.beibao(1, 1)) {//ǰ���1��Ӧװ����һ����Ҳ����װ�� ������Ǹ���
                cm.sendOk("װ�������಻��1���ո�");//�жϲ����ڣ�����ʾ�Ի�
                cm.dispose();
            } else if (cm.getPlayer().getCSPoints(1) >= 1200) {
                cm.gainNX(-1200);
                cm.gainItem(1122017, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24);
                cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ�������׹��1��ʹ��Ȩ��");
                cm.dispose();
            } else {
                cm.sendOk("���߲����޷�������");
                cm.dispose();
            }
        } else if (selection == 4) {
            if (!cm.beibao(1, 1)) {//ǰ���1��Ӧװ����һ����Ҳ����װ�� ������Ǹ���
                cm.sendOk("װ�������಻��1���ո�");//�жϲ����ڣ�����ʾ�Ի�
                cm.dispose();
            } else if (cm.getPlayer().getCSPoints(1) >= 6000) {
                cm.gainNX(-6000);
                cm.gainItem(1122017, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 168);
                cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ�������׹��7��ʹ��Ȩ��");
                cm.dispose();
            } else {
                cm.sendOk("������޷�������");
                cm.dispose();
            }
        }
    }
}


