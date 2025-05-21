echo off
::chcp 65001
::set LESSCHARSET=utf-8
git commit * -m '.'
git pull -v --progress "origin"
git push -v --progress "origin"