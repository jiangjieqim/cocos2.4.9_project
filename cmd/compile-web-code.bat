call init
set workspaceFolder=%1

cd %QATOOLS%

@REM echo %QATOOLS%
node cc_compile_web.js --w %workspaceFolder% --startscene "2c7a52b3-75fc-48de-a482-fd747cb972b3" --onlycode true
