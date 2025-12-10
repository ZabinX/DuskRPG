package duskz.client.swing;

import duskz.client.DataManager;
import java.awt.image.BufferedImage;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import java.util.jar.JarInputStream;
import java.util.jar.Manifest;
import javax.imageio.ImageIO;
import javax.swing.JOptionPane;

public class DataManagerSwing extends DataManager {

    private final HashMap<Integer, AnimSetSwing> animset = new HashMap<>();

    public DataManagerSwing(String source) {
        super(source);
    }

    @Override
    public void load() throws IOException {
        // Load all image sets first to prevent race conditions
        super.load();
    }

    public boolean isAnimRoot(int id) {
        return animset.containsKey(id);
    }

    public AnimSetSwing getAnimSet(int id) {
        return animset.get(id);
    }

    @Override
    protected void scanManifest(Manifest man, Map<String, Consumer<JarInputStream>> handle) {
        super.scanManifest(man, handle);

        handle.put("titles/anim", jis -> {
            try (BufferedReader is = new BufferedReader(new InputStreamReader(jis))) {
                String line;
                PropParser prop = new PropParser();

                while ((line = is.readLine()) != null) {
                    if (!prop.setInput(line))
                        continue;

                    if (!prop.getProperty().startsWith("anim."))
                        continue;

                    AnimSetSwing anim = new AnimSetSwing(prop.getProperty().substring(5));
                    List<BufferedImage> frames = new ArrayList<>();
                    while (!prop.eof()) {
                        int tileid = prop.nextInt();
                        if (prop.nextChar(':')) {
                            prop.nextInt(); // Consume time
                        }

                        if (anim.root == -1)
                            anim.root = tileid;

                        BufferedImage tileImage = getTileImage(tileid);
                        if (tileImage != null) {
                            frames.add(tileImage);
                        }

                        if (!prop.nextChar(','))
                            break;
                    }
                    if (anim.root != -1 && !frames.isEmpty()) {
                        anim.frames = frames.toArray(new BufferedImage[0]);
                        animset.put(anim.root, anim);
                    }
                }
            } catch (IOException ex) {
                ex.printStackTrace();
            }
        });
    }

    public BufferedImage getTileImage(int tileid) {
        ImageSet[] tiles = sets.get("tiles");
        if (tiles != null) {
            for (ImageSet set : tiles) {
                ImageSetSwing is = (ImageSetSwing) set;
                if (tileid >= is.gid && tileid < is.gid + is.count) {
                    return is.tiles[tileid - is.gid];
                }
            }
        }
        return null;
    }

    public BufferedImage getSpriteImage(String setName, int tileid) {
        ImageSet[] spriteSets = sets.get(setName);
        if (spriteSets != null) {
            for (ImageSet set : spriteSets) {
                ImageSetSwing is = (ImageSetSwing) set;
                if (tileid >= is.gid && tileid < is.gid + is.count) {
                    return is.tiles[tileid - is.gid];
                }
            }
        }
        return null;
    }


    @Override
    protected ImageSet createImageSet() {
        return new ImageSetSwing();
    }

    static class PropParser {
        String input, prop;
        int eq, index;
        public boolean setInput(String input) { this.input = input; eq = input.indexOf("="); if (eq > 0) { index = eq + 1; prop = input.substring(0, eq); return true; } prop = null; return false; }
        public String getProperty() { return prop; }
        public boolean eof() { return index == -1 || index >= input.length(); }
        public int nextInt() { int val = 0; while (!eof()) { char c = input.charAt(index); if (Character.isDigit(c)) { val = val * 10 + Character.digit(c, 10); index++; } else { return val; } } return val; }
        public boolean nextChar(char c) { if (!eof() && input.charAt(index) == c) { index++; return true; } return false; }
    }

    public static class AnimSetSwing {
        public String name;
        public int root = -1;
        public BufferedImage[] frames;
        public int rate = 250;
        public AnimSetSwing(String name) { this.name = name; }
    }

    public static class ImageSetSwing extends ImageSet {
        public BufferedImage image, tiles[];
        @Override
        public void load(InputStream is) throws IOException {
             try {
                image = ImageIO.read(is);
                if (image == null) throw new IOException("ImageIO.read returned null for " + name);
            } catch (IOException e) {
                JOptionPane.showMessageDialog(null, "Failed to load image for tileset: " + name + "\nError: " + e.getMessage(), "Asset Loading Error", JOptionPane.ERROR_MESSAGE);
                throw e;
            }
            tiles = new BufferedImage[count];
            for (int i = 0; i < count; i++) {
                tiles[i] = image.getSubimage(i * width, 0, width, height);
            }
        }
    }
}
