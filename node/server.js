const http = require('http')

http.createServer((req, res) => {
  console.log(req.headers['user-agent'])
  res.write('ok')
  res.end()
}).listen(8000)
