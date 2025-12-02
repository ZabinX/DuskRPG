import java.awt.Color;
import java.awt.Graphics2D;

public class HealParticle extends Particle {
    public HealParticle(double x, double y, double vx, double vy, int lifetime, Color color, int size) {
        super(x, y, vx, vy, lifetime, color, size, ParticleType.HEAL);
    }

    public void draw(Graphics2D g2d, double cameraX, double cameraY) {
        double screenX = x - cameraX;
        double screenY = y - cameraY;
        g2d.setColor(color);
        int halfSize = size / 2;
        g2d.fillRect((int) screenX - halfSize, (int) screenY - halfSize, size, size);
    }
}

