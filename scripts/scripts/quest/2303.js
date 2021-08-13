/* ===========================================================
 Resonance
 NPC Name: 		Maple Administrator
 Description: 	Quest -  Kingdom of Mushroom in Danger
 =============================================================
 Version 1.0 - Script Done.(17/7/2010)
 =============================================================
 */

var status = -1;

function start(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (type == 1 && mode == 0)
            status -= 2;
        else {
            //if(status == 0){
            qm.sendOk("Really? It's an urgent matter, so if you have some time, please see me.");
            qm.dispose();
            return;
            //} else if(status == 3){
            //qm.sendNext("Okay. In that case, I'll just give you the routes to the Kingdom of Mushroom. #bNear the west entrance of Henesys,#k you'll find an #bempty house#k. Enter the house, and turn left to enter#b<Themed Dungeon : Mushroom Castle>#k. That's the entrance to the Kingdom of Mushroom. There's not much time!");
            //qm.forceStartQuest();
            //return;
        }
    }
    //}
    if (status == 0)
        qm.sendAcceptDecline("Now that you have made the job advancement, you look like you're ready for this. I have something I'd like to ask you for help. Are you willing to listen?");
    if (status == 1)
        qm.sendNext("What happened is that the #bKingdom of Mushroom#k is currently in disarray. Kingdom of Mushroom is located near Henesys, featuring the peace-loving, intelligent King Mush. Recently, he began to feel ill, so he decided to appoint his only daughter #bPrincess Violetta#k. Something must have happened since then for the kingdom to be in its current state.");
    if (status == 2)
        qm.sendNext("I am not aware of the exact details, but it's obvious something terrible had taken place, so I think it'll be better if you go there and assess the damage yourself. An explorer like you seem more than capable of saving Kingdom of Mushroom. I have just written you a #brecommendation letter#k, so I suggest you head over to Kingdom of Mushroom immediately and look for the #bHead Patrol Officer#k.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v4032375# #t4032375#");
    if (status == 3)
        qm.sendYesNo("By the way, do you know where Kingdom of Mushroom is located? It'll be okay if you can find your way there, but if you don't mind, I can take you straight to the entrance.");
    if (status == 4) {
        qm.gainItem(4032375, 1);
        qm.forceStartQuest();
        qm.dispose();
    }
}

function end(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (type == 1 && mode == 0)
            status -= 2;
        else {
            qm.dispose();
            return;
        }
    }
    if (status == 0)
        qm.sendNext("Hmmm? Is that a #brecommendation letter from the job instructor#k??! What is this, are you the one that came to save us, the Kingdom of Mushroom?");
    if (status == 1)
        qm.sendNextPrev("Hmmm... okay. Since the letter is from the job instructor, I suppose you are really the one. I apologize for not introducing myself to you earlier. I'm the #bHead Security Officer#k in charge of protecting King Mush. As you can see, this temporary hideout is protected by the team of security and soldiers. Our situation may be dire, but nevertheless, welcome to Kingdom of Mushroom.");
    if (status == 2) {
        qm.forceCompleteQuest();
        qm.gainItem(4032375, -1);
        qm.forceStartQuest(2312);
        qm.dispose();
    }
}