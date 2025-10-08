import org.java_websocket.WebSocket;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.IOException;
import java.io.PipedInputStream;
import java.io.PipedOutputStream;
import java.net.Socket;
import java.net.InetAddress;
import java.net.SocketAddress;
import java.net.SocketException;
import java.nio.ByteBuffer;

/**
 * WebSocketClient acts as an adapter, wrapping a WebSocket connection
 * to make it behave like a standard java.net.Socket. This allows the existing
 * DuskEngine, which is built on Sockets, to handle WebSocket clients
 * without major modification.
 *
 * It uses PipedInput/OutputStreams to bridge the gap between the
 * event-driven WebSocket API and the stream-based Socket API.
 */
public class WebSocketClient extends Socket {

    private final WebSocket conn;
    private final PipedOutputStream pipeOut; // Data written here goes to the LivingThing's InputStream
    private final PipedInputStream pipeIn;   // The LivingThing reads from this stream

    private final InputStream inputStream;
    private final OutputStream outputStream;

    public WebSocketClient(WebSocket conn) throws IOException {
        this.conn = conn;
        this.pipeOut = new PipedOutputStream();
        this.pipeIn = new PipedInputStream(pipeOut);

        this.inputStream = new WebSocketInputStream();
        this.outputStream = new WebSocketOutputStream();
    }

    /**
     * This is the stream the game engine will read from.
     * Data received from the browser client is written to this stream.
     */
    @Override
    public InputStream getInputStream() throws IOException {
        return inputStream;
    }

    /**
     * This is the stream the game engine will write to.
     * Data written to this stream will be sent to the browser client.
     */
    @Override
    public OutputStream getOutputStream() throws IOException {
        return outputStream;
    }

    /**
     * This method is called by the WebSocket server when a message
     * is received from the browser client. The data is written to the
     * PipedOutputStream, which makes it available to the PipedInputStream
     * that the game engine is reading from.
     */
    public void onMessage(ByteBuffer message) {
        try {
            byte[] data = new byte[message.remaining()];
            message.get(data);
            pipeOut.write(data);
            pipeOut.flush();
        } catch (IOException e) {
            // This can happen if the reading side of the pipe is closed.
            // It's a signal to close the connection.
            close();
        }
    }

    // Inner class for the InputStream
    private class WebSocketInputStream extends InputStream {
        @Override
        public int read() throws IOException {
            return pipeIn.read();
        }

        @Override
        public int read(byte[] b, int off, int len) throws IOException {
            return pipeIn.read(b, off, len);
        }

        @Override
        public void close() throws IOException {
            pipeIn.close();
        }
    }

    // Inner class for the OutputStream
    private class WebSocketOutputStream extends OutputStream {
        @Override
        public void write(int b) throws IOException {
            if (conn.isOpen()) {
                conn.send(new byte[]{(byte) b});
            } else {
                throw new IOException("WebSocket connection is not open.");
            }
        }

        @Override
        public void write(byte[] b, int off, int len) throws IOException {
            if (conn.isOpen()) {
                // Create a new byte array for the sub-array to send
                ByteBuffer buffer = ByteBuffer.wrap(b, off, len);
                conn.send(buffer);
            } else {
                throw new IOException("WebSocket connection is not open.");
            }
        }

        @Override
        public void flush() throws IOException {
            // In WebSockets, sends are generally flushed immediately, so this is a no-op.
        }

        @Override
        public void close() throws IOException {
            conn.close();
        }
    }

    // --- Overridden methods from java.net.Socket ---
    // We override these methods to either provide sensible defaults or to
    // delegate to the underlying WebSocket connection where appropriate.
    // Most of these are not critical for the game engine's core logic.

    @Override
    public void close() {
        try {
            if (conn.isOpen()) {
                conn.close();
            }
            pipeIn.close();
            pipeOut.close();
        } catch (IOException e) {
            // Ignore exceptions on close
        }
    }

    @Override
    public InetAddress getInetAddress() {
        if (conn.getRemoteSocketAddress() != null) {
            return conn.getRemoteSocketAddress().getAddress();
        }
        return null;
    }

    @Override
    public boolean isConnected() {
        return conn.isOpen();
    }

    @Override
    public boolean isClosed() {
        return !conn.isOpen();
    }

    @Override
    public synchronized void setSoTimeout(int timeout) throws SocketException {
        // Not directly supported by the WebSocket library in the same way.
        // The LivingThing sets this to 30 seconds, but we can ignore it for now
        // as WebSocket connections have their own keep-alive mechanisms.
    }

    // Other methods can be left as default or throwing UnsupportedOperationException
    // if they are found to be called by the engine.
}
