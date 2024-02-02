[Ylva-Rehnberg_CV.txt](https://github.com/ylvare/word-cloud/files/14140019/Ylva-Rehnberg_CV.txt)# word-cloud

word cloud in node.js, react, TypeScript using d3-cloud to calculate cloud layout

To change to development enviroment:

frontend/vite.config.ts

server: {
proxy: {
"/api": { target: { port: 3000, host: "localhost" } },
},

Deployed page: https://ylvare.github.io/word-cloud/

Please note that the first request to the server will take up to 60 seconds due to the app using a free plan on Render. (The server goes to sleep every 15 minutes and to “wake” it up again takes time.)

"Render spins down a Free web service that goes 15 minutes without receiving inbound traffic. Render spins the service back up whenever it next receives a request to process. Spinning up a service takes a few seconds, which causes a noticeable delay for incoming requests until the service is back up and running. For example, a browser page load will hang momentarily."

https://render.com/docs/free#free-web-services

