REM run-client
@echo off
set JAVA_HOME=%~dp0\..
rem stops cmd window staying visible
rem start /min "dusk client" "%JAVA_HOME%\bin\java" -m duskz.client/duskz.client.fx.DuskFX
"%JAVA_HOME%\bin\java" -m duskz.client/duskz.client.fx.DuskFX
