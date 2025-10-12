public class Camera {
    public double x = 0;
    public double y = 0;
    public double targetCameraX = 0;
    public double targetCameraY = 0;
    private Entity target;
    private double cameraSmoothing = 0.05;

    public Camera(Entity target) {
        this.target = target;
    }

    public void setTarget(Entity target) {
        this.target = target;
        if (this.target != null && x == 0 && y == 0) {
            x = this.target.pixelX;
            y = this.target.pixelY;
        }
    }

    public void update(int screenWidth, int screenHeight, int locX, int locY, int viewRangeX, int viewRangeY, int intImageSize) {
        if (target != null) {
            targetCameraX = target.pixelX - (screenWidth / 2.0);
            targetCameraY = target.pixelY - (screenHeight / 2.0);

            int buffer = 2;
            int displayViewRangeX = viewRangeX - buffer;
            int displayViewRangeY = viewRangeY - buffer;

            double displayAreaLeft = (locX - displayViewRangeX) * intImageSize;
            double displayAreaTop = (locY - displayViewRangeY) * intImageSize;
            double displayAreaRight = (locX + displayViewRangeX + 1) * intImageSize;
            double displayAreaBottom = (locY + displayViewRangeY + 1) * intImageSize;

            double minCameraX = displayAreaLeft;
            double maxCameraX = displayAreaRight - screenWidth;
            double minCameraY = displayAreaTop;
            double maxCameraY = displayAreaBottom - screenHeight;

            targetCameraX = Math.max(minCameraX, Math.min(targetCameraX, maxCameraX));
            targetCameraY = Math.max(minCameraY, Math.min(targetCameraY, maxCameraY));

            x += (targetCameraX - x) * cameraSmoothing;
            y += (targetCameraY - y) * cameraSmoothing;
        }
    }
}