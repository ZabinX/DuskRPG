import java.io.File;
import java.io.RandomAccessFile;
import java.io.IOException;
import java.util.Scanner;

public class CreateTileData {

    private static final String BASE_PATH = "DuskFiles/DuskComet-Richter/";
    private static final String TILE_DATA_PATH = BASE_PATH + "tiledata.bin";

    public static void main(String[] args) {
        try {
            int maxTileId = findMaxTileId();
            System.out.println("Maximum tile ID found: " + maxTileId);

            byte[] tileData = new byte[maxTileId + 1];

            for (int i = 0; i <= maxTileId; i++) {
                boolean isWalkable = isPropertyTrue(BASE_PATH + "defTileScripts/" + i);
                boolean isSeeThrough = isPropertyTrue(BASE_PATH + "defTileSeeScripts/" + i);
                boolean hasAction = hasActionScript(BASE_PATH + "defTileActions/" + i);

                byte data = 0;
                if (isWalkable) data |= 1;
                if (isSeeThrough) data |= 2;
                if (hasAction) data |= 4;

                tileData[i] = data;
            }

            writeTileData(tileData);
            System.out.println("tiledata.bin created successfully.");

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static int findMaxTileId() {
        int maxId = 0;
        maxId = Math.max(maxId, findMaxIdInDirectory(new File(BASE_PATH + "defTileScripts")));
        maxId = Math.max(maxId, findMaxIdInDirectory(new File(BASE_PATH + "defTileSeeScripts")));
        maxId = Math.max(maxId, findMaxIdInDirectory(new File(BASE_PATH + "defTileActions")));
        return maxId;
    }

    private static int findMaxIdInDirectory(File directory) {
        int maxId = 0;
        if (directory.exists() && directory.isDirectory()) {
            for (File file : directory.listFiles()) {
                try {
                    int id = Integer.parseInt(file.getName());
                    if (id > maxId) {
                        maxId = id;
                    }
                } catch (NumberFormatException e) {
                    // Ignore files that are not numbers
                }
            }
        }
        return maxId;
    }

    private static boolean isPropertyTrue(String filePath) {
        File file = new File(filePath);
        if (!file.exists()) {
            return false;
        }
        try (Scanner scanner = new Scanner(file)) {
            if (scanner.hasNext()) {
                String content = scanner.next();
                return "t".equalsIgnoreCase(content) || "true".equalsIgnoreCase(content);
            }
        } catch (IOException e) {
            // File might not exist, which is fine
        }
        return false;
    }

    private static boolean hasActionScript(String filePath) {
        File file = new File(filePath);
        if (!file.exists()) {
            return false;
        }
        try (Scanner scanner = new Scanner(file)) {
            while (scanner.hasNextLine()) {
                String line = scanner.nextLine().trim();
                if (!line.isEmpty() && !line.startsWith("#") && !line.equalsIgnoreCase("endscript")) {
                    return true;
                }
            }
        } catch (IOException e) {
            // File might not exist, which is fine
        }
        return false;
    }

    private static void writeTileData(byte[] data) throws IOException {
        try (RandomAccessFile raf = new RandomAccessFile(TILE_DATA_PATH, "rw")) {
            raf.writeInt(data.length);
            raf.write(data);
        }
    }
}