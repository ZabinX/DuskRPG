/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk.

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or
remove this license, and accompany it with all redistributions.
*/

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class SizeFrame extends JFrame implements ActionListener {
    DuskMapEditor appParent;
    JButton btnSubmit, btnCancel;
    JTextField txtSizeX;
    JTextField txtSizeY;
    JLabel lblSpecifySize;
    JPanel pnlTop = new JPanel();
    JPanel pnlBottom = new JPanel();
    boolean blnResize;

    public SizeFrame(DuskMapEditor inParent) {
        appParent = inParent;
        blnResize = false;
        initComponents();
    }

    public SizeFrame(DuskMapEditor inParent, boolean resize) {
        appParent = inParent;
        blnResize = resize;
        initComponents();
    }

    public void initComponents() {
        setTitle("Choose New Size");
        txtSizeX = new JTextField("" + appParent.MapColumns, 5);
        txtSizeY = new JTextField("" + appParent.MapRows, 5);
        lblSpecifySize = new JLabel("Enter new map size:");
        btnSubmit = new JButton("OK");
        btnCancel = new JButton("Cancel");

        pnlTop.setLayout(new FlowLayout(FlowLayout.LEFT));
        pnlTop.add(lblSpecifySize);
        pnlTop.add(txtSizeX);
        pnlTop.add(txtSizeY);

        pnlBottom.setLayout(new FlowLayout(FlowLayout.CENTER));
        pnlBottom.add(btnSubmit);
        pnlBottom.add(btnCancel);

        getContentPane().setLayout(new BorderLayout());
        getContentPane().add(pnlTop, BorderLayout.NORTH);
        getContentPane().add(pnlBottom, BorderLayout.SOUTH);

        btnSubmit.addActionListener(this);
        btnCancel.addActionListener(this);

        setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
        pack();
        setLocationRelativeTo(appParent.frame);
    }
	
    @Override
    public void actionPerformed(ActionEvent evt) {
        try {
            if (evt.getSource() == btnSubmit) {
                setVisible(false);
                appParent.frame.setCursor(new Cursor(Cursor.WAIT_CURSOR));
                int newX = Integer.parseInt(txtSizeX.getText());
                int newY = Integer.parseInt(txtSizeY.getText());
                int copyX = appParent.MapColumns;
                int copyY = appParent.MapRows;
                short shrCurrentMap[][] = null;
                if (blnResize) {
                    if (newX < appParent.MapColumns) {
                        copyX = newX;
                    }
                    if (newY < appParent.MapRows) {
                        copyY = newY;
                    }
                    shrCurrentMap = new short[copyX][copyY];
                    for (int x = 0; x < copyX; x++) {
                        for (int y = 0; y < copyY; y++) {
                            shrCurrentMap[x][y] = appParent.shrMap[x][y];
                        }
                    }
                } else {
                    appParent.strCurrentFile = "untitled";
                }
                appParent.MapColumns = Integer.parseInt(txtSizeX.getText());
                appParent.MapRows = Integer.parseInt(txtSizeY.getText());
                appParent.shrMap = new short[appParent.MapColumns][appParent.MapRows];
                appParent.shrUndo = new short[appParent.MapColumns][appParent.MapRows];
                appParent.shrRedo = new short[appParent.MapColumns][appParent.MapRows];
                if (blnResize) {
                    for (int x = 0; x < copyX; x++) {
                        for (int y = 0; y < copyY; y++) {
                            appParent.shrMap[x][y] = shrCurrentMap[x][y];
                        }
                    }
                }
                appParent.frame.setTitle("Dusk Map Editor: " + appParent.strCurrentFile + " " + appParent.MapColumns + "x" + appParent.MapRows);
                appParent.frame.scrollVert.setMaximum(appParent.MapRows);
                appParent.frame.scrollHorz.setMaximum(appParent.MapColumns);
                appParent.frame.setCursor(new Cursor(Cursor.DEFAULT_CURSOR));
                appParent.update();
                appParent.paint();
            } else if (evt.getSource() == btnCancel) {
                setVisible(false);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}