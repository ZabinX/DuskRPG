package duskz.client.swing;

import javax.swing.*;
import duskz.client.Dusk;

public class DuskSwing {

    private static void createAndShowGUI(String[] args) {
        // Determine the data path
        String dataPath = "jar:DuskFiles/DuskComet-Richter/rc.jar!/rc";
        if (args.length > 0) {
            dataPath = args[0];
        }

        // Create the data manager
        DataManagerSwing dataManager = new DataManagerSwing(dataPath);

        // Create and set up the window.
        MainFrame frame = new MainFrame(dataManager);

        // Create the core game logic
        Dusk game = new Dusk(frame);
        frame.setGame(game);

        frame.setVisible(true);

        // Start the game loop
        GraphicsThread graphicsThread = new GraphicsThread(frame);
        new Thread(graphicsThread).start();

        // Ensure the thread is stopped when the application closes
        frame.addWindowListener(new java.awt.event.WindowAdapter() {
            @Override
            public void windowClosing(java.awt.event.WindowEvent windowEvent) {
                graphicsThread.stop();
            }
        });

        game.startUp();
    }

    public static void main(String[] args) {
        // Schedule a job for the event-dispatching thread:
        // creating and showing this application's GUI.
        SwingUtilities.invokeLater(() -> createAndShowGUI(args));
    }
}
