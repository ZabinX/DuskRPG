package duskz.client.swing;

import javax.swing.*;
import java.awt.*;
import java.awt.image.BufferedImage;
import duskz.client.ClientMap;
import duskz.client.Entity;
import duskz.client.GUI;
import duskz.client.Dusk;
import duskz.client.Status;
import duskz.client.Equipment;
import duskz.protocol.TransactionItem;
import java.io.IOException;
import java.util.Collection;
import java.util.List;

public class MainFrame extends JFrame implements GUI {

    JLayeredPane pnlContents = new JLayeredPane();
    private BufferedImage backBuffer;
    public class GamePanel extends JPanel {
        @Override
        protected void paintComponent(Graphics g) {
            super.paintComponent(g);
            if (backBuffer != null) g.drawImage(backBuffer, 0, 0, this);
        }
    }
    GamePanel pnlGraphics = new GamePanel();
    JTextField txtInput = new JTextField();
    public JPanel pnlSouth = new JPanel();
    public CardLayout cardLayout = new CardLayout();
    public JTextPane txtGossip = new JTextPane();
    public JTextArea txtBattle = new JTextArea();
    public JScrollPane scrGossip = new JScrollPane();
    public JScrollPane scrBattle = new JScrollPane();
    public JButton btnGossip = new JButton("Gossip");
    public JButton btnBattle = new JButton("Battle");
    JPanel pnlStats = new JPanel();
    JLabel lblInfo = new JLabel("Player Info");
    private final DataManagerSwing dataManager;
    private final TileAnimatorSwing tileAnimator;
    private ClientMap currentMap;
    private Dusk game;
    private final int tileSize = 32;

    public MainFrame(DataManagerSwing dataManager) {
        this.dataManager = dataManager;
        this.tileAnimator = new TileAnimatorSwing(dataManager);
        initComponents();
    }

    public void setGame(Dusk game) { this.game = game; }

    @Override
    public void updateMap(ClientMap map) {
        this.currentMap = map;
        if (pnlGraphics.getWidth() > 0 && pnlGraphics.getHeight() > 0 && (backBuffer == null || backBuffer.getWidth() != pnlGraphics.getWidth() || backBuffer.getHeight() != pnlGraphics.getHeight())) {
            backBuffer = new BufferedImage(pnlGraphics.getWidth(), pnlGraphics.getHeight(), BufferedImage.TYPE_INT_ARGB);
        }
    }

    public void update(double deltaTime) {
        if (currentMap != null) {
            tileAnimator.update(deltaTime);
            renderGame();
        }
    }

    private void renderGame() {
        if (backBuffer == null) return;
        Graphics2D g2d = backBuffer.createGraphics();
        g2d.setColor(Color.BLACK);
        g2d.fillRect(0, 0, backBuffer.getWidth(), backBuffer.getHeight());
        if (currentMap == null) { g2d.dispose(); return; }
        int levelCount = currentMap.getLevelCount(), offx = currentMap.offx, offy = currentMap.offy;
        for (int l = 0; l < levelCount; l++) {
            for (int y = 0; y < currentMap.rows; y++) {
                for (int x = 0; x < currentMap.cols; x++) {
                    int tileid = currentMap.getTile(l, x, y);
                    if (tileid != 0) {
                        BufferedImage tileImage = dataManager.isAnimRoot(tileid) ? tileAnimator.getAnimationFrame(tileid) : dataManager.getTileImage(tileid);
                        if (tileImage != null) g2d.drawImage(tileImage, x * tileSize, y * tileSize - (tileImage.getHeight() - tileSize), null);
                    }
                }
                if (l == currentMap.getGroundLevel()) {
                    for (int x = 0; x < currentMap.cols; x++) {
                        Collection<Entity> ents = currentMap.getEntities(x + offx, y + offy);
                        if (ents != null) for (Entity e : ents) drawEntity(g2d, e, offx, offy);
                    }
                }
            }
        }
        g2d.dispose();
    }

    void drawEntity(Graphics2D g2d, Entity e, int offx, int offy) {
		int x = e.locx - offx, y = e.locy - offy;
        BufferedImage spriteImage = (e.intStep == -1) ? dataManager.getSpriteImage("sprites", e.intImage) : dataManager.getSpriteImage("players", e.intImage * 8 + e.intStep);
        if (spriteImage != null) {
            g2d.drawImage(spriteImage, x * tileSize + (tileSize - spriteImage.getWidth()) / 2, y * tileSize + (tileSize - spriteImage.getHeight()) / 2, null);
        }
        g2d.setColor(Color.WHITE);
        String name = e.getTitle();
        FontMetrics fm = g2d.getFontMetrics();
        g2d.drawString(name, (x * tileSize) + (tileSize - fm.stringWidth(name)) / 2, (y * tileSize) + tileSize + fm.getAscent());
	}

