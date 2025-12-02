import java.awt.Color;
import java.awt.Graphics2D;

public class RegenerateParticle extends Particle {
    public RegenerateParticle(double x, double y, double vx, double vy, int lifetime, Color color, int size, boolean isOrb, Entity parent) {
        super(x, y, vx, vy, lifetime, color, size, isOrb ? ParticleType.REGENERATE_ORB : ParticleType.REGENERATE_CIRCLE, null, false, isOrb, null, null, 0, parent, isOrb, true);
    }

    public void draw(Graphics2D g2d, double cameraX, double cameraY, int intImageSize) {
        double screenX = x - cameraX;
        double screenY = y - cameraY;
        g2d.setColor(color);
        if (type == ParticleType.REGENERATE_CIRCLE) {
            double radius = intImageSize * 0.6;
            int ovalWidth = (int) (radius * 2);
            int ovalHeight = (int) (radius);
            int ovalX = (int) (screenX - radius);
            int ovalY = (int) (screenY - radius / 2);
            g2d.drawOval(ovalX, ovalY, ovalWidth, ovalHeight);
        } else {
            int halfSize = size / 2;
            g2d.fillOval((int) screenX - halfSize, (int) screenY - halfSize, size, size);
        }
    }
}


