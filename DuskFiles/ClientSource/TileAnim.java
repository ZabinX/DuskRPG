public class TileAnim {
    public int tileID;
    public int frameCount;
    public double delay;

    private static double master_progress = 0;

    public TileAnim(int tileID, int frameCount, int delay) {
        this.tileID = tileID;
        this.frameCount = frameCount;
        this.delay = delay * 0.01;
    }

    public static void update(double deltaTime) {
        master_progress += deltaTime;
    }

    public int getFrame() {
        if (delay <= 0) {
            return 0;
        }
        double totalDuration = delay * frameCount;
        double currentProgress = master_progress % totalDuration;
        return (int)(currentProgress / delay);
    }
}

