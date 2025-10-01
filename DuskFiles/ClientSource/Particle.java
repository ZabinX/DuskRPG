import java.awt.Color;
import java.awt.Image;

public class Particle {
    double x, y;
    double vx, vy;
    float alpha;
    int lifetime;
    Color color;
    int size;
    ParticleType type;
    Image image;
    boolean canWiggle;

    public Particle(double x, double y, double vx, double vy, int lifetime, Color color, int size, ParticleType type) {
        this(x, y, vx, vy, lifetime, color, size, type, null, false);
    }

    public Particle(double x, double y, double vx, double vy, int lifetime, Color color, int size, ParticleType type, Image image) {
        this(x, y, vx, vy, lifetime, color, size, type, image, false);
    }

    public Particle(double x, double y, double vx, double vy, int lifetime, Color color, int size, ParticleType type, Image image, boolean canWiggle) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.lifetime = lifetime;
        this.color = color;
        this.alpha = 1.0f;
        this.size = size;
        this.type = type;
        this.image = image;
        this.canWiggle = canWiggle;
    }

    public void update() {
        x += vx;
        y += vy;

        if (canWiggle) {
            x += Math.random() * 2 - 1;
            y += Math.random() * 2 - 1;
        }

        lifetime--;
        if (lifetime < 50) {
            alpha = lifetime / 50.0f;
        }
    }

    public boolean isDead() {
        return lifetime <= 0;
    }
}

