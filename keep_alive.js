import http from 'http';

// Create a basic HTTP server
http.createServer((req, res) => {
  res.write("I'm alive");
  res.end();
}).listen(process.env.PORT || 8080, () => {
  console.log("Keep-alive server is running!");
});
