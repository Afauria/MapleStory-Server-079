var status = -1;

function action(mode, type, selection) {
    switch (status) {
	case -1:
	    status = 0;
	    switch (cm.getChannelNumber()) {
		case 20:
		    cm.warp(779000000);
	            cm.dispose();
		    break;
		default:
		    cm.sendOk("���Ƶ��û�л�");
		    break;
	    }
}
}