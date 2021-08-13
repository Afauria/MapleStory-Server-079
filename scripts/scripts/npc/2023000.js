var map;
var cost;
var location;
var mapname;
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.sendNext("�š����ٿ���һ�°ɡ�����һ�������ڵģ�");
        cm.dispose();
        return;
    }
    if (status == 0) {
        switch (cm.getMapId()) {
        case 540000000:
            // CBD
            map = 541020000;
            cost = 30000;
            mapname = "Ulu City";
            break;
        case 240000000:
            // Leafre
            map = 240030000;
            cost = 55000;
            mapname = "Ossyria Continent";
            break;
        case 220000000:
            // Ludi
            map = 220050300;
            cost = 45000;
            mapname = "Ossyria Continent";
            break;
        case 211000000:
            // El Nath
            map = 211040200;
            cost = 45000;
            mapname = "Ossyria Continent";
            break;
        case 105000000:
            map = 105030000;
            cost = 30000;
            mapname = "Victoria Continent";
            break;
        case 105030000:
            map = 105000000;
            cost = 30000;
            mapname = "Victoria Continent";
            break;
        default:
            map = 211040200;
            cost = 45000;
            mapname = "Ossyria Continent";
            break;
        }
        cm.sendNext("��ã�������ʱ����ȥΣ�յ�����Σ�յ������ٳ��⳵������Ӫ��·Ϊ#m" + cm.getMapId() + "#��#b#m" + map + "##k֮�䣡�۸�Ϊ #b" + cost + " ���#k��");
    } else if (status == 1) {
        cm.sendYesNo("#b" + cost + "���#k֧����Ҫ�ƶ���#b#m" + map + "##k��");
    } else if (status == 2) {
        if (cm.getMeso() < cost) {
            cm.sendNext("��Ľ�Һ��񲻹����ǳ���Ǹ����֧����ҵĻ����ǲ���ʹ�ó��⳵�ġ�����Ŭ�����ԣ���ȡ��Һ������ɡ�");
            cm.dispose();
        } else {
            cm.gainMeso( - cost);
            cm.warp(map, 0);
            cm.dispose();
        }
    }
}
