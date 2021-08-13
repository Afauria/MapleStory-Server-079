package server.maps;

import java.awt.Point;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

public class MapleFootholdTree
{
    private static byte maxDepth;
    private MapleFootholdTree nw;
    private MapleFootholdTree ne;
    private MapleFootholdTree sw;
    private MapleFootholdTree se;
    private List<MapleFoothold> footholds;
    private Point p1;
    private Point p2;
    private Point center;
    private int depth;
    private int maxDropX;
    private int minDropX;
    
    public MapleFootholdTree(final Point p1, final Point p2) {
        this.nw = null;
        this.ne = null;
        this.sw = null;
        this.se = null;
        this.footholds = new LinkedList<>();
        this.depth = 0;
        this.p1 = p1;
        this.p2 = p2;
        this.center = new Point((p2.x - p1.x) / 2, (p2.y - p1.y) / 2);
    }
    
    public MapleFootholdTree(final Point p1, final Point p2, final int depth) {
        this.nw = null;
        this.ne = null;
        this.sw = null;
        this.se = null;
        this.footholds = new LinkedList<>();
        this.depth = 0;
        this.p1 = p1;
        this.p2 = p2;
        this.depth = depth;
        this.center = new Point((p2.x - p1.x) / 2, (p2.y - p1.y) / 2);
    }
    
    public void insert(final MapleFoothold f) {
        if (this.depth == 0) {
            if (f.getX1() > this.maxDropX) {
                this.maxDropX = f.getX1();
            }
            if (f.getX1() < this.minDropX) {
                this.minDropX = f.getX1();
            }
            if (f.getX2() > this.maxDropX) {
                this.maxDropX = f.getX2();
            }
            if (f.getX2() < this.minDropX) {
                this.minDropX = f.getX2();
            }
        }
        if (this.depth == MapleFootholdTree.maxDepth || (f.getX1() >= this.p1.x && f.getX2() <= this.p2.x && f.getY1() >= this.p1.y && f.getY2() <= this.p2.y)) {
            this.footholds.add(f);
        }
        else {
            if (this.nw == null) {
                this.nw = new MapleFootholdTree(this.p1, this.center, this.depth + 1);
                this.ne = new MapleFootholdTree(new Point(this.center.x, this.p1.y), new Point(this.p2.x, this.center.y), this.depth + 1);
                this.sw = new MapleFootholdTree(new Point(this.p1.x, this.center.y), new Point(this.center.x, this.p2.y), this.depth + 1);
                this.se = new MapleFootholdTree(this.center, this.p2, this.depth + 1);
            }
            if (f.getX2() <= this.center.x && f.getY2() <= this.center.y) {
                this.nw.insert(f);
            }
            else if (f.getX1() > this.center.x && f.getY2() <= this.center.y) {
                this.ne.insert(f);
            }
            else if (f.getX2() <= this.center.x && f.getY1() > this.center.y) {
                this.sw.insert(f);
            }
            else {
                this.se.insert(f);
            }
        }
    }
    
    private List<MapleFoothold> getRelevants(final Point p) {
        return this.getRelevants(p, new LinkedList<MapleFoothold>());
    }
    
    private List<MapleFoothold> getRelevants(final Point p, final List<MapleFoothold> list) {
        list.addAll(this.footholds);
        if (this.nw != null) {
            if (p.x <= this.center.x && p.y <= this.center.y) {
                this.nw.getRelevants(p, list);
            }
            else if (p.x > this.center.x && p.y <= this.center.y) {
                this.ne.getRelevants(p, list);
            }
            else if (p.x <= this.center.x && p.y > this.center.y) {
                this.sw.getRelevants(p, list);
            }
            else {
                this.se.getRelevants(p, list);
            }
        }
        return list;
    }
    
