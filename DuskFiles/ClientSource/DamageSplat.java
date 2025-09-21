import java.awt.Color;

public class DamageSplat {
    String text;
    double x, y, vx, vy;
    int lifetime;
    Color color;
    long attackerID;
    long defenderID;
    int damage;

    public DamageSplat(int damage, long attackerID, long defenderID, Color color) {
        this.damage = damage;
        this.text = String.valueOf(damage);
        this.attackerID = attackerID;
        this.defenderID = defenderID;
        this.color = color;
        this.lifetime = 60;
    }
}
