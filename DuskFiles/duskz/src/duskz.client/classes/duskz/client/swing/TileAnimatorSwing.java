package duskz.client.swing;

import java.awt.image.BufferedImage;
import java.util.HashMap;
import java.util.Map;

public class TileAnimatorSwing {

    private final Map<Integer, AnimationState> runningAnimations = new HashMap<>();
    private final DataManagerSwing dataManager;

    public TileAnimatorSwing(DataManagerSwing dataManager) {
        this.dataManager = dataManager;
    }

    public void update(double deltaTime) {
        for (AnimationState state : runningAnimations.values()) {
            state.update(deltaTime);
        }
    }

    public BufferedImage getAnimationFrame(int rootTileId) {
        DataManagerSwing.AnimSetSwing animSet = dataManager.getAnimSet(rootTileId);
        if (animSet == null) {
            return dataManager.getTileImage(rootTileId); // Return base image if not animated
        }

        AnimationState state = runningAnimations.computeIfAbsent(rootTileId, k -> new AnimationState(animSet));
        return state.getCurrentFrame();
    }

    private static class AnimationState {
        private final DataManagerSwing.AnimSetSwing animSet;
        private int currentIndex = 0;
        private double accumulator = 0.0;

        public AnimationState(DataManagerSwing.AnimSetSwing animSet) {
            this.animSet = animSet;
        }

        public void update(double deltaTime) {
            accumulator += deltaTime;
            double frameTime = animSet.rate / 1000.0; // Convert ms to seconds
            while (accumulator >= frameTime) {
                accumulator -= frameTime;
                currentIndex = (currentIndex + 1) % animSet.frames.length;
            }
        }

        public BufferedImage getCurrentFrame() {
            return animSet.frames[currentIndex];
        }
    }
}
