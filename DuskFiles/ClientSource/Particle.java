import java.awt.Color;

public class Particle {
    double x, y;
    double vx, vy;
    float alpha;
    int lifetime;
    Color color;
    int size;
    ParticleType type;

    public Particle(double x, double y, double vx, double vy, int lifetime, Color color, int size, ParticleType type) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.lifetime = lifetime;
        this.color = color;
        this.alpha = 1.0f;
        this.size = size;
        this.type = type;
    }

    public void update() {
        x += vx;
        y += vy;
        lifetime--;
        if (lifetime < 50) {
            alpha = lifetime / 50.0f;
        }
    }

    public boolean isDead() {
        return lifetime <= 0;
    }
}
