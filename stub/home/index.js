const payloads = require('./payloads')

const show = {
  method: 'GET',
  path: '/home/search',
  handler: (req, reply) => reply(payloads.show)
}

module.exports = {
  show
}
