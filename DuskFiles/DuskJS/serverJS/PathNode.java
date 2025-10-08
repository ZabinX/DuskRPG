public class PathNode {
    public int x;
    public int y;
    public int gCost;
    public int hCost;
    public int fCost;
    public PathNode parent;

    public PathNode(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public void calculateFCost() {
        fCost = gCost + hCost;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        PathNode pathNode = (PathNode) obj;
        return x == pathNode.x && y == pathNode.y;
    }

    @Override
    public int hashCode() {
        return 31 * x + y;
    }
}

