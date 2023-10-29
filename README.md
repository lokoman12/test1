## Sumeet React Native App


### Commands
(optionally) Install yarn
```
npm install --global yarn
```

1. Install all the dependencies and libs
```
npm install
``` 

2. Remove field extra and whole block in app.json
```
"extra": {
   "eas": {
      "projectId": "f3738e3f-de82-4157-927d-77203ff87a38"
   }
}
```
[Otherwise project won't start as Expo needs developer eas ID](https://github.com/expo/eas-cli/issues/1324)


### Run in Expo Go

1. 

``` 
npm start
```

2. Open Expo Go on your device (Android/IOS) 

3. Scan QR Code from terminal output (or enter URL manually)

(optionally) Press one of the keys defined in Commands section to open project on Emulator (Android / IOS)
