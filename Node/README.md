# Selenium Node Registration

.............This chrome extension register current system as a node to the running hub on server.

#Problem
  User need to enter a very lengthy commands to regsiter node to the hub and need to manully remember and type about hundred things and configuration to include in the command.

#Solution
  This extension solves other half of the problem that is solved by Hub ext.. 
  It allows user to control Node registration through browser only. User can simply type commands such as start-node or stop-node to register current system as a node to the hub running on server.

#Steps to use
  * Load it as a package in chrome developer mode extension.
  * Update extension id in manifest.json with the entered extension id.
  * Run register_app.reg.
  * Verify native host get registered in registry.
  * Reload extension once.
  * Open index.html from Web and go ahead.
  * Use commands like 'start-node' or 'stop-node' to register node.
  ...............................use it and enjoy.. !!!......................................
