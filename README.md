## jbook-lerna
This application is published to npm.

### Commands:
Install:  
npm install -g aniketos.jsnote [filename]  
Launch app:  
aniketos-jsnote serve [filename]  
- Default filename is notebook.js

Options:  
--port, -p <port>  
- Port to run the server on, default 4005, must be a number  
  
Examples:  
aniketos-jsnote serve notebook.js --port 3001  
aniketos-jsnote serve notebook.js --port=3001  
aniketos-jsnote serve notebook.js -p 3001  
  
If no installation is desired, execute the command via npx:  
npx aniketos-jsnote serve notebook.js --port=3001  
