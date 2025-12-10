package duskz.client.swing;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import duskz.client.Dusk;

public class ConnectFrame extends JFrame {

    private final Dusk game;
    private JTextField txtIP, txtPort, txtUsername;
    private JPasswordField txtPassword;

    public ConnectFrame(Dusk game) {
        this.game = game;
        initComponents();
    }

    private void initComponents() {
        setTitle("Connect to Server");
        setSize(350, 200);
        setLocationRelativeTo(null);
        setLayout(new GridLayout(5, 2, 5, 5));
        add(new JLabel("IP Address:"));
        add(txtIP = new JTextField("127.0.0.1"));
        add(new JLabel("Port:"));
        add(txtPort = new JTextField("7400"));
        add(new JLabel("Username:"));
        add(txtUsername = new JTextField());
        add(new JLabel("Password:"));
        add(txtPassword = new JPasswordField());
        JButton btnConnect = new JButton("Connect");
        btnConnect.addActionListener(this::btnConnectActionPerformed);
        add(btnConnect);
        JButton btnCancel = new JButton("Cancel");
        btnCancel.addActionListener(e -> setVisible(false));
        add(btnCancel);
    }

    private void btnConnectActionPerformed(ActionEvent e) {
        try {
            game.connect(txtIP.getText(), Integer.parseInt(txtPort.getText()), txtUsername.getText(), new String(txtPassword.getPassword()));
            setVisible(false);
        } catch (NumberFormatException ex) {
            JOptionPane.showMessageDialog(this, "Invalid port number.", "Connection Error", JOptionPane.ERROR_MESSAGE);
        }
    }
}
