function start() {
    cm.sendSimple("#b\r\n#L0#ѩ�� (��Ҫ����)#l\r\n#L1#��ŷ����#l#k");
}

function action(mode, type, selection) {
    if (mode == 1) { //or 931000400 + selection..?
        switch (selection) {
            case 0:
                if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
                    cm.sendOk("�ӳ�һ��Ҫ������");
                } else {
                    var party = cm.getPlayer().getParty().getMembers();
                    var mapId = cm.getPlayer().getMapId();
                    var next = true;
                    var size = 0;
                    var it = party.iterator();
                    while (it.hasNext()) {
                        var cPlayer = it.next();
                        var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                        if (ccPlayer == null) {
                            next = false;
                            break;
                        }
                        size += (ccPlayer.isGM() ? 4 : 1);
                    }
                    if (next && (cm.getPlayer().isGM() || size >= 3)) {
                        for (var i = 0; i < 10; i++) {
                            if (cm.getMap(106021500 + i).getCharactersSize() == 0) {
                                cm.warpParty(106021500 + i);
                                cm.dispose();
                                return;
                            }
                        }
                        cm.sendOk("��һ�������Ѿ����������ͨ��.");
                    } else {
                        cm.sendOk("����3�����ϵĳ�Ա������������");
                    }
                }
                break;
            case 1:
                cm.warp(106021401, 0);
                break;
        }
    }
    cm.dispose();
}