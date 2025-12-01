/* All code copyright Tom Weingarten (captaint@home.com) 2000 Tom Weingarten makes no assurances as to the reliability or functionality of this code. Use at your own risk.

You are free to edit or redistribute this code or any portion at your wish, under the condition that you do not edit or remove this license, and accompany it with all redistributions. */

public class Entity
{
    String strName;
    double intLocX,
        intLocY;
    int intType,
        intNum=0,
        intStep=-1,
        intImage=0,
        intTicks,
        intMoveDirection=-1,
        /*intMoveDirection
        0 north
        1 south
        2 west
        3 east
        */
        intFlag=0;
        /*intFlag
        0 none
        1 ally
        2 enemy
        */
    int hp,
        maxhp;
    long ID;
    Entity entNext=null;
    
    // Fields for smooth movement
    double pixelX, pixelY;
    double targetX, targetY;
    boolean isMoving;
    
    // Fields for pending move logic
    int pendingLocX, pendingLocY;
    boolean hasPendingMove;
    java.util.Queue<Integer> queuedMoves;
    boolean walkFrameToggle;
    int animCounter;
    boolean inCombat;
    
    public Entity(String instrName, long inID, double inintLocX, double inintLocY,int inImage,int inStep,int inintType)
    {
        strName = instrName;
        ID = inID;
        intLocX = inintLocX;
        intLocY = inintLocY;
    	intImage = inImage;
    	intStep = inStep;
    	intType = inintType;
        hp = 0;
        maxhp = 0;
        inCombat = false;
        
        // Initialize smooth movement fields
        pixelX = intLocX;
        pixelY = intLocY;
        targetX = intLocX;
        targetY = intLocY;
        isMoving = false;
        
        // Initialize pending move fields
        hasPendingMove = false;
        queuedMoves = new java.util.LinkedList<>();
        walkFrameToggle = false;
        animCounter = 0;
    }
}



