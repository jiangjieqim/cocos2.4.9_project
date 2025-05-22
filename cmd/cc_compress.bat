call init
set workspaceFolder=%1

cd %QATOOLS%

node cc_compress.js --path %workspaceFolder%