import express from 'express'
import config from './config'
import apiRouter from '../api'

const server = express()

server.set('view engine', 'ejs')

server.use(express.static('public'))
server.use('/api', apiRouter)

server.get('/*', (req, res) => {
  res.render('index', {
    content: 'Hello First Redux App'
  })
})

server.listen(config.port, () => {
  console.info(`Express listening on port ${config.port}`)
})