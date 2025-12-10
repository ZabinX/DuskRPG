package duskz.client.swing;

import javax.swing.*;

public class MerchantFrame extends JFrame {

    public MerchantFrame() {
        initComponents();
    }

    private void initComponents() {
        setTitle("Merchant");
        setSize(300, 120);
        setLocationRelativeTo(null);
        add(new JLabel("Merchant inventory will be displayed here.", SwingConstants.CENTER));
    }
}
