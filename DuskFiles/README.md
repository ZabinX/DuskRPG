# Clientz3 and Serverz3 Running Instructions

This document provides the steps to compile and run the new `Clientz3` and `Serverz3` projects. The projects have been structured to share common code, and the build scripts handle the compilation process.

## Server (Serverz3)

The server is designed to run from within the `DuskComet-Richter` directory to access the necessary game data files.

**To compile and run the server, execute the following command from the root of the repository:**
```bash
./run-server.sh
```
This script will:
1.  Compile the shared `Common` project.
2.  Compile the `Serverz3` project, linking against the `Common` code.
3.  Change to the `DuskFiles/DuskComet-Richter` directory.
4.  Run the `DuskServer`, correctly referencing the compiled classes.

## Client (Clientz3)

The client is a JavaFX application.

1.  **Compile the Client:**
    To compile the client and its shared dependencies, execute the following command from the root of the repository:
    ```bash
    ./run-client.sh
    ```
    This script will:
    1.  Compile the shared `Common` project.
    2.  Compile the `Clientz3` project, linking against the `Common` code.

2.  **Running the Client:**
    The modern `duskz` client is a JavaFX application and requires a graphical environment to run. The primary entry point is the `duskz.client.fx.DuskFX` class. You will need to run this class from a JavaFX-aware environment.

    **Example using OpenJFX (modular):**
    Assuming you have the OpenJFX SDK downloaded and you are at the root of the repository after running the compile script, you can run the client with a command similar to this (you will need to adjust the path to your JavaFX SDK):

    ```bash
    java --module-path /path/to/your/javafx-sdk-11/lib --add-modules javafx.controls,javafx.fxml duskz.client.fx.DuskFX
    ```
