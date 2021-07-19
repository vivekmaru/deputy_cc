# Deputy Coding Challenge

The code base includes the test suite and the js files. This is a very primary implementation of the roles and users in a User Hierarchy design. To execute the code, I used Node.js on NVM. The test suite was run using the **Jest** framework. To run the code on Unix environment, after installing the Node.js, move the directory where you cloned the repository

```
cd deputy_cc/
node UserHierarchy.js
```

To run the test suite, you will be required to have a working installation of Jest. To download ***Jest*** framework, we install the ***npm*** package manager as below( the instructions are specific to archlinux based system, you can substitute with the package manager on your own distro):

```
sudo pacman -Syu npm
```

Then in the *deputy_cc* directory, we initialize the JSON file for test suite and dependency configuration.

```
npm init
```
The CLI will prompt you to fill the required JSON values. When prompted for *test command*, write the file name "UserHierarchy.test.js".This is followed by the installation of jest itself:
```
npm i jest --save-dev
```
