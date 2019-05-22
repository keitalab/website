const express = require('express')
const bodyParser = require('body-parser')
const debug = require('debug')('server')

const app = express()
const port = 8000


app.use(bodyParser.json())
app.use(
	bodyParser.urlencoded({
		extended: true
	})
)

// client
app.use('', express.static(__dirname))
const server = app.listen(port, () => {
	debug('start server listening')
})
