@REM echo %time%
@REM set workspaceFolder=%1

@REM set buildScriptsOnly=%2

@REM echo %workspaceFolder%

@REM cd ..

@REM set out=%cd%\build1

@REM echo workspaceFolder is "%workspaceFolder%" 
@REM @REM D:\github\cc2_4_9\test1

@REM @REM test3
@REM set startscene="2c7a52b3-75fc-48de-a482-fd747cb972b3"

@REM C:\ProgramData\cocos\editors\Creator\2.4.9\CocosCreator.exe --path %workspaceFolder% --build "md5Cache=false;platform=web-mobile;debug=true;sourceMaps=true;buildPath=%out%;buildScriptsOnly=%buildScriptsOnly%;zipCompressJs=false;startScene=%startScene%"
@REM echo %time%


call init
set workspaceFolder=%1
set startScene=%2
cd %QATOOLS%

echo your startScene is [%startscene%]

@REM echo %QATOOLS%
node cc_compile_web.js --w %workspaceFolder% --startScene %startScene%