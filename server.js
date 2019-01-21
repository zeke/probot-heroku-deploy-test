const http = require('http')
const app = new http.Server()

app.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('Hello World, again')
  res.end('\n')
})

app.listen(process.env.PORT, () => {
  console.log(`app is listening`)
})