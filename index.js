const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello There!");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, "::", () => {
  console.log(`Server running and binding to all IP addresses on port ${PORT}`);
});

// Handle SIGINT gracefully
process.on("SIGINT", () => {
  console.log("\nSIGINT signal received. Shutting down server...");
  server.close(() => {
    console.log("Server has been shut down.");
    process.exit(0);
  });
});
