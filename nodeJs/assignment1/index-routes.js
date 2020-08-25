const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><h1>Welcome to nodeJs Assignment 1</h1><h3>Create User Form</h3><form action="/create-user" method="POST"><input type="text" name="username" placeholder="Enter username" /><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/users'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><h1>User List:</h1><ul><li>Shelim</li><li>Ekbal</li><li>Hussain</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/create-user' && method === "POST"){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const username = parseBody.split("=")[1];
            console.log(username);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();  
        });
    }

    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    res.write('<body><h1>Welcome to nodeJs Assignment 1</h1></body>');
    res.write('</html>');
    res.end();
}

module.exports = requestHandler;
