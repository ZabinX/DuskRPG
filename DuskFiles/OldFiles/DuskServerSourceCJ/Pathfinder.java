import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Pathfinder {

    private static final int MOVE_STRAIGHT_COST = 10;
    private static final int MAX_SEARCH_DISTANCE = 50;

    private DuskEngine game;
    private LivingThing mover;

    public Pathfinder(DuskEngine game, LivingThing mover) {
        this.game = game;
        this.mover = mover;
    }

    public List<PathNode> findPath(int startX, int startY, int endX, int endY) {
        PathNode startNode = new PathNode(startX, startY);
        PathNode endNode = new PathNode(endX, endY);

        List<PathNode> openList = new ArrayList<>();
        List<PathNode> closedList = new ArrayList<>();

        openList.add(startNode);

        startNode.gCost = 0;
        startNode.hCost = calculateDistanceCost(startNode, endNode);
        startNode.calculateFCost();

        while (!openList.isEmpty()) {
            PathNode currentNode = getLowestFCostNode(openList);
            if (currentNode.equals(endNode)) {
                return calculatePath(currentNode);
            }

            openList.remove(currentNode);
            closedList.add(currentNode);

            for (PathNode neighbourNode : getNeighbourList(currentNode)) {
                if (Math.abs(neighbourNode.x - startX) > MAX_SEARCH_DISTANCE || Math.abs(neighbourNode.y - startY) > MAX_SEARCH_DISTANCE) {
                    continue;
                }

                if (closedList.contains(neighbourNode)) {
                    continue;
                }
                
                boolean canMove = false;
                try {
                    canMove = game.canMoveTo(neighbourNode.x, neighbourNode.y, mover);
                } catch (Exception e) {
                    game.log.printError("Pathfinder.findPath():canMoveTo exception", e);
                }

                if (!canMove) {
                    closedList.add(neighbourNode);
                    continue;
                }

                int tentativeGCost = currentNode.gCost + MOVE_STRAIGHT_COST;
                if (tentativeGCost < neighbourNode.gCost || !openList.contains(neighbourNode)) {
                    neighbourNode.parent = currentNode;
                    neighbourNode.gCost = tentativeGCost;
                    neighbourNode.hCost = calculateDistanceCost(neighbourNode, endNode);
                    neighbourNode.calculateFCost();
                    if (!openList.contains(neighbourNode)) {
                        openList.add(neighbourNode);
                    }
                }
            }
        }

        // No path found
        return null;
    }

    private List<PathNode> getNeighbourList(PathNode currentNode) {
        List<PathNode> neighbourList = new ArrayList<>();
        if (currentNode.x - 1 >= 0) neighbourList.add(new PathNode(currentNode.x - 1, currentNode.y));
        if (currentNode.x + 1 < game.MapColumns) neighbourList.add(new PathNode(currentNode.x + 1, currentNode.y));
        if (currentNode.y - 1 >= 0) neighbourList.add(new PathNode(currentNode.x, currentNode.y - 1));
        if (currentNode.y + 1 < game.MapRows) neighbourList.add(new PathNode(currentNode.x, currentNode.y + 1));
        return neighbourList;
    }

    private List<PathNode> calculatePath(PathNode endNode) {
        List<PathNode> path = new ArrayList<>();
        path.add(endNode);
        PathNode currentNode = endNode;
        while (currentNode.parent != null) {
            path.add(currentNode.parent);
            currentNode = currentNode.parent;
        }
        Collections.reverse(path);
        return path;
    }

    private int calculateDistanceCost(PathNode a, PathNode b) {
        int xDistance = Math.abs(a.x - b.x);
        int yDistance = Math.abs(a.y - b.y);
        return MOVE_STRAIGHT_COST * (xDistance + yDistance);
    }

    private PathNode getLowestFCostNode(List<PathNode> pathNodeList) {
        PathNode lowestFCostNode = pathNodeList.get(0);
        for (int i = 1; i < pathNodeList.size(); i++) {
            if (pathNodeList.get(i).fCost < lowestFCostNode.fCost) {
                lowestFCostNode = pathNodeList.get(i);
            }
        }
        return lowestFCostNode;
    }
}

