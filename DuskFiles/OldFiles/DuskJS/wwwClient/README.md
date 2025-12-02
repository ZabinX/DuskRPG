# Dusk JS Client & WebSocket-Enabled Server

This document provides instructions on how to set up and run the modernized Dusk server and the new browser-based JavaScript client.

## Overview

The original Java-based server has been modified to support WebSocket connections, allowing a modern JavaScript client to communicate with it. The server now listens on two ports:
- **Port 7474 (TCP):** For the original Java client.
- **Port 7475 (WebSocket):** For the new JavaScript client.

The new JavaScript client is located in this `wwwclient` directory.

---

## 1. Server Setup

The server code is in `DuskFiles/DuskServerSource`. To run the server, you first need to compile it with the new `Java-WebSocket` library dependency.

### Prerequisites
- Java Development Kit (JDK) 8 or higher installed.

### Compilation

1.  Navigate to the root directory of this repository.
2.  Run the following `javac` command to compile all server source files. This command includes the WebSocket library (`.jar` file) in the classpath.

    **On Linux/macOS:**
    ```bash
    javac -cp "DuskFiles/DuskComet-Richter/lib/Java-WebSocket-1.5.5.jar:." -d . DuskFiles/DuskServerSource/*.java
    ```

    **On Windows:**
    ```bash
    javac -cp "DuskFiles\DuskComet-Richter\lib\Java-WebSocket-1.5.5.jar;." -d . DuskFiles\DuskServerSource\*.java
    ```

    This will compile the `.java` files and place the resulting `.class` files in their correct package structure at the root of the project.

### Running the Server

1.  After successful compilation, run the server using the following command from the root directory. This command also includes the necessary library in the classpath.

    **On Linux/macOS:**
    ```bash
    java -cp "DuskFiles/DuskComet-Richter/lib/Java-WebSocket-1.5.5.jar:." DuskServer
    ```

    **On Windows:**
    ```bash
    java -cp "DuskFiles\DuskComet-Richter\lib\Java-WebSocket-1.5.5.jar;." DuskServer
    ```

2.  You should see output indicating that the server is ready for connections and that the WebSocket server has started on port 7475.

---

## 2. Client Setup

The client is a simple set of HTML, CSS, and JavaScript files located in the `DuskFiles/DuskComet-Richter/wwwclient` directory. To play the game, you need to serve these files using a local web server.

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge).
- Python 3 installed (for the simplest web server setup).

### Hosting the Client

1.  Open your terminal or command prompt.
2.  Navigate to the `wwwclient` directory:
    ```bash
    cd DuskFiles/DuskComet-Richter/wwwclient
    ```
3.  Start a simple HTTP server. The easiest way is with Python:
    ```bash
    python3 -m http.server 8000
    ```
    If you have Python 2, the command is `python -m SimpleHTTPServer 8000`.

4.  This will start a web server on port 8000, serving the files in the current directory.

### Playing the Game

1.  Make sure the Java server is running (from Step 1).
2.  Make sure the local web server is running (from Step 2).
3.  Open your web browser and navigate to:
    [http://localhost:8000](http://localhost:8000)

4.  You should see the Dusk JS client interface. Enter a character name and click "Connect" to start playing! Log messages from the client and server will appear in the box at the bottom of the screen.

---
