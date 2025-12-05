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

The client is a JavaFX application and requires the OpenJFX SDK for both compilation and execution.

1.  **Download the JavaFX SDK:**
    You can download the official OpenJFX SDK from [GluonHQ](https://gluonhq.com/products/javafx/). Download the version appropriate for your operating system and JDK.

2.  **Compile the Client:**
    To compile the client, you must provide the path to your unzipped JavaFX SDK. Execute the following command from the root of the repository, replacing `/path/to/your/javafx-sdk` with the actual path:
    ```bash
    ./run-client.sh /path/to/your/javafx-sdk
    ```
    This script will:
    1.  Compile the shared `Common` project.
    2.  Compile the `Clientz3` project, linking against both the `Common` code and the JavaFX SDK.

3.  **Running the Client:**
    After a successful compilation, you can run the client. You will again need to provide the path to your JavaFX SDK.

    **Example command (from the root of the repository):**
    ```bash
    java --module-path /path/to/your/javafx-sdk/lib --add-modules javafx.controls,javafx.fxml -cp . duskz.client.fx.DuskFX
    ```
