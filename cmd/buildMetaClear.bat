call init
set workspaceFolder=%1

cd %QATOOLS%

node buildMeta.js --w %workspaceFolder% --clear true