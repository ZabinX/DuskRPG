import java.util.Vector;

public class MovementManager {
    public boolean blnPlayerAnimationLock = false;

    public void update(Vector<Entity> entities, long playerTicks, Entity player, Camera camera) {
        if (blnPlayerAnimationLock) {
            double cameraStopThreshold = 0.5;
            if (Math.abs(camera.x - camera.targetCameraX) < cameraStopThreshold && Math.abs(camera.y - camera.targetCameraY) < cameraStopThreshold) {
                blnPlayerAnimationLock = false;
                if (player != null && player.intStep != -1) {
                    switch (player.intMoveDirection) {
                        case 0: player.intStep = 0; break;
                        case 1: player.intStep = 2; break;
                        case 2: player.intStep = 4; break;
                        case 3: player.intStep = 6; break;
                    }
                    player.intMoveDirection = -1;
                }
            }
        }

        final double entityMoveSpeed = 50.0 / (playerTicks / 50.0);
        final double squaredEntityMoveSpeed = entityMoveSpeed * entityMoveSpeed;

        for (int i = 0; i < entities.size(); i++) {
            Entity ent = entities.elementAt(i);

            boolean shouldAnimate = ent.isMoving || (ent == player && blnPlayerAnimationLock);
            if (shouldAnimate) {
                ent.animCounter++;
                int animThreshold = 7;
                if (ent.animCounter >= animThreshold) {
                    ent.walkFrameToggle = !ent.walkFrameToggle;
                    ent.animCounter = 0;
                }
                int frameOffset = ent.walkFrameToggle ? 1 : 0;
                if (ent.intStep != -1) {
                    switch (ent.intMoveDirection) {
                        case 0: ent.intStep = 0 + frameOffset; break;
                        case 1: ent.intStep = 2 + frameOffset; break;
                        case 2: ent.intStep = 4 + frameOffset; break;
                        case 3: ent.intStep = 6 + frameOffset; break;
                    }
                }
            }

            if (ent.isMoving) {
                double dx = ent.targetX - ent.pixelX;
                double dy = ent.targetY - ent.pixelY;
                double squaredDistance = dx * dx + dy * dy;

                if (squaredDistance < squaredEntityMoveSpeed) {
                    ent.pixelX = ent.targetX;
                    ent.pixelY = ent.targetY;
                    ent.isMoving = false;

                    if (ent == player) {
                        blnPlayerAnimationLock = true;
                    } else {
						if (ent.intStep != -1) {
							switch (ent.intMoveDirection) {
								case 0: ent.intStep = 0; break;
								case 1: ent.intStep = 2; break;
								case 2: ent.intStep = 4; break;
								case 3: ent.intStep = 6; break;
							}
						}
                        ent.intMoveDirection = -1;
                    }

                    if (ent.hasPendingMove) {
                        ent.intLocX = ent.pendingLocX;
                        ent.intLocY = ent.pendingLocY;
                        ent.hasPendingMove = false;
                    }

                    if (!ent.queuedMoves.isEmpty()) {
                        startMove(ent, ent.queuedMoves.poll(), 36);
                    }
                } else {
                    double angle = Math.atan2(dy, dx);
                    ent.pixelX += entityMoveSpeed * Math.cos(angle);
                    ent.pixelY += entityMoveSpeed * Math.sin(angle);
                }
            }
        }
    }

    public void startMove(Entity ent, int direction, int intImageSize) {
        if (direction < 0 || direction > 3) return;

        if (direction == 0) { // North
            ent.intMoveDirection = 0;
            ent.targetX = ent.pixelX;
            ent.targetY = ent.pixelY - intImageSize;
            ent.pendingLocX = (int) ent.intLocX;
            ent.pendingLocY = (int) ent.intLocY - 1;
        } else if (direction == 1) { // South
            ent.intMoveDirection = 1;
            ent.targetX = ent.pixelX;
            ent.targetY = ent.pixelY + intImageSize;
            ent.pendingLocX = (int) ent.intLocX;
            ent.pendingLocY = (int) ent.intLocY + 1;
        } else if (direction == 2) { // West
            ent.intMoveDirection = 2;
            ent.targetX = ent.pixelX - intImageSize;
            ent.targetY = ent.pixelY;
            ent.pendingLocX = (int) ent.intLocX - 1;
            ent.pendingLocY = (int) ent.intLocY;
        } else if (direction == 3) { // East
            ent.intMoveDirection = 3;
            ent.targetX = ent.pixelX + intImageSize;
            ent.targetY = ent.pixelY;
            ent.pendingLocX = (int) ent.intLocX + 1;
            ent.pendingLocY = (int) ent.intLocY;
        }
        ent.hasPendingMove = true;
        ent.isMoving = true;
    }
}


