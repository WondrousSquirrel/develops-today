# React-Redux-Template

<p align="center"><img src="https://rawgit.com/gorangajic/react-icons/master/react-icons.svg" width="200"/ alt="reat"> <img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="redux" width="200"/> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Boostrap_logo.svg/1200px-Boostrap_logo.svg.png" alt="bootstrap" width="200" /></p>

## About

Template for react/redux with bootstrap.

## Usage

git clone this repo and inside folder execute `npm install` to install all dependencies.

---

To run dev server:

`npm run client`

for production use:

`npm run build`

## Note

If u have jest version 21 or lower u need to add file `shim.js` inside test folder and put this functions inside file

```
global.requestAnitaionFrame = callback => {
  setTimeout(callback, 0);
}
```
