/* ===========================================================
			Resonance
	NPC Name: 		SELF
	Map(s): 		Mushroom Castle: Deep inside Mushroom Forest(106020300)
	Description: 	Upon reaching the magic barrier.
=============================================================
Version 1.0 - Script Done.(18/7/2010)
=============================================================
*/

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
		if (mode == 1)
            status++;
        else
            status--;
		}
	if(status == 0){
		if(cm.isQuestActive(2314))
			cm.PlayerToNpc("����һ��#b�޴��ħ������#k ...");
		else if(cm.isQuestActive(2322))
			cm.PlayerToNpc("����ط������ȱ���� #b#p1300003##k ֪���ɣ�");
		else {
			cm.PlayerToNpc("���Ƿ��ʹ�� #t2430014#����");
			cm.dispose();
		}
	}if(status == 1){
		if(cm.isQuestActive(2314)){
			cm.ShowWZEffect("Effect/OnUserEff.img/normalEffect/mushroomcastle/chatBalloon1");
			cm.forceCompleteQuest(2314);
			cm.dispose();
		} else {
			cm.playerMessage("���Ȼ�ȥ����ɡ�");
		}
	}
}
			