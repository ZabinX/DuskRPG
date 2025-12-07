import java.awt.Graphics2D;
import java.awt.Image;

public class ArmorParticle extends Particle {
    public ArmorParticle(double x, double y, double vx, double vy, int lifetime, Image image) {
        super(x, y, vx, vy, lifetime, null, 0, ParticleType.ARMOR, image);
    }

    public void draw(Graphics2D g2d, double cameraX, double cameraY) {
        double screenX = x - cameraX;
        double screenY = y - cameraY;
        int imgWidth = image.getWidth(null);
        int imgHeight = image.getHeight(null);
        g2d.drawImage(image, (int) screenX - (imgWidth / 2), (int) screenY - (imgHeight / 2), null);
    }
}
