importPackage(net.sf.odinms.client);

var status = 0;
var fee;
var chance = Math.floor(Math.random()*14+1);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
			cm.warp(910000000);
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
			var rs = cm.��ȡָ����ͼ�������(209000015);
			var jy = cm.getPlayer().getExp();
			 var wj =  cm.��ȡָ����ͼ�������(209000015);
			  var jb = cm.getMeso();
			  var hulu = cm.haveItem(4032217,20);

            cm.sendYesNo("#b#v4032217##k x 20  \r\n#rע�⣻һ�λ����������Ǻ�«������պ�20����ʱ�򽻸��ҡ�#k\r\n#r������ǻص��г�#k\r\n��ǰ��̨����;#r"+rs+"#k\r\n���ƽ�����棻#d"+((wj*10000)+(jb/10))+" #k\r\n���ƽ����ʧ��#d"+jb/10*wj+" #k\r\n����ƽ�����棻#d"+jy/50*wj+" #k\r\n����ƽ����ʧ��#d"+jy/10*wj+" #k\r\n");
          

    	  
 
        } else if (cm.haveItem(4032217,1) && cm.getPlayer().getJob() < 2100) {
			var jy = cm.getPlayer().getExp()
			 var wj =  cm.��ȡָ����ͼ�������(209000015)
			  var jb = cm.getMeso()
			   
                 if (chance <= 1) { //��ý��
	                   cm.gainItem(4032217,-2000);
					   cm.gainMeso(wj*10000+jb/10);
                       cm.serverNotice("[��̨����]����� "+ cm.getChar().getName() +" ����̨�����ϻ���� "+((wj*10000)+(jb/10))+" ��ҡ�"); 
	                   cm.dispose();
	                } 
	         else if (chance == 2) { //��ʧ���
	                   cm.gainItem(4032217,-2000);
	                   cm.gainMeso(-jb/10*wj);
                       cm.serverNotice("[��̨����]����� "+ cm.getChar().getName() +" ����̨�����϶�ʧ�� "+jb/10*wj+" ��ҡ�"); 
	                   cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.dispose(); 
	                }
			else if (chance == 3) { //��������
	                   cm.gainItem(4032217,-2000);
	                   cm.gainMeso(jy/50*wj);
                       cm.serverNotice("[��̨����]����� "+ cm.getChar().getName() +" ����̨�����ϻ���� "+jy/50*wj+" ���顣"); 
	                   cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.dispose(); 
	                }	
            else if (chance == 4) { //������ʧ
	                   cm.gainItem(4032217,-2000);  
	                   cm.gainMeso(-jy/10*wj);
                       cm.serverNotice("[��̨����]����� "+ cm.getChar().getName() +" ����̨�����ϻ���� "+jy/10*wj+" ���顣"); 
	                   cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.dispose(); 
	                }		
            else if (chance == 5) { //ɱһ��
	                   cm.gainItem(4032217,-2000); 
	                   cm.ɱ��(209000015,1);

                       cm.serverNotice("[��̨����]����� "+ cm.getChar().getName() +" ����̨������һŭɱһ�ˣ�ǧ�ﲻ���С�"); 
	                   cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.dispose(); 
	                }							
			else if (chance == 6) { //������ʧ
	                   cm.gainItem(4032217,-2000); 
	                   cm.gainMeso(-jy/8*wj);
                       cm.serverNotice("[��̨����]����� "+ cm.getChar().getName() +" ����̨�����ϻ���� "+jy/8*wj+" ���顣"); 
	                   cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.dispose(); 
	                }			
            else if (chance == 7) { //ɱ����
	                   cm.gainItem(4032217,-2000);
	                   cm.ɱ��(209000015,2);

                       cm.serverNotice("[��̨����]����� "+ cm.getChar().getName() +" ����̨������һŭɱ���ˣ�ǧ�ﲻ���С�"); 
	                   cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.dispose(); 
	                }
            else if (chance == 8) { //������ʧ
	                   cm.gainItem(4032217,-2000); 
	                   cm.gainMeso(-jy/11*wj);
                       cm.serverNotice("[��̨����]����� "+ cm.getChar().getName() +" ����̨�����ϻ���� "+jy/11*wj+" ���顣"); 
	                   cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.dispose(); 
	                }	
            else if (chance == 9) { //�������
	                   cm.gainItem(4032217,-2000); 
	                   cm.gainMeso(wj*12000+jb/9);
                       cm.serverNotice("[��̨����]����� "+ cm.getChar().getName() +" ����̨�����϶�ʧ�� "+((wj*12000)+(jb/9))+" ��ҡ�"); 
	                   cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.dispose(); 
	                }	
            else if (chance == 10) { //��������
	                   cm.gainItem(4032217,-2000); 
	                   cm.gainMeso(jy/30*wj);
                       cm.serverNotice("[��̨����]����� "+ cm.getChar().getName() +" ����̨�����ϻ���� "+jy/30*wj+" ���顣"); 
	                   cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.dispose(); 
	                }	
            else if (chance == 11) { //��������
	                   cm.gainItem(4032217,-2000); 
	                   cm.gainMeso(jy/60*wj);
                       cm.serverNotice("[��̨����]����� "+ cm.getChar().getName() +" ����̨�����ϻ���� "+jy/60*wj+" ���顣"); 
	                   cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.dispose(); 
	                }
            else if (chance == 12) { //��ʧ���
	                   cm.gainItem(4032217,-2000);
	                   cm.gainMeso(-jb/20*wj);
                       cm.serverNotice("[��̨����]����� "+ cm.getChar().getName() +" ����̨�����϶�ʧ�� "+jb/20*wj+" ��ҡ�"); 
	                   cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.dispose(); 
	                }
            else if (chance == 13) { //��ʧ���
	                   cm.gainItem(4032217,-2000); 
	                   cm.gainMeso(-jb/15*wj);
                       cm.serverNotice("[��̨����]����� "+ cm.getChar().getName() +" ����̨�����϶�ʧ�� "+jb/15*wj+" ��ҡ�"); 
	                   cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.dispose(); 
	                }cm.dispose();
			} else if (cm.haveItem(4032217,40) && cm.getPlayer().getJob() > 2100) {
			var jy = cm.getPlayer().getExp()
			 var wj =  cm.��ȡָ����ͼ�������(209000015)
			  var jb = cm.getMeso()
			   
                 if (chance <= 1) { //��ý��
	                   cm.gainItem(4032217,-2000);
					   cm.gainMeso(wj*10000+jb/10);
                       cm.serverNotice("[��̨����]����� "+ cm.getChar().getName() +" ����̨�����ϻ���� "+((wj*10000)+(jb/10))+" ��ҡ�"); 
	                   cm.dispose();
	                } 
	         else if (chance == 2) { //��ʧ���
	                   cm.gainItem(4032217,-2000);
	                   cm.gainMeso(-jb/10*wj);
                       cm.serverNotice("[��̨����]����� "+ cm.getChar().getName() +" ����̨�����϶�ʧ�� "+jb/10*wj+" ��ҡ�"); 
	                   cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.dispose(); 
	                }
			else if (chance == 3) { //��������
	                   cm.gainItem(4032217,-2000);
	                   cm.gainMeso(jy/50*wj);
                       cm.serverNotice("[��̨����]����� "+ cm.getChar().getName() +" ����̨�����ϻ���� "+jy/50*wj+" ���顣"); 
	                   cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.dispose(); 
	                }	
            else if (chance == 4) { //������ʧ
	                   cm.gainItem(4032217,-2000);  
	                   cm.gainMeso(-jy/10*wj);
                       cm.serverNotice("[��̨����]����� "+ cm.getChar().getName() +" ����̨�����ϻ���� "+jy/10*wj+" ���顣"); 
	                   cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.dispose(); 
	                }		
            else if (chance == 5) { //ɱһ��
	                   cm.gainItem(4032217,-2000); 
	                   cm.ɱ��(209000015,1);

                       cm.serverNotice("[��̨����]����� "+ cm.getChar().getName() +" ����̨������һŭɱһ�ˣ�ǧ�ﲻ���С�"); 
	                   cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.dispose(); 
	                }							
			else if (chance == 6) { //������ʧ
	                   cm.gainItem(4032217,-2000); 
	                   cm.gainMeso(-jy/8*wj);
                       cm.serverNotice("[��̨����]����� "+ cm.getChar().getName() +" ����̨�����ϻ���� "+jy/8*wj+" ���顣"); 
	                   cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.dispose(); 
	                }			
            else if (chance == 7) { //ɱ����
	                   cm.gainItem(4032217,-2000);
	                   cm.ɱ��(209000015,2);

                       cm.serverNotice("[��̨����]����� "+ cm.getChar().getName() +" ����̨������һŭɱ���ˣ�ǧ�ﲻ���С�"); 
	                   cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.dispose(); 
	                }
            else if (chance == 8) { //������ʧ
	                   cm.gainItem(4032217,-2000); 
	                   cm.gainMeso(-jy/11*wj);
                       cm.serverNotice("[��̨����]����� "+ cm.getChar().getName() +" ����̨�����ϻ���� "+jy/11*wj+" ���顣"); 
	                   cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.dispose(); 
	                }	
            else if (chance == 9) { //�������
	                   cm.gainItem(4032217,-2000); 
	                   cm.gainMeso(wj*12000+jb/9);
                       cm.serverNotice("[��̨����]����� "+ cm.getChar().getName() +" ����̨�����϶�ʧ�� "+((wj*12000)+(jb/9))+" ��ҡ�"); 
	                   cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.dispose(); 
	                }	
            else if (chance == 10) { //��������
	                   cm.gainItem(4032217,-2000); 
	                   cm.gainMeso(jy/30*wj);
                       cm.serverNotice("[��̨����]����� "+ cm.getChar().getName() +" ����̨�����ϻ���� "+jy/30*wj+" ���顣"); 
	                   cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.dispose(); 
	                }	
            else if (chance == 11) { //��������
	                   cm.gainItem(4032217,-2000); 
	                   cm.gainMeso(jy/60*wj);
                       cm.serverNotice("[��̨����]����� "+ cm.getChar().getName() +" ����̨�����ϻ���� "+jy/60*wj+" ���顣"); 
	                   cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.dispose(); 
	                }
            else if (chance == 12) { //��ʧ���
	                   cm.gainItem(4032217,-2000);
	                   cm.gainMeso(-jb/20*wj);
                       cm.serverNotice("[��̨����]����� "+ cm.getChar().getName() +" ����̨�����϶�ʧ�� "+jb/20*wj+" ��ҡ�"); 
	                   cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.dispose(); 
	                }
            else if (chance == 13) { //��ʧ���
	                   cm.gainItem(4032217,-2000); 
	                   cm.gainMeso(-jb/15*wj);
                       cm.serverNotice("[��̨����]����� "+ cm.getChar().getName() +" ����̨�����϶�ʧ�� "+jb/15*wj+" ��ҡ�"); 
	                   cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.spawnMonster(9300340,-69,-221);cm.dispose(); 
	                }cm.dispose();
					} else   {
                cm.sendOk("����20�� #i4032217# ��Ҫ����Ҫ�ԡ�ս����Ҫ 40�� #i4032217#");
                cm.dispose();
					
                }
            }
        }
    

