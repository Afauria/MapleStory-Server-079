/* Author: Xterminator
	NPC Name: 		Robin
	Map(s): 		Maple Road : Snail Hunting Ground I (40000)
	Description: 		Beginner Helper
*/
var status = -1;
var mainmenu = "����...���ҹ������е�����!!\r\n#L0##b����ô�ƶ�?#l\r\n#L1#�Ҹ����ɱ����Щ����?#l\r\n#L2#�Ҹ�������ȡ����?#l\r\n#L3#������ᷢ��ʲô?#l\r\n#L4#��ʲôʱ�����ѡ��ְҵ��#l\r\n#L5#�����Ҹ�����ڻ���ð�յ������飡#l\r\n#L6#��Ҫ��ô�����ܳ�Ϊһ��սʿ��#l\r\n#L7#��Ҫ��ô�����ܳ�Ϊһ��������?#l\r\n#L8#��Ҫ��ô�����ܳ�Ϊһ��ħ��ʦ?#l\r\n#L9#��Ҫ��ô�����ܳ�Ϊһ������?#l\r\n#L10#�����߽�ɫ������ֵ? (S)#l\r\n#L11#����β鿴�ոռ�ȡ����Ʒ?#l\r\n#L12#������ʹ��һ����Ʒ?#l\r\n#L13#�������鿴�Ҵ����·�?#l\r\n#L14#ʲô�Ǽ���? (K)#l\r\n#L15#����������ȥ�����?#l\r\n#L16#�����ʲô��#l#k";

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    cm.sendNext("���������ɱ��һ�����ÿһ�����ﶼӵ���Լ���HP���㽫�����������������ǡ���Ȼ������Խǿ����Խ�Ѱ�����ɱ����");
	}
	status--;
    }
    if (status == 0) {
	cm.sendSimple(mainmenu);
    } else if (status == 1) {
	if (selection == 0) { // How do I move?
	    status = -1;
	    cm.sendNext("�õģ���������ƶ��ķ�ʽ. ʹ�ü����ϵ� #b�����ͷ, �� ���Ҽ�ͷ#k �Ϳ�����ƽ�غ���б�ĵ�·���ƶ�, ���� �������½ǵ�#bAlt#k����Ծ. ��ѡ��Ь�ӿ����������ƶ��ٶȺ͵���������������ͼ��ķ��⴦�����Ǵ����ţ��߹�ȥ�������ϵ� #b���ϼ�ͷ#k .�Ϳ��Խ��봫����ȥ����ĵ�ͼ���� ���¼�ͷ��ſ������");
	} else if (selection == 1) { // How do I take down the monsters?
	    cm.sendNext("���������ɱ��һ�����ÿһ�����ﶼӵ���Լ���HP���㽫�����������������ǡ���Ȼ������Խǿ����Խ�Ѱ�����ɱ����");
	} else if (selection == 2) { // How can I pick up an item?
	    status = 5;
	    cm.sendNext("���������μ�ȡ���ߵķ�����һ����ɱ��һ������ӹ������Ͼͻ�����Ʒ���䵽��ͼ�ϡ�����ȡʱ����ɫվ�ڸ���Ʒ�ĵط������������ϵġ�Z�������Ϳ��Լ�ȡ�����ˡ�");
	} else if (selection == 3) { // What happens when I die?
	    status = 8;
	    cm.sendNext("��֪��������ᷢ��ʲô�𣿵����HP�ﵽ0ʱ������ɹ��.����һ��Ĺ������������ĵط����֣��㽫�޷��ƶ�����Ȼ����Ȼ��������.");
	} else if (selection == 4) { // When can I choose a job?
	    status = 11;
	    cm.sendNext("��ʲôʱ�����ѡ��ְҵ�������������İɣ��ҵ����ѡ�ÿ��ְҵ��Ҫ��һ��Ҫ����Ҫ��ﵽ����ͨ�������8��10��֮���ˮƽ�ǿ��Եģ�����ҪŬ�����������");
	} else if (selection == 5) { // Tell me more about this island!
	    status = 14;
	    cm.sendNext("��֪������������л���ð�յ���Ư���ڿ��У���һֱƯ��������У�������Щ����Ĺ����������Ĵ��ڡ�����һ���ǳ������ĵ����ʺϳ�ѧ��!");
	} else if (selection == 6) { // What should I do to become a Warrior?
	    status = -1;
	    cm.sendNext("�����Ϊһ��#bսʿ#k? ��, ��ô�ҽ�����ȥ������.��ʿ����ǰ��һ����սʿʥ��ĵط�����NPC#r��������#k and see #bDances with Balrog#k. ��������Ϊ������սʿ.�һ������Ҫ�����飻���������10�����ܳ�Ϊһ��սʿ����");
	} else if (selection == 7) { // What should I do to become a Bowman?
	    status = -1;
	    cm.sendNext("�����Ϊһ��#b������#k? ��, ��ô�ҽ�����ȥ������.���ִ�ǰ��һ���й�������ѵ���ĵط�����NPC#r������#k. ��������Ϊ�����Ĺ�����.�һ������Ҫ�����飻���������10�����ܳ�Ϊһ�������֣���");
	} else if (selection == 8) { // What should I do to become a Magician?
	    status = 19;
	    cm.sendNext("�����Ϊһ��#bħ��ʦ#k? ��, ��ô�ҽ�����ȥ������.ħ������ǰ��һ����ͼ��ݵĵط�����NPC#r��˹#k. ��������Ϊ������ħ��ʦ.�һ������Ҫ�����飻���������8�����ܳ�Ϊһ��ħ��ʦ����");
	} else if (selection == 9) { // What should I do to become a Thief?
	    status = -1;
	    cm.sendNext("�����Ϊһ��#b����#k? ��, ��ô�ҽ�����ȥ������.��������ǰ��һ���оưɵĵط�����NPC#r���³#k. ��������Ϊ�����ķ���.�һ������Ҫ�����飻���������8�����ܳ�Ϊһ����������");
	} else if (selection == 10) { // How do I raise the character stats? (S)
	    status = 22;
	    cm.sendNext("����֪����������Ľ�ɫ����ֵ���Ȱ������ϵġ�S������������ֵ���ڣ�ѡ������ְҵƥ�������ֵ�����мӵ�Ϳ����ˡ���������ʱ���㽫���5�������㣬��AP��������ô�򵥡�");
	} else if (selection == 11) { // How do I check the items that I just picked up?
	    status = -1;
	    cm.sendNext("����֪����β鿴��񵽵Ķ���������ɱ��һ������ʱ���������һ����Ʒ������԰�Z����ȡ���ߣ�Ȼ��õ��߽��洢����ı��������԰���I�����򿪱������鿴��ռ�ȡ������Ʒ��#k.");
	} else if (selection == 12) { // How do I put on an item?
	    status = -1;
	    cm.sendNext("����֪����δ����·�����I���򿪱���������ƶ������봩����װ�����棬˫�������Ϳ���װ�������ˡ���Ȼ����㷢���Լ����������װ������ô�������ְҵ���ԵȲ��������װ�����趨����ô����޷������ˡ���Ҳ����ͨ���򿪲ֿ�Ը�װ�����д洢������̵�Ը�װ��������������Ҳ������굥��װ����Ȼ���ͼ���ϳ�װ�����ڣ��ٰ�һ�����������Ϳ��԰���Ʒ�������ˡ���ô�������˰ɣ�");
	} else if (selection == 13) { // How do I check out the items that I'm wearing?
	    status = -1;
	    cm.sendNext("��Ҫ�鿴�������ϵ�װ�����������ϵġ�E������װ�����ڣ�������������������װ���ˣ�����ƶ���װ���ϻ���ʾװ����������Ϣ��˫���������ϵ�װ�����Ϳ���ȡ��װ�������뱳��Ŷ~��");
	} else if (selection == 14) { // What are skills? (K)
	    status = -1;
	    cm.sendNext("���һ�ݹ����󣬻�õ����������������ܡ��㽫���ר�ŵļ��ܣ��������ϵġ�K���������Բ鿴��ļ����б�Ҳ���Ը��������ӵ�����ǿ�����ܵ�����ֵ����ת����Ҫ�����飬���ܰ����������Ŷ~��");
	} else if (selection == 15) { // How do I get to Victoria Island?
	    status = -1;
	    cm.sendNext("����Ե�������������ͷ����������ۡ��������ϵġ�W�������Բ鿴�����ͼ����ῴ�����ڽ������ϵ�λ�á�");
	} else if (selection == 16) { // What are mesos?
	    status = -1;
	    cm.sendNext("������ڴ���ð�յ�ʹ�õĻ��ҡ������ͨ��������������Ʒ��Ϊ�˻�ȡ���ǣ������ɱ�������Ĺ�����������ϻ�ȡ��ҡ�Ҳ�������̵����һЩ������װ����Ʒ�ȣ��������������ȡ���");
	}
    } else if (status == 2) { // How do I take down the monsters?
	cm.sendNextPrev("Ϊ�˹�����Щ�������Ҫװ��һ����������ʹ��������ʱ����ϼ��ܡ��Ϳ������ɵĸɵ������ˡ�");
    } else if (status == 3) { // How do I take down the monsters?
	cm.sendNextPrev("һ�����ְҵ����������ø���Ĳ�ͬ���ܣ�����Խ����Ƿ������ݼ���������ʹ�����ǡ�����ǹ������ܣ��㲻��Ҫ��Ctrl������������Ҫ������ȼ�����İ�ť�Ϳ����ˡ�");
    } else if (status == 4) {
	status = 0;
	cm.sendSimple(mainmenu);
    } else if (status == 5) { // How can I pick up an item?
	cm.sendNext("���������μ�ȡ���ߵķ�����һ����ɱ��һ������ӹ������Ͼͻ�����Ʒ���䵽��ͼ�ϡ�����ȡʱ����ɫվ�ڸ���Ʒ�ĵط������������ϵġ�Z�������Ϳ��Լ�ȡ�����ˡ�");
    } else if (status == 6) { // How can I pick up an item?
	cm.sendNextPrev("����Ҫ��ס�������ı������ˣ����޷���ȡ�ˡ�����������и����߲���Ҫ�ˣ���������������Ϳ��Դ��������ջ�һ����ĵȼ���ߣ��˽�ĸ����ʱ�򣬾ͻᷢ�ֿ������󱳰�����������ܻ�ò���Ÿ���ĵ�����");
    } else if (status == 7) {
	status = 0;
	cm.sendSimple(mainmenu);
    } else if (status == 8) { // What happens when I die?
	cm.sendNext("��֪��������ᷢ��ʲô�𣿵����HP�ﵽ0ʱ������ɹ��.����һ��Ĺ������������ĵط����֣��㽫�޷��ƶ�����Ȼ����Ȼ��������.");
    } else if (status == 9) { // What happens when I die?
	cm.sendNextPrev("�������һ�����֣���ô����������ʱ�򣬲�����ʲô��ʧ��Ȼ��һ����ѡ����һ��ְҵ������Ͳ�һ���ˡ�����������ʱ�����ʧȥһ���ֵľ���ֵ������ȷ����ϧһ�д��ۣ�����Σ�պ�������");
    } else if (status == 10) {
	status = 0;
	cm.sendSimple(mainmenu);
    } else if (status == 11) { // When can I choose a job?
	cm.sendNext("��ʲôʱ�����ѡ��ְҵ�������������İɣ��ҵ����ѡ�ÿ��ְҵ����һ��Ҫ���������ɣ�ͨ��8��10��֮���ˮƽ�Ϳ����ˡ�����ҪŬ������Ŷ��");
    } else if (status == 12) { // When can I choose a job?
	cm.sendNextPrev("�ȼ�����Ψһ�������������أ��㻹��Ҫ��ߵ�һ���ļ���������ְҵΪ����������ֵ������Ҫ��Ϊһ��սʿ���������ֵ���볬��35�㣬�ȵȣ���֪������˵ʲô��ȷ����֪������Լ���ְҵ�и��������˽⡣");
    } else if (status == 13) {
	status = 0;
	cm.sendSimple(mainmenu);
    } else if (status == 14) { // Tell me more about this island!
	cm.sendNext("��֪������������д���ð�յ���Ư���ڿ��У���һֱƯ��������У�������Щ����Ĺ����������Ĵ��ڡ�����һ���ǳ������ĵ����ʺϳ�ѧ��!");
    } else if (status == 15) { // Tell me more about this island!
	cm.sendNextPrev("���ǣ���������Ϊһ��ǿ�����ң���ò�Ҫ����������ô�����Ӧ��ȥ��һ�������������ľ޴��죬�Ǹ��ط��������ö࣬һ��Ҳ����Ц�������Σ�յġ�");
    } else if (status == 16) { // Tell me more about this island!
	cm.sendNextPrev("����ôȥ���������ڸõ��Ķ�����һ���ۿڡ�������������ҵ�һ���ڿ��з���Ĵ����ϴ���վ�ڴ���ǰ�棬����������顣");
    } else if (status == 17) { // Tell me more about this island!
	cm.sendNextPrev("Ŷ�ǵģ�������֮ǰ���һ����Ϣ������㲻֪����������Ͱ���W�����鿴���ͼ���ᵯ����λ����ʾ���λ�ã��㲻�ص��Ļ���ʧ����");
    } else if (status == 18) {
	status = 0;
	cm.sendSimple(mainmenu);
    } else if (status == 19) { // What should I do to become a Magician?
	cm.sendNext("�����Ϊһ��#bħ��ʦ#k? ��, ��ô�ҽ�����ȥ������.ħ������ǰ��һ����ͼ��ݵĵط�����NPC#r��˹#k. ��������Ϊ������ħ��ʦ.");
    } else if (status == 20) { // What should I do to become a Magician?
	cm.sendNextPrev("Ŷ��˳��˵һ�£�������ְҵ����Ϊһ��ħ��ʦ����ֻ��Ҫ��8���Ϳ���תְ�ˡ�Ϊʲô��ʦ�����ű�׼��������ְҵ�أ���Ϊ��ʦ����������ǰ��û�з�����ϣ����Ǹ�С���������Ե��ڱ��ְҵ��������תְ����������");
    } else if (status == 21) {
	status = 0;
	cm.sendSimple(mainmenu);
    } else if (status == 22) { // How do I raise the character stats? (S)
	cm.sendNext("����֪����������Ľ�ɫ����ֵ���Ȱ������ϵġ�S������������ֵ���ڣ�ѡ������ְҵƥ�������ֵ�����мӵ�Ϳ����ˡ���������ʱ���㽫���5�������㣬��AP��������ô�򵥡�");
    } else if (status == 23) { // How do I raise the character stats? (S)
	cm.sendNextPrev("�������������е�����ֵ���棬�ͻ���ּ�Ҫ˵��������սʿ��STR�����ֵ�DEXħ��ʦ��INT������LUK��Щ���Ǹ�ְҵ�Ļ�������������Ҫ��ϸ�����������Ĳ���֮�����Ӷ�ǿ�����Լ���");
    } else if (status == 24) {
	status = 0;
	cm.sendSimple(mainmenu);
    }
}
