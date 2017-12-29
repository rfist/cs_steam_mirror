# CS Items Price Mirror

## Quick start


* Rename `env.js.example` to `env.js` and define MySQL credentials
* Run `npm run init_swagger` to istall all [Swagger](https://swagger.io/) dependencies
* Run `npm run init_db` to create MySQL table for results saving

## Grab and save results

Run command
 ``` js
 npm run start
 ```
 Grabbing service will be started, and it will update all items from http://csgo.steamlytics.xyz every hour.

## Using API
To start using API you need to launch
``` js
 npm run swagger
```
All available commands can be looked at [API page](http://localhost:10010/docs/#!/default/all)

*Examples:*

[List of all items](http://localhost:10010/all)

[Searh item "Chroma Case" ](http://localhost:10010/get?name=Chroma%202%20Case)



