package duskz.client.swing;

public class GraphicsThread implements Runnable {

    private final MainFrame mainFrame;
    private volatile boolean running = true;
    private final long targetTime = 1000 / 60; // 60 FPS

    public GraphicsThread(MainFrame mainFrame) {
        this.mainFrame = mainFrame;
    }

    @Override
    public void run() {
        long lastTime = System.nanoTime();

        while (running) {
            long now = System.nanoTime();
            double deltaTime = (now - lastTime) / 1_000_000_000.0;
            lastTime = now;

            mainFrame.update(deltaTime);
            mainFrame.doRepaint();

            long elapsed = (System.nanoTime() - now) / 1_000_000;
            long sleepTime = targetTime - elapsed;

            if (sleepTime > 0) {
                try {
                    Thread.sleep(sleepTime);
                } catch (InterruptedException e) {
                    running = false;
                }
            }
        }
    }

    public void stop() {
        running = false;
    }
}
