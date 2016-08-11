# Headless Testing Against Real Web Browsers with Xvfb

Continuous integration ensures software's health with each each codebase change, ideally via automated tests and other quality-assurance processes. Tools like Phantomjs offer a great path towards headless JavaScript testing, but what about those scenarios where the software under test requires an actual GUI web browser? Think NW.js, Flash, and Google Polymer web-component-tester. X Virtual Frame Buffer provides an excellent solution towards lightweight, headless testing against real web browsers. In this talk, I'll offer some background on X Virtual Frame Buffer, and demo how to run such tests in a lightweight Ubuntu VM and/or a Docker container in continuous integration.

#### [View the slides &raquo;](https://mdb.github.io/testing-with-xvfb)

## Why not PhantomJS, etc.?

PhantomJS and comparable JavaScript environments are great. However, PhantomJS doesn't suffice for technologies such as Google Polymer [web-component-tester](https://github.com/Polymer/web-component-tester), desktop GUI applications authored with [NW.js](http://nwjs.io) or [Electron](http://electron.atom.io), and other comparable technologies that require an X Window GUI environment.

## Reference materials

* [polymer-testing-box](http://github.com/mdb/polymer-testing-box) - spin up a VM for execting `wct` in Xvfb against Firefox and Chrome
* [docker-wct](http://github.com/mdb/docker-wct) - Docker image for execting `wct` in Xvfb against Firefox and Chrome
* [nw-testing-box](http://github.com/mdb/nw-testing-box) - spin up a VM for running and testing an NW.js app in Xvfb
* [nw-app-testing](http://github.com/mdb/nw-app-testing) - reference NW.js application that can be run and tested in Xvfb via TravisCI, a headless VM, or a Docker container
* [electron-app-testing](http://github.com/mdb/electron-app-testing) - reference Electron application that can be run and tested in Xvfb via TravisCI, a headless VM, or a Docker container
