var �����Ʒ = "#v1302000#";
var x1 = "1302000,+1";// ��ƷID,����
var x2;
var x3;
var x4;
var add = "#fEffect/CharacterEff/1112903/0/0#";//������
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";//��ɫ�Ҽ�ͷ
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";//��ɫ�Ҽ�ͷ
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";//ѡ�����
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var Բ�� = "#fUI/UIWindow/Quest/icon3/6#";
//var ��ɫ��ͷ = "#fEffect/CharacterEff/1114000/2/0#";
var ��ɫ��ͷ = "#fEffect/CharacterEff/1112908/0/1#";  //�ʹ�3
var ttt1 = "#fEffect/CharacterEff/1062114/1/0#";  //����
//var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";


function start() {

if (cm.getChar().getMapId() != 209000015){
    cm.sendSimple (""+add+add+add+add+add+add+add+add+add+add+add+"�������а�"+add+add+add+add+add+add+add+add+add+add+add+"\r\n#b�鿴����������\r\n#L1#�ƹ����а�#l#r#L2#�������а�#l\r\n\r\n#L12#�ȼ����а�#L11#�������а�\r\n\r\n#L10#������а�#L112#ɱ�����а�");//#L10#������а�
    } else {
    cm.sendOk("��Ҫ�������ͼʹ����")
    }
}
function action(mode, type, selection) {
cm.dispose();
if (selection == 0) { //��������
       cm.openNpc(2101017,0);
} else if (selection == 1) {
	//Level
        cm.�ƹ����а�();
} else if (selection == 2) {
        //MapGui
        cm.�������а�();
	cm.dispose(); 
}  else if (selection == 10) {
        //MapGui
        cm.������а�();
	cm.dispose(); 
}   else if (selection == 11) {
        cm.�������а�();
	cm.dispose(); 
}   else if (selection == 12) {
        cm.�ȼ����а�();
}   else if (selection == 112) {
        cm.ɱ�����а�();
	cm.dispose(); 
}  
}