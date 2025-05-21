set workspaceFolder=%1
cd %workspaceFolder%
echo %workspaceFolder%
cd ..\..\..\zzqx\tools\nodeJsTool\qatools

set QATOOLS=%cd%

cd %QATOOLS%

node cc_compile_clear.js --w %workspaceFolder%