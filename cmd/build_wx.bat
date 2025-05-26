set workspaceFolder=%1
set platform=%2
@REM wechatgame

if "%platform%" == "" ( echo please set platform! & exit )

cd %workspaceFolder%
echo %workspaceFolder%
cd ..\..\..\zzqx\tools\nodeJsTool\qatools

set QATOOLS=%cd%

cd %QATOOLS%

node cc_compile.js --w %workspaceFolder% --remote "http://127.0.0.1:8001/github/cocos2.4.9_project/test1/build/%platform%/" --platform %workspaceFolder%\settings\%platform%.json

node cc_compile_clear.js --path %workspaceFolder%/build/%platform%

