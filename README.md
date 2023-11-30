# word-cloud

word cloud in node.js, react, TypeScript using d3-cloud to calculate cloud layout

To toogle between production and dev for backend:

frontend/vite.config.ts

server: {
proxy: {
//"/api": { target: { port: 3000, host: "localhost" } }
'/api': { target: 'https://word-cloud-mvnj.onrender.com/', changeOrigin: true }},
},

Deployed page: https://ylvare.github.io/word-cloud/
