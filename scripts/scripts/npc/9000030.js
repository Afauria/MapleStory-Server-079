function start()
{
    cm.sendSimple ("����Ҫ����ɫ�������?\r\n\r\n#r#L1#�ǵ�!!\r\n#b#L2#��,������");
}
  
function action(mode, type, selection)
{
        cm.dispose();
  
        switch(selection)
        {
            case 1:
                if (cm.haveItem(4031307, 1) == true)
                    {
                    cm.gainItem(4031307 ,-1);
                    cm.gainItem(2020020 ,100);
                    cm.sendOk("#b���ⲻҪ��̫��~�������~");
                    cm.dispose();
                    }
                    else
                    {
                    cm.sendOk("#b���һ�±�����û����ɫ�����Ŷ");
                    cm.dispose();
                    }
            break;
            case 2:
                    {
                    cm.sendOk("���м���~��������������");
                    cm.dispose();
                    }
        }
}