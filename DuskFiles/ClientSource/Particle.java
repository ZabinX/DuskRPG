import java.awt.Color;
import java.awt.Image;
import java.util.HashMap;

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
    public int timer;
    long parentEntityID;
    private double offsetX;
    private double offsetY;

    public Particle(double x, double y, double vx, double vy, int lifetime, Color color, int size, ParticleType type) {
        this(x, y, vx, vy, lifetime, color, size, type, null, false, false, null, null, 0, null);
    }

    public Particle(double x, double y, double vx, double vy, int lifetime, Color color, int size, ParticleType type, Image image) {
        this(x, y, vx, vy, lifetime, color, size, type, image, false, false, null, null, 0, null);
    }

    public Particle(double x, double y, double vx, double vy, int lifetime, Color color, int size, ParticleType type, Image image, boolean canWiggle) {
        this(x, y, vx, vy, lifetime, color, size, type, image, canWiggle, false, null, null, 0, null);
    }
    
    public Particle(double x, double y, double vx, double vy, int lifetime, Color color, int size, ParticleType type, Image image, boolean canWiggle, boolean pulse, Particle p1, Particle p2, int timer) {
        this(x, y, vx, vy, lifetime, color, size, type, image, canWiggle, pulse, p1, p2, timer, null);
    }

    public Particle(double x, double y, double vx, double vy, int lifetime, Color color, int size, ParticleType type, Image image, boolean canWiggle, boolean pulse, Particle p1, Particle p2, int timer, Entity parent) {
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
        this.timer = timer;
        
        if (parent != null) {
            this.parentEntityID = parent.ID;
            this.offsetX = x - parent.pixelX;
            this.offsetY = y - parent.pixelY;
            this.x = parent.pixelX + this.offsetX;
            this.y = parent.pixelY + this.offsetY;
        } else {
            this.parentEntityID = -1;
            this.x = x;
            this.y = y;
        }
    }

    public void update(HashMap<Long, Entity> entities) {
        if (parentEntityID != -1) {
            Entity parent = entities.get(parentEntityID);
            if (parent != null) {
                this.x = parent.pixelX + offsetX;
                this.y = parent.pixelY + offsetY;
            }
        } else if (parent1 != null && parent2 != null) {
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

    public boolean isDead(HashMap<Long, Entity> entities) {
        if (parentEntityID != -1 && !entities.containsKey(parentEntityID)) {
            return true;
        }
        if (parent1 != null && parent1.isDead(entities)) {
            return true;
        }
        if (parent2 != null && parent2.isDead(entities)) {
            return true;
        }
        return lifetime <= 0;
    }
}



