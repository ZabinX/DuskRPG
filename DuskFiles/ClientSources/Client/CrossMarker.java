import java.awt.Color;

public class CrossMarker {
    int mapX, mapY;
    Color color;
    int lifetime;
    final int maxLifetime;

    public CrossMarker(int mapX, int mapY, Color color, int lifetime) {
        this.mapX = mapX;
        this.mapY = mapY;
        this.color = color;
        this.lifetime = lifetime;
        this.maxLifetime = lifetime;
    }
}
