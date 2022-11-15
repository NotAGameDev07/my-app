const WebSocketServer = require("ws");
const fs = require("fs");

const server = new WebSocketServer.Server({
  port: 1234,
  perMessageDeflate: {
    zlibDeflateOptions: {
      // See zlib defaults.
      chunkSize: 1024,
      memLevel: 7,
      level: 3,
    },
    zlibInflateOptions: {
      chunkSize: 10 * 1024,
    },
    // Other options settable:
    clientNoContextTakeover: true, // Defaults to negotiated value.
    serverNoContextTakeover: true, // Defaults to negotiated value.
    serverMaxWindowBits: 10, // Defaults to negotiated value.
    // Below options specified as default values.
    concurrencyLimit: 10, // Limits zlib concurrency for perf.
    threshold: 1024, // Size (in bytes) below which messages
    // should not be compressed if context takeover is disabled.
  },
});

var i = {};
i.i = "";

console.log(__dirname);

server.on("connection", (socket) => {
  fs.readFile(__dirname + "/text", (err, text) => {
    i.i = text.toString();
  });
  socket.send(i.i);
  socket.close();
});
