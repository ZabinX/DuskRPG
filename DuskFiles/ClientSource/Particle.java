import java.awt.Color;
import java.awt.Image;

public class Particle {
    double x, y;
    double vx, vy;
    float alpha;
    int lifetime;
    int initialLifetime;
    Color color;
    int size;
    ParticleType type;
    Image image;
    boolean canWiggle;
    boolean pulse;
    Particle parent1;
    Particle parent2;

    public Particle(double x, double y, double vx, double vy, int lifetime, Color color, int size, ParticleType type) {
        this(x, y, vx, vy, lifetime, color, size, type, null, false, false, null, null);
    }

    public Particle(double x, double y, double vx, double vy, int lifetime, Color color, int size, ParticleType type, Image image) {
        this(x, y, vx, vy, lifetime, color, size, type, image, false, false, null, null);
    }

    public Particle(double x, double y, double vx, double vy, int lifetime, Color color, int size, ParticleType type, Image image, boolean canWiggle) {
        this(x, y, vx, vy, lifetime, color, size, type, image, canWiggle, false, null, null);
    }

    public Particle(double x, double y, double vx, double vy, int lifetime, Color color, int size, ParticleType type, Image image, boolean canWiggle, boolean pulse, Particle p1, Particle p2) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.lifetime = lifetime;
        this.initialLifetime = lifetime;
        this.color = color;
        this.alpha = 1.0f;
        this.size = size;
        this.type = type;
        this.image = image;
        this.canWiggle = canWiggle;
        this.pulse = pulse;
        this.parent1 = p1;
        this.parent2 = p2;
    }

    public void update() {
        if (parent1 != null && parent2 != null) {
            // Anchor between two parents
            this.x = (parent1.x + parent2.x) / 2;
            this.y = (parent1.y + parent2.y) / 2;
        } else {
             x += vx;
             y += vy;
        }

        if (canWiggle) {
            x += Math.random() * 4 - 2;
            y += Math.random() * 4 - 2;
        }

        lifetime--;

        if (pulse) {
            float fade = (float)lifetime / initialLifetime;
            alpha = fade * (0.5f + (float)Math.sin(lifetime * 0.5) * 0.5f);
        } else {
            if (lifetime < 50) {
                alpha = lifetime / 50.0f;
            }
        }
    }

    public boolean isDead() {
        if (parent1 != null && parent1.isDead()) {
            return true;
        }
        if (parent2 != null && parent2.isDead()) {
            return true;
        }
        return lifetime <= 0;
    }
}

