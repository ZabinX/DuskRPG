# Clientz3 and Serverz3 Running Instructions

This document provides the steps to compile and run the new `Clientz3` and `Serverz3` projects.

## Server (Serverz3)

The server is designed to run from within the `DuskComet-Richter` directory to access the necessary game data files.

**To compile and run the server, execute the following command from the root of the repository:**
```bash
./run-server.sh
```
This script will compile and launch the server.

## Client (Clientz3)

The client is a JavaFX application and requires the OpenJFX SDK for both compilation and execution.

1.  **Download the JavaFX SDK:**
    Download the SDK that matches your JDK version (e.g., JavaFX 17 for JDK 17). The official OpenJFX SDKs are available from [GluonHQ](https://gluonhq.com/products/javafx/).

2.  **Compile and Run the Client:**
    To compile and run the client, you must provide the path to your unzipped JavaFX SDK. Execute the following command from the root of the repository, replacing `/path/to/your/javafx-sdk` with the actual path:
    ```bash
    ./run-client.sh /path/to/your/javafx-sdk
    ```
    This single script will compile all necessary code and then launch the client application from the correct directory so that it can load its graphical assets.
