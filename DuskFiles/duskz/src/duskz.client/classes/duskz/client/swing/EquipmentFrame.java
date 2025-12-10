package duskz.client.swing;

import javax.swing.*;

public class EquipmentFrame extends JFrame {

    public EquipmentFrame() {
        initComponents();
    }

    private void initComponents() {
        setTitle("Equipment");
        setSize(300, 440);
        setLocationRelativeTo(null);
        add(new JLabel("Equipment details will be displayed here.", SwingConstants.CENTER));
    }
}
