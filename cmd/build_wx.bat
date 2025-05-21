set workspaceFolder=%1
cd %workspaceFolder%
echo %workspaceFolder%
cd ..\..\..\zzqx\tools\nodeJsTool\qatools

set QATOOLS=%cd%

cd %QATOOLS%

node cc_compile.js --w %workspaceFolder% --remote "http://127.0.0.1:8001/mygitblit/cocos2.4.9_project/test1/build/wechatgame/"

node cc_compile_clear.js --w %workspaceFolder%
