/*
 By ����
 */

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		var Editing = true //true=��ʾ;false=��ʼ�
          if(Editing){
          cm.sendOk("��ͣ����");
          cm.dispose();
          return;
        } 
			cm.sendSimple("#b��ӭ��� #r#h ##k ,\r\nף������ڿ���Ŷ���ռ���������Ƭ#r#i2210017##k.\r\n#r#e-ȷ�������ռ��㹻������½��жһ�-#n" +
            "#k\r\n#L101##r#i2210017##bx100#r��#b �������� #i2022336#x2\r\n#L102##r#i2210017##bx100#r��#b˫����������#i2450000#x3\r\n#L103##r#i2210017##bx100#r��#b���ӱ���#i2370000#x1\r\n#L104##r#i2210017##bx100#r��#b��Ҷ��#i2070011#x1\r\n#L105##r#i2210017##bx100#r��#b�ƽ��ٻ���#i2101022#x1\r\n#L107##r#i2210017##bx100#r��#b������#i3010164#x1\r\n#L108##r#i2210017##bx100#r��#b����Ʊ#i4110010#x120\r\n#L106##r#i2210017##bx400#r��#b��������#i4000463#x1\r\n#L109##r#i2210017##bx500#r��#b��õ���ָ#i1112252#x1#i1112141#x1");
        } else if (status == 1) {
            
            if (selection == 101) {
                if (cm.haveItem(2210017, 100) ) {
                    cm.gainItem(2210017, -100);
                    cm.gainItem(2022336, 2);
                    cm.sendOk("���#i2022336# x2");
                    cm.dispose();
                } else {
                    cm.sendOk("������û���㹻��#i2210017#,���ڴ�ȷ��");
                    cm.dispose();
                }
            } else if (selection == 102) {
                if (cm.haveItem(2210017, 100) ) {
                    cm.gainItem(2210017, -100);
                    cm.gainItem(2450000, 3);
                    cm.sendOk("���#i2450000#x3");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��#i2210017#,���ڴ�ȷ��");
                    cm.dispose();
				}
			 }else if (selection == 103) {
                if (cm.haveItem(2210017, 100) ) {
                    cm.gainItem(2210017, -100);
                    cm.gainItem(2370000, 1);
                    cm.sendOk("���#i2370000#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��#i2210017#,���ڴ�ȷ��");
                    cm.dispose();
				}
			 }else if (selection == 104) {
                if (cm.haveItem(2210017, 100) ) {
                    cm.gainItem(2210017, -100);
                    cm.gainItem(2070011, 1);
                    cm.sendOk("���#i2070011#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��#i2210017#,���ڴ�ȷ��");
                    cm.dispose();
				}
			 }else if (selection == 105) {
                if (cm.haveItem(2210017, 100) ) {
                    cm.gainItem(2210017, -100);
                    cm.gainItem(2101022, 1);
                    cm.sendOk("���#i2101022#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��#i2210017#,���ڴ�ȷ��");
                    cm.dispose();
				}
			 }else if (selection == 106) {
                if (cm.haveItem(2210017, 400) ) {
                    cm.gainItem(2210017, -400);
                    cm.gainItem(4000463, 1);
                    cm.sendOk("���#i4000463#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��#i2210017#,���ڴ�ȷ��");
                    cm.dispose();
				}
			 }else if (selection == 107) {
                if (cm.haveItem(2210017, 100) ) {
                    cm.gainItem(2210017, -100);
                    cm.gainItem(3010164, 1);
                    cm.sendOk("���#i3010164#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��#i2210017#,���ڴ�ȷ��");
                    cm.dispose();
				}
			 }else if (selection == 108) {
                if (cm.haveItem(2210017, 100) ) {
                    cm.gainItem(2210017, -100);
                    cm.gainItem(4110010, 120);
                    cm.sendOk("���#i4110010#x120");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��#i2210017#,���ڴ�ȷ��");
                    cm.dispose();
				}
			 }else if (selection == 109) {
                if (cm.haveItem(2210017, 500) ) {
                    cm.gainItem(2210017, -500);
                    cm.gainItem(1112252, 1);
					cm.gainItem(1112141, 1);
                    cm.sendOk("���#i1112252#x1#i1112141#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��#i2210017#,���ڴ�ȷ��");
                    cm.dispose();
				}
			 }
        }
    }
}

	