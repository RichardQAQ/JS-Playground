var http = require('http');
http.createServer(function (req, res) {
    // Basic request logging
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    
    // Parse the URL and query parameters
    const url = new URL(req.url, `http://${req.headers.host}`);
    const path = url.pathname;
    
    // Route handling
    if (path === '/') {
        // Serve HTML for homepage
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Fancy HTTP Server</title>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
                        h1 { color: #2c3e50; }
                        .links { margin-top: 20px; }
                        a { color: #3498db; text-decoration: none; margin-right: 15px; }
                        a:hover { text-decoration: underline; }
                    </style>
                </head>
                <body>
                    <h1>Welcome to My Fancy HTTP Server!</h1>
                    <p>This is a more advanced example of a Node.js HTTP server.</p>
                    <div class="links">
                        <a href="/api/info">API Info</a>
                        <a href="/time">Current Time</a>
                        <a href="/hello?name=Richard">Say Hello</a>
                    </div>
                </body>
            </html>
        `);
    } else if (path === '/api/info') {
        // JSON API endpoint
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({
            server: 'Fancy Node.js HTTP Server',
            version: '1.0.0',
            time: new Date().toISOString(),
            endpoints: ['/api/info', '/time', '/hello']
        }));
    } else if (path === '/time') {
        // Current time endpoint
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`
            <html><body>
                <h2>Current Server Time</h2>
                <p>${new Date().toLocaleString()}</p>
                <a href="/">Back to Home</a>
            </body></html>
        `);
    } else if (path === '/hello') {
        // Query parameter example
        const name = url.searchParams.get('name') || 'World';
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`
            <html><body>
                <h2>Hello, ${name}!</h2>
                <a href="/">Back to Home</a>
            </body></html>
        `);
    } else {
        // 404 handler
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end(`
            <html><body>
                <h2>404 - Page Not Found</h2>
                <p>The requested path "${path}" does not exist.</p>
                <a href="/">Back to Home</a>
            </body></html>
        `);
    }
}).listen(8080);
console.log('Server running at http://localhost:8080/');

// This code creates a simple HTTP server that responds with "Hello, World!" when accessed.
