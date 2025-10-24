public class TileAnim {
    public int tileID;
    public int frameCount;
    public double delay;
    public double progress = 0;

    public TileAnim(int tileID, int frameCount, int delay) {
        this.tileID = tileID;
        this.frameCount = frameCount;
        this.delay = delay * 0.01;
    }
}
