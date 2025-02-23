import http from 'http';

// Create a basic HTTP server
http.createServer(function (req, res) {
  if (req.url === '/ping') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("I'm alive");
    res.end();
  }
}).listen(process.env.PORT || 8080, () => {
  console.log("Keep-alive server is running!");
});




