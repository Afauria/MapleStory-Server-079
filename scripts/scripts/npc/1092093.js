function start() {
	if (cm.haveItem(4031847) || cm.haveItem(4031848) || cm.haveItem(4031849) || cm.haveItem(4031850)) {
		cm.removeAll(4031847);
		cm.removeAll(4031848);
		cm.removeAll(4031849);
		cm.removeAll(4031850);
		cm.sendOk("��л��Ӧţ��");
		cm.dispose();
	} else {
		cm.sendOk("����Ҫ�úȵ�ţ��...");
		cm.dispose();
}
}