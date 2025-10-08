import java.awt.Color;
import java.util.Random;
import java.util.List;
import java.util.ArrayList;
import java.util.Collections;

public class LightningBolt {

    private static final Random rand = new Random();

    public static List<Particle> create(Particle start, Particle end, Color color, int lifetime) {
        return create(start, end, color, lifetime, ParticleType.LIGHTNING);
    }

    public static List<Particle> create(Particle start, Particle end, Color color, int lifetime, ParticleType type) {
        List<Particle> newParticles = new ArrayList<>();
        createBranchingLightning(start, end, color, lifetime, newParticles, type);
        return newParticles;
    }

    private static void createBranchingLightning(Particle start, Particle end, Color color, int lifetime, List<Particle> particleSystem, ParticleType type) {
        // Create the main bolt, which also adds its particles to the particleSystem
        createBolt(start, end, color, lifetime, 10, particleSystem, type);

        double diffX = end.x - start.x;
        double diffY = end.y - start.y;

        // Create branches
        int numBranches = rand.nextInt(3) + 3; // 3 to 5 branches
        
        // Generate sorted random fractions for branch points
        List<Float> branchPoints = new ArrayList<>();
        for (int i = 0; i < numBranches; i++) {
            branchPoints.add(rand.nextFloat());
        }
        Collections.sort(branchPoints);

        for (int i = 0; i < branchPoints.size(); i++) {
            float fraction = branchPoints.get(i);
            
            // Calculate the ideal start point for the branch (no jitter)
            Particle boltStart = new Particle(
                start.x + diffX * fraction,
                start.y + diffY * fraction,
                0, 0, lifetime, null, 0, null, null, false, false, null, null, 0, null
            );

            // Calculate the branch's end point, following the C# logic
            double branchVectorX = diffX * (1 - fraction);
            double branchVectorY = diffY * (1 - fraction);
            
            // Alternate rotation direction
            double angle = Math.toRadians(30 * ((i & 1) == 0 ? 1 : -1));
            double cos = Math.cos(angle);
            double sin = Math.sin(angle);

            double rotatedBranchVectorX = branchVectorX * cos - branchVectorY * sin;
            double rotatedBranchVectorY = branchVectorX * sin + branchVectorY * cos;

            // Create a dummy particle for the end point of the branch
            Particle branchEnd = new Particle(
                boltStart.x + rotatedBranchVectorX,
                boltStart.y + rotatedBranchVectorY,
                0, 0, lifetime / 2, null, 0, type, null, false, false, null, null, 0, null
            );
            particleSystem.add(branchEnd);

            // Create the actual bolt for the branch
            createBolt(boltStart, branchEnd, color, lifetime / 2, 5, particleSystem, type);
        }
    }

    private static void createBolt(Particle start, Particle end, Color color, int lifetime, double maxSegmentLength, List<Particle> particleSystem, ParticleType type) {
        double dx = end.x - start.x;
        double dy = end.y - start.y;
        double dist = Math.sqrt(dx * dx + dy * dy);
        
        int numSegments = (int)Math.max(1, dist / maxSegmentLength);
        
        Particle prev = start;
        for (int i = 1; i < numSegments; i++) {
            double fraction = (double)i / numSegments;
            double newX = start.x + dx * fraction;
            double newY = start.y + dy * fraction;

            // Add some jitter/randomness to the path
            if (i < numSegments -1) {
                newX += rand.nextDouble() * 10 - 5;
                newY += rand.nextDouble() * 10 - 5;
            }

            Particle p = new Particle(newX, newY, 0, 0, lifetime, color, 1, type, null, false, true, prev, null, 0, null);
            particleSystem.add(p);
            
            // Anchor the middle of the segment
            Particle mid = new Particle(0,0,0,0, lifetime, color, 1, type, null, true, true, prev, p, 0, null);
            particleSystem.add(mid);

            prev = p;
        }

        // Connect the last segment to the actual end particle
        Particle mid = new Particle(0,0,0,0, lifetime, color, 1, type, null, true, true, prev, end, 0, null);
        particleSystem.add(mid);
    }
}