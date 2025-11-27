REM run-server game-dir
@echo off
set JAVA_HOME=%~dp0\..
rem stops cmd window staying visible
start /min "server" "%JAVA_HOME%\bin\java" -m duskz.server/duskz.server.entityz.GameServer %*