    private MapleFoothold findWallR(final Point p1, final Point p2) {
        for (final MapleFoothold f : this.footholds) {
            if (f.isWall() && f.getX1() >= p1.x && f.getX1() <= p2.x && f.getY1() >= p1.y && f.getY2() <= p1.y) {
                return f;
            }
        }
        if (this.nw != null) {
            if (p1.x <= this.center.x && p1.y <= this.center.y) {
                final MapleFoothold ret = this.nw.findWallR(p1, p2);
                if (ret != null) {
                    return ret;
                }
            }
            if ((p1.x > this.center.x || p2.x > this.center.x) && p1.y <= this.center.y) {
                final MapleFoothold ret = this.ne.findWallR(p1, p2);
                if (ret != null) {
                    return ret;
                }
            }
            if (p1.x <= this.center.x && p1.y > this.center.y) {
                final MapleFoothold ret = this.sw.findWallR(p1, p2);
                if (ret != null) {
                    return ret;
                }
            }
            if ((p1.x > this.center.x || p2.x > this.center.x) && p1.y > this.center.y) {
                final MapleFoothold ret = this.se.findWallR(p1, p2);
                if (ret != null) {
                    return ret;
                }
            }
        }
        return null;
    }
    
    public MapleFoothold findWall(final Point p1, final Point p2) {
        if (p1.y != p2.y) {
            throw new IllegalArgumentException();
        }
        return this.findWallR(p1, p2);
    }
    
    public boolean checkRelevantFH(final short fromx, final short fromy, final short tox, final short toy) {
        MapleFoothold fhdata = null;
        for (final MapleFoothold fh : this.footholds) {
            if (fh.getX1() <= fromx && fh.getX2() >= fromx && fh.getY1() <= fromy && fh.getY2() >= fromy) {
                fhdata = fh;
                break;
            }
        }
        for (final MapleFoothold fh2 : this.footholds) {
            if (fh2.getX1() <= tox && fh2.getX2() >= tox && fh2.getY1() <= toy && fh2.getY2() >= toy) {
                if (fhdata.getId() != fh2.getId() && fh2.getId() != fhdata.getNext() && fh2.getId() != fhdata.getPrev()) {
                    System.out.println("Couldn't find the correct pos for next/prev");
                    return false;
                }
                return true;
            }
        }
        return false;
    }
    
    public MapleFoothold findBelow(final Point p) {
        final List<MapleFoothold> relevants = this.getRelevants(p);
        final List<MapleFoothold> xMatches = new LinkedList<MapleFoothold>();
        for (final MapleFoothold fh : relevants) {
            if (fh.getX1() <= p.x && fh.getX2() >= p.x) {
                if (fh.getX1() == fh.getX2()) {
                    continue;
                }
                xMatches.add(fh);
            }
        }
        Collections.sort(xMatches);
        for (final MapleFoothold fh : xMatches) {
            if (!fh.isWall() && fh.getY1() != fh.getY2()) {
                final double s1 = Math.abs(fh.getY2() - fh.getY1());
                final double s2 = Math.abs(fh.getX2() - fh.getX1());
                final double s3 = Math.abs(p.x - fh.getX1());
                final double alpha = Math.atan(s2 / s1);
                final double beta = Math.atan(s1 / s2);
                final double s4 = Math.cos(alpha) * (s3 / Math.cos(beta));
                int calcY;
                if (fh.getY2() < fh.getY1()) {
                    calcY = fh.getY1() - (int)s4;
                }
                else {
                    calcY = fh.getY1() + (int)s4;
                }
                if (calcY >= p.y) {
                    return fh;
                }
                continue;
            }
            else {
                if (!fh.isWall() && fh.getY1() >= p.y) {
                    return fh;
                }
                continue;
            }
        }
        return null;
    }
    
    public int getX1() {
        return this.p1.x;
    }
    
    public int getX2() {
        return this.p2.x;
    }
    
    public int getY1() {
        return this.p1.y;
    }
    
    public int getY2() {
        return this.p2.y;
    }
    
    public int getMaxDropX() {
        return this.maxDropX;
    }
    
    public int getMinDropX() {
        return this.minDropX;
    }
    
    static {
        MapleFootholdTree.maxDepth = 8;
    }
}
