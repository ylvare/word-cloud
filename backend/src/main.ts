import app from "./app.js";

const port = 3000;


// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  server.keepAliveTimeout = 60000; // 60 seconds
});