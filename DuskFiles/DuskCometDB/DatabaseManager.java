import com.sleepycat.je.Database;
import com.sleepycat.je.DatabaseConfig;
import com.sleepycat.je.DatabaseEntry;
import com.sleepycat.je.DatabaseException;
import com.sleepycat.je.Environment;
import com.sleepycat.je.EnvironmentConfig;
import com.sleepycat.je.LockMode;
import com.sleepycat.je.OperationStatus;

import java.io.File;
import java.io.IOException;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

public class DatabaseManager {
    private Environment dbEnvironment;
    private Database database;

    public DatabaseManager(String dbPath) {
        try {
            EnvironmentConfig envConfig = new EnvironmentConfig();
            envConfig.setAllowCreate(true);
            envConfig.setTransactional(true);
            dbEnvironment = new Environment(new File(dbPath), envConfig);

            DatabaseConfig dbConfig = new DatabaseConfig();
            dbConfig.setAllowCreate(true);
            dbConfig.setTransactional(true);
            database = dbEnvironment.openDatabase(null, "DuskDB", dbConfig);
        } catch (DatabaseException dbe) {
            System.err.println("Error opening database environment: " + dbe.toString());
            System.exit(-1);
        }
    }

    public void close() {
        try {
            if (database != null) {
                database.close();
            }
            if (dbEnvironment != null) {
                dbEnvironment.close();
            }
        } catch (DatabaseException dbe) {
            System.err.println("Error closing database environment: " + dbe.toString());
        }
    }

    public void put(String key, Object object) {
        try {
            DatabaseEntry theKey = new DatabaseEntry(key.getBytes("UTF-8"));
            DatabaseEntry theData = new DatabaseEntry(serialize(object));
            database.put(null, theKey, theData);
        } catch (Exception e) {
            System.err.println("Error putting object into database: " + e.toString());
        }
    }

    public Object get(String key) {
        try {
            DatabaseEntry theKey = new DatabaseEntry(key.getBytes("UTF-8"));
            DatabaseEntry theData = new DatabaseEntry();
            if (database.get(null, theKey, theData, LockMode.DEFAULT) == OperationStatus.SUCCESS) {
                return deserialize(theData.getData());
            }
        } catch (Exception e) {
            System.err.println("Error getting object from database: " + e.toString());
        }
        return null;
    }

    private byte[] serialize(Object obj) throws IOException {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ObjectOutputStream oos = new ObjectOutputStream(baos);
        oos.writeObject(obj);
        oos.close();
        return baos.toByteArray();
    }

    private Object deserialize(byte[] bytes) throws IOException, ClassNotFoundException {
        ByteArrayInputStream bais = new ByteArrayInputStream(bytes);
        ObjectInputStream ois = new ObjectInputStream(bais);
        Object obj = ois.readObject();
        ois.close();
        return obj;
    }
}
