function action(mode, type, selection) {
	var text = "\t\t\t\t#e#r�� BOSSͨ�ذ� ��#k#n\r\n\r\n";
			text += "\t#e����#n\t#e ����ǳ�#n\t\t\t#e �ؿ�#n\t\t #e#n\r\n#k";
			var rankinfo_list=cm.getBossRankCountTop("BOSSѵ����");
			if(rankinfo_list!=null){
				for(var i=0;i<rankinfo_list.size();i++){
					if(i==10){
						break;
					}
					var info=rankinfo_list.get(i);

					text+=i==0?"#r":i==1?"#r":i==2?"#g":i==3?"#b":"";
					text += "\t " + (i+1) + "\t\t ";
					// ������ֿո�
					text += info.getCname();
					for (var j = 16 - info.getCname().getBytes().length; j > 0 ; j--) {
						text += " ";
					}
					text += "\t\t" + info.getCount();
					
					text += "\t\t\t #k";

					text += "\r\n";
				}
			}
			cm.sendOkS(text, 3);
			cm.dispose();
			}