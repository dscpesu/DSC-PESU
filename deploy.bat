@ECHO OFF
SET SASS_PATH=.\node_modules
git config --global gpg.program "C:\Program Files (x86)\GnuPG\bin\gpg.exe"
npm run deploy
PAUSE