Repro for https://github.com/Microsoft/vscode-node-debug/issues/33
After cloning, one should do
1) npm install
2) bower install
3) open the folder in the VSCode, 
4) set breakpoint at line 9 in src/app/app.spec.js
5) Hit F5 to start debugging

**Expected**: breakpoint is hit and I recall I definitely saw this working on pre v0.9.1
**Actual**: breakpoint is not hit