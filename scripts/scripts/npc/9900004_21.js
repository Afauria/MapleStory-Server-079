var status = -1;

function start(){
	action(1, 0, 0);
}

function action(mode, type ,selection) {
	if(mode == 0 && status == 0) {
		status --;
	} else if(mode == 1) {
		status ++;
	} else {
		cm.dispose();
		return;
	}
	
	if (status == 0) {
		cm.sendOk("���Ǳ����ĵ��߻���NPC\r\n�ҿ��԰���������㲻��Ҫ����Ʒ��\r\n\r\n#L1#��Ҫѡ����ɾ������#l\r\n");
	} else if (selection == 1){
		cm.openNpc(9900004,1911);
	} else if (selection == 2){
		cm.openNpc(9900004,1922);
	}
}