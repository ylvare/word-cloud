# word-cloud

word cloud in node.js, react, TypeScript using d3-cloud to calculate cloud layout

To change to development enviroment:

frontend/vite.config.ts

server: {
proxy: {
"/api": { target: { port: 3000, host: "localhost" } },
},

Deployed page: https://ylvare.github.io/word-cloud/

Please note that first request to server will take about 30 seconds due to that I use a free plan on Render and the server goes to sleep every 15 minutes. And to “wake” them up again it takes about 30 seconds.

"Render spins down a Free web service that goes 15 minutes without receiving inbound traffic. Render spins the service back up whenever it next receives a request to process. Spinning up a service takes a few seconds, which causes a noticeable delay for incoming requests until the service is back up and running. For example, a browser page load will hang momentarily."

https://render.com/docs/free#free-web-services

