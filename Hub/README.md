# Selenium Grid Hub Registration
Selenium Grid Hub Registration Extension.
.........This Extension start/stop hub on system, this is installed.

#Problem - 
Need to use lengthy commands on command prompt to start/stop hub and then can register on node processing.

#Solution - 
This extension solves half of the problem on hub perspective that user can simply type the command on message section and start and stop hub through browser only.


#Steps to use...
  * Load it as a package in chrome developer mode extension.
  * Update extension id in manifest.json with the entered extension id.
  * Run register_app.reg.
  * Verify native host get registered in registry.
  * Reload extension once.
  * Open index.html from Web and go ahead.
  * Use commands like 'start-hub' or 'stop-hub' to start and stop hub respectively.
  