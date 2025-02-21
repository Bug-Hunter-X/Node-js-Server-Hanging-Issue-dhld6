# Node.js Server Hanging Issue

This repository demonstrates a common issue in Node.js where the server becomes unresponsive due to blocking the event loop.  The problem occurs in `server.js` where the server performs a long-running operation without yielding control back to the event loop. This prevents the server from handling other requests or even gracefully shutting down.

The solution, provided in `serverSolution.js`, demonstrates using asynchronous operations to avoid blocking the event loop, thus maintaining responsiveness.  It addresses the problem by making the long-running process non-blocking, enabling the server to handle other requests while the long-running task completes.