    public void doRepaint() { pnlGraphics.repaint(); }

    private void initComponents() {
        setTitle("Dusk Swing");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(new Dimension(1024, 768));
        setLocationRelativeTo(null);
        getContentPane().setLayout(new BorderLayout());
        getContentPane().add(pnlContents, BorderLayout.CENTER);
        pnlContents.setLayout(new BorderLayout());
        pnlGraphics.setBackground(Color.BLACK);
        pnlContents.add(pnlGraphics, BorderLayout.CENTER);
        pnlGraphics.addComponentListener(new java.awt.event.ComponentAdapter() {
            public void componentResized(java.awt.event.ComponentEvent evt) {
                int w = pnlGraphics.getWidth(), h = pnlGraphics.getHeight();
                if (w > 0 && h > 0 && (backBuffer == null || backBuffer.getWidth() != w || backBuffer.getHeight() != h))
                    backBuffer = new BufferedImage(w, h, BufferedImage.TYPE_INT_ARGB);
            }
        });
        JPanel southContainer = new JPanel(new BorderLayout());
        southContainer.add(txtInput, BorderLayout.NORTH);
        pnlSouth.setLayout(cardLayout);
        txtGossip.setEditable(false);
        scrGossip.setViewportView(txtGossip);
        pnlSouth.add(scrGossip, "Gossip");
        txtBattle.setEditable(false);
        scrBattle.setViewportView(txtBattle);
        pnlSouth.add(scrBattle, "Battle");
        southContainer.add(pnlSouth, BorderLayout.CENTER);
        JPanel pnlTabButtons = new JPanel(new FlowLayout(FlowLayout.LEFT));
        pnlTabButtons.add(btnGossip);
        pnlTabButtons.add(btnBattle);
        southContainer.add(pnlTabButtons, BorderLayout.SOUTH);
        pnlContents.add(southContainer, BorderLayout.SOUTH);
        pnlStats.setLayout(new BoxLayout(pnlStats, BoxLayout.Y_AXIS));
        pnlStats.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));
        pnlStats.add(lblInfo);
        JButton btnConnect = new JButton("Connect");
        btnConnect.addActionListener(e -> new ConnectFrame(game).setVisible(true));
        pnlStats.add(btnConnect);
        pnlContents.add(pnlStats, BorderLayout.EAST);
        btnGossip.addActionListener(e -> cardLayout.show(pnlSouth, "Gossip"));
        btnBattle.addActionListener(e -> cardLayout.show(pnlSouth, "Battle"));
    }

    @Override public void logClear() { SwingUtilities.invokeLater(() -> txtGossip.setText("")); }
    @Override public GUI log(String txt, Object... args) { SwingUtilities.invokeLater(() -> txtGossip.setText(txtGossip.getText() + String.format(txt, args))); return this; }
    @Override public void showLogin() {}
    @Override public void loginOk() {}
    @Override public void loginFailed() { JOptionPane.showMessageDialog(this, "Login Failed", "Error", JOptionPane.ERROR_MESSAGE); }
    @Override public void chooseRace(String prompt, List<String> races) {}
    @Override public void setImages(String rc) { try { dataManager.load(); } catch (IOException e) { e.printStackTrace(); } }
    @Override public void setAttackList(List<Entity> list) {}
    @Override public void setLookList(List<Entity> list) {}
    @Override public void setTakeList(List<Entity> list) {}
    @Override public void setDropList(List<String> drops) {}
    @Override public void setActionList(List<String> list) {}
    @Override public void setStats(String stats) {}
    @Override public void setStatus(Status status) { SwingUtilities.invokeLater(() -> lblInfo.setText(status.toString())); }
    @Override public void setEquipment(Equipment worn) {}
    @Override public void manageEquipment(Equipment worn) {}
    @Override public void setBuyList(List<TransactionItem> buyList) {}
    @Override public void setSellList(List<TransactionItem> sellList) {}
    @Override public void enterShop(String title, List<TransactionItem> buyList, List<TransactionItem> sellList) {}
    @Override public void exitShop() {}
    @Override public void visitFile(String file, String text, boolean canSave) {}
    @Override public void damageEntity(Entity e, double d, double x, double y, int delta, String what) {}
}
