[]vr mapList = Array(//array����ͼid����Ʒid����ÿһ��С���Ӷ�Ҫ�ǲ�ͬ�ĵ�ͼ�Լ���ͬ����Ʒ���룡������������ͼ�Ķ��ٹ�ϵ���û���Ѷȣ�
    Array(100000000,4031817),
	Array(103000000,4031818)
);

var prizeList = Array(4000000);//��Ʒ��ȡ�����뽱Ʒ����ͺã���ƷԽ�࣬�鵽�ļ��ʾ�Խ��
var firstmap = Array(749030000,4032218);//���ʼ�ĵ�ͼid�Լ�������Ʒ��id
var index = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
            cm.sendOk("���ź�������ΪΥ���û����򱻽�ֹ��Ϸ���������������ϵ����Ա.");
            cm.dispose();
    } else if(status == 0){
        if(cm.getMapId() == firstmap[0]){
            var strlen = "���ã�����׽�Բػnpc���ҽ����Ÿ���һ�����Ʒ���뽫����Ʒ������Ҫ��npc�����п��ܻ������Ľ�ƷŶ��";
            index = 1;
        }else{
            var strlen = "���ã�����׽�Բػnpc���ǳ��������ҵ����ң�������������Ҫ����Ʒô��";
            index = 0;
        }
        cm.sendYesNo(strlen);
    }else if(status == 1){
        if(cm.getInventory(4).isFull()){
            cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷���ȡ���Ʒ.");
            cm.dispose();
            return;
        }
        if (cm.getInventory(2).isFull()){
            cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷���ȡ���Ʒ.");
            cm.dispose();
            return;
        }
        if(index == 1){
            if(cm.getBossLog("zhongqiuhuodong") >= 2){
                cm.sendOk("�ûֻ���Բμ�����Ŷ��");
                cm.dispose();
                return;
            }
            for(var i = 0; i < mapList.length;i++){
                if(cm.haveItem(mapList[i][1]) || cm.haveItem(firstmap[1]) ){
                    cm.sendOk("���Ѿ��л��Ʒ��Ŷ~��Ҫ�ظ���ȡŶ��");
                    cm.dispose();
                    return;	
                }
            }
            cm.gainItem(firstmap[1]);
            cm.setBossLog("zhongqiuhuodong");
            cm.sendOk("��ϲ��ɹ�����˱��λ�Ļ��Ʒ");
            cm.dispose();
            return;
        }else{
			if(selectMod == -1){
				cm.sendOk("�Բ����Ҳ��Ǹû��npc");
				cm.dispose();
				return;
			}
			var item = mapList[selectMod][1];
			if(cm.haveItem(item)){
				if(item == finalItem){
					var ran = Math.floor(Math.random() * priceList.length);
					cm.gainItem(prizeList[ran],1);
					cm.gainItem(item,-1);
					cm.sendOk("��ϲ��ɹ�����˱��λ�Ľ�Ʒ");
					cm.dispose();
					return;
				}else{
					var ran = Math.floor(Math.random() * priceList.length);
					cm.gainItem(mapList[ram][1]);
					cm.gainItem(item,-1);
					cm.sendOk("��ϲ��ɹ�����˻��Ʒ!");
					cm.dispose();
					return;
				}
			}else{
				cm.sendOk("������˼Ŷ����û������Ҫ����ƷŶ");
				cm.dispose();
				return;
			}
		}
    }
}

function selectMod(){
    var map = cm.getMapId();
    for(var i = 0; i < mapList.length;i++){
        if(map == mapList[i][0])
            return i;
    }
    return -1;
